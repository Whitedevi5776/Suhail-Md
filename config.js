const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email="anonymous303ruby@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/whitedevi5776/Suhail-Md";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349137924240";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/e5dae53eb81af81b677f8.mp4" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_28_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTkzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjA0LFxuICAgICAgICA3NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTk1LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY5LFxuICAgICAgICA5OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjIyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjIzLFxuICAgICAgICAxODIsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTIsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTM3LFxuICAgICAgICA2OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTksXG4gICAgICAgIDkwLFxuICAgICAgICA2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgODAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDgsXG4gICAgICAgIDczLFxuICAgICAgICAxNDEsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDAsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNixcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDk3LFxuICAgICAgICA0MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODUsXG4gICAgICAgIDg4LFxuICAgICAgICA4NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTA1LFxuICAgICAgICA3OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTEyLFxuICAgICAgICA5MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDk3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTI1LFxuICAgICAgICA5NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTk4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQzLFxuICAgICAgICA5MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTUxLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTIzLFxuICAgICAgICA0LFxuICAgICAgICAxMDksXG4gICAgICAgIDQ4LFxuICAgICAgICA0MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4NixcbiAgICAgICAgMjU0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTEwLFxuICAgICAgICA1OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDksXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTAyLFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODQsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMSxcbiAgICAgICAgMjM2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDY5LFxuICAgICAgICA2MSxcbiAgICAgICAgMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjUxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjAyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc3LFxuICAgICAgICA2OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTk4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgODksXG4gICAgICAgIDIyLFxuICAgICAgICAzMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMixcbiAgICAgICAgMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTktqRlc2UnpkandPRWU5bWg2ZnRwbnFLenZWLzlQMzZRckZEbnVIL09aUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTM3OTI0MjQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyQzk4RTdBQTZEMTk4N0Q1OTEyNTg1NEVCMUU3OTI0NlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA2NDMzMDVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidnNxOTZlZ2NTS0tsTE03WlIwVy15d1wiLFxuICBcInBob25lSWRcIjogXCJlNzZhNDBmZC04YzEwLTRmMDItODIyYS0wMDU2ZTE0NmIxZmVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTUsXG4gICAgICAxNjEsXG4gICAgICAyMzYsXG4gICAgICAyNTUsXG4gICAgICAyNixcbiAgICAgIDAsXG4gICAgICAxNjIsXG4gICAgICAyMjYsXG4gICAgICAyMTUsXG4gICAgICAxMTYsXG4gICAgICAxMDQsXG4gICAgICA2NCxcbiAgICAgIDE3LFxuICAgICAgMTMyLFxuICAgICAgMjksXG4gICAgICAyMzIsXG4gICAgICAxNTUsXG4gICAgICAxOTQsXG4gICAgICA5NCxcbiAgICAgIDExNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDMsXG4gICAgICAzMixcbiAgICAgIDY3LFxuICAgICAgNTAsXG4gICAgICAxNDIsXG4gICAgICAyMzEsXG4gICAgICAxMjQsXG4gICAgICAzNyxcbiAgICAgIDEyLFxuICAgICAgMjI0LFxuICAgICAgMzksXG4gICAgICA5NCxcbiAgICAgIDIzNSxcbiAgICAgIDEyOSxcbiAgICAgIDEzMixcbiAgICAgIDE5LFxuICAgICAgMjUwLFxuICAgICAgNDUsXG4gICAgICAxODEsXG4gICAgICAxMzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiV1pLNFNLNkZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMzc5MjQyNDA6NDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEwNDc4NDc1MzM0ODg1MDo0M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNT09ocmNHRU43ZHU3UUdHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInJqRUF3UmpPTTZFLzlobi95elpRSVNoWDV0U0U2RzZIQURyZytNS2pJUWs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiK3ViUnhFWG5xT2JrYzZhK3k2ZlNKVkRVS3ZkVmEwb29vdks0U0lBNWJLWUF5ZGE1YXFQZ0VUSmZlYlEzWmszWDg4ZWFxcGhiV3ptU21yV0Jxbk1EQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicFRzUjNyWk1WeGkxK2RDY1MvbjlwMWg4QkdVN1Z3amRBbHp0a3hVaEY1K2tjdTl5TjQyYlR0MnlUT0xkcnNjb25keEplYStHVi9IandMWm13bE5rRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEzNzkyNDI0MDo0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDY0MzI5OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNmalwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ2ZqLmpzb24iOiAie1wia2V5RGF0YVwiOlwid281S2E0WFZsTGlyYjFMUll3U3gzQ0xMY0RGOENiK3hNU0VDOUlNSVRBST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzI2MDU2MjU3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAzOTE4Mjk5MDdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "unknown",
  packname: process.env.PACK_NAME || "to your dad",
  botname : process.env.BOT_NAME  || "BOT?",
  ownername:process.env.OWNER_NAME|| "EVILNESS",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
