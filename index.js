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


      if (!text.startsWith(prefix)) return

      const pesan = text.slice(1).trim()
      const args = pesan.split(" ")
      const command = args.shift().toLowerCase()

      //===============================================
      const owner =  7732477223
      const isOwner = msg.from.id === owner

      console.log('--------- [ PESAN ] --------')
      console.log(`Dari  : ${username}`)
      console.log(`Pesan : ${text}`)
      console.log('----------------------------')


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

          case "my": {
            if (!args[0]) {
              return Nass.sendMessage(msg.chat.id, 'nama wajib di isi')
            }

            if (!args[1]) {
              return Nass.sendMessage(msg.chat.id, 'umur wajib di isi')
            }

            console.log(args)

            const nama = args[0]
            const umur = args[1]
            Nass.sendMessage(msg.chat.id, `nama   :   ${nama}\n umur   :  ${umur}`)
          }
            break

            case "cekkedewasaan": {
              if (!args[0]) {
                return Nass.sendMessage(msg.chat.id, "nama wajib di isi")
              }
              if (!args[1]) {
                return Nass.sendMessage(msg.chat.id, "umur wajib di isi")
              }


              const nama = args[0]
              const umur = args[1]
              function cekKedewasaan(umur) {
                if (umur > 18) {
                  return "sudah dewasa"
                } else {
                  return 'masih kanak kanak'
                }
              }

              Nass.sendMessage(msg.chat.id, `nama   :   ${nama}\numur    : ${umur}\n${cekKedewasaan(umur)}`)
            }

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