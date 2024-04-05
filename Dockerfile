# Sử dụng một image Node.js cụ thể
FROM node:20-alpine

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Copy package.json và package-lock.json vào thư mục làm việc
COPY package*.json ./

# Cài đặt các dependencies của ứng dụng
RUN npm install --legacy-peer-deps

# Cài đặt @sanity/cli toàn cầu
RUN npm install -g @sanity/cli

# Copy tất cả các file trong thư mục gốc vào thư mục làm việc
COPY . .

# Build ứng dụng Next.js
RUN npm run build

# Expose cổng 3000 (hoặc cổng mà ứng dụng của bạn đang sử dụng)
EXPOSE 3000

# Command để chạy ứng dụng khi container được khởi chạy
CMD npm start