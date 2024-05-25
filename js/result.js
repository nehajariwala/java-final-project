import navbar from "../componants/nav.js";
import putdata from "../componants/patch.js";
import update from "../componants/post.js";




let result = []
document.getElementById("navbar").innerHTML = navbar()

const getdata = () => {
        fetch("http://localhost:3000/result")
                .then((Response) => Response.json())
                .then((Response) =>{
                 uimaker(Response)
                result=Response
})
}

getdata()

const del = (id) => {
        fetch(`http://localhost:3000/result/${id}`, {
                method: "DELETE"

        })

}

const uimaker = (data) => {
        document.getElementById("tbody").innerHTML=""
        data.map((ele) => {
                let td1 = document.createElement("td")
                td1.innerHTML = ele.name

                let td2 = document.createElement("td")
                td2.innerHTML = ele.subject


                let td3 = document.createElement("td")
                td3.innerHTML = ele.score

                let td4 = document.createElement("td")
                td4.innerHTML = ele.date

                let td5 = document.createElement("button")
                td5.innerHTML = "DELETE"
                td5.addEventListener("click", () => {
                        del(ele.id)
                })
                td4.setAttribute("class", "color")

                let tr = document.createElement("tr")
                tr.append(td1, td2, td3, td4, td5)

                document.getElementById("tbody").append(tr)
        })


}
const sorting = (val) => {
        if (val == "htl") {
                result.sort((a, b) => b.score - a.score)
                uimaker(result)
                console.log("sorting")
        }

        if (val == "lth") {
                result.sort((a, b) => a.score - b.score)
                uimaker(result)
                console.log("sorting")
        }

}


const filter = (value) => {
        let temp = result.filter((ele) => ele.subject == value)
        uimaker(temp);
}



const search = (value) => {
        let temp = result.filter((ele) => ele.name== value)
        uimaker(temp)

        console.log(value,temp,result, "hello")
}


const handalserch = (e) => {
        e.preventDefault()
        let val = document.getElementById("value").value
        console.log(val)
        search(val)
}

document.getElementById("htl").addEventListener("click", () => sorting("htl"))
document.getElementById("lth").addEventListener("click", () => sorting("lth"))


document.getElementById("java script").addEventListener("click", () => filter("java script"))
document.getElementById("node").addEventListener("click", () => filter("node"))
document.getElementById("react").addEventListener("click", () => filter("react"))
document.getElementById("html").addEventListener("click", () => filter("html"))

document.getElementById("search").addEventListener("submit", handalserch)