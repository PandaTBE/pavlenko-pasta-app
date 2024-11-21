
## Описание
Проект состоит из фронтенда и бэкенда, развернутых с использованием Docker Compose.

---

## Первый запуск

1. Запустить базу данных:
    ```bash
    docker compose up -d db --build
    ```

2. Запустить все сервисы:
    ```bash
    docker compose up -d --build
    ```

3. Зайти в контейнер с бэкендом:
    ```bash
    docker exec -it pavlenko-project-backend-1 bash
    ```

4. Выполнить миграции базы данных:
    ```bash
    python manage.py migrate
    ```

5. Создать суперпользователя (администратора):
    ```bash
    python manage.py createsuperuser
    ```
    - **Email:** `root@mail.ru`
    - **Username:** `root`
    - **Password:** `root`

6. Выйти из контейнера:
    ```bash
    exit
    ```

7. Перезапустить бэкенд с билдом:
    ```bash
    docker compose up -d backend --build
    ```

---

## Управление контейнерами

### Отключение всех контейнеров:
```bash
docker compose down
```

### Для повторного запуска

1. Запустить базу данных:
    ```bash
    docker compose up -d db
    ```

2. Запустить все сервисы:
    ```bash
    docker compose up -d
    ```

## Хосты
 - Фронтенд: localhost:3000
 - Бэкенд: localhost:8000
