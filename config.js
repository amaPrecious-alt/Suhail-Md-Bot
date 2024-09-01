const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349053304445";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_00_44_09_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDI1LFxuICAgICAgICAyNCxcbiAgICAgICAgMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE5LFxuICAgICAgICA2NyxcbiAgICAgICAgMjE4LFxuICAgICAgICA1MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTEwLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjEyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NyxcbiAgICAgICAgOTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxODUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI4LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDM1LFxuICAgICAgICAxNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM2LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTgxLFxuICAgICAgICA5OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTYyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDcwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDM5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzksXG4gICAgICAgIDM5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExMCxcbiAgICAgICAgODIsXG4gICAgICAgIDk2LFxuICAgICAgICA0MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTksXG4gICAgICAgIDI5LFxuICAgICAgICA0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDc5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDc4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOCxcbiAgICAgICAgMjIxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM1LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTEyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTksXG4gICAgICAgIDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDU3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDU2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTMyLFxuICAgICAgICA3NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDM1LFxuICAgICAgICA5OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM5LFxuICAgICAgICA2MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDgsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODUsXG4gICAgICAgIDcxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQxLFxuICBcImFkdlNlY3JldEtleVwiOiBcImNqTVlaTDR2OWlINk1qaUxnZVgweFpmeDF6bUpkQjg5Q0hBa1pFL2pjSmM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImJyTk1Oc05lUURlY2hLN3VsWUR1WndcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDg3ZGZlODQtNDhmZC00YWUzLTg3MTgtZGMxZTkzNGQ1OTMwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NyxcbiAgICAgIDE1LFxuICAgICAgODAsXG4gICAgICAxNTIsXG4gICAgICA0NyxcbiAgICAgIDIxMCxcbiAgICAgIDE1NyxcbiAgICAgIDczLFxuICAgICAgMjAsXG4gICAgICA3NyxcbiAgICAgIDE1OSxcbiAgICAgIDc3LFxuICAgICAgMixcbiAgICAgIDIzNSxcbiAgICAgIDE2OSxcbiAgICAgIDIwMCxcbiAgICAgIDI1NSxcbiAgICAgIDIxNixcbiAgICAgIDE5MixcbiAgICAgIDI0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NyxcbiAgICAgIDE2MSxcbiAgICAgIDUsXG4gICAgICAxNTAsXG4gICAgICAxNjcsXG4gICAgICAxNzEsXG4gICAgICAxMzYsXG4gICAgICA5MCxcbiAgICAgIDkwLFxuICAgICAgMjI2LFxuICAgICAgOTYsXG4gICAgICAyMTEsXG4gICAgICAxNDgsXG4gICAgICA0NCxcbiAgICAgIDM1LFxuICAgICAgMjM0LFxuICAgICAgMTQxLFxuICAgICAgMTUzLFxuICAgICAgMjUxLFxuICAgICAgNjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWlJTNzU3OFFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNTMzMDQ0NDU6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjczMDE0NjI4NjAxODY3OjExQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05meDFxNEhFT0x4enJZR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiN1lRL2tKeS9qRzhKL2Q2c3lBWnNDd3RIYkZnbHFSYVk2UlJ2WFAzc1pqMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJQbVZZQ0xWMHc3eFFrWDdRVzVuT05GRkdJOFpoTGRHWTlTc0hNUnp5TmRlMXVKWW82VWRVSG9BZ3Jwc0NJWUY5TVVGK21BSnJsWFRZL2llV05IeUNEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ4WmdDRFpZZkJPemtDSVBOL0RaWXJxRm9mdDlQTFVPTWtZLzVvbkozdENrWjQwenU0RWp1c3VOUTgxUjN5TEZIUkNOQjlQYWM5NXQ1L1hCak9NcllBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDUzMzA0NDQ1OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNTE1MTQ2MlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
