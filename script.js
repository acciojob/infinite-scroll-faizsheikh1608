//your code here!

// Get the list container
const list = document.querySelector('#infi-list');

// Function to create and add list items
function addItems() {
    for (let i = 0; i < 2; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = `List Item ${list.children.length + 1}`;
        list.appendChild(listItem);
    }
}

// Function to check if the user has scrolled to the bottom of the list
function checkScroll() {
    if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
        addItems(); // Add more items when the bottom is reached
    }
}

// Initial population of the list with 10 items
for (let i = 0; i < 10; i++) {
    addItems();
}

// Event listener to detect scroll
list.addEventListener('scroll', checkScroll);
