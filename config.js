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

  sessionName:process.env.SESSION_ID || "SUHAIL_23_32_08_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTgyLFxuICAgICAgICA4MixcbiAgICAgICAgNzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDYzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODgsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjcsXG4gICAgICAgIDU5LFxuICAgICAgICA2MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDksXG4gICAgICAgIDE3NCxcbiAgICAgICAgNyxcbiAgICAgICAgNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjExLFxuICAgICAgICA2NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAzNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzQsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDM3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjksXG4gICAgICAgIDYzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODgsXG4gICAgICAgIDI3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDk2LFxuICAgICAgICAxODYsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAzOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDksXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTksXG4gICAgICAgIDExNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTUwLFxuICAgICAgICA5NSxcbiAgICAgICAgOTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDcyLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjA3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjksXG4gICAgICAgIDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzUsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODIsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDUyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDcyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjUxLFxuICAgICAgICA0OCxcbiAgICAgICAgMixcbiAgICAgICAgMTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTYxLFxuICAgICAgICA3OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyLFxuICAgICAgICAzMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDksXG4gICAgICAgIDM4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjI3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjAyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkhrM08vK2JoVVpvVXdVcU1pRkJNYTNRNk5ZNjlxTFNvcFhraGVkSmFYNDg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImI3ZHR3ZW5OUUlTQzFXUWVGbTJqcGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTYyODQ1NGMtMTk5Yi00NmU0LWIxOTctNzU1Y2VhOTIwYWJhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NCxcbiAgICAgIDQsXG4gICAgICAxNDIsXG4gICAgICAxMTIsXG4gICAgICA0MyxcbiAgICAgIDIxLFxuICAgICAgMTQ2LFxuICAgICAgMjUyLFxuICAgICAgMTk1LFxuICAgICAgMTIzLFxuICAgICAgNDYsXG4gICAgICA4MCxcbiAgICAgIDE5NCxcbiAgICAgIDgsXG4gICAgICAxMSxcbiAgICAgIDgyLFxuICAgICAgMzAsXG4gICAgICAyNTMsXG4gICAgICA0OCxcbiAgICAgIDE5MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTksXG4gICAgICAxNSxcbiAgICAgIDk1LFxuICAgICAgOTEsXG4gICAgICAxLFxuICAgICAgMjM0LFxuICAgICAgMTc5LFxuICAgICAgNixcbiAgICAgIDE1NSxcbiAgICAgIDE0NCxcbiAgICAgIDIwOCxcbiAgICAgIDI0MixcbiAgICAgIDE2LFxuICAgICAgMzYsXG4gICAgICA3MixcbiAgICAgIDEzLFxuICAgICAgMjAxLFxuICAgICAgMTM5LFxuICAgICAgMTIsXG4gICAgICA1OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCTTNSUUY3WVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA1MzMwNDQ0NTo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3MzAxNDYyODYwMTg2Nzo5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05YeDFxNEhFSVhRenJZR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiN1lRL2tKeS9qRzhKL2Q2c3lBWnNDd3RIYkZnbHFSYVk2UlJ2WFAzc1pqMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJRb2ovcEVVeW9LQ2F5dEZOUzBpSUROK0d1YUI1bWVzUHpHYXYxTGVZbjdhNlZBc0Fvb1ZIQktjNVJiT0VjcmJlakI2N1pvVjExY0dlL2o5QjV3UmREUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJHdkh4Wk9qQlYyWU1xNHRydG5CK0RIYmVndzZyUUhER0k1VDcyenFlNlY5M0pTaG9yemxBeW1rOTdPL1llWit0TGlqVlZjT1pmempiODBsTWtvZDJpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDUzMzA0NDQ1OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI1MTQ3MTQ2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTGxqXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMbGouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJHSUpMU1B4VjcxWnVQdVhpVjlNdUNIenF1cUhBSGIzWDIzRncyaGNtTEUwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5NzY5NDA3NTYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ==",  // PUT SESSION ID HERE 
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
 
