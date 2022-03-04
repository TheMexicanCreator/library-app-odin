//Elements selecting
const book = document.querySelector("#book-name");
const author = document.querySelector("#author-name");
const year = document.querySelector("#published-year");
const submit = document.querySelector(".btn");
const list = document.querySelector("#book-list");

/*For test event only
const heading = document.querySelector("#heading");
heading.innerText = "I'm working";
*/

//Add EventListener
submit.addEventListener('click', function(e) {
    e.preventDefault();
    if (book.value === '' && author.value === '' && year.value === '') {
        alert("Please fill all the input boxes");
    } else if (book.value === '') {
        alert("Please fill Book Name");
    } else if (author.value === '') {
        alert("Please fill Author Name");
    } else if (year.value === '') {
        alert("Please fill Published Year");
    } else {
        //Row Creation
        const newRow = document.createElement('tr');
        list.appendChild(newRow);
        //New Book Creation
        const newBookColumn = document.createElement('th');
        newRow.appendChild(newBookColumn);
        newBookColumn.innerText = book.value;
        //New Author Creation
        const newAuthorColumn = document.createElement('th');
        newRow.appendChild(newAuthorColumn);
        newAuthorColumn.innerText = author.value;
        //New Year Creation
        const newYearColumn = document.createElement('th');
        newRow.appendChild(newYearColumn);
        newAuthorColumn.innerText = year.value;
    }
});