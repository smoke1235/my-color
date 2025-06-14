import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import MyColor from './MyColor'


var colorPickerPalette =  ["#ffffff","#9d9d9c","#38302b","#673b15","#790e11","#7c330e","#8c6114","#fbba00","#4d6811","#00501f","#00524f","#000000","#b2b2b2","#59493f","#7d5024","#9d0d15","#a24311","#a37613","#ffd500","#678713","#006729","#006b66","#3c3c3b","#c6c6c6","#736157","#956939","#e30613","#f39400","#c4971a","#ffe160","#97bf0d","#009036","#009790","#575756","#dadada","#a3907c","#af8554","#eb6645","#f8b356","#ddb718","#ffed00","#b9d165","#47ad68","#30b3ad","#706f6f","#ededed","#cebca5","#cca674","#f29a79","#fccb8c","#edc82a","#fff265","#d0e099","#90c797","#8accc7","#878787","#f6f6f6","#e6ddd1","#e6d3b9","#fad0bc","#fee7c8","#f4d88c","#fffbd2","#eaf0cf","#cde5cd","#cbe7e4","#00547a","#003762","#002454","#0d0f49","#360947","#510045","#7c0042","#7a032a","#8f6565","#444a44","#3c4656","#006f9f","#004a7f","#00336e","#0f1b5f","#46155d","#69085a","#a00057","#9f0038","#a88181","#5f695f","#546071","#009ee1","#006ab3","#004a99","#172983","#622181","#93117e","#e3007a","#e3004f","#c19f9f","#818c82","#707e8f","#00b9e9","#488dc7","#5773b2","#61569d","#8a5b9d","#ae609e","#ea69a0","#eb6878","#d3b4b4","#a5afa6","#95a2af","#84d0f1","#8baed8","#8e9ac9","#9085ba","#ab8cbc","#c593be","#f19fc1","#f29da0","#e2cccc","#b4bcb4","#adbbc6","#c9e9f9","#c9d7ec","#c8cae4","#c8c2de","#d2c5df","#e2cbe1","#fadde9","#fad1d1","#eddfde","#c9d1ca","#c8d3db","#303a66","#3f4961","#485156","#5d7680","#61706f","#72735e","#bccdb3","#a45c74","#c49797","#dc887d","#bd9a58","#acb3c6","#c2d2da","#a4acb1","#9eafb5","#99adac","#b1b39d","#d7e2d1","#d69eb4","#e5c8c8","#ebb7b2","#dba64e"];
var colorPickerFoliePalette =  ["#ffffff","#9d9d9c","#38302b"];
var taps = {
  design: {
    name: "Designkleuren",
    folie: false,
    palette: ["#38302b","#673b15","#790e11"]
  },
  folie: {
		name : "Foliekleuren",
		custom: false,
		folie: true,
    hasInfo: true,
		palette: colorPickerFoliePalette
	},
	kleur: {
		name : "Kleurenpalet",
		custom: true,
		folie: false,
		palette: colorPickerPalette
	},
	
};

const change = (color, folie) => {
	console.log(`Color: ${color}`);
	console.log(`Folie: ${folie}`);
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyColor taps={taps} change={change} color="#673b15" />
  </StrictMode>,
)
