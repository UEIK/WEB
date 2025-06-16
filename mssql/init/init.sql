USE [master]
GO
/****** Object:  Database [ClothingStore]    Script Date: 6/13/2025 11:25:06 PM ******/
CREATE DATABASE [ClothingStore]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'ClothingStore', FILENAME = N'D:\sql_sever\MSSQL16.SQLEXPRESS\MSSQL\DATA\ClothingStore.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'ClothingStore_log', FILENAME = N'D:\sql_sever\MSSQL16.SQLEXPRESS\MSSQL\DATA\ClothingStore_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [ClothingStore] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [ClothingStore].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [ClothingStore] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [ClothingStore] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [ClothingStore] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [ClothingStore] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [ClothingStore] SET ARITHABORT OFF 
GO
ALTER DATABASE [ClothingStore] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [ClothingStore] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [ClothingStore] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [ClothingStore] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [ClothingStore] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [ClothingStore] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [ClothingStore] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [ClothingStore] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [ClothingStore] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [ClothingStore] SET  DISABLE_BROKER 
GO
ALTER DATABASE [ClothingStore] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [ClothingStore] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [ClothingStore] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [ClothingStore] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [ClothingStore] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [ClothingStore] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [ClothingStore] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [ClothingStore] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [ClothingStore] SET  MULTI_USER 
GO
ALTER DATABASE [ClothingStore] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [ClothingStore] SET DB_CHAINING OFF 
GO
ALTER DATABASE [ClothingStore] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [ClothingStore] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [ClothingStore] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [ClothingStore] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [ClothingStore] SET QUERY_STORE = ON
GO
ALTER DATABASE [ClothingStore] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [ClothingStore]
GO
/****** Object:  Table [dbo].[ADDRESS]    Script Date: 6/13/2025 11:25:06 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ADDRESS](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[user_id] [int] NOT NULL,
	[address] [nvarchar](510) NOT NULL,
	[firstname] [nvarchar](200) NOT NULL,
	[lastname] [nvarchar](200) NOT NULL,
	[phone] [nvarchar](40) NOT NULL,
	[created_at] [datetimeoffset](7) NULL,
	[updated_at] [datetimeoffset](7) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CART]    Script Date: 6/13/2025 11:25:06 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CART](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[user_id] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CART_ITEM]    Script Date: 6/13/2025 11:25:06 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CART_ITEM](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[cart_id] [int] NOT NULL,
	[product_id] [int] NOT NULL,
	[quantity] [int] NOT NULL,
	[color] [nvarchar](50) NULL,
	[size] [nvarchar](20) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CATEGORIES]    Script Date: 6/13/2025 11:25:06 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CATEGORIES](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](100) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[GALLERY]    Script Date: 6/13/2025 11:25:06 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GALLERY](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[product_id] [int] NULL,
	[thumbnail] [nvarchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[INVENTORY]    Script Date: 6/13/2025 11:25:06 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[INVENTORY](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](100) NULL,
	[product_id] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ORDER]    Script Date: 6/13/2025 11:25:06 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ORDER](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[user_id] [int] NULL,
	[name] [nvarchar](100) NULL,
	[email] [nvarchar](100) NULL,
	[phone_number] [nvarchar](20) NULL,
	[address] [nvarchar](255) NULL,
	[note] [nvarchar](500) NULL,
	[order_date] [datetime] NULL,
	[status] [nvarchar](50) NULL,
	[total_money] [decimal](18, 2) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ORDER_DETAIL]    Script Date: 6/13/2025 11:25:06 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ORDER_DETAIL](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[order_id] [int] NULL,
	[product_id] [int] NULL,
	[price] [decimal](18, 2) NULL,
	[quantity] [int] NULL,
	[total_money]  AS ([price]*[quantity]) PERSISTED,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PRODUCT]    Script Date: 6/13/2025 11:25:06 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PRODUCT](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[inventory_id] [int] NULL,
	[category_id] [int] NULL,
	[name] [nvarchar](100) NOT NULL,
	[title] [nvarchar](255) NULL,
	[price] [decimal](18, 2) NOT NULL,
	[color] [nvarchar](50) NULL,
	[description] [nvarchar](500) NULL,
	[subcategory_id] [int] NULL,
 CONSTRAINT [PK__PRODUCT__3213E83F607218BB] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PRODUCT_SIZE]    Script Date: 6/13/2025 11:25:06 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PRODUCT_SIZE](
	[product_id] [int] NOT NULL,
	[size] [nvarchar](50) NOT NULL,
	[id] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK_PRODUCT_SIZE] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ROLE]    Script Date: 6/13/2025 11:25:06 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ROLE](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NOT NULL,
	[description] [nvarchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SUBCATEGORIES]    Script Date: 6/13/2025 11:25:06 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SUBCATEGORIES](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](100) NOT NULL,
	[category_id] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SUPPLIER]    Script Date: 6/13/2025 11:25:06 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SUPPLIER](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](100) NOT NULL,
	[contact_info] [nvarchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[USER]    Script Date: 6/13/2025 11:25:06 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[USER](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](100) NOT NULL,
	[email] [nvarchar](100) NOT NULL,
	[phone_number] [nvarchar](20) NULL,
	[address] [nvarchar](255) NULL,
	[password] [nvarchar](255) NOT NULL,
	[role_id] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[ADDRESS] ON 

INSERT [dbo].[ADDRESS] ([id], [user_id], [address], [firstname], [lastname], [phone], [created_at], [updated_at]) VALUES (1, 7, N'Đường 102', N'HUNG', N'PHAM', N'0842081232', CAST(N'2025-06-12T17:55:56.7570000+00:00' AS DateTimeOffset), CAST(N'2025-06-12T17:55:56.7570000+00:00' AS DateTimeOffset))
SET IDENTITY_INSERT [dbo].[ADDRESS] OFF
GO
SET IDENTITY_INSERT [dbo].[CART] ON 

INSERT [dbo].[CART] ([id], [user_id]) VALUES (2, 5)
INSERT [dbo].[CART] ([id], [user_id]) VALUES (1, 6)
INSERT [dbo].[CART] ([id], [user_id]) VALUES (3, 7)
SET IDENTITY_INSERT [dbo].[CART] OFF
GO
SET IDENTITY_INSERT [dbo].[CART_ITEM] ON 

INSERT [dbo].[CART_ITEM] ([id], [cart_id], [product_id], [quantity], [color], [size]) VALUES (16, 1, 9, 1, N'Brown', N'M')
INSERT [dbo].[CART_ITEM] ([id], [cart_id], [product_id], [quantity], [color], [size]) VALUES (17, 3, 38, 1, N'Blue', N'S')
SET IDENTITY_INSERT [dbo].[CART_ITEM] OFF
GO
SET IDENTITY_INSERT [dbo].[CATEGORIES] ON 

INSERT [dbo].[CATEGORIES] ([id], [name]) VALUES (1, N'New Collection')
INSERT [dbo].[CATEGORIES] ([id], [name]) VALUES (2, N'Women')
INSERT [dbo].[CATEGORIES] ([id], [name]) VALUES (3, N'Men')
INSERT [dbo].[CATEGORIES] ([id], [name]) VALUES (4, N'Accessories')
SET IDENTITY_INSERT [dbo].[CATEGORIES] OFF
GO
SET IDENTITY_INSERT [dbo].[GALLERY] ON 

INSERT [dbo].[GALLERY] ([id], [product_id], [thumbnail]) VALUES (4, 9, N'/Img_project/sp1.jpg')
INSERT [dbo].[GALLERY] ([id], [product_id], [thumbnail]) VALUES (5, 10, N'/Img_project/sp2.jpg')
INSERT [dbo].[GALLERY] ([id], [product_id], [thumbnail]) VALUES (6, 11, N'/Img_project/sp3.jpg')
INSERT [dbo].[GALLERY] ([id], [product_id], [thumbnail]) VALUES (7, 12, N'/Img_project/sp4.jpg')
INSERT [dbo].[GALLERY] ([id], [product_id], [thumbnail]) VALUES (8, 13, N'/Img_project/sp5.jpg')
INSERT [dbo].[GALLERY] ([id], [product_id], [thumbnail]) VALUES (9, 14, N'/Img_project/sp6.jpg')
INSERT [dbo].[GALLERY] ([id], [product_id], [thumbnail]) VALUES (10, 15, N'/Img_project/sp7.jpg')
INSERT [dbo].[GALLERY] ([id], [product_id], [thumbnail]) VALUES (11, 16, N'/Img_project/sp8.jpg')
INSERT [dbo].[GALLERY] ([id], [product_id], [thumbnail]) VALUES (12, 17, N'/Img_project/sp9.jpg')
INSERT [dbo].[GALLERY] ([id], [product_id], [thumbnail]) VALUES (13, 18, N'/Img_project/sp10.jpg')
INSERT [dbo].[GALLERY] ([id], [product_id], [thumbnail]) VALUES (14, 19, N'/Img_project/sp11.jpg')
INSERT [dbo].[GALLERY] ([id], [product_id], [thumbnail]) VALUES (15, 20, N'/Img_project/sp12.jpg')
INSERT [dbo].[GALLERY] ([id], [product_id], [thumbnail]) VALUES (16, 21, N'/Img_project/sp13.jpg')
INSERT [dbo].[GALLERY] ([id], [product_id], [thumbnail]) VALUES (17, 22, N'/Img_project/sp14.jpg')
INSERT [dbo].[GALLERY] ([id], [product_id], [thumbnail]) VALUES (18, 23, N'/Img_project/sp15.jpg')
INSERT [dbo].[GALLERY] ([id], [product_id], [thumbnail]) VALUES (19, 24, N'/Img_project/sp16.jpg')
INSERT [dbo].[GALLERY] ([id], [product_id], [thumbnail]) VALUES (20, 25, N'/Img_project/sp17.jpg')
INSERT [dbo].[GALLERY] ([id], [product_id], [thumbnail]) VALUES (21, 26, N'/Img_project/sp18.jpg')
INSERT [dbo].[GALLERY] ([id], [product_id], [thumbnail]) VALUES (22, 27, N'/Img_project/sp19.jpg')
INSERT [dbo].[GALLERY] ([id], [product_id], [thumbnail]) VALUES (23, 28, N'/Img_project/sp20.jpg')
INSERT [dbo].[GALLERY] ([id], [product_id], [thumbnail]) VALUES (24, 29, N'/Img_project/sp21.jpg')
INSERT [dbo].[GALLERY] ([id], [product_id], [thumbnail]) VALUES (25, 30, N'/Img_project/sp22.jpg')
INSERT [dbo].[GALLERY] ([id], [product_id], [thumbnail]) VALUES (26, 31, N'/Img_project/sp23.jpg')
INSERT [dbo].[GALLERY] ([id], [product_id], [thumbnail]) VALUES (27, 32, N'/Img_project/sp23.jpg')
INSERT [dbo].[GALLERY] ([id], [product_id], [thumbnail]) VALUES (28, 33, N'/Img_project/sp23.jpg')
INSERT [dbo].[GALLERY] ([id], [product_id], [thumbnail]) VALUES (29, 34, N'/Img_project/1745150622740.jpg')
INSERT [dbo].[GALLERY] ([id], [product_id], [thumbnail]) VALUES (30, 35, N'/Img_project/1745152245131.jpg')
INSERT [dbo].[GALLERY] ([id], [product_id], [thumbnail]) VALUES (31, 36, N'/Img_project/1745153173781.jpg')
INSERT [dbo].[GALLERY] ([id], [product_id], [thumbnail]) VALUES (32, 37, N'/Img_project/1745572420600.png')
INSERT [dbo].[GALLERY] ([id], [product_id], [thumbnail]) VALUES (33, 38, N'/Img_project/1745572652351.png')
INSERT [dbo].[GALLERY] ([id], [product_id], [thumbnail]) VALUES (34, 39, N'/Img_project/1745572753763.png')
INSERT [dbo].[GALLERY] ([id], [product_id], [thumbnail]) VALUES (35, 40, N'/Img_project/1745572814303.png')
INSERT [dbo].[GALLERY] ([id], [product_id], [thumbnail]) VALUES (36, 41, N'/Img_project/1745572868643.png')
INSERT [dbo].[GALLERY] ([id], [product_id], [thumbnail]) VALUES (37, 42, N'/Img_project/1745572964177.png')
INSERT [dbo].[GALLERY] ([id], [product_id], [thumbnail]) VALUES (38, 43, N'/Img_project/1745573005629.png')
INSERT [dbo].[GALLERY] ([id], [product_id], [thumbnail]) VALUES (39, 44, N'/Img_project/1745581530596.png')
INSERT [dbo].[GALLERY] ([id], [product_id], [thumbnail]) VALUES (40, 45, N'/Img_project/1745582003049.png')
INSERT [dbo].[GALLERY] ([id], [product_id], [thumbnail]) VALUES (41, 46, N'/Img_project/1745582164070.jpg')
SET IDENTITY_INSERT [dbo].[GALLERY] OFF
GO
SET IDENTITY_INSERT [dbo].[INVENTORY] ON 

INSERT [dbo].[INVENTORY] ([id], [name], [product_id]) VALUES (2, N'kho 1', NULL)
SET IDENTITY_INSERT [dbo].[INVENTORY] OFF
GO
SET IDENTITY_INSERT [dbo].[PRODUCT] ON 

INSERT [dbo].[PRODUCT] ([id], [inventory_id], [category_id], [name], [title], [price], [color], [description], [subcategory_id]) VALUES (9, 2, 2, N'Vintage bohem Y2K set', N'Vintage bohem Y2K set', CAST(3500.00 AS Decimal(18, 2)), N'Brown', N'A set include shirt, skirt, sock and headband
  SIZE  S: 45KG - 50KG
		M: 50KG - 55KG
		L: 55KG - 60KG', 3)
INSERT [dbo].[PRODUCT] ([id], [inventory_id], [category_id], [name], [title], [price], [color], [description], [subcategory_id]) VALUES (10, 2, 3, N'Navy sweater collar shirt', N'Navy sweater collar shirt', CAST(3000.00 AS Decimal(18, 2)), N'Blue', N'SIZE  S: 50KG - 55KG
		 M: 55KG - 60KG
		 L: 60KG - 65KG', 5)
INSERT [dbo].[PRODUCT] ([id], [inventory_id], [category_id], [name], [title], [price], [color], [description], [subcategory_id]) VALUES (11, 2, 3, N'EU-wide leg pants', N'EU-wide leg pants', CAST(3500.00 AS Decimal(18, 2)), N'Black', N'SIZE  S: 50KG - 55KG
		 M: 55KG - 60KG
		 L: 60KG - 65KG', 6)
INSERT [dbo].[PRODUCT] ([id], [inventory_id], [category_id], [name], [title], [price], [color], [description], [subcategory_id]) VALUES (12, 2, 2, N'Silk thread denim pants', N'Silk thread denim pants', CAST(3500.00 AS Decimal(18, 2)), N'Gray', N'SIZE  S: 45KG - 50KG
		 M: 50KG - 55KG
		 L: 55KG - 60KG', 2)
INSERT [dbo].[PRODUCT] ([id], [inventory_id], [category_id], [name], [title], [price], [color], [description], [subcategory_id]) VALUES (13, 2, 2, N'JP schooly set', N'JP schooly set', CAST(5000.00 AS Decimal(18, 2)), N'Black', N'A set include sweater, skirt and bow tie
  SIZE   S: 45KG - 50KG
		 M: 50KG - 55KG
		 L: 55KG - 60KG', 3)
INSERT [dbo].[PRODUCT] ([id], [inventory_id], [category_id], [name], [title], [price], [color], [description], [subcategory_id]) VALUES (15, 2, 2, N'Heartbelt mini skirt', N'Heartbelt mini skirt', CAST(2800.00 AS Decimal(18, 2)), N'Black', N'SIZE  S: 45KG - 50KG
		 M: 50KG - 55KG
		 L: 55KG - 60KG', 2)
INSERT [dbo].[PRODUCT] ([id], [inventory_id], [category_id], [name], [title], [price], [color], [description], [subcategory_id]) VALUES (16, 2, 3, N'Star embroided jeans', N'Star enbroided jeans', CAST(3500.00 AS Decimal(18, 2)), N'Blue', N'SIZE  S: 50KG - 55KG
		 M: 55KG - 60KG
		 L: 60KG - 65KG', 6)
INSERT [dbo].[PRODUCT] ([id], [inventory_id], [category_id], [name], [title], [price], [color], [description], [subcategory_id]) VALUES (17, 2, 3, N'Retro hooded work jacket', N'Retro hooded work jacket', CAST(3700.00 AS Decimal(18, 2)), N'Green', N'Freesize < 60KG', 7)
INSERT [dbo].[PRODUCT] ([id], [inventory_id], [category_id], [name], [title], [price], [color], [description], [subcategory_id]) VALUES (18, 2, 3, N'Retro work jacket', N'Retro work jacket', CAST(3700.00 AS Decimal(18, 2)), N'Blue', N'Freesize < 60KG', 7)
INSERT [dbo].[PRODUCT] ([id], [inventory_id], [category_id], [name], [title], [price], [color], [description], [subcategory_id]) VALUES (19, 2, 3, N'Loose-fit work pants', N'Loose-fit work pants', CAST(3500.00 AS Decimal(18, 2)), N'Kaki', N'SIZE  S: 50KG - 55KG
		 M: 55KG - 60KG
		 L: 60KG - 65KG', 6)
INSERT [dbo].[PRODUCT] ([id], [inventory_id], [category_id], [name], [title], [price], [color], [description], [subcategory_id]) VALUES (20, 2, 2, N'Long-sleeves silver shirt', N'Long-sleeves silver shirt', CAST(2500.00 AS Decimal(18, 2)), N'Gray', N'Freesize < 52KG', 1)
INSERT [dbo].[PRODUCT] ([id], [inventory_id], [category_id], [name], [title], [price], [color], [description], [subcategory_id]) VALUES (21, 2, 4, N'Y2K butter-start shoulder bag', N'Y2K butter-start shoulder bag', CAST(2700.00 AS Decimal(18, 2)), N'White', N' ', 10)
INSERT [dbo].[PRODUCT] ([id], [inventory_id], [category_id], [name], [title], [price], [color], [description], [subcategory_id]) VALUES (22, 2, 4, N'Medium basic shoulder bag', N'Medium basic shoulder bag', CAST(2900.00 AS Decimal(18, 2)), N'Black', N' ', 9)
INSERT [dbo].[PRODUCT] ([id], [inventory_id], [category_id], [name], [title], [price], [color], [description], [subcategory_id]) VALUES (23, 2, 4, N'Matching denim shoulder bag', N'Matching denim shoulder bag', CAST(2400.00 AS Decimal(18, 2)), N'Blue', N' ', 10)
INSERT [dbo].[PRODUCT] ([id], [inventory_id], [category_id], [name], [title], [price], [color], [description], [subcategory_id]) VALUES (24, 2, 4, N'Cargo medium shoulder bag', N'Cargo medium shoulder bag', CAST(2600.00 AS Decimal(18, 2)), N'Black', N' ', 9)
INSERT [dbo].[PRODUCT] ([id], [inventory_id], [category_id], [name], [title], [price], [color], [description], [subcategory_id]) VALUES (25, 2, 4, N'Black-pink denim shoulder bag', N'Black-pink denim shoulder bag', CAST(2800.00 AS Decimal(18, 2)), N'Black', N' ', 10)
INSERT [dbo].[PRODUCT] ([id], [inventory_id], [category_id], [name], [title], [price], [color], [description], [subcategory_id]) VALUES (27, 2, 2, N'Cloud silk ribbon sneaker', N'Cloud silk ribbon sneaker', CAST(4200.00 AS Decimal(18, 2)), N'White', N' ', 4)
INSERT [dbo].[PRODUCT] ([id], [inventory_id], [category_id], [name], [title], [price], [color], [description], [subcategory_id]) VALUES (28, 2, 2, N'Grid sneaker', N'Grid sneaker', CAST(4000.00 AS Decimal(18, 2)), N'White', N' ', 4)
INSERT [dbo].[PRODUCT] ([id], [inventory_id], [category_id], [name], [title], [price], [color], [description], [subcategory_id]) VALUES (29, 2, 3, N'Machi sneaker', N'Machi sneaker', CAST(4000.00 AS Decimal(18, 2)), N'White', N' ', 8)
INSERT [dbo].[PRODUCT] ([id], [inventory_id], [category_id], [name], [title], [price], [color], [description], [subcategory_id]) VALUES (31, 2, 3, N'Matching star sneaker', N'Matching star sneaker', CAST(4300.00 AS Decimal(18, 2)), N'Blue', N' ', 8)
INSERT [dbo].[PRODUCT] ([id], [inventory_id], [category_id], [name], [title], [price], [color], [description], [subcategory_id]) VALUES (37, NULL, 1, N'Layered crest polo', N'Layered crest polo', CAST(2700.00 AS Decimal(18, 2)), N'Black', N'Freesize < 65KG', NULL)
INSERT [dbo].[PRODUCT] ([id], [inventory_id], [category_id], [name], [title], [price], [color], [description], [subcategory_id]) VALUES (38, NULL, 1, N'Plaid tie layered shirt', N'Plaid tie layered shirt', CAST(3000.00 AS Decimal(18, 2)), N'Blue', N'SIZE  S: 50KG - 55KG     
      M: 55KG - 60KG     
      L: 60KG - 65KG', NULL)
INSERT [dbo].[PRODUCT] ([id], [inventory_id], [category_id], [name], [title], [price], [color], [description], [subcategory_id]) VALUES (39, NULL, 1, N'Crochet contrast vacation shirt ', N'Crochet contrast vacation shirt ', CAST(3100.00 AS Decimal(18, 2)), N'Blue', N'SIZE  S: 50KG - 55KG     
      M: 55KG - 60KG     
      L: 60KG - 65KG
      XL: < 75KG', NULL)
INSERT [dbo].[PRODUCT] ([id], [inventory_id], [category_id], [name], [title], [price], [color], [description], [subcategory_id]) VALUES (40, NULL, 1, N'Fuzzy dog T-shirt ', N'Fuzzy dog T-shirt ', CAST(2300.00 AS Decimal(18, 2)), N'Black', N'Freesize < 60KG', NULL)
INSERT [dbo].[PRODUCT] ([id], [inventory_id], [category_id], [name], [title], [price], [color], [description], [subcategory_id]) VALUES (41, NULL, 1, N'Colorblock sport jacket', N'Colorblock sport jacket', CAST(4200.00 AS Decimal(18, 2)), N'Gray', N'Freesize < 65KG', NULL)
INSERT [dbo].[PRODUCT] ([id], [inventory_id], [category_id], [name], [title], [price], [color], [description], [subcategory_id]) VALUES (42, NULL, 1, N'Vintage washed plaid workwear jacket', N'Vintage washed plaid workwear jacket', CAST(4500.00 AS Decimal(18, 2)), N'Blue', N'SIZE  S: 50KG - 55KG     
      M: 55KG - 60KG     
      L: 60KG - 65KG', NULL)
INSERT [dbo].[PRODUCT] ([id], [inventory_id], [category_id], [name], [title], [price], [color], [description], [subcategory_id]) VALUES (43, NULL, 1, N'Vintage washed plaid workwear jacket', N'Vintage washed plaid workwear jacket', CAST(4500.00 AS Decimal(18, 2)), N'Kaki', N'SIZE  S: 50KG - 55KG     
      M: 55KG - 60KG     
      L: 60KG - 65KG', NULL)
INSERT [dbo].[PRODUCT] ([id], [inventory_id], [category_id], [name], [title], [price], [color], [description], [subcategory_id]) VALUES (45, NULL, 2, N'Grey dexter sneaker', N'Grey dexter sneaker', CAST(2900.00 AS Decimal(18, 2)), N'Gray', N'', 4)
SET IDENTITY_INSERT [dbo].[PRODUCT] OFF
GO
SET IDENTITY_INSERT [dbo].[PRODUCT_SIZE] ON 

INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (10, N'S', 18)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (10, N'M', 19)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (10, N'L', 20)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (11, N'S', 21)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (11, N'M', 22)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (11, N'L', 23)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (12, N'S', 27)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (12, N'M', 28)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (12, N'L', 29)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (13, N'S', 30)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (13, N'M', 31)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (13, N'L', 32)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (15, N'S', 34)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (15, N'M', 35)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (15, N'L', 36)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (16, N'S', 37)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (16, N'M', 38)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (16, N'L', 39)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (17, N'FREESIZE', 40)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (18, N'FREESIZE', 41)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (19, N'S', 42)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (19, N'M', 43)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (19, N'L', 44)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (20, N'FREESIZE', 45)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (21, N'one size', 46)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (22, N'one size', 47)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (23, N'one size', 48)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (24, N'one size', 49)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (25, N'one size', 50)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (27, N'36', 56)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (27, N'37', 57)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (27, N'38', 58)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (27, N'39', 59)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (27, N'40', 60)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (28, N'36', 61)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (28, N'37', 62)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (28, N'38', 63)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (28, N'39', 64)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (28, N'40', 65)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (29, N'39', 66)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (29, N'40', 67)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (29, N'41', 68)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (29, N'42', 69)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (29, N'43', 70)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (31, N'39', 76)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (31, N'40', 77)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (31, N'41', 78)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (31, N'42', 79)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (31, N'43', 80)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (37, N'FREESIZE', 96)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (38, N'S', 97)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (38, N'M', 98)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (38, N'L', 99)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (39, N'S', 100)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (39, N'M', 101)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (39, N'L', 102)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (39, N'XL', 103)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (40, N'FREESIZE', 104)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (41, N'FREESIZE', 105)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (42, N'S', 106)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (42, N'M', 107)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (42, N'L', 108)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (43, N'S', 109)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (43, N'M', 110)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (43, N'L', 111)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (45, N'36', 113)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (45, N'37', 114)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (45, N'38', 115)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (45, N'39', 116)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (9, N'S', 127)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (9, N'M', 128)
INSERT [dbo].[PRODUCT_SIZE] ([product_id], [size], [id]) VALUES (9, N'L', 129)
SET IDENTITY_INSERT [dbo].[PRODUCT_SIZE] OFF
GO
SET IDENTITY_INSERT [dbo].[ROLE] ON 

INSERT [dbo].[ROLE] ([id], [name], [description]) VALUES (1, N'user', N'user')
INSERT [dbo].[ROLE] ([id], [name], [description]) VALUES (2, N'admin', N'admin')
SET IDENTITY_INSERT [dbo].[ROLE] OFF
GO
SET IDENTITY_INSERT [dbo].[SUBCATEGORIES] ON 

INSERT [dbo].[SUBCATEGORIES] ([id], [name], [category_id]) VALUES (1, N'Women Tops', 2)
INSERT [dbo].[SUBCATEGORIES] ([id], [name], [category_id]) VALUES (2, N'Women Bottoms', 2)
INSERT [dbo].[SUBCATEGORIES] ([id], [name], [category_id]) VALUES (3, N'Dresses', 2)
INSERT [dbo].[SUBCATEGORIES] ([id], [name], [category_id]) VALUES (4, N'Women Shoes', 2)
INSERT [dbo].[SUBCATEGORIES] ([id], [name], [category_id]) VALUES (5, N'Men Tops', 3)
INSERT [dbo].[SUBCATEGORIES] ([id], [name], [category_id]) VALUES (6, N'Men Bottoms', 3)
INSERT [dbo].[SUBCATEGORIES] ([id], [name], [category_id]) VALUES (7, N'Jackets', 3)
INSERT [dbo].[SUBCATEGORIES] ([id], [name], [category_id]) VALUES (8, N'Men Shoes', 3)
INSERT [dbo].[SUBCATEGORIES] ([id], [name], [category_id]) VALUES (9, N'Men Accessories', 4)
INSERT [dbo].[SUBCATEGORIES] ([id], [name], [category_id]) VALUES (10, N'Women Accessories', 4)
SET IDENTITY_INSERT [dbo].[SUBCATEGORIES] OFF
GO
SET IDENTITY_INSERT [dbo].[USER] ON 

INSERT [dbo].[USER] ([id], [name], [email], [phone_number], [address], [password], [role_id]) VALUES (5, N'Tiên', N'runnningman7012@gmail.com', NULL, NULL, N'$2b$10$bSgfV9iTxgx8F6Fp4Rf4B.6TgVfWHKqhXGmUbcBa6x6rYO4qdOabO', 2)
INSERT [dbo].[USER] ([id], [name], [email], [phone_number], [address], [password], [role_id]) VALUES (6, N'Khách', N'test123@gmail.com', NULL, NULL, N'$2b$10$eenhMOk86yUEpchmrEHqm.JsMPPc63PQ/4.LIxS0yu8ktsqMrMlpm', 1)
INSERT [dbo].[USER] ([id], [name], [email], [phone_number], [address], [password], [role_id]) VALUES (7, N'hungpham', N'hungphamtuan@gmail.com', NULL, NULL, N'$2b$10$QyjIfq6Oz9lloYVrIYgcLeaOZuEthKPLyL07PhLZXKrLTNWNUmWVa', 2)
SET IDENTITY_INSERT [dbo].[USER] OFF
GO
/****** Object:  Index [UQ__CART__B9BE370E06A5663E]    Script Date: 6/13/2025 11:25:07 PM ******/
ALTER TABLE [dbo].[CART] ADD UNIQUE NONCLUSTERED 
(
	[user_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [UQ__INVENTOR__47027DF4630BB32B]    Script Date: 6/13/2025 11:25:07 PM ******/
ALTER TABLE [dbo].[INVENTORY] ADD UNIQUE NONCLUSTERED 
(
	[product_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__USER__AB6E6164B7823149]    Script Date: 6/13/2025 11:25:07 PM ******/
ALTER TABLE [dbo].[USER] ADD UNIQUE NONCLUSTERED 
(
	[email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CART_ITEM] ADD  DEFAULT ((1)) FOR [quantity]
GO
ALTER TABLE [dbo].[ORDER] ADD  DEFAULT (getdate()) FOR [order_date]
GO
ALTER TABLE [dbo].[ADDRESS]  WITH CHECK ADD FOREIGN KEY([user_id])
REFERENCES [dbo].[USER] ([id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[CART]  WITH CHECK ADD FOREIGN KEY([user_id])
REFERENCES [dbo].[USER] ([id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[CART_ITEM]  WITH CHECK ADD FOREIGN KEY([cart_id])
REFERENCES [dbo].[CART] ([id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[CART_ITEM]  WITH CHECK ADD FOREIGN KEY([product_id])
REFERENCES [dbo].[PRODUCT] ([id])
GO
ALTER TABLE [dbo].[ORDER]  WITH CHECK ADD FOREIGN KEY([user_id])
REFERENCES [dbo].[USER] ([id])
GO
ALTER TABLE [dbo].[ORDER_DETAIL]  WITH CHECK ADD FOREIGN KEY([order_id])
REFERENCES [dbo].[ORDER] ([id])
GO
ALTER TABLE [dbo].[ORDER_DETAIL]  WITH CHECK ADD  CONSTRAINT [FK__ORDER_DET__produ__4D94879B] FOREIGN KEY([product_id])
REFERENCES [dbo].[PRODUCT] ([id])
GO
ALTER TABLE [dbo].[ORDER_DETAIL] CHECK CONSTRAINT [FK__ORDER_DET__produ__4D94879B]
GO
ALTER TABLE [dbo].[PRODUCT]  WITH CHECK ADD  CONSTRAINT [FK__PRODUCT__categor__4E88ABD4] FOREIGN KEY([category_id])
REFERENCES [dbo].[CATEGORIES] ([id])
GO
ALTER TABLE [dbo].[PRODUCT] CHECK CONSTRAINT [FK__PRODUCT__categor__4E88ABD4]
GO
ALTER TABLE [dbo].[PRODUCT_SIZE]  WITH CHECK ADD  CONSTRAINT [FK_PRODUCT_SIZE_PRODUCT] FOREIGN KEY([product_id])
REFERENCES [dbo].[PRODUCT] ([id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[PRODUCT_SIZE] CHECK CONSTRAINT [FK_PRODUCT_SIZE_PRODUCT]
GO
ALTER TABLE [dbo].[SUBCATEGORIES]  WITH CHECK ADD FOREIGN KEY([category_id])
REFERENCES [dbo].[CATEGORIES] ([id])
GO
ALTER TABLE [dbo].[USER]  WITH CHECK ADD FOREIGN KEY([role_id])
REFERENCES [dbo].[ROLE] ([id])
GO
USE [master]
GO
ALTER DATABASE [ClothingStore] SET  READ_WRITE 
GO
