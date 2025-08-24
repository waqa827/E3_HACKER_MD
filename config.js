const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "E3_HACKER_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEp4dTV2TUNobWZMaWlDUE1ZUVJtZy85R0RTQ3YyZHJKQTE3Y096Z1kxVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEZpSVFKTTJjSWR1MXNoMkY5WThOUVkvbHBlR1M1d3UwKzNvbUFNdWR5MD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3RWw3NmNGdHYyOFEySDlpM25IQ01ZaS81elFuL1VqNjU0cE4xN2ZvQkZZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4aFNrUWZ6RGFGeE9pVi9MbG1tTHJCVEljNmg1cDlobjBYRmVBTFRQZkNzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndPTnVQSGFPc2puTURzeWFOaDZWa1ZTS2JhOStpUUU5aWl3K1Q3Y0JOM0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRoWmxQRE1aeVRhUkpRZmdKcmhRQ09PTGZpbGdHTkVrMy9rcnBIZXJmSG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0J4R3h3UU9hU1U5WHdZMUpVd1h0aThuK0N6Q0d3eUc4UWhWQlg0SnpFcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMXdvc0ZKRExZN3gyZ2trVlNFK2lGN0NyRDNBazBLN3NqdktLUGwvWUh3bz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdEVmlhVWthcWl6U3l4SVJqV2laSkZlYjdVMENyVHB4ZjdnTVh3ZitsUnczM2E0ZDBud0FiNXJrZ0N2ZndaVlFVN2FHTmMvRHB2cERFK2RQQ253VGpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzksImFkdlNlY3JldEtleSI6Im4rU3owKyt5K3VmZHJ6Nm5qcVN1N0NQN0E1MW9HWWhoQ2FSOFdBNWJlYmM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTE5NTc2MTcwNzc2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkYyMjBFNDVBMDdGRjg4N0I4NUIwRjdBODkyMjAxNjhEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTYwMjI2MDN9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkxOTU3NjE3MDc3NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyNzNFRDE2NTU1QzYwRjI5QTUwNTE0ODAxQkY3RkY5NSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2MDIyNjAzfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiIyNlFGV0dCMSIsIm1lIjp7ImlkIjoiOTE5NTc2MTcwNzc2OjVAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI1NDcxODM1MzE1ODM3Mzo1QGxpZCIsIm5hbWUiOiJTaGl2YW0ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09tT2xjTUVFTVdPcThVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImlKbGQ1LzFSVXQ0Y1ZzV3k2Qm9ncXVCVUZweFlWMExWVUpxd2xUeThBMVU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IllqWWw1UThPQTNRd3RWMjJ1dDR5WXNpY3o0eXIzbVBCMER5K0NuRjNYeWJWRlJTVno2YlU0MjkxVFZzVnB1YUxaWjduU3oySXJRbWxXdGwvMHJQbEJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJKUFpoVjVxSHBHRVhocThYbmh1NlFVYUJYSjN1SXNJSGh5a0FRMVpkNGMxQ1JMYXcrV25Sa0ZvUktvd1pEQ2lKb0poWFBKQXRvWjlqK1lZOFA2QXFqUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkxOTU3NjE3MDc3Njo1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllpWlhlZjlVVkxlSEZiRnN1Z2FJS3JnVkJhY1dGZEMxVkNhc0pVOHZBTlYifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NjAyMjYwMCwibGFzdFByb3BIYXNoIjoiQzRmSk4iLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUtLUCJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝙀3_𝙃𝘼𝘾𝙆𝙀𝙍_𝙈𝘿 ♥️☺️*",
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
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/p4yxcn.png",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "E3_HACKER_MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "𝙀3_𝙃𝘼𝘾𝙆𝙀𝙍_𝙈𝘿",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923495178663",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*E3_HACKER_MD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ E3_HACKER_MD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/p4yxcn.png",
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
