// const { default: gsap } = require("gsap/all");

let input = document.getElementById("inp");
let button = document.getElementById("btn");
let mainArray = [];

let maintag = createEl("main", document.body, "main");
// let buttonlocal = document.getElementById("tst");

button.addEventListener("click", () => {
    let repeative = mainArray.find((element) => element.name === input.value);

    if (input.value.length !== 0 && !repeative) {
        pushMainArray(input.value, Math.floor(Math.random() * 100));
        input.value = "";
    } else {
        input.value = input.value;
        
        setTimeout(() => {
            input.style.transition = "all .67s";
            input.style.background = "#bf211e";
            input.style.fontSize = "20px";
        }, 50);
        confirm('you have it! please add another one')
        setTimeout(() => {
            input.style.background = "white";
            input.style.fontSize = "20px";
            input.value = "";
        }, 580);
    }
});

function pushMainArray(value, id) {
    mainArray.push({
        name: value,
        id: id,
        item: [],
    });

    try {
        setTimeout(() => {
            input.style.transition = "all .68s";
            input.style.background = "lightgreen";
            input.style.fontSize = "20px";
            input.value = "";
        }, 50);
        setTimeout(() => {
            input.style.background = "white";
            input.style.fontSize = "20px";
            input.value = "";
        }, 600);

        let card = createEl("div", document.body, "divCard"); // tag name - parent - class name

        let p = document.createElement("p");
        p.innerText = value;

        let inputArray = document.createElement("input");
        let buttonArray = document.createElement("button");
        let buttonArray2 = document.createElement("a");
        let divp = createEl("div", document.body, "divp");
        let divbtninput = createEl("div", document.body, "divbtninput");

        buttonArray.innerText = "Add Task";
        // buttonArray2.innerText = "R C";
        $(buttonArray2).append(
            `<svg fill="#db2955" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="22px" height="22px"><path d="M 10 2 L 9 3 L 5 3 C 4.4 3 4 3.4 4 4 C 4 4.6 4.4 5 5 5 L 7 5 L 17 5 L 19 5 C 19.6 5 20 4.6 20 4 C 20 3.4 19.6 3 19 3 L 15 3 L 14 2 L 10 2 z M 5 7 L 5 20 C 5 21.1 5.9 22 7 22 L 17 22 C 18.1 22 19 21.1 19 20 L 19 7 L 5 7 z M 9 9 C 9.6 9 10 9.4 10 10 L 10 19 C 10 19.6 9.6 20 9 20 C 8.4 20 8 19.6 8 19 L 8 10 C 8 9.4 8.4 9 9 9 z M 15 9 C 15.6 9 16 9.4 16 10 L 16 19 C 16 19.6 15.6 20 15 20 C 14.4 20 14 19.6 14 19 L 14 10 C 14 9.4 14.4 9 15 9 z"/></svg>`
        );

        // card.appendChild(p);
        divbtninput.appendChild(inputArray);
        divbtninput.appendChild(buttonArray);

        divp.appendChild(p);
        divp.appendChild(buttonArray2);
        card.appendChild(divp);
        card.appendChild(divbtninput);
        ///

        maintag.appendChild(card);

        buttonArray.addEventListener("click", () => {
            let findRepeatetive = mainArray.find((element) =>
                element.item.find((element) => element.task === inputArray.value)
            );

            if (inputArray.value.length !== 0 && !findRepeatetive) {
                let findObject = mainArray.find((element) => element.id === id);
                pushTaskArray(
                    findObject,
                    inputArray,
                    Math.floor(Math.random() * 100),
                    card
                ); ///<<-------????id //
            } else {
                setTimeout(() => {
                    inputArray.style.transition = "all .67s";
                    inputArray.style.background = "#bf211e";
                    inputArray.style.fontSize = "14px";
                }, 50);
                setTimeout(() => {
                    inputArray.style.background = "white";
                    inputArray.style.fontSize = "14px";
                    inputArray.value = "";
                }, 580);
            }
        });
        buttonArray2.addEventListener("click", () => {
            let findObject = mainArray.find((element) => element.id === id);
            ////update array when user clicks to remove card
            if (findObject.item.length === 0) {
                mainArray.splice(findObject, 1);
                card.remove();
            } else {
                alert("you have to delete tasks at first!");
                console.log("card is not empty!");
            }
        });
    } catch (error) {
        console.log(error);
    }
}

