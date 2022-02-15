import * as otter from "./output";

process.env.BOT_TOKEN = "NzU4NzYwMjE1Mzc3MzQ2NjIw.X2zohA.ABqepFSnJ3lpE1XUg_mIqMpbN-A";

otter.createMessage("938471632702414860", { content: "cum" }).then(message => {
  message.type === otter.MessageTypes.Default;
});