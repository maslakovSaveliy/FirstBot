require('dotenv').config();
const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => {
  if (ctx.chat.username === 'eepppc') {
    ctx.reply('Welcome back, boss');
  } else {
    ctx.reply(`Hello, ${ctx.message.from.first_name}`);
  }
});
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Wassup'));
bot.hears('inf', (ctx) => ctx.reply(ctx.chat));
bot.on('message', (ctx) => ctx.reply('error, try again later'));

bot.launch();
