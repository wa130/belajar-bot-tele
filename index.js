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
} catch (error) {
  console.log("error saat menjalankan bot")
}
}

NasBot()