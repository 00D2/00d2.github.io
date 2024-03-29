---
icon: docker
author: 小苹果儿
date: 2023-11-11
category:
  - Docker
tag:
  - docker
  - 容器
---

# lychee

```yaml
#-------------------------------------------
#  Docker Compose
# @RobLandry
# Repo : https://github.com/LycheeOrg/Lychee-Docker
#-------------------------------------------

version: '3'

services:
  lychee_db:
    container_name: lychee_db
    image: mariadb:10.11.5
    environment:
      - MYSQL_ROOT_PASSWORD=<ROOT_PASSWORD>
      - MYSQL_DATABASE=lychee
      - MYSQL_USER=lychee
      - MYSQL_PASSWORD=<LYCHEE_PASSWORD>
    expose: 
      - 3306
    volumes:
      - mysql:/var/lib/mysql
    networks:
      - lychee
    restart: unless-stopped

  lychee:
    image: lycheeorg/lychee
    container_name: lychee
    ports:
      - 90:80
    volumes:
      - ./lychee/conf:/conf
      - ./lychee/uploads:/uploads
      - ./lychee/sym:/sym
      - ./lychee/logs:/logs
    networks:
      - lychee
    environment:
      #- PUID=1000
      #- PGID=1000
      # PHP timezone e.g. PHP_TZ=America/New_York
      - PHP_TZ=CST
      - TIMEZONE=CST
      #- APP_NAME=Laravel
      #- APP_ENV=local
      #- APP_FORCE_HTTPS=false
      #- APP_DEBUG=true
      #- APP_URL=http://localhost
      - DB_CONNECTION=mysql
      - DB_HOST=lychee_db
      - DB_PORT=3306
      - DB_DATABASE=lychee
      - DB_USERNAME=lychee
      - DB_PASSWORD=<LYCHEE_PASSWORD>
      #- DB_PASSWORD_FILE=<filename>
      #- DB_OLD_LYCHEE_PREFIX=''
      #- CACHE_DRIVER=file
      #- SESSION_DRIVER=file
      #- SESSION_LIFETIME=120
      #- SECURITY_HEADER_HSTS_ENABLE=false
      #- REDIS_HOST=127.0.0.1
      #- REDIS_PASSWORD=null
      #- REDIS_PASSWORD_FILE=<filename>
      #- REDIS_PORT=6379
      #- MAIL_DRIVER=smtp
      #- MAIL_HOST=smtp.mailtrap.io
      #- MAIL_PORT=2525
      #- MAIL_USERNAME=null
      #- MAIL_PASSWORD=null
      #- MAIL_PASSWORD_FILE=<filename>
      #- MAIL_ENCRYPTION=null
      - STARTUP_DELAY=30
      # - ADMIN_USER=admin
      # - ADMIN_PASSWORD=<ADMIN_PASSWORD>
      # - ADMIN_PASSWORD_FILE=<filename>
    restart: unless-stopped
    depends_on:
      - lychee_db

networks:
  lychee:

volumes:
  mysql:
```