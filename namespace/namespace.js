var Cefa0007 = {

    init: function () {

    var box = document.createElement("div");
    box.className = "box";
    box.textContent = "cefa0007";
    document.getElementById("boxes").appendChild(box);

    box.addEventListener("mouseover", Cefa0007.mouse);
    box.addEventListener("mouseout", Cefa0007.mouse);
    box.addEventListener("click", Cefa0007.click) 
    },

    mouse: function(ev){
    ev.currentTarget.classList.toggle("highlight");
    },
        
    click: function(ev){
    ev.currentTarget.style.backgroundColor = "green";
    ev.currentTarget.style.borderColor = "blue";
    },
    
    };
