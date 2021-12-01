const express = require('express');
 
const router = express.Router()

const users = require('../model/user.model')

const upload = require('../middleware/upload')

router.get("", async (req, res) => {
    try{
   const user = await users.find().lean().exec()
     res.status(201).send(user)

    }catch(err){
        return res.status(500).json({message: err.message,failed:"status failed"})
    }
})

router.post("",upload.single("profile"), async (req, res) => {

try{

    const user = await users.create({
       first_name: req.body.first_name,
        last_name: req.body.last_name,
        profile_pic:req.file.path

    })

    return res.status(201).json({user})

}catch(err){
return res.status(500).json({message: err.message,failed:"status failed"})
}

})


module.exports =router