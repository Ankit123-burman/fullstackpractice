const express = require('express')
const app = express()
const cors = require('cors')
const connectDB = require('../config/DB')
const noteModel = require('../model/note.model')

require('dotenv').config()
app.use(cors())

connectDB()

app.use(express.json())

//create
app.post('/api/note',async (req,res)=>{
    try{
        const {title,description} = req.body

        const note = await noteModel.create({
            title,
            description
        })

        res.status(201).json({message: 'data sucsessfully sent',note})
    }
    catch(err){
        res.status(500).json({message:'somthing went wrong',
            err: err.message})
    }
})

//fetch
app.get('/api/note', async (req,res)=>{

    try{
      const note =  await noteModel.find()
      res.status(201).json({message:"note featched successfully",
        note:note})
      }catch(err){
       res.status(500).json({message:"somthing went wrong",
        err:err
    })
      }
})

//delete
app.delete('/api/note/:id',async(req,res)=>{
    const id = req.params.id
    
    await noteModel.findByIdAndDelete(id)

    res.status(200).json({message:"note deleted"})
    
})

//edit
app.patch('/api/note/:id',async(req,res)=>{
    const id = req.params.id
    const {description} = req.body

    await noteModel.findByIdAndUpdate(id,{description})

    res.status(201).json({message:'updated sucssesfully'})
})


module.exports = app