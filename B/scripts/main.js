import { World,Commands} from "mojang-minecraft";
import qrcode from './qrcode-terminal/mod.js'
const overworld = World.getDimension("overworld");
let txt = "https://jq.qq.com/?_wv=1027&k=KCKh9qn8"
//It may be difficult for you to reach us
//xboy.minemc@gmail.com
World.events.beforeChat.subscribe(msg => {
  //"In MY World.\r\nIn MY Law\r\nIn Mine-craft.\r\nIn Mine-love\r\nIam xboy Minemc\r\nI create happiness for myself"

if( msg.message.startsWith("..qr 0 ")){
qrcode.generate(msg.message.replace("..qr 0 ",""), function (str) {

  let qrArr = str.split("")
           
  let x = msg.sender.location.x + 2
  let y = msg.sender.location.y + 2
  let z = msg.sender.location.z + 2
  let zO = z - 0.03125

      qrArr.forEach((X) => {
      if(X == "#"){y = y - 0.03125;zO = z}
      if(X == "1"){
      Commands.run(`particle xboycraft:wool_32W1 ${x} ${y} ${zO}`,overworld)
      }
      // if(X == "0"){
      // Commands.run(`particle xboycraft:wool_32W0 ${x} ${y} ${zO}`,overworld)
      // }
      zO = zO - 0.03125
      })

})
msg.message = "§e§l" + msg.message.replace("..qr 0 ","")
};

if( msg.message.startsWith("..qr 1 ")){
qrcode.generate(msg.message.replace("..qr 1 ",""), function (str) {

  let qrArr = str.split("")
           
  let x = msg.sender.location.x + 2
  let y = msg.sender.location.y + 2
  let z = msg.sender.location.z + 2
  let zO = z - 0.03125

      qrArr.forEach((X) => {
      if(X == "#"){y = y - 0.03125;zO = z}
      if(X == "1"){
      Commands.run(`particle xboycraft:wool_32W1 ${x} ${y} ${zO}`,overworld)
      }
      if(X == "0"){
      Commands.run(`particle xboycraft:wool_32W0 ${x} ${y} ${zO}`,overworld)
      }
      zO = zO - 0.03125
      })

})
msg.message = "§e§l" + msg.message.replace("..qr 1 ","")
};
})