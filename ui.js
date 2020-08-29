class UI{
    constructor(){
        this.dp = document.getElementById('imageDisplay');
        this.profile = document.getElementById('profileDisplay');
    }
    nextProfile(user){
        this.profile.innerHTML =`
        <ul class="list-group">
            <li class="list-group-item">Name: Title: ${user.name.title}. 
            First Name: ${user.name.first}. 
            Last Name: ${user.name.last}</li>
            <li class="list-group-item">Date of Birth: ${user.dob.date}. 
            Present Age: ${user.dob.age}</li>
            <li class="list-group-item">Gender: ${user.gender}</li>
            <li class="list-group-item">Email: ${user.email}</li>
            <li class="list-group-item">Phone No: ${user.cell}</li>
            <li class="list-group-item">Location: No,${user.location.street.number}
            ${user.location.street.name} Str. 
            City: ${user.location.city}. 
            State: ${user.location.state}. 
            Country: ${user.location.country}. 
            Postcode: ${user.location.postcode}</li>
            <li class="list-group-item">Registration Date: ${user.registered.date}</li>
        </ul>
        `;
    }
    nextImage(user){
        this.dp.innerHTML =`
        <img src="${user.picture.large}">
        `;
    }
}