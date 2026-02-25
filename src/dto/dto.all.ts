import { DataTypes} from "sequelize";
import { db } from "../configs/database.config";
import { CandidateModel } from "./candidate.model";
import { TableNameTypes } from "../types/table_name_types";
import { UserModel } from "./user.model";


class CANDIDATE_MODEL_DTO extends CandidateModel{};
class USER_MODEL_DTO extends UserModel{};

const id = {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
};

CANDIDATE_MODEL_DTO.init({
    uid: {type: DataTypes.TEXT},
    id: id,
    picture: {type: DataTypes.TEXT},
    fullname: {type: DataTypes.TEXT},
    number: {type: DataTypes.TEXT},
    email: {type: DataTypes.TEXT},
    address: {type: DataTypes.TEXT},
    position: {type: DataTypes.TEXT},
    level: {type: DataTypes.TEXT},
    time_availabled: {type: DataTypes.TEXT},
    estimat_salary: {type: DataTypes.TEXT},
    experience_years: {type: DataTypes.TEXT},
    current_company: {type: DataTypes.TEXT},
    technlogies: {type: DataTypes.TEXT},
    likendin: {type: DataTypes.TEXT},
    github: {type: DataTypes.TEXT},
    web_porfolio: {type: DataTypes.TEXT},
    cv_uri: {type: DataTypes.TEXT},
    status: {type: DataTypes.TEXT},
    created_at: {type: DataTypes.DECIMAL},
}, {
    sequelize: db,
    tableName: TableNameTypes.candidates,
    timestamps: false,
});

USER_MODEL_DTO.init({
    uid: {type: DataTypes.TEXT},
    firstname: {type: DataTypes.TEXT},
    lastname: {type: DataTypes.TEXT},
    email: {type: DataTypes.TEXT},
    picture_uri: {type: DataTypes.TEXT},
    password: {type: DataTypes.TEXT},
    created_at: {type: DataTypes.DECIMAL},
}, {
    sequelize: db,
    tableName: TableNameTypes.user,
    timestamps: false,
});

export {
    CANDIDATE_MODEL_DTO,
    USER_MODEL_DTO
}