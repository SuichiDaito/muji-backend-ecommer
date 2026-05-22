import AppError from "../app-error";
import { PRODUCT_ERROR_CODE } from "../error-code/product.error_code";

export const ProductErrorCode = {
    notFoundProduct: () => new AppError(404, PRODUCT_ERROR_CODE.NOT_FOUND_PRODUCT, "Product is not found!")
} as const;