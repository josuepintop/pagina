// Script para la tienda de ropa
// Los botones de precio no tienen funcionalidad, solo son visuales

console.log('Tienda de ropa cargada correctamente');

// Agregar efecto de click a los botones de precio
const priceButtons = document.querySelectorAll('.price-button');

priceButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Efecto visual simple
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});

// Animación de carga de las tarjetas
const productCards = document.querySelectorAll('.product-card');

productCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';

    setTimeout(() => {
        card.style.transition = 'all 0.5s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, index * 100);
});