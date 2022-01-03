FROM nginx:1.20.2
COPY dist/ /xy_space
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
