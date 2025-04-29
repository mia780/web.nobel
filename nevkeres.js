function keresesNev(){
    let benev=document.getElementById("belNev").value
    fetch("https://api.nobelprize.org/v1/prize.json")
    .then(x => x.json())
    .then(y =>nevMegjelenit(y,benev) )



}
function nevmegjelenit(benev){
    for (const elem of y.prizes) {
        for (const alelem of elem.laureates) {
            if (elem.laureates!=undefined)
            if (elem.firstname==benev){
                console.log(alelem.firstname)
            }
            
        }
        else
    console.log(elem.year+" "+elem.category)
    }

}
