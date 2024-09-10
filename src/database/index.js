const mongoose = require("mongoose");
require('dotenv').config();



const dbConnect=()=>{
    const connectionIns = mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true, 
        useUnifiedTopology: true
    })
    
    
    .then(()=>{console.log(`dataBAse Connection successful `);

            
    })
    .catch((err)=>{
        console.log("Issue in database connection");
        console.log(err);
        process.exit(1)
        
        
    })
}

module.exports = dbConnect;