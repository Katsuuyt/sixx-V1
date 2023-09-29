require("./module")

global.owner = "6285878178292"
global.namabot = "Katsu Md"
global.namaCreator = "KatsuXD Official"
global.autoJoin = false
global.antilink = false
global.codeInvite = ""
global.thumb = fs.readFileSync("./thumb.png")
global.audionya = fs.readFileSync("./all/sound.mp3")
global.packname = "KatsuXD Official"
global.author = "Sticker By KatsuXD Official"
global.jumlah = "5"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})