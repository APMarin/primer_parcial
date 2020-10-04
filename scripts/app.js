function turnOnOff()
{
    var image = document.getElementById("pTable1");
    if (image.src.match("pool1")) {
    image.src = "images/pool0.png";
    }else {
    image.src = "images/pool1.png";
  }

  if(image.src.match("pool1")){
      var mon = 0;
      t = setInterval(function(){
      mon = mon + 0.0138;
      n = mon.toFixed(2)
      document.getElementById("total0").innerHTML = n;
    }, 1000);

    function checkTime(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }
    
    function startTime() {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      m = checkTime(m);
      s = checkTime(s);
      document.getElementById('sTime0').innerHTML = "Start time: " + h + ":" + m + ":" + s;
      r = setTimeout(function() {
        startTime()
      }, 500);
    }
    startTime();
  }else{
    clearInterval(t);
    clearInterval(r);
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    document.getElementById("eTime0").innerHTML = "End time: " + h + ":" + m + ":" + s;
  }  
}

function turnOnOff1()
{
    var image = document.getElementById("pTable2");
    if (image.src.match("pool1")) {
    image.src = "images/pool0.png";
    }else {
    image.src = "images/pool1.png";
  }

  if(image.src.match("pool1")){
      var mon = 0;
      q = setInterval(function(){
      mon = mon + 0.0138;
      n = mon.toFixed(2)
      document.getElementById("total1").innerHTML = n;
    }, 1000);

    function checkTime(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }
    
    function startTime() {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      m = checkTime(m);
      s = checkTime(s);
      document.getElementById('sTime1').innerHTML = "Start time: " + h + ":" + m + ":" + s;
      w = setTimeout(function() {
        startTime()
      }, 500);
    }
    startTime();
  }else{
    clearInterval(q);
    clearInterval(w);
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    document.getElementById("eTime1").innerHTML = "End time: " + h + ":" + m + ":" + s;
  }  
}
        
function turnOnOff2()
{
    var image = document.getElementById("pTable3");
    if (image.src.match("pool1")) {
    image.src = "images/pool0.png";
    }else {
    image.src = "images/pool1.png";
  }

  if(image.src.match("pool1")){
      var mon = 0;
      a = setInterval(function(){
      mon = mon + 0.0138;
      n = mon.toFixed(2)
      document.getElementById("total2").innerHTML = n;
    }, 1000);

    function checkTime(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }
    
    function startTime() {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      m = checkTime(m);
      s = checkTime(s);
      document.getElementById('sTime2').innerHTML = "Start time: " + h + ":" + m + ":" + s;
      v = setTimeout(function() {
        startTime()
      }, 500);
    }
    startTime();
  }else{
    clearInterval(a);
    clearInterval(v);
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    document.getElementById("eTime2").innerHTML = "End time: " + h + ":" + m + ":" + s;
  }  
}

function turnOnOff3()
{
    var image = document.getElementById("pTable4");
    if (image.src.match("pool1")) {
    image.src = "images/pool0.png";
    }else {
    image.src = "images/pool1.png";
  }

  if(image.src.match("pool1")){
      var mon = 0;
      y = setInterval(function(){
      mon = mon + 0.0138;
      n = mon.toFixed(2)
      document.getElementById("total3").innerHTML = n;
    }, 1000);

    function checkTime(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }
    
    function startTime() {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      m = checkTime(m);
      s = checkTime(s);
      document.getElementById('sTime3').innerHTML = "Start time: " + h + ":" + m + ":" + s;
      u = setTimeout(function() {
        startTime()
      }, 500);
    }
    startTime();
  }else{
    clearInterval(y);
    clearInterval(u);
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    document.getElementById("eTime3").innerHTML = "End time: " + h + ":" + m + ":" + s;
  }  
}

function turnOnOff4()
{
    var image = document.getElementById("pTable5");
    if (image.src.match("pool1")) {
    image.src = "images/pool0.png";
    }else {
    image.src = "images/pool1.png";
  }

  if(image.src.match("pool1")){
      var mon = 0;
      o = setInterval(function(){
      mon = mon + 0.0138;
      n = mon.toFixed(2)
      document.getElementById("total4").innerHTML = n;
    }, 1000);

    function checkTime(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }
    
    function startTime() {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      m = checkTime(m);
      s = checkTime(s);
      document.getElementById('sTime4').innerHTML = "Start time: " + h + ":" + m + ":" + s;
      p = setTimeout(function() {
        startTime()
      }, 500);
    }
    startTime();
  }else{
    clearInterval(o);
    clearInterval(p);
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    document.getElementById("eTime4").innerHTML = "End time: " + h + ":" + m + ":" + s;
  }  
}

function turnOnOff5()
{
    var image = document.getElementById("pTable6");
    if (image.src.match("pool1")) {
    image.src = "images/pool0.png";
    }else {
    image.src = "images/pool1.png";
  }

  if(image.src.match("pool1")){
      var mon = 0;
      k = setInterval(function(){
      mon = mon + 0.0138;
      n = mon.toFixed(2)
      document.getElementById("total5").innerHTML = n;
    }, 1000);

    function checkTime(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }
    
    function startTime() {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      m = checkTime(m);
      s = checkTime(s);
      document.getElementById('sTime5').innerHTML = "Start time: " + h + ":" + m + ":" + s;
      l = setTimeout(function() {
        startTime()
      }, 500);
    }
    startTime();
  }else{
    clearInterval(k);
    clearInterval(l);
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    document.getElementById("eTime5").innerHTML = "End time: " + h + ":" + m + ":" + s;
  }  
}