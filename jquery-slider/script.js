async function getData() {
    const result = await fetch("https://raw.githubusercontent.com/VitaliyPolyashov/classes/master/js-custom-data/data.json");
    const data = await result.json();
    $('body').append('<div id="slider"></div>');
    const slider = $('#slider');
    for(let i = 0; i < data.length; i++) {
        const slide = $('<div></div>');
        slider.append(slide);
        slide.addClass('slide');
        
        const image = $('<img/>');
        slide.append(image);
        image.attr('src', 'https://raw.githubusercontent.com/VitaliyPolyashov/classes/master/js-custom-data/' + data[i].image);
        
        const text = $('<div></div>')
        slide.append(text);
        text.text(data[i].title);
    }

    slider.slick(
        {
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 300,
        }
    );
}

getData();