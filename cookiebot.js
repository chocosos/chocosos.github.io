
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
let best=0

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
      
        bob=0
        
        Game.ClickCookie()
    
        cursor = Game.Objects['Cursor'].price/Game.Objects['Cursor'].storedCps
        things.push(Game.Objects['Cursor'])
        grandma = Game.Objects['Grandma'].price/Game.Objects['Grandma'].storedCps
        things.push(Game.Objects['Grandma'])
        farm = Game.Objects['Farm'].price/Game.Objects['Farm'].storedCps
        things.push(Game.Objects['Farm'])
        mine = Game.Objects['Mine'].price/Game.Objects['Mine'].storedCps
        things.push(Game.Objects['Mine'])
        factory = Game.Objects['Factory'].price/Game.Objects['Factory'].storedCps
        things.push(Game.Objects['Factory'])
        bank = Game.Objects['Bank'].price/Game.Objects['Bank'].storedCps
        things.push(Game.Objects['Bank'])
        temple = Game.Objects['Temple'].price/Game.Objects['Temple'].storedCps
        things.push(Game.Objects['Temple'])
        wizardTower = Game.Objects['Wizard tower'].price/Game.Objects['Wizard tower'].storedCps
        things.push(Game.Objects['Wizard tower'])
        shipment = Game.Objects['Shipment'].price/Game.Objects['Shipment'].storedCps
        things.push(Game.Objects['Shipment'])
        alchemyLab = Game.Objects['Alchemy lab'].price/Game.Objects['Alchemy lab'].storedCps
        things.push(Game.Objects['Alchemy lab'])
        portal = Game.Objects['Portal'].price/Game.Objects['Portal'].storedCps
        things.push(Game.Objects['Portal'])
        timeMachine = Game.Objects['Time machine'].price/Game.Objects['Time machine'].storedCps
        things.push(Game.Objects['Time machine'])
        antimatterCondenser = Game.Objects['Antimatter condenser'].price/Game.Objects['Antimatter condenser'].storedCps
        things.push(Game.Objects['Antimatter condenser'])
        prism = Game.Objects['Prism'].price/Game.Objects['Prism'].storedCps
        things.push(Game.Objects['Prism'])
        chancemaker = Game.Objects['Chancemaker'].price/Game.Objects['Chancemaker'].storedCps
        things.push(Game.Objects['Chancemaker'])
        fractalEngine = Game.Objects['Fractal engine'].price/Game.Objects['Fractal engine'].storedCps
        things.push(Game.Objects['Fractal engine'])
        javascriptConsole = Game.Objects['Javascript console'].price/Game.Objects['Javascript console'].storedCps
        things.push(Game.Objects['Javascript console'])
        idleverse = Game.Objects['Idleverse'].price/Game.Objects['Idleverse'].storedCps
        things.push(Game.Objects['Idleverse'])
        cortexBaker = Game.Objects['Cortex baker'].price/Game.Objects['Cortex baker'].storedCps
        things.push(Game.Objects['Cortex baker'])
        you = Game.Objects['You'].price/Game.Objects['You'].storedCps
        things.push(Game.Objects['You'])
        for (let i = 0; i<thing.length; i++){
            if (things[i].price/things[i].storedCps<best){
                best=things[i]
            }
        if (Game.Cookies>best.price){
            best.buy()
        }
        
        }

  },

});
