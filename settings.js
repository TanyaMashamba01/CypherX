//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : CypherX
// @author : MidKing01❤️‍🔥
// @youtube : https://www.youtube.com/@joshuamambo1
// @instagram : joshuamambo1
// @telegram : t.me/joshKing01
// @github : MidKing01
// @tiktok : Joshuamambo1
// @whatsapp : +263716729222

//----------------------[ CYPHER-X ]----------------------//

const fs = require('fs')
const { color } = require('./lib/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || 'XPLOADER-BOT:~37JhxZDa#-sCHVrh_1rIUUk1IGvUcKxnPxN6kko0viNKuZPwqVJQ' 
//Enter your Xploader session id here; must start with XPLOADER-BOT:~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'MidKing' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '26371679222' 

//--------------------[ SUDO ]--------------------------//

global.sudo = process.env.SUDO ? process.env.SUDO.split(',') : ['263716729222', '254712345678'];
// Type additional allowed users here
//NB: They'll be able to use every functions of the bot without restrictions.

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'MidKing' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "Mid" 

//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "King" 

//-------------------[ BOT'S PREFIX ]--------------------//

global.prefixz = process.env.BOT_PREFIX || '$'

//-----------------[ BOT'S MODE ]-----------------------//

global.mode = process.env.MODE || 'public';
// Set 'private' to enable private mode
// Set 'public' to enable public mode
// Set 'group' to enable only group
// Set 'pm' to enable only private chats

//----------[ STATUS REACTION EMOJI ]--------------//

global.statusemoji = process.env.STATUS_EMOJI || '🧡'

//---------------[ AUTO VIEW STATUS ]---------------//

global.autoviewstatus = process.env.AUTO_STATUS_VIEW || 'false'
// set true to enable and false to disable auto status view

//--------------[ AUTO REACT STATUS ]--------------//

global.autoreactstatus = process.env.AUTO_STATUS_REACT || 'false'
// set true to enable and false to disable auto status react

//---------------[ ALWAYS ONLINE ]------------------//

global.alwaysonline = process.env.ALWAYS_ONLINE || 'false'
//Set true to make the bot online 24/7 or set false to disable always online


//--------------------[ CHATBOT ]-----------------------//

global.chatbot = process.env.CHATBOT || 'false'
// set true to enable and false to disable auto ai chatbot

//-------------------[ ANTI DELETE ]--------------------//

global.antidelete = process.env.ANTIDELETE || 'public'
// options:- 'private', 'chat' or 'off'
// private = Sends to message yourself 
// chat = sends to the current chat 
// off = Disables detection of deleted messages

//---------------------[ ANTI EDIT ]----------------------//

global.antiedit = process.env.ANTI_EDIT || 'private'
// options:- 'private', 'chat' or 'off'
// private = Sends to message yourself 
// chat = sends to the current chat 
// off = Disables detection of edited messages

//---------------------[ ANTI CALL ]----------------------//

global.anticall = process.env.ANTI_CALL || 'true'
// set true to enable and false to disable auto blocking of callers

//---------------[ WELCOME MESSAGE ]----------------//

global.welcome = process.env.WELCOME_MSG || 'false'
// set true to enable and false to disable welcoming and left messages to groups upon joining or leaving groups

//----------------------[ TIMEZONE ]--------------------//

global.timezones = process.env.TIMEZONE || "Africa/Gweru" 
//Don't edit this if you don't know!

//--------------------[ AUTO READ ]--------------------//

global.autoread = process.env.AUTO_READ || 'false';
// Set to 'true' to enable automatic reading of messages

//-------------------[ MENU STYLE ]--------------------//

global.menustyle = process.env.MENU_STYLE || '2' 
// options 1, 2, 3, 4, 5 or 6
// 1 = Document menu(Android only)
// 2 = Text only menu(Android & iOS)
//3 = Image menu with context(Android & iOS)
//4 = Image menu(Android & iOS)
//5 = Footer/faded menu
//6 = Payment menu

//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://www.instagram.com/heyits_tylor?igsh=YzljYTk1ODg3Zg---"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "©CypherX"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '©CypherX', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ CYPHER-X ]----------------------//
