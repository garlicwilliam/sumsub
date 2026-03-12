/*
 Navicat MySQL Data Transfer

 Source Server         : LOCAL
 Source Server Type    : MySQL
 Source Server Version : 80407 (8.4.7)
 Source Host           : localhost:3306
 Source Schema         : sumsub_kyc

 Target Server Type    : MySQL
 Target Server Version : 80407 (8.4.7)
 File Encoding         : 65001

 Date: 12/03/2026 23:23:13
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user_kyc_logs
-- ----------------------------
DROP TABLE IF EXISTS `user_kyc_logs`;
CREATE TABLE `user_kyc_logs` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` bigint NOT NULL,
  `correlation_id` varchar(64) NOT NULL,
  `applicant_id` varchar(64) NOT NULL,
  `user_address` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `level_name` varchar(64) NOT NULL,
  `type` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `review_status` varchar(32) NOT NULL,
  `review_answer` varchar(16) DEFAULT NULL,
  `rejected_type` varchar(16) DEFAULT NULL,
  `client_comment` text,
  `moderation_comment` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `correlation_id` (`correlation_id`) USING BTREE,
  KEY `applicant_id` (`applicant_id`),
  KEY `user_address` (`user_address`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

SET FOREIGN_KEY_CHECKS = 1;
