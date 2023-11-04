var bob=10;
bob++;

Game.Loop=function()
{
  if (Game.timedout) return false;
  Timer.say('START');
  Timer.track('browser stuff');
  Timer.say('LOGIC');
  //update game logic !
  Game.catchupLogic=0;
  Game.Logic();
  Game.catchupLogic=1;
  
  var time=Date.now();
  
  
  //latency compensator
  Game.accumulatedDelay+=((time-Game.time)-1000/Game.fps);
  if (Game.prefs.timeout && time-Game.lastActivity>=1000*60*5)
  {
    if (Game.accumulatedDelay>1000*60*30) Game.delayTimeouts+=3;//more than 30 minutes delay? computer probably asleep and not making cookies anyway
    else if (Game.accumulatedDelay>1000*5) Game.delayTimeouts++;//add to timeout counter when we skip 10 seconds worth of frames (and the player has been inactive for at least 5 minutes)
    if (Game.delayTimeouts>=3) Game.Timeout();//trigger timeout when the timeout counter is 3+
  }
  
  Game.accumulatedDelay=Math.min(Game.accumulatedDelay,1000*5);//don't compensate over 5 seconds; if you do, something's probably very wrong
  Game.time=time;
  
  //if (Game.accumulatedDelay>=Game.fps) console.log('delay:',Math.round(Game.accumulatedDelay/Game.fps));
  while (Game.accumulatedDelay>0)
  {
    Game.Logic();
    Game.accumulatedDelay-=1000/Game.fps;//as long as we're detecting latency (slower than target fps), execute logic (this makes drawing slower but makes the logic behave closer to correct target fps)
  }
  Game.catchupLogic=0;
  Timer.track('logic');
  Timer.say('END LOGIC');
  /*
  if (!Game.prefs.altDraw)
  {
    var hasFocus=document.hasFocus();
    Timer.say('DRAW');
    if (hasFocus || Game.prefs.focus || Game.loopT%10==0) requestAnimationFrame(Game.Draw);
    //if (document.hasFocus() || Game.loopT%5==0) Game.Draw();
    Timer.say('END DRAW');
  }
  else requestAnimationFrame(Game.Draw);*/
  if (Game.visible) Game.Draw();
  
  //if (!hasFocus) Game.tooltip.hide();
  
  if (Game.sesame)
  {
    //fps counter and graph
    Game.previousFps=Game.currentFps;
    Game.currentFps=Game.getFps();
      var ctx=Game.fpsGraphCtx;
      ctx.drawImage(Game.fpsGraph,-1,0);
      ctx.fillStyle='rgb('+Math.round((1-Game.currentFps/Game.fps)*128)+',0,0)';
      ctx.fillRect(128-1,0,1,64);
      ctx.strokeStyle='#fff';
      ctx.beginPath();
      ctx.moveTo(128-1,(1-Game.previousFps/Game.fps)*64);
      ctx.lineTo(128,(1-Game.currentFps/Game.fps)*64);
      ctx.stroke();
    
    l('fpsCounter').textContent=Game.currentFps+' fps';
    var str='';
    for (var i in Timer.labels) {str+=Timer.labels[i];}
    if (Game.debugTimersOn) l('debugLog').style.display='block';
    else l('debugLog').style.display='none';
    l('debugLog').innerHTML=str;
    
  }
  Timer.reset();
  
  Game.loopT++;
  setTimeout(Game.Loop,1000/Game.fps);
}
}
