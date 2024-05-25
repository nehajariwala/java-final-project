import navbar from "../componants/nav.js";



document.getElementById("navbar").innerHTML=navbar()
const handaldata=(e)=>{
    e.preventDefault();

    const postdata = (data) => {
        fetch("http://localhost:3000/user", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data)
        })
    
    }
    const checkuser=(user)=>{
        fetch(`http://localhost:3000/user?email=${user.email}`)
        .then((Response)=>Response.json())
        .then((Response)=>{
             if(Response.length==0){
                postdata(user)
             }
             else{
                alert("alredy exist")
             }
        })

    }
      
    let user={
        username:document.getElementById("username").value,
        email:document.getElementById("email").value,
        Password:document.getElementById("Password").value,


    }
    // postdata(user)
    checkuser(user)
}





document.getElementById("userdata").addEventListener("submit",handaldata)
