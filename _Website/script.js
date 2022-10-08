document.getElementById("button").addEventListener("click", () => {
    var tableBody = document.getElementsByTagName("tbody");

    var row = document.createElement("tr");
    var fName = document.createElement("td");
    var lName = document.createElement("td");

    fName.innerHTML = document.getElementById("firstName").value;
    lName.innerHTML = document.getElementById("lastName").value;

    row.appendChild(fName);
    row.appendChild(lName);

    tableBody[0].appendChild(row);
})