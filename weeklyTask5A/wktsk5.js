const mt = document.getElementById('meters');
const inch = document.getElementById('inches');
const fts = document.getElementById('feets');
const yrds = document.getElementById('yards');
mt.addEventListener("input", meterUnitConverter); //meter to other units
function meterUnitConverter(){
    //let meterC = e.target.value;
    //console.log(nairaC)
    document.getElementById('yards').value = mt.value*1.09361;
    document.getElementById('feets').value = mt.value*3.28084;
    document.getElementById('inches').value = mt.value*39.3701;
    
}
inch.addEventListener("input", inchUnitConverter); //Inches to other units
function inchUnitConverter(){
    //let meterC = e.target.value;
    //console.log(nairaC)
    document.getElementById('yards').value = inch.value*(1.09361/39.3701);
    document.getElementById('feets').value = inch.value*(3.28084/39.3701);
    document.getElementById('meters').value = inch.value*(1/39.3701);
    
}
fts.addEventListener("input", ftsUnitConverter); //feets to other units
function ftsUnitConverter(){
    //let meterC = e.target.value;
    //console.log(nairaC)
    document.getElementById('yards').value = fts.value*(1.09361/3.28084);
    document.getElementById('inches').value = fts.value*(39.3701/3.28084);
    document.getElementById('meters').value = fts.value*(1/3.28084);
    
}
yrds.addEventListener("input", yrdsUnitConverter); //yards to other units
function yrdsUnitConverter(){
    //let meterC = e.target.value;
    //console.log(nairaC)
    document.getElementById('feets').value = yrds.value*(3.28084/1.09361);
    document.getElementById('inches').value = yrds.value*(39.3701/1.09361);
    document.getElementById('meters').value = yrds.value*(1/1.09361);
    
}