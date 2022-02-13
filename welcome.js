const
	{
		WAConnection,
		ReconnectMode,
		MessageType,
		ProxyAgent,
		mentionedJid,
		processTime
	} = require("@adiwajshing/baileys")
const fs = require('fs')
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const { simih, getBuffer, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const kickarea = JSON.parse(fs.readFileSync('./database/kickarea.json'))
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}
module.exports = hypermod = async (hypermod, anu) => {
	    if (!welkom.includes(anu.jid)) return
	    try {
        console.log(anu)
        const num = anu.participants[0]
        const mdata = await hypermod.groupMetadata(anu.jid)
        const pushnem = hypermod.contacts[num] != undefined ? hypermod.contacts[num].notify = undefined ? PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international') : hypermod.contacts[num].notify || hypermod.contacts[num].vname : PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')
        const thu = await hypermod.getStatus(anu.participants[0], MessageType.text)
        try {
        var pp_user = await hypermod.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
         } catch (e) {
        var pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
        }
            if (anu.action == 'add') {
			myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
			myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
			var tgl = new Date();
			var day = tgl.getDate()
			var bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			const tanggalu = `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
		    membr = mdata.participants.length
		    memeg = mdata.participants.length
            anu_user = hypermod.contacts[num]
                teks = `\`\`\`Welcome In Gc ${mdata.subject}\`\`\`\n─────────────────\n\`\`\`Nama : @${num.split('@')[0]}\`\`\`\n\`\`\`Bio : ${thu.status}\`\`\`\n\`\`\`Member Ke : ${membr}\`\`\`\n\`\`\`Tanggal : ${tanggalu}\`\`\`\n\`\`\`Jangan Lupa Baca Deskripsi\`\`\`\n─────────────────\n${mdata.desc}`
let buff = await getBuffer(`https://bx-hunter.herokuapp.com/api/welcome?name=${encodeURIComponent(pushnem)}&mem=${membr}&icon=${pp_user}&gcname=${encodeURI(mdata.subject)}&picurl=https://tools.bandungxploiter.site/uploads/60af04d96d8f3.jpg&apikey=ikygans`)
        hypermod.sendMessage(mdata.id, buff, MessageType.image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName":`${pushnem}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;${num.split('@')[0]};;;\nFN:${num.split('@')[0]}\nitem1.TEL;waid=${num.split('@')[0]}:${num.split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}, contextInfo: {"mentionedJid": [num]}, caption: teks})
        }
            if (anu.action == 'remove') {
            myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
			myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
			var tgl = new Date();
			var day = tgl.getDate()
			var bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			const tanggalu = `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
                anu_user = hypermod.contacts[num]
                membr = mdata.participants.length
                memeg = mdata.participants.length
                out = `_Selamat Jalan @${num.split('@')[0]}_\n─────────────────\n_Meninggal Pada : ${tanggalu}_\n_Kata Kata Terakhir : ${thu.status}_\n─────────────────\n_May Rest In Peace~_`
                let buff = await getBuffer(`https://bx-hunter.herokuapp.com/api/goodbye?name=${encodeURIComponent(pushnem)}&mem=${membr}&icon=${pp_user}&gcname=${encodeURI(mdata.subject)}&picurl=https://tools.bandungxploiter.site/uploads/60af04d96d8f3.jpg&apikey=ikygans`)
                hypermod.sendMessage(mdata.id, buff, MessageType.image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName":`${pushnem}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;${num.split('@')[0]};;;\nFN:${num.split('@')[0]}\nitem1.TEL;waid=${num.split('@')[0]}:${num.split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}, contextInfo: {"mentionedJid": [num]}, caption: out})
            }
        else if (anu.action == 'promote') {
        	const mdata = await hypermod.groupMetadata(anu.jid)
        	myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
			myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
			var tgl = new Date();
			var day = tgl.getDate()
			var bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			const tanggalu = `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
			const num = anu.participants[0]
			anu_user = hypermod.contacts[num]
                memeg = mdata.participants.length
                try {
					ppimg = await hypermod.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			let buff = await getBuffer(ppimg)
			teks = `\`\`\`Naik Jabatan Di Grup ${mdata.subject}\`\`\`
\`\`\`─────────────────\`\`\`        
\`\`\`Nama : @${num.split('@')[0]}\`\`\`
\`\`\`Bio : ${thu.status}\`\`\`
\`\`\`Tanggal : ${tanggalu}\`\`\`
\`\`\`─────────────────\`\`\`
\`\`\`Congrats!\`\`\``
			hypermod.sendMessage(mdata.id, buff, MessageType.image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName":`${pushnem}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;${num.split('@')[0]};;;\nFN:${num.split('@')[0]}\nitem1.TEL;waid=${num.split('@')[0]}:${num.split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}, contextInfo: {"mentionedJid": [num]}, caption: teks})
		} else if (anu.action == 'demote') {
			myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
			myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
			var tgl = new Date();
			var day = tgl.getDate()
			var bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			const tanggalu = `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
			num = anu.participants[0]
		 anu_user = hypermod.contacts[num]
                memeg = mdata.participants.length
			try {
					ppimg = await hypermod.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			let buff = await getBuffer(ppimg)
			teks = `\`\`\`Turun Jabatan Di Grup ${mdata.subject}\`\`\`
\`\`\`─────────────────\`\`\`        
\`\`\`Nama : @${num.split('@')[0]}\`\`\`
\`\`\`Bio : ${thu.status}\`\`\`
\`\`\`Tanggal : ${tanggalu}\`\`\`
\`\`\`─────────────────\`\`\`
\`\`\`Makannya Jadi Admin Jangan Baperan:v\`\`\``
			hypermod.sendMessage(mdata.id, buff, MessageType.image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName":`${pushnem}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;${num.split('@')[0]};;;\nFN:${num.split('@')[0]}\nitem1.TEL;waid=${num.split('@')[0]}:${num.split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}, contextInfo: {"mentionedJid": [num]}, caption: teks})
            }
	} catch (e) {
		console.log(e)
	}
	}
	module.exports = hypermod = async (hypermod, den) => {
	if (!kickarea.includes(den.jid)) return
	    const _0x4d17=['188RNFArz','international','groupRemove','\x0aitem1.X-ABLabel:Mobile\x0aEND:VCARD','contacts','includes','910351eLggma',';;;\x0aFN:','42959hBQxBy','6283136505591-1604595598@g.us','text','vname','getNumber','0@s.whatsapp.net','notify','```@','groupMetadata','4451QHirRk','BEGIN:VCARD\x0aVERSION:3.0\x0aN:2;','split',',\x20Sorry\x20this\x20Group\x20is\x20only\x20for\x20Indonesians!```','replace','752295rCfnid','882744RKrwWi','log','@s.whatsapp.net','1032kGVIdR','sendMessage','\x0aitem1.TEL;waid=','yellow','229zfILwo','709344RpucKu','jid'];const _0x4acc0d=_0x2016;(function(_0x23c527,_0x4b7daf){const _0x4aa3f5=_0x2016;while(!![]){try{const _0x5c6998=-parseInt(_0x4aa3f5(0xdc))*parseInt(_0x4aa3f5(0xe3))+-parseInt(_0x4aa3f5(0xe9))+parseInt(_0x4aa3f5(0xe1))+parseInt(_0x4aa3f5(0xd8))+parseInt(_0x4aa3f5(0xeb))+-parseInt(_0x4aa3f5(0xe0))*-parseInt(_0x4aa3f5(0xd3))+-parseInt(_0x4aa3f5(0xd9));if(_0x5c6998===_0x4b7daf)break;else _0x23c527['push'](_0x23c527['shift']());}catch(_0x454f85){_0x23c527['push'](_0x23c527['shift']());}}}(_0x4d17,0x830be));const num=den['participants'][0x0],mdata=await hypermod[_0x4acc0d(0xd2)](den[_0x4acc0d(0xe2)]),pushnem=hypermod['contacts'][num]!=undefined?hypermod['contacts'][num]['notify']=undefined?PhoneNumber('+'+num[_0x4acc0d(0xd7)](_0x4acc0d(0xdb),''))['getNumber'](_0x4acc0d(0xe4)):hypermod[_0x4acc0d(0xe7)][num][_0x4acc0d(0xf1)]||hypermod[_0x4acc0d(0xe7)][num][_0x4acc0d(0xee)]:PhoneNumber('+'+num[_0x4acc0d(0xd7)](_0x4acc0d(0xdb),''))[_0x4acc0d(0xef)](_0x4acc0d(0xe4));console[_0x4acc0d(0xda)](den);if(num[_0x4acc0d(0xe8)]('62'))return;function _0x2016(_0x330711,_0x71d627){_0x330711=_0x330711-0xd1;let _0x4d1711=_0x4d17[_0x330711];return _0x4d1711;}bule=''+num[_0x4acc0d(0xd5)]('@')[0x0],console['log'](color('Kick\x20bule',_0x4acc0d(0xdf))),teks=_0x4acc0d(0xd1)+num['split']('@')[0x0]+_0x4acc0d(0xd6),hypermod[_0x4acc0d(0xdd)](mdata['id'],teks,MessageType[_0x4acc0d(0xed)],{'quoted':{'key':{'fromMe':![],'participant':_0x4acc0d(0xf0),...den[_0x4acc0d(0xe2)]?{'remoteJid':_0x4acc0d(0xec)}:{}},'message':{'contactMessage':{'displayName':''+pushnem,'vcard':_0x4acc0d(0xd4)+num[_0x4acc0d(0xd5)]('@')[0x0]+_0x4acc0d(0xea)+num[_0x4acc0d(0xd5)]('@')[0x0]+_0x4acc0d(0xde)+num['split']('@')[0x0]+':'+num[_0x4acc0d(0xd5)]('@')[0x0]+_0x4acc0d(0xe6)}}},'contextInfo':{'mentionedJid':[num]}}),sleep(0x1388),hypermod[_0x4acc0d(0xe5)](den['jid'],[num]);
        }