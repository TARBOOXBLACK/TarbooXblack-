import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let vn = './media/menu.mp3'
let pp = imagen4
let img = await(await fetch('https://www.paypal.me/MOHAMEDSharkawy642')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'ar'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `┓━ ╼━━━╃⌬〔❄️〕⌬╄━━━╾ ━┏
*❂┇❯ مـرحــبـا بــك یــا ${taguser}*
*✦*
*≼❄️≽ مـعـلــومـات الـبــوت╿↶*
━ ── • ⟐ • ── ━
*❂┇❯ اســم الـبــوت ❰ ❄𝚃𝙰𝚁𝙱𝙾𝙾❄ ❱*
*❂┇❯ وقــت الـتشـغـيــل : ⌊ ${uptime} ⌉╎❄️*
*❂┇❯ الـمـطـور : ⌊https://wa.me/201050861664⌉╎❄️*
*❂┇❯ الـإصـدار : ⌊v1.5.7⌉╎❄️*
*❂┇❯ مـنـصـة الـتشـغـيــل :  ⌊ رببلايت ⌉╎❄️*

            ━ ── • ⟐ • ── ━

*≼🏰≽ قـسـم المجموعات╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
*❄️╎❯ .منشن⌉*
*❄️╎❯ .مخفي⌉*
*❄️╎❯ .طرد⌉*
*❄️╎❯ .اضافة⌉*
*❄️╎❯ .ترقيه⌉*
*❄️╎❯ .تخفيض⌉*
*❄️╎❯ .احذف⌉*
*❄️╎❯ .جروب فتح⌉*
*❄️╎❯ .جروب غلق⌉*
*❄️╎❯ .تغييرالصورة⌉*
*❄️╎❯ .طرد_رمز⌉*
*❄️╎❯ .لينك⌉*
*❄️╎❯ .انذار⌉*
*❄️╎❯ .الغاء_الانذار ⌉*
   ────── • ◈ • ──────
*≼⏬≽ قـسـم التحميل╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
*❄️╎❯ .فيديو⌉*
*❄️╎❯ .اغنيه⌉*
*❄️╎❯ .صورة ⌉*
*❄️╎❯ .طقم⌉*
*❄️╎❯ .البحث⌉*
*❄️╎❯ .تيك⌉*
   ────── • ◈ • ──────
*≼🕹≽ قـسـم الترفيه╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
*❄️╎❯ .اكس_او⌉*
*❄️╎❯ .احذف_اللعبه⌉*
*❄️╎❯ .تحدي⌉*
*❄️╎❯ .احزر⌉*
*❄️╎❯ .حظ⌉*
*❄️╎❯ .جميل⌉*
*❄️╎❯ .ورع⌉*
*❄️╎❯ .اهبل⌉*
*❄️╎❯ .خروف⌉*
*❄️╎❯ .انطق⌉*
*❄️╎❯ .نسبه⌉*
*❄️╎❯ .لو⌉*
*❄️╎❯ .تويت⌉*
*❄️╎❯ .تاج⌉*
*❄️╎❯ .سؤال⌉*
*❄️╎❯ .اسئلني⌉*
*❄️╎❯ .كت⌉*
*❄️╎❯ .شطرنج⌉*
*❄️╎❯ .سلاحي*
*❄️╎❯ .علم⌉*
*❄️╎❯ .نصايح⌉*
*❄️╎❯ .علم⌉*
*❄️╎❯ .عكس⌉*
   ────── • ◈ • ──────
*≼♻️≽ قـسـم التحويل╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
*❄️╎❯ .ملصق⌉*
*❄️╎❯ .حقوق⌉*
*❄️╎❯ .لصورة⌉*
*❄️╎❯ .لفيديو⌉*
*❄️╎❯ .لرابط⌉*
*❄️╎❯ .حيوان⌉*
*❄️╎❯ .قط⌉*
*❄️╎❯ .كلب⌉*
*❄️╎❯ .ستك⌉*
*❄️╎❯ .مترجم⌉*
   ────── • ◈ • ──────
*≼≽ قـسـم الاعضاء╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
*❄️╎❯ .اختفاء⌉*
*❄️╎❯ .تحدث⌉* 
*❄️╎❯ .بروفايلي⌉*
*❄️╎❯ .منشن⌉*
*❄️╎❯ .سرعه⌉*
*❄️╎❯ .خط⌉*
*❄️╎❯ .دمج⌉*
*❄️╎❯ .هل⌉*
*❄️╎❯ .منشني⌉*
*❄️╎❯ .توب⌉*
*❄️╎❯ .تصاميم⌉*
*❄️╎❯ .ايات*
*❄️╎❯ .المطور⌉*
*❄️╎❯ .جوجل⌉*
*❄️╎❯ .تعليق⌉*
   ────── • ◈ • ──────
*≼🧧≽ قـسـم المطور╿↶*
*❄️╎❯ .بان⌉*
*❄️╎❯ .بان_فك⌉*
*❄️╎❯ .بان_شات⌉*
*❄️╎❯ .بان_شات_فك⌉*
*❄️╎❯ .حطها بروفايل ⌉*
*❄️╎❯ .اخرج⌉*
*❄️╎❯ .ادخل⌉*
*❄️╎❯ .تهكير⌉*
*┛━ ╼━━━╃⌬〔❄️〕⌬╄━━━╾ ━┗*`.trim()
let buttonMessage = {
image: pp,
caption: str.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: '『❄┇𝙶𝙷𝙾𝚃𝙸-𝙱𝙾𝚃』', 
body: null,
thumbnail: img,
sourceUrl: `https://www.paypal.me/https://www.paypal.me/MOHAMEDSharkawy642`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[❗ملاحظة❗] هناك مشكلة في قائمة الاوامر الخاصة بي ارجو مراسلة المطور لتصليح العطل*', m)
}}
handler.command = /^(menu|menú|اوامر|memú|help|بوت|comandos|allmenu|2help|menu1.2|الاوامر|غوتاي|commandos|cmd)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}