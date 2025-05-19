'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const loginTrigger = document.querySelector('.icon--login--wrap');
  const authContainer = document.getElementById('auth-container');
  const registerLink = document.getElementById('register-link');
  const loginLink = document.getElementById('login-link');
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');

  // Відкриття форми
  if (loginTrigger && authContainer) {
    loginTrigger.addEventListener('click', function (e) {
      e.preventDefault();
      authContainer.classList.add('auth-container--visible');
      document.body.classList.add('modal-open');
      showTab('login');
    });
  }

  // Перехід до вкладки реєстрації
  if (registerLink) {
    registerLink.addEventListener('click', function (e) {
      e.preventDefault();
      showTab('register');
    });
  }

  // Перехід до вкладки входу
  if (loginLink) {
    loginLink.addEventListener('click', function (e) {
      e.preventDefault();
      showTab('login');
    });
  }

  // Перемикання між вкладками
  function showTab(tabName) {
    const loginTab = document.getElementById('login-tab');
    const registerTab = document.getElementById('register-tab');

    loginTab.classList.remove('auth-tab--active');
    registerTab.classList.remove('auth-tab--active');

    if (tabName === 'login') {
      loginTab.classList.add('auth-tab--active');
    } else {
      registerTab.classList.add('auth-tab--active');
    }
  }

  // Закриття форми
  authContainer.addEventListener('click', function (e) {
    const isClickInsideForm = e.target.closest('.auth-tab');

    if (!isClickInsideForm) {
      authContainer.classList.remove('auth-container--visible');
      document.body.classList.remove('modal-open');

      loginForm?.reset();
      registerForm?.reset();
    }
  });

  // Обробка форми контактів
  // eslint-disable-next-line max-len
  document
    .getElementById('contactForm')
    ?.addEventListener('submit', function (event) {
      event.preventDefault(); // Останавливаем стандартную отправку
      alert('Форма отправлена!');
      this.reset();
    });

  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('icon--product')) {
      e.preventDefault();

      const addToBinModal = document.getElementById('addtobin');

      if (addToBinModal) {
        addToBinModal.classList.add('addtobin--visible');

        setTimeout(() => {
          addToBinModal.classList.remove('addtobin--visible');
        }, 2500);
      }
    }
  });

});
