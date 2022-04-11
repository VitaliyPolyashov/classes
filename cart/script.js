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

function onClick(button) {
    const id = Number(button.target.dataset['id']);
    let cart = sessionStorage.getItem('cart');
    if (!cart) {
        cart = "{}";
    };
    const cartObj = JSON.parse(cart);
    cartObj[id] = (cartObj[id] ?? 0) + 1;
    sessionStorage.setItem('cart', JSON.stringify(cartObj));
}

const books = document.querySelector('#books');

bookData.forEach(function(item) {
    const book = document.createElement('div');
    const name = document.createElement('div');
    name.innerText = item.name;
    const button = document.createElement('button');
    button.innerText = "Добавить";
    button.dataset['id'] = item.id;
    button.addEventListener('click', onClick);
    book.appendChild(name);
    book.appendChild(button);


    books.appendChild(book);
})
