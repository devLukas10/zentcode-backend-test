import { AppService } from './app.service';
import {App} from './configs/express';

const appService = new AppService();

export const App_controler = () => {
    // gets
    App.get('/', (_, res) : any  => {
        return res.send(appService.helloword());
    });
}