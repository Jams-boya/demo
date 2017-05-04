/*
Navicat MySQL Data Transfer

Source Server         : frank
Source Server Version : 50611
Source Host           : localhost:3306
Source Database       : jiae

Target Server Type    : MYSQL
Target Server Version : 50611
File Encoding         : 65001

Date: 2017-03-03 17:32:27
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `addressinfo`
-- ----------------------------
DROP TABLE IF EXISTS `addressinfo`;
CREATE TABLE `addressinfo` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(10) NOT NULL DEFAULT '' COMMENT '用户名',
  `area` varchar(30) DEFAULT NULL COMMENT '省市区',
  `address` varchar(50) DEFAULT NULL COMMENT '详细地址',
  `phone` varchar(20) DEFAULT NULL COMMENT '电话号码',
  `mobile` char(11) DEFAULT NULL COMMENT '手机号码',
  `default` smallint(1) DEFAULT NULL COMMENT '是否默认',
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `add_user_id` (`user_id`),
  CONSTRAINT `add_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='收货地址表';

-- ----------------------------
-- Records of addressinfo
-- ----------------------------

-- ----------------------------
-- Table structure for `admin`
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(10) NOT NULL,
  `role_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `role_admin_id` (`role_id`),
  CONSTRAINT `role_admin_id` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin
-- ----------------------------

-- ----------------------------
-- Table structure for `brand`
-- ----------------------------
DROP TABLE IF EXISTS `brand`;
CREATE TABLE `brand` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL DEFAULT '' COMMENT '品牌名称',
  `country` varchar(20) DEFAULT NULL COMMENT '国家',
  `content` text,
  `html` text,
  `url` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COMMENT='品牌信息';

-- ----------------------------
-- Records of brand
-- ----------------------------

-- ----------------------------
-- Table structure for `coincertificate`
-- ----------------------------
DROP TABLE IF EXISTS `coincertificate`;
CREATE TABLE `coincertificate` (
  `id` int(11) NOT NULL,
  `price` double NOT NULL,
  `code` varchar(25) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of coincertificate
-- ----------------------------

-- ----------------------------
-- Table structure for `coupon`
-- ----------------------------
DROP TABLE IF EXISTS `coupon`;
CREATE TABLE `coupon` (
  `id` int(11) NOT NULL,
  `price` double NOT NULL,
  `user_id` int(11) NOT NULL,
  `title` varchar(10) NOT NULL,
  `goodstype_id` int(11) DEFAULT NULL,
  `rule` double DEFAULT NULL,
  `starttime` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  `endtime` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `coup_user_id` (`user_id`),
  KEY `coup_goodstype_id` (`goodstype_id`),
  CONSTRAINT `coup_goodstype_id` FOREIGN KEY (`goodstype_id`) REFERENCES `goodstype` (`id`),
  CONSTRAINT `coup_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of coupon
-- ----------------------------

-- ----------------------------
-- Table structure for `favorite`
-- ----------------------------
DROP TABLE IF EXISTS `favorite`;
CREATE TABLE `favorite` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `goods_id` int(11) NOT NULL COMMENT '商品id',
  `time` datetime DEFAULT NULL COMMENT '收藏时间',
  PRIMARY KEY (`id`),
  KEY `fa_goods_id` (`goods_id`),
  CONSTRAINT `fa_goods_id` FOREIGN KEY (`goods_id`) REFERENCES `goods` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='收藏表';

-- ----------------------------
-- Records of favorite
-- ----------------------------

-- ----------------------------
-- Table structure for `goods`
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(20) NOT NULL DEFAULT '' COMMENT '标题',
  `price` double(10,2) NOT NULL COMMENT '价格',
  `brand_id` int(11) NOT NULL COMMENT '品牌外键',
  `time` varchar(10) NOT NULL DEFAULT '' COMMENT '上市时间',
  `power` varchar(20) NOT NULL DEFAULT '' COMMENT '功能',
  `type_id` int(11) NOT NULL COMMENT '商品类型外键',
  `pic1` varchar(10) DEFAULT NULL,
  `pic2` varchar(10) DEFAULT NULL,
  `pic3` varchar(10) DEFAULT '',
  `pic4` varchar(10) DEFAULT NULL,
  `pic5` varchar(10) DEFAULT NULL,
  `pic6` varchar(10) DEFAULT NULL,
  `details` text,
  `transport_price` double(3,0) DEFAULT NULL COMMENT '运费',
  PRIMARY KEY (`id`),
  KEY `id` (`id`,`brand_id`),
  KEY `brand_id` (`brand_id`),
  KEY `type_id` (`type_id`),
  CONSTRAINT `type_id` FOREIGN KEY (`type_id`) REFERENCES `goodstype` (`id`),
  CONSTRAINT `brand_id` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='商品基本信息表';

-- ----------------------------
-- Records of goods
-- ----------------------------

-- ----------------------------
-- Table structure for `goodspicture`
-- ----------------------------
DROP TABLE IF EXISTS `goodspicture`;
CREATE TABLE `goodspicture` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `goods_id` int(11) NOT NULL COMMENT '商品id外键',
  `picture` varchar(10) DEFAULT NULL COMMENT '图片地址',
  PRIMARY KEY (`id`),
  KEY `goods_pic_id` (`goods_id`),
  CONSTRAINT `goods_pic_id` FOREIGN KEY (`goods_id`) REFERENCES `goods` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='商品大图表';

-- ----------------------------
-- Records of goodspicture
-- ----------------------------

-- ----------------------------
-- Table structure for `goodsremark`
-- ----------------------------
DROP TABLE IF EXISTS `goodsremark`;
CREATE TABLE `goodsremark` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `score` smallint(1) NOT NULL COMMENT '评分',
  `time` datetime NOT NULL COMMENT '时间',
  `content` varchar(100) NOT NULL DEFAULT '' COMMENT '内容',
  `yy` int(10) DEFAULT NULL COMMENT '有用',
  `user_id` int(11) NOT NULL COMMENT '用户id',
  `goods_id` int(11) NOT NULL COMMENT '商品id',
  `goods_name` varchar(20) NOT NULL DEFAULT '' COMMENT '商品名称',
  `user_name` varchar(10) NOT NULL DEFAULT '' COMMENT '用户名',
  `pic1` varchar(10) NOT NULL DEFAULT '',
  `pic2` varchar(10) DEFAULT NULL,
  `pic3` varchar(10) DEFAULT NULL,
  `pic4` varchar(10) DEFAULT NULL,
  `pic5` varchar(10) DEFAULT NULL,
  `pic6` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `remark_goods_id` (`goods_id`),
  KEY `remark_user_id` (`user_id`),
  CONSTRAINT `remark_goods_id` FOREIGN KEY (`goods_id`) REFERENCES `goods` (`id`),
  CONSTRAINT `remark_user_id` FOREIGN KEY (`user_id`) REFERENCES `goods` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='商品评论表';

-- ----------------------------
-- Records of goodsremark
-- ----------------------------

-- ----------------------------
-- Table structure for `goodsresremark`
-- ----------------------------
DROP TABLE IF EXISTS `goodsresremark`;
CREATE TABLE `goodsresremark` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `remark_id` int(11) NOT NULL COMMENT '评论表id',
  `time` datetime NOT NULL COMMENT '评论时间',
  `content` varchar(100) NOT NULL DEFAULT '' COMMENT '评论内容',
  `user_id` int(11) NOT NULL COMMENT '用户id',
  `user_name` varchar(10) NOT NULL DEFAULT '' COMMENT '用户名',
  PRIMARY KEY (`id`),
  KEY `res_remark_id` (`remark_id`),
  CONSTRAINT `res_remark_id` FOREIGN KEY (`remark_id`) REFERENCES `goodsremark` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='评论回复表';

-- ----------------------------
-- Records of goodsresremark
-- ----------------------------

-- ----------------------------
-- Table structure for `goodstype`
-- ----------------------------
DROP TABLE IF EXISTS `goodstype`;
CREATE TABLE `goodstype` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL DEFAULT '' COMMENT '类型名称',
  `parent_id` int(11) NOT NULL COMMENT '父id',
  `remark` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `parent_id` (`parent_id`),
  CONSTRAINT `parent_id` FOREIGN KEY (`parent_id`) REFERENCES `goodstype` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8 COMMENT='商品类型表';

-- ----------------------------
-- Records of goodstype
-- ----------------------------

-- ----------------------------
-- Table structure for `order`
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `goods_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `count` smallint(6) DEFAULT NULL,
  `singlePrice` double NOT NULL,
  `price` double NOT NULL,
  `address_id` int(11) DEFAULT NULL,
  `time` datetime NOT NULL,
  `state` smallint(6) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `order_user_id` (`user_id`),
  KEY `order_goods_id` (`goods_id`),
  CONSTRAINT `order_goods_id` FOREIGN KEY (`goods_id`) REFERENCES `goods` (`id`),
  CONSTRAINT `order_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='订单表';

-- ----------------------------
-- Records of order
-- ----------------------------

-- ----------------------------
-- Table structure for `power`
-- ----------------------------
DROP TABLE IF EXISTS `power`;
CREATE TABLE `power` (
  `id` int(11) NOT NULL,
  `menu` varchar(20) NOT NULL,
  `url` varchar(50) NOT NULL,
  `role_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `role_power_id` (`role_id`),
  CONSTRAINT `role_power_id` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of power
-- ----------------------------

-- ----------------------------
-- Table structure for `role`
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `role` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of role
-- ----------------------------

-- ----------------------------
-- Table structure for `shopcart`
-- ----------------------------
DROP TABLE IF EXISTS `shopcart`;
CREATE TABLE `shopcart` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `goods_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `count` int(11) DEFAULT NULL,
  `SinglePrice` double NOT NULL,
  `price` double NOT NULL,
  `time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `shopcart_goods_id` (`goods_id`),
  KEY `shopcart_user_id` (`user_id`),
  CONSTRAINT `shopcart_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `shopcart_goods_id` FOREIGN KEY (`goods_id`) REFERENCES `goods` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='购物车';

-- ----------------------------
-- Records of shopcart
-- ----------------------------

-- ----------------------------
-- Table structure for `tracks`
-- ----------------------------
DROP TABLE IF EXISTS `tracks`;
CREATE TABLE `tracks` (
  `id` int(11) NOT NULL,
  `goods_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `track_goods_id` (`goods_id`),
  KEY `track_user_id` (`user_id`),
  CONSTRAINT `track_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `track_goods_id` FOREIGN KEY (`goods_id`) REFERENCES `goods` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tracks
-- ----------------------------

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(10) NOT NULL DEFAULT '',
  `password` varchar(50) NOT NULL DEFAULT '',
  `mobile` char(11) DEFAULT NULL COMMENT '手机',
  `email` varchar(20) DEFAULT NULL COMMENT '邮箱',
  `photo` varchar(10) DEFAULT NULL COMMENT '照片',
  `name` varchar(20) DEFAULT NULL COMMENT '真实姓名',
  `nickname` varchar(10) DEFAULT NULL COMMENT '昵称',
  `sex` char(1) DEFAULT NULL COMMENT '性别',
  `birthday` varchar(10) DEFAULT NULL COMMENT '生日',
  `score` int(11) DEFAULT NULL COMMENT '积分',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='用户表';

-- ----------------------------
-- Records of user
-- ----------------------------
