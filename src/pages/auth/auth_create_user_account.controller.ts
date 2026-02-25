import { AuthCreateUserAccountService } from "./auth_create_user_account.service";
import { App } from "../../configs/express";
import { ROUTE_NAMES } from "../../types/route_name";

const service = new AuthCreateUserAccountService();

export function AuthCreateUserAccountController () {
    App.post(ROUTE_NAMES.auth_login_user, async (req, res)=> {
        const response = await service.auth_login_user(req.body);
        res.json(response);
    });
}