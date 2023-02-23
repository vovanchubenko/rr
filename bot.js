const TelegramBot = require('node-telegram-bot-api');
const Tone = require('tone');

const token = '6216248779:AAERKYlQDU-HD7ix6eIZJsN8xBgX4btUiKw';
const bot = new TelegramBot(token);

const port = Math.floor(Math.random() * 65535) + 1; // Генерируем случайный номер порта
const url = https://example.com:${port}; // Генерируем URL-адрес

bot.setWebHook(`${url}/bot${token}`);

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // создаем новый инструмент с помощью Tone.js
  const synth = new Tone.Synth().toMaster();

  // преобразуем текст сообщения в мелодию
  const melody = new Tone.Sequence(
    (time, note) => {
      synth.triggerAttackRelease(note, '8n', time);
    },
    ['C4', 'D4', 'E4', 'G4'],
    '4n'
  );

  // запускаем мелодию
  melody.start();

  // остановка мелодии после 5 секунд
  setTimeout(() => {
    melody.stop();
  }, 5000);

  // отправляем сообщение с мелодией
  bot.sendMessage(chatId, 'Ваша музыка готова!');
});
