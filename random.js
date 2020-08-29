async function randomUser(user){
    const randomResult = await fetch (`https://randomuser.me/api/`)
    // let user = await response.json();
    // .then(res => res.json())
    // .then(data => {console.log(data)})
    const result = await randomResult.json();
    console.log(result.results[0]);
    return (result.results[0]);
}
    


    
