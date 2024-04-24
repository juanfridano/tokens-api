import * as express from "express";
import { TokenController } from "./controllers/token.controller";

export const router = express.Router();

router.get('/tokens', TokenController.getAll)
router.post('/tokens', TokenController.create)
router.get('/tokens/:id', TokenController.findOneById)