function pushTaskArray(findObject, inputArray, id, parent) {
    findObject.item.push({
        id: id,
        task: inputArray.value,
    });

    let card2 = document.createElement("div");
    card2.classList.add("littlecard");

    let buttonLittle1 = document.createElement("a");
    let buttonLittle2 = document.createElement("a");
    let buttonLittle3 = document.createElement("a");
    // let icon = document.createElement("i");
    // icon.classList.add(`fa fa-trash`)
    // buttonLittle2.appendChild(icon)
    let p1 = document.createElement("p");
    p1.innerText = inputArray.value;
    buttonLittle1.innerText = "";
    buttonLittle2.innerText = "";
    buttonLittle3.innerText = "";

    card2.appendChild(buttonLittle1);
    card2.appendChild(buttonLittle2);
    card2.appendChild(buttonLittle3);
    card2.appendChild(p1);
    // card2.appendChild(icon)
    $(buttonLittle2).append(
        `<img class="btnremove" src="./icons8-xbox-x-30.png"/>`
    );
    $(buttonLittle1).append(
        `<img class='btnmove' src="https://img.icons8.com/pastel-glyph/22/000000/move-right.png"/>`
    );
    $(buttonLittle3).append(
        `<img class="btnedit" src="https://img.icons8.com/windows/22/000000/edit--v3.png"/>`
    );

    parent.appendChild(card2);
    // findObject.item.splice(this.findTaskMove, 1);
    inputArray.value = "";
    buttonLittle3.addEventListener("click", () => {
        if (p1.style.display !== "none") {
            var newInput = document.createElement("input");
            newInput.value = p1.innerText;
            // p1.style.display = "none";
            card2.appendChild(newInput);
            var newButtonSave = document.createElement("button");
            newButtonSave.innerHTML = "Save";
            card2.appendChild(newButtonSave);
            p1.style.display = "none";

            newButtonSave.addEventListener("click", () => {
                p1.innerHTML = newInput.value;

                card2.removeChild(newInput);
                p1.style.display = "inline";
                card2.removeChild(newButtonSave);
                findObject.item.push({
                    id: id,
                    task: newInput.value,
                });
                let test2 = findObject.item.findIndex((element) => element.id === id);
                findObject.item.splice(test2, 1);
            });
        }
    });
    //

    // remove
    buttonLittle2.addEventListener("click", () => {
        var promtMessage = confirm("Are you sure to  delete!!?");
        if (promtMessage) {
            let test = findObject.item.findIndex((element) => element.id === id);
            console.log(test);
            findObject.item.splice(test, 1);

            card2.remove();
        }
        console.log(mainArray);
    });

    // move
    buttonLittle1.addEventListener("click", () => {
        if (mainArray.length !== 1) {
            p1.style.color = "blue";
            let findTaskMove = findObject.item.find((element) => element.id === id);
            x1 = prompt("Enter card number - card name ");
            let b = x1.split("-");

            let findCard = mainArray.find((element) => element.name === b[1]);
            console.log(findCard.name);

            console.log(findTaskMove);
            let findss = mainArray.findIndex(
                (element, i) => i === parseInt(b[0]) && element.name === b[1]
            );
            console.log(findss);
            mainArray.forEach((element, i) => {
                if (i === findss && element.name === b[1]) {
                    element.item.push(findTaskMove);
                    findObject.item.splice(findTaskMove, 1);
                    for (let index = 0; index < b[0]; index++) {
                        parent = parent.nextSibling;

                        parent.append(card2);
                    }

                    console.log(parent);
                }
            });
            console.log(mainArray);

            /////new try
            // let currentObject = mainArray.findIndex(
            //     (element) => element === findObject
            // );
            // console.log(currentObject);
            // let new2 = findObject.item.find((element) => element.id === id);
            // console.log(this.new2);
            // mainArray.forEach((element, i) => {
            //     if (i === currentObject + 1) {
            //         element.item.push(new2);
            //         findObject.item.splice(new2, 1);
            //         parent = parent.nextSibling;
            //         parent.append(card2);
            //         new2.currentObject = currentObject + 1;
            //         console.log(mainArray);
            //     }
            // });
            ////////////////
            // var result = mainArray
            //     .map((value) =>
            //         value.item.map((child) => ({
            //             parentId: value.id,
            //             task: child,
            //         }))
            //     )
            //     .flat();
            // console.log(result)
            ////////////////////////////////////////////
            //
            // pushTaskArray(
            //     findObject, { value: p1.innerText },
            //     id,
            //     parent.nextSibling
            // );
            // let currentCardObject = mainArray.findIndex(
            //     (element) => element === findObject
            // );
            // console.log(currentCardObject);
            // let findTaskMove = findObject.item.find((element) => element.id === id);
            // console.log(findTaskMove);
            // mainArray.forEach((element, index) => {
            //     if (index === currentCardObject + 1) {
            //         element.item.push(findTaskMove);
            //         // findObject.item.splice(findObject.item.indexOf(findTaskMove, 1));
            //         // currentCardObject++;
            //     }
            //     findObject.item.splice(findTaskMove, 1);
            // });
            // // var result = mainArray
            // //     .map((value) =>
            // //         value.item.map((child) => ({
            // //             parentId: value.id,
            // //             task: child,
            // //         }))
            // //     )
            // //     .flat();
            // // console.log(result);
            // card2.remove();
            // // delete findTaskMove;
            // console.log(mainArray);
            // console.log(parent.nextSibling);
            // if (this.parent === parent.nextSibling) {
            //     console.log(this);
            //     findObject.item.nextSibling.push(this);
            //     findObject.item.splice(this, 1);
            //     findObject.item.splice(findTaskMove, 1);
            // }
        }
    });
}
console.log(mainArray);

function createEl(tagName, parent, classNames) {
    let tag = document.createElement(tagName);
    tag.className = classNames;
    parent.appendChild(tag);
    return tag;
}