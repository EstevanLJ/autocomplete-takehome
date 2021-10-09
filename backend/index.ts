import app from "./src/server";

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`API server running on ${port}`);
});
