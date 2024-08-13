const mongoose = require('mongoose');
const MockSchema = mongoose.Schema(
    {
        school:{
            type:String,
            required:[true, "Please enter the name of the school"]
        },
        
        exampdf:{
            type: String,
            required:true
        },
        name:{
            type: String,
            required:true
        }
    },
    {
        tmestamps:true
    }
)

const Mock = mongoose.model("Mock",MockSchema);
module.exports = Mock;
