import { Request, Response } from "express";
import { AppDataSource } from "../../persistence/data-source";
import { Token } from "../../persistence/models/Token";
import { validateTokenCreateRequest } from "../models/token.dto";
import { TokenService } from "../../services/token.service";

/**
 * Handle REST request on the Token domain.
 */
export class TokenController {
    static async getAll(request: Request, response: Response) {
      const tokens = await TokenService.findAll()
      return response.status(200).json(tokens)
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
          return response.status(500).json(error)
        }
      
        return response.status(201).json(token)
    }

    static async findOneById(request: Request, response: Response) {
        const { id } = request.params
        if (!id) return response.status(400).json("missing id")
  
        let token: Token | null
        
        try {
           token = await TokenService.findOneById(parseInt(id))
        } catch (error: any) {
          return response.status(500).json(error)
        }
      
        return token ? 
          response.status(200).json(token) : 
          response.status(404).json({message: `Token with id ${id} not found`})
    }
}