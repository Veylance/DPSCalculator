const comp_inDmg        = document.getElementById("dps-inDmg");
const comp_inAtkSpd     = document.getElementById("dps-inAtkSpd");
const compBtn_Calculate = document.getElementById("btn-Calculate");
const comp_outTable     = {
    o1s: document.getElementById("dps-out1s"),
    o5s: document.getElementById("dps-out5s"),
    o10s: document.getElementById("dps-out10s"),
    o30s: document.getElementById("dps-out30s"),
    o60s: document.getElementById("dps-out60s")
};

compBtn_Calculate.addEventListener("click", (event) => {
    let dps = comp_inDmg.value / comp_inAtkSpd.value;
    
    comp_outTable.o1s.innerHTML = dps.toFixed(2);
    comp_outTable.o5s.innerHTML = (dps * 5).toFixed(2);
    comp_outTable.o10s.innerHTML = (dps * 10).toFixed(2);
    comp_outTable.o30s.innerHTML = (dps * 30).toFixed(2);
    comp_outTable.o60s.innerHTML = (dps * 60).toFixed(2);
});