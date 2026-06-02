/* ═══════════════════════════════════
   APP — Urbanas Comunicação
   Abertura/fechamento do chat da Evo
═══════════════════════════════════ */

function openChat() {
  const o = document.getElementById('chat-overlay');
  if (!o) return;
  o.classList.add('open');
  document.body.style.overflow = 'hidden';
  if (!aiStarted) { startChat(); aiStarted = true; }
}

function closeChat() {
  const o = document.getElementById('chat-overlay');
  if (!o) return;
  o.classList.remove('open');
  document.body.style.overflow = '';
}

/* Fecha ao clicar no fundo escuro (fora do painel) */
document.addEventListener('click', e => {
  if (e.target.id === 'chat-overlay') closeChat();
});

/* Fecha com a tecla Esc */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeChat();
});
