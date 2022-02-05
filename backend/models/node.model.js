const mongoose = require('mongoose');
const noteSchema = mongoose.Schema({
    title : {
       
            type : String,
            required : true,
            minlength : 4,
            maxlength : 150
        },
        body : {
            type : String,
            required : true,
            minlength : 4,
            maxlength : 150
     

    }

},
{
    timestamps : true
} );
module.exports = mongoose.model('Note', noteSchema)