/*
    ### Buscando e contando dados em Arrays

    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios

        * Contar o número de categorias e o número de livros em cada categoria
        * Contar o número de autores
        * Mostrar livros do autor Augusto Cury
        * Transformar a função acima em uma função que irá receber o nome do autor
        e devolver os livros desse autor.
    
*/

const bookByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

// console.log(bookByCategory[0].category)

function numBooks(booksN) {
    for(let categ of booksN){
        console.log(`Categoria de livros ${categ.category} contém ${categ.books.length} livros`)
    }
}

function numAuthors(booksA) {
    let authors = []
    for(let categ of booksA) {
        for(let author of categ.books) {
            if(!(authors.includes(author.author))) {
            //if(authors.indexOf(author.author) == -1)
                authors.push(author.author)
            }
        }
    }
    console.log(authors)
}

function findBooks(booksF, author) {
    let booksFound = []
    for(let categ of booksF) {
        for(let book of categ.books) {
            if(book.author.includes(author)) {
                booksFound.push(book.title)
            }
        }
    }
    console.log(`Livros do autor ${author}: ${booksFound.join(", ")}`)
}

numBooks(bookByCategory)
numAuthors(bookByCategory)
findBooks(bookByCategory, "George S. Clason")


