require("dotenv").config();

const { Client } = require("discord.js");

const bot = new Client({
    partials: ["MESSAGE", "REACTION"],
});
const PREFIX = "$";

bot.on("ready", () => {
    console.log(`${bot.user.tag} has logged in`);
});

// bot.on("message", (message) => {
//     if (message.author.bot) return;
//     if (message.content.startsWith(PREFIX)) {
//     }
// });

bot.on("messageReactionAdd", (reaction, user) => {
    const { name } = reaction.emoji;
    const member = reaction.message.guild.members.cache.get(user.id);
    if (reaction.message.id === "748369219464200197") {
        switch (name) {
            case "🍎":
                member.roles.add("747563550813323388");
                break;
            case "🍌":
                member.roles.add("748372147621068913");
                break;
            case "🍇":
                member.roles.add("748372145050222593");
                break;
            case "🍑":
                member.roles.add("748372142885699684");
                break;
            case "👀":
                member.roles.add("748379030620864552");
                break;
            case "🐘":
                member.roles.add("748379025776574535");
                break;
            case "🧠":
                member.roles.add("748381301769502833");
        }
    }
});

bot.on("messageReactionRemove", (reaction, user) => {
    const { name } = reaction.emoji;
    const member = reaction.message.guild.members.cache.get(user.id);
    if (reaction.message.id === "748369219464200197") {
        switch (name) {
            case "🍎":
                member.roles.remove("747563550813323388");
                break;
            case "🍌":
                member.roles.remove("748372147621068913");
                break;
            case "🍇":
                member.roles.remove("748372145050222593");
                break;
            case "🍑":
                member.roles.remove("748372142885699684");
                break;
            case "👀":
                member.roles.remove("748379030620864552");
                break;
            case "🐘":
                member.roles.remove("748379025776574535");
                break;
            case "🧠":
                member.roles.remove("748381301769502833");
        }
    }
});

bot.login(process.env.DISCORDJS_BOT_TOKEN);
