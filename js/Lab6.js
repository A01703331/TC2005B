function validate(){
  let confirmtxt=document.getElementById("confirmtxt").value;
  let pswrdtxt=document.getElementById("pswrdtxt").value;
  if(pswrdtxt == "" & confirmtxt==""){
    window.alert("No password detected");
  }
  else if (pswrdtxt == "" || confirmtxt=="") {
    window.alert("All areas should be filled");
  }
  else if (pswrdtxt == confirmtxt) {
    window.alert("Passwords match")
  }
  else {
    window.alert("Passwords don't match");
  }
}

var x = 0;
var y = 0;
var z = 0;

function addA(){
  let voiceGoods = document.getElementById("Voice");
  x = x+1
  voiceGoods.innerHTML = x;
}

function addB(){
  let acrylicGoods = document.getElementById("Acrylic");
  y = y+1
  acrylicGoods.innerHTML = y
}

function addC(){
  let tapestryGoods = document.getElementById("Tapestry");
  z = z+1
  tapestryGoods.innerHTML = z
}

function remA(){
  let voiceGoods = document.getElementById("Voice");
  x = x-1
  voiceGoods.innerHTML = x;
}

function remB(){
  let acrylicGoods = document.getElementById("Acrylic");
  y = y-1
  acrylicGoods.innerHTML = y
}

function remC(){
  let tapestryGoods = document.getElementById("Tapestry");
  z = z-1
  tapestryGoods.innerHTML = z
}

function totals(){
  purchase = document.getElementById("Purchase");
  purchase.innerHTML = (x*10 + y*15 + z*20) + " Dollars (Tax included)"
}