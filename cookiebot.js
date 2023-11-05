
    var bob=20;
    var cursor=0;
    var grandma=0;
    var farm=0;
    var mine=0;
    var factory=0;
    var bank=0;
    var temple=0;
    var wizardTower=0;
    var shipment=0;
    var alchemyLab=0;
    var portal=0;
    var timeMachine=0;
    var antimatterCondenser=0;
    var prism=0;
    var chancemaker=0;
    var fractalEngine=0;
    var javascriptConsole=0;
    var idleverse=0;
    var cortexBaker=0;
    var you=0;
    var next=" "

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
    let bob=0
    let cursor = Game.Objects['Cursor'].price/Game.Objects['Cursor'].storedCps
    Game.ClickCookie()

    let grandma = Game.Objects['Grandma'].price/Game.Objects['Grandma'].storedCps
    let farm = Game.Objects['Farm'].price/Game.Objects['Farm'].storedCps
    let mine = Game.Objects['Mine'].price/Game.Objects['Mine'].storedCps
    let factory = Game.Objects['Factory'].price/Game.Objects['Factory'].storedCps
    let bank = Game.Objects['Bank'].price/Game.Objects['Bank'].storedCps


  },

});
