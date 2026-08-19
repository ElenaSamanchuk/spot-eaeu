(function () {
  'use strict';

  // Mobile menu toggle
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');

  if (burger && nav) {
    burger.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', String(isOpen));
      burger.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // FAQ accordion
  var accordion = document.getElementById('accordion');
  if (accordion) {
    accordion.querySelectorAll('.accordion__trigger').forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        var panel = trigger.nextElementSibling;
        var isOpen = trigger.getAttribute('aria-expanded') === 'true';

        accordion.querySelectorAll('.accordion__trigger').forEach(function (t) {
          t.setAttribute('aria-expanded', 'false');
          t.nextElementSibling.style.maxHeight = null;
        });

        if (!isOpen) {
          trigger.setAttribute('aria-expanded', 'true');
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      });
    });
  }

  // Lead form validation (client-side only — wire up a real endpoint before launch)
  var form = document.getElementById('leadForm');
  var status = document.getElementById('formStatus');
  var phonePattern = /^[+]?[\d\s()-]{10,18}$/;

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;

      var nameField = form.querySelector('[name="name"]').closest('.field');
      var phoneInput = form.querySelector('[name="phone"]');
      var phoneField = phoneInput.closest('.field');
      var agree = form.querySelector('[name="agree"]');

      nameField.classList.remove('is-invalid');
      phoneField.classList.remove('is-invalid');

      if (!form.querySelector('[name="name"]').value.trim()) {
        nameField.classList.add('is-invalid');
        valid = false;
      }
      if (!phonePattern.test(phoneInput.value.trim())) {
        phoneField.classList.add('is-invalid');
        valid = false;
      }
      if (!agree.checked) {
        valid = false;
      }

      if (!valid) {
        status.textContent = 'Проверьте заполненные поля.';
        status.className = 'form__status is-error';
        return;
      }

      status.textContent = 'Заявка отправлена! Мы свяжемся с вами в ближайшее время.';
      status.className = 'form__status is-success';
      form.reset();
    });
  }

  // Sticky header shadow on scroll
  var header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.style.boxShadow = window.scrollY > 8 ? '0 8px 20px -18px rgba(18,24,43,0.6)' : 'none';
    }, { passive: true });
  }
})();
