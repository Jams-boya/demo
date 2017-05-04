var user = require("../model/user");
var query = require("../utils/pool");

function UserService() {

	/**
	 * 查询所有用户信息
	 * @param {Function} callback
	 */
	this.findAllUsers = function(callback) {
		var sql = "select id,username,mobile,email,photo,name,nickName,sex,birthday from user";
		query(sql, [], function(res) {
			callback(res);
		})
	}

	/**
	 * 根据用户ID查询用户详细信息
	 * @param {int} id
	 * @param {Function} callback
	 */
	function findUserById(id, callback) {
		var sql = "select id,username,mobile,email,photo,name,nickName,sex,birthday from user where id=?";
		query(sql, [id], function(res) {
			callback(res);
		})
	}

	/**
	 * 登录
	 * @param {string} username
	 * @param {string} password
	 * @param {Function} callback
	 */
	this.login = function(username, password, callback) {
		var sql = "select id,username,mobile,email,photo,name,nickName,sex,birthday from user where username=? and password=?";
		query(sql, [username, password], function(res) {
			callback(res);
		})
	}

	/**
	 * 添加用户
	 * @param {Object} username
	 * @param {Object} password
	 * @param {Object} callback
	 */
	this.addUser = function(username, password, callback) {
		var sql = "insert into user(username,password) values(?,?)";
		query(sql, [username, password], function(res) {
			callback(res);
		})
	}

	/**
	 * 删除用户 
	 * @param {Object} id
	 * @param {Object} callback
	 */
	this.delUser = function(id, callback) {
		var sql = "delete from user where id=?";
		query(sql, [id], function(res) {
			callback(res);
		})
	}

	/**
	 *  修改用户信息 
	 * @param {Object} user
	 * @param {Object} callback
	 */
	this.modifyUser = function(user, callback) {
		var str = `username=${user.username}`;
		var sql = "update user set ? where id=?";
		query(sql, [str, id], function(res) {
			callback(res);
		})
	}
}
module.exports = UserService;