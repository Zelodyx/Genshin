-- MySQL dump 10.13  Distrib 8.0.31, for Linux (x86_64)
--
-- Host: localhost    Database: Genshin
-- ------------------------------------------------------
-- Server version	8.0.31-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Characters`
--

DROP TABLE IF EXISTS `Characters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Characters` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  `Gender` char(1) DEFAULT NULL,
  `Rarity` int NOT NULL,
  `Vision` varchar(30) NOT NULL,
  `Weapon` varchar(30) NOT NULL,
  `Affiliation` varchar(30) NOT NULL,
  `Birthday` varchar(30) NOT NULL,
  `Region` varchar(30) NOT NULL,
  `Constellation` varchar(30) NOT NULL,
  `Active` char(1) NOT NULL,
  `Created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Characters`
--

LOCK TABLES `Characters` WRITE;
/*!40000 ALTER TABLE `Characters` DISABLE KEYS */;
INSERT INTO `Characters` VALUES (1,'Jean_Gunnhildr','F',5,'Anemo','Sword','Knights_of_Favonius','March_14th','Mondstadt','Leo_Minor','S','2022-11-13 22:04:43','2022-11-22 16:06:58'),(2,'Diluc_Ragnvindr','M',5,'Pyro','Claymore','Dawn_Winery','April_30th','Mondstadt','Noctua','S','2022-11-13 22:38:09','2022-11-14 18:25:24'),(3,'Collei','F',4,'Dendro','Bow','Gandharva_Ville','May_8th','Sumeru','Leptailurus_Cervarius','S','2022-11-13 22:42:42','2022-11-14 18:25:24'),(4,'Kaedehara_Kazuha','M',5,'Anemo','Sword','The_Crux','October_29th','Inazuma','Acer_Palmatum','S','2022-11-15 00:22:00','2022-11-14 18:25:25'),(5,'Raiden_Shogun','F',5,'Electro','Polearm','Inazuma_City','June_26th','Inazuma','Imperatrix_Umbrosa','S','2022-11-15 00:29:14','2022-11-14 18:29:14'),(6,'Hu_Tao','F',5,'Pyro','Polearm','Wangsheng_Funeral_Parlor','July_15th','Liyue','Papilio_Charontis','S','2022-11-16 23:31:38','2022-11-16 17:31:38'),(7,'Tartaglia','M',5,'Hydro','Bow','Fatui','July_20th','Snezhnaya','Monoceros_Caeli','S','2022-11-16 23:32:00','2022-11-16 17:32:00'),(8,'Yae_Miko','F',5,'Electro','Catalyst','Grand_Narukami_Shrine','June_27th','Inazuma','Divina_Vulpes','S','2022-11-22 21:57:33','2022-11-22 16:06:58');
/*!40000 ALTER TABLE `Characters` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-07 22:30:08
