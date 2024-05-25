const putdata = (data) => {

    console.log(data)
    try {
      fetch(`http://localhost:3000/result/${data.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
    } catch (error) {
      console.log(error.message);
    }
  
  
  }
  export default putdata;