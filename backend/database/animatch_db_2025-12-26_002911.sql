-- Database Client 8.4.4
-- Host: 127.0.0.1 Port: 3306 Database: animatch_db 
-- Dump is still an early version, please use the dumped SQL with caution

/*!40101 SET NAMES utf8 */;
/*!40014 SET FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET SQL_NOTES=0 */;
CREATE TABLE IF NOT EXISTS `adoptions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pet_id` int NOT NULL,
  `user_id` int NOT NULL,
  `status` varchar(20) DEFAULT 'pending',
  `application_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `notes` text,
  PRIMARY KEY (`id`),
  KEY `idx_status` (`status`),
  KEY `idx_pet_id` (`pet_id`),
  KEY `idx_user_id` (`user_id`),
  CONSTRAINT `adoptions_ibfk_1` FOREIGN KEY (`pet_id`) REFERENCES `pets` (`id`) ON DELETE CASCADE,
  CONSTRAINT `adoptions_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `pets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `species` varchar(50) NOT NULL,
  `breed` varchar(100) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `size` varchar(20) DEFAULT NULL,
  `color` varchar(50) DEFAULT NULL,
  `description` text,
  `image_url` varchar(255) DEFAULT NULL,
  `adoption_status` varchar(20) DEFAULT 'available',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_species` (`species`),
  KEY `idx_adoption_status` (`adoption_status`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `full_name` varchar(100) DEFAULT NULL,
  `email` varchar(120) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `idx_email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO adoptions(id,pet_id,user_id,status,application_date,notes) VALUES('1','1','1','''pending''','''2025-12-25 00:27:09''','X''496e746572657374656420696e2061646f7074696e6720576869736b6572732066726f6d2073656172636820726573756c7473''');

INSERT INTO pets(id,name,species,breed,age,gender,size,color,description,image_url,adoption_status,created_at,updated_at) VALUES('1','''Whiskers''','''cat''','''Persian''','2','''male''','''medium''','''white''','X''4120667269656e646c7920616e6420706c617966756c20636174206c6f6f6b696e6720666f722061206c6f76696e6720686f6d652e''','''/images/cat1.jpg''','''available''','''2025-12-24 23:42:21''','''2025-12-24 23:42:21'''),('2','''Buddy''','''dog''','''Golden Retriever''','3','''male''','''large''','''golden''','X''416e20656e6572676574696320616e64206c6f79616c20636f6d70616e696f6e2077686f206c6f76657320746f20706c61792066657463682e''','''/images/dog1.jpg''','''available''','''2025-12-24 23:42:21''','''2025-12-24 23:42:21'''),('3','''Luna''','''cat''','''Siamese''','1','''female''','''small''','''cream''','X''4120737765657420616e642067656e746c65206b697474656e20776974682062656175746966756c20626c756520657965732e''','''/images/cat2.jpg''','''available''','''2025-12-24 23:42:21''','''2025-12-24 23:42:21'''),('4','''Max''','''dog''','''Labrador''','4','''male''','''large''','''black''','X''412077656c6c2d747261696e656420646f672077686f2069732067726561742077697468206b69647320616e64206f7468657220706574732e''','''/images/dog2.jpg''','''available''','''2025-12-24 23:42:21''','''2025-12-24 23:42:21''');
INSERT INTO users (full_name, email, phone, location) 
VALUES (
  'John Doe',  
  'john@example.com', 
  '1234567890',
  'New York'
);