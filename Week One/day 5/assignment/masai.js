function student(n, u, b, c, i) {
    this.name = n;
    this.unit = u;
    this.batch = b;
    this.course = c;
    this.image = i;
}


function storedata(event) {
    event.preventDefault()
    let form = document.getElementById("form")
    let name = form.name.value
    let unit = form.unit.value
    let batch = form.batch.value
    let course = form.course.value
    let image = form.img.value

    let st = new student(name, unit, batch, course, image)
    // console.log(st)
    let data = JSON.parse(localStorage.getItem("studentobj")) || [];
    data.push(st);
    localStorage.setItem("studentobj", JSON.stringify(data))
    window.location.href = ("masaidash.html")

}

let data = JSON.parse(localStorage.getItem("studentobj")) || [];

function calculate() {

}