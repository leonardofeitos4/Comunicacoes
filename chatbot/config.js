/* ═══════════════════════════════════
   CHATBOT CONFIG — Urbanas Comunicação
   Altere aqui para mudar número WA,
   persona, mensagem de boas-vindas e delays.
   (engine.js e flows.js não precisam mudar)
═══════════════════════════════════ */
const CONFIG = {
  WA: '5551995312100',
  botName: 'Urba',
  brand: 'Urbanas Comunicação',
  welcome: 'Olá! Me chamo <strong>Urba</strong>, a recepcionista digital da <strong>Urbanas Comunicação</strong>. 😊<br><br>Pra te ajudar melhor — qual é o seu objetivo principal?',
  typingDelayMin: 2200,
  typingDelayRandom: 400,
};

function waLink(msg) {
  return `https://wa.me/${CONFIG.WA}?text=${encodeURIComponent(msg)}`;
}
