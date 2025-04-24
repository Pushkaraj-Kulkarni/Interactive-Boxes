function toggleBox(clickedBox) {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        if (box === clickedBox) {
            box.classList.toggle('active');
            box.querySelector('input[type="radio"]').checked = true;
        } else {
            box.classList.remove('active');
        }
    });
}
