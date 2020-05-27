var btns = document.querySelectorAll('.modalBtn');

btns.forEach(btn => {
    let modal = document.querySelector('#' + btn.dataset.target);

    btn.onclick = () => {
        modal.style.display = "block";
    };
    
    modal.querySelector('.close').onclick = () => {
        modal.style.display = "none";
    };

    window.addEventListener('click', () => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
