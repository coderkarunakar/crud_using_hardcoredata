var Userdb=require('../model/model');


                        //CREATING PURPOSE(POST)
//create and save new user
exports.create=(req,res)=>{

    //validate the request(if the user makes post req without body am going to exit)
    if(!req.body){
        res.status(400).send({message:"Content can not be empty!"})
        return;
    }

    //new user details will be stored with this only
    const user=new Userdb({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status

    })

    //saving all the details of the user in the database(going to save with the save method)
    user
        .save(user)
        .then(data=>{
            //return the save data to the user
            res.send(data)
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message||"some error occured while creating a crete operation"
            })
        })

}

                                        //FINDING PURPOSE I.E READ (GET )
//retrive and return all users/retrieve and return a single user
exports.find=(req,res)=>{
    //reading the data from the database(first get the data and return as a response)
Userdb.find()
.then(user=>{
  res.send(user)
})
.catch(err=>{
res.status(500).send({messge:err.message||"Error while retriving the user information"})
})
}

                                //UPDATING PURPOSE (PUT)
//update a new identified user by user id
exports.update=(req,res)=>{
    if(!req.body){
        return res
        .status(400)
        .send({message:"Data to update cannot be empty"})
    }
    //here we are doing with the id parameter even query we can use
        const id=req.params.id;
        Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
        .then(data=>{
            if(!data){
                res.status(400).send({message:`Cannot update user with $(id). Maybe user not found`})
            }else{
                    res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message:"Error Update user information"})
        })
}



                                //DELETING PURPOSE(DELETE OPERATION)

exports.delete = (req, res)=>{
    const id = req.params.id;   

    Userdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "User was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}
