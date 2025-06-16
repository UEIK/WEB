#!/bin/bash

echo "Đang chờ database ClothingStore được khởi tạo..."

MAX_TRIES=30
i=0
while [ $i -lt $MAX_TRIES ]; do
  RESULT=$(sqlcmd -S mssql_server  -U sa -P 'nhomNaymuoidiem!' -Q "IF DB_ID('ClothingStore') IS NOT NULL PRINT 'EXISTS'" -h -1 -W)
  if [[ "$RESULT" == "EXISTS" ]]; then
    echo "ClothingStore đã sẵn sàng."
    break
  fi
  echo "Chưa có DB. Đợi thêm 5 giây..."
  sleep 5
  ((i++))
done

if [ $i -eq $MAX_TRIES ]; then
  echo "ClothingStore chưa sẵn sàng sau $MAX_TRIES lần thử. Thoát."
  exit 1
fi

# 🛠 Bắt đầu build và chạy backend
echo "Biên dịch source..."
npm run build-src || { echo "Build thất bại"; exit 1; }

echo "Chạy backend..."
npm run build