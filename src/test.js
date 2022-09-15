const { REST } = require("@discordjs/rest");
const { WebSocketManager } = require("@discordjs/ws");

const rest = new REST();
rest.setToken("");

const ws = new WebSocketManager({
  token: "",
  rest
});

ws.on("packet", (...args) => {
  console.log(args);
});
