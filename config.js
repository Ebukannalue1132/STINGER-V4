require("./database/module")

//GLOBAL PAYMENT
global.storename = "sazzy"
global.dana = "2349070810971"
global.qris = "https://i.ibb.co/BnYRXcw/STINGER-V4.jpg"


// GLOBAL SETTING
global.owner = "2349070810971"
global.namabot = "sazzy"
global.nomorbot = "2349070810971"
global.namaCreator = "sazzy"
global.linkyt = "https://youtube.com/@esteams"
global.autoJoin = false
global.antilink = false
global.versisc = '4.0.2'

// DELAY JPM
global.delayjpm = 5500

// SETTING PANEL
global.apikey = 'PLTC'
global.capikey = 'PLTA'
global.domain = 'https://domain.com'
global.eggsnya = '15'
global.location = '1'



//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://i.ibb.co/BnYRXcw/STINGER-V4.jpg'
global.isLink = 'https://whatsapp.com/channel/0029VariWCvCBtxNKBmHoS06'
global.packname = "sazzy SHOP"
global.author = "sazzy SHOP"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
