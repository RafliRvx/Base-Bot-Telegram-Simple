// index.js
const { Telegraf } = require('telegraf');
const config = require('./config');
const fs = require('fs');
const path = require('path');

const bot = new Telegraf(config.botToken);

// load semua file di ./commands
const commandFiles = fs.readdirSync(path.join(__dirname, 'commands')).filter(f => f.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  if (typeof command.register === 'function') {
    command.register(bot);
  }
}

bot.launch().then(() => console.log("✅ Bot sudah jalan"));
