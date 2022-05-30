// Add the coffee to local storage with key "coffee"
const url = "https://masai-mock-api.herokuapp.com/coffee/menu"

async function getdata() {

    try {
        let res = await fetch(url);
        let coffees = await res.json();

        console.log(coffees.menu.data)
        append(coffees.menu.data)
    }
    catch (err) {
        console.log(err)
    }

}
getdata();


function append(data) {
    let bag = document.getElementById("menu")

    data.forEach(function (elem, index) {
        let img = document.createElement("img")
        img.src = elem.image;

        let n = document.createElement("h4")
        n.innerText = "Id: " + elem.id

        let detail = document.createElement("p")
        detail.innerText = "detail: " + elem.description;

        let p = document.createElement("p")
        p.innerText = "Name: " + elem.ingredients[0]

        let title = document.createElement("p")
        title.innerText = "Type: " + elem.title;

        let price = document.createElement("h3")
        price.innerText = "Price: " + elem.price;

        let button = document.createElement("button")
        button.innerText = "Add in bucket"

        let box = document.createElement("div")
        box.append(img, n, detail, p, title, price, button)

        bag.append(box)

    })

}

function datastore() {
    var data = localStorage.setItem(JSON.stringify("coffee", "data"))
    console.log(data)
}
datastore()



// var out = JSON.parse(localStorage.getItem(""))
// console.log(store)