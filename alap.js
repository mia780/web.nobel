fetch("https://api.nobelprize.org/v1/prize.json")
.then(x=>x.json())
.then(y=>megjelenit(y))

function megjelenit(y){
    console.log(y)
    let sz=""
    let sorszam=0
    for (const elem of y.prizes) {
        sz+=`
        <div>
        <div class="col-sm-3>
         </div>
         <di class="szegely data-bs-toggle="modal" data-bs-target="#myModal onclick="reszletkiir(${sorszam}})">
        <p>${elem.year}</p>
        <p>${elem.category}</p>
        </div>
        </div>
        <!-- Button to Open the Modal -->
        `
        sorszam++
    }

    document.getElementById("keret").innerHTML=sz


}
function reszletkiir(sorszam){
    console.log(sorszam)
}


