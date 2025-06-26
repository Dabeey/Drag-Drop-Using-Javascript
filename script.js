let lists = document.querySelectorAll('.list');
let rightBox = document.getElementById('right');
let leftBox = document.getElementById('left');
let selected = null;

lists.forEach(list => {
    list.addEventListener('dragstart', function(e) {
        selected = e.target;
    });
});

rightBox.addEventListener('dragover', function(e) {
    e.preventDefault();
});

rightBox.addEventListener('drop', function(e) {
    if (selected) {
        rightBox.appendChild(selected);
        selected = null;
    }
});

leftBox.addEventListener('dragover', function(e) {
    e.preventDefault();
});

leftBox.addEventListener('drop', function(e) {
    if (selected) {
        leftBox.appendChild(selected);
        selected = null;
    }
});