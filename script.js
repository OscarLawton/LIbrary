var books = []

function Book(name,author,pages, img, read){
    this.name = name
    this.author = author
    this.pages = pages
    this.cover = img
    this.read = read
}

Book.prototype.giveDetails = (book) => {
    let value = 'This book is called ' + book.name + '. \nIt was written by ' + book.author + '.\nPages: ' + book.pages + '\n' + `${book.read ? "I have read this book." : "I have not read this book."}`
    return value
}

let theHobbit = new Book('The Hobbit', "J.R.R Tolkien", 310, true)
theHobbit.cover = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.G_NxXyG1Byk2hGPmo8xhOwHaLQ%26pid%3DApi&f=1'

let theRoad = new Book('The Road', 'Cormac McCarthy', 610, true)
theRoad.cover = 'https://i.pinimg.com/736x/ae/91/5c/ae915ce1721bb9caadd616347dddc2fa.jpg'

let bloodMeridian = new Book('Blood Meridian', "Cormac McCarthy", 337, true)
bloodMeridian.cover = 'https://bookmans.com/wp-content/uploads/2015/09/Blood-Meridian.jpg'

console.log(theHobbit.giveDetails(theHobbit))

books.push(theHobbit)
books.push(theRoad)
books.push(bloodMeridian)

const grid_container = document.getElementById('grid_container')


/* const book_title = document.getElementById('book_title')
book_title.innerHTML = theHobbit.name */

const pushBook = (book) => {
    const gridItemDiv = document.createElement('div')
    const cardDiv = document.createElement('div')
    const img = document.createElement('img')
    const cardContentDiv = document.createElement('div')
    const cardHeader = document.createElement('h1')
    const cardAuthor = document.createElement('h4')
    const cardPages = document.createElement('h4')
    var bookId = book.name.replace(/ +/g, "")
    cardDiv.id = bookId
    gridItemDiv.className = 'grid_item'
    cardDiv.className = 'card'
    img.className = 'card_img'
    cardContentDiv.className = 'card_content'
    cardHeader.className = 'card_header'
    if(book.cover){
        img.src = book.cover
    }
    cardHeader.innerHTML = book.name
    cardAuthor.innerHTML = book.author
    cardPages.innerHTML = "Pages: " + book.pages
    const grid = document.getElementById('grid')
    grid.appendChild(gridItemDiv)
    gridItemDiv.appendChild(cardDiv)
    cardDiv.appendChild(img)
    cardDiv.appendChild(cardContentDiv)

    cardContentDiv.appendChild(cardHeader)
    cardContentDiv.appendChild(cardAuthor)
    cardContentDiv.appendChild(cardPages)
}

const loadGrid = (books) => {

    for(let x = 0; x < books.length; x++){
       pushBook(books[x])
    } 
}

loadGrid(books)

var addBook = () => {
    let formData= document.getElementById("bookForm");
    var bookValues = []
    for(let x=0; x < formData.elements.length; x++){
        bookValues[x] = formData.elements[x].value
    }
    var docs = document.getElementsByName('read')
    var read = false
    for(let x = 0; x < docs.length; x++){
        if(docs[x].checked == true){
            read = docs[x].value
        } 
    }
    if(read === 'read'){
        bookValues[4] = true
    } else {
        bookValues[4] = false
    }  
    var book = new Book(...bookValues)
    books.push(book)
    console.log(books)
    pushBook(book)
   /*  const newDiv = document.createElement('div')
    var bookId = book.name.replace(/ +/g, "")
    newDiv.id = bookId
    newDiv.className = 'grid_element'
    const textNode = document.createTextNode(book.name)
    newDiv.appendChild(textNode)
    grid_container.appendChild(newDiv)
 */
    //fillGrid()
    //console.count(`the book's title will be ${text}`)
    //document.getElementById('answer').innerHTML = text
}

var button = document.getElementById('button').addEventListener("click", addBook)

//const fillGrid = () =>{
   
//}

//fillGrid()


/* 
 <div id="form-container">
            <h3>Add Book</h3>
            <form id="bookForm" action="">
                <label>Title</label>
                <input type="text" name="title">
                <label>Author</label>
                <input type="text" name="author">
                <label>Pages</label>
                <input type="number" name="pages">
                <input type="radio" name="read" value="read">Read
                <br>
                <input type="radio" name="read" value="notRead" checked>Not Read
            </form>
            <div id="button">Submit</div>
        </div>

*/


const openFormButton = document.getElementById('addButton')
const closeFormButton = document.getElementById('close-form')
const overlay = document.getElementById('overlay')

openFormButton.addEventListener('click', () => {
    const modal = document.getElementById('modal')
    //openCloseModal(modal)
    modal.classList.add('active')
    overlay.classList.remove('active')
})

closeFormButton.addEventListener('click', () =>{
    const modal = document.getElementById('modal')
    modal.classList.remove('active')
    overlay.classList.add('active')
})

const openCloseModal = (modal) => {
    if(modal == null) return 
    modal.classList.add('active')
}


/* const loadGrid = (books) => {

    for (let x = 0; x < books.length; x++) {
        const gridItemDiv = document.createElement('div')
        const cardDiv = document.createElement('div')
        const img = document.createElement('img')
        const cardContentDiv = document.createElement('div')
        const cardHeader = document.createElement('h1')
        const cardAuthor = document.createElement('h4')
        const cardPages = document.createElement('h4')
        var bookId = books[x].name.replace(/ +/g, "")
        cardDiv.id = bookId
        gridItemDiv.className = 'grid_item'
        cardDiv.className = 'card'
        img.className = 'card_img'
        cardContentDiv.className = 'card_content'
        cardHeader.className = 'card_header'
        //img.src = books[x].cover
        cardHeader.innerHTML = books[x].name
        cardAuthor.innerHTML = books[x].author
        cardPages.innerHTML = "Pages: " + books[x].pages
        const grid = document.getElementById('grid')
        grid.appendChild(gridItemDiv)
        gridItemDiv.appendChild(cardDiv)
        cardDiv.appendChild(img)
        cardDiv.appendChild(cardContentDiv)

        cardContentDiv.appendChild(cardHeader)
        cardContentDiv.appendChild(cardAuthor)
        cardContentDiv.appendChild(cardPages)
    }
}
 */