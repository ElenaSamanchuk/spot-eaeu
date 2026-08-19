# СПОТ ЕАЭС — визитка

Статический лендинг для услуг по официальному оформлению QR-кода по системе СПОТ (ввоз товаров из стран ЕАЭС в РФ).

## Запуск локально

```bash
cd ~/Projects/spot-eaeu
python3 -m http.server 8080
```

Откройте http://localhost:8080

## Что заменить перед публикацией

- Телефон `+7 (800) 555-35-35`
- Email `info@spot-eaeu.ru`
- Домен `spot-eaeu.ru` в meta-тегах, `robots.txt`, `sitemap.xml`
- Название компании, если будет финальный бренд

## Структура

- `index.html` — главная страница
- `css/styles.css` — стили
- `js/main.js` — меню, форма, год в футере
- `assets/hero.png` — hero-изображение
- `privacy.html` — политика конфиденциальности

## Деплой

Можно залить на любой статический хостинг: GitHub Pages, Netlify, Vercel, Timeweb, Beget и т.д.
