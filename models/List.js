const ListSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String,
    },
    genre: {
        type: String,
    },
    content: {
        type: Array,
    }
  
},{ timestamps: true} 
);

module.export = mongoose.model('List', ListSchema)