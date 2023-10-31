const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');
var{mongo} = require('./config/db')
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api/books', bookRoutes);

app.listen(PORT,() => {
  console.log("Server is running on port",PORT);
});
