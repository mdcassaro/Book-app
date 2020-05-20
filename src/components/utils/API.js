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
  }
};

AIzaSyDeDO0-rQIayjNRH7VQKCS7YSjb709ER8U



import axios from "axios";

const languages = ["JavaScript", "Python", "C", "Ruby", "Java", "PHP", "C#"];
// Export an object containing methods we'll use for accessing the random user API
export default {
  getBooks: function(query) {
    let queryUrl = "https://www.googleapis.com/books/v1/volumes?q=" + query + "&key=AIzaSyDeDO0-rQIayjNRH7VQKCS7YSjb709ER8U"
    return new Promise((resolve, reject) => {
      axios
        .get(queryUrl)
        .then(res => {
          const users = res.data;
          const results = users.map(user => {
            return {
              login: user.login,
              image: user.avatar_url,
              language: language
            };
          });
          resolve(results);
        })
        .catch(err => reject(err));
    });
  },
  // Return a Promise to simulate an async call
  getLanguagesList: function() {
    return new Promise(resolve => {
      resolve(languages);
    });
  }
};
