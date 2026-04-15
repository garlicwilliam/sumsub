/*
 Navicat MySQL Data Transfer

 Source Server         : CEDEFI
 Source Server Type    : MySQL
 Source Server Version : 80042 (8.0.42)
 Source Host           : cedefi-database-instance.cwwyatalynow.ap-northeast-1.rds.amazonaws.com:49123
 Source Schema         : sumsub_kyc

 Target Server Type    : MySQL
 Target Server Version : 80042 (8.0.42)
 File Encoding         : 65001

 Date: 15/04/2026 16:54:41
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
  KEY `applicant_id` (`applicant_id`),
  KEY `user_address` (`user_address`) USING BTREE,
  KEY `correlation_id` (`correlation_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

SET FOREIGN_KEY_CHECKS = 1;
