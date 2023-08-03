import { ObjectId } from "mongodb";
import { connect } from "../../db/atlas.js";
import { Router } from 'express';
import {limitGet} from '../../limit/config.js';
// import { methodsCampus } from '../routes/campus.routes.js';
const router = Router();

router.get('/', limitGet(),async(req, res) => {
    if(!req.rateLimit) return;
    let { id } = req.body;
    let db = await connect();
    let usuario = db.collection("usuario");
    let result = await usuario.find({_id: new ObjectId(id)}).toArray();
    res.json(result);
});

export {
    router
}