"use strict";

function addItem() {
    alert("add按钮编写中");
    return void 0;
}

function removeItem() {
    alert("remove按钮编写中");
    return void 0;
}

(function main() {
    switch (document.body.className) {
        case "index":
            let addBtn = document.querySelector(".add");
            let removeBtn = document.querySelector(".remove");
            addBtn.onclick = addItem;
            removeBtn.onclick = removeItem;
            break;
        case "setting":
            break;
        case "achvs":
            break;
    }
    return void 0;
}());
