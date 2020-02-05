FROM nginx

RUN apt-get update
RUN apt-get install -y nginx-extras

RUN rm -v /etc/nginx/conf.d/default.conf
RUN rm -v /etc/nginx/nginx.conf

ADD ./public /var/www/code

ADD ./devops/nginx.webapp.conf /etc/nginx/conf.d/nginx_tmp.conf
ADD ./devops/nginx.root.conf /etc/nginx/nginx.conf
ADD ./devops/webapp_startup.sh /usr/bin/webapp_startup.sh

RUN chmod +x /usr/bin/webapp_startup.sh

CMD ["webapp_startup.sh"]

EXPOSE 80
