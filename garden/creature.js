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
            return html;
}

function addCreatureToDOM(creature) {
  const html = renderCreature(creature);
  $("#creatureList").append(html);
  debugger;
}

function isCreatureValid(creature) {
    if (creature.name === "") return false;
    if (creature.name.length > 12) return false;
    if (isNaN(creature.eyesNum) || creature.eyesNum > 5) return false;
    return true;
}

function clearForm() {
    $("#crName").val("")
    $("#crColor").val("#68e0e8")
    $("#crEyesNum").val("")
    $("#crSize").val("")
}

$("#summon").click(
    function () {

        const newCreature = getCreatureFromForm();
        //do checks, exit function if something is wrong
        if (isCreatureValid(newCreature) == false) {
        return;
        }
        addCreatureToDOM(newCreature);
    });

    