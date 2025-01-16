FROM phpswoole/swoole:php8.2

RUN set -ex \
    && apt update \
    && apt install -y npm libgd-dev libpng-dev libsodium-dev libzip-dev libxml2-dev \
    && docker-php-source extract \
    && docker-php-ext-configure gd --with-freetype=/usr/include/ --with-jpeg=/usr/include/ \
    && docker-php-ext-install -j$(nproc) pdo_mysql mysqli pcntl intl zip gd exif bcmath sockets \
    && docker-php-source delete


RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer


WORKDIR /var/www/html

COPY composer.json composer.lock ./
COPY database/ database/
COPY package.json package-lock.json ./

RUN  npm install
RUN  npm run prod
RUN  composer install --no-scripts

COPY --chown=www-data:www-data . .

COPY production.env .env
