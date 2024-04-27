import { Request, Response } from "express";
import { AppDataSource } from "../../persistence/data-source";
import { Token } from "../../persistence/models/Token";
import { TokenCreateRequest, validateTokenCreateRequest } from "../models/token.dto";
import { TokenService } from "../../services/token.service";


export class TokenController {
    static async getAll(request: Request, response: Response) {
        return response.status(200).json(TokenService.findAll)
    }

    static async create(request: Request, response: Response) {
        const payload = request.body;
        console.log("Create request: ", {payload})
        const requestErrors = validateTokenCreateRequest(payload)
      
        if (requestErrors.length != 0) return response.status(400).json(requestErrors)        
        
        let token: Token
        
        try {
           token = await TokenService.create(payload)  
        } catch (error: any) {
          return response.status(500).json(error);
        }
      
        return response.status(201).json(token);
    }

    static async findOneById(request: Request, response: Response) {
        const { id } = request.params
        if (!id) return response.status(400).json("missing id")
          // TODO move to service
        const tokenRepository = AppDataSource.getRepository(Token);
        const tokens = await tokenRepository.find();
  
        let token: Token
        
        try {
           token = await TokenService.findOneById(parseInt(id))
        } catch (error: any) {
          return response.status(500).json(error);
        }
      
        return response.status(201).json(token);
    }
}