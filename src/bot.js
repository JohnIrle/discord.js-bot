require("dotenv").config();

const { Client } = require("discord.js");

const bot = new Client();

bot.on("ready", () => {
    console.log(`${bot.user.tag} has logged in`);
});

bot.on("message", (message) => {
    console.log(`[${message.author.tag}]: ${message.content}`);
});

bot.login(process.env.DISCORDJS_BOT_TOKEN);
