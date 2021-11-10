class Person {
    name;
    color;
    number;

    constructor(name, color, number) {
        this.name = name;
        this.color = color;
        this.number = number;
    }
    toTableRow() {
        let tr = "<tr>";
        tr += `<td>${this.name}</td>`;
        tr += `<td>${this.color}</td>`;
        tr += `<td>${this.number}</td>`;
        tr += "</tr>";
        return tr;
    }
}

let dbDataClass = [
    new Person("Scott", "blue", 4),
    new Person("Todd", "green", 2),
    new Person("Matt", "black", 3),
    new Person("Ash", "brown", 6),
    new Person("Fred", "gray", 7),
    new Person("Patty", "pink", 9)
]
const loaded = () => {
    let tbody = document.getElementById("tbody");
    for(let row of dbDataClass) {
        let tr = row.toTableRow();
        tbody.innerHTML += tr;
    }
}
/*const loaded = () => {
    let tbody = document.getElementById("tbody");
    for(let row of dbData) {
        let tr = "<tr>";
        tr += `<td>${this.name}</td>`;
        tr += `<td>${this.color}</td>`;
        tr += `<td>${this.number}</td>`;
        tr += "</tr>";
        tbody.innerHTML += tr;
    }
}*/





let dbData = [
    { name: "Abe", color: "black", number: 13},
    { name: "Todd", color: "green", number: 8},
    { name: "Scott", color: "orange", number: 92},
    { name: "Joel", color: "royal blue", number: 32},
    { name: "Chante", color: "maroon", number: 66},
    { name: "Dan", color: "green", number: 1},
    { name: "Elyse", color: "apathy", number: 2}

]




const add = () => {
    let operanda = +document.getElementById("opa").value;
    let operandb = +document.getElementById("opb").value;
    let answer = operanda + operandb;
    document.getElementById("ans").value = answer;
    document.getElementById("ans").style.color="black";
    document.getElementById("lbl").innerHTML = "<b>Addition</b>";
    document.getElementById("lbl").style.color="black";
    console.log(answer);
}
const sub = () => {
    let operanda = +document.getElementById("opa").value;
    let operandb = +document.getElementById("opb").value;
    let answer = operanda - operandb;
    document.getElementById("ans").value = answer;
    document.getElementById("ans").style.color="red";
    document.getElementById("lbl").innerText = "Subtraction";
    document.getElementById("lbl").style.color="red";
    console.log(answer);
}
const multi = () => {
    let operanda = +document.getElementById("opa").value;
    let operandb = +document.getElementById("opb").value;
    let answer = operanda * operandb;
    document.getElementById("ans").value = answer;
    document.getElementById("ans").style.color="green";
    document.getElementById("lbl").innerText = "Mutiplication";
    document.getElementById("lbl").style.color="green";
    console.log(answer);
}
const div = () => {
    let operanda = +document.getElementById("opa").value;
    let operandb = +document.getElementById("opb").value;
    let answer = operanda / operandb;
    document.getElementById("ans").value = answer;
    document.getElementById("ans").style.color="blue";
    document.getElementById("lbl").innerText = "Divition";
    document.getElementById("lbl").style.color="blue";
    console.log(answer);
}
const rim = () => {
    let operanda = +document.getElementById("opa").value;
    let operandb = +document.getElementById("opb").value;
    let answer = operanda % operandb;
    document.getElementById("ans").value = answer;
    document.getElementById("ans").style.color="purple";
    document.getElementById("lbl").innerText = "Remainder";
    document.getElementById("lbl").style.color="purple";
    console.log(answer);
}
