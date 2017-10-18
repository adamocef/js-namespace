var CEFA0007 = {
    init: function () {
        let adamoDiv = document.createElement("div");
        adamoDiv.classList.add("box");
        adamoDiv.textContent = "CEFA0007";
        let myBox = document.querySelector("#boxes");
        adamoDiv.addEventListener("click",CEFA0007.boxClicked);
        adamoDiv.addEventListener("mouseover",CEFA0007.boxMouseOver);
        adamoDiv.addEventListener("mouseout",CEFA0007.boxMouseOut);
        
        myBox.appendChild(adamoDiv);
    },
    boxClicked : function (ev) {
        ev.currentTarget.style.borderColor = "#FF1D00";
        ev.currentTarget.style.backgroundColor = "#06FF00";
    },
    boxMouseOver: function (ev) {
        ev.currentTarget.classList.toggle("highlight");
    },
    boxMouseOut: function (ev) {
        ev.currentTarget.classList.toggle("highlight");
    }
}

