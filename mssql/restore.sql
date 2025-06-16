USE [master]
GO
RESTORE DATABASE [ClothingStore]
FROM DISK = N'/var/opt/mssql/backup/GraptifyDB_backup.bak'
WITH 
    MOVE 'ClothingStore' TO '/var/opt/mssql/data/ClothingStore.mdf',
    MOVE 'ClothingStore_log' TO '/var/opt/mssql/data/DClothingStore_log.ldf',
    REPLACE
GO
