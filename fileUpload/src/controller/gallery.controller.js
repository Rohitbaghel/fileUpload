const express = require('express');
 
const router = express.Router()

const gallery = require('../model/gallery.model')

const upload = require('../middleware/upload')

router.get("", async (req, res) => {
    try{
   const gallery_photo = await gallery.find().lean().exec()
     res.status(201).send(gallery_photo)

    }catch(err){
        return res.status(500).json({message: err.message,failed:"status failed"})
    }
})

router.post("",upload.any("galleries"), async (req, res) => {

try{
const filepath = req.files.map(file => file.path)
    const gallery_photo = await gallery.create({
      galleryphoto:filepath,
      userId:req.body.userId
    })

    return res.status(201).json({gallery_photo})

}catch(err){
return res.status(500).json({message: err.message,failed:"status failed"})
}

})


module.exports =router