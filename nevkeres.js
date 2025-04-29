function keresesNev() {
    let benev = document.getElementById("belNev").value;
    fetch("https://api.nobelprize.org/v1/prize.json")
        .then(response => response.json())
        .then(data => nevMegjelenit(data, benev));
}

function nevMegjelenit(data, benev) {
    let sz = `<table>
    <thead>
      <tr>
        <th>Év</th>
        <th>Kategória</th>
        <th>Keresztnév</th>
        <th>Vezetéknév</th>
        <th>Indoklás</th>
      </tr>
    </thead>
    <tbody>`;

    for (const elem of data.prizes) {
        if (elem.laureates !== undefined) {
            for (const alelem of elem.laureates) {
                if (alelem.firstname && alelem.firstname.toLowerCase() === benev.toLowerCase()) {
                    sz += `
                    <tr>
                        <td>${elem.year}</td>
                        <td>${elem.category}</td>
                        <td>${alelem.firstname}</td>
                        <td>${alelem.surname}</td>
                        <td>${alelem.motivation}</td>
                    </tr>`;
                }
            }
        }
    }

    sz += `</tbody></table>`;
    document.getElementById("eredmeny").innerHTML = sz;
}