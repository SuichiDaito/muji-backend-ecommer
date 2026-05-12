import { LoginRequestDTO } from "../../models/request/authModel";
import authServices from "../../services/auth/auth.services";
import { Request, Response, NextFunction } from "express";
import ProfileDTO from "../../models/response/profile.model";
import catchAsync from "../../utils/catchAsync";

const jwt = require('jsonwebtoken');
require('dotenv').config();

const logoutController = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    let rows: number;
    let id = Number(req.params.id);

    rows = await authServices.deleteRefreshServices(id);

    return res.status(200).json({
        success: true,
        message: "Logout user successful!",
        data: []
    });
});

const getProfileController = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    let profile: ProfileDTO[];
    let id = Number(req.params.id);

    profile = await authServices.getProfileServices(id);

    return res.status(200).json({
        success: true,
        message: "Get profile user successful!",
        data: profile
    });
});


const loginController = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const body: LoginRequestDTO = req.body;
    let profile: ProfileDTO[];
    profile = await authServices.loginServices(body);

    const accessToken = jwt.sign(
        {
            "id": profile[0].id,
            "email": body.email
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '30s' }
    );

    const refreshToken = jwt.sign(
        {
            "id": profile[0].id,
            "email": body.email
        },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: '1d' }
    );

    const checkUpdate = await authServices.refreshTokenServices(refreshToken, profile[0].id);

    res.cookie('jwt', refreshToken, {
        httpOnly: true,
        secure: true,
        maxAge: 24 * 60 * 60 * 1000 // expire 1 day
    });

    return res.status(200).json({
        success: true,
        message: "Login success!",
        data: profile,
        accessToken: accessToken
    });
});

// call test connection with db
const connectController = catchAsync(async (req: Request, res: Response) => {
    const account = await authServices.connectServices();
    res.status(200).json({
        message: "Test connection success!",
        data: account
    });
})

export default {
    loginController,
    connectController,
    getProfileController,
    logoutController
};