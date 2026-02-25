import multer from 'multer';
import crypto from 'crypto';
import path from 'path';

const storage_private_docs = multer.diskStorage({
    destination: './src/public/documents/medias/',
    filename: (_, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, `${crypto.randomUUID()}${ext}`);
    }
});



export const updloadPrivateDocs = multer({storage: storage_private_docs});
