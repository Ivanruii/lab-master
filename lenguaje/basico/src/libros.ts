console.log(`%c4. Read Books`, 'color: grey; font-weight: bold; font-size: larger;')

interface Book {
    title: string;
    isRead: boolean;
}

function isBookRead(books: Book[], titleToSearch: string): boolean {
    const book = books.find(book => book.title === titleToSearch);
    return book ? book.isRead : false;
}

// Test

const books: Book[] = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];

console.log('%cIs "Devastación" read?', 'color: orange; font-weight: bold;', isBookRead(books, "Devastación"));
console.log('%cIs "Canción de hielo y fuego" read?', 'color: orange; font-weight: bold;', isBookRead(books, "Canción de hielo y fuego"));
console.log('%cIs "Los Pilares de la Tierra" read?', 'color: orange; font-weight: bold;', isBookRead(books, "Los Pilares de la Tierra"));