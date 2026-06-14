const mineflayer = require('mineflayer');

console.log("Iniciando o sistema do 1RP...");

const bot = mineflayer.createBot({
  host: 'projeto1RP.aternos.me', // Seu IP do Aternos
  username: '1RP_Robot',         // Nome do robô no jogo
  version: false                 // Descobre a versão do servidor sozinho
});

bot.on('spawn', () => {
  console.log('🤖 1RP está online na nuvem e conectado ao Aternos!');
  bot.chat('Olá! Eu sou o 1RP, o Robot Player. Fui ativado diretamente da nuvem!');
});

bot.on('chat', (username, message) => {
  if (username === bot.username) return;

  const msg = message.toLowerCase();

  // PERSONALIDADE DO 1RP (Mude as frases como quiser)
  if (msg.includes('quem é você') || msg.includes('seu nome')) {
    bot.chat(`Fala ${username}! Eu sou o 1RP. Um bot inteligente rodando 24/7 na nuvem para te ajudar!`);
  } 
  
  else if (msg.includes('me segue') || msg.includes('vem cá')) {
    const playerTarget = bot.players[username]?.entity;
    if (playerTarget) {
      bot.chat('Estou a caminho!');
      bot.lookAt(playerTarget.position.offset(0, bot.entity.height, 0));
    } else {
      bot.chat('Fica parado e me deixa te ver primeiro!');
    }
  }
  
  else if (msg.includes('tchau')) {
    bot.chat('Até mais! Ficarei aqui na nuvem vigiando tudo.');
  }
});

bot.on('error', (err) => console.log('❌ Erro:', err));
bot.on('kicked', (reason) => console.log('⚠️ Expulso do servidor:', reason));
