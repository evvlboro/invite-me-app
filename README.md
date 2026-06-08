# invite-me-app

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-5-2D3748)](https://www.prisma.io/)
[![Tailwind](https://img.shields.io/badge/Tailwind-3-38BDF8)](https://tailwindcss.com/)

> Конструктор форм для записи на мероприятия. Автор создаёт форму, получает уникальную ссылку, гости записываются без регистрации.

## 🎯 Зачем этот проект

Пет-проект для изучения современного фронтенда и full-stack разработки. Удобный инструмент для организаторов мероприятий (D&D сессии, запись к парикмахеру, регистрация на мастер-классы и т.п.).

## 🧱 Технологический стек

- **Фреймворк:** Next.js 15 (App Router)
- **Язык:** TypeScript
- **Стили:** Tailwind CSS
- **База данных:** PostgreSQL (продакшн)
- **ORM:** Prisma
- **Аутентификация:** NextAuth.js (Auth.js)
- **Уведомления:** Telegram Bot API
- **Деплой:** Vercel

## 📦 Функциональность

### Для автора (зарегистрированного пользователя)

- ✅ Регистрация / вход
- ✅ Создание форм с произвольным названием
- ✅ Генерация уникальной публичной ссылки
- ✅ Просмотр поступивших заявок
- ✅ Уведомления в Telegram о новых записях

### Для гостя (без регистрации)

- ✅ Заполнение формы (имя, телефон, комментарий)
- ✅ Мгновенное подтверждение записи
- ❌ Не требуется аккаунт

## 🚀 Быстрый старт

### Требования

- Node.js 18+
- pnpm / npm / yarn

### Установка

```bash
# Клонирование репозитория
git clone https://github.com/evvlboro/invite-me-app.git
cd invite-me-app

# Установка зависимостей
npm install
# или
pnpm install

# Настройка переменных окружения
cp .env.example .env
# Отредактируй .env (см. секцию "Переменные окружения")

# Инициализация базы данных
npx prisma migrate dev --name init
npx prisma generate

# Запуск дев-сервера
npm run dev
```
