
//JSON IS FOR STORING DATA EXCHANGING OVER A NETWORK
const { json } = require('express');
const mongoose=require('mongoose');
const connectDB=async()=>{
        try{
              //mongodb connection string
              const con=await mongoose.connect(process.env.MONGO_URI,{
                //WITH this warnings will be stopped
                useNewUrlParser:true,
                useUnifiedTopology:true,
               

              })

              console.log(`MongoDB connected:${con.connection.host}`)
        }catch(err){
            console.log(err);
            process.exit(1);
        }
}

module.exports=connectDB