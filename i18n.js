// TarotMe Gemini — i18n: UI translations in Spanish and English
// Usage: import { t, setLang, getLang } from './i18n.js'

const LS_LANG = 'tarotmegem_lang';

const UI = {
  es: {
    // Navigation
    nav_cartas:  'Las Cartas',
    nav_lectura: 'Tu Lectura',
    nav_faq:     'FAQ',

    // Header / disclaimer
    disc_title:   'Antes de continuar',
    disc_body1:   'Las lecturas de tarot son una herramienta de <strong>reflexión personal</strong> y exploración simbólica. No son ciencia, no predicen el futuro con certeza y no deben reemplazar ningún tipo de asesoramiento médico, legal, financiero ni psicológico.',
    disc_body2:   'Los resultados generados por inteligencia artificial son <strong>orientativos</strong>. Solo tú puedes valorar si te son útiles o no. Úsalos con criterio propio.',
    disc_accept:  'Entendido, continuar',
    banner_text:  '⚠️ Las lecturas son orientativas y para reflexión personal. No sustituyen asesoramiento profesional.',

    // Cards section
    cards_title:    'Las 78 Cartas del Tarot Rider-Waite',
    cards_subtitle: 'Pulsa cualquier carta para ver su significado completo',
    filter_all:     'Todas',
    filter_mayor:   'Arcanos Mayores',
    filter_bastos:  '🔥 Bastos',
    filter_copas:   '💧 Copas',
    filter_espadas: '💨 Espadas',
    filter_oros:    '🌿 Oros',
    no_results:     'No se encontraron cartas con ese criterio.',
    search_ph:      'Buscar carta…',

    // Card detail
    badge_mayor:   'Arcano Mayor',
    badge_bastos:  '🔥 Bastos',
    badge_copas:   '💧 Copas',
    badge_espadas: '💨 Espadas',
    badge_oros:    '🌿 Oros',
    tab_upright:   'Carta derecha',
    tab_reversed:  'Carta invertida',
    tab_symbolism: 'Simbolismo',

    // Reading section
    reading_title:    'Tu Lectura Personalizada',
    reading_subtitle: 'Sube una foto de tu tirada (opcional), escribe tu pregunta y ábrela en Gemini con tu cuenta de Google. Sin API key, sin coste.',
    step1_label:      '📷 Foto de tu tirada (opcional)',
    upload_title:     'Arrastra aquí tu tirada o elige una opción:',
    upload_or:        'o <strong>haz clic para seleccionar</strong>',
    upload_gallery:   'Galería',
    upload_camera:    'Cámara',
    upload_hint:      'Acepta JPG, PNG, WEBP',
    step2_label:      'Tu pregunta o tema',
    question_ph:      'Escribe aquí tu pregunta o el tema sobre el que quieres reflexionar…\nEjemplo: ¿Cómo está mi situación sentimental en este momento?\nEjemplo: Quiero entender qué me dice el tarot sobre mi trabajo.',
    read_btn:         'Preparar consulta',
    reading_btn_wait: 'Preparando…',
    new_reading:      'Nueva lectura',

    // Gemini web guide (shown after clicking the button)
    gemini_text_prefilled: '✓ Texto enviado a Gemini automáticamente',
    gemini_img_downloaded: '✓ Imagen descargada — arrástrala al chat de Gemini o usa el icono 📎',
    gemini_step_send_img:  'Adjunta la foto de tu tirada en Gemini donde señala el círculo amarillo y pega tu consulta en la caja de texto 🔮',
    gemini_hint_alt:           'Captura de pantalla de la interfaz de Gemini',
    gemini_hint_caption:       'Pega tu consulta con <kbd>Ctrl+V</kbd> en la caja de texto y pulsa Enviar',
    gemini_hint_caption_img:   'Pega tu consulta con <kbd>Ctrl+V</kbd> y pulsa <strong>+</strong> para adjuntar la imagen de tus cartas',
    gemini_step_attach:   'En Gemini, adjunta la imagen de tu tirada (icono 📎 o arrastra el archivo)',
    gemini_step_paste_ok: '✓ Consulta copiada — pégala en Gemini con <kbd>Ctrl+V</kbd> / <kbd>⌘V</kbd> y pulsa enviar',
    gemini_step_paste:    'Copia la consulta de abajo y pégala en el chat de Gemini',
    gemini_step_send:     'Adjunta la foto de tu tirada en Gemini donde señala el círculo amarillo y pega tu consulta en la caja de texto 🔮',
    gemini_prompt_label:  'Tu consulta para Gemini:',
    gemini_copy_btn:      '📋 Copiar consulta',
    gemini_copied:        'Copiado ✓',
    gemini_open_btn:      '✦ Abrir en Gemini ahora',
    gemini_download_img:  '⬇ Descargar imagen',
    gemini_tab_opened:    'Se abrió Gemini en una nueva pestaña.',

    // Reading AI prompt pieces (sent to Gemini web)
    prompt_with_q:    'Mi pregunta o tema es: "{q}"\n\nPor favor interpreta las cartas que ves en la imagen en relación con este tema.',
    prompt_general:   'Por favor interpreta las cartas que ves en la imagen de forma general.',

    // PWA install
    install_btn:      'Instalar',
    ios_install_tip:  'En Safari, pulsa el botón de compartir 〔⬆〕 en la barra inferior y selecciona «Añadir a la pantalla de inicio».',

    // Footer
    footer_images: 'Imágenes:',
    footer_source: 'Wikimedia Commons',
    footer_credit: 'Tarot Rider-Waite, Pamela Colman Smith (1910) · Dominio público',
    footer_disclaimer: 'TarotMe Gemini — solo para reflexión personal. Úsalo con criterio propio.',

    // FAQ
    faq_title:    'Preguntas Frecuentes',
    faq_subtitle: 'Todo lo que necesitas saber sobre TarotMe Gemini',
    faq_groups: [
      {
        title: '⚙️ Uso general',
        items: [
          {
            q: '¿Necesito pagar o registrarme para usar TarotMe Gemini?',
            open: true,
            a: `<p>No. TarotMe Gemini es <strong>completamente gratuito</strong>. No necesitas cuenta, no necesitas API key ni tarjeta de crédito.</p>
<p>La <strong>biblioteca de las 78 cartas</strong> funciona sin ningún requisito. La <strong>lectura con IA</strong> abre <a href="https://gemini.google.com" target="_blank" rel="noopener">gemini.google.com</a> directamente en tu navegador usando tu cuenta de Google, si la tienes.</p>`
          },
          {
            q: '¿Qué modelo de IA usa TarotMe Gemini?',
            a: `<p>TarotMe Gemini abre <strong>Gemini</strong> de Google en su web oficial. El modelo exacto depende de tu cuenta: usuarios con cuenta de Google usan Gemini 2.0 Flash o superior. Las instrucciones del prompt están optimizadas para obtener lecturas cálidas y detalladas.</p>`
          },
          {
            q: '¿Mis consultas son privadas?',
            a: `<p>Sí. TarotMe Gemini <strong>no almacena ni procesa tus consultas</strong>. El texto se copia al portapapeles de tu dispositivo y tú lo pegas directamente en Gemini. La conversación es exclusivamente entre tú y Google.</p>
<p>⚠️ Ten en cuenta que lo que envíes a Gemini queda sujeto a la <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">política de privacidad de Google</a>.</p>`
          }
        ]
      },
      {
        title: '🌐 Cómo funciona la lectura',
        items: [
          {
            q: '¿Cómo funciona el flujo de lectura?',
            open: true,
            a: `<ol class="faq-steps">
<li><strong>Sube una foto de tu tirada</strong> (opcional pero recomendado). Acepta JPG, PNG y WEBP.</li>
<li><strong>Escribe tu pregunta</strong> o el tema sobre el que quieres reflexionar.</li>
<li>Pulsa <strong>"Abrir en Gemini"</strong>. La consulta se copia automáticamente al portapapeles y se abre Gemini en una nueva pestaña.</li>
<li>En Gemini, <strong>adjunta la imagen</strong> (si la tienes) con el ícono 📎 y <strong>pega el texto</strong> con Ctrl+V / ⌘V.</li>
<li>Pulsa enviar y espera tu lectura 🔮</li>
</ol>
<p class="faq-note">💡 Si Gemini te pide iniciar sesión con Google, hazlo. La lectura es gratuita con cualquier cuenta.</p>`
          },
          {
            q: '¿Necesito una cuenta de Google?',
            a: `<p>Para usar <strong>Gemini web</strong> sí necesitas una cuenta de Google. Sin embargo, TarotMe Gemini (esta app) <strong>no requiere ninguna cuenta</strong>: la biblioteca de cartas, el buscador y el preparador de consultas funcionan sin registro.</p>
<p>Si no tienes cuenta de Google, puedes copiar la consulta y pegarla en cualquier otro servicio de IA (ChatGPT, Claude, etc.) que prefieras.</p>`
          },
          {
            q: '¿Es obligatorio subir una imagen?',
            a: `<p>No. La imagen es <strong>opcional</strong>. Si no tienes foto de tu tirada, puedes describir las cartas en el campo de pregunta (por ejemplo: "Tengo el Sol, la Luna y el Mundo") y Gemini las interpretará igualmente.</p>
<p>Si subes una imagen, Gemini puede identificar las cartas visualmente y ofrecer una lectura más precisa.</p>`
          }
        ]
      },
      {
        title: '🔧 Problemas frecuentes',
        items: [
          {
            q: 'Pulso el botón pero Gemini no se abre',
            a: '<p>Es posible que tu navegador haya bloqueado la apertura de la nueva pestaña. Comprueba si hay un aviso de "popup bloqueado" en la barra de direcciones y permítelo. También puedes usar el botón <strong>"Abrir Gemini de nuevo"</strong> que aparece en la guía de pasos.</p>'
          },
          {
            q: 'El portapapeles no funcionó — no puedo pegar el texto',
            a: '<p>El texto de la consulta aparece también en el recuadro de la guía. Puedes seleccionarlo y copiarlo manualmente. El botón <strong>"📋 Copiar consulta"</strong> también lo vuelve a copiar al portapapeles.</p>'
          },
          {
            q: 'Gemini no reconoce las cartas de la imagen',
            a: '<p>Asegúrate de que la foto esté bien iluminada y las cartas sean claramente visibles. Si Gemini no las identifica correctamente, puedes ayudarle mencionando los nombres de las cartas en el campo de pregunta.</p>'
          }
        ]
      },
      {
        title: '🃏 Las imágenes del tarot',
        items: [
          {
            q: '¿De dónde vienen las imágenes de las cartas?',
            a: `<p>Todas las ilustraciones de las 78 cartas provienen de <a href="https://en.wikipedia.org/wiki/Rider%E2%80%93Waite_Tarot" target="_blank" rel="noopener">Wikimedia Commons</a>. Son las ilustraciones originales del Tarot Rider-Waite, obra de <strong>Pamela Colman Smith</strong> (1910), de dominio público.</p>`
          }
        ]
      },
      {
        title: '🔮 Cómo hacer una tirada',
        items: [
          {
            q: '¿Cómo preparo el mazo antes de una tirada?',
            open: true,
            a: `<div class="spread-prep">
<p><strong>1. Limpia y baraja el mazo.</strong> Con las cartas boca abajo, baraja mientras respiras profundo y te concentras en tu pregunta. Hazlo hasta que sientas que el mazo está listo.</p>
<p><strong>2. Formula una pregunta clara.</strong> Las mejores preguntas empiezan con "¿Qué me dice el tarot sobre…?", "¿Cómo puedo…?" o "¿Qué debo saber sobre…?". Evita preguntas de sí/no.</p>
<p><strong>3. Corta el mazo en tres montones.</strong> Con la mano no dominante, divide en tres pilas y vuelve a juntarlas en el orden que sientas correcto.</p>
<p><strong>4. Coloca las cartas boca abajo</strong> en las posiciones de la tirada elegida antes de darles la vuelta.</p>
<p><strong>5. Fotografía la tirada</strong>, súbela en TarotMe Gemini, escribe tu pregunta y pulsa <em>Abrir en Gemini</em>. 📷</p>
</div>`
          },
          {
            q: 'Tirada de 1 carta — La carta del día',
            a: `<p>La tirada más sencilla: <strong>una sola carta</strong> que ofrece un mensaje o energía dominante para el día.</p>
<svg viewBox="0 0 160 125" class="spread-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <rect x="55" y="8" width="50" height="76" rx="5" fill="#161628" stroke="#c9a84c" stroke-width="2.5"/>
  <text x="80" y="52" text-anchor="middle" fill="#e8c86a" font-size="24" font-weight="bold" font-family="Georgia,serif">1</text>
  <text x="80" y="103" text-anchor="middle" fill="#9890b0" font-size="10.5" font-family="sans-serif">Mensaje del día</text>
</svg>
<div class="faq-table-wrap"><table class="faq-table"><thead><tr><th>Posición</th><th>Significado</th></tr></thead>
<tbody><tr><td><strong>1 — La Carta</strong></td><td>Energía dominante, consejo o mensaje directo para el día</td></tr></tbody></table></div>`
          },
          {
            q: 'Tirada de 3 cartas — Pasado · Presente · Futuro',
            a: `<p>La tirada más popular. <strong>Tres cartas</strong> que aportan contexto, claridad y orientación.</p>
<svg viewBox="0 0 310 125" class="spread-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="8" width="76" height="76" rx="5" fill="#161628" stroke="#7c3aed" stroke-width="2"/>
  <text x="48" y="52" text-anchor="middle" fill="#a78bfa" font-size="24" font-weight="bold" font-family="Georgia,serif">1</text>
  <text x="48" y="103" text-anchor="middle" fill="#9890b0" font-size="10" font-family="sans-serif">Pasado</text>
  <rect x="117" y="8" width="76" height="76" rx="5" fill="#161628" stroke="#c9a84c" stroke-width="2.5"/>
  <text x="155" y="52" text-anchor="middle" fill="#e8c86a" font-size="24" font-weight="bold" font-family="Georgia,serif">2</text>
  <text x="155" y="103" text-anchor="middle" fill="#9890b0" font-size="10" font-family="sans-serif">Presente</text>
  <rect x="224" y="8" width="76" height="76" rx="5" fill="#161628" stroke="#7c3aed" stroke-width="2"/>
  <text x="262" y="52" text-anchor="middle" fill="#a78bfa" font-size="24" font-weight="bold" font-family="Georgia,serif">3</text>
  <text x="262" y="103" text-anchor="middle" fill="#9890b0" font-size="10" font-family="sans-serif">Futuro</text>
</svg>
<div class="faq-table-wrap"><table class="faq-table"><thead><tr><th>Posición</th><th>Significado</th></tr></thead>
<tbody>
<tr><td><strong>1 — Pasado</strong></td><td>Influencias que se están retirando</td></tr>
<tr><td><strong>2 — Presente</strong></td><td>La situación actual; energía dominante</td></tr>
<tr><td><strong>3 — Futuro</strong></td><td>Hacia dónde se dirige la situación</td></tr>
</tbody></table></div>`
          },
          {
            q: 'Cruz Celta — 10 cartas',
            a: `<p>La tirada más completa. <strong>10 cartas</strong> que exploran todos los ángulos de la situación.</p>
<svg viewBox="0 0 450 320" class="spread-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <rect x="143" y="124" width="48" height="72" rx="4" fill="#161628" stroke="#c9a84c" stroke-width="2.5"/>
  <text x="167" y="166" text-anchor="middle" fill="#e8c86a" font-size="16" font-weight="bold" font-family="Georgia,serif">1</text>
  <rect x="119" y="138" width="72" height="48" rx="4" fill="#1e1e35" stroke="#a78bfa" stroke-width="2" opacity="0.92"/>
  <text x="155" y="168" text-anchor="middle" fill="#a78bfa" font-size="16" font-weight="bold" font-family="Georgia,serif">2</text>
  <rect x="143" y="37" width="48" height="72" rx="4" fill="#161628" stroke="#c9a84c" stroke-width="2"/>
  <text x="167" y="79" text-anchor="middle" fill="#e8c86a" font-size="16" font-weight="bold" font-family="Georgia,serif">3</text>
  <rect x="143" y="211" width="48" height="72" rx="4" fill="#161628" stroke="#c9a84c" stroke-width="2"/>
  <text x="167" y="253" text-anchor="middle" fill="#e8c86a" font-size="16" font-weight="bold" font-family="Georgia,serif">4</text>
  <rect x="75" y="124" width="48" height="72" rx="4" fill="#161628" stroke="#c9a84c" stroke-width="2"/>
  <text x="99" y="166" text-anchor="middle" fill="#e8c86a" font-size="16" font-weight="bold" font-family="Georgia,serif">5</text>
  <rect x="211" y="124" width="48" height="72" rx="4" fill="#161628" stroke="#c9a84c" stroke-width="2"/>
  <text x="235" y="166" text-anchor="middle" fill="#e8c86a" font-size="16" font-weight="bold" font-family="Georgia,serif">6</text>
  <line x1="296" y1="10" x2="296" y2="315" stroke="#2a2a4a" stroke-width="1" stroke-dasharray="5,4"/>
  <rect x="330" y="238" width="48" height="72" rx="4" fill="#161628" stroke="#7c3aed" stroke-width="2"/>
  <text x="354" y="280" text-anchor="middle" fill="#a78bfa" font-size="16" font-weight="bold" font-family="Georgia,serif">7</text>
  <rect x="330" y="157" width="48" height="72" rx="4" fill="#161628" stroke="#7c3aed" stroke-width="2"/>
  <text x="354" y="199" text-anchor="middle" fill="#a78bfa" font-size="16" font-weight="bold" font-family="Georgia,serif">8</text>
  <rect x="330" y="76" width="48" height="72" rx="4" fill="#161628" stroke="#7c3aed" stroke-width="2"/>
  <text x="354" y="118" text-anchor="middle" fill="#a78bfa" font-size="16" font-weight="bold" font-family="Georgia,serif">9</text>
  <rect x="330" y="4" width="48" height="72" rx="4" fill="#161628" stroke="#7c3aed" stroke-width="2"/>
  <text x="354" y="46" text-anchor="middle" fill="#a78bfa" font-size="16" font-weight="bold" font-family="Georgia,serif">10</text>
</svg>
<div class="faq-table-wrap"><table class="faq-table"><thead><tr><th>#</th><th>Nombre</th><th>Significado</th></tr></thead>
<tbody>
<tr><td><strong>1</strong></td><td>El Presente</td><td>Situación actual</td></tr>
<tr><td><strong>2</strong></td><td>El Desafío</td><td>Lo que obstaculiza (perpendicular)</td></tr>
<tr><td><strong>3</strong></td><td>La Corona</td><td>Objetivo consciente</td></tr>
<tr><td><strong>4</strong></td><td>La Base</td><td>Fundamento inconsciente</td></tr>
<tr><td><strong>5</strong></td><td>Pasado Reciente</td><td>Influencias que se retiran</td></tr>
<tr><td><strong>6</strong></td><td>Futuro Próximo</td><td>Lo que se aproxima</td></tr>
<tr><td><strong>7</strong></td><td>Tú mismo</td><td>Cómo te percibes</td></tr>
<tr><td><strong>8</strong></td><td>Entorno</td><td>Influencias externas</td></tr>
<tr><td><strong>9</strong></td><td>Esperanzas y Miedos</td><td>Deseos y temores secretos</td></tr>
<tr><td><strong>10</strong></td><td>El Resultado</td><td>Desenlace probable</td></tr>
</tbody></table></div>`
          }
        ]
      }
    ],

    // System prompt for Gemini (tarot reader in Spanish)
    system_prompt: `Eres una tarotista experimentada con décadas de práctica en la lectura del Tarot Rider-Waite. Tu estilo es cálido, cercano, empático y directo. Hablas en castellano con un lenguaje sencillo y accesible.

Cuando el usuario te comparte una imagen de su tirada y una pregunta o tema, haz lo siguiente:

1. Identifica las cartas visibles en la imagen y menciona sus nombres en español.
2. Interpreta el significado de cada carta visible en el contexto de la pregunta planteada.
3. Ofrece una lectura integrada que conecte todas las cartas entre sí y con la situación del consultante.
4. Termina con un mensaje de síntesis: qué te dicen las cartas en general y qué puede ser útil tener en cuenta.

Pautas importantes:
- Habla en primera persona: "veo que…", "las cartas me muestran…", "esta carta me dice que…".
- Sé concreto y relevante para la pregunta planteada.
- Si no puedes identificar claramente una carta, dilo con naturalidad.
- Si la imagen no muestra cartas de tarot, indícalo con amabilidad.
- Usa siempre lenguaje orientativo: "puede que…", "esto sugiere…", "las cartas apuntan a…".
- Longitud: entre 250 y 450 palabras, bien organizado en párrafos.`
  },

  // ────────────────────────────────────────────────────────────────────────
  en: {
    // Navigation
    nav_cartas:  'The Cards',
    nav_lectura: 'Your Reading',
    nav_faq:     'FAQ',

    // Header / disclaimer
    disc_title:   'Before you continue',
    disc_body1:   'Tarot readings are a tool for <strong>personal reflection</strong> and symbolic exploration. They are not science, do not predict the future with certainty, and should not replace any medical, legal, financial, or psychological advice.',
    disc_body2:   'Results generated by artificial intelligence are <strong>for guidance only</strong>. Only you can assess whether they are useful to you. Use them with your own judgment.',
    disc_accept:  'Understood, continue',
    banner_text:  '⚠️ Readings are for guidance and personal reflection only. They do not replace professional advice.',

    // Cards section
    cards_title:    'The 78 Rider-Waite Tarot Cards',
    cards_subtitle: 'Click any card to see its full meaning',
    filter_all:     'All',
    filter_mayor:   'Major Arcana',
    filter_bastos:  '🔥 Wands',
    filter_copas:   '💧 Cups',
    filter_espadas: '💨 Swords',
    filter_oros:    '🌿 Pentacles',
    no_results:     'No cards found matching that criteria.',
    search_ph:      'Search card…',

    // Card detail
    badge_mayor:   'Major Arcana',
    badge_bastos:  '🔥 Wands',
    badge_copas:   '💧 Cups',
    badge_espadas: '💨 Swords',
    badge_oros:    '🌿 Pentacles',
    tab_upright:   'Upright',
    tab_reversed:  'Reversed',
    tab_symbolism: 'Symbolism',

    // Reading section
    reading_title:    'Your Personalized Reading',
    reading_subtitle: 'Upload a spread photo (optional), write your question and open it in Gemini with your Google account. No API key, no cost.',
    step1_label:      '📷 Spread photo (optional)',
    upload_title:     'Drag your spread here or choose an option:',
    upload_or:        'or <strong>click to select</strong>',
    upload_gallery:   'Gallery',
    upload_camera:    'Camera',
    upload_hint:      'Accepts JPG, PNG, WEBP',
    step2_label:      'Your question or topic',
    question_ph:      'Write your question or the topic you want to reflect on…\nExample: What does the tarot say about my love life right now?\nExample: I want to understand what the cards say about my career.',
    read_btn:         'Prepare reading',
    reading_btn_wait: 'Preparing…',
    new_reading:      'New reading',

    // Gemini web guide (shown after clicking the button)
    gemini_text_prefilled: '✓ Text sent to Gemini automatically',
    gemini_img_downloaded: '✓ Image downloaded — drag it into the Gemini chat or use the 📎 icon',
    gemini_step_send_img:  'Attach your spread photo in Gemini where the yellow circle shows and paste your query in the text box 🔮',
    gemini_hint_alt:           'Screenshot of the Gemini interface',
    gemini_hint_caption:       'Paste your query with <kbd>Ctrl+V</kbd> in the text box and press Send',
    gemini_hint_caption_img:   'Paste your query with <kbd>Ctrl+V</kbd> and press <strong>+</strong> to attach your card image',
    gemini_step_attach:   'In Gemini, attach your spread image (📎 icon or drag the file)',
    gemini_step_paste_ok: '✓ Query copied — paste it in Gemini with <kbd>Ctrl+V</kbd> / <kbd>⌘V</kbd> and press send',
    gemini_step_paste:    'Copy the query below and paste it in the Gemini chat',
    gemini_step_send:     'Attach your spread photo in Gemini where the yellow circle shows and paste your query in the text box 🔮',
    gemini_prompt_label:  'Your query for Gemini:',
    gemini_copy_btn:      '📋 Copy query',
    gemini_copied:        'Copied ✓',
    gemini_open_btn:      '✦ Open in Gemini now',
    gemini_download_img:  '⬇ Download image',
    gemini_tab_opened:    'Gemini opened in a new tab.',

    // Reading AI prompt pieces (sent to Gemini web)
    prompt_with_q:    'My question or topic is: "{q}"\n\nPlease interpret the cards you see in the image in relation to this topic.',
    prompt_general:   'Please interpret the cards you see in the image in a general way.',

    // PWA install
    install_btn:      'Install',
    ios_install_tip:  'In Safari, tap the share button 〔⬆〕 in the bottom bar and select "Add to Home Screen".',

    // Footer
    footer_images: 'Images:',
    footer_source: 'Wikimedia Commons',
    footer_credit: 'Rider-Waite Tarot, Pamela Colman Smith (1910) · Public domain',
    footer_disclaimer: 'TarotMe Gemini — for personal reflection only. Use with your own judgment.',

    // FAQ
    faq_title:    'Frequently Asked Questions',
    faq_subtitle: 'Everything you need to know about TarotMe Gemini',
    faq_groups: [
      {
        title: '⚙️ General use',
        items: [
          {
            q: 'Do I need to pay or sign up to use TarotMe Gemini?',
            open: true,
            a: `<p>No. TarotMe Gemini is <strong>completely free</strong>. No account, no API key, no credit card required.</p>
<p>The <strong>78-card library</strong> works with no requirements. The <strong>AI reading</strong> opens <a href="https://gemini.google.com" target="_blank" rel="noopener">gemini.google.com</a> directly in your browser using your Google account, if you have one.</p>`
          },
          {
            q: 'Which AI model does TarotMe Gemini use?',
            a: `<p>TarotMe Gemini opens Google's official <strong>Gemini</strong> web app. The exact model depends on your account — Google account holders typically get Gemini 2.0 Flash or higher. The prompt instructions are optimised for warm, detailed tarot readings.</p>`
          },
          {
            q: 'Are my readings private?',
            a: `<p>Yes. TarotMe Gemini <strong>does not store or process your queries</strong>. The text is copied to your device's clipboard and you paste it directly into Gemini. The conversation is exclusively between you and Google.</p>
<p>⚠️ Keep in mind that what you send to Gemini is subject to <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google's privacy policy</a>.</p>`
          }
        ]
      },
      {
        title: '🌐 How the reading works',
        items: [
          {
            q: 'How does the reading flow work?',
            open: true,
            a: `<ol class="faq-steps">
<li><strong>Upload a photo of your spread</strong> (optional but recommended). Accepts JPG, PNG and WEBP.</li>
<li><strong>Type your question</strong> or the topic you want to reflect on.</li>
<li>Click <strong>"Open in Gemini"</strong>. The query is automatically copied to your clipboard and Gemini opens in a new tab.</li>
<li>In Gemini, <strong>attach the image</strong> (if you have one) with the 📎 icon and <strong>paste the text</strong> with Ctrl+V / ⌘V.</li>
<li>Press send and wait for your reading 🔮</li>
</ol>
<p class="faq-note">💡 If Gemini asks you to sign in with Google, do so. Reading is free with any account.</p>`
          },
          {
            q: 'Do I need a Google account?',
            a: `<p>To use <strong>Gemini web</strong> you need a Google account. However, TarotMe Gemini (this app) <strong>requires no account</strong>: the card library, search, and query builder all work without registration.</p>
<p>If you don't have a Google account, you can copy the query and paste it into any other AI service (ChatGPT, Claude, etc.) that you prefer.</p>`
          },
          {
            q: 'Is the image required?',
            a: `<p>No. The image is <strong>optional</strong>. If you don't have a photo of your spread, you can describe the cards in the question field (e.g. "I have The Sun, The Moon and The World") and Gemini will still interpret them.</p>
<p>If you upload an image, Gemini can visually identify the cards and provide a more accurate reading.</p>`
          }
        ]
      },
      {
        title: '🔧 Common issues',
        items: [
          {
            q: "I clicked the button but Gemini didn't open",
            a: '<p>Your browser may have blocked the new tab. Look for a "popup blocked" notice in the address bar and allow it. You can also use the <strong>"Open Gemini again"</strong> button that appears in the step guide.</p>'
          },
          {
            q: "Clipboard didn't work — I can't paste the text",
            a: '<p>The query text also appears in the guide box. You can select and copy it manually. The <strong>"📋 Copy query"</strong> button will also copy it to your clipboard again.</p>'
          },
          {
            q: "Gemini doesn't recognise the cards in the image",
            a: '<p>Make sure the photo is well-lit and the cards are clearly visible. If Gemini doesn\'t identify them correctly, you can help by mentioning the card names in the question field.</p>'
          }
        ]
      },
      {
        title: '🃏 Card images',
        items: [
          {
            q: 'Where do the card images come from?',
            a: `<p>All 78 card illustrations come from <a href="https://en.wikipedia.org/wiki/Rider%E2%80%93Waite_Tarot" target="_blank" rel="noopener">Wikimedia Commons</a>. They are the original Rider-Waite Tarot illustrations by <strong>Pamela Colman Smith</strong> (1910), in the public domain.</p>`
          }
        ]
      },
      {
        title: '🔮 How to do a tarot spread',
        items: [
          {
            q: 'How do I prepare the deck before a reading?',
            open: true,
            a: `<div class="spread-prep">
<p><strong>1. Cleanse and shuffle the deck.</strong> Shuffle face down while focusing on your question, until the deck feels ready.</p>
<p><strong>2. Formulate a clear question.</strong> Start with "What does the tarot say about…?", "How can I…?" or "What should I know about…?". Avoid yes/no questions.</p>
<p><strong>3. Cut into three piles</strong> with your non-dominant hand, then reassemble in whatever order feels right.</p>
<p><strong>4. Place cards face down</strong> in the spread positions before turning them over.</p>
<p><strong>5. Photograph the spread</strong>, upload it in TarotMe Gemini, write your question and click <em>Open in Gemini</em>. 📷</p>
</div>`
          },
          {
            q: 'One-Card Draw — Card of the Day',
            a: `<p><strong>One card</strong> offering a message or dominant energy for the day.</p>
<svg viewBox="0 0 160 125" class="spread-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <rect x="55" y="8" width="50" height="76" rx="5" fill="#161628" stroke="#c9a84c" stroke-width="2.5"/>
  <text x="80" y="52" text-anchor="middle" fill="#e8c86a" font-size="24" font-weight="bold" font-family="Georgia,serif">1</text>
  <text x="80" y="103" text-anchor="middle" fill="#9890b0" font-size="10.5" font-family="sans-serif">Daily Message</text>
</svg>`
          },
          {
            q: 'Three-Card Spread — Past · Present · Future',
            a: `<p><strong>Three cards</strong> for context, clarity and guidance on any situation.</p>
<svg viewBox="0 0 310 125" class="spread-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="8" width="76" height="76" rx="5" fill="#161628" stroke="#7c3aed" stroke-width="2"/>
  <text x="48" y="52" text-anchor="middle" fill="#a78bfa" font-size="24" font-weight="bold" font-family="Georgia,serif">1</text>
  <text x="48" y="103" text-anchor="middle" fill="#9890b0" font-size="10" font-family="sans-serif">Past</text>
  <rect x="117" y="8" width="76" height="76" rx="5" fill="#161628" stroke="#c9a84c" stroke-width="2.5"/>
  <text x="155" y="52" text-anchor="middle" fill="#e8c86a" font-size="24" font-weight="bold" font-family="Georgia,serif">2</text>
  <text x="155" y="103" text-anchor="middle" fill="#9890b0" font-size="10" font-family="sans-serif">Present</text>
  <rect x="224" y="8" width="76" height="76" rx="5" fill="#161628" stroke="#7c3aed" stroke-width="2"/>
  <text x="262" y="52" text-anchor="middle" fill="#a78bfa" font-size="24" font-weight="bold" font-family="Georgia,serif">3</text>
  <text x="262" y="103" text-anchor="middle" fill="#9890b0" font-size="10" font-family="sans-serif">Future</text>
</svg>`
          },
          {
            q: 'Celtic Cross — 10 cards',
            a: `<p>The most complete spread. <strong>10 cards</strong> covering every angle of the situation.</p>
<svg viewBox="0 0 450 320" class="spread-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <rect x="143" y="124" width="48" height="72" rx="4" fill="#161628" stroke="#c9a84c" stroke-width="2.5"/>
  <text x="167" y="166" text-anchor="middle" fill="#e8c86a" font-size="16" font-weight="bold" font-family="Georgia,serif">1</text>
  <rect x="119" y="138" width="72" height="48" rx="4" fill="#1e1e35" stroke="#a78bfa" stroke-width="2" opacity="0.92"/>
  <text x="155" y="168" text-anchor="middle" fill="#a78bfa" font-size="16" font-weight="bold" font-family="Georgia,serif">2</text>
  <rect x="143" y="37" width="48" height="72" rx="4" fill="#161628" stroke="#c9a84c" stroke-width="2"/>
  <text x="167" y="79" text-anchor="middle" fill="#e8c86a" font-size="16" font-weight="bold" font-family="Georgia,serif">3</text>
  <rect x="143" y="211" width="48" height="72" rx="4" fill="#161628" stroke="#c9a84c" stroke-width="2"/>
  <text x="167" y="253" text-anchor="middle" fill="#e8c86a" font-size="16" font-weight="bold" font-family="Georgia,serif">4</text>
  <rect x="75" y="124" width="48" height="72" rx="4" fill="#161628" stroke="#c9a84c" stroke-width="2"/>
  <text x="99" y="166" text-anchor="middle" fill="#e8c86a" font-size="16" font-weight="bold" font-family="Georgia,serif">5</text>
  <rect x="211" y="124" width="48" height="72" rx="4" fill="#161628" stroke="#c9a84c" stroke-width="2"/>
  <text x="235" y="166" text-anchor="middle" fill="#e8c86a" font-size="16" font-weight="bold" font-family="Georgia,serif">6</text>
  <line x1="296" y1="10" x2="296" y2="315" stroke="#2a2a4a" stroke-width="1" stroke-dasharray="5,4"/>
  <rect x="330" y="238" width="48" height="72" rx="4" fill="#161628" stroke="#7c3aed" stroke-width="2"/>
  <text x="354" y="280" text-anchor="middle" fill="#a78bfa" font-size="16" font-weight="bold" font-family="Georgia,serif">7</text>
  <rect x="330" y="157" width="48" height="72" rx="4" fill="#161628" stroke="#7c3aed" stroke-width="2"/>
  <text x="354" y="199" text-anchor="middle" fill="#a78bfa" font-size="16" font-weight="bold" font-family="Georgia,serif">8</text>
  <rect x="330" y="76" width="48" height="72" rx="4" fill="#161628" stroke="#7c3aed" stroke-width="2"/>
  <text x="354" y="118" text-anchor="middle" fill="#a78bfa" font-size="16" font-weight="bold" font-family="Georgia,serif">9</text>
  <rect x="330" y="4" width="48" height="72" rx="4" fill="#161628" stroke="#7c3aed" stroke-width="2"/>
  <text x="354" y="46" text-anchor="middle" fill="#a78bfa" font-size="16" font-weight="bold" font-family="Georgia,serif">10</text>
</svg>`
          }
        ]
      }
    ],

    // System prompt for Gemini (tarot reader in English)
    system_prompt: `You are an experienced tarot reader with decades of practice in Rider-Waite Tarot reading. Your style is warm, approachable, empathetic, and direct. You speak in English with clear, accessible language.

When the user shares an image of their spread and a question or topic, do the following:

1. Identify the cards visible in the image and mention their names in English.
2. Interpret the meaning of each visible card in the context of the question or topic.
3. Offer an integrated reading that connects all the cards with each other and with the querent's situation.
4. End with a synthesis of what the cards are saying overall and what may be useful to keep in mind.

Important guidelines:
- Speak in first person: "I see that…", "the cards show me…", "this card tells me…".
- Be specific and relevant to the question asked.
- If you cannot clearly identify a card, say so naturally.
- If the image does not show tarot cards, say so kindly.
- Always use guiding language: "it may be…", "this suggests…", "the cards point to…".
- Length: between 250 and 450 words, well organized in paragraphs.`
  }
};

let _lang = localStorage.getItem('tarotmegem_lang') || 'es';

export function t(key) {
  return UI[_lang]?.[key] ?? UI['es']?.[key] ?? key;
}

export function getLang() { return _lang; }

export function setLang(lang) {
  if (!UI[lang]) return;
  _lang = lang;
  localStorage.setItem('tarotmegem_lang', lang);
}

export function getAvailableLangs() {
  return Object.keys(UI);
}
