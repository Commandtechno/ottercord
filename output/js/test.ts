import { MessageEmbed } from "discord.js";
import { setToken, createMessage } from ".";

import token from "./token";
setToken(token);

const embed = new MessageEmbed();
embed.setDescription("hello from discord.js");

createMessage("828868136387346445", {
  content: "cross lib test",
  embeds: [embed, { description: "hello from ottercord" }]
}).catch(e => console.log(e.errors._errors));