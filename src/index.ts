import { createApp } from "./app";
import mongoose from 'mongoose';

const app = createApp()

const PROT = 5000 ;
const URL = process.env.DATABASE_URL;

mongoose.connect(URL || "")
.then(() => {
        
    app.listen(PROT , () => {
        console.log('db connected');
        console.log('server running');        
    });

}).catch(() => console.log('error , conection failed')) 