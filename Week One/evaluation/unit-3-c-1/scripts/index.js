//store the products array in localstorage as "products"
function product(t, d, p, i) {
    this.type = t;
    this.desc = d;
    this.price = p;
    this.image = i;
}
function products() {
    event.preventDefault()
    let form = document.getElementById("products");
    let type = form.type.value;
    let desc = form.desc.value;
    let price = form.price.value;
    let image = form.image.value;

    let pro1 = new product(type, desc, price, image)
    console.log(pro1)
}
