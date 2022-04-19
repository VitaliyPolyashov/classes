(async function loadTree() {

    function makeSubMenu(treeElement, children) {
        children.forEach(function(element) {
            const li = document.createElement('li');
            li.innerText = element.title;
            const innerContainer = document.createElement('ul');
            innerContainer.classList.add('inner-container');
            li.appendChild(innerContainer);
            if (element.children) {
                li.classList.add('arrow');
                makeSubMenu(innerContainer, element.children);
            }
            treeElement.appendChild(li);
        });
    }

    const data = await fetch('https://raw.githubusercontent.com/VitaliyPolyashov/classes/master/shop-data/menu.json');
    const tree = await data.json();
    const treeElement = document.querySelector('#first-container');
    makeSubMenu(treeElement, tree);
})();
