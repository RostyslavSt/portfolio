'use strict';

(() => {
    const DropDown = function (classOfRootElement, listItems) {
        const mainElement = document.querySelector(classOfRootElement);
        const selectedElement = document.createElement('div');
        const dropDownMenu = document.createElement('ul');

        function toggleMenu() {
            const height = 54 * listItems.length;

            if (mainElement.classList.contains('opened')) {
                dropDownMenu.style.height = 0;
                mainElement.classList.remove('opened');
            } else {
                dropDownMenu.style.height = height + '%';
                mainElement.classList.add('opened');
            }
        }

        mainElement.classList.add('drop-down');
        selectedElement.classList.add('drop-down__selected');
        dropDownMenu.classList.add('drop-down__menu');

        mainElement.appendChild(selectedElement);
        mainElement.appendChild(dropDownMenu);



        selectedElement.innerHTML = listItems[0];
        selectedElement.addEventListener('click', toggleMenu);



        listItems.forEach((item) => {
            let li = document.createElement('li');
            li.innerHTML = item;
            li.classList.add('drop-down__item');

            li.addEventListener('click', () => {
                selectedElement.innerHTML = item;
                toggleMenu();
            });
            dropDownMenu.appendChild(li);
        })

    }

    const menu1 = new DropDown('.el-wrapper', ['Apples', 'Bananas', 'Oranges', 'Cherry', 'lemon']);
    const menu2 = new DropDown('.el-wrapper2', ['С#', 'JavaScript', 'Ruby', 'C++', 'Python', 'PHP', 'Objective-C']);
})();