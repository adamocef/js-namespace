var cefa0007 = {
    init: function () {
        var adamoDiv = document.createElement("div");
        adamoDiv.classList.add("box");
        adamoDiv.textContent = "cefa0007";
        var myBox = document.querySelector("#boxes");
        adamoDiv.addEventListener("click",cefa0007.boxClicked);
        adamoDiv.addEventListener("mouseover",cefa0007.boxMouseOver);
        adamoDiv.addEventListener("mouseout",cefa0007.boxMouseOut);
        
        myBox.appendChild(adamoDiv);
    },
    boxClicked : function (ev) {
        ev.currentTarget.style.borderColor = "blue";
        ev.currentTarget.style.backgroundColor = "green";
    },
    boxMouseOver: function (ev) {
        ev.currentTarget.classList.toggle("highlight");
    },
    boxMouseOut: function (ev) {
        ev.currentTarget.classList.toggle("highlight");
    }
}



