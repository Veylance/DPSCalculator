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
    let inDps       = document.createElement("td");
    let o1s         = document.createElement("td");
    let o5s         = document.createElement("td");
    let o10s        = document.createElement("td");
    let o30s        = document.createElement("td");
    let o60s        = document.createElement("td");

    tr.appendChild(inDps);
    tr.appendChild(o1s);
    tr.appendChild(o5s);
    tr.appendChild(o10s);
    tr.appendChild(o30s);
    tr.appendChild(o60s);

    inDps.innerHTML = comp_inDmg.value + " / " + comp_inAtkSpd.value;
    o1s.innerHTML   = this.calculateDPS(1).toFixed(2);
    o5s.innerHTML   = this.calculateDPS(5).toFixed(2);
    o10s.innerHTML  = this.calculateDPS(10).toFixed(2);
    o30s.innerHTML  = this.calculateDPS(30).toFixed(2);
    o60s.innerHTML  = this.calculateDPS(60).toFixed(2);

    comp_outTable.appendChild(tr);
}