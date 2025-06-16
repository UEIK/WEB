FROM mcr.microsoft.com/mssql/server:2022-latest

USER root

ENV ACCEPT_EULA=Y
ENV SA_PASSWORD=nhomnaymanhNhat1!
ENV DEBIAN_FRONTEND=noninteractive
ENV PATH="$PATH:/opt/mssql-tools/bin"

RUN apt-get update && \
    apt-get install -y curl apt-transport-https gnupg software-properties-common locales && \
    locale-gen en_US.UTF-8 && \
    curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add - && \
    curl https://packages.microsoft.com/config/ubuntu/22.04/prod.list -o /etc/apt/sources.list.d/mssql-release.list && \
    apt-get update && \
    ACCEPT_EULA=Y apt-get install -y mssql-tools unixodbc-dev && \
    ln -s /opt/mssql-tools/bin/* /usr/local/bin


COPY ./backup/ClothingStoreBackup.bak /var/opt/mssql/backup/ClothingStoreBackup.bak

# Copy script và dữ liệu
COPY ./init/init.sql /usr/src/app/init.sql
COPY ./init/init.sh /usr/src/app/init.sh
COPY restore.sql /init/restore.sql
RUN chmod +x /usr/src/app/init.sh

# Chạy script khởi tạo
CMD ["/usr/src/app/init.sh"]
