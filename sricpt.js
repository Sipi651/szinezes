const kepernyo=document.getElementById("kepernyo")
const pirosErtek=document.getElementById("pirosErtek")
const pirosCsuszka=document.getElementById("pirosCsuszka")

const zoldErtek=document.getElementById("zoldErtek")
const zoldCsuszka=document.getElementById("zoldCsuszka")

const kekErtek=document.getElementById("kekErtek")
const kekCsuszka=document.getElementById("kekCsuszka")

pirosCsuszka.addEventListener('input', function(){
    pirosErtek.textContent=pirosCsuszka.value;
    szinezAt();
})

zoldCsuszka.addEventListener('input', function(){
    zoldErtek.textContent=zoldCsuszka.value;
    szinezAt();
})

kekCsuszka.addEventListener('input', function(){
    kekErtek.textContent=kekCsuszka.value;
    szinezAt();
})

function szinezAt(){
    const r=pirosCsuszka.value
    const g=zoldCsuszka.value
    const b=kekCsuszka.value
    kepernyo.style.backgroundColor=`rgb(${r},${g},${b})`
}