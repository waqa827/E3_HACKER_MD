const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "E3_HACKER_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0ppaFJGNWkvUnA5TVNyV01aeTBiWHMvQjJOdVJDaFRZSjZCY2RTbWhHOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM00zVVhqa3FVUXFpRWdPSlJXUkY5bk9yZkhnTExRNjBsOG5jWWg0QTlYOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0SFQvdXVBNTZ1K0ZXSms2N1c4MUozbitUbHVPNzYzczNDazFKTmRWeG5zPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0YWFzZGU1QkVDeC8vRlZhM00zSGN2TmtsMUJKdmlKRExmb29XK1dWNVM4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNCRzBIMGZnK1hab3dxaEdSY1JSM2J3cG1vb09BYnlETFYvdTdkWWxOblk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRuK0JUYjBrWXJOUEpqNGNwWS9XL3BKY0kvbEp5WTEyVnNsaW5DVzgxeEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0lGTXkyelAxQnRhay9hMDUxUFdrOUl2V0RPeWxBQktDeVFEQ3JRVVQxWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNmw2eWJncDJlZEZMZ0ZEYjNBaXhwYVNHY1JCU2FJMVk2NnRxKzROLzFYQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFmZUNnUDd3QUdtMm14Z0RmZktDazZMQldxUGxaQ0RIbXhvejNRM3Z4R1hxNGpCRk16KysyM0hkSTVmdDRwUjZZblRFS0tEKzRVc01DaGVXcDBQdEN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzgsImFkdlNlY3JldEtleSI6IkVVVURBeXA0eWZZKzdjbC8vZWJvTHVneWxIOHd3R3pSTnNDdm5wRFROdzg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMDI3NjgxOTcwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjI2REEwOTc1M0I0NUI1RTdGRTBBMEE2ODMyMjMzQzRGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTYxMjM5Nzd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjhNMUhCTVFXIiwibWUiOnsiaWQiOiI5MjMwMjc2ODE5NzA6NTBAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI4ODUxMTI5MDAxNTgzODo1MEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xiVW5xSUZFTUttc2NVR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik9jVmVab2FqZVFaYUM5S0hEdWZ5U2RXVWVNS3V6RGJZUitpL1lyRHQrQlU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjNiN29NOXNyaExHenZPN0IwN2Zua1FpRnBWdUdncWpLUkJWSWN1ZmJoelBrajZadXlHQzhHRi9MUDJGRWx1ZlJZZnU0S3kxSTg3WWNGMk5RcDA1dURRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJhVlJRQVhLaGhRVDVmS1VTWmRZc2VKbkxndkQ3WUprdFRlWHdTSWFqVTlRL0EvUWozV3I0cWx0eWl3OEt6OHQ5Y3gzSUZ6QXpMbG8rZUNLY0JXOHZBZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzAyNzY4MTk3MDo1MEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUbkZYbWFHbzNrR1dndlNodzduOGtuVmxIakNyc3cyMkVmb3YyS3c3ZmdWIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTYxMjM5NzMsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGcW0ifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY BILAL-KING-MD ♥️☺️*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://i.ibb.co/HT9rLxxc/shaban-md.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "BILAL-KING-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "BILAL-KING-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923027681970",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*BILAL-KING-MD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ BILAL-KING-MD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/HT9rLxxc/shaban-md.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Apni Had May Raho Batmeez Insan 🫣",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
