import db from './db/connection.js';
import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import chalk from 'chalk';
import routes from './routes/index.js';

const app= express();
const PORT= process.env.PORT || 3000;


app.use(express.json()); //Middleware
app.use(cors());
app.use(logger("dev"));

app.use("/", routes);


db.on("connected", ()=> {
    console.clear();
    console.log(chalk.blue("Connected to database"));
    app.listen(PORT, () => {
        console.log(
          `See Champion data at ${PORT}`
        );
      });
    });

  