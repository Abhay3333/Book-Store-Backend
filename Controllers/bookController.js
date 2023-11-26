const Books = require('../Modals/bookModal')

//Add new Books
const addBook = async(req,res)=>{
    try {
        if(!req.body.title || !req.body.author || !req.body.publishYear){
            return res.status(400).send({message:'Send all required fields: title, author, publishYear'})
        }

        const newBook = {
            title:req.body.title,
            author:req.body.author,
            publishYear:req.body.publishYear,
        }

        const book = await Books.create(newBook)

        return res.status(201).send(book)
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message})
    }
}

//Get all books
const getAllBooks = async(req,res)=>{
try {
    const books = await Books.find({})

    return res.status(200).json({count: books.length,
    data:books,})
} catch (error) {
    console.log(error.message);
    res.status(500).send({message:error.message})
}
}


//Get Books by ID
const getBookById = async(req,res)=>{
    try {
        const {id}=req.params
        const book = await Books.findById(id)

        return res.status(200).json(book)
    } catch (error) {
        console.log(error.message)
        res.status(500).send({message:error.message})
    }
}

//Update a book 
const updateBook = async(req,res)=>{
    try {
        if( !req.body.title || !req.body.author || !req.body.publishYear){
            return res.status(400).send({message:'Send all required field :title,author,publishYear'})
        }
        const {id}= req.params
        const result = await Books.findByIdAndUpdate(id,req.body)
        if(!result){
            return res.status(404).json({message:'Book not found '})
        }
        return res.status(200).send({message:'Updated'})
    } catch (error) {
        console.log(error)
        res.status(500).send({message:error.message})
    }
}

//Delete
const deleteBook = async(req,res)=>{
    try {
        const {id}=req.params
        const result = await Books.findByIdAndDelete(id)
        if(!result){
            return res.status(400).json({message:'Book not found'})
        }
        return res.status(200).send({message:'Deleted'})
    } catch (error) {
        console.log(error.message)
        res.status(500).send({message:error.message})
    }
}

module.exports = {addBook,getAllBooks,getBookById,updateBook,deleteBook}