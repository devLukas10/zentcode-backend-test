import { Model } from "sequelize";
import { CandidatePersonalDataTypes } from "../types/candidate_personal_data_types";

export class CandidateModel extends Model<CandidatePersonalDataTypes> implements CandidatePersonalDataTypes {
    public uid?: string;
    public id?: number;
    public picture?: null;
    public fullname?: string;
    public number?: string;
    public email?: string;
    public address?: string;
    public position?: string;
    public level?: string;
    public time_availabled?: string;
    public estimat_salary?: string;
    public experience_years?: string;
    public current_company?: string;
    public technlogies?: string;
    public likendin?: string;
    public github?: string;
    public web_porfolio?: string;
    public cv_uri?: string;
    public status?: string;
    public created_at?: number;
}