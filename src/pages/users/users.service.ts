import { USER_MODEL_DTO } from "../../dto/dto.all";

export class UserService {
    private model = USER_MODEL_DTO;

    async user_find_account(email: string): Promise<any> {
        
        const response = await this.model.findOne({where: {email: email}});

        if (!response?.dataValues) return 302;

        return response.dataValues;
    }
}