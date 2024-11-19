
document.addEventListener('DOMContentLoaded', function() {
   s
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <span class="close-button">&times;</span>
        <img class="modal-content" id="fullscreen-image">
    `;
    document.body.appendChild(modal);

    const images = document.querySelectorAll('img');
    const modalImg = document.getElementById('fullscreen-image');
    const closeBtn = document.querySelector('.close-button');

  
    images.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'flex';
            modalImg.src = this.src;
        });
    });

   
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });


    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modal.style.display = 'none';
        }
    });
});