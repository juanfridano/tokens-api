export interface TokenCreateRequest {
    name: string
    ticker: string
    description: string
}

export const validateTokenCreateRequest = (object: TokenCreateRequest): string[] => {
    const errors: string[] = []
    if (object.name.length == 0) errors.push("name must not be empty")
    if (object.ticker.length == 0) errors.push("ticker must not be empty")
    if (object.description.length == 0) errors.push("description must not be empty")

    return errors
}