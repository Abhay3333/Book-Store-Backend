const express = require('express')
const router = express.Router()
const {addBook, getAllBooks, getBookById, updateBook, deleteBook} = require('../Controllers/bookController')

router.post('/add',addBook)
router.get('/get',getAllBooks)
router.get('/get/:id',getBookById)
router.put('/update/:id',updateBook)
router.delete('/delete/:id',deleteBook)

module.exports=router;

