document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    
    fetch('https://formsubmit.co/brendajulyadsouza@gmail.com', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert('Mensagem enviada com sucesso!');
            this.reset();
        } else {
            alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
        }
    })
    .catch(error => {
        alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
    });
});
