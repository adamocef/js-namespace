var CEFA0007 = {
    init: function () {
        let adamoDiv = document.createElement("div");
        adamoDiv.classList.add("box");
        adamoDiv.textContent = "cefa0007";
        let myBox = document.querySelector("#boxes");
        adamoDiv.addEventListener("click",CEFA0007.boxClicked);
        adamoDiv.addEventListener("mouseover",CEFA0007.boxMouseOver);
        adamoDiv.addEventListener("mouseout",CEFA0007.boxMouseOut);
        
        myBox.appendChild(adamoDiv);
    },
    boxClicked : function (ev) {
        ev.currentTarget.style.borderColor = "#00DE00";
        ev.currentTarget.style.backgroundColor = "#FF5543";
    },
    boxMouseOver: function (ev) {
        ev.currentTarget.classList.toggle("highlight");
    },
    boxMouseOut: function (ev) {
        ev.currentTarget.classList.toggle("highlight");
    }
}

