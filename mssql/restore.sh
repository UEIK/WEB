#!/bin/bash
set -e  # Ngắt script nếu bất kỳ lệnh nào lỗi
echo "Restoring database from backup..."

sqlcmd -S localhost -U sa -P "$SA_PASSWORD" -Q "
RESTORE DATABASE [ClothingStore]
FROM DISK = N'/var/opt/mssql/backup/ClothingStoreBackup.bak'
WITH MOVE 'ClothingStore' TO '/var/opt/mssql/data/ClothingStore.mdf',
     MOVE 'ClothingStore_log' TO '/var/opt/mssql/data/ClothingStore_log.ldf',
     REPLACE
"

echo "Restore completed!"
