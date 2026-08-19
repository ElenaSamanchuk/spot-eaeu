(function () {
  "use strict";

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  var burger = document.querySelector(".burger");
  var nav = document.getElementById("site-nav");

  function closeNav() {
    document.body.classList.remove("nav-open");
    if (burger) {
      burger.setAttribute("aria-expanded", "false");
      burger.setAttribute("aria-label", "Открыть меню");
    }
  }

  function openNav() {
    document.body.classList.add("nav-open");
    if (burger) {
      burger.setAttribute("aria-expanded", "true");
      burger.setAttribute("aria-label", "Закрыть меню");
    }
  }

  if (burger && nav) {
    burger.addEventListener("click", function () {
      if (document.body.classList.contains("nav-open")) {
        closeNav();
      } else {
        openNav();
      }
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 768) {
        closeNav();
      }
    });
  }

  var form = document.getElementById("contact-form");
  var statusEl = document.getElementById("form-status");

  if (form && statusEl) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      statusEl.textContent = "";
      statusEl.className = "form__status";

      if (!form.checkValidity()) {
        statusEl.textContent = "Пожалуйста, заполните обязательные поля и подтвердите согласие.";
        statusEl.classList.add("form__status--error");
        form.reportValidity();
        return;
      }

      var data = new FormData(form);
      var name = String(data.get("name") || "").trim();
      var phone = String(data.get("phone") || "").trim();
      var inn = String(data.get("inn") || "").trim();
      var message = String(data.get("message") || "").trim();

      var subject = encodeURIComponent("Заявка с сайта СПОТ ЕАЭС");
      var body = encodeURIComponent(
        "Имя: " + name + "\n" +
        "Телефон: " + phone + "\n" +
        "ИНН: " + (inn || "не указан") + "\n\n" +
        "Сообщение:\n" + (message || "—")
      );

      window.location.href = "mailto:info@spot-eaeu.ru?subject=" + subject + "&body=" + body;

      statusEl.textContent = "Спасибо! Откроется почтовый клиент — отправьте письмо, и мы свяжемся с вами.";
      statusEl.classList.add("form__status--success");
      form.reset();
    });
  }
})();
