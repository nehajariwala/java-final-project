import navbar from "../componants/nav.js";

document.getElementById("navbar").innerHTML=navbar()

const postdata = (data) => {
    fetch("http://localhost:3000/result", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data)
    })

}
const handaldata=(e)=>{
    e.preventDefault();

   
    
        
    let admin={
        name:document.getElementById("name").value,
        subject:document.getElementById("subject").value,
        score:document.getElementById("score").value,
        date:document.getElementById("date").value,

    }
  console.log(admin)
    postdata(admin)
   
}
document.getElementById("form").addEventListener("submit",handaldata)