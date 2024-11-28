let turnoP1 = true;
const celdas = document.getElementsByClassName("celda")

for(let i = 0;i < celdas.length;i++){
    celdas[i].addEventListener("click",movimiento);

}
function movimiento(e){
    let valorCelda = e.target.innerHTML
    if (!valorCelda){
        e.target.innerHTML = turnoP1? "X": "O";
        turnoP1 = !turnoP1
        revision(0,1,2)
        revision(3,4,5)
        revision(6,7,8)
        revision(0,3,6)
        revision(1,4,7)
        revision(2,5,8)
        revision(0,4,8)
        revision(2,4,6)

        
    }
}
function revision(c1,c2,c3){
  if(
    celdas[c1].innerHTML.length && 
    celdas[c1].innerHTML = celdas[c2]
  )
}