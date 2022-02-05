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
    const updateNote = (req,res)=>{
       Note.findById(req.params.id).then(note =>{
           note.title = req.body.title;
           note.body = req.body.body;
           note.save().then(()=>{
               res.json("note update");
           }).catch(err => console.log(err));

       }).catch(err =>console.log(err));
    }
    const deleteNote = (req,res)=>{
        Note.findByIdAndDelete(req.params.id).then(note =>{
            res.json("note deleted");

        }).catch(err =>console.log(err));
    }
    const noteById = (req,res)=>{
        Note.findById(req.params.id).then(note=>{
            res.json({note});
        }).catch(err => console.log(err))
    }
    


module.exports = {
    getAllNotes,
    addNote,
    updateNote,
    deleteNote,
    noteById
}