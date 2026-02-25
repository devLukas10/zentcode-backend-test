import { App } from "../../configs/express";
import { UserService } from "./users.service";
import { authMiddleware } from "../../utils/auth.mifdleware";
import { ROUTE_NAMES } from "../../types/route_name";

const service = new UserService();

export const UsersController = () => {

    App.get(ROUTE_NAMES.user_find_account, authMiddleware, async (req, res): Promise<any> => {
        try{
            const response = await service.user_find_account(req.body.email);

            if (response === 302) return res.status(302).json('USER_ACCOUNT_NOT_FOUND')
            
            res.json(response);
            
        } catch {
            res.status(405).json("INTERNAL_ERROR_TRY_LATER")
        }
    });

}