import express from 'express';
import { limitGet} from '../limit/config.js';
import { router as Campus } from '../src/middlewares/campus.js';
const app = express();
app.use(express.json());

app.use('/campus',limitGet(), Campus);

export default app;