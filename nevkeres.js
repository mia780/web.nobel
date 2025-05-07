Nobel-díjak
Anikó Várbíróné Nahaji
•
ápr. 14. (Szerkesztve: 11:40)
100 pont
https://api.nobelprize.org/v1/prize.json
nobel.jpg
Kép
alap.js
JavaScript
evkeres.html
HTML
evkeres.js
JavaScript
index.html
HTML
menu.js
JavaScript
nevkeres.html
HTML
nevkeres.js
JavaScript
stilus.css
CSS
Kurzusmegjegyzések
Saját feladat
Leadva
GitHub - mia780/web.nobel
https://github.com/mia780/web.nobel.git
Privát megjegyzések

function keresesNev(){
    let beNev=document.getElementById("beNev").value 
    fetch("https://api.nobelprize.org/v1/prize.json")
    .then(x=>x.json())
    .then(y=>nevMegjelenit(y,beNev))
}

function nevMegjelenit(y,beNev){
    let sz=`
     <table class="table table-striped">
    <thead>
      <tr>
        <th>Év,Kategória</th>
        <th>Keresztnév</th>
        <th>Vezetéknév</th>
        <th>Indok</th>
      </tr>
    </thead>
    <tbody>
      
   
  `
    for (const elem of y.prizes) {
        if (elem.laureates!=undefined)
            for (const alElem of elem.laureates) {
                
                if (alElem.firstname.toLowerCase().includes(beNev.toLowerCase()) || alElem.motivation.toLowerCase().includes(beNev.toLowerCase())  ){
                    console.log(alElem.firstname)
                    sz+=`
                    <tr>
                    <td>${elem.year} ${elem.category}</td>
                    <td>${alElem.firstname}</td>
                    <td>${alElem.surname}</td>
                    <td>${alElem.motivation}</td>
                    </tr>
                    `
                }
                // -------------------surname vizsgálata külön---------------------
                if (alElem.surname!=undefined && alElem.surname.toLowerCase().includes(beNev.toLowerCase())  ){
                    console.log(alElem.firstname)
                    sz+=`
                    <tr>
                    <td>${elem.year} ${elem.category}</td>
                    <td>${alElem.firstname}</td>
                    <td>${alElem.surname}</td>
                    <td>${alElem.motivation}</td>
                    </tr>
                    `
                }

        }
        else 
            console.log(elem.year+" "+elem.category)

    }


    sz+=` </tbody>
  </table>`
  document.getElementById("tablazat").innerHTML=sz
}


