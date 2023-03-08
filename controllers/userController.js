const User = require('../models/User')
const usertRoutes=require('../routes/userRoutes')
/**
 * @route POST /api/contacts
 * @desc get all  users
 */
const controller={
getContacts:(req,res)=>{
    res.status(201).json({message: `get contacts`})
},

/**
 * @route POST /api/contacts
 * @desc Create new User
 */
saveContact:async(req,res)=>{
    if (!req.body.name) 
    {   res.status(400);
        throw new Error("Name is required");   
    }
    const {name,email,age,passeword}=req.body
    const user= await User.create({name,email,age,passeword});
    res.status(201).json(user);
},

/**
 * @route PUT /api/contacts/:id
 *  @desc Update User
 */
updateContact:async(req,res)=>{
    const user = await User.findById(req.params.id); 
       res.status(200).json({message: `Contact ${req.params.id} updated`})
},
/**
 * @route DELETE /api/contacts/:id
 * @desc Delete User 
 */
deleteContact:(req,res)=>{
    res.status(200).json({message: `Contact ${req.params.id} deleted`})
}
}

module.exports=controller