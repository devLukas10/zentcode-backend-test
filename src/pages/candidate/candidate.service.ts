
import { CANDIDATE_MODEL_DTO } from "../../dto/dto.all";
import { CandidatePersonalDataTypes } from "../../types/candidate_personal_data_types";



export class CandidateService {
    private model = CANDIDATE_MODEL_DTO;

    async candidate_create(data: CandidatePersonalDataTypes, file: any): Promise<any> {
        const dataParsed = JSON.parse(`${data}`) as CandidatePersonalDataTypes;
        var updata = dataParsed;

        if (!updata.id && !updata.uid) {
            updata = {...updata, uid: crypto.randomUUID()};
        }

        if(file && file.mimetype.includes('pdf')){
            const cv_uri = `/documents/medias/${file.filename}`;
            updata = {...updata, cv_uri: cv_uri}
        }
        else if(file) {
            const picture_uri = `/documents/medias/${file.filename}`;
            updata = {...updata, picture: picture_uri as any}
        }

        await this.model.upsert(updata);
        const acc = await this.model.findOne({where: {uid: updata.uid}})

        return acc?.dataValues; 
    }

    async candidate_find_all(): Promise<CandidatePersonalDataTypes[]> {
        const datas = await this.model.findAll({order:[['id', 'DESC']]});
        return datas.map(ls => ls.get() );
    }

    async candidate_find_one(args: string): Promise<any> {
        const datas = await this.model.findOne({where: {uid: args}});
        return datas?.dataValues;
    }

    async candidate_destroyOne(uid: string): Promise<void> {
        await this.model.destroy({where: {uid: uid}});
    }

    async candidate_updateOne(data: CandidatePersonalDataTypes): Promise<void>{
        await this.model.update(data, {where: {uid: data.uid}}); 
    }

}