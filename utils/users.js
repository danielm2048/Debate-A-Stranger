const users = [];

const matchUser = (id, userName, topic, stance) => {
	const index = users.findIndex(
		(user) => user.topic === topic && user.stance !== stance && !user.found
	);

	const user = {
		id,
		userName,
		topic,
		stance,
		found: index !== -1 ? users[index].id : null,
	};
	users.push(user);

	if (index !== -1) {
		users[index].found = user.id;
	}

	return user;
};

const getCurrentUser = (id) => {
	const user = users.find((user) => user.id === id);
	return user;
};

const userLeave = (id) => {
	const index = users.findIndex((user) => user.id === id);

	if (index !== -1) {
		const match = getMatch(users[index].id);
		if (match) {
			match.found = null;
		}
		return users.splice(index, 1)[0];
	}
};

const getMatch = (id) => {
	const user = getCurrentUser(id);

	return user.found ? getCurrentUser(user.found) : null;
};

module.exports = {
	matchUser,
	getCurrentUser,
	userLeave,
	getMatch,
};
