/* ═══════════════════════════════════
   FLOWS — Evo · Urbanas Comunicação

   Conteúdo baseado no portfólio da Urbanas:
   · Kamila Urbano — jornalista, 15+ anos, assessoria de
     imprensa, comunicação corporativa, autoridade/reputação.
   · Karoline (Karol) Urbano — copywriting, edição de vídeo,
     mídia paga (tráfego) e inteligência artificial.
   · Juntas: planejamento de conteúdo, produção audiovisual,
     copy persuasivo, gestão de tráfego e estratégias com IA.
   · Segmentos: saúde, bem-estar, fitness, engenharia/arquitetura,
     tecnologia e gastronomia.
   · Atuação: RS, São Paulo, BH, João Pessoa, Balneário Camboriú, Portugal.

   Estrutura de cada flow:
   { msg: 'HTML', chips: [ {l:'Label', f:'flow_id'} | {l:'Label', wa:'mensagem'} ] }
═══════════════════════════════════ */

const flows = {

  /* ── MENU PRINCIPAL ── */
  inicio: {
    msg: `Pra te ajudar melhor, me conta — qual é o seu objetivo principal? 😊`,
    chips: [
      { l: '📈 Atrair mais clientes', f: 'vendas' },
      { l: '⭐ Ser autoridade no meu mercado', f: 'autoridade' },
      { l: '📱 Profissionalizar minhas redes', f: 'redes' },
      { l: '🎬 Conteúdo e vídeos', f: 'conteudo' },
      { l: '🚀 Tráfego pago / anúncios', f: 'trafego' },
      { l: '📰 Assessoria de imprensa', f: 'assessoria' },
      { l: '💬 Quero um orçamento', f: 'orcamento' },
    ]
  },

  /* ── ATRAIR CLIENTES / VENDAS ── */
  vendas: {
    msg: `Comunicação estratégica é o que transforma audiência em cliente. 🔥<br><br>A Urbanas une <strong>planejamento de conteúdo, copy persuasivo e gestão de tráfego</strong> — com apoio de inteligência artificial — pra atrair as pessoas certas e gerar resultado real, não só seguidor.<br><br>O que você quer fortalecer primeiro?`,
    chips: [
      { l: '🚀 Anúncios (tráfego pago)', f: 'trafego' },
      { l: '✍️ Conteúdo que converte', f: 'conteudo' },
      { l: '💬 Falar com a equipe', wa: 'Vim pelo site da Urbanas e quero atrair mais clientes e aumentar minhas vendas.' },
    ]
  },

  /* ── AUTORIDADE / POSICIONAMENTO ── */
  autoridade: {
    msg: `Ser visto, lembrado e escolhido começa com <strong>posicionamento de marca</strong>. ⭐<br><br>Quem lidera isso é a <strong>Kamila Urbano</strong> — jornalista com mais de 15 anos em assessoria de imprensa, comunicação corporativa e marketing digital. Ela fortalece sua reputação e gera visibilidade qualificada.<br><br>Como prefere seguir?`,
    chips: [
      { l: '📰 Quero assessoria de imprensa', f: 'assessoria' },
      { l: '📱 Posicionar minhas redes', f: 'redes' },
      { l: '💬 Quero uma estratégia', wa: 'Vim pelo site da Urbanas e quero fortalecer a autoridade e o posicionamento da minha marca.' },
    ]
  },

  /* ── REDES SOCIAIS ── */
  redes: {
    msg: `📱 A gente cuida das suas redes de ponta a ponta: <strong>planejamento de conteúdo, design, copy, edição de vídeo e calendário de postagens</strong> — tudo alinhado à estratégia da marca.<br><br>Você já tem presença nas redes hoje?`,
    chips: [
      { l: '✅ Já tenho, quero melhorar', wa: 'Vim pelo site da Urbanas e já tenho redes sociais, quero profissionalizar a gestão.' },
      { l: '🌱 Quero começar do zero', wa: 'Vim pelo site da Urbanas e quero começar a gestão das minhas redes sociais do zero.' },
      { l: '💰 Ver orçamento', f: 'orcamento' },
    ]
  },

  /* ── CONTEÚDO / AUDIOVISUAL ── */
  conteudo: {
    msg: `🎬 Conteúdo é o que dá voz à marca. Com a <strong>Karoline Urbano</strong> à frente, a Urbanas faz <strong>produção audiovisual, edição de vídeo e copywriting que converte</strong> — usando inteligência artificial pra ganhar escala e consistência.<br><br>Que tipo de conteúdo você precisa?`,
    chips: [
      { l: '🎥 Vídeos / Reels', wa: 'Vim pelo site da Urbanas e quero produção de vídeos / Reels para minha marca.' },
      { l: '✍️ Textos / Copy', wa: 'Vim pelo site da Urbanas e quero conteúdo e copywriting para minha marca.' },
      { l: '💰 Ver orçamento', f: 'orcamento' },
    ]
  },

  /* ── TRÁFEGO PAGO ── */
  trafego: {
    msg: `🚀 Tráfego pago bem gerido coloca sua marca <strong>na frente das pessoas certas</strong> e traz resultado mensurável.<br><br>A <strong>Karoline</strong> cuida da estratégia, dos criativos e da otimização das campanhas (Meta e Google), com leitura analítica dos números pra cada real render mais.<br><br>Você já investe em anúncios hoje?`,
    chips: [
      { l: '✅ Já invisto, quero escalar', wa: 'Vim pelo site da Urbanas e já invisto em tráfego pago, quero escalar os resultados.' },
      { l: '🌱 Nunca investi ainda', wa: 'Vim pelo site da Urbanas e quero começar a investir em tráfego pago.' },
      { l: '💰 Ver orçamento', f: 'orcamento' },
    ]
  },

  /* ── ASSESSORIA DE IMPRENSA ── */
  assessoria: {
    msg: `📰 Assessoria de imprensa é a especialidade da <strong>Kamila Urbano</strong>: presença na mídia, comunicação corporativa, gestão de reputação e relacionamento com a imprensa pra tornar sua marca uma referência no mercado.<br><br>Quer entender como aplicar no seu caso?`,
    chips: [
      { l: '💬 Falar sobre assessoria', wa: 'Vim pelo site da Urbanas e quero saber sobre assessoria de imprensa e comunicação corporativa.' },
      { l: '⭐ Ver sobre posicionamento', f: 'autoridade' },
      { l: '💰 Ver orçamento', f: 'orcamento' },
    ]
  },

  /* ── ORÇAMENTO / CONTATO ── */
  orcamento: {
    msg: `Perfeito! 😊 A Urbanas atende marcas de <strong>saúde, bem-estar, fitness, engenharia e arquitetura, tecnologia e gastronomia</strong> — com atuação no RS, São Paulo, Belo Horizonte, João Pessoa, Balneário Camboriú e Portugal. 🌎<br><br>Pra montar uma proposta sob medida, o melhor é falar direto com a equipe pelo WhatsApp — é rápido e sem compromisso.`,
    chips: [
      { l: '💬 Falar no WhatsApp', wa: 'Vim pelo site da Urbanas e gostaria de um orçamento dos serviços de comunicação e marketing.' },
      { l: '↩ Ver objetivos de novo', f: 'inicio' },
    ]
  },

};
