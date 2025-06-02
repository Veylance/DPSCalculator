const comp_inDmg        = document.getElementById("dps-inDmg");
const comp_inAtkSpd     = document.getElementById("dps-inAtkSpd");
const compBtn_Calculate = document.getElementById("btn-Calculate");
const comp_outTable     = document.getElementById("dps-outTable");

compBtn_Calculate.addEventListener("click", (event) => {
    this.appendDPS();
});

function calculateDPS(seconds) {
    return parseFloat((comp_inAtkSpd.value * comp_inDmg.value) * seconds);
}

function appendDPS() {
    let tr          = document.createElement("tr");
    let outTD       = {
        stats:      document.createElement("td"),
        o1s:        document.createElement("td"),
        o5s:        document.createElement("td"),
        o10s:       document.createElement("td"),
        o30s:       document.createElement("td"),
        o60s:       document.createElement("td")
    }

    // Append the <td> elements to the <tr>
    Object.keys(outTD).forEach((key) => {
        tr.appendChild(outTD[key]);
    });

    // Add content to the <td> elements
    outTD.stats.innerHTML = "D: " + comp_inDmg.value + " / AS: " + comp_inAtkSpd.value;
    outTD.o1s.innerHTML   = this.calculateDPS(1).toFixed(2);
    outTD.o5s.innerHTML   = this.calculateDPS(5).toFixed(2);
    outTD.o10s.innerHTML  = this.calculateDPS(10).toFixed(2);
    outTD.o30s.innerHTML  = this.calculateDPS(30).toFixed(2);
    outTD.o60s.innerHTML  = this.calculateDPS(60).toFixed(2);

    // Append the <tr> to the output table
    comp_outTable.appendChild(tr);
}