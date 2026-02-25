import { USER_MODEL_DTO } from "../../dto/dto.all";
import { UserTypes } from "../../types/user_types";
import { _generateToken } from "../../utils/auth.mifdleware";




export class AuthCreateUserAccountService {
    private model = USER_MODEL_DTO;

    async auth_login_user(data: UserTypes): Promise<any> {
        const acc = await this.model.findOne({where: {email: data.email}});

        if (acc?.dataValues)  return _generateToken(acc.dataValues);

        const datas = {
            ...data,
            uid: crypto.randomUUID(),
            created_at: Date.now()
        }

        await this.model.create(datas);

        return _generateToken(datas);
    }
}