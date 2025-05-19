/* eslint-disable */

const recommendedProducts = document.getElementById('recommended_products');

document.addEventListener('DOMContentLoaded', () => {
  async function fetchAllProducts() {
    try {
      const response = await fetch('http://localhost:7070/api/getAllProducts');

      // Проверяем, успешен ли запрос
      if (!response.ok) {
        throw new Error('Ошибка загрузки товаров');
      }

      const data = await response.json();

      data.forEach(product => {
        const recommendedProduct = document.createElement('article');
        const productPhoto = document.createElement('img');
        const productTitle = document.createElement('h3');
        const productDescription = document.createElement('p');
        const productInfo = document.createElement('div');
        const productPrice = document.createElement('p');
        const productIcon = document.createElement('div');
        const productBuy = document.createElement('a');

        // Добавляем классы
        recommendedProduct.className = 'product recommended__product';
        productPhoto.className = 'product__photo';
        productTitle.className = 'product__title';
        productDescription.className = 'product__desc';
        productInfo.className = 'product__info';
        productPrice.className = 'product__price';
        productIcon.className = 'product__icon';
        productBuy.className = 'icon icon--product';

        productPhoto.src = '/' + product.image + '.png';

        // Устанавливаем текст элементов
        productTitle.textContent = product.name || 'Название товара';
        productDescription.textContent = product.description || 'Описание отсутствует';

        const formattedPrice = parseFloat(product.price).toFixed(2);

        productPrice.textContent = `от ${formattedPrice} грн`;

        productIcon.appendChild(productBuy);

        productInfo.append(productPrice, productIcon);

        // Добавляем элементы в article
        recommendedProduct.append(
          productPhoto,
          productTitle,
          productDescription,
          productInfo,
        );

        // Добавляем товар в контейнер
        recommendedProducts.appendChild(recommendedProduct);
      });
    } catch (error) {
      console.error('Произошла ошибка:', error);
      // Можно добавить уведомление для пользователя
      recommendedProducts.innerHTML = '<p class="error">Не удалось загрузить товары. Пожалуйста, попробуйте позже.</p>';
    }
  }

  fetchAllProducts();
});
