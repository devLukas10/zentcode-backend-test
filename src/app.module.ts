import { App_controler } from "./app.controller"
import { AuthCreateUserAccountController } from "./pages/auth/auth_create_user_account.controller";
import { CandidateController } from "./pages/candidate/candidate.controller";
import { UsersController } from "./pages/users/Users.controller";


export class AppModule {
    modules = [
        /// Add ALL CONTROLLERS HERE OR ROUTER

        App_controler,

        /// AUTH CONTROLLERS
        AuthCreateUserAccountController,

        /// USER CONTROLLER
        UsersController,

        /// CANDIDATE CONTROLLER
        CandidateController,
    ];
}
