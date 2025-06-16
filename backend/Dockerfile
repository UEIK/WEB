FROM node:18.20.8

# Tạo thư mục làm việc
WORKDIR /clothingstore/backend

# Copy package.json và cài thư viện
COPY package*.json ./
RUN npm install && npm install -g @babel/core @babel/cli

# Copy toàn bộ mã nguồn
COPY . .

# Build source từ src → build/
RUN npm run build-src

# Chạy server (đúng dòng này mới giữ container sống)
CMD ["node", "build/server.js"]

#docker build --tag node-docker .
#docker run -p 3000:3000 node-docker


# # ⚠️ Cài thêm sqlcmd để backend có thể kiểm tra MSSQL
# RUN apt-get update && \
#     apt-get install -y curl apt-transport-https gnupg && \
#     curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add - && \
#     curl https://packages.microsoft.com/config/debian/10/prod.list -o /etc/apt/sources.list.d/mssql-release.list && \
#     apt-get update && \
#     ACCEPT_EULA=Y apt-get install -y mssql-tools unixodbc-dev && \
#     ln -s /opt/mssql-tools/bin/* /usr/local/bin/

# # 🟢 Copy script kiểm tra DB tồn tại
# COPY wait-for-db.sh /wait-for-db.sh
# RUN chmod +x /wait-for-db.sh

# CMD ["/bin/bash", "/wait-for-db.sh"]
