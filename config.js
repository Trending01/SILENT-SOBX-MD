const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "SILENT-SOBX-MD~7JwhSSpJ#CL37LDTBpeiTqFEuixhNwDgdtwXEOSWNjL_Js4kJ4g4",
    CAPTION: process.env.CAPTION || "POWERED BY 𝔗𝔯𝔢𝔫𝔡𝔦𝔫𝔤 𝔅𝔬𝔰𝔰",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
    READ_MESSAGE: process.env.READ_MESSAGE || "false", // Added auto-read configuration
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "false",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/2a06381b260c3f096a612.jpg",
    ALIVE_MSG: process.env.ALIVE_MSG || "HII DEAR IM ONLINE I'M 𝔗𝔯𝔢𝔫𝔡𝔦𝔫𝔤 𝔅𝔬𝔰𝔰 WHATSAPP BOT 😊♻️",
    ANTI_LINK: process.env.ANTI_LINK || "false",
    ANTI_BAD: process.env.ANTI_BAD || "false",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
    FAKE_TYPING: process.env.FAKE_TYPING || "false",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
    AUTO_REACT: process.env.AUTO_REACT || "false",
    HEART_REACT: process.env.HEART_REACT || "false",
    OWNER_REACT: process.env.OWNER_REACT || "false",
    OWNER_NUMBER: process.env.OWNER_NUMBER || "233557560911",
    OWNER_NAME: process.env.OWNER_NAME || "➺𝔗𝔯𝔢𝔫𝔡𝔦𝔫𝔤 𝔅𝔬𝔰𝔰࿐",
    READ_CMD: process.env.READ_CMD || "true",
    BOT_NAME: process.env.BOT_NAME || "➺𝔗𝔯𝔢𝔫𝔡𝔦𝔫𝔤 𝔅𝔬𝔰𝔰࿐",
    STATUS_REPLY: process.env.STATUS_REPLY || "`➺үσυя sтαтυs sεεη נυsт ησω вү 𝔗𝔯𝔢𝔫𝔡𝔦𝔫𝔤 𝔅𝔬𝔰𝔰`",
    STATUS_REACT: process.env.STATUS_REACT || "false",
    ANTI_VV: process.env.ANTI_VV || "false",// true for anti once view 
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "same", // change it to 'log' if you want to resend deleted message in ib chat 
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
