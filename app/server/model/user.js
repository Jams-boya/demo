function User(u) {
	this._u= u;

	function getUser() {
		return this._u;
	}

	function setUser(u) {
		this._u= u;
	}
}

module.exports = User;