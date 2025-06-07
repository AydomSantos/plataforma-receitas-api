require('dotenv').config();
const app = require('./app');
const port = process.env.PORT || 3000;
const ConnectDB = require('./models/Connect');

ConnectDB.connect();

app.listen(port, () => {
  console.log(`Server is http://localhost:${port}`);
})