/* === supabase.js === */
const SUPABASE_URL = "https://ddciapfllcnlkzupekgd.supabase.co";
const SUPABASE_KEY = "sb_publishable_bJAxN_efhfh-H7tB1e3vzg_xnOtt4Bc";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

/* === fonts.js === */
window.fuentes = [

{
    nombre: "Mathematical Bold",
    abc: {
        A:"𝐀",B:"𝐁",C:"𝐂",D:"𝐃",E:"𝐄",F:"𝐅",G:"𝐆",H:"𝐇",I:"𝐈",J:"𝐉",K:"𝐊",L:"𝐋",M:"𝐌",
        N:"𝐍",O:"𝐎",P:"𝐏",Q:"𝐐",R:"𝐑",S:"𝐒",T:"𝐓",U:"𝐔",V:"𝐕",W:"𝐖",X:"𝐗",Y:"𝐘",Z:"𝐙",
        a:"𝐚",b:"𝐛",c:"𝐜",d:"𝐝",e:"𝐞",f:"𝐟",g:"𝐠",h:"𝐡",i:"𝐢",j:"𝐣",k:"𝐤",l:"𝐥",m:"𝐦",
        n:"𝐧",o:"𝐨",p:"𝐩",q:"𝐪",r:"𝐫",s:"𝐬",t:"𝐭",u:"𝐮",v:"𝐯",w:"𝐰",x:"𝐱",y:"𝐲",z:"𝐳"
    }
},

{
    nombre: "Double Struck",
    abc: {
        A:"𝔸",B:"𝔹",C:"ℂ",D:"𝔻",E:"𝔼",F:"𝔽",G:"𝔾",H:"ℍ",I:"𝕀",J:"𝕁",K:"𝕂",L:"𝕃",M:"𝕄",
        N:"ℕ",O:"𝕆",P:"ℙ",Q:"ℚ",R:"ℝ",S:"𝕊",T:"𝕋",U:"𝕌",V:"𝕍",W:"𝕎",X:"𝕏",Y:"𝕐",Z:"ℤ",
        a:"𝕒",b:"𝕓",c:"𝕔",d:"𝕕",e:"𝕖",f:"𝕗",g:"𝕘",h:"𝕙",i:"𝕚",j:"𝕛",k:"𝕜",l:"𝕝",m:"𝕞",
        n:"𝕟",o:"𝕠",p:"𝕡",q:"𝕢",r:"𝕣",s:"𝕤",t:"𝕥",u:"𝕦",v:"𝕧",w:"𝕨",x:"𝕩",y:"𝕪",z:"𝕫"
    }
},

{
    nombre: "Italic",
    abc: {
        A:"𝐴",B:"𝐵",C:"𝐶",D:"𝐷",E:"𝐸",F:"𝐹",G:"𝐺",H:"𝐻",I:"𝐼",J:"𝐽",K:"𝐾",L:"𝐿",M:"𝑀",
        N:"𝑁",O:"𝑂",P:"𝑃",Q:"𝑄",R:"𝑅",S:"𝑆",T:"𝑇",U:"𝑈",V:"𝑉",W:"𝑊",X:"𝑋",Y:"𝑌",Z:"𝑍",
        a:"𝑎",b:"𝑏",c:"𝑐",d:"𝑑",e:"𝑒",f:"𝑓",g:"𝑔",h:"ℎ",i:"𝑖",j:"𝑗",k:"𝑘",l:"𝑙",m:"𝑚",
        n:"𝑛",o:"𝑜",p:"𝑝",q:"𝑞",r:"𝑟",s:"𝑠",t:"𝑡",u:"𝑢",v:"𝑣",w:"𝑤",x:"𝑥",y:"𝑦",z:"𝑧"
    }
},

{
    nombre: "Bold Italic",
    abc: {
        A:"𝑨",B:"𝑩",C:"𝑪",D:"𝑫",E:"𝑬",F:"𝑭",G:"𝑮",H:"𝑯",I:"𝑰",J:"𝑱",K:"𝑲",L:"𝑳",M:"𝑴",
        N:"𝑵",O:"𝑶",P:"𝑷",Q:"𝑸",R:"𝑹",S:"𝑺",T:"𝑻",U:"𝑼",V:"𝑽",W:"𝑾",X:"𝑿",Y:"𝒀",Z:"𝒁",
        a:"𝒂",b:"𝒃",c:"𝒄",d:"𝒅",e:"𝒆",f:"𝒇",g:"𝒈",h:"𝒉",i:"𝒊",j:"𝒋",k:"𝒌",l:"𝒍",m:"𝒎",
        n:"𝒏",o:"𝒐",p:"𝒑",q:"𝒒",r:"𝒓",s:"𝒔",t:"𝒕",u:"𝒖",v:"𝒗",w:"𝒘",x:"𝒙",y:"𝒚",z:"𝒛"
    }
},

{
    nombre: "Monospace",
    abc: {
        A:"𝙰",B:"𝙱",C:"𝙲",D:"𝙳",E:"𝙴",F:"𝙵",G:"𝙶",H:"𝙷",I:"𝙸",J:"𝙹",K:"𝙺",L:"𝙻",M:"𝙼",
        N:"𝙽",O:"𝙾",P:"𝙿",Q:"𝚀",R:"𝚁",S:"𝚂",T:"𝚃",U:"𝚄",V:"𝚅",W:"𝚆",X:"𝚇",Y:"𝚈",Z:"𝚉",
        a:"𝚊",b:"𝚋",c:"𝚌",d:"𝚍",e:"𝚎",f:"𝚏",g:"𝚐",h:"𝚑",i:"𝚒",j:"𝚓",k:"𝚔",l:"𝚕",m:"𝚖",
        n:"𝚗",o:"𝚘",p:"𝚙",q:"𝚚",r:"𝚛",s:"𝚜",t:"𝚝",u:"𝚞",v:"𝚟",w:"𝚠",x:"𝚡",y:"𝚢",z:"𝚣"
    }
}

,
{
    nombre: "Fullwidth",
    abc: {
        A:"Ａ",B:"Ｂ",C:"Ｃ",D:"Ｄ",E:"Ｅ",F:"Ｆ",G:"Ｇ",H:"Ｈ",I:"Ｉ",J:"Ｊ",K:"Ｋ",L:"Ｌ",M:"Ｍ",
        N:"Ｎ",O:"Ｏ",P:"Ｐ",Q:"Ｑ",R:"Ｒ",S:"Ｓ",T:"Ｔ",U:"Ｕ",V:"Ｖ",W:"Ｗ",X:"Ｘ",Y:"Ｙ",Z:"Ｚ",
        a:"ａ",b:"ｂ",c:"ｃ",d:"ｄ",e:"ｅ",f:"ｆ",g:"ｇ",h:"ｈ",i:"ｉ",j:"ｊ",k:"ｋ",l:"ｌ",m:"ｍ",
        n:"ｎ",o:"ｏ",p:"ｐ",q:"ｑ",r:"ｒ",s:"ｓ",t:"ｔ",u:"ｕ",v:"ｖ",w:"ｗ",x:"ｘ",y:"ｙ",z:"ｚ"
    }
},
{
    nombre: "Circled",
    abc: {
        A:"Ⓐ",B:"Ⓑ",C:"Ⓒ",D:"Ⓓ",E:"Ⓔ",F:"Ⓕ",G:"Ⓖ",H:"Ⓗ",I:"Ⓘ",J:"Ⓙ",K:"Ⓚ",L:"Ⓛ",M:"Ⓜ",
        N:"Ⓝ",O:"Ⓞ",P:"Ⓟ",Q:"Ⓠ",R:"Ⓡ",S:"Ⓢ",T:"Ⓣ",U:"Ⓤ",V:"Ⓥ",W:"Ⓦ",X:"Ⓧ",Y:"Ⓨ",Z:"Ⓩ",
        a:"ⓐ",b:"ⓑ",c:"ⓒ",d:"ⓓ",e:"ⓔ",f:"ⓕ",g:"ⓖ",h:"ⓗ",i:"ⓘ",j:"ⓙ",k:"ⓚ",l:"ⓛ",m:"ⓜ",
        n:"ⓝ",o:"ⓞ",p:"ⓟ",q:"ⓠ",r:"ⓡ",s:"ⓢ",t:"ⓣ",u:"ⓤ",v:"ⓥ",w:"ⓦ",x:"ⓧ",y:"ⓨ",z:"ⓩ"
    }
},
{
    nombre: "Squared",
    abc: {
        A:"🄰",B:"🄱",C:"🄲",D:"🄳",E:"🄴",F:"🄵",G:"🄶",H:"🄷",I:"🄸",J:"🄹",K:"🄺",L:"🄻",M:"🄼",
        N:"🄽",O:"🄾",P:"🄿",Q:"🅀",R:"🅁",S:"🅂",T:"🅃",U:"🅄",V:"🅅",W:"🅆",X:"🅇",Y:"🅈",Z:"🅉",
        a:"🄰",b:"🄱",c:"🄲",d:"🄳",e:"🄴",f:"🄵",g:"🄶",h:"🄷",i:"🄸",j:"🄹",k:"🄺",l:"🄻",m:"🄼",
        n:"🄽",o:"🄾",p:"🄿",q:"🅀",r:"🅁",s:"🅂",t:"🅃",u:"🅄",v:"🅅",w:"🅆",x:"🅇",y:"🅈",z:"🅉"
    }
},
{
    nombre: "Script",
    abc: {
        A:"𝓐",B:"𝓑",C:"𝓒",D:"𝓓",E:"𝓔",F:"𝓕",G:"𝓖",H:"𝓗",I:"𝓘",J:"𝓙",K:"𝓚",L:"𝓛",M:"𝓜",
        N:"𝓝",O:"𝓞",P:"𝓟",Q:"𝓠",R:"𝓡",S:"𝓢",T:"𝓣",U:"𝓤",V:"𝓥",W:"𝓦",X:"𝓧",Y:"𝓨",Z:"𝓩",
        a:"𝓪",b:"𝓫",c:"𝓬",d:"𝓭",e:"𝓮",f:"𝓯",g:"𝓰",h:"𝓱",i:"𝓲",j:"𝓳",k:"𝓴",l:"𝓵",m:"𝓶",
        n:"𝓷",o:"𝓸",p:"𝓹",q:"𝓺",r:"𝓻",s:"𝓼",t:"𝓽",u:"𝓾",v:"𝓿",w:"𝔀",x:"𝔁",y:"𝔂",z:"𝔃"
    }
},
{
    nombre: "Bold Fraktur",
    abc: {
        A:"𝕬",B:"𝕭",C:"𝕮",D:"𝕯",E:"𝕰",F:"𝕱",G:"𝕲",H:"𝕳",I:"𝕴",J:"𝕵",K:"𝕶",L:"𝕷",M:"𝕸",
        N:"𝕹",O:"𝕺",P:"𝕻",Q:"𝕼",R:"𝕽",S:"𝕾",T:"𝕿",U:"𝖀",V:"𝖁",W:"𝖂",X:"𝖃",Y:"𝖄",Z:"𝖅",
        a:"𝖆",b:"𝖇",c:"𝖈",d:"𝖉",e:"𝖊",f:"𝖋",g:"𝖌",h:"𝖍",i:"𝖎",j:"𝖏",k:"𝖐",l:"𝖑",m:"𝖒",
        n:"𝖓",o:"𝖔",p:"𝖕",q:"𝖖",r:"𝖗",s:"𝖘",t:"𝖙",u:"𝖚",v:"𝖛",w:"𝖜",x:"𝖝",y:"𝖞",z:"𝖟"
    }
}

,
{
    nombre: "Sans Bold",
    abc: {
        A:"𝗔",B:"𝗕",C:"𝗖",D:"𝗗",E:"𝗘",F:"𝗙",G:"𝗚",H:"𝗛",I:"𝗜",J:"𝗝",K:"𝗞",L:"𝗟",M:"𝗠",
        N:"𝗡",O:"𝗢",P:"𝗣",Q:"𝗤",R:"𝗥",S:"𝗦",T:"𝗧",U:"𝗨",V:"𝗩",W:"𝗪",X:"𝗫",Y:"𝗬",Z:"𝗭",
        a:"𝗮",b:"𝗯",c:"𝗰",d:"𝗱",e:"𝗲",f:"𝗳",g:"𝗴",h:"𝗵",i:"𝗶",j:"𝗷",k:"𝗸",l:"𝗹",m:"𝗺",
        n:"𝗻",o:"𝗼",p:"𝗽",q:"𝗾",r:"𝗿",s:"𝘀",t:"𝘁",u:"𝘂",v:"𝘃",w:"𝘄",x:"𝘅",y:"𝘆",z:"𝘇"
    }
},
{
    nombre: "Sans Italic",
    abc: {
        A:"𝘈",B:"𝘉",C:"𝘊",D:"𝘋",E:"𝘌",F:"𝘍",G:"𝘎",H:"𝘏",I:"𝘐",J:"𝘑",K:"𝘒",L:"𝘓",M:"𝘔",
        N:"𝘕",O:"𝘖",P:"𝘗",Q:"𝘘",R:"𝘙",S:"𝘚",T:"𝘛",U:"𝘜",V:"𝘝",W:"𝘞",X:"𝘟",Y:"𝘠",Z:"𝘡",
        a:"𝘢",b:"𝘣",c:"𝘤",d:"𝘥",e:"𝘦",f:"𝘧",g:"𝘨",h:"𝘩",i:"𝘪",j:"𝘫",k:"𝘬",l:"𝘭",m:"𝘮",
        n:"𝘯",o:"𝘰",p:"𝘱",q:"𝘲",r:"𝘳",s:"𝘴",t:"𝘵",u:"𝘶",v:"𝘷",w:"𝘸",x:"𝘹",y:"𝘺",z:"𝘻"
    }
},
{
    nombre: "Sans Bold Italic",
    abc: {
        A:"𝘼",B:"𝘽",C:"𝘾",D:"𝘿",E:"𝙀",F:"𝙁",G:"𝙂",H:"𝙃",I:"𝙄",J:"𝙅",K:"𝙆",L:"𝙇",M:"𝙈",
        N:"𝙉",O:"𝙊",P:"𝙋",Q:"𝙌",R:"𝙍",S:"𝙎",T:"𝙏",U:"𝙐",V:"𝙑",W:"𝙒",X:"𝙓",Y:"𝙔",Z:"𝙕",
        a:"𝙖",b:"𝙗",c:"𝙘",d:"𝙙",e:"𝙚",f:"𝙛",g:"𝙜",h:"𝙝",i:"𝙞",j:"𝙟",k:"𝙠",l:"𝙡",m:"𝙢",
        n:"𝙣",o:"𝙤",p:"𝙥",q:"𝙦",r:"𝙧",s:"𝙨",t:"𝙩",u:"𝙪",v:"𝙫",w:"𝙬",x:"𝙭",y:"𝙮",z:"𝙯"
    }
},
{
    nombre: "Fraktur",
    abc: {
        A:"𝔄",B:"𝔅",C:"ℭ",D:"𝔇",E:"𝔈",F:"𝔉",G:"𝔊",H:"ℌ",I:"ℑ",J:"𝔍",K:"𝔎",L:"𝔏",M:"𝔐",
        N:"𝔑",O:"𝔒",P:"𝔓",Q:"𝔔",R:"ℜ",S:"𝔖",T:"𝔗",U:"𝔘",V:"𝔙",W:"𝔚",X:"𝔛",Y:"𝔜",Z:"ℨ",
        a:"𝔞",b:"𝔟",c:"𝔠",d:"𝔡",e:"𝔢",f:"𝔣",g:"𝔤",h:"𝔥",i:"𝔦",j:"𝔧",k:"𝔨",l:"𝔩",m:"𝔪",
        n:"𝔫",o:"𝔬",p:"𝔭",q:"𝔮",r:"𝔯",s:"𝔰",t:"𝔱",u:"𝔲",v:"𝔳",w:"𝔴",x:"𝔵",y:"𝔶",z:"𝔷"
    }
},
{
    nombre: "Sans Serif",
    abc: {
        A:"𝖠",B:"𝖡",C:"𝖢",D:"𝖣",E:"𝖤",F:"𝖥",G:"𝖦",H:"𝖧",I:"𝖨",J:"𝖩",K:"𝖪",L:"𝖫",M:"𝖬",
        N:"𝖭",O:"𝖮",P:"𝖯",Q:"𝖰",R:"𝖱",S:"𝖲",T:"𝖳",U:"𝖴",V:"𝖵",W:"𝖶",X:"𝖷",Y:"𝖸",Z:"𝖹",
        a:"𝖺",b:"𝖻",c:"𝖼",d:"𝖽",e:"𝖾",f:"𝖿",g:"𝗀",h:"𝗁",i:"𝗂",j:"𝗃",k:"𝗄",l:"𝗅",m:"𝗆",
        n:"𝗇",o:"𝗈",p:"𝗉",q:"𝗊",r:"𝗋",s:"𝗌",t:"𝗍",u:"𝗎",v:"𝗏",w:"𝗐",x:"𝗑",y:"𝗒",z:"𝗓"
    }
}

,
{
    nombre: "Script Bold",
    abc: {
        A:"𝓐",B:"𝓑",C:"𝓒",D:"𝓓",E:"𝓔",F:"𝓕",G:"𝓖",H:"𝓗",I:"𝓘",J:"𝓙",K:"𝓚",L:"𝓛",M:"𝓜",
        N:"𝓝",O:"𝓞",P:"𝓟",Q:"𝓠",R:"𝓡",S:"𝓢",T:"𝓣",U:"𝓤",V:"𝓥",W:"𝓦",X:"𝓧",Y:"𝓨",Z:"𝓩",
        a:"𝓪",b:"𝓫",c:"𝓬",d:"𝓭",e:"𝓮",f:"𝓯",g:"𝓰",h:"𝓱",i:"𝓲",j:"𝓳",k:"𝓴",l:"𝓵",m:"𝓶",
        n:"𝓷",o:"𝓸",p:"𝓹",q:"𝓺",r:"𝓻",s:"𝓼",t:"𝓽",u:"𝓾",v:"𝓿",w:"𝔀",x:"𝔁",y:"𝔂",z:"𝔃"
    }
},
{
    nombre: "Blackboard",
    abc: {
        A:"𝔸",B:"𝔹",C:"ℂ",D:"𝔻",E:"𝔼",F:"𝔽",G:"𝔾",H:"ℍ",I:"𝕀",J:"𝕁",K:"𝕂",L:"𝕃",M:"𝕄",
        N:"ℕ",O:"𝕆",P:"ℙ",Q:"ℚ",R:"ℝ",S:"𝕊",T:"𝕋",U:"𝕌",V:"𝕍",W:"𝕎",X:"𝕏",Y:"𝕐",Z:"ℤ",
        a:"𝕒",b:"𝕓",c:"𝕔",d:"𝕕",e:"𝕖",f:"𝕗",g:"𝕘",h:"𝕙",i:"𝕚",j:"𝕛",k:"𝕜",l:"𝕝",m:"𝕞",
        n:"𝕟",o:"𝕠",p:"𝕡",q:"𝕢",r:"𝕣",s:"𝕤",t:"𝕥",u:"𝕦",v:"𝕧",w:"𝕨",x:"𝕩",y:"𝕪",z:"𝕫"
    }
},
{
    nombre: "Tiny Caps",
    abc: {
        A:"ᴀ",B:"ʙ",C:"ᴄ",D:"ᴅ",E:"ᴇ",F:"ғ",G:"ɢ",H:"ʜ",I:"ɪ",J:"ᴊ",K:"ᴋ",L:"ʟ",M:"ᴍ",
        N:"ɴ",O:"ᴏ",P:"ᴘ",Q:"ǫ",R:"ʀ",S:"s",T:"ᴛ",U:"ᴜ",V:"ᴠ",W:"ᴡ",X:"x",Y:"ʏ",Z:"ᴢ",
        a:"ᴀ",b:"ʙ",c:"ᴄ",d:"ᴅ",e:"ᴇ",f:"ғ",g:"ɢ",h:"ʜ",i:"ɪ",j:"ᴊ",k:"ᴋ",l:"ʟ",m:"ᴍ",
        n:"ɴ",o:"ᴏ",p:"ᴘ",q:"ǫ",r:"ʀ",s:"s",t:"ᴛ",u:"ᴜ",v:"ᴠ",w:"ᴡ",x:"x",y:"ʏ",z:"ᴢ"
    }
},
{
    nombre: "Superscript",
    abc: {
        A:"ᴬ",B:"ᴮ",C:"ᶜ",D:"ᴰ",E:"ᴱ",F:"ᶠ",G:"ᴳ",H:"ᴴ",I:"ᴵ",J:"ᴶ",K:"ᴷ",L:"ᴸ",M:"ᴹ",
        N:"ᴺ",O:"ᴼ",P:"ᴾ",Q:"Q",R:"ᴿ",S:"ˢ",T:"ᵀ",U:"ᵁ",V:"ⱽ",W:"ᵂ",X:"ˣ",Y:"ʸ",Z:"ᶻ",
        a:"ᵃ",b:"ᵇ",c:"ᶜ",d:"ᵈ",e:"ᵉ",f:"ᶠ",g:"ᵍ",h:"ʰ",i:"ᶦ",j:"ʲ",k:"ᵏ",l:"ˡ",m:"ᵐ",
        n:"ⁿ",o:"ᵒ",p:"ᵖ",q:"q",r:"ʳ",s:"ˢ",t:"ᵗ",u:"ᵘ",v:"ᵛ",w:"ʷ",x:"ˣ",y:"ʸ",z:"ᶻ"
    }
},
{
    nombre: "Subscript",
    abc: {
        A:"A",B:"B",C:"C",D:"D",E:"E",F:"F",G:"G",H:"H",I:"I",J:"J",K:"K",L:"L",M:"M",
        N:"N",O:"O",P:"P",Q:"Q",R:"R",S:"S",T:"T",U:"U",V:"V",W:"W",X:"X",Y:"Y",Z:"Z",
        a:"ₐ",b:"b",c:"c",d:"d",e:"ₑ",f:"f",g:"g",h:"ₕ",i:"ᵢ",j:"ⱼ",k:"ₖ",l:"ₗ",m:"ₘ",
        n:"ₙ",o:"ₒ",p:"ₚ",q:"q",r:"ᵣ",s:"ₛ",t:"ₜ",u:"ᵤ",v:"ᵥ",w:"w",x:"ₓ",y:"y",z:"z"
    }
}

,
{
    nombre: "Strike",
    abc: {
        A:"A̶",B:"B̶",C:"C̶",D:"D̶",E:"E̶",F:"F̶",G:"G̶",H:"H̶",I:"I̶",J:"J̶",K:"K̶",L:"L̶",M:"M̶",
        N:"N̶",O:"O̶",P:"P̶",Q:"Q̶",R:"R̶",S:"S̶",T:"T̶",U:"U̶",V:"V̶",W:"W̶",X:"X̶",Y:"Y̶",Z:"Z̶",
        a:"a̶",b:"b̶",c:"c̶",d:"d̶",e:"e̶",f:"f̶",g:"g̶",h:"h̶",i:"i̶",j:"j̶",k:"k̶",l:"l̶",m:"m̶",
        n:"n̶",o:"o̶",p:"p̶",q:"q̶",r:"r̶",s:"s̶",t:"t̶",u:"u̶",v:"v̶",w:"w̶",x:"x̶",y:"y̶",z:"z̶"
    }
},
{
    nombre: "Underline",
    abc: {
        A:"A̲",B:"B̲",C:"C̲",D:"D̲",E:"E̲",F:"F̲",G:"G̲",H:"H̲",I:"I̲",J:"J̲",K:"K̲",L:"L̲",M:"M̲",
        N:"N̲",O:"O̲",P:"P̲",Q:"Q̲",R:"R̲",S:"S̲",T:"T̲",U:"U̲",V:"V̲",W:"W̲",X:"X̲",Y:"Y̲",Z:"Z̲",
        a:"a̲",b:"b̲",c:"c̲",d:"d̲",e:"e̲",f:"f̲",g:"g̲",h:"h̲",i:"i̲",j:"j̲",k:"k̲",l:"l̲",m:"m̲",
        n:"n̲",o:"o̲",p:"p̲",q:"q̲",r:"r̲",s:"s̲",t:"t̲",u:"u̲",v:"v̲",w:"w̲",x:"x̲",y:"y̲",z:"z̲"
    }
},
{
    nombre: "Overline",
    abc: {
        A:"A̅",B:"B̅",C:"C̅",D:"D̅",E:"E̅",F:"F̅",G:"G̅",H:"H̅",I:"I̅",J:"J̅",K:"K̅",L:"L̅",M:"M̅",
        N:"N̅",O:"O̅",P:"P̅",Q:"Q̅",R:"R̅",S:"S̅",T:"T̅",U:"U̅",V:"V̅",W:"W̅",X:"X̅",Y:"Y̅",Z:"Z̅",
        a:"a̅",b:"b̅",c:"c̅",d:"d̅",e:"e̅",f:"f̅",g:"g̅",h:"h̅",i:"i̅",j:"j̅",k:"k̅",l:"l̅",m:"m̅",
        n:"n̅",o:"o̅",p:"p̅",q:"q̅",r:"r̅",s:"s̅",t:"t̅",u:"u̅",v:"v̅",w:"w̅",x:"x̅",y:"y̅",z:"z̅"
    }
},
{
    nombre: "Double Underline",
    abc: {
        A:"A̳",B:"B̳",C:"C̳",D:"D̳",E:"E̳",F:"F̳",G:"G̳",H:"H̳",I:"I̳",J:"J̳",K:"K̳",L:"L̳",M:"M̳",
        N:"N̳",O:"O̳",P:"P̳",Q:"Q̳",R:"R̳",S:"S̳",T:"T̳",U:"U̳",V:"V̳",W:"W̳",X:"X̳",Y:"Y̳",Z:"Z̳",
        a:"a̳",b:"b̳",c:"c̳",d:"d̳",e:"e̳",f:"f̳",g:"g̳",h:"h̳",i:"i̳",j:"j̳",k:"k̳",l:"l̳",m:"m̳",
        n:"n̳",o:"o̳",p:"p̳",q:"q̳",r:"r̳",s:"s̳",t:"t̳",u:"u̳",v:"v̳",w:"w̳",x:"x̳",y:"y̳",z:"z̳"
    }
},
{
    nombre: "Dotted",
    abc: {
        A:"Ȧ",B:"Ḃ",C:"Ċ",D:"Ḋ",E:"Ė",F:"Ḟ",G:"Ġ",H:"Ḣ",I:"İ",J:"J̇",K:"K̇",L:"L̇",M:"Ṁ",
        N:"Ṅ",O:"Ȯ",P:"Ṗ",Q:"Q̇",R:"Ṙ",S:"Ṡ",T:"Ṫ",U:"U̇",V:"V̇",W:"Ẇ",X:"Ẋ",Y:"Ẏ",Z:"Ż",
        a:"ȧ",b:"ḃ",c:"ċ",d:"ḋ",e:"ė",f:"ḟ",g:"ġ",h:"ḣ",i:"i̇",j:"j̇",k:"k̇",l:"l̇",m:"ṁ",
        n:"ṅ",o:"ȯ",p:"ṗ",q:"q̇",r:"ṙ",s:"ṡ",t:"ṫ",u:"u̇",v:"v̇",w:"ẇ",x:"ẋ",y:"ẏ",z:"ż"
    }
}



];

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
  ],

  oscuro: [
    "╰‿╯ㅤϟＴＥＲＲＯＲ†",
    "༄ᶦᶰᵈ᭄✿ᴮᴬᴰʙᴏʏツ",
    "亗 𝚁 𝙾 𝙻 𝙴 𝚇  ☯︎",
    "༄●⃝ᶫᵒꪜe☯ᴮᴼᵞ࿐",
    "꧁༒Ǥ₳₦ǤֆƬᏋЯ༒꧂",
    "ᴰᵃʳᵏ✯ℓoνεяﮩ٨ـﮩﮩ٨ـ♥⃝🖤",
    "☯ƤℜɆĐ₳₮Øℜ☯",
    "ঔৣ✞𝕯𝖆𝖗𝖐✞™❦",
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
      ${esFavorito(item.texto) ? "❤️ Favorito" : "⭐ Favorito"}
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
        }
      } else {
        const correcto = await registrarFavorito(item.texto);
        if (correcto) {
          agregarFavorito(item.texto);
          botonFavorito.textContent = "❤️ Favorito";
          aplicarEstadoBotonFavorito(botonFavorito, true);
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


function mostrarInicio() {

  const siteFooter = document.getElementById("siteFooter");

  if (siteFooter) {
    siteFooter.style.display = "flex";
  }


  const infoHome = document.getElementById("infoHome");

  if (infoHome) {
    infoHome.style.display = "block";
  }


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
}


function crearTarjetaCategoria(nombre) {

  return `
    <div
      class="itemInvisible tarjetaCategoria tarjetaCopiable"
      data-nombre="${nombre}"
    >

      <button
        class="favoriteInvisible"
        data-text="${nombre}"
        type="button"
      >
        ${esFavorito(nombre) ? "❤️ Favorito" : "⭐ Favorito"}
      </button>

      <div class="nombreCategoria">
        ${nombre}
      </div>

      <div class="estadisticasNombre">

        <span class="copiasNombre">
          📋 0
        </span>

        <span class="favoritosNombre">
          ❤️ 0
        </span>

      </div>

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


  const estilos =
    generarEstilos(nombre);


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


      actualizarEstadisticaResultado(
        item.texto
      );
    }
  );
}


function renderCategoria(tituloCategoria, nombres) {

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
        ${nombres
          .map(
            (nombre) =>
              crearTarjetaCategoria(nombre)
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
              ".favoriteInvisible"
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

            const correcto =
              await copiarTarjetaInteractiva(
                tarjeta,
                nombre
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
              }

            } else {

              const correcto =
                await registrarFavorito(
                  nombre
                );


              if (correcto) {

                agregarFavorito(nombre);


                boton.textContent =
                  "❤️ Favorito";


                aplicarEstadoBotonFavorito(
                  boton,
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
      <div class="pantallaJuego">

        <p class="favorites-empty">
          Todavía no tienes favoritos guardados.
        </p>

      </div>
    `;


    panelFavoritos.style.display =
      "block";


    return;
  }


  panelFavoritos.innerHTML = `
    <div class="pantallaJuego">

      <h2 class="tituloJuego">
        ⭐ Favoritos
      </h2>

      <div class="listaInvisible">

        ${guardados
          .map(
            (nombre) => `
              <div class="itemInvisible">

                <span>
                  ${nombre}
                </span>

                <div class="itemActions">

                  <button
                    class="copyFav"
                    data-text="${nombre}"
                    type="button"
                  >
                    📋 Copiar
                  </button>

                  <button
                    class="deleteFav"
                    data-text="${nombre}"
                    type="button"
                  >
                    🗑️ Quitar
                  </button>

                </div>

              </div>
            `
          )
          .join("")}

      </div>

    </div>
  `;


  panelFavoritos.style.display =
    "block";


  panelFavoritos
    .querySelectorAll(".copyFav")
    .forEach((boton) => {

      renderCopiarTexto(
        boton,
        boton.dataset.text
      );
    });


  panelFavoritos
    .querySelectorAll(".deleteFav")
    .forEach((boton) => {

      boton.addEventListener(
        "click",
        async () => {

          const nombre =
            boton.dataset.text;


          const correcto =
            await decrementarFavorito(
              nombre
            );


          if (!correcto) return;


          eliminarFavorito(nombre);

          actualizarContadorFavoritos();

          renderFavoritos();
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

      <h2 class="tituloJuego">🔥 Free Fire</h2>

      <div class="menu-juego">

        <!-- OSCURO -->
        <div class="modo-card">
          <h3>☠️ Oscuro</h3>

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
          <h3>💞 Parejas</h3>

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
          <h3>👑 Pro Player</h3>

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
          <h3>👻 Invisible</h3>

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
      "☠️ Oscuro",
      obtenerOrdenCategoria("oscuro")
    );
  });


  // PAREJAS
  document.getElementById("btnParejas").addEventListener("click", () => {
    renderCategoria(
      "❤️ Parejas",
      obtenerOrdenCategoria("parejas")
    );
  });


  // PRO PLAYER
  document.getElementById("btnPro").addEventListener("click", () => {
    renderCategoria(
      "👑 Pro Player",
      obtenerOrdenCategoria("pro")
    );
  });


  // INVISIBLE
  document.getElementById("btnInvisible").addEventListener("click", () => {
    renderCategoria(
      "👻 Invisible",
      obtenerOrdenCategoria("invisible")
    );
  });
}



function mostrarFreeFire() {

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
