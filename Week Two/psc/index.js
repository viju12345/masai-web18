// https://swapi.dev/api/people/?search=${query}
// http https://swapi.dev/api/people/?search=${query}

async function getdata() {
    let query = document.getElementById("query").value
    let url = "https://swapi.dev/api/people/35/";
    let res = await fetch(url);
    let data = await res.json();
    console.log(data)
    return data.result;

}

function append() {
    let container = document.getElementById("result")
    container.innerHTML = null;
    data.foreach(function (el) {
        let p = document.createElement("p")
        p.innerText = el.name


        container.append(p);
    })
}
async function main() {
    let data = await getdata();
    append(data);
}

function debouncing(func, delay) {
    if (id) {
        clearTimeout(id)
    }
    let id = setTimeout(function () {
        func();
    }, delay);
}