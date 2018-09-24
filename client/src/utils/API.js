import axios from "axios";

export default {
    // Gets all articles
    getBooks: function () {
        return axios.get("/api/books");
    },
    // Gets the article with the given id
    getBook: function (id) {
        return axios.get("/api/books/" + id);
    },
    // Deletes the article with the given id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },
    // Saves a article to the database
    saveBook: function (bookData) {
        return axios.post("/api/books", bookData);
    }
};

