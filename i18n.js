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

    // Settings
    settings_title:   '⚙️ Configuración',
    settings_body:    'Para usar la lectura con IA necesitas una clave de API de Google AI Studio. Es completamente gratuita, no requiere tarjeta de crédito.',
    settings_label:   'Clave de API de Google AI Studio',
    settings_link:    'Obtener clave gratuita en aistudio.google.com →',
    settings_save:    'Guardar',
    settings_clear:   'Eliminar clave',
    settings_saved:   '✓ Clave guardada correctamente.',
    settings_nochange:'La clave no cambió.',
    settings_invalid: 'Introduce una clave válida.',
    settings_prefix:  'La clave debe empezar por AIza…',
    settings_deleted: 'Clave eliminada.',

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
    reading_subtitle: 'Sube una foto de tu tirada y escribe tu pregunta. Gemini AI interpretará las cartas como una tarotista experimentada.',
    api_notice_title: 'Clave de API necesaria',
    api_notice_body:  'Para usar la lectura con IA necesitas tu clave gratuita de Google AI Studio. Sin tarjeta de crédito.',
    api_notice_btn:   'Configurar ahora',
    step1_label:      'Fotografía tu tirada',
    upload_title:     'Arrastra aquí la foto de tu tirada',
    upload_or:        'o <strong>haz clic para seleccionar</strong>',
    upload_hint:      'Acepta JPG, PNG, WEBP',
    step2_label:      'Tu pregunta o tema',
    question_ph:      'Escribe aquí tu pregunta o el tema sobre el que quieres reflexionar…\nEjemplo: ¿Cómo está mi situación sentimental en este momento?\nEjemplo: Quiero entender qué me dice el tarot sobre mi trabajo.',
    read_btn:         'Interpretar tirada',
    reading_btn_wait: 'Interpretando…',
    result_title:     '✦ Tu lectura',
    result_disclaimer:'⚠️ Esta interpretación es orientativa y para reflexión personal. No la tomes como verdad absoluta.',
    new_reading:      'Nueva lectura',
    api_key_title:    'Sin clave de API configurada',
    err_no_resp:      'No se pudo obtener una respuesta.',
    err_title:        '⚠️ No se pudo completar la lectura.',
    err_check:        'Comprueba que tu clave de API es válida en',
    err_blocked:      'La respuesta fue bloqueada por los filtros de seguridad de Gemini. Intenta con una imagen más clara.',
    reading_thinking: 'Gemini está leyendo las cartas…',
    api_dot_on:       'Clave de API configurada',
    api_dot_off:      'Sin clave de API configurada',

    // Reading AI prompt pieces
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
    faq_subtitle: 'Todo lo que necesitas saber sobre TarotMe Gemini y la clave gratuita de Google',
    faq_groups: [
      {
        title: '⚙️ Uso general',
        items: [
          {
            q: '¿Necesito pagar para usar TarotMe Gemini?',
            open: true,
            a: `<p>La <strong>biblioteca de las 78 cartas</strong> es completamente gratuita y no requiere ninguna cuenta ni clave. Puedes explorar todas las cartas, sus significados y simbolismo sin límite.</p>
<p>La <strong>lectura personalizada con IA</strong> usa Google Gemini. La clave de API de Google AI Studio es <strong>gratuita</strong> para uso personal, sin tarjeta de crédito.</p>`
          },
          {
            q: '¿Qué modelo de IA usa TarotMe Gemini?',
            a: `<p>TarotMe Gemini utiliza <strong>Gemini 2.0 Flash</strong> de Google, un modelo multimodal avanzado capaz de analizar imágenes y texto simultáneamente. Está configurado para interpretar las cartas con un estilo cálido y cercano.</p>`
          },
          {
            q: '¿Es segura mi clave de API?',
            a: `<p>Tu clave de API se guarda <strong>únicamente en tu dispositivo</strong> (localStorage del navegador) y nunca se envía a ningún servidor de TarotMe. Las solicitudes van directamente desde tu navegador a la API de Google.</p>
<p>⚠️ Nunca compartas tu clave con nadie ni la introduzcas en páginas desconocidas.</p>`
          }
        ]
      },
      {
        title: '🔑 Clave gratuita de Google AI Studio',
        items: [
          {
            q: '¿Cuántas lecturas puedo hacer gratis?',
            open: true,
            a: `<p>La API de Google Gemini tiene un <strong>nivel gratuito muy generoso</strong>, sin necesidad de tarjeta de crédito:</p>
<div class="faq-table-wrap"><table class="faq-table">
<thead><tr><th>Límite</th><th>Gemini 2.0 Flash (gratuito)</th></tr></thead>
<tbody>
<tr><td>Solicitudes por minuto</td><td><strong>15 RPM</strong></td></tr>
<tr><td>Solicitudes por día</td><td><strong>1.500 lecturas/día</strong></td></tr>
<tr><td>Tokens por minuto</td><td>1.000.000 TPM</td></tr>
<tr><td>Coste</td><td>✅ <strong>Gratis</strong> (sin tarjeta)</td></tr>
</tbody></table></div>
<p class="faq-note">💡 Con 1.500 lecturas diarias gratuitas, el nivel gratuito cubre perfectamente el uso personal sin ningún coste.</p>`
          },
          {
            q: '¿Cómo obtengo mi clave gratuita de Google AI Studio?',
            a: `<ol class="faq-steps">
<li>Ve a <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener">aistudio.google.com/app/apikey</a> con tu cuenta de Google.</li>
<li>Pulsa <strong>Create API key</strong>.</li>
<li>Copia la clave (empieza por <code>AIzaSy</code>).</li>
<li>En TarotMe Gemini, pulsa ⚙️ en la cabecera y pega tu clave.</li>
</ol>
<p class="faq-note">🎁 No se pide tarjeta de crédito. Solo necesitas una cuenta de Google.</p>`
          },
          {
            q: '¿Qué pasa si supero el límite gratuito?',
            a: `<p>Si superas las 1.500 solicitudes diarias o los 15 por minuto, recibirás un error <code>RESOURCE_EXHAUSTED</code>. En ese caso, espera unos minutos o hasta el día siguiente para que se renueve el cupo.</p>
<p>Si necesitas más capacidad, puedes activar facturación en Google Cloud para usar cuotas superiores (con cargo por uso), pero para el <strong>uso personal es prácticamente imposible agotar el nivel gratuito</strong>.</p>`
          }
        ]
      },
      {
        title: '🔧 Errores comunes',
        items: [
          {
            q: 'Error: <code>API_KEY_INVALID</code>',
            a: '<p>La clave introducida no es válida. Comprueba que empieza por <code>AIzaSy</code> y que la copiaste completa sin espacios. Genera una nueva en <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener">aistudio.google.com/app/apikey</a>.</p>'
          },
          {
            q: 'Error: <code>RESOURCE_EXHAUSTED</code>',
            a: '<p>Has alcanzado el límite de solicitudes del nivel gratuito (15/minuto o 1.500/día). Espera unos minutos o hasta el día siguiente para que se renueve.</p>'
          },
          {
            q: 'Error: <code>UNAVAILABLE</code> o sin respuesta',
            a: '<p>Los servidores de Google están temporalmente sobrecargados. Es un problema del lado del servidor. Espera unos segundos y vuelve a intentarlo.</p>'
          },
          {
            q: 'La respuesta fue bloqueada (filtros de seguridad)',
            a: '<p>Gemini bloqueó la respuesta por sus filtros de contenido. Asegúrate de que la imagen muestra claramente cartas de tarot y que la pregunta no contiene lenguaje que pueda ser interpretado de forma inapropiada.</p>'
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
<p><strong>5. Fotografía la tirada</strong> y súbela a TarotMe Gemini para obtener tu lectura. 📷</p>
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

    // Settings
    settings_title:   '⚙️ Settings',
    settings_body:    'To use the AI reading you need a Google AI Studio API key. It is completely free — no credit card required.',
    settings_label:   'Google AI Studio API Key',
    settings_link:    'Get your free key at aistudio.google.com →',
    settings_save:    'Save',
    settings_clear:   'Remove key',
    settings_saved:   '✓ Key saved successfully.',
    settings_nochange:'The key did not change.',
    settings_invalid: 'Please enter a valid key.',
    settings_prefix:  'The key must start with AIza…',
    settings_deleted: 'Key removed.',

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
    reading_subtitle: 'Upload a photo of your spread and write your question. Gemini AI will interpret the cards like an experienced tarot reader.',
    api_notice_title: 'API Key required',
    api_notice_body:  'To use the AI reading you need your free Google AI Studio API key. No credit card needed.',
    api_notice_btn:   'Configure now',
    step1_label:      'Photograph your spread',
    upload_title:     'Drag your spread photo here',
    upload_or:        'or <strong>click to select</strong>',
    upload_hint:      'Accepts JPG, PNG, WEBP',
    step2_label:      'Your question or topic',
    question_ph:      'Write your question or the topic you want to reflect on…\nExample: What does the tarot say about my love life right now?\nExample: I want to understand what the cards say about my career.',
    read_btn:         'Interpret spread',
    reading_btn_wait: 'Reading…',
    result_title:     '✦ Your reading',
    result_disclaimer:'⚠️ This interpretation is for guidance and personal reflection. Do not take it as absolute truth.',
    new_reading:      'New reading',
    api_key_title:    'No API key configured',
    err_no_resp:      'Could not get a response.',
    err_title:        '⚠️ Could not complete the reading.',
    err_check:        'Check that your API key is valid at',
    err_blocked:      'The response was blocked by Gemini safety filters. Try with a clearer image of tarot cards.',
    reading_thinking: 'Gemini is reading the cards…',
    api_dot_on:       'API key configured',
    api_dot_off:      'No API key configured',

    // Reading AI prompt pieces
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
    faq_subtitle: 'Everything you need to know about TarotMe Gemini and your free Google API key',
    faq_groups: [
      {
        title: '⚙️ General use',
        items: [
          {
            q: 'Do I need to pay to use TarotMe Gemini?',
            open: true,
            a: `<p>The <strong>78-card library</strong> is completely free and requires no account or key.</p>
<p>The <strong>personalized AI reading</strong> uses Google Gemini. The Google AI Studio API key is <strong>completely free</strong> for personal use — no credit card required.</p>`
          },
          {
            q: 'Which AI model does TarotMe Gemini use?',
            a: `<p>TarotMe Gemini uses <strong>Gemini 2.0 Flash</strong> by Google, an advanced multimodal model capable of analyzing images and text simultaneously. It is configured to interpret cards with a warm and personal style.</p>`
          },
          {
            q: 'Is my API key safe?',
            a: `<p>Your API key is stored <strong>only on your device</strong> (browser localStorage) and is never sent to any TarotMe server. Requests go directly from your browser to Google's API.</p>
<p>⚠️ Never share your key with anyone or enter it on unknown sites.</p>`
          }
        ]
      },
      {
        title: '🔑 Free Google AI Studio key',
        items: [
          {
            q: 'How many free readings can I do?',
            open: true,
            a: `<p>The Gemini API has a <strong>very generous free tier</strong>, no credit card needed:</p>
<div class="faq-table-wrap"><table class="faq-table">
<thead><tr><th>Limit</th><th>Gemini 2.0 Flash (free)</th></tr></thead>
<tbody>
<tr><td>Requests per minute</td><td><strong>15 RPM</strong></td></tr>
<tr><td>Requests per day</td><td><strong>1,500 readings/day</strong></td></tr>
<tr><td>Tokens per minute</td><td>1,000,000 TPM</td></tr>
<tr><td>Cost</td><td>✅ <strong>Free</strong> (no card)</td></tr>
</tbody></table></div>
<p class="faq-note">💡 1,500 free daily readings is more than enough for personal use at zero cost.</p>`
          },
          {
            q: 'How do I get my free Google AI Studio key?',
            a: `<ol class="faq-steps">
<li>Go to <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener">aistudio.google.com/app/apikey</a> with your Google account.</li>
<li>Click <strong>Create API key</strong>.</li>
<li>Copy the key (starts with <code>AIzaSy</code>).</li>
<li>In TarotMe Gemini, click ⚙️ in the header and paste your key.</li>
</ol>
<p class="faq-note">🎁 No credit card required. Only a Google account.</p>`
          },
          {
            q: 'What happens if I exceed the free limit?',
            a: `<p>If you exceed 1,500 daily requests or 15 per minute, you will receive a <code>RESOURCE_EXHAUSTED</code> error. In that case, wait a few minutes or until the next day for the quota to renew.</p>
<p>For <strong>personal use it is practically impossible to exhaust the free tier</strong>.</p>`
          }
        ]
      },
      {
        title: '🔧 Common errors',
        items: [
          {
            q: 'Error: <code>API_KEY_INVALID</code>',
            a: '<p>The key is not valid. Make sure it starts with <code>AIzaSy</code> and was copied completely without extra spaces. Generate a new one at <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener">aistudio.google.com/app/apikey</a>.</p>'
          },
          {
            q: 'Error: <code>RESOURCE_EXHAUSTED</code>',
            a: '<p>You have reached the free tier request limit (15/min or 1,500/day). Wait a few minutes or until the next day for the quota to renew.</p>'
          },
          {
            q: 'Error: <code>UNAVAILABLE</code> or no response',
            a: '<p>Google servers are temporarily overloaded. Wait a few seconds and try again.</p>'
          },
          {
            q: 'Response blocked by safety filters',
            a: '<p>Gemini blocked the response due to its content filters. Make sure the image clearly shows tarot cards and the question does not contain language that could be misinterpreted.</p>'
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
<p><strong>5. Photograph the spread</strong> and upload it to TarotMe Gemini. 📷</p>
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
