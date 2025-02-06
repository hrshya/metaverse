import express from 'express';
import { router } from './Routes/v1';
import cors from "cors"
import client from '@repo/db/client'

const app = express();
app.use(express.json());
app.use(cors())

app.use("/api/v1", router)

app.listen(process.env.PORT || 3000)
