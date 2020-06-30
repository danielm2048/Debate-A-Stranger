const express = require("express");
const http = require("http");
const path = require("path");
const socketio = require("socket.io");
const cors = require("cors");

const formatMessage = require("./utils/messages");
const { getCurrentUser, userLeave, matchUser } = require("./utils/users");

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = socketio(server);

io.on("connect", (socket) => {
	socket.on("startDebate", ({ userName, topic, stance }) => {
		const user = matchUser(socket.id, userName, topic, stance);
		socket.join(user.id);
		socket.emit(
			"message",
			formatMessage("Chat Bot", "Welcome to Debate a Stranger")
		);
		if (user.found) {
			socket.emit("message", formatMessage("Chat Bot", "Start Debating!"));
			socket.broadcast
				.to(user.found)
				.emit(
					"message",
					formatMessage("Chat Bot", "Found match! Start Debating!")
				);
		} else {
			socket.emit(
				"message",
				formatMessage("Chat Bot", "Looking for a match...")
			);
		}
	});

	socket.on("chatMessage", (msg) => {
		const user = getCurrentUser(socket.id);

		if (user.found) {
			io.to(user.id).emit("message", formatMessage(user.userName, msg));
			io.to(user.found).emit("message", formatMessage(user.userName, msg));
		}
		// io.to(user.found).emit("message", formatMessage(user.userName, msg));
	});

	socket.on("disconnect", () => {
		const user = userLeave(socket.id);

		if (user && user.found) {
			io.to(user.found).emit(
				"message",
				formatMessage("Chat Bot", "Your match has left the debate.")
			);
		}
	});
});

if (process.env.NODE_ENV === "production") {
	app.use((req, res, next) => {
		if (req.header("x-forwarded-proto") !== "https")
			res.redirect(`https://${req.header("host")}${req.url}`);
		else next();
	});

	app.use(express.static(path.join(__dirname, "public")));
}

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
