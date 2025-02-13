
document.addEventListener('DOMContentLoaded', function() {
    console.log("Prueba para ver si funciona JavaScript");
});

document.addEventListener('DOMContentLoaded', function() {
    const check = document.getElementById('check');
    const navMenu = document.querySelector('nav ul');

    document.querySelector('.checkbtn').addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        console.log("El ícono del menú fue clicado");
    });

    const menuItems = document.querySelectorAll('nav ul li a');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 858) {
                navMenu.classList.remove('active');
                console.log("Se hizo clic en un enlace del menú");
            }
        });
    });
});


