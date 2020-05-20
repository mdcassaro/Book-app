import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },

  getBooks: function(query) {
    let queryUrl = "https://www.googleapis.com/books/v1/volumes?q=" + query + "&key=AIzaSyDeDO0-rQIayjNRH7VQKCS7YSjb709ER8U"
    return new Promise((resolve, reject) => {
      axios
        .get(queryUrl)
        .then(res => {
          const books = res.data.items;
          const results = books.map(book => {
            return {
              title: book.volumeInfo.title,
              authors: book.volumeInfo.authors ,
              description: book.volumeInfo.description,
              image: book.volumeInfo.imageLinks.thumbnail,
              link: book.volumeInfo.infoLink

            };
          });
          resolve(results);
        })
        .catch(err => reject(err));
    });
  },
};







