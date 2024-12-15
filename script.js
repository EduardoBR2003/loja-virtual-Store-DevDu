// Adicionar funcionalidades básicas ao carrinho
const addToCartButtons = document.querySelectorAll('.product-card button');
const cart = [];

addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.closest('.product-card').querySelector('h3').textContent;
        cart.push(productName);
        alert(`${productName} adicionado ao carrinho!`);
        updateCartIcon();
    });
});

function updateCartIcon() {
    const cartButton = document.querySelector('.nav-icons button:last-child');
    cartButton.textContent = `Carrinho (${cart.length})`;
}

// Funcionalidade de Filtro de Categorias
const categoryButtons = document.querySelectorAll('.category-item');
const productCards = document.querySelectorAll('.product-card');

categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remover classe 'active' de todos os botões
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        
        // Adicionar classe 'active' no botão clicado
        this.classList.add('active');

        const selectedCategory = this.dataset.category;

        productCards.forEach(card => {
            // Se for 'todos' ou a categoria do card corresponder, mostrar
            if (selectedCategory === 'todos' || card.dataset.category === selectedCategory) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});