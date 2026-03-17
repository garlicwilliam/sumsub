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

 Date: 17/03/2026 21:23:29
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user_env
-- ----------------------------
DROP TABLE IF EXISTS `user_env`;
CREATE TABLE `user_env` (
  `user_address` varchar(64) NOT NULL,
  `env` varchar(32) NOT NULL,
  PRIMARY KEY (`user_address`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

SET FOREIGN_KEY_CHECKS = 1;
