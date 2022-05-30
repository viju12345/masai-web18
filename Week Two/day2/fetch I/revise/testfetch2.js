
// let x = fetch();
// console.log(x);


const url = "https://reqres.in/api/users";
// let x = fetch(url)
// // console.log(x)

// x.then(function (res) {
//     return (res.json())
// })
//     .then(function (res) {
//         console.log(res.data)
//     })
//     .catch(function (err) {
//         console.log(err)
//     })

async function ram() {
    try {
        let jawab = await fetch(url);
        let print = await jawab.json();
        append(print.data)
        console.log(print.data)
    }
    catch (err) {
        console.log(err)
    }

}
ram();




function append(data) {
    let bag = document.getElementById("cont")
    data.forEach(function (el) {
        let photo = document.createElement("img");
        photo.src = el.avatar;

        let name = document.createElement("h2")
        name.innerText = el.first_name;

        let email = document.createElement("p")
        email.innerText = el.email;

        let box = document.createElement("div");
        box.append(photo, name, email)



        bag.append(box);
    });
}










