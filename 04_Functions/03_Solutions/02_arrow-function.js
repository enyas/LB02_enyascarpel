/*
Aufgabe 1
Gegeben ist die Buch-Titel unten als Array.
Verwenden Sie eine Arrow Function, um folgende Bücher auszugeben:
a) Filtern Sie nach dem Autor von den Harry Potter Büchern
b) Filtern Sie nach allen Büchern, welche vor 1960 veröffentlicht wurden
b) Suchen Sie nach dem Buch von Aldous Huxley
 */

const books = [{
        title: '1984',
        author: 'George Orwell',
        published: 1949
    },{
        title: 'Brave New World',
        author: 'Aldous Huxley',
        published: 1932
    },{
        title: 'Harry Potter and the Philosopher\'s Stone',
        author: 'J.K. Rowling',
        published: 1997
    },{
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
        published: 1998
    },{
        title: 'Harry Potter and the Prisoner of Azkaban',
        author: 'J.K. Rowling',
        published: 1999
    }];


let filter1 =
    books.filter((book) =>
        book.author == 'J.K. Rowling'
    );
console.log(filter1);

filter1 =
    books.filter((book) =>
        book.published < 1960
    );
console.log(filter1);

filter1 =
    books.find((book) =>
        book.title === 'Brave New World'
    );
console.log(filter1);
