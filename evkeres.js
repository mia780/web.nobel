fetch("https://api.nobelprize.org/v1/prize.json")
.then(x=>x.json)
.then(y=>
{
    letc = category.prizes[0].year;

    for (let i = c; i >= 1500; i--) {
        sz += `<option>${i}</option>`;
    }
)
}
    

    
function kereses(){
    let beEv=document.getElementById("beEv").value 
    fetch("https://api.nobelprize.org/v1/prize.json")
    .then(x=>x.json())
    .then(y=>{
        let sz=""
        
        y.prizes.forEach(elem => {
            //console.log(elem)
            if (elem.year==beEv)
            {
                sz+=`
                <p style="font-size:20px;text-decoration:underline;color:blue">
                ${elem.year} ${elem.category}
                </p>
                `
                for (const elemEmber of elem.laureates) {
                    sz+=`
                    <p style="font-size:15px;font-style:italic">
                    ${elemEmber.firstname} ${elemEmber.surname}
                    </p>
                    <p style="font-size:10px">
                    ${elemEmber.motivation}
                    </p>
                    `
                }
                sz+=`<hr>`
            }
            
        });
        if (sz=="")
            sz+="Nincs találat."
        document.getElementById("kiadat").innerHTML=sz
    })
}