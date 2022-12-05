//Get the UI elements
let form = document.querySelector('#bookform');
let booklist = document.querySelector('#book-list');

//Book Class
class Book {

    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

}

// UI class
class UI {

    static addToBooklist(book) {
        let list = document.querySelector('#book-list');
        let row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class='delete'>X</td>`

        list.append(row)
    }

    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';

    }

    static showAlert(message, className) {
        let div = document.createElement('div');

        div.className = `alert ${className}`;
        div.append(document.createTextNode(message));
        let container = document.querySelector(".container");
        let form = document.querySelector("#bookform")

        container.insertBefore(div, form);

        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    static deleteFromBook(target) {
        if (target.hasAttribute('href')) {
            target.parentElement.parentElement.remove();
            BackEndStorage.removeBook(target.parentElement.previousElementSibling.textContent);
            UI.showAlert("Book Removed!", 'warning');
        }

    }

}


// Local Storage Class


class BackEndStorage {

    static getBooks(book) {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static addBook(book) {
        let books = BackEndStorage.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static displayBooks() {
        let books = BackEndStorage.getBooks();

        books.forEach(book => {
            UI.addToBooklist(book);
        });

    }

    static removeBook(isbn) {
        let books = BackEndStorage.getBooks();

        books.forEach((book, index) => {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }

}




// Add EventListener
form.addEventListener('submit', newBook);
booklist.addEventListener('click', deleteBook);
document.addEventListener('DOMContentLoaded', BackEndStorage.displayBooks());



//defines Funcions


function newBook(e) {
    e.preventDefault();

    let title = document.querySelector('#title').value.trim(),
        author = document.querySelector('#author').value.trim(),
        isbn = document.querySelector('#isbn').value.trim();

    if (title === '' || author === '' || isbn === '') {
        UI.showAlert("Please Fill All the Fields", "error");
    } else {

        let book = new Book(title, author, isbn);

        UI.addToBooklist(book);
        UI.clearFields();
        UI.showAlert("Book Added!", "success");
        BackEndStorage.addBook(book);
    }

}

function deleteBook(e) {
    UI.deleteFromBook(e.target);
    e.preventDefault();
}

// Storage Funcation

