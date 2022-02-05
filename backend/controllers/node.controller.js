const Note = require('../models/node.model');

const getAllNotes = (req,res)=>{
  
        Note.find((err,notes)=>{
            if(err || !notes){
                return res.json({
                    error : 'NO DATA'
                })
            }
            res.json({notes})
        }).select('title body created')

    }
    const addNote = (req,res)=>{
       const title = req.body.title
       const body = req.body.body;
       const newNote = new Note({title , body});
       newNote.save().then(()=>{
           res.json('note added');
       }).catch(err => console.log(err));

        
    }
    
    


module.exports = {
    getAllNotes,
    addNote
}