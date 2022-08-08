FROM php:7.3.31

# Install composer
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
    && php composer-setup.php \
    && php -r "unlink('composer-setup.php');" \
    && mv composer.phar /usr/local/bin/composer \
    && chmod +x /usr/local/bin/composer

WORKDIR /forest-fire-api

COPY ./web/api.php ./routes/api.php
COPY ./web/web.php ./routes/web.php
COPY ./web/cors.php ./config/cors.php
COPY ./flag /

# Lock the ignition version
RUN composer require --dev facade/ignition==2.5.1

RUN chmod -R 705 /forest-fire-api

RUN chmod 704 /flag


RUN useradd -ms /bin/bash player_ctf

USER player_ctf


CMD ["cd", "/forest-fire-api"]

CMD ["php", "artisan", "serve", "--host", "0.0.0.0"]






