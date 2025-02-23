const express = require("express");
const path = require("path");

const app = express();
const PORT = 4000;


app.use(express.static(path.join(__dirname, "public")));

// for the first page
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>First Page</title>
       
        <link rel="stylesheet" href="/style.css">
      </head>
      <body>

      <h1>EC2</h1>
        <div class="container">
        
          <img src="/image.png" alt="Sample Image" class="image">
          <br><br>
          <button class="button" onclick="window.location.href='/second'">Mohataseem_Khan</button>
        </div>
      </body>
    </html>
  `);
});

// it will redirect to second page
app.get("/second", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "second.html"));
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
