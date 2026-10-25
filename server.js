const { createServer } = require("http");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const hostname = process.env.HOSTNAME || "0.0.0.0";
const port = parseInt(process.env.PORT || "3000", 10);

const app = next({ dev, hostname, port });
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
