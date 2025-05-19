/* eslint-disable */

const recommended = document.getElementById('recommended');
const category = document.getElementById('categoryProduct');
const categoryTitle = document.getElementById("category__title");
const categoryProducts = document.getElementById("category_products");

const medicine = document.getElementById("medicine");
const vitamins = document.getElementById("vitamins");
const sportAndHealth = document.getElementById("sport_and_health");
const showAll = document.getElementById("show_all");

// Ініціалізація - скриваєм категорії при загрузкі
document.addEventListener('DOMContentLoaded', () => {
  if (category) {
    category.style.display = 'none';
  }
});

async function handleCategoryClick(event, categoryName, categoryTitleText) {
  // Отримуєм href безпечним способом
  const href = event.currentTarget?.getAttribute('href') || '';

  if (href && !href.startsWith('#')) {
    event.preventDefault();
  }

  try {
    if (categoryProducts) {
      categoryProducts.innerHTML = '<div class="loading">Loading...</div>';
    }

    // Загружаєм товари
    const data = await getProductsByCategory(categoryName);

    // Очищаєм контейнер
    if (categoryProducts) {
      categoryProducts.innerHTML = '';
    }

    // Переключаємо видимість секцій
    if (category && recommended) {
      category.style.display = 'inline-block';
      recommended.style.display = 'none';
    }

    if (categoryTitle) {
      categoryTitle.textContent = categoryTitleText;
    }

    // Создаем и добавляем товары
    if (categoryProducts) {
      data.forEach(product => {
        const productElement = createProductElement(product);
        categoryProducts.appendChild(productElement);
      });
    }

    // Если это якорная ссылка - скроллим после загрузки контента
    if (href && href.startsWith('#')) {
      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  } catch (error) {
    console.error('Error loading products:', error);
    if (categoryProducts) {
      categoryProducts.innerHTML = '<div class="error">Failed to load products</div>';
    }
  }
}

// Функция создания элемента товара
function createProductElement(product) {
  const recommendedProduct = document.createElement('article');
  recommendedProduct.className = 'product recommended__product';

  recommendedProduct.innerHTML = `
    <img src="/${product.image}.png" class="product__photo" alt="${product.name || 'Product'}">
    <h3 class="product__title">${product.name || 'Product name'}</h3>
    <p class="product__desc">${product.description || 'No description available'}</p>
    <div class="product__info">
      <p class="product__price">от ${parseFloat(product.price || 0).toFixed(2)} грн</p>
      <div class="product__icon">
        <a href="#" class="icon icon--product"></a>
      </div>
    </div>
  `;

  return recommendedProduct;
}

// Функция получения товаров по категории
async function getProductsByCategory(category) {
  const response = await fetch(`http://localhost:7070/api/getProductsByCategory?category=${category}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

// Назначаем обработчики событий с проверкой элементов
function setupEventListeners() {
  if (medicine) {
    medicine.addEventListener('click', (event) => {
      handleCategoryClick(event, "MEDICINES", "Ліки та профілактичні засоби");
    });
  }

  if (vitamins) {
    vitamins.addEventListener('click', (event) => {
      handleCategoryClick(event, "VITAMINS", "Вітаміни та мінерали");
    });
  }

  if (sportAndHealth) {
    sportAndHealth.addEventListener('click', (event) => {
      handleCategoryClick(event, "SPORT_AND_HEALTH", "Краса та догляд");
    });
  }

  if (showAll) {
    showAll.addEventListener('click', (event) => {
      category.style.display = 'none';
      recommended.style.display = 'block';
    })
  }
}

// Инициализируем обработчики после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
});
