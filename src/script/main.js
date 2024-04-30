const buttonMobile = document.querySelector('.mobile-btn');

buttonMobile.addEventListener('click', function() {
    const menuMobile = document.querySelector('.mobile-menu');
    const buttonX = document.querySelector('.fa-bars'); 
    menuMobile.classList.toggle('active');
    buttonX.classList.toggle('fa-x'); // Menu barra se torna X
});