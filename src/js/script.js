// MARK: Variable for Elements
const comp_inDmg        = document.getElementById("dps-inDmg");
const comp_inAtkSpd     = document.getElementById("dps-inAtkSpd");
const comp_marker       = {
    custom: document.getElementById("dps-isNone"),
    atk:    document.getElementById("dps-isAtk"),
    spd:    document.getElementById("dps-isSpd")
};
const compBtn_Calculate = document.getElementById("btn-Calculate");
const comp_outTable     = document.getElementById("dps-outTable");

// MARK: Input Decimal Points
// Add change event to keep input fields value with decimal point
comp_inDmg.addEventListener("change", () => {
    if (comp_inDmg.value % 1 == 0) comp_inDmg.value = parseFloat(comp_inDmg.value).toFixed(1);
});
comp_inAtkSpd.addEventListener("change", () => {
    if (comp_inAtkSpd.value % 1 == 0) comp_inAtkSpd.value = parseFloat(comp_inAtkSpd.value).toFixed(1);
});
// Initially trigger input change events
comp_inDmg.dispatchEvent(new Event("change"));
comp_inAtkSpd.dispatchEvent(new Event("change"));

// MARK: Submit Functionality
compBtn_Calculate.addEventListener("click", () => {
    this.appendDPS();
});

// MARK: DPS Calculation
function calculateDPS(seconds, decimalPoints = 2) {
    return parseFloat((comp_inAtkSpd.value * comp_inDmg.value) * seconds).toFixed(decimalPoints);
}

// MARK: Append Table Row
// Comes with populated data
function appendDPS() {
    let tr          = document.createElement("tr");
    let outTD       = {
        stats:      document.createElement("td"),
        o1s:        document.createElement("td"),
        o5s:        document.createElement("td"),
        o10s:       document.createElement("td"),
        o30s:       document.createElement("td"),
        o60s:       document.createElement("td"),
        notes:      document.createElement("td")
    }
    let inNotes     = document.createElement("textarea");

    // Append the <td> elements to the <tr>
    Object.keys(outTD).forEach((key) => {
        tr.appendChild(outTD[key]);
    });

    // Customize Highlight
    if (comp_marker.atk.checked) tr.classList.add("stats-modAtk");
    if (comp_marker.spd.checked) tr.classList.add("stats-modSpd");
    comp_marker.custom.checked = true; // Reset the marker for row type

    // Add content to the <td> elements
    outTD.stats.innerHTML = parseFloat(comp_inDmg.value).toFixed(2) + " / " + parseFloat(comp_inAtkSpd.value).toFixed(2);
    outTD.o1s.innerHTML   = this.calculateDPS(1);
    outTD.o5s.innerHTML   = this.calculateDPS(5);
    outTD.o10s.innerHTML  = this.calculateDPS(10);
    outTD.o30s.innerHTML  = this.calculateDPS(30);
    outTD.o60s.innerHTML  = this.calculateDPS(60);
    // Extra column for notes
    outTD.notes.appendChild(inNotes);
    inNotes.classList.add("form-control");

    // Append the <tr> to the output table
    comp_outTable.appendChild(tr);
}