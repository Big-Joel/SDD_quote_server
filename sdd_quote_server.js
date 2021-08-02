var net = require('net');

const quotes = [
  "Save the drama for your mama.",
  "You can lie to the teacher but you can't lie to yourself.",
  "Build a bridge and get over it.",
  "Cry me a river.",
  "Please send a cup of concrete and a spoon, someone needs to harden up.",
  "Phones off and out of sight.",
  "Don't hate the player, hate the game.",
  "Haters gonna hate.",
  "Good grammar is important. It is the difference between knowing your shit, and knowing you're shit."
];

var server = net.createServer(function(socket) {
  const randomIndex = Math.floor(Math.random() * quotes.length); 
  socket.write(quotes[randomIndex]);
  socket.destroy();
  
});

server.listen(2768, '162.243.67.131');
//Add to PM2: pm2 start ./sdd_quote_server.js --name SDD_quote_server
