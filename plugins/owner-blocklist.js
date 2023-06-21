/* Creado por https://github.com/FG98F */

let handler = async (m, { conn }) => {	
await conn.fetchBlocklist().then(async data => {
let txt = `*≡ Lista bloccati*\n\n*Totale :* ${data.length}\n\n┌─⊷\n`
for (let i of data) {
txt += `▢ @${i.split("@")[0]}\n`}
txt += "└───────────"
return conn.reply(m.chat, txt, m, { mentions: await conn.parseMention(txt) })
}).catch(err => {
console.log(err);
throw 'Nessun utente bloccato'})}
handler.help = ['blocklist']
handler.tags = ['main']
handler.command = ['blocklist', 'listblock'] 
handler.rowner = true
export default handler