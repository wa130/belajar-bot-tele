import 'dotenv/config'
import TelegramBot from 'node-telegram-bot-api'

const TOKEN = process.env.TELE_TOKEN

const Nass = new TelegramBot(TOKEN, { polling: true })

async function NasBot() {
  
try {
  const namebot = 'Mng Bot'
  
  Nass.onText(/\/start/, (msg) => {
    Nass.sendMessage(msg.chat.id, `halo coy`)
  })
    Nass.on("message", (msg) => {

      const prefix = '/'
      const username = msg.from.username
      const text = msg.text
      const command = text.slice(1).toLowerCase()

      //===============================================
      const owner =  77324772233
      const isOwner = msg.from.id === owner

      console.log('--------- [ PESAN ] --------')
      console.log(`Dari  : ${username}`)
      console.log(`Pesan : ${text}`)
      console.log('----------------------------')

      if (!text.startsWith(prefix)) return

      switch (command) {
        case "menu":
          Nass.sendMessage(msg.chat.id, "halo bang")
          break;

          case "tes":
            if (!isOwner) {
              return Nass.sendMessage(msg.chat.id, 'lu bukan owner')
            }
            Nass.sendMessage(msg.chat.id, "tes diterima")
          break

          case "cekid":
             Nass.sendMessage(msg.chat.id, `id anda   :   ${msg.from.id}`)
          break

        default:
          Nass.sendMessage(msg.chat.id, "command tidak ada")
          break;
      }

    })
} catch (error) {
  console.log("error saat menjalankan bot")
}
}

NasBot()