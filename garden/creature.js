//memorize all creatures in array

let allCreatures = []

//main add click handler
//create creature objects based on form inputs
//prepare an html for a single creature
//safety check-ups
//prnt single creature on a page
//add creature to the memory
//reset the form

function getCreatureFromForm() {

    const freshCreature = {
        name: $("#crName").val(),
        color: $("#crColor").val(),
        eyesNum: $("#crEyesNum").val(),
        size: $("#crSize").val()
    };

    return freshCreature;
};

async function getRandomName() {

    const response = await fetch(
        "https://api.gofakeit.com/funcs/petname",
        { method: "GET", });

    const nameRandom = await response.text();
    console.log("Got name:", nameRandom);
    return nameRandom;
};

async function getRandomColor() {

    const response = await fetch(
        "https://api.gofakeit.com/funcs/hexcolor",
        { method: "GET", });

    const colorRandom = await response.text();
    console.log("Got color:", colorRandom);
    return colorRandom;
};

async function randomizeCreature() {
    const eyesRandom = Math.floor(Math.random() * 5) + 1;
    const nameRandom = await getRandomName();
    const colorRandom = await getRandomColor();
    const sizeRandom = "Large";

    const randomCreature = {
        name: nameRandom,
        color: colorRandom,
        size: sizeRandom,
        eyeNum: eyesRandom
    };
    console.log("Creature here", randomCreature)
    return randomCreature;

};

function renderCreature(creature) {
    let crEyesHTML = "";
    for (let i = 0; i < creature.eyesNum; i++) {
        crEyesHTML = crEyesHTML + "<div class='eye'></div>";
    };
    const html =
        `<div class="creature">
                <div class = ${creature.size} style="background-color: ${creature.color}">${crEyesHTML}
                </div>
                <div class="creature-info">
                ${creature.name}
                </div>
            </div>`;
            console.log(html);
            console.log(creature);
    return html;
};

function addCreatureToDOM(creature) {
    const html = renderCreature(creature);
    $("#creatureList").append(html);
};

function isCreatureValid(creature) {
    if (creature.name === "") return false;
    if (creature.name.length > 12) return false;
    if (isNaN(creature.eyesNum) || creature.eyesNum > 5) return false;
    return true;
};

function clearForm() {
    $("#crName").val("")
    $("#crColor").val("#68e0e8")
    $("#crEyesNum").val("")
    $("#crSize").val("")
};

$("#summon").click(
    async function () {

        let newCreature;
        if ($("#crRandom").is(':checked')) {
            newCreature = await randomizeCreature();
        }
        else {
            newCreature = getCreatureFromForm();
        }
        if (isCreatureValid(newCreature) == false) {
            return;
        }

        allCreatures.push(newCreature);
        addCreatureToDOM(newCreature);
        clearForm();
        debugger;
    });
    

