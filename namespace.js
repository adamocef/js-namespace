var
CEFA0007 = {
    init: function(){
        console.log("script in PROF3SSORST3V3 called");
    }
};

var b = document.querySelector('body');
var m = document.querySelector('main');
var d = document.querySelector('div');
var p = document.querySelector('p');

//can put false at the end of gold to make colours come towards to  where you clicked

// 

m.addEventListener("click",toggleGoldm);
m.addEventListener("mouseover",toggleGoldm);
d.addEventListener("mouseout",toggleGoldd);

d.addEventListener("click",toggleGoldd);
d.addEventListener("mouseover",toggleGoldd);
d.addEventListener("mouseout",toggleGoldd);



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
  let cls = classes [num];
  ev.currentTarget.classList.toggle(cls);
}

var a =document.querySelector('a');
a.addEventListener("mouseover",function(ev){

});




