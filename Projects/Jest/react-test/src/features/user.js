import request from './request'

function getUserName(userID) {
	// `request` returns a Promise
	return request('/users/', userID).then((user) => user.name)
}
