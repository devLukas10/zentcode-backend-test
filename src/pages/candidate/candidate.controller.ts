import { App } from "../../configs/express";
import { authMiddlewareToPost, authMiddleware } from "../../utils/auth.mifdleware";
import { ROUTE_NAMES } from "../../types/route_name";
import { CandidateService } from "./candidate.service";
import { updloadPrivateDocs } from "../../configs/multer";

const service = new CandidateService();

export const CandidateController = () => {

    App.post(ROUTE_NAMES.candidate_create, authMiddlewareToPost, updloadPrivateDocs.single('documents'), async (req, res)=> {
        try{
            const response = await service.candidate_create(req.body.data, req.file);
            res.json(response);
        }catch(err){
            console.log(err)
            res.status(405).json("INTERNAL_ERROR_TRY_LATER")
        }
    });


    App.post(ROUTE_NAMES.candidate_find_one, authMiddlewareToPost, async (req, res)=> {
        try{
            const {uid} = req.body;
            const response = await service.candidate_find_one(uid);
            res.json(response);
        }catch(err){
            console.log(err)
            res.status(405).json("INTERNAL_ERROR_TRY_LATER")
        }
    });

    App.get(ROUTE_NAMES.candidate_find_all, authMiddleware, async (_, res)=> {
        try{
            const response = await service.candidate_find_all();
            res.json(response);
        }catch(err){
            res.status(405).json("INTERNAL_ERROR_TRY_LATER")
        }
    });

    App.post(ROUTE_NAMES.candidate_destroyOne, authMiddlewareToPost, async (req, res)=> {
        try{
            const {uid} = req.body;
            const response = await service.candidate_destroyOne(uid);
            res.json(response);
        }catch(err){
            res.status(405).json("INTERNAL_ERROR_TRY_LATER")
        }
    });

    App.post(ROUTE_NAMES.candidate_updateOne, authMiddlewareToPost, async (req, res)=> {
        try{
            const response = await service.candidate_updateOne(req.body);
            res.json(response);
        }catch(err){
            res.status(405).json("INTERNAL_ERROR_TRY_LATER")
        }
    });

}