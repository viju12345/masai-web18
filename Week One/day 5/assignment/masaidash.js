function append() {
    let data = JSON.parse(localStorage.getItem("studentobj"))
    console.log(data)
    data.forEach(function (elem, index) {
        var tr = document.createElement("tr")

        var td1 = document.createElement("td")
        var img = document.createElement("img")
        img.setAttribute("src", elem.image)
        td1.append(img)

        var td2 = document.createElement("td")
        td2.innerText = elem.name

        var td3 = document.createElement("td")
        td3.innerText = elem.unit

        var td4 = document.createElement("td")
        td4.innerText = elem.batch

        var td5 = document.createElement("td")
        td5.innerText = elem.course

        var td6 = document.createElement("td")
        td6.innerText = "Remove"
        td6.addEventListener("click", function () {
            remove(index)
        })

        tr.append(td1, td2, td3, td4, td5, td6)
        document.querySelector("#tbody").append(tr)

    })
}
append()

function remove(index) {
    let data = JSON.parse(localStorage.getItem("studentobj"))
    let newdata = data.filter((elem, i) => {
        if (i === index) {
            let trash = JSON.parse(localStorage.getItem("trash")) || [];
            trash.push(elem)
            localStorage.setItem("trash", JSON.stringify(trash))
        }
        else {
            return i !== index;
        }
        localStorage.setItem("studentobj", JSON.stringify(newdata))
        console.log(newdata)
    })
}


