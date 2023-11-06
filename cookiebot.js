
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
        things.push(cursor)
        grandma = Game.Objects['Grandma'].price/Game.Objects['Grandma'].storedCps
        things.push(grandma)
        farm = Game.Objects['Farm'].price/Game.Objects['Farm'].storedCps
        things.push(farm)
        mine = Game.Objects['Mine'].price/Game.Objects['Mine'].storedCps
        things.push(mine)
        factory = Game.Objects['Factory'].price/Game.Objects['Factory'].storedCps
        things.push(factory)
        bank = Game.Objects['Bank'].price/Game.Objects['Bank'].storedCps
        things.push(bank)
        temple = Game.Objects['Temple'].price/Game.Objects['Temple'].storedCps
        things.push(temple)
        wizardTower = Game.Objects['Wizard tower'].price/Game.Objects['Wizard tower'].storedCps
        things.push(wizardTower)
        shipment = Game.Objects['Shipment'].price/Game.Objects['Shipment'].storedCps
        things.push(shipment)
        alchemyLab = Game.Objects['Alchemy lab'].price/Game.Objects['Alchemy lab'].storedCps
        things.push(alchemyLab)
        portal = Game.Objects['Portal'].price/Game.Objects['Portal'].storedCps
        things.push(portal)
        timeMachine = Game.Objects['Time machine'].price/Game.Objects['Time machine'].storedCps
        things.push(timeMachine)
        antimatterCondenser = Game.Objects['Antimatter condenser'].price/Game.Objects['Antimatter condenser'].storedCps
        things.push(antimatterCondenser)
        prism = Game.Objects['Prism'].price/Game.Objects['Prism'].storedCps
        things.push(prism)
        chancemaker = Game.Objects['Chancemaker'].price/Game.Objects['Chancemaker'].storedCps
        things.push(chancemaker)
        fractalEngine = Game.Objects['Fractal engine'].price/Game.Objects['Fractal engine'].storedCps
        things.push(fractalEngine)
        javascriptConsole = Game.Objects['Javascript console'].price/Game.Objects['Javascript console'].storedCps
        things.push(javascriptConsole)
        idleverse = Game.Objects['Idleverse'].price/Game.Objects['Idleverse'].storedCps
        things.push(idleverse)
        cortexBaker = Game.Objects['Cortex baker'].price/Game.Objects['Cortex baker'].storedCps
        things.push(cortexBaker)
        you = Game.Objects['You'].price/Game.Objects['You'].storedCps
        things.push(you)
        

  },

});
