const bookData = [
    {
        id: 1,
        name: "Гарри Поттер"
    },
    {
        id: 2,
        name: "Маленький принц"
    },
    {
        id: 3,
        name: "Красная шапочка"
    },
    {
        id: 4,
        name: "Атлант расправил плечи"
    },
];


let cart = sessionStorage.getItem('cart');
if (!cart) {
    cart = "{}";
};
const cartObj = JSON.parse(cart);

const array = Object.keys(cartObj);

const books = document.querySelector('#books');

array.forEach(function(item) {
    const book = document.createElement('div');
    const name = document.createElement('div');
    const amount = document.createElement('amount');

    const currentBook = bookData.find(x => x.id === Number(item));
    name.innerText = currentBook.name;

    amount.innerText = cartObj[item];

    book.appendChild(name);
    book.appendChild(amount);

    books.appendChild(book);
})
