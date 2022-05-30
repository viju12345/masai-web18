

const link = "https://fakestoreapi.com/products"

async function bapu() {
    try {
        let jawab = await fetch(link)
        let saman = await jawab.json()
        append(saman)
        console.log(saman);
    }
    catch (err) {
        console.log(err);
    }
}
bapu();


function append(data) {
    let dabba = document.getElementById("container")
    data.forEach(function (elem, index) {
        let photo = document.createElement("img")
        photo.src = elem.image;

        let para = document.createElement("p")
        para.innerText = elem.title;

        let box = document.createElement("div")
        box.append(photo, para)

        dabba.append(box)
    });
}








