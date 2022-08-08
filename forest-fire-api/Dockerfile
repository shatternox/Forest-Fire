FROM php:7.3.31

RUN useradd -ms /bin/bash player_ctf

USER player_ctf

# Install composer
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
    && php composer-setup.php \
    && php -r "unlink('composer-setup.php');" \
    && mv composer.phar /usr/local/bin/composer \
    && chmod +x /usr/local/bin/composer

WORKDIR /forest-fire-api

CMD ["composer", "install"]

RUN composer require --dev facade/ignition==2.5.1

CMD ["php", "artisan", "serve", "--host", "0.0.0.0"]

USER root

RUN chmod -R 704 /forest-fire-api

RUN chmod 704 /flag



