let list = document.getElementById('list');
let rightBox = document.getElementById('right');
let leftBox = document.getElementById('left');

for (list of lists){
    list.addEventListener('dragstart', function(e) {
        let selected = e.target;

        // Add the 'dragging' class to the selected item
        rightBox.addEventListener('dragover', function(e) {
            e.preventDefault();
        });

        rightBox.addEventListener('drop', function(e) {
            rightBox.appendChild(selected);
            selected = null;
        });
    })
};

