import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config();

const App = express()

App.use(cors({
  origin: [
    "http://localhost:3000",
    "*",
  ],
  methods: ['GET', 'POST'],
}));

App.use(express.json());
App.use(express.static('./src/public'));


export { App };