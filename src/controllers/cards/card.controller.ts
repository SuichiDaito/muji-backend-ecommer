import { Request, NextFunction, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import cardServices from "../../services/cards/cards.services";


const getCardController = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    let id = Number(req.params.id);
    console.log("look found the card with id: ", id);
    const result = await cardServices.getCardServices(id);

    return res.status(200).json({
        success: true,
        message: "Get the information card",
        data: result
    });
});

const getAllCardController = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const result = await cardServices.getAllCardServices();

    return res.status(200).json({
        success: true,
        message: "Get the list card",
        data: result
    });
});

export = {
    getCardController, getAllCardController
}