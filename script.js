// Script para la tienda tipo Adidas
console.log('STRIPES Store cargada correctamente');

// Mostrar todos los productos al cargar
document.addEventListener('DOMContentLoaded', function() {
    filterProducts('all');
});

// Función para filtrar productos
function filterProducts(category) {
    const products = document.querySelectorAll('.product-card');
    const buttons = document.querySelectorAll('.category-btn');

    // Actualizar botones activos
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Filtrar y mostrar productos
    products.forEach(product => {
        product.classList.remove('show');

        setTimeout(() => {
            if (category === 'all' || product.getAttribute('data-category') === category) {
                product.classList.add('show');
            }
        }, 50);
    });
}

// Animación de carga de productos
window.addEventListener('load', function() {
    const productCards = document.querySelectorAll('.product-card.show');
    productCards.forEach((card, index) => {
        card.style.animationDelay = (index * 0.1) + 's';
    });
});