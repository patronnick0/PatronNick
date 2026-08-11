/* === supabase.js === */
const SUPABASE_URL = "https://ddciapfllcnlkzupekgd.supabase.co";
const SUPABASE_KEY = "sb_publishable_bJAxN_efhfh-H7tB1e3vzg_xnOtt4Bc";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

/* === fonts.js === */
(() => {
  const MAY = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const MIN = "abcdefghijklmnopqrstuvwxyz";

  function crearMapa(mayus, minus) {
    const salida = {};
    const m1 = Array.from(mayus);
    const m2 = Array.from(minus);

    Array.from(MAY).forEach((letra, i) => {
      salida[letra] = m1[i] ?? letra;
    });

    Array.from(MIN).forEach((letra, i) => {
      salida[letra] = m2[i] ?? letra;
    });

    return salida;
  }

  function crearMapaMismo(caracteres) {
    const salida = {};
    const lista = Array.from(caracteres);

    Array.from(MAY).forEach((letra, i) => {
      salida[letra] = lista[i] ?? letra;
    });

    Array.from(MIN).forEach((letra, i) => {
      salida[letra] = lista[i] ?? letra;
    });

    return salida;
  }

  function crearEfecto(marca) {
    return Object.fromEntries(
      Array.from(MAY + MIN).map(letra => [letra, letra + marca])
    );
  }

  function crearEfectoMultiple(...marcas) {
    const efecto = marcas.join("");
    return Object.fromEntries(
      Array.from(MAY + MIN).map(letra => [letra, letra + efecto])
    );
  }

  const subscript = {
    A:"A",B:"B",C:"C",D:"D",E:"E",F:"F",G:"G",H:"H",I:"I",J:"J",K:"K",L:"L",M:"M",
    N:"N",O:"O",P:"P",Q:"Q",R:"R",S:"S",T:"T",U:"U",V:"V",W:"W",X:"X",Y:"Y",Z:"Z",
    a:"ₐ",b:"b",c:"c",d:"d",e:"ₑ",f:"f",g:"g",h:"ₕ",i:"ᵢ",j:"ⱼ",k:"ₖ",l:"ₗ",m:"ₘ",
    n:"ₙ",o:"ₒ",p:"ₚ",q:"q",r:"ᵣ",s:"ₛ",t:"ₜ",u:"ᵤ",v:"ᵥ",w:"w",x:"ₓ",y:"y",z:"z"
  };

  window.fuentes = [

    {
      nombre: "Mathematical Bold",
      abc: crearMapa(
        "𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙",
        "𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳"
      )
    },

    {
      nombre: "Double Struck",
      abc: crearMapa(
        "𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ",
        "𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫"
      )
    },

    {
      nombre: "Italic",
      abc: crearMapa(
        "𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍",
        "𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧"
      )
    },

    {
      nombre: "Bold Italic",
      abc: crearMapa(
        "𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁",
        "𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛"
      )
    },

    {
      nombre: "Monospace",
      abc: crearMapa(
        "𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉",
        "𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣"
      )
    },

    {
      nombre: "Fullwidth",
      abc: crearMapa(
        "ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ",
        "ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ"
      )
    },

    {
      nombre: "Circled",
      abc: crearMapa(
        "ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ",
        "ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ"
      )
    },

    {
      nombre: "Squared",
      abc: crearMapaMismo(
        "🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉"
      )
    },

    {
      nombre: "Script Elegant",
      abc: crearMapa(
        "𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵",
        "𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏"
      )
    },

    {
      nombre: "Script Bold",
      abc: crearMapa(
        "𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩",
        "𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃"
      )
    },

    {
      nombre: "Bold Fraktur",
      abc: crearMapa(
        "𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅",
        "𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟"
      )
    },

    {
      nombre: "Sans Bold",
      abc: crearMapa(
        "𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭",
        "𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇"
      )
    },

    {
      nombre: "Sans Italic",
      abc: crearMapa(
        "𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡",
        "𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻"
      )
    },

    {
      nombre: "Sans Bold Italic",
      abc: crearMapa(
        "𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕",
        "𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯"
      )
    },

    {
      nombre: "Fraktur",
      abc: crearMapa(
        "𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ",
        "𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷"
      )
    },

    {
      nombre: "Sans Serif",
      abc: crearMapa(
        "𝖠𝖡𝖢𝖣𝖤𝖥𝖦𝖧𝖨𝖩𝖪𝖫𝖬𝖭𝖮𝖯𝖰𝖱𝖲𝖳𝖴𝖵𝖶𝖷𝖸𝖹",
        "𝖺𝖻𝖼𝖽𝖾𝖿𝗀𝗁𝗂𝗃𝗄𝗅𝗆𝗇𝗈𝗉𝗊𝗋𝗌𝗍𝗎𝗏𝗐𝗑𝗒𝗓"
      )
    },

    {
      nombre: "Tiny Caps",
      abc: crearMapa(
        "ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ",
        "ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ"
      )
    },

    {
      nombre: "Superscript",
      abc: crearMapa(
        "ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾQᴿˢᵀᵁⱽᵂˣʸᶻ",
        "ᵃᵇᶜᵈᵉᶠᵍʰᶦʲᵏˡᵐⁿᵒᵖqʳˢᵗᵘᵛʷˣʸᶻ"
      )
    },

    {
      nombre: "Subscript",
      abc: subscript
    },

    {
      nombre: "Negative Circled",
      abc: crearMapaMismo(
        "🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩"
      )
    },

    {
      nombre: "Negative Squared",
      abc: crearMapaMismo(
        "🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉"
      )
    },

    {
      nombre: "Parenthesized",
      abc: crearMapaMismo(
        "⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵"
      )
    },

    {
      nombre: "Strike",
      abc: crearEfecto("\u0336")
    },

    {
      nombre: "Underline",
      abc: crearEfecto("\u0332")
    },

    {
      nombre: "Overline",
      abc: crearEfecto("\u0305")
    },

    {
      nombre: "Double Underline",
      abc: crearEfecto("\u0333")
    },

    {
      nombre: "Dotted",
      abc: crearEfecto("\u0307")
    },

    {
      nombre: "Slash",
      abc: crearEfecto("\u0337")
    },

    {
      nombre: "Slash Heavy",
      abc: crearEfecto("\u0338")
    },

    {
      nombre: "Wave",
      abc: crearEfecto("\u0334")
    },

    {
      nombre: "Double Overline",
      abc: crearEfecto("\u033F")
    },

    {
      nombre: "Dot Below",
      abc: crearEfecto("\u0323")
    },

    {
      nombre: "Ring",
      abc: crearEfecto("\u030A")
    },

    {
      nombre: "Double Dots",
      abc: crearEfecto("\u0308")
    },

    {
      nombre: "Tilde",
      abc: crearEfecto("\u0303")
    },

    {
      nombre: "Acute",
      abc: crearEfecto("\u0301")
    },

    {
      nombre: "Grave",
      abc: crearEfecto("\u0300")
    },

    {
      nombre: "Macron",
      abc: crearEfecto("\u0304")
    },

    {
      nombre: "Caron",
      abc: crearEfecto("\u030C")
    },

    {
      nombre: "Breve",
      abc: crearEfecto("\u0306")
    },

    {
      nombre: "Cyber X",
      abc: crearEfecto("\u033D")
    },

    {
      nombre: "Ghost X",
      abc: crearEfecto("\u0353")
    },

    {
      nombre: "Vector",
      abc: crearEfecto("\u20D7")
    },

    {
      nombre: "Vector Left",
      abc: crearEfecto("\u20D6")
    },

    {
      nombre: "Triple Dots",
      abc: crearEfecto("\u20DB")
    },

    {
      nombre: "Quad Dots",
      abc: crearEfecto("\u20DC")
    },

    {
      nombre: "Tilde Below",
      abc: crearEfecto("\u0330")
    },

    {
      nombre: "Macron Below",
      abc: crearEfecto("\u0331")
    },

    {
      nombre: "Ring Below",
      abc: crearEfecto("\u0325")
    },

    {
      nombre: "Dots Below",
      abc: crearEfecto("\u0324")
    },

    {
      nombre: "Cedilla",
      abc: crearEfecto("\u0327")
    },

    {
      nombre: "Ogonek",
      abc: crearEfecto("\u0328")
    },

    {
      nombre: "Vertical Tech",
      abc: crearEfecto("\u030D")
    },

    {
      nombre: "Double Vertical",
      abc: crearEfecto("\u030E")
    },

    {
      nombre: "Hook Above",
      abc: crearEfecto("\u0309")
    },

    {
      nombre: "Neon Pulse",
      abc: crearEfectoMultiple("\u0303", "\u0323")
    },

    {
      nombre: "Cyber Slash",
      abc: crearEfectoMultiple("\u0338", "\u0307")
    },

    {
      nombre: "Phantom",
      abc: crearEfectoMultiple("\u0305", "\u0323")
    },

    {
      nombre: "Electric",
      abc: crearEfectoMultiple("\u0301", "\u0332")
    },

    {
      nombre: "Quantum",
      abc: crearEfectoMultiple("\u0334", "\u0307")
    }

  ];
})();

/* === generator.js === */
function obtenerListaFuentes() {
  if (Array.isArray(window.fuentes)) return window.fuentes;
  if (Array.isArray(window.fonts)) return window.fonts;
  return [];
}

function aplicarFuente(texto, mapa) {
  let resultado = "";

  for (const letra of texto) {
    resultado += mapa?.[letra] || letra;
  }

  return resultado;
}

function generarEstilos(nombre) {
  const texto = String(nombre || "").trim();
  if (!texto) return [];

  const resultados = [];
  const vistos = new Set();

  for (const fuente of obtenerListaFuentes()) {
    const mapa =
      fuente.abc || fuente.mapa || fuente.letras || fuente.map || fuente;

    const estilo = aplicarFuente(texto, mapa);

    if (!estilo || vistos.has(estilo)) continue;

    vistos.add(estilo);

    resultados.push({
      fuente: fuente.nombre || fuente.name || "Fuente",
      texto: estilo,
    });
  }

  return resultados;
}


/* === categorias.js === */
const categorias = {
  invisible: [
    "ㅤㅤ",
    "    ",
    "ㅤㅤ ㅤㅤ ㅤㅤ",
    "                 ",
    "              ",
    "             ",
    "      ",
    "       ",
    "          ",
    "     ",
    "           ",
    "        ",
    "         ",
    "         ",
    "               ",
    "                ",
    "          ",
    "                         ",
    "               ",
    "                     ",
    "              ",
    "           ", 
    "          ",
    "                     ",
  ],

  parejas: [
    "ᴮᴬᴰɢɪ፝֟ʀʟ                                     ᴮᴬᴰʙo፝֟ʏ",
    "✿ＢＯＴＳϟＴＡ蒙                            ✿ＢＯＴＳϟＴＯ蒙",
    "✿Pᴜ֟፝ᴄᴄᴀ螿                                  ✿Gᴀ֟፝ʀᴜᴜ螿",
    "㍿✿кιиᎶᴳᵒᵈ᭄                               ㍿✿Qυεεռᴳᵒᵈ᭄",
    "✿Ꮆᵒᵈ᭄ᵀᴿᴼᴸᴸ                                ✿Ꮆᵒᵈ᭄ᵀᴿᴼᴸᴸ",
    "『ᴹ』ᴅᴇм፝֟oɴιoᬊ                              『ᴹ』ᴅᴇм፝֟oɴιᴀᬊ",
    "✿Dɪᴀʙʟᴀ爱                                  ✿Dɪᴀʙʟo爱",
    "⸙ ʏᴏ ᴍᴀᴛᴏ ꨄ︎                                 ⸙ ʏᴏ ʟᴜᴛᴇᴏ ꨄ︎",
    "➳ᴹᴿ᭄ᴺ ᴬ ᴿ ᵁ ᵀ ᴼ⁂                           ➳ᴹᴿ᭄ᴴ ᴵ ᴺ ᴬ ᵀ ᴬ⁂",
    "ටᴘ┋ㅤToxicoㅤMvp                             ටᴘ┋ㅤToxicaㅤMvp",
    "ΨㅤBotsitoএ                                                    ΨㅤBotsitaএ",
    "ReyㅤH4CK                                         ReinaㅤH4CK",
    "Kingㅤツ                                               Queenㅤツ",
    "এㅤDios⁹⁹⁹                                            এㅤDiosa⁹⁹⁹",
    "〆ㅤPatronㅤჯ                                                      〆ㅤPatronaㅤჯ",
    "•ㅤBebesitaㅤあ                                                   •ㅤBebesitoㅤあ",
    "777ㅤDiabloㅤ⁂                                   777ㅤDiablaㅤ⁂ ",
    "Sicarioﾠみ                                             Sicariaﾠみ",
    "是ㅤLunatico                                           是ㅤLunatica",
    "༄Nena ࿐                                              ༄Neno ࿐",
    "もㅤAsesinoㅤzZz                                    もㅤAsesinaㅤzZz",
    "㋦ㅤPapiღ                                          ㋦ㅤMamiღ",
  ],

  pro: [
    "꧁༄P  ʀ  ᴏ ᵖˡᵃʸᵉʳ 𝗬𝗧",
    "╰‿╯ ⚡☆[ҎƦƟ✌️",
    "ⵊᴛᴢㅤᏢɪᴋᴜㅤ",
    "『Ѕʜʀ』• ℑℴƙℯℛᴾᴿᴼシ",
    "𝙉𝙤𝙭𝙯𝙯 メ 𝙋𝙑𝙋",
    "𝙉𝙤𝙭𝙯𝙯 メ 𝙋𝙑𝙋 ⁴⁴⁴",
    "i'm noTx⸸ter",
    "I'mメStyle ⁴⁴⁴",
    "ᴍɪᴀ᭄ᴋʜᴀʟɪғᴀ",
    "Ⓥ⸙ 𝙉𝙤𝙭𝙯𝙯 メ 𝙋𝙑𝙋 모⁴⁴",
    "모┊LinoxXx",
    "모 Tᴀ ʟ ᴇ ɴ ᴛ ᴏ┊",
    "모┊Brxzz Ⓥ",
    "☯︎┇sᴏᴍʙʀᴀ☂ 1%",
    "⸙모┊ Cᴀʙᴏ꫟",
    "⸙모┊ Rɪᴄᴏ꫟",
    "⸙모┊ Kᴏᴡᴀʟsᴋɪ꫟",
    "⸙모┊ Sᴋɪᴘᴘᴇʀ꫟",
    "𝙈𝙏𝙓ㅤ 𝙋𝙇𝘼𝙔𝙀𝙍²™",
    "Oɴʟʏㅤz!xuㅤ모 zZz",
    "⸙𝐁𝐫𝐱𝐳𝐳 𝐙𝐱𝐭",
    "◤𝑭𝑹𝑬𝑬𝑺𝑻𝒀𝑳𝑬𝑹 ꔪ",
    "!Z4X_444¿?..",
    "愛4x Syrxxx ꔪ 모",
    "愛4x aimbot ꔪ 모",
    "𝐅𝐫𝐱𝐙𝐳 𝐙𝐱𝐭ㅤ 모",
    "╰‿╯ 모",
    "ㅤ!! Ꭾʀɪᴍᴇ 7 eXe 모",
    "Ꭼꪝʀㅤz!xuㅤ모",
    "Ⓥ┊Aʀᴇs 모",
    "Ⓥ┊Ｖｉｐｅｒ 모",
    "L-ᴢᴀᴄᴋ 모",
    "Ⓥ┊LOBO 모",
    "모ㅤMᴀxɪᴍᴏㅤ¿?",
    "あㅤL-MEX1ㅤ!",
    "あ L-Nexxㅤメ",
    "LilㅤLpxxxㅤ⸸",
    "ᴳᴰ┇twoㅤჯ",
    "夂ʟ-ɢᴀɴɢㅤ〆",
    "ᴘᴀɪɴㅤ×͜×",
    "DㅤMIㅤTIOㅤ†"
  ],

  oscuro: [
    "╰‿╯ㅤϟＴＥＲＲＯＲ†",
    "모ㅤPϟNGONㅤメ",
    "みㅤZAIKO→㊝",
    "༄ᶦᶰᵈ᭄✿ᴮᴬᴰʙᴏʏツ",
    "亗 𝚁 𝙾 𝙻 𝙴 𝚇  ☯︎",
    "༄●⃝ᶫᵒꪜe☯ᴮᴼᵞ࿐",
    "꧁༒Ǥ₳₦ǤֆƬᏋЯ༒꧂",
    "ᴰᵃʳᵏ✯ℓoνεяﮩ٨ـﮩﮩ٨ـ♥⃝",
    "☯ƤℜɆĐ₳₮Øℜ☯",
    "ঔৣ✞𝕯𝖆𝖗𝖐✞™❦",
    "ㅤ×͜×〲 ☞ 𝙰𝙻𝙾𝙽𝙴 𝙱𝙾𝚈 🅥,",
    "●⃝ʀs̸᭄☞ᴳᶹʳᶹ᭄●",
    "ᴬᴸᶜ〲❾❾❾+㊊ϡᴶᴿ",
    "꧁༺₦Ї₦ℑ₳༻꧂",
    "★!Ꭾʀɪᴍᴇ«»〆ᶻᴱᴿᴼ☯",
    "ㅤ⸙ㅤ𝙛𝙧𝙚𝙭𝙮𝙮",
    "W1n !Shadow愛",
    "Fx !    ✓ Ꭺᴜʀᴀㅤ!!!ㅤ",
    "ㅤ⸙ㅤ𝙛𝙧𝙚𝙭𝙮𝙮? 爱𝘇𝗭",
    "༒ㅤS么KURAㅤ༒",
    "—͞Xʏ𝖈ʟ🇴‌ɴᴇ ⸙",
    "ᴹᴿʟ-ʜᴀᴄᴋ⚜︎┊ᵐᵒᵛⁱˡ",
    "Fx. Respect🗿",
    "🅥ㅤᴠɪᴋɪɴɢᴏ",
    "〆ｐａｔｒｏｎㅤ¿?",
    "Zzzㅤᴍᴏᴅɪㅤ¿?",

  ]
};

/* === favoritos.js === */
const STORAGE_FAVORITOS = "favoritos";

let favoritos = cargarFavoritos();

function cargarFavoritos() {
  try {
    const data = localStorage.getItem(STORAGE_FAVORITOS);
    const parsed = data ? JSON.parse(data) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function guardarFavoritos() {
  localStorage.setItem(STORAGE_FAVORITOS, JSON.stringify(favoritos));
}

function obtenerFavoritos() {
  return [...favoritos];
}

function esFavorito(nombre) {
  return favoritos.includes(nombre);
}

function agregarFavorito(nombre) {
  if (esFavorito(nombre)) return false;

  favoritos.push(nombre);
  guardarFavoritos();
  return true;
}

function eliminarFavorito(nombre) {
  const antes = favoritos.length;
  favoritos = favoritos.filter((item) => item !== nombre);
  guardarFavoritos();
  return favoritos.length !== antes;
}


/* === cards.js === */
function crearTarjetaResultado(item) {
  const card = document.createElement("div");
  const color = colores[Math.floor(Math.random() * colores.length)];

  card.className = "resultado tarjetaCopiable";
  card.dataset.texto = item.texto;
  card.style.borderColor = color;
  card.style.boxShadow = `0 0 15px ${color}55`;

  card.innerHTML = `
    <div class="resultado-fuente" style="color:${color};">
      👑 ${item.fuente}
    </div>

    <button class="btnFavorito" type="button">
      ${esFavorito(item.texto) ? "❤️ Guardado" : "⭐ Favorito"}
    </button>

    <div class="resultado-texto">
      ${item.texto}
    </div>

    <div class="estadisticasNombre resultado-stats">
      <span class="copiasNombre">📋 0</span>
      <span class="favoritosNombre">❤️ 0</span>
    </div>

    <span class="copiadoOverlay" aria-hidden="true"><span class="copiadoTexto">COPIADO</span></span>
  `;

  const botonFavorito = card.querySelector(".btnFavorito");
  aplicarEstadoBotonFavorito(botonFavorito, esFavorito(item.texto));

  botonFavorito.addEventListener("click", async (event) => {
    event.stopPropagation();
    dispararEfectoFavorito(botonFavorito);

    if (botonFavorito.dataset.procesando === "true") return;
    botonFavorito.dataset.procesando = "true";

    try {
      if (esFavorito(item.texto)) {
        const correcto = await decrementarFavorito(item.texto);
        if (correcto) {
          eliminarFavorito(item.texto);
          botonFavorito.textContent = "⭐ Favorito";
          aplicarEstadoBotonFavorito(botonFavorito, false);
          mostrarEstadoFavorito(card, false);
        }
      } else {
        const correcto = await registrarFavorito(item.texto);
        if (correcto) {
          agregarFavorito(item.texto);
          botonFavorito.textContent = "❤️ Guardado";
          aplicarEstadoBotonFavorito(botonFavorito, true);
          mostrarEstadoFavorito(card, true);
        }
      }

      actualizarContadorFavoritos();
      await actualizarEstadisticaResultado(item.texto);
    } catch (error) {
      console.error("Error al cambiar favorito:", error);
    } finally {
      botonFavorito.dataset.procesando = "false";
    }
  });

  card.addEventListener("click", async (event) => {
    if (event.target.closest(".btnFavorito")) return;

    if (card.dataset.procesando === "true") return;
    card.dataset.procesando = "true";

    try {
      const correcto = await copiarTarjetaInteractiva(card, item.texto);
      if (!correcto) return;

      const copiaRegistrada = await registrarCopia(item.texto);
      if (copiaRegistrada) {
        actualizarEstadisticaResultado(item.texto);
      }
    } catch (error) {
      console.error("Error copiando resultado:", error);
    } finally {
      card.dataset.procesando = "false";
    }
  });

  return card;
}


/* === ui.js === */
function actualizarContadorFavoritos() {
  if (typeof contadorFavoritos === "undefined" || !contadorFavoritos) return;

  contadorFavoritos.textContent = `(${obtenerFavoritos().length})`;
}


function ocultarPanelFavoritos() {
  if (typeof panelFavoritos === "undefined" || !panelFavoritos) return;

  panelFavoritos.style.display = "none";
  panelFavoritos.innerHTML = "";
}


function mostrarZonaFavoritos() {
  if (typeof zonaFavoritos === "undefined" || !zonaFavoritos) return;

  zonaFavoritos.style.display = "flex";
}


function ocultarZonaFavoritos() {
  if (typeof zonaFavoritos === "undefined" || !zonaFavoritos) return;

  zonaFavoritos.style.display = "none";
  ocultarPanelFavoritos();
}


function limpiarContenido() {
  if (typeof contenido === "undefined" || !contenido) return;

  contenido.style.display = "none";
  contenido.innerHTML = "";
}


function limpiarResultados() {
  if (typeof resultados === "undefined" || !resultados) return;

  resultados.innerHTML = "";
}


/* =========================================
   AVISO TEMPORAL: NUEVOS NOMBRES
   Visible durante 48 horas desde esta actualización.
========================================= */
const NUEVOS_NOMBRES_EXPIRA = Date.parse("2026-08-12T21:55:00Z");

function ocultarAvisoNombresNuevos() {
  const aviso = document.getElementById("newNamesNotice");
  if (aviso) aviso.style.display = "none";
}

function actualizarAvisoNombresNuevos() {
  const aviso = document.getElementById("newNamesNotice");
  if (!aviso) return;

  const sigueActivo = Date.now() < NUEVOS_NOMBRES_EXPIRA;

  // Siempre vuelve a mostrarse al entrar al inicio mientras siga activo.
  aviso.style.display = sigueActivo ? "flex" : "none";

  if (sigueActivo && !aviso._expiraTimeout) {
    const restante = Math.max(0, NUEVOS_NOMBRES_EXPIRA - Date.now());
    aviso._expiraTimeout = window.setTimeout(
      ocultarAvisoNombresNuevos,
      restante
    );
  }

  if (aviso.dataset.inicializado === "true") return;
  aviso.dataset.inicializado = "true";

  const cerrar = aviso.querySelector(".new-names-close");
  const explorar = aviso.querySelector(".new-names-action");

  cerrar?.addEventListener("click", () => {
    ocultarAvisoNombresNuevos();
  });

  explorar?.addEventListener("click", () => {
    if (typeof mostrarFreeFire === "function") {
      mostrarFreeFire();
    }
  });
}


function mostrarInicio() {

  const siteFooter = document.getElementById("siteFooter");

  if (siteFooter) {
    siteFooter.style.display = "flex";
  }


  const infoHome = document.getElementById("infoHome");

  if (infoHome) {
    infoHome.style.display = "block";
  }


  actualizarAvisoNombresNuevos();


  /*
   * IMPORTANTE:
   * Restauramos el botón de TikTok cuando volvemos al inicio.
   *
   * mostrarResultados() lo oculta temporalmente.
   */
  const tiktokBtn = document.querySelector(".tiktok-btn");

  if (tiktokBtn) {
    tiktokBtn.style.removeProperty("display");
  }


  topBar.classList.remove("show");

  abrirFavoritos.style.display = "";

  document.querySelector(".hero").style.display = "block";
  document.querySelector(".generator").style.display = "block";
  document.querySelector(".games").style.display = "grid";
  document.querySelector(".categorias").style.display = "block";


  mostrarZonaFavoritos();

  limpiarResultados();

  limpiarContenido();

  ocultarPanelFavoritos();

  actualizarContadorFavoritos();


  inputNombre.focus();
}


function obtenerClienteSupabase() {

  if (
    typeof window.supabaseClient !== "undefined" &&
    window.supabaseClient
  ) {
    return window.supabaseClient;
  }


  if (
    typeof supabaseClient !== "undefined" &&
    supabaseClient
  ) {
    return supabaseClient;
  }


  return null;
}


function aplicarEstadoBotonFavorito(boton, estaActivo) {

  if (!boton) return;

  boton.classList.toggle(
    "favorito-activo",
    Boolean(estaActivo)
  );
}


function dispararEfectoFavorito(boton) {

  if (!boton) return;


  boton.classList.remove("fav-clicked");

  void boton.offsetWidth;

  boton.classList.add("fav-clicked");


  window.clearTimeout(
    boton._favEffectTimeout
  );


  boton._favEffectTimeout = window.setTimeout(() => {

    boton.classList.remove("fav-clicked");

  }, 520);
}


function mostrarEstadoFavorito(card, agregado) {

  if (!card) return;

  let overlay = card.querySelector(".favoritoOverlay");

  if (!overlay) {
    overlay = document.createElement("span");
    overlay.className = "favoritoOverlay";
    overlay.setAttribute("aria-hidden", "true");
    overlay.innerHTML = `<span class="favoritoOverlayIcon"></span><span class="favoritoOverlayTexto"></span>`;
    card.appendChild(overlay);
  }

  const icono = overlay.querySelector(".favoritoOverlayIcon");
  const texto = overlay.querySelector(".favoritoOverlayTexto");

  overlay.classList.remove("favorito-visible", "favorito-quitar");
  card.classList.remove("favorito-feedback");

  if (agregado) {
    if (icono) icono.textContent = "♥";
    if (texto) texto.textContent = "GUARDADO";
  } else {
    overlay.classList.add("favorito-quitar");
    if (icono) icono.textContent = "◇";
    if (texto) texto.textContent = "QUITADO";
  }

  void overlay.offsetWidth;
  overlay.classList.add("favorito-visible");
  card.classList.add("favorito-feedback");

  window.clearTimeout(card._favoritoFeedbackTimeout);
  card._favoritoFeedbackTimeout = window.setTimeout(() => {
    overlay.classList.remove("favorito-visible", "favorito-quitar");
    card.classList.remove("favorito-feedback");
  }, 1450);
}


function mostrarEstadoCopiado(card) {

  if (!card) return;


  const overlay = card.querySelector(".copiadoOverlay");

  const texto = overlay?.querySelector(".copiadoTexto");


  if (!overlay || !texto) return;


  window.clearTimeout(
    card._copiadoTimeout
  );


  card.classList.remove("copiado-activo");

  overlay.classList.remove("copiado-visible");

  texto.classList.remove("copiado-texto-activo");


  void card.offsetWidth;

  void overlay.offsetWidth;

  void texto.offsetWidth;


  card.classList.add("copiado-activo");

  overlay.classList.add("copiado-visible");

  texto.classList.add("copiado-texto-activo");


  card._copiadoTimeout = window.setTimeout(() => {

    texto.classList.remove("copiado-texto-activo");

    overlay.classList.remove("copiado-visible");

    card.classList.remove("copiado-activo");

  }, 3000);
}


async function copiarTarjetaInteractiva(card, texto) {

  const textoOriginal = String(texto ?? "");


  if (!textoOriginal.length) {
    return false;
  }


  try {

    await navigator.clipboard.writeText(
      textoOriginal
    );


    mostrarEstadoCopiado(card);


    return true;

  } catch (error) {

    console.error(
      "Error copiando texto:",
      error
    );


    return false;
  }
}


async function obtenerEstadisticas(nombre) {

  const client = obtenerClienteSupabase();


  if (!client) {

    console.error(
      "Supabase no está disponible."
    );


    return {
      copias: 0,
      favoritos: 0
    };
  }


  const { data, error } = await client
    .from("estadisticas_nombres")
    .select("copias, favoritos")
    .eq("nombre", nombre)
    .maybeSingle();


  if (error) {

    console.error(
      "Error obteniendo estadísticas:",
      error
    );


    return {
      copias: 0,
      favoritos: 0
    };
  }


  return data || {
    copias: 0,
    favoritos: 0
  };
}


async function registrarCopia(nombre) {

  const client = obtenerClienteSupabase();


  if (!client) {
    return false;
  }


  const { error } = await client.rpc(
    "incrementar_copias",
    {
      p_nombre: nombre
    }
  );


  if (error) {

    console.error(
      "Error registrando copia:",
      error
    );


    return false;
  }


  return true;
}


async function registrarFavorito(nombre) {

  const client = obtenerClienteSupabase();


  if (!client) {

    console.error(
      "Supabase no está disponible."
    );


    return false;
  }


  const { error } = await client.rpc(
    "incrementar_favoritos",
    {
      p_nombre: nombre
    }
  );


  if (error) {

    console.error(
      "Error registrando favorito:",
      error
    );


    return false;
  }


  return true;
}


async function decrementarFavorito(nombre) {

  const client = obtenerClienteSupabase();


  if (!client) {

    console.error(
      "Supabase no está disponible."
    );


    return false;
  }


  const { error } = await client.rpc(
    "decrementar_favoritos",
    {
      p_nombre: nombre
    }
  );


  if (error) {

    console.error(
      "Error restando favorito:",
      error
    );


    return false;
  }


  return true;
}


function obtenerElementoCategoriaPorNombre(nombre) {

  if (
    typeof contenido === "undefined" ||
    !contenido
  ) {
    return null;
  }


  return [
    ...contenido.querySelectorAll(
      ".tarjetaCategoria"
    )
  ].find(
    (item) =>
      item.dataset.nombre === nombre
  );
}


function obtenerElementoResultadoPorNombre(nombre) {

  if (
    typeof resultados === "undefined" ||
    !resultados
  ) {
    return null;
  }


  return [
    ...resultados.querySelectorAll(
      ".resultado"
    )
  ].find(
    (item) =>
      item.dataset.texto === nombre
  );
}


async function actualizarEstadisticaNombre(nombre) {

  const item =
    obtenerElementoCategoriaPorNombre(nombre);


  if (!item) return;


  const estadisticas =
    await obtenerEstadisticas(nombre);


  const copias =
    item.querySelector(".copiasNombre");


  const favoritos =
    item.querySelector(".favoritosNombre");


  if (copias) {
    copias.textContent =
      `📋 ${estadisticas.copias}`;
  }


  if (favoritos) {
    favoritos.textContent =
      `❤️ ${estadisticas.favoritos}`;
  }


  if (
    typeof actualizarCacheEstadisticasNombre ===
    "function"
  ) {

    actualizarCacheEstadisticasNombre(
      nombre,
      estadisticas
    );
  }
}


async function actualizarEstadisticaResultado(nombre) {

  const item =
    obtenerElementoResultadoPorNombre(nombre);


  if (!item) return;


  const estadisticas =
    await obtenerEstadisticas(nombre);


  const copias =
    item.querySelector(".copiasNombre");


  const favoritos =
    item.querySelector(".favoritosNombre");


  if (copias) {
    copias.textContent =
      `📋 ${estadisticas.copias}`;
  }


  if (favoritos) {
    favoritos.textContent =
      `❤️ ${estadisticas.favoritos}`;
  }

  if (
    typeof actualizarCacheEstadisticasNombre ===
    "function"
  ) {
    actualizarCacheEstadisticasNombre(
      nombre,
      estadisticas
    );
  }
}



function escaparHtml(texto) {
  return String(texto ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function separarNombrePareja(nombre) {
  const texto = String(nombre ?? "").trim();

  if (!texto) return [];

  // Formato recomendado para nombres nuevos: "Duo || Dua".
  let partes = texto.split(/\s*\|\|\s*/).filter(Boolean);

  // Compatibilidad con los nombres antiguos que fueron separados con muchos espacios.
  if (partes.length < 2) {
    partes = texto.split(/ {3,}/).map((parte) => parte.trim()).filter(Boolean);
  }

  if (partes.length < 2) return [texto];

  return [partes[0], partes.slice(1).join(" ")];
}

function obtenerTextoCopiaPareja(nombre) {
  const partes = separarNombrePareja(nombre);
  return partes.length > 1 ? partes.join("\n") : String(nombre ?? "").trim();
}



/* =========================================================
   PN NICK PREVIEW — VISTA DE PERFIL PARA CATEGORÍAS FREE FIRE
   ========================================================= */
const PN_PREVIEW_UID = "8265081210";
const PN_PREVIEW_LEVEL = 100;

function obtenerClaveCategoriaPreview(tituloCategoria) {
  const titulo = String(tituloCategoria ?? "").toLowerCase();

  if (titulo.includes("pareja")) return "parejas";
  if (titulo.includes("oscuro")) return "oscuro";
  if (titulo.includes("pro player")) return "pro_player";
  if (titulo.includes("invisible")) return "invisible";

  return "freefire";
}

function obtenerEtiquetaCategoriaPreview(clave) {
  const etiquetas = {
    oscuro: "OSCURO",
    parejas: "PAREJAS",
    pro_player: "PRO PLAYER",
    invisible: "INVISIBLE"
  };

  return etiquetas[clave] || "FREE FIRE";
}

function obtenerModalPreviewNombre() {
  let modal = document.getElementById("pnNickPreview");

  if (modal) return modal;

  modal = document.createElement("div");
  modal.id = "pnNickPreview";
  modal.className = "pn-preview";
  modal.setAttribute("aria-hidden", "true");

  modal.innerHTML = `
    <div class="pn-preview-backdrop" data-pn-preview-close></div>

    <section
      class="pn-preview-shell pn-ff-shell"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pnPreviewTitle"
    >
      <button
        class="pn-preview-close"
        type="button"
        data-pn-preview-close
        aria-label="Cerrar vista previa"
      >×</button>

      <div class="pn-preview-scanline" aria-hidden="true"></div>

      <header class="pn-preview-header pn-ff-preview-header">
        <div class="pn-preview-brand">
          <span class="pn-preview-brand-dot"></span>
          <div>
            <strong id="pnPreviewTitle">PN // FREE FIRE PREVIEW</strong>
            <span>PRUEBA TU NICK ANTES DE COPIARLO</span>
          </div>
        </div>
        <span id="pnPreviewCategory" class="pn-preview-category">FREE FIRE</span>
      </header>

      <div class="pn-profile-board pn-ff-board">
        <div class="pn-ff-topbar">
          <div class="pn-ff-wordmark" aria-label="Free Fire">FREE F<span>1</span>RE</div>
          <div class="pn-ff-top-decoration" aria-hidden="true">
            <i></i><i></i><i></i>
          </div>
        </div>

        <div class="pn-ff-identity">
          <div class="pn-ff-avatar-zone">
            <div class="pn-ff-avatar-frame">
              <img class="pn-ff-avatar" src="assets/images/profile/pn-avatar.webp" alt="Avatar de perfil">
            </div>
            <span class="pn-ff-level">Nvl. ${PN_PREVIEW_LEVEL}</span>
          </div>

          <div class="pn-ff-name-zone">
            <div id="pnPreviewNames" class="pn-preview-names pn-ff-names"></div>
            <div class="pn-ff-mini-icons" aria-hidden="true">
              <span>▦</span>
              <span>◷</span>
              <span>◉</span>
            </div>
          </div>

          <div class="pn-ff-likes">
            <span class="pn-ff-like-icon">♥</span>
            <strong>9999</strong>
          </div>
        </div>

        <div class="pn-ff-idbar">
          <span>UID:</span>
          <strong>${PN_PREVIEW_UID}</strong>
          <span class="pn-ff-id-copy" aria-hidden="true">▤</span>
        </div>

        <div class="pn-ff-battle-title">
          <span>⇆</span>
          <strong>BATTLE ROYALE</strong>
        </div>

        <div class="pn-ff-battle-grid">
          <div class="pn-ff-stat pn-ff-stat-rank">
            <div class="pn-ff-badge-glow"></div>
            <img src="assets/images/profile/rank.webp" alt="Rango Battle Royale">
          </div>

          <div class="pn-ff-stat">
            <div class="pn-ff-badge-glow pn-ff-badge-glow-purple"></div>
            <img src="assets/images/profile/emblem.webp" alt="Emblema">
          </div>

          <div class="pn-ff-stat">
            <div class="pn-ff-badge-glow pn-ff-badge-glow-red"></div>
            <img src="assets/images/profile/runner.webp" alt="Corredor">
          </div>
        </div>

        <div class="pn-ff-bio">Amo Free Fire</div>
      </div>

      <div class="pn-preview-actions pn-ff-preview-actions">
        <button class="pn-preview-action pn-preview-copy" type="button">
          <span>▣</span>
          Copiar nick
        </button>

        <button class="pn-preview-action pn-preview-favorite" type="button">
          <span>♥</span>
          Guardar
        </button>
      </div>
    </section>
  `;

  document.body.appendChild(modal);

  modal.querySelectorAll("[data-pn-preview-close]").forEach((elemento) => {
    elemento.addEventListener("click", cerrarPreviewNombre);
  });

  modal.querySelector(".pn-preview-copy")?.addEventListener("click", async () => {
    const texto = modal.dataset.copyText || "";
    if (!texto) return;

    try {
      await navigator.clipboard.writeText(texto);
      const boton = modal.querySelector(".pn-preview-copy");
      if (!boton) return;

      boton.classList.add("is-success");
      boton.innerHTML = "<span>✓</span> COPIADO";

      window.clearTimeout(boton._pnPreviewCopyTimeout);
      boton._pnPreviewCopyTimeout = window.setTimeout(() => {
        boton.classList.remove("is-success");
        boton.innerHTML = "<span>▣</span> Copiar nick";
      }, 1400);
    } catch (error) {
      console.error("Error copiando desde la vista previa:", error);
    }
  });

  modal.querySelector(".pn-preview-favorite")?.addEventListener("click", async () => {
    const nombre = modal.dataset.nombreOriginal || "";
    if (!nombre) return;

    const boton = modal.querySelector(".pn-preview-favorite");
    if (!boton || boton.dataset.procesando === "true") return;

    boton.dataset.procesando = "true";

    try {
      const estabaGuardado = esFavorito(nombre);
      let correcto = false;

      if (estabaGuardado) {
        correcto = await decrementarFavorito(nombre);
        if (correcto) eliminarFavorito(nombre);
      } else {
        correcto = await registrarFavorito(nombre);
        if (correcto) agregarFavorito(nombre);
      }

      if (!correcto) return;

      actualizarContadorFavoritos();
      actualizarEstadoFavoritoPreview(nombre);

      const tarjeta = Array.from(document.querySelectorAll("#contenido .tarjetaCategoria"))
        .find((item) => item.dataset.nombre === nombre);

      const botonTarjeta = tarjeta?.querySelector(".favoriteInvisible");
      const guardadoAhora = esFavorito(nombre);

      if (botonTarjeta) {
        botonTarjeta.textContent = guardadoAhora ? "❤️ Guardado" : "⭐ Favorito";
        aplicarEstadoBotonFavorito(botonTarjeta, guardadoAhora);
      }

      if (tarjeta) mostrarEstadoFavorito(tarjeta, guardadoAhora);

      if (typeof actualizarEstadisticaNombre === "function") {
        actualizarEstadisticaNombre(nombre);
      }
    } catch (error) {
      console.error("Error actualizando favorito desde vista previa:", error);
    } finally {
      boton.dataset.procesando = "false";
    }
  });

  if (!window._pnPreviewEscapeActivo) {
    window._pnPreviewEscapeActivo = true;
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") cerrarPreviewNombre();
    });
  }

  return modal;
}

function actualizarEstadoFavoritoPreview(nombre) {
  const modal = document.getElementById("pnNickPreview");
  if (!modal) return;

  const boton = modal.querySelector(".pn-preview-favorite");
  if (!boton) return;

  const guardado = esFavorito(nombre);
  boton.classList.toggle("is-saved", guardado);
  boton.innerHTML = guardado
    ? "<span>♥</span> Guardado"
    : "<span>♥</span> Guardar";
}

function cerrarPreviewNombre() {
  const modal = document.getElementById("pnNickPreview");
  if (!modal || !modal.classList.contains("is-open")) return;

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("pn-preview-open");
}

function abrirPreviewNombre(nombre, opciones = {}) {
  const modal = obtenerModalPreviewNombre();
  const esPareja = Boolean(opciones.esPareja);
  const categoria = opciones.categoria || "freefire";
  const partes = esPareja ? separarNombrePareja(nombre) : [String(nombre ?? "")];
  const nombres = partes.length > 1 ? partes : [String(nombre ?? "")];
  const contenedorNombres = modal.querySelector("#pnPreviewNames");
  const categoriaElemento = modal.querySelector("#pnPreviewCategory");

  modal.dataset.nombreOriginal = String(nombre ?? "");
  modal.dataset.copyText = esPareja
    ? obtenerTextoCopiaPareja(nombre)
    : String(nombre ?? "");
  modal.dataset.category = categoria;
  modal.dataset.mode = esPareja && nombres.length > 1 ? "duo" : "solo";

  if (categoriaElemento) {
    categoriaElemento.textContent = obtenerEtiquetaCategoriaPreview(categoria);
  }

  if (contenedorNombres) {
    contenedorNombres.classList.toggle("is-duo", esPareja && nombres.length > 1);

    contenedorNombres.innerHTML = nombres
      .map((nick, index) => `
        <div class="pn-ff-player ${index === 1 ? "pn-ff-player-alt" : ""}">
          ${esPareja && nombres.length > 1 ? `<small>DÚO ${index + 1}</small>` : ""}
          <strong class="pn-preview-nick pn-ff-nick">${escaparHtml(nick)}</strong>
        </div>
      `)
      .join("");
  }

  actualizarEstadoFavoritoPreview(nombre);

  modal.classList.remove("is-open");
  void modal.offsetWidth;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("pn-preview-open");
}

function crearTarjetaCategoria(nombre, opciones = {}) {

  const esPareja = Boolean(opciones.esPareja);
  const categoriaPreview = opciones.categoria || "freefire";
  const partesPareja = esPareja ? separarNombrePareja(nombre) : [];

  const nombreVisual = esPareja && partesPareja.length > 1
    ? partesPareja
        .map((parte) => `<span class="pareja-linea">${escaparHtml(parte)}</span>`)
        .join("")
    : escaparHtml(nombre);

  const nombreAtributo = escaparHtml(nombre);

  return `
    <div
      class="itemInvisible tarjetaCategoria tarjetaCopiable has-preview ${esPareja ? "pareja-card" : ""}"
      data-nombre="${nombreAtributo}"
    >

      <button
        class="favoriteInvisible"
        data-text="${nombreAtributo}"
        type="button"
      >
        ${esFavorito(nombre) ? "❤️ Guardado" : "⭐ Favorito"}
      </button>

      <div class="nombreCategoria ${esPareja ? "pareja-nombre" : ""}">
        ${nombreVisual}
      </div>

      <div class="estadisticasNombre">

        <span class="copiasNombre">
          📋 0
        </span>

        <span class="favoritosNombre">
          ❤️ 0
        </span>

      </div>

      <button
        class="previewNameBtn"
        type="button"
        data-text="${nombreAtributo}"
        data-category="${escaparHtml(categoriaPreview)}"
        data-pareja="${esPareja ? "true" : "false"}"
        aria-label="Probar este nombre en la vista previa"
      >
        <span class="previewNameBtnIcon" aria-hidden="true">🎮</span>
        <span>Probar</span>
      </button>

      <span
        class="copiadoOverlay"
        aria-hidden="true"
      >
        <span class="copiadoTexto">
          COPIADO
        </span>
      </span>

    </div>
  `;
}


function renderCopiarTexto(boton, texto) {

  boton.addEventListener(
    "click",
    async () => {

      try {

        await navigator.clipboard.writeText(
          String(texto ?? "")
        );


        boton.textContent =
          "✅ Copiado";


        setTimeout(() => {

          boton.textContent =
            "📋 Copiar";

        }, 1200);

      } catch (error) {

        console.error(
          "Error al copiar:",
          error
        );


        boton.textContent =
          "❌ Error";


        setTimeout(() => {

          boton.textContent =
            "📋 Copiar";

        }, 1200);
      }
    }
  );
}


async function mostrarResultados(nombre) {

  const siteFooter =
    document.getElementById("siteFooter");


  if (siteFooter) {
    siteFooter.style.display = "none";
  }


  const infoHome =
    document.getElementById("infoHome");


  if (infoHome) {
    infoHome.style.display = "none";
  }


  ocultarAvisoNombresNuevos();


  topBar.classList.add("show");


  generatorSection.style.display =
    "block";

  games.style.display =
    "none";

  categoriasTitulo.style.display =
    "none";


  /*
   * Ocultamos TikTok mientras se
   * muestran resultados.
   */
  const tiktokBtn =
    document.querySelector(".tiktok-btn");


  if (tiktokBtn) {
    tiktokBtn.style.display = "none";
  }


  ocultarZonaFavoritos();

  limpiarContenido();

  limpiarResultados();


  const titulo =
    document.createElement("p");


  titulo.style.color =
    "#cbd5e1";

  titulo.style.marginBottom =
    "14px";

  titulo.style.fontSize =
    "18px";

  titulo.textContent =
    `Resultados para: ${nombre}`;


  resultados.appendChild(titulo);


  const estilosGenerados =
    generarEstilos(nombre);


  const estilos =
    typeof obtenerOrdenResultados === "function"
      ? obtenerOrdenResultados(estilosGenerados)
      : estilosGenerados;


  if (!estilos.length) {

    const vacio =
      document.createElement("p");


    vacio.style.color =
      "#cbd5e1";


    vacio.textContent =
      "No se generaron resultados.";


    resultados.appendChild(vacio);


    return;
  }


  estilos.forEach(
    (item, index) => {

      const card =
        crearTarjetaResultado(item);


      card.style.animationDelay =
        `${index * 0.04}s`;


      resultados.appendChild(card);
    }
  );


  if (
    typeof actualizarEstadisticasResultadosEnSegundoPlano ===
    "function"
  ) {
    actualizarEstadisticasResultadosEnSegundoPlano(estilos);
  } else {
    estilos.forEach((item) =>
      actualizarEstadisticaResultado(item.texto)
    );
  }
}


function renderCategoria(tituloCategoria, nombres) {

  const categoriaPreview = obtenerClaveCategoriaPreview(tituloCategoria);
  const esCategoriaParejas = /parejas/i.test(String(tituloCategoria ?? ""));
  const nombresVisibles = esCategoriaParejas
    ? nombres.filter((nombre) => String(nombre ?? "").trim())
    : nombres;

  ocultarAvisoNombresNuevos();

  topBar.classList.remove("show");


  ocultarPanelFavoritos();

  limpiarResultados();


  contenido.style.display =
    "block";


  const infoHome =
    document.getElementById("infoHome");


  if (infoHome) {
    infoHome.style.display = "none";
  }


  const siteFooter =
    document.getElementById("siteFooter");


  if (siteFooter) {
    siteFooter.style.display = "none";
  }


  contenido.innerHTML = `
    <div class="pantallaJuego">

      <button
        id="volverMenu"
        class="back-btn"
      >
        ← Volver
      </button>

      <h2 class="tituloJuego">
        ${tituloCategoria}
      </h2>

      <div class="listaInvisible">
        ${nombresVisibles
          .map(
            (nombre) =>
              crearTarjetaCategoria(nombre, { esPareja: esCategoriaParejas, categoria: categoriaPreview })
          )
          .join("")}
      </div>

    </div>
  `;


  contenido
    .querySelectorAll(".tarjetaCategoria")
    .forEach((tarjeta) => {

      const nombre =
        tarjeta.dataset.nombre;


      tarjeta.addEventListener(
        "click",
        async (event) => {

          if (
            event.target.closest(
              ".favoriteInvisible, .previewNameBtn"
            )
          ) {
            return;
          }


          if (
            tarjeta.dataset.procesando ===
            "true"
          ) {
            return;
          }


          tarjeta.dataset.procesando =
            "true";


          try {

            const textoParaCopiar = esCategoriaParejas
              ? obtenerTextoCopiaPareja(nombre)
              : nombre;

            const correcto =
              await copiarTarjetaInteractiva(
                tarjeta,
                textoParaCopiar
              );


            if (!correcto) return;


            const copiaRegistrada =
              await registrarCopia(nombre);


            if (copiaRegistrada) {

              actualizarEstadisticaNombre(
                nombre
              );
            }

          } catch (error) {

            console.error(
              "Error copiando nombre de categoría:",
              error
            );

          } finally {

            tarjeta.dataset.procesando =
              "false";
          }
        }
      );
    });


  contenido
    .querySelectorAll(".previewNameBtn")
    .forEach((boton) => {

      boton.addEventListener("click", (event) => {
        event.stopPropagation();

        const tarjeta = boton.closest(".tarjetaCategoria");
        const nombre = tarjeta?.dataset.nombre || boton.dataset.text || "";
        const categoria = boton.dataset.category || categoriaPreview;
        const esPareja = boton.dataset.pareja === "true";

        abrirPreviewNombre(nombre, {
          categoria,
          esPareja
        });
      });
    });


  contenido
    .querySelectorAll(".favoriteInvisible")
    .forEach((boton) => {

      const nombre =
        boton.dataset.text;


      aplicarEstadoBotonFavorito(
        boton,
        esFavorito(nombre)
      );


      boton.addEventListener(
        "click",
        async (event) => {

          event.stopPropagation();


          dispararEfectoFavorito(
            boton
          );


          if (
            boton.dataset.procesando ===
            "true"
          ) {
            return;
          }


          boton.dataset.procesando =
            "true";


          try {

            if (esFavorito(nombre)) {

              const correcto =
                await decrementarFavorito(
                  nombre
                );


              if (correcto) {

                eliminarFavorito(nombre);


                boton.textContent =
                  "⭐ Favorito";


                aplicarEstadoBotonFavorito(
                  boton,
                  false
                );

                mostrarEstadoFavorito(
                  boton.closest(".tarjetaCategoria"),
                  false
                );
              }

            } else {

              const correcto =
                await registrarFavorito(
                  nombre
                );


              if (correcto) {

                agregarFavorito(nombre);


                boton.textContent =
                  "❤️ Guardado";


                aplicarEstadoBotonFavorito(
                  boton,
                  true
                );

                mostrarEstadoFavorito(
                  boton.closest(".tarjetaCategoria"),
                  true
                );
              }
            }


            actualizarContadorFavoritos();


            await actualizarEstadisticaNombre(
              nombre
            );

          } catch (error) {

            console.error(
              "Error procesando favorito:",
              error
            );

          } finally {

            boton.dataset.procesando =
              "false";
          }
        }
      );
    });


  /*
   * No bloqueamos la entrada esperando red.
   * Las estadísticas en caché se muestran
   * inmediatamente y se actualizan después.
   */
  if (
    typeof actualizarEstadisticasCategoriaEnSegundoPlano ===
    "function"
  ) {

    actualizarEstadisticasCategoriaEnSegundoPlano(
      nombres
    );

  } else {

    nombres.forEach(
      (nombre) =>
        actualizarEstadisticaNombre(nombre)
    );
  }


  const botonVolver =
    document.getElementById("volverMenu");


  if (botonVolver) {

    botonVolver.addEventListener(
      "click",
      mostrarFreeFire
    );
  }
}


function renderFavoritos() {

  ocultarAvisoNombresNuevos();

  abrirFavoritos.style.display =
    "none";


  const guardados =
    obtenerFavoritos();


  const siteFooter =
    document.getElementById("siteFooter");


  if (siteFooter) {
    siteFooter.style.display = "none";
  }


  topBar.classList.add("show");


  const infoHome =
    document.getElementById("infoHome");


  if (infoHome) {
    infoHome.style.display = "none";
  }


  document.getElementById("hero").style.display =
    "none";

  document.getElementById("generator").style.display =
    "none";

  document.getElementById("games").style.display =
    "none";

  document.getElementById("categorias").style.display =
    "none";


  document.getElementById("contenido").style.display =
    "none";

  document.getElementById("contenido").innerHTML =
    "";

  document.getElementById("resultados").innerHTML =
    "";


  mostrarZonaFavoritos();


  if (!guardados.length) {

    panelFavoritos.innerHTML = `
      <div class="pantallaJuego favoritos-screen">
        <div class="favoritos-heading">
          <span class="favoritos-heading-icon">☆</span>
          <div>
            <h2 class="tituloJuego">Favoritos</h2>
            <p>Guarda tus mejores nicks y vuelve a copiarlos cuando quieras.</p>
          </div>
        </div>

        <div class="favorites-empty">
          <span class="favorites-empty-icon">♡</span>
          <strong>Aún no has guardado nombres</strong>
          <span>Marca una tarjeta con Favorito y aparecerá aquí.</span>
        </div>
      </div>
    `;

    panelFavoritos.style.display =
      "block";

    return;
  }


  panelFavoritos.innerHTML = `
    <div class="pantallaJuego favoritos-screen">

      <div class="favoritos-heading">
        <span class="favoritos-heading-icon">★</span>
        <div>
          <h2 class="tituloJuego">Favoritos</h2>
          <p>${guardados.length} ${guardados.length === 1 ? "nick guardado" : "nicks guardados"}</p>
        </div>
      </div>

      <div class="listaInvisible favoritos-lista">

        ${guardados
          .map((nombre) => {
            const partes = separarNombrePareja(nombre);
            const visual = partes.length > 1
              ? partes.map((parte) => `<span class="favorito-nombre-linea">${escaparHtml(parte)}</span>`).join("")
              : `<span class="favorito-nombre-linea">${escaparHtml(nombre)}</span>`;

            return `
              <div
                class="itemInvisible favorite-saved-card tarjetaCopiable"
                data-text="${escaparHtml(nombre)}"
                role="button"
                tabindex="0"
                aria-label="Copiar ${escaparHtml(nombre)}"
              >
                <div class="favorito-nombre">${visual}</div>


                <button
                  class="removeFav"
                  data-text="${escaparHtml(nombre)}"
                  type="button"
                  title="Quitar de favoritos"
                  aria-label="Quitar de favoritos"
                ></button>

                <span class="copiadoOverlay" aria-hidden="true">
                  <span class="copiadoTexto">COPIADO</span>
                </span>
              </div>
            `;
          })
          .join("")}

      </div>

    </div>
  `;


  panelFavoritos.style.display =
    "block";


  const copiarFavorito = async (tarjeta) => {
    if (!tarjeta || tarjeta.dataset.procesando === "true") return;

    const nombre = tarjeta.dataset.text || "";
    const textoParaCopiar = obtenerTextoCopiaPareja(nombre);

    tarjeta.dataset.procesando = "true";

    try {
      const correcto = await copiarTarjetaInteractiva(
        tarjeta,
        textoParaCopiar
      );

      if (!correcto) return;

      const copiaRegistrada = await registrarCopia(nombre);

      if (copiaRegistrada && typeof actualizarCacheEstadisticasNombre === "function") {
        const stats = await obtenerEstadisticas(nombre);
        actualizarCacheEstadisticasNombre(nombre, stats);
      }
    } catch (error) {
      console.error("Error copiando favorito:", error);
    } finally {
      tarjeta.dataset.procesando = "false";
    }
  };


  panelFavoritos
    .querySelectorAll(".favorite-saved-card")
    .forEach((tarjeta) => {
      tarjeta.addEventListener("click", (event) => {
        if (event.target.closest(".removeFav")) return;
        copiarFavorito(tarjeta);
      });

      tarjeta.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        if (event.target.closest(".removeFav")) return;
        event.preventDefault();
        copiarFavorito(tarjeta);
      });
    });


  panelFavoritos
    .querySelectorAll(".removeFav")
    .forEach((boton) => {

      boton.addEventListener(
        "click",
        async (event) => {

          event.stopPropagation();

          if (boton.dataset.procesando === "true") return;
          boton.dataset.procesando = "true";

          const nombre =
            boton.dataset.text;

          const tarjeta = boton.closest(".favorite-saved-card");

          try {
            const correcto =
              await decrementarFavorito(
                nombre
              );

            if (!correcto) return;

            eliminarFavorito(nombre);
            actualizarContadorFavoritos();

            if (tarjeta) {
              tarjeta.classList.add("favorito-removing");
              window.setTimeout(renderFavoritos, 330);
            } else {
              renderFavoritos();
            }
          } finally {
            boton.dataset.procesando = "false";
          }
        }
      );
    });
}


function alternarFavoritos() {

  if (
    panelFavoritos.style.display ===
    "block"
  ) {

    ocultarPanelFavoritos();

    return;
  }


  renderFavoritos();
}

/* === ranking.js === */
/* =========================================================
   RANKING INTELIGENTE DE CATEGORÍAS
   ---------------------------------------------------------
   Objetivos:
   - Nunca bloquear la navegación esperando a Supabase.
   - Dar más probabilidad a nombres con interacción.
   - Mantener oportunidades reales para nombres nuevos (0/0).
   - Evitar que siempre se repitan los mismos primeros puestos.
   - Precargar estadísticas en segundo plano y conservar una
     caché local para que la próxima visita sea instantánea.
   ========================================================= */

const PN_RANKING_CACHE_KEY = "patronnick_categoria_stats_v2";
const PN_RANKING_HISTORY_KEY = "patronnick_categoria_history_v2";

const estadoRankingCategorias = {
  estadisticas: new Map(),
  precargaPromesa: null,
  precargaCompleta: false,
};

function normalizarNumeroRanking(valor) {
  const numero = Number(valor);
  return Number.isFinite(numero) && numero > 0 ? numero : 0;
}

function cargarCacheRankingLocal() {
  try {
    const guardado = JSON.parse(localStorage.getItem(PN_RANKING_CACHE_KEY) || "{}");
    const datos = guardado && typeof guardado === "object" ? guardado.datos : null;

    if (!datos || typeof datos !== "object") return;

    Object.entries(datos).forEach(([nombre, stats]) => {
      estadoRankingCategorias.estadisticas.set(nombre, {
        copias: normalizarNumeroRanking(stats?.copias),
        favoritos: normalizarNumeroRanking(stats?.favoritos),
      });
    });
  } catch (error) {
    console.warn("No se pudo leer la caché del ranking:", error);
  }
}

function guardarCacheRankingLocal() {
  try {
    const datos = {};

    estadoRankingCategorias.estadisticas.forEach((stats, nombre) => {
      datos[nombre] = {
        copias: normalizarNumeroRanking(stats.copias),
        favoritos: normalizarNumeroRanking(stats.favoritos),
      };
    });

    localStorage.setItem(
      PN_RANKING_CACHE_KEY,
      JSON.stringify({ actualizado: Date.now(), datos })
    );
  } catch (error) {
    // La app debe seguir funcionando aunque localStorage esté desactivado.
    console.warn("No se pudo guardar la caché del ranking:", error);
  }
}

function actualizarCacheEstadisticasNombre(nombre, estadisticas) {
  if (typeof nombre !== "string") return;

  estadoRankingCategorias.estadisticas.set(nombre, {
    copias: normalizarNumeroRanking(estadisticas?.copias),
    favoritos: normalizarNumeroRanking(estadisticas?.favoritos),
  });

  guardarCacheRankingLocal();
}

function obtenerEstadisticasRanking(nombre) {
  return estadoRankingCategorias.estadisticas.get(nombre) || {
    copias: 0,
    favoritos: 0,
  };
}

function obtenerHistorialRanking() {
  try {
    const historial = JSON.parse(localStorage.getItem(PN_RANKING_HISTORY_KEY) || "{}");
    return historial && typeof historial === "object" ? historial : {};
  } catch (error) {
    return {};
  }
}

function guardarHistorialRanking(historial) {
  try {
    localStorage.setItem(PN_RANKING_HISTORY_KEY, JSON.stringify(historial));
  } catch (error) {
    // No es crítico para el funcionamiento del ranking.
  }
}

function factorPenalizacionReciente(nombre, claveCategoria, historial) {
  const historialActual = historial || obtenerHistorialRanking();
  const rondas = Array.isArray(historialActual[claveCategoria])
    ? historialActual[claveCategoria]
    : [];

  let factor = 1;

  rondas.slice(0, 3).forEach((ronda, antiguedad) => {
    if (!Array.isArray(ronda)) return;

    const posicion = ronda.indexOf(nombre);
    if (posicion === -1) return;

    // La última ronda pesa más. Sólo penalizamos los primeros puestos.
    const porPosicion = posicion === 0 ? 0.58 : posicion === 1 ? 0.76 : 0.9;
    const porAntiguedad = antiguedad === 0 ? 1 : antiguedad === 1 ? 0.9 : 0.96;

    factor *= porPosicion * porAntiguedad;
  });

  // Nunca enterramos completamente un nombre popular.
  return Math.max(0.5, factor);
}

function registrarOrdenReciente(claveCategoria, orden) {
  if (!claveCategoria || !Array.isArray(orden)) return;

  const historial = obtenerHistorialRanking();
  const rondas = Array.isArray(historial[claveCategoria])
    ? historial[claveCategoria]
    : [];

  // Guardamos sólo los tres primeros de las últimas cuatro aperturas.
  rondas.unshift(orden.slice(0, 3));
  historial[claveCategoria] = rondas.slice(0, 4);
  guardarHistorialRanking(historial);
}

function calcularPesoRanking(nombre, claveCategoria, historial) {
  const { copias, favoritos } = obtenerEstadisticasRanking(nombre);

  // Escala logarítmica: 1.000 copias ayudan, pero no hacen invencible al nombre.
  // Los favoritos pesan más porque expresan una intención más fuerte.
  const popularidad =
    Math.log1p(copias) * 0.62 +
    Math.log1p(favoritos * 8) * 1.05;

  let peso = 1 + Math.min(3.15, popularidad * 0.42);

  // Exploración: los nombres nuevos tienen un pequeño empujón para poder
  // aparecer incluso en el puesto 1 o 2 y obtener sus primeras interacciones.
  if (copias === 0 && favoritos === 0) {
    peso *= 1.42;
  } else if (copias + favoritos <= 3) {
    peso *= 1.16;
  }

  // Evita que el mismo nombre domine las primeras posiciones cada entrada.
  peso *= factorPenalizacionReciente(nombre, claveCategoria, historial);

  // "Temperatura" que aplana diferencias: mantiene la ventaja de los populares
  // sin convertir el ranking en un orden fijo.
  return Math.max(0.65, Math.pow(peso, 0.78));
}

function ordenarConSorteoPonderado(nombres, claveCategoria) {
  const candidatos = Array.from(nombres || []);
  const historial = obtenerHistorialRanking();

  return candidatos
    .map((nombre, indiceOriginal) => {
      const peso = calcularPesoRanking(nombre, claveCategoria, historial);
      const aleatorio = Math.max(Math.random(), 1e-10);

      // Sorteo ponderado sin reemplazo (Efraimidis-Spirakis).
      // Menor clave => mayor prioridad.
      const clave = -Math.log(aleatorio) / peso;

      return { nombre, clave, indiceOriginal };
    })
    .sort((a, b) => a.clave - b.clave || a.indiceOriginal - b.indiceOriginal)
    .map((item) => item.nombre);
}

function obtenerOrdenCategoria(claveCategoria) {
  const nombres = categorias?.[claveCategoria];
  if (!Array.isArray(nombres)) return [];

  const orden = ordenarConSorteoPonderado(nombres, claveCategoria);
  registrarOrdenReciente(claveCategoria, orden);
  return orden;
}


function obtenerOrdenResultados(estilos) {
  if (!Array.isArray(estilos)) return [];

  const validos = estilos.filter(
    (item) => item && typeof item.texto === "string" && item.texto.length
  );

  const porTexto = new Map(validos.map((item) => [item.texto, item]));
  const orden = ordenarConSorteoPonderado(
    validos.map((item) => item.texto),
    "generador"
  );

  registrarOrdenReciente("generador", orden);

  return orden
    .map((texto) => porTexto.get(texto))
    .filter(Boolean);
}

function obtenerTodosLosNombresCategorias() {
  if (typeof categorias === "undefined" || !categorias) return [];

  return [...new Set(Object.values(categorias).flat().filter((nombre) => typeof nombre === "string"))];
}

function dividirEnBloques(lista, tamano = 8) {
  const bloques = [];
  for (let i = 0; i < lista.length; i += tamano) {
    bloques.push(lista.slice(i, i + tamano));
  }
  return bloques;
}

async function consultarEstadisticasRanking(nombres) {
  const client = typeof obtenerClienteSupabase === "function"
    ? obtenerClienteSupabase()
    : null;

  if (!client || !Array.isArray(nombres) || !nombres.length) return new Map();

  const resultado = new Map();
  const bloques = dividirEnBloques([...new Set(nombres)], 8);

  // Los bloques evitan URLs gigantes con nombres Unicode muy largos.
  const respuestas = await Promise.allSettled(
    bloques.map(async (bloque) => {
      const { data, error } = await client
        .from("estadisticas_nombres")
        .select("nombre, copias, favoritos")
        .in("nombre", bloque);

      if (error) throw error;
      return Array.isArray(data) ? data : [];
    })
  );

  respuestas.forEach((respuesta) => {
    if (respuesta.status !== "fulfilled") {
      console.warn("Una parte de la precarga de estadísticas falló:", respuesta.reason);
      return;
    }

    respuesta.value.forEach((fila) => {
      resultado.set(fila.nombre, {
        copias: normalizarNumeroRanking(fila.copias),
        favoritos: normalizarNumeroRanking(fila.favoritos),
      });
    });
  });

  // Los nombres sin fila siguen siendo válidos y equivalen a 0/0.
  nombres.forEach((nombre) => {
    if (!resultado.has(nombre)) {
      resultado.set(nombre, { copias: 0, favoritos: 0 });
    }
  });

  return resultado;
}

function fusionarEstadisticasRanking(mapa) {
  if (!(mapa instanceof Map)) return;

  mapa.forEach((stats, nombre) => {
    estadoRankingCategorias.estadisticas.set(nombre, {
      copias: normalizarNumeroRanking(stats?.copias),
      favoritos: normalizarNumeroRanking(stats?.favoritos),
    });
  });

  guardarCacheRankingLocal();
}

function pintarEstadisticasCategoriaDesdeCache(nombres) {
  if (typeof contenido === "undefined" || !contenido) return;

  (nombres || []).forEach((nombre) => {
    const tarjeta = obtenerElementoCategoriaPorNombre(nombre);
    if (!tarjeta) return;

    const stats = obtenerEstadisticasRanking(nombre);
    const copias = tarjeta.querySelector(".copiasNombre");
    const favoritos = tarjeta.querySelector(".favoritosNombre");

    if (copias) copias.textContent = `📋 ${stats.copias}`;
    if (favoritos) favoritos.textContent = `❤️ ${stats.favoritos}`;
  });
}


function pintarEstadisticasResultadosDesdeCache(estilos) {
  if (typeof resultados === "undefined" || !resultados) return;

  (estilos || []).forEach((item) => {
    const nombre = item?.texto;
    if (typeof nombre !== "string") return;

    const tarjeta = obtenerElementoResultadoPorNombre(nombre);
    if (!tarjeta) return;

    const stats = obtenerEstadisticasRanking(nombre);
    const copias = tarjeta.querySelector(".copiasNombre");
    const favoritos = tarjeta.querySelector(".favoritosNombre");

    if (copias) copias.textContent = `📋 ${stats.copias}`;
    if (favoritos) favoritos.textContent = `❤️ ${stats.favoritos}`;
  });
}

function actualizarEstadisticasResultadosEnSegundoPlano(estilos) {
  const nombres = (estilos || [])
    .map((item) => item?.texto)
    .filter((nombre) => typeof nombre === "string" && nombre.length);

  if (!nombres.length) return;

  // Render inmediato con caché: nunca bloquea la aparición de las tarjetas.
  pintarEstadisticasResultadosDesdeCache(estilos);

  consultarEstadisticasRanking(nombres)
    .then((mapa) => {
      fusionarEstadisticasRanking(mapa);
      pintarEstadisticasResultadosDesdeCache(estilos);
    })
    .catch((error) => {
      console.warn("No se pudieron actualizar las estadísticas del generador:", error);
    });
}

function iniciarPrecargaRankingCategorias() {
  if (estadoRankingCategorias.precargaPromesa) {
    return estadoRankingCategorias.precargaPromesa;
  }

  const nombres = obtenerTodosLosNombresCategorias();

  estadoRankingCategorias.precargaPromesa = consultarEstadisticasRanking(nombres)
    .then((mapa) => {
      fusionarEstadisticasRanking(mapa);
      estadoRankingCategorias.precargaCompleta = true;
      return mapa;
    })
    .catch((error) => {
      // Nunca propagamos el fallo a la navegación.
      console.warn("La precarga de ranking no pudo completarse:", error);
      return new Map();
    })
    .finally(() => {
      estadoRankingCategorias.precargaCompleta = true;
    });

  return estadoRankingCategorias.precargaPromesa;
}

function actualizarEstadisticasCategoriaEnSegundoPlano(nombres) {
  // Primero pintamos inmediatamente cualquier valor guardado localmente.
  pintarEstadisticasCategoriaDesdeCache(nombres);

  // Si la precarga global sigue trabajando, aprovechamos esa misma petición.
  const promesa = iniciarPrecargaRankingCategorias();

  promesa.then(() => {
    // Sólo pinta tarjetas que todavía existan en pantalla.
    pintarEstadisticasCategoriaDesdeCache(nombres);
  });
}

// La caché local se hidrata de forma síncrona al cargar el script.
cargarCacheRankingLocal();


/* === freefire.js === */
function crearMenuFreeFire() {
  contenido.innerHTML = `
    <div class="pantallaJuego">

      <h2 class="tituloJuego ff-menu-title">
        <span class="ff-menu-title-icon ff-menu-title-icon--fire" aria-hidden="true">🔥</span>
        <span>Free Fire</span>
      </h2>

      <div class="menu-juego">

        <!-- OSCURO -->
        <div class="modo-card">
          <h3 class="ff-mode-title">
            <img class="ff-mode-icon-img" src="assets/images/categories/dark.webp" alt="" aria-hidden="true">
            <span>Oscuro</span>
          </h3>

          <p>Estilo dark.</p>

          <span class="cantidad-nombres">
            ${categorias.oscuro.length} nombres
          </span>

          <button id="btnOscuro">
            Entrar
          </button>

          <a
            href="nombres-oscuros-free-fire.html"
            class="seo-category-link"
          >
            Ver guía de nombres oscuros →
          </a>
        </div>


        <!-- PAREJAS -->
        <div class="modo-card">
          <h3 class="ff-mode-title">
            <img class="ff-mode-icon-img" src="assets/images/categories/pairs.webp" alt="" aria-hidden="true">
            <span>Parejas</span>
          </h3>

          <p>Nombres para dúos.</p>

          <span class="cantidad-nombres">
            ${categorias.parejas.length} nombres
          </span>

          <button id="btnParejas">
            Entrar
          </button>

          <a
            href="nombres-parejas-free-fire.html"
            class="seo-category-link"
          >
            Ver guía de nombres para parejas →
          </a>
        </div>


        <!-- PRO PLAYER -->
        <div class="modo-card">
          <h3 class="ff-mode-title">
            <img class="ff-mode-icon-img ff-mode-icon-img--pro" src="assets/images/categories/pro.webp" alt="" aria-hidden="true">
            <span>Pro Player</span>
          </h3>

          <p>Estilo competitivo.</p>

          <span class="cantidad-nombres">
            ${categorias.pro.length} nombres
          </span>

          <button id="btnPro">
            Entrar
          </button>

          <a
            href="nombres-pro-player-free-fire.html"
            class="seo-category-link"
          >
            Ver guía de nombres Pro Player →
          </a>
        </div>


        <!-- INVISIBLE -->
        <div class="modo-card">
          <h3 class="ff-mode-title">
            <img class="ff-mode-icon-img" src="assets/images/categories/invisible.webp" alt="" aria-hidden="true">
            <span>Invisible</span>
          </h3>

          <p>Crea nombres invisibles.</p>

          <span class="cantidad-nombres">
            ${categorias.invisible.length} nombres
          </span>

          <button id="btnInvisible">
            Entrar
          </button>

          <a
            href="nombres-invisibles-free-fire.html"
            class="seo-category-link"
          >
            Ver guía de nombres invisibles →
          </a>
        </div>

      </div>

    </div>
  `;


  // OSCURO
  document.getElementById("btnOscuro").addEventListener("click", () => {
    renderCategoria(
      '<span class="ff-category-page-title"><img src="assets/images/categories/dark.webp" alt="" aria-hidden="true"><span>Oscuro</span></span>',
      obtenerOrdenCategoria("oscuro")
    );
  });


  // PAREJAS
  document.getElementById("btnParejas").addEventListener("click", () => {
    renderCategoria(
      '<span class="ff-category-page-title"><img src="assets/images/categories/pairs.webp" alt="" aria-hidden="true"><span>Parejas</span></span>',
      obtenerOrdenCategoria("parejas")
    );
  });


  // PRO PLAYER
  document.getElementById("btnPro").addEventListener("click", () => {
    renderCategoria(
      '<span class="ff-category-page-title"><img src="assets/images/categories/pro.webp" alt="" aria-hidden="true"><span>Pro Player</span></span>',
      obtenerOrdenCategoria("pro")
    );
  });


  // INVISIBLE
  document.getElementById("btnInvisible").addEventListener("click", () => {
    renderCategoria(
      '<span class="ff-category-page-title"><img src="assets/images/categories/invisible.webp" alt="" aria-hidden="true"><span>Invisible</span></span>',
      obtenerOrdenCategoria("invisible")
    );
  });
}



function mostrarFreeFire() {

  if (typeof ocultarAvisoNombresNuevos === "function") {
    ocultarAvisoNombresNuevos();
  }

  topBar.classList.add("show");


  // Ocultar información de inicio
  const infoHome = document.getElementById("infoHome");

  if (infoHome) {
    infoHome.style.display = "none";
  }


  // Ocultar footer
  const siteFooter = document.getElementById("siteFooter");

  if (siteFooter) {
    siteFooter.style.display = "none";
  }


  // Ocultar pantalla principal
  document.querySelector(".hero").style.display = "none";

  generatorSection.style.display = "none";

  games.style.display = "none";

  categoriasTitulo.style.display = "none";


  // Ocultar favoritos
  ocultarZonaFavoritos();


  // Limpiar resultados anteriores
  limpiarResultados();


  // Mostrar contenido de Free Fire
  contenido.innerHTML = "";

  contenido.style.display = "block";


  // Crear menú
  crearMenuFreeFire();
}

/* === script.js === */
const inputNombre = document.getElementById("inputNombre");
const btnGenerar = document.getElementById("btnGenerar");
const resultados = document.getElementById("resultados");
const topBar = document.getElementById("topBar");
const btnInicio = document.getElementById("btnInicio");
const generatorSection = document.querySelector(".generator");
const games = document.querySelector(".games");
const categoriasTitulo = document.querySelector(".categorias");
const freefireBtn = document.getElementById("freefireBtn");
const contenido = document.getElementById("contenido");
const zonaFavoritos = document.getElementById("zonaFavoritos");
const abrirFavoritos = document.getElementById("abrirFavoritos");
const panelFavoritos = document.getElementById("panelFavoritos");
const contadorFavoritos = document.getElementById("contadorFavoritos");

const colores = [
  "#38bdf8",
  "#a855f7",
  "#ef4444",
  "#22c55e",
  "#f59e0b",
  "#06b6d4",
  "#ec4899",
  "#8b5cf6",
  "#10b981",
  "#f97316",
  "#3b82f6",
  "#e11d48",
  "#14b8a6",
  "#84cc16",
  "#6366f1",
  "#f43f5e",
  "#0ea5e9",
  "#9333ea",
  "#65a30d",
  "#fb923c",
  "#0284c7",
  "#7c3aed",
  "#16a34a",
  "#dc2626",
  "#0891b2",
];

function renderCopiarTexto(boton, texto) {
  boton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(texto);

      boton.textContent = "✅ Copiado";

      setTimeout(() => {
        boton.textContent = "📋 Copiar";
      }, 1200);
    } catch (error) {
      console.error("Error al copiar:", error);
      boton.textContent = "❌ Error";

      setTimeout(() => {
        boton.textContent = "📋 Copiar";
      }, 1200);
    }
  });
}


/* =========================================
   CREAR TARJETA
========================================= */

function crearCard(item) {

  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="textoResultado">
      ${item.texto}
    </div>

    <div class="acciones">
      <button class="btnFavorito">
        ${esFavorito(item.texto) ? "❤️ Guardado" : "⭐ Favorito"}
      </button>
    </div>
  `;

  const botonFavorito = card.querySelector(".btnFavorito");

  botonFavorito.addEventListener("click", () => {

    if (esFavorito(item.texto)) {
      eliminarFavorito(item.texto);
      botonFavorito.textContent = "⭐ Favorito";
    } else {
      agregarFavorito(item.texto);
      botonFavorito.textContent = "❤️ Guardado";
    }

    actualizarContadorFavoritos();

    if (panelFavoritos.style.display === "block") {
      renderFavoritos();
    }
  });

  return card;
}


/* =========================================
   GENERAR
========================================= */

btnGenerar.addEventListener("click", () => {

  const nombre = inputNombre.value.trim();

  if (!nombre) {
    alert("Escribe un nombre.");
    return;
  }

  mostrarResultados(nombre);
});


/* =========================================
   ENTER PARA GENERAR
========================================= */

inputNombre.addEventListener("keydown", (e) => {

  if (e.key === "Enter") {
    btnGenerar.click();
  }

});


/* =========================================
   NAVEGACIÓN
========================================= */

btnInicio.addEventListener("click", mostrarInicio);

freefireBtn.addEventListener("click", mostrarFreeFire);

abrirFavoritos.addEventListener("click", alternarFavoritos);


/* =========================================
   INICIO
========================================= */

mostrarInicio();
actualizarContadorFavoritos();

// Prepara estadísticas en segundo plano cuando el navegador queda libre.
// Si el usuario entra antes a una categoría, esa vista inicia la misma precarga.
function prepararRankingEnSegundoPlano() {
  if (typeof iniciarPrecargaRankingCategorias === "function") {
    iniciarPrecargaRankingCategorias();
  }
}

if ("requestIdleCallback" in window) {
  window.requestIdleCallback(prepararRankingEnSegundoPlano, { timeout: 1800 });
} else {
  setTimeout(prepararRankingEnSegundoPlano, 900);
}
