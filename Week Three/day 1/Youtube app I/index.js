const key = "AIzaSyAZ-kSbO2IcLIArmtFDxU_jA9OSlYF1r5o";

let find = async () => {
    let query = document.getElementById("search").value;
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${key}`
    let res = await fetch(url)
    let data = await res.json();
    append(data.items)
    console.log(data)
}

let append = (data) => {
    let cont = document.getElementById("cont")

    data.forEach(({ id: { videoId }, snippet: { title, thumbnails } }) => {
        // console.log(videoId)
        let box = document.createElement("div")

        let img = document.createElement("img")
        img.src = thumbnails.default.url;


        let name = document.createElement("h5")
        name.innerHTML = title

        box.append(img, name)


        let video = {
            title, videoId

        }

        box.onclick = () => {
            playvideo(video);

        }
        cont.append(box)



    })

    let playvideo = (video) => {


        localStorage.setItem("videos", JSON.stringify(video))
        window.location.href = "video.html"

    }

}
