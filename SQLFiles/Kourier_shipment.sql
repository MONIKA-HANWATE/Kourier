-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: csm2
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `shipment`
--

DROP TABLE IF EXISTS `shipment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shipment` (
  `shipment_id` int NOT NULL AUTO_INCREMENT,
  `shipment_status` varchar(50) DEFAULT NULL,
  `FK_employee_id` int DEFAULT NULL,
  `FK_user_id` int DEFAULT NULL,
  `FK_parcel_id` int DEFAULT NULL,
  `FK_payment_id` int DEFAULT NULL,
  `FK_service_id` int DEFAULT NULL,
  `FK_complaint_id` int DEFAULT NULL,
  `sender_name` varchar(50) DEFAULT NULL,
  `sender_company_name` varchar(100) DEFAULT NULL,
  `sender_phone` varchar(20) DEFAULT NULL,
  `sender_email` varchar(50) DEFAULT NULL,
  `sender_address_line1` varchar(200) DEFAULT NULL,
  `sender_address_line2` varchar(200) DEFAULT NULL,
  `sender_pin_code` int DEFAULT NULL,
  `sender_city` varchar(50) DEFAULT NULL,
  `sender_state` varchar(50) DEFAULT NULL,
  `sender_country` varchar(50) DEFAULT NULL,
  `receiver_name` varchar(50) DEFAULT NULL,
  `receiver_company_name` varchar(100) DEFAULT NULL,
  `receiver_phone` varchar(20) DEFAULT NULL,
  `receiver_email` varchar(50) DEFAULT NULL,
  `receiver_address_line1` varchar(200) DEFAULT NULL,
  `receiver_address_line2` varchar(200) DEFAULT NULL,
  `receiver_pin_code` int DEFAULT NULL,
  `receiver_city` varchar(50) DEFAULT NULL,
  `receiver_state` varchar(50) DEFAULT NULL,
  `receiver_country` varchar(50) DEFAULT NULL,
  `created_timestamp` datetime DEFAULT CURRENT_TIMESTAMP,
  `pickup_date` datetime DEFAULT NULL,
  `estimated_delivery_date` date DEFAULT NULL,
  `FK_feedback_id` int DEFAULT NULL,
  PRIMARY KEY (`shipment_id`),
  KEY `FK99ciho8u11ehxkb1vs9b2tmxi` (`FK_complaint_id`),
  KEY `FK5l0flsrueawpq2irjssftcy1g` (`FK_parcel_id`),
  KEY `FKjntnqi26fx0yeu7aru4c6fobl` (`FK_payment_id`),
  KEY `FKkrs747inc6xie643dmloewscm` (`FK_service_id`),
  KEY `FKe2sfpdxru67n1hxlhn2ssxvoq` (`FK_employee_id`),
  KEY `FK78pu66b3iijbx8uewdgqlf04v` (`FK_user_id`),
  KEY `FKk1999mdiejknv4f3fhmb97ueg` (`FK_feedback_id`),
  CONSTRAINT `FK5l0flsrueawpq2irjssftcy1g` FOREIGN KEY (`FK_parcel_id`) REFERENCES `parcel` (`parcel_id`),
  CONSTRAINT `FK78pu66b3iijbx8uewdgqlf04v` FOREIGN KEY (`FK_user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FK99ciho8u11ehxkb1vs9b2tmxi` FOREIGN KEY (`FK_complaint_id`) REFERENCES `complaint` (`complaint_id`),
  CONSTRAINT `FKe2sfpdxru67n1hxlhn2ssxvoq` FOREIGN KEY (`FK_employee_id`) REFERENCES `employee` (`employee_id`),
  CONSTRAINT `FKjntnqi26fx0yeu7aru4c6fobl` FOREIGN KEY (`FK_payment_id`) REFERENCES `payment` (`payment_id`),
  CONSTRAINT `FKk1999mdiejknv4f3fhmb97ueg` FOREIGN KEY (`FK_feedback_id`) REFERENCES `feedback` (`feedback_id`),
  CONSTRAINT `FKkrs747inc6xie643dmloewscm` FOREIGN KEY (`FK_service_id`) REFERENCES `service` (`service_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shipment`
--

LOCK TABLES `shipment` WRITE;
/*!40000 ALTER TABLE `shipment` DISABLE KEYS */;
INSERT INTO `shipment` VALUES (1,'Received',7,3,57,20,1,9,'Akshay','Sunbeam','9876543210','akshay@test.com','Main Road','Flat No 302, Phase 1',440001,'Pune','Maharashtra','India','Pranav','Cdac','9873216540','pranav@test.com','Ring Road','Plot No 5, Survey No 2',440010,'Mambai','Maharashtra','India','2022-04-07 15:20:15',NULL,NULL,NULL),(2,'Out For Delivery',NULL,3,58,21,2,10,'Akshay','Sunbeam','9876543210','askshay@test.com','Main Road','Flat No 302',4400001,'Pune','Maharashtra','India','Krishna','Cdac','9875641230','kr@test.com','MG Road','Flat No 201',4400001,'Mumbai','Maharashtra','India','2022-04-07 16:44:49',NULL,NULL,NULL);
/*!40000 ALTER TABLE `shipment` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-11 10:42:12
