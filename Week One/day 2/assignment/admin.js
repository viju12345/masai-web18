document.getElementById("add").addEventListener("click", addfun)
function addfun() {
    event.preventDefault()
    function amazon(n, c, i, p, g) {
        this.name = n;
        this.cotegory = c;
        this.image = i;
        this.price = p;
        this.gender = g;
    }

    var products = new amazon(N)
    console.log(products)
    var N = document.getElementById("name").innerHTML.value

}