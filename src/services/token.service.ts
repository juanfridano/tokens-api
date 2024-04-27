import { AppDataSource } from "../persistence/data-source";
import { TokenCreateRequest } from "../api/models/token.dto";
import { Token } from "../persistence/models/Token";

export class TokenService {
    static async create(tokenDTO: TokenCreateRequest) : Promise<Token> {
        const token: Token = new Token()
        token.name = tokenDTO.name
        token.ticker = tokenDTO.ticker
        token.description = tokenDTO.description

        const tokenRepository = AppDataSource.getRepository(Token)
        return await tokenRepository.save(token)   
    }
    static async findAll(tokenDTO: TokenCreateRequest) : Promise<Token[]> {
        const tokenRepository = AppDataSource.getRepository(Token)
        return await tokenRepository.find()
    }
    static async findOneById(id: number) : Promise<Token | undefined> {
        const tokenRepository = AppDataSource.getRepository(Token)
        const tokens = await tokenRepository.findBy({id})
        console.log({tokens})
        if (tokens.length === 1) {
            return tokens[0]
        } else {
            return undefined
        }
    }
}