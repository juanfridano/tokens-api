export interface TokenCreateRequest {
    name: string
    ticker: string
    description: string
}

export const validateTokenCreateRequest = (request: TokenCreateRequest): string[] => {
    const errors: string[] = []
    if (!request.name || request.name.length == 0) errors.push("name is required")
    if (!request.ticker || request.ticker.length == 0) errors.push("ticker is required")
    if (!request.description || request.description.length == 0) errors.push("description is required")

    return errors
}