var b = document.querySelector('body');
var m = document.querySelector('main');
var d = document.querySelector('div');
var p = document.querySelector('p');

//can put false at the end of gold to make colours come towards to  where you clicked

p.addEventListener("click",toggleGoldp,);
m.addEventListener("click",toggleGoldm);
d.addEventListener("click",toggleGoldd);
b.addEventListener("click",toggleGoldb);


function toggleGoldp(ev){
var classes = ['highlight','a','b','c'];
  var num =  Math.floor(Math.random()*4) ;
  var cls = classes [num];
  ev.currentTarget.classList.toggle(cls);
}


function toggleGoldm(ev){
  // ev.stopPropagation();
  // ev.stopImmediatePropagation();
  var classes = ['highlight','a','b','c'];
 var num =  Math.floor(Math.random()*4) ;
 var cls = classes [num];
  ev.currentTarget.classList.toggle(cls);
}



function toggleGoldd(ev){
  var classes = ['highlight','a','b','c'];
 var num =  Math.floor(Math.random()*4) ;
  var cls = classes [num];
  ev.currentTarget.classList.toggle(cls);
}



function toggleGoldb(ev){
  var classes = ['highlight','a','b','c'];
  var num =  Math.floor(Math.random()*4) ;
  var cls = classes [num];
  ev.currentTarget.classList.toggle(cls);
}

let a =document.querySelector('a');
a.addEventListener("click",function(ev){
  ev.preventDefault();
  alert('I know what you clicked last summer')
});


