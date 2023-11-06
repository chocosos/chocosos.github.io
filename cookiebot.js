
let bob=20;
let cursor=0;
let grandma=0;
let farm=0;
let mine=0;
let factory=0;
let bank=0;
let temple=0;
let wizardTower=0;
let shipment=0;
let alchemyLab=0;
let portal=0;
let timeMachine=0;
let antimatterCondenser=0;
let prism=0;
let chancemaker=0;
let fractalEngine=0;
let javascriptConsole=0;
let idleverse=0;
let cortexBaker=0;
let you=0;
let next=" ";
let bestCost=9999999999999999999999999999999999999999999999;
var bestObj;

    const things = [];
Game.registerMod('cookiebot',{

  init:function(){
    Game.registerHook('draw',function(){Game.mods['cookiebot'].gogo();});

  },
  save:function(){
    //note: we use stringified JSON for ease and clarity but you could store any type of string
    return JSON.stringify({text:Game.playerIntro})
  },
  load:function(str){
    var data=JSON.parse(str);
    if (data.text) Game.mods['cookiebot'].addIntro(data.text);
  },


  gogo:function(){
      
        bob=0;
        
        Game.ClickCookie();

  
        things.push(Game.Objects['Cursor'])
        things.push(Game.Objects['Grandma'])
        things.push(Game.Objects['Farm'])
        things.push(Game.Objects['Mine'])
        things.push(Game.Objects['Factory'])
        things.push(Game.Objects['Bank'])
        things.push(Game.Objects['Temple'])
        things.push(Game.Objects['Wizard tower'])
        things.push(Game.Objects['Shipment'])
        things.push(Game.Objects['Alchemy lab'])
        things.push(Game.Objects['Portal'])
        things.push(Game.Objects['Time machine'])
        things.push(Game.Objects['Antimatter condenser'])
        things.push(Game.Objects['Prism'])
        things.push(Game.Objects['Chancemaker'])
        things.push(Game.Objects['Fractal engine'])
        things.push(Game.Objects['Javascript console'])
        things.push(Game.Objects['Idleverse'])
        things.push(Game.Objects['Cortex baker'])
        things.push(Game.Objects['You'])
        for (let i=0;i<things.length;i++){
            if (things[i].price/things[i].storedCps<bestCost){
                bestCost=things[i].price/things[i].storedCps
                bestObj=things[i]
            }
        }
        Game.UpgradesInStore[0].buy()
        bestObj.buy(1);
        Game.shimmers.forEach(function(shimmer) {
            
            if (shimmer.type == "golden") { shimmer.pop() }
        })
            
        
        
        

  },

});
