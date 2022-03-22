let count = 0;

$('body')
.append('<button>Push</button>')
.append('<span></span>')
.append('<ul></ul>')
.append('<input />');

for(let i = 1; i < 11; i ++) {
    $('ul').append('<li>' + 'Элемент ' + i +'</li>')
}

$('ul li')
.addClass('element')
.even()
.addClass('even')
.slideUp(1000);


const span = $('span')
.addClass('counter');

$('button')
.addClass('green')
.click(function () {
    count++;
    span.text(count);
});

$('input').pickadate();