/* eslint-disable @typescript-eslint/no-require-imports */
const { createServer } = require("http");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const next = require("next");

// Ensure working directory is strictly anchored to this project root
const appDir = path.resolve(__dirname);
if (process.cwd() !== appDir) {
  try {
    process.chdir(appDir);
  } catch (err) {
    console.warn("Could not change working directory to appDir:", err);
  }
}

const dev = process.env.NODE_ENV !== "production";
const hostname = process.env.HOSTNAME || "0.0.0.0";
const port = parseInt(process.env.PORT || "3000", 10);

// Ensure the production build exists before the application starts
const buildIdPath = path.join(appDir, ".next", "BUILD_ID");
if (!dev && !fs.existsSync(buildIdPath)) {
  console.log("> Production build not found in .next directory. Running 'next build' before application starts...");
  try {
    execSync("npx next build", {
      cwd: appDir,
      stdio: "inherit",
      env: { ...process.env, NODE_ENV: "production" },
    });
    console.log("> Production build completed successfully.");
  } catch (err) {
    console.error("> Failed to generate production build in .next directory:", err);
    process.exit(1);
  }
}

const app = next({ dev, hostname, port, dir: appDir });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    createServer(async (req, res) => {
      try {
        const parsedUrl = new URL(req.url, `http://${req.headers.host || "localhost"}`);
        await handle(req, res, parsedUrl);
      } catch (err) {
        console.error("Error occurred handling", req.url, err);
        res.statusCode = 500;
        res.end("Internal Server Error");
      }
    })
      .once("error", (err) => {
        console.error("Server initialization error:", err);
        process.exit(1);
      })
      .listen(port, () => {
        console.log(`> PrimeSpin server listening on http://${hostname}:${port}`);
      });
  })
  .catch((err) => {
    console.error("Error preparing Next.js application:", err);
    process.exit(1);
  });
