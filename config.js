const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349068322194";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_21_05_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE5LFxuICAgICAgICA5NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM2LFxuICAgICAgICA4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTkwLFxuICAgICAgICA4NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDc4LFxuICAgICAgICAyNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAzNCxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA4NixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDkxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgwLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE4LFxuICAgICAgICA2NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDcsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE0LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQwLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODgsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzYsXG4gICAgICAgIDQwLFxuICAgICAgICA0MixcbiAgICAgICAgNzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDksXG4gICAgICAgIDAsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjksXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk3LFxuICAgICAgICA0MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDU4LFxuICAgICAgICA3MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDM0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAzOSxcbiAgICAgICAgNzksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDYzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTM2LFxuICAgICAgICA1MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTk1LFxuICAgICAgICA1MixcbiAgICAgICAgMixcbiAgICAgICAgMzEsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwNixcbiAgICAgICAgNzEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjM0LFxuICAgICAgICA5OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyOCxcbiAgICAgICAgNDksXG4gICAgICAgIDkzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDExLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODUsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDQxLFxuICAgICAgICA3OCxcbiAgICAgICAgODgsXG4gICAgICAgIDcxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZmwwRERNeUxuTkZieUN2NjFCc0VzY05CVENpNGNJZldmZzlzbkJXRkw5MD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibHp2X0h3SElRWXFBY0JleUhZYXlBUVwiLFxuICBcInBob25lSWRcIjogXCJiM2NjZGU3Zi0wMTc4LTQ0ODgtOGUzNC0yYzc1MjQwYWNjMTZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMCxcbiAgICAgIDE2NyxcbiAgICAgIDgyLFxuICAgICAgMTkwLFxuICAgICAgMjE4LFxuICAgICAgODcsXG4gICAgICAyMjAsXG4gICAgICA5NSxcbiAgICAgIDE3MixcbiAgICAgIDczLFxuICAgICAgMyxcbiAgICAgIDY0LFxuICAgICAgMjQwLFxuICAgICAgNDIsXG4gICAgICAxMTcsXG4gICAgICAxNTAsXG4gICAgICA3LFxuICAgICAgNjcsXG4gICAgICAzLFxuICAgICAgMTU2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MCxcbiAgICAgIDE0NCxcbiAgICAgIDE2MCxcbiAgICAgIDEyNyxcbiAgICAgIDk1LFxuICAgICAgNjksXG4gICAgICAxODMsXG4gICAgICAyMCxcbiAgICAgIDIzNyxcbiAgICAgIDE3OCxcbiAgICAgIDE3MyxcbiAgICAgIDIwMSxcbiAgICAgIDMxLFxuICAgICAgMjYsXG4gICAgICAxMixcbiAgICAgIDYwLFxuICAgICAgODIsXG4gICAgICAxNzAsXG4gICAgICAxOTcsXG4gICAgICA5MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGWk1OUkdYTVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA2ODMyMjE5NDoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjE5ODI5NTYyNzg1OTk0OjExQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09uNXk4VUJFSi9CMkxJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUWJXWjBIb1BGendWOUxWNVdzTDNXM3NhTHhWdnErS091eVRrQUdpWVpGST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJIQkdRVWlGNXkvTVoyOGdPNTdMMmZ6VzJCN09jcm9UcGJHbEREcmhVWmYreVBvOEJpUitvV3NOeUNZeG1CRi9ySmhtck5yUGlTcEk4UndzWkd6aGdEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJwTlViYWVQcXVGaTZPVWRlL3JBMGt5Z05RVXBlUTdxYjFVRzNkSTZzSHQyZXV4aUQyVFlXNUdFelAxd3FiVE12UDlsdldid0dpQ3ZjL0dhMVdxaVhBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDY4MzIyMTk0OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjkyMDQ4MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdpTVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR2lNLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSnNZZWFtb2hkU3MwWG5penZkbkw1N3B0OVhvU1RaNDlObk9CeWZqY05mWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0MTQzODMzMzYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
