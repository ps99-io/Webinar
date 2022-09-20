const mongoose = require('mongoose');

require('./dbConn');
const Blog = require('./blogSchema');

const blogsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
});

const Blog = mongoose.model('blogs', blogsSchema);


module.exports.main = async (args) => {
    
    const {id} = args;
    try {
        const blogs = await Blog.findByIdAndDelete(id);
        return {
            statusCode: 200,
            body : {
                message: "Deleted successfully"
            }
        };
        
    }catch (err) {
        console.log(err);
        return{
            statusCode: 500,
            body: err.message
        }
    }
}