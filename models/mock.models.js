const mongoose = require('mongoose');
const MockSchema = mongoose.Schema(
    {
        school:{
            type:String,
            required:[true, "Please enter the name of the school"]
        },
        year:{
            type:String,
            required:false
        },
        examfile:{
            file:{type: Buffer, required:true},
        }
    },
    {
        tmestamps:true
    }
)

const Mock = mongoose.model("Mock",MockSchema);
module.exports = Mock;
