// commands/start.js
module.exports = {
  name: "start",
  description: "Menampilkan info bot",
  register: (bot) => {
    bot.command('start', (ctx) => {
      ctx.reply('Halo! Selamat datang di bot Telegram saya!');
    });
  }
};
