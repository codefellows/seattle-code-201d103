'use strict';

function toggleStrikeThrough(event) {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (let i = 0; i < checkboxes.length; i++) {
      // is this checkbox the checkbox that was clicked.
        if (checkboxes[i] === event.target) {
            const listItem = event.target.parentNode;

            if (event.target.checked){
                listItem.classList.add('checked');
            } else {
                listItem.classList.remove('checked');
            }
            // I think this just stops our loop when we've found the thing we are looking for.
            break;
        }
    }
}

// Add event listeners for each checkbox
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
for (let i=0; i < checkboxes.length; i++){
    checkboxes[i].addEventListener('click', toggleStrikeThrough);
}
