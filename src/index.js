const connectDB = require('./database')
const app = require('./app')
require('dotenv').config();

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is runing at port : ${process.env.PORT}`);
        
    })
})
.catch((err)=>{
     console.log("mongoDB connection failed !!!!!", err);
       
})


