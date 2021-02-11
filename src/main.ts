import $ from "jquery";

import Book from "./model/Book";

const book = new Book("Dom Quixote", 108.8, 0.1);

$("body").append(`<h1>${book.name}</h1>`);
$("body").append(`<h2>Price: ${book.priceWithDiscount()}</h2>`);
