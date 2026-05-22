import { ProductErrorCode } from "../../errors/error-factory/product.error_factory";
import productRepositories from "../../repositories/product/product.repositories"

const getProductServices = async (id: number) => {
    const result = await productRepositories.getProducts(id);

    if (result == null) {
        throw ProductErrorCode.notFoundProduct();
    }

    return result;
}

const getAllProductServices = async () => {
    const list = await productRepositories.getAllProduct();

    return list;
}

export = {
    getProductServices,
    getAllProductServices
};