import AppError from "../app-error"
import { CARDS_ERROR_CODE } from "../error-code/cards.error_code"

export const CardErrorCode = {
    notFoundCard: () => new AppError(400, CARDS_ERROR_CODE.NOT_FOUND_CARD, "Card is not found!"),
} as const;