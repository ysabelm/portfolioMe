filterSelection("all")

function filterSelection(c) {
    let filter, i;
    filter = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    for (i = 0; i < filter.length; i++) {
        RemoveClass(filter[i], "show");
        if (filter[i].className.indexOf(c) > -1) AddClass(filter[i], "show");
    }
}

function AddClass(element, name) {
    let i, array1, array2;
    array1 = element.className.split(" ");
    array2 = name.split(" ");
    for (i = 0; i < array2.length; i++) {
        if (array1.indexOf(array2[i]) == -1) {
            element.className += " " + array2[i];
        }
    }
}

function RemoveClass(element, name) {
    let i, array1, array2;
    array1 = element.className.split(" ");
    array2 = name.split(" ");
    for (i = 0; i < array2.length; i++) {
        while (array1.indexOf(array2[i]) > -1) {
            array1.splice(array1.indexOf(array2[i]), 1);
        }
    }
    element.className = array1.join(" ");
}

// Add active class to the current button (highlight it)
const btnContainer = document.getElementById("myBtnContainer");
const btns = btnContainer.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        const current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}