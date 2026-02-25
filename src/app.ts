import { AppModule } from './app.module';
import {App,} from './configs/express';
import { db } from './configs/database.config';

import './dto/dto.all';

const {modules} = new AppModule();

modules.forEach( router => router() );


const PORT  = process.env['PORT'] || 5000;

db.sync({force: false}).then(() => {
    console.log('\n\t**** 📦 Database is connected...');
    App.listen(PORT, ()=> console.log(`\n\t**** 🚀 SERVER IS RUNNING AT ${PORT}`));
})
.catch((err) => console.log(err) )