import { CardErrorCode } from "../../errors/error-factory/cards.error_factory";
import cardsRepositories from "../../repositories/cards/cards.repositories"

const getCardServices = async (id: number) => {
    const result = await cardsRepositories.getCardRepositories(id);

    if (result == null) {
        throw CardErrorCode.notFoundCard();
    }

    return result;
}

const getAllCardServices = async () => {
    const result = await cardsRepositories.getAllCardRepositories();

    return result;
}

export = { getCardServices, getAllCardServices }