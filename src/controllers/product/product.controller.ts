import { NextFunction } from "express";
import catchAsync from "../../utils/catchAsync";
import { Request, Response } from "express";
import productServices from "../../services/product/product.services";

const getProductController = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    let id = Number(req.params.id);
    const result = await productServices.getProductServices(id);
    console.log("look found the product item");

    return res.status(200).json({
        success: true,
        message: "Get the information product",
        data: result
    });
});

const getAllProductController = catchAsync(async (req: Request, res: Response) => {
    const result = await productServices.getAllProductServices();

    return res.status(200).json({
        success: true,
        message: "Get all list product",
        data: result
    })
})

export = { getProductController, getAllProductController }