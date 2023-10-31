const Book = require('../models/Book');

exports.getAllBooks = async (req, res) => {
    const books = await Book.find().then(data => {
        return res.status(200).json({
            status:true,
            msg:"All Books",data
        })
      }).catch((err) => {
        return res.status(500).json({
            status:false,
            msg:"something went wrong"
        })
    })
}

exports.getBook = async (req, res) => {
    const id = req.params.id;
    const book = await Book.findById(id).then(data => {
        if (!data) {
          return res.status(404).json({
            message: "Cannot get the Book with id=" + id
          });
        } else
            return res.status(200).json({
                status:true,
                message:data
            });
      }).catch(err => {
        return res.status(500).json({
          message: "Error retrieving a book with id=" + id,err
        });
      });
}

exports.createBook = async (req, res) => {
    const book  = await Book(req.body).save().then(data => {
        return res.status(201).json({
            status:true,
            msg:"The book was created sucessfully",data
        })
      }).catch((err) => {
        return res.status(400).json({
            status:false,
            msg:"something went wrong"
        })
    })
}

exports.updateBook = async (req, res) => {
    const id = req.params.id;
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    }).then(data => {
        if (!data) {
          return res.status(404).json({
            message: "Cannot update Book with id=" + id
          });
        } else
            return res.status(201).json({
                status:true,
                message: "The Book was updated successfully.",data
            });
      }).catch(err => {
        return res.status(500).json({
          message: "Error updating book with id=" + id,err
        });
      });
}

exports.deleteBook = async (req, res) => {
    const id = req.params.id;
    const removebook = Book.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
            return res.status(404).json({
                message: "Cannot delete the book with id=" + id
            });
            } else {
            return res.status(200).json({
                status:true,
                message: "The Book was deleted successfully!",data
            });
            }
        })
        .catch(err => {
            return res.status(500).json({
            message: "Could not delete the book with id=" + id
            });
        });
}

