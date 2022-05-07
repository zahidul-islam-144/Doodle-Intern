require("dotenv").config();
const app = require("./app");
const PORT = process.env.PORT;




/*
  -------- server status --------
 */

// local server: http://localhost:8008/
app.listen(PORT, () => {
  console.log("=> Server is running on : http://localhost:"+PORT);
});

// Confirm server conenction  section
app.get("/server", (req, res) => {
  res.json({
    success: true,
    message: "Connected with the server successfully...status: 200 OK",
  });
});
