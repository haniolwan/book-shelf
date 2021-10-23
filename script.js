let books = [{
    title: 'HYPOCRITE WORLD',
    author: 'Sophia Hill',
    cover: 'book-covers/book5.png',
}, {
    title: 'BULLET JOURNALING',
    author: 'Alfredo Torres',
    cover: 'book-covers/book2.png',
}, ];

// Print all books on reload
printBooks();

// Create a new book
let create = document.getElementById('add-btn');
let cover = null;
create.onclick = function() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let cover = document.getElementById('cover').value;
    cover = cover.substring(cover.lastIndexOf("\\") + 1, cover.length);
    cover = "book-covers/" + cover;

    if (title == null || title == "", author == null || author == "", cover == null || cover == "") {
        alert("Please Fill All Required Field");
    } else {
        books.push({
            title: title,
            author: author,
            cover: cover
        });
        modal.style.display = "none";
    }
    printBooks();
}



function printBooks() {
    var bookSection = document.getElementById('content');
    var resultHtml = '';
    for (let book in books) {
        resultHtml += "<div class='book'><img class='book-cover' src=" + books[book].cover + " alt = 'book'><br>";
        resultHtml += "<div style='width:40%;margin-top:10px'><strong class='book-title'>" + books[book].title + "</strong><a class='actionbtn'><div class='dropdown' style='display:none'><div class='myDropdown' class='dropdown-content'><a href='#'>Link 1</a></div></div><i onclick='myFunction()' class='fas fa-ellipsis-v' style='float:right'></i></a></div>";
        resultHtml += " <small class='book-author'>" + "by " + books[book].author + "</small></div>";
    }
    bookSection.innerHTML = resultHtml;
}

// Count books
let count = document.getElementById('books-counter');
count.innerHTML = "All " + "(" + books.length + ")";

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Close modal 
let close = document.getElementById('close-modal');

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    // When the user clicks on close icon, close modal
close.addEventListener('click', event => {
    modal.style.display = "none";

});