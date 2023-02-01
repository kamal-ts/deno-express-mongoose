import {mongoose} from '../deps.js'

const Books = mongoose.Schema({
    name: String,
    author: String,
    pageCount: Number
}, {
    timestamps: true
})

export default mongoose.model('Book', Books)