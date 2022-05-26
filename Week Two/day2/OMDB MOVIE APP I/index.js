const url = "http://www.omdbapi.com/?i=tt3896198&apikey=f2442b16";

async function moviedata() {

    let res = await fetch(url);
    let movies = await res.json();
    console.log(movies);
    append(movies);

}
moviedata();

function append(data) {
    let container = document.getElementById("container")

    let img = document.createElement("img")
    img.src = data.Poster;

    let name = document.createElement("h3")
    name.innerText = data.Title;

    let p1 = document.createElement("p")
    p1.innerText = data.Actors;

    let p2 = document.createElement("p")
    p2.innerText = data.Awards;

    let p3 = document.createElement("p")
    p3.innerText = data.Plot;

    let p4 = document.createElement("p")
    p3.innerText = data.Country;

    let div = document.createElement("div")
    container.append(div)

    div.append(img, name, p1, p2, p3, p4);


}