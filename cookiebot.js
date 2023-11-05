
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
    let next=" "

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
    cursor = Game.Objects['Cursor'].price/Game.Objects['Cursor'].storedCps
    Game.ClickCookie()

    grandma = Game.Objects['Grandma'].price/Game.Objects['Grandma'].storedCps
    farm = Game.Objects['Farm'].price/Game.Objects['Farm'].storedCps
    mine = Game.Objects['Mine'].price/Game.Objects['Mine'].storedCps
    factory = Game.Objects['Factory'].price/Game.Objects['Factory'].storedCps
    bank = Game.Objects['Bank'].price/Game.Objects['Bank'].storedCps
    temple = Game.Objects['Temple'].price/Game.Objects['Temple'].storedCps
    wizardTower = Game.Objects['Wizard tower'].price/Game.Objects['Wizard tower'].storedCps
    shipment = Game.Objects['Shipment'].price/Game.Objects['Shipment'].storedCps
    alchemyLab = Game.Objects['Alchemy lab'].price/Game.Objects['Alchemy lab'].storedCps
    portal = Game.Objects['Portal'].price/Game.Objects['Portal'].storedCps
    timeMachine = Game.Objects['Time machine'].price/Game.Objects['Time machine'].storedCps
    antimatterCondenser = Game.Objects['Antimatter condenser'].price/Game.Objects['Antimatter condenser'].storedCps
    prism = Game.Objects['Prism'].price/Game.Objects['Prism'].storedCps
    chancemaker = Game.Objects['Chancemaker'].price/Game.Objects['Chancemaker'].storedCps
    fractalEngine = Game.Objects['Fractal engine'].price/Game.Objects['Fractal engine'].storedCps
    javascriptConsole = Game.Objects['Javascript console'].price/Game.Objects['Javascript console'].storedCps
    idleverse = Game.Objects['Idleverse'].price/Game.Objects['Idleverse'].storedCps
    cortexBaker = Game.Objects['Cortex baker'].price/Game.Objects['Cortex baker'].storedCps
    you = Game.Objects['You'].price/Game.Objects['You'].storedCps


  },

});
