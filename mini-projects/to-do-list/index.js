const addBtn = document.getElementById('addBtn');
const deleteBtn = document.getElementById('delete-btn')
const list = document.querySelector('.list');


    
function addItem() {
    let itemValue = document.getElementById('input-text').value;
    if (itemValue === '') return;
    const template = `
    <li class="list-item">
        <div class="item-container">
            <div class="item-box">
                <div id="check-box"></div>
                    <span id="inputText" class="item-text">${itemValue}</span>
            </div>
            <div class="item-actions">
                <button class="delete-btn"> X </button>
            </div>
        </div>
    </li>
    `;

    list.innerHTML += template;
    console.log(`${itemValue} is added.`);

    document.getElementById('input-text').value = '';
    attachCheckboxListeners();
}

function attachCheckboxListeners() {
    const checkboxes = document.querySelectorAll('#check-box');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('mouseenter', () => {
            checkbox.textContent = '🌸';
        });
        checkbox.addEventListener('mouseleave', () => {
            if (!checkbox.classList.contains('completed')) {
                checkbox.textContent = '';
            }
        });
        checkbox.addEventListener('click', (e) => {
            e.stopPropagation();
            const itemContainer = checkbox.closest('.item-container');
            const itemText = itemContainer.querySelector('.item-text');
            
            checkbox.classList.toggle('completed');
            itemText.classList.toggle('completed');
            itemContainer.classList.toggle('completed');
            
            if (checkbox.classList.contains('completed')) {
                checkbox.textContent = '🌸';
                console.log(`${itemText.textContent} is completed.`);
            } else {
                checkbox.textContent = '';
                console.log(`${itemText.textContent} is uncompleted.`);
            }
        });
    });
}

addBtn.addEventListener('click', addItem);

list.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        const item = event.target.closest('li');
        const span = item.querySelector('.item-text') || item.querySelector('input');
        const itemValue = span ? span.value || span.textContent : 'Unknown item';

        console.log(`${itemValue} is deleted.`);
        item.remove();
    }
});


list.addEventListener('click', (event) => {
    if (event.target.tagName === 'SPAN') {
        const input = document.createElement('input');
        input.value = event.target.textContent;

        event.target.replaceWith(input);
        input.focus();
        input.select();

        function saveEdit() {
            if (!input.isConnected) return;
            const newSpan = document.createElement('span');
            newSpan.classList.add('item-text');
            const newValue = input.value.trim();

            newSpan.textContent = newValue || 'Untitled';
            input.replaceWith(newSpan);
            console.log(`${newSpan.textContent} is saved.`);
        }

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                input.removeEventListener('blur', saveEdit);
                saveEdit();
            }
        });

        input.addEventListener('blur', saveEdit);
    }
});




