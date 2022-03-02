let width = 10;
let isExtending = true;

const child = document.querySelector('.child');

function extending() {
    if (isExtending) {
        width++;
        if (width === 100) {
            isExtending = false;
        }
    } else {
        width--;
        if (width === 0) {
            isExtending = true;
        }
    }
    child.style.width = width + '%';
}

// setInterval(extending, 10);

let options = {
    root: null,
    threshold: 1
  }

  function callback(entries) {
    const entry = entries[0];
    // if (entry.intersectionRatio > 0) {
    //     entry.target.classList.add('shown');
    // }
    // if (entry.intersectionRatio < 1) {
    //     entry.target.classList.remove('shown');
    // }
    console.log(entries);
    const entry2 = entries[0];
    if (entry2.intersectionRatio > 0) {
        invisible2.classList.add('shown2');
    }

  }
  
  const invisibleContainer = document.querySelector('.invisible-container');
  const invisible = document.querySelector('.invisible');
  const invisibleContainer2 = document.querySelector('.invisible-container2');
  const invisible2 = document.querySelector('.invisible2');

  let observer = new IntersectionObserver(callback, options);

  //observer.observe(invisibleContainer);
  observer.observe(invisibleContainer2);