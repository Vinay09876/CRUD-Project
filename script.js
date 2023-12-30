let addbtn = document.getElementById("addBtn");
let list = document.getElementById("listGroup");

addbtn.addEventListener("click", function (e) {
    if (list.children[0].classList == "emptyEle") {
        list.children[0].remove();
    }
    let currentBtn = e.currentTarget;
    let currrentInput = currentBtn.previousElementSibling;
    // let currentChapter = currrentInput.value;
    let newEle = document.createElement("li");
    // newEle.classList = "list-group-item";    newEle.className = "list-group-item d-flex justify-content-between"    newEle.innerHTML = `<h3 class="flex-grow-1">${currrentInput.value}</h3>    <button type="button" class="btn btn-warning mx-3" onclick="editBtn(this)">Edit</button>    <button type="button" class="btn btn-danger" onclick="removeBtn(this)">Remove</button>`

    list.appendChild(newEle);
    currrentInput.value = "";
    // let anotherEle = document.createElement("button");    // anotherEle.classList = "btn btn-success col-2";    // anotherEle.textContent = "Remove"    // newEle.appendChild(anotherEle)
    // anotherEle.addEventListener("click", function(e){    //     newEle.remove();    // })
})
function removeBtn(currElement) {
    currElement.parentElement.remove();
    let list = document.getElementById("listGroup");
    if (list.children.length <= 0) {
        let removeMsg = document.createElement("h4");
        removeMsg.textContent = "Nothing is here... Please add something";
        removeMsg.classList.add("emptyEle");
        removeMsg.style.marginTop = "150px"
        list.appendChild(removeMsg);
    }
}
function editBtn(currElement) {
    if (currElement.textContent == "Done") {
        currElement.textContent = "Edit"
        let currChapterName = currElement.previousElementSibling.value;
        let currInput = document.createElement("h3");
        currInput.className = "flex-grow-1"
        currInput.textContent = currChapterName;
        currElement.parentElement.replaceChild(currInput, currElement.previousElementSibling)
    } else {
        currElement.textContent = "Done"
        let currChapterName = currElement.previousElementSibling.textContent;
        let currInput = document.createElement("input");
        currInput.type = "text"
        currInput.placeholder = "Chapter name"
        currInput.className = "form-control"
        currInput.value = currChapterName
        currElement.parentElement.replaceChild(currInput, currElement.previousElementSibling)
    }
}