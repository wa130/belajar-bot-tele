import 'dotenv/config'
import TelegramBot from 'node-telegram-bot-api'

const TOKEN = process.env.TELE_TOKEN

const Nass = new TelegramBot(TOKEN, { polling: true })

async function NasBot() {
  
try {
  const namebot = 'Mng Bot'
  
  Nass.onText(/\/start/, (msg) => {
    Nass.sendMessage(msg.chat.id, `halo coy`)

    Nass.on("message", (msg) => {
      console.log('--------- [ PESAN ] --------')
      const username = msg.from.username
      const text = msg.text

      console.log(`Dari  : ${username}`)
      console.log(`Pesan : ${text}`)
      console.log('---------------------------')

      switch (text) {
        case "menu":
          Nass.sendMessage(msg.chat.id, "halo bang")
          break;
      
        default:
          break;
      }

    })
  })
} catch (error) {
  console.log("error saat menjalankan bot")
}
}

NasBot()