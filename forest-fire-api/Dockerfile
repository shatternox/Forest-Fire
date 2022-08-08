FROM php:7.3.31-alpine3.14

# Install composer
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
    && php composer-setup.php \
    && php -r "unlink('composer-setup.php');" \
    && mv composer.phar /usr/local/bin/composer \
    && chmod +x /usr/local/bin/composer

# Create a laravel project
RUN composer create-project --prefer-dist laravel/laravel /forest-fire-api "8.4.2"

WORKDIR /forest-fire-api

COPY ./web/api.php ./routes/api.php
COPY ./web/web.php ./routes/web.php
COPY ./web/cors.php ./config/cors.php
COPY ./flag /

# Lock the ignition version
RUN composer require --dev facade/ignition==2.5.1

RUN chmod -R 705 /forest-fire-api
RUN chmod 777 /forest-fire-api/storage/logs/laravel.log
RUN chmod 704 /flag


RUN adduser player_ctf --disabled-password


USER player_ctf

CMD ["cd", "/forest-fire-api"]

CMD ["php", "artisan", "serve", "--host", "0.0.0.0"]






