const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const mainRouter = require('./routes/index');

const dbConnection = require('./config/database');

const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use('/', mainRouter);


dbConnection.sync({ alter: true })
  .then(() => {
    console.log(`Database connected`);

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(`Unable to connect to databse: ${error}`));
