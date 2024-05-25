import navbar from "../componants/nav.js";

document.getElementById("navbar").innerHTML=navbar()




const handaldata=(e)=>{
    e.preventDefault();

    const postdata = (email,password) => {
        fetch(`http://localhost:3000/user?email=${email}&Password=${password}`)
        .then((Response)=>Response.json())
        .then((Response)=>{
            if(Response.length==0){
                alert("check yorr email&password again")
             }
             else{
                alert("login succesfully")
             }

        })
    
    }
    
      
    let user={
   
        email:document.getElementById("email").value,
        Password:document.getElementById("Password").value,


    }
    postdata(user.email,user.Password)
   
}





document.getElementById("userdata").addEventListener("submit",handaldata)