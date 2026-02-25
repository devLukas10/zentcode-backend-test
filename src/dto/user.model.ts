import { UserTypes } from "../types/user_types";
import { Model } from "sequelize";


export class UserModel extends Model<UserTypes> implements UserTypes {
    public firstname?: string;
    public lastname?: string;
    public email?: string;
    public picture_uri?: string;
    public password?: string;
    public uid?: string;
    public created_at?: number;
}