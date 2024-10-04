const productList = document.getElementById('product-list');
const categorySelect = document.getElementById('category-select');

fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(products => {
        // Populate categories
        const categories = [...new Set(products.map(product => product.category))];
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categorySelect.appendChild(option);
        });

        // Display all products initially
        displayProducts(products);

        // Filter products based on selected category
        categorySelect.addEventListener('change', (e) => {
            const selectedCategory = e.target.value;
            const filteredProducts = selectedCategory === 'all' ? products : products.filter(product => product.category === selectedCategory);
            displayProducts(filteredProducts);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

// Function to display products
function displayProducts(products) {
    productList.innerHTML = ''; // Clear existing products
    products.forEach(product => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';
        col.innerHTML = `
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.title}">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text"><strong>Price: $${product.price}</strong></p>
                    <a href="#" class="btn btn-primary">Add to Cart</a>
                </div>
            </div>
        `;
        productList.appendChild(col);
    });
}
