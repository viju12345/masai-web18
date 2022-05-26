
document.getElementById("orderfood").addEventListener("click", checkfun)
function checkfun() {
    event.preventDefault()
    // console.log("have you ckicked me ")


    function checkorder() {
        return true;
    }

    let order_promise = new Promise(function (resolve, reject) {
        let order = checkorder()
        setTimeout(function () {
            if (order) {
                resolve("order placed")
            }
            else {
                reject("error")
            }
        }, 1000);

    })
    console.log(order_promise)

    order_promise.then(function (value) {
        orderpic.src = "https://d30hko96l9xirl.cloudfront.net/media/2020/11/McDonalds-to-roll-out-new-McPlant-faux-meat-patty-next-year.jpg"
    })
    order_promise.then(function (value) {
        orderpic.src = "https://c.ndtvimg.com/2019-01/u8o6c0qg_mc-donalds_625x300_04_January_19.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886"
    })
    order_promise.then(function (value) {
        orderpic.src = "https://c.ndtvimg.com/2019-01/u8o6c0qg_mc-donalds_625x300_04_January_19.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886"
    })
    order_promise.then(function (value) {
        orderpic.src = "https://d30hko96l9xirl.cloudfront.net/media/2020/11/McDonalds-to-roll-out-new-McPlant-faux-meat-patty-next-year.jpg"
    })



}