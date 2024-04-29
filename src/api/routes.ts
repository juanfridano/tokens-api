import * as express from "express";
import { TokenController } from "./controllers/token.controller";

/**
 * API Definition
 * kept separate from Controller to add readability once AUTH is implemented 
 */
export const router = express.Router();

router.get('/tokens', TokenController.getAll)
router.post('/tokens', TokenController.create)
router.get('/tokens/:id', TokenController.findOneById)

