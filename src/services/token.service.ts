import { AppDataSource } from "../persistence/data-source";
import { TokenCreateRequest } from "../api/models/token.dto";
import { Token } from "../persistence/models/Token";

export class TokenService {
    static async create(tokenDTO: TokenCreateRequest) : Promise<Token> {
        const token: Token = new Token()
        token.name = tokenDTO.name
        token.ticker = tokenDTO.ticker
        token.description = tokenDTO.description

        const movieRepository = AppDataSource.getRepository(Token)
        return await movieRepository.save(token)        
    }
}