let list = document.querySelector("ul");
let searchInput = document.querySelector(".search-input input");
let addInput = document.querySelector(".search-add input");
let button = document.querySelector(".search-add button");

list.addEventListener("click", (e) => {
    if (e.target.nodeName == "SPAN" && e.target.className == "delete") {
        e.target.parentNode.remove();
        if (list.children.length == 0) {
            let textErr = document.createElement("div");
            textErr.style.textAlign = "center";
            textErr.style.color = "#222";
            textErr.style.fontSize = "16px";
            list.style.boxShadow = "0 0 0";
            textErr.innerText = "your list is empty";
            textErr.id = "text-err";
            list.appendChild(textErr);
        };
    };
});


button.addEventListener("click", (e) => {
    e.preventDefault();
    if (!addInput.value) {
        return;
    }
    if (document.querySelector("#text-err")) {
        document.querySelector("#text-err").remove();
    }

    list.append(createListItem(addInput.value));
    addInput.value = "";
});

function createListItem(itemValue) {
    item = document.createElement("li");
    title = document.createElement("span");
    btn = document.createElement("span");

    item.className = "to-do-item";

    title.className = "title";
    title.innerText = itemValue;

    btn.className = "delete";
    btn.innerText = "Delete";

    item.appendChild(title);
    item.appendChild(btn);
    return item;
};

searchInput.addEventListener("input", (e) => {
    Array.from(list.children).forEach(element => {
        if (document.querySelector("text-err")) {
            return
        }
        if (element.querySelector(".title").innerText.toLowerCase().includes(e.target.value.toLowerCase())) {
            element.style.display = "flex";
        }else {
            element.style.display = "none";
        }
    });
});