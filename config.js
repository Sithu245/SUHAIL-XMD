const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "*`||SITHU-MD`*" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94760334624";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://sabimages.com/wp-content/uploads/2024/08/real-girl-pic34.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_05_12_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0LFxuICAgICAgICAzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjEsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjUzLFxuICAgICAgICA1LFxuICAgICAgICAzOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjAyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDc2LFxuICAgICAgICAyMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDM3LFxuICAgICAgICAyMixcbiAgICAgICAgMTM4LFxuICAgICAgICA5NCxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE2LFxuICAgICAgICAyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjE0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTEyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTE3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjksXG4gICAgICAgIDMwLFxuICAgICAgICAzMixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDczLFxuICAgICAgICAyNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDc3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjAwLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDYsXG4gICAgICAgIDI0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTEwLFxuICAgICAgICA1MixcbiAgICAgICAgOTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMzLFxuICAgICAgICA5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgyLFxuICAgICAgICA2NixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjksXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDkzLFxuICAgICAgICAxODUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDY0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAzNixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0NixcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjksXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAzMixcbiAgICAgICAgMjMyLFxuICAgICAgICA1NyxcbiAgICAgICAgNDksXG4gICAgICAgIDY1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQwLFxuICAgICAgICAxLFxuICAgICAgICAxMjksXG4gICAgICAgIDg4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODcsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjIyLFxuICAgICAgICA0NixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTYxLFxuICAgICAgICA5MixcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDkzLFxuICAgICAgICA1NixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDk0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjIzLFxuICBcImFkdlNlY3JldEtleVwiOiBcImJwSk9CemNyeWsrYWJ5RVRCRUx6V3VXT1VyUDR1TnQ3Z1dINEJieWhMdFE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInRIVndxYTdXUjFxYmhSb1VOR083c3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2NjY2VlMzQtNDk1MS00NzExLTgwOTEtZjgwY2VmNGE3OGNjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg5LFxuICAgICAgMjQ2LFxuICAgICAgNixcbiAgICAgIDc1LFxuICAgICAgMjQ2LFxuICAgICAgMzQsXG4gICAgICAyMzUsXG4gICAgICAyMDksXG4gICAgICAxNzEsXG4gICAgICAyMTQsXG4gICAgICAxNTgsXG4gICAgICA0MSxcbiAgICAgIDM3LFxuICAgICAgMjU1LFxuICAgICAgMTEzLFxuICAgICAgMTE0LFxuICAgICAgNyxcbiAgICAgIDI0NSxcbiAgICAgIDEwNCxcbiAgICAgIDE0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0OSxcbiAgICAgIDYyLFxuICAgICAgMjMsXG4gICAgICAyMTYsXG4gICAgICAyMTksXG4gICAgICAyNDQsXG4gICAgICAyMzUsXG4gICAgICAxMjIsXG4gICAgICAyMDEsXG4gICAgICA2MSxcbiAgICAgIDI0OSxcbiAgICAgIDY3LFxuICAgICAgMTk1LFxuICAgICAgMTk1LFxuICAgICAgMTQ5LFxuICAgICAgNzMsXG4gICAgICA1MCxcbiAgICAgIDI0LFxuICAgICAgMTUzLFxuICAgICAgMTA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlNSVFE0OUVHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc2MDMzNDYyNDo4MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlNpdGh1XCIsXG4gICAgXCJsaWRcIjogXCIxMDQ5Njk1MjA4MzI3MTM6ODBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSzJJMHNBQ0VNR2x6TG9HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJJQmxEd2ppMTk1aXB1c0NQcFdTRGFSZW5ra0JxNisyZWY1dU5qbis4ajNrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkhzWUYwVTVzNSs4b2w0Zis4T3d5VHkvYXJPRzB2Z2NEZVNYK1lMcVlHVXpaMUZSL0lwRW8wTzdJMGR2TWVPUEh0a1crVmw5SVU2N290VGQ0Zk1VMEN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk5vcUJVYXZ5WmNZVEFEWHA5Tk9iNlJrUjBnR2V1NG9HMGZGVHRYeGRPaVdkRExSeWx6ZUdYejlwWFAxTS9WbFNqZnRZVERHb0JuZmVzOWZLcXIvNkN3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzYwMzM0NjI0OjgwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzNDk3NTQxXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
