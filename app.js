const button = document.getElementById('next');
button.addEventListener('click', (e) => {
    // randomUser()
    console.log(`hello Sam`)
    randomUser().then(data => {
        // Init UI
        const ui = new UI;
        ui.nextProfile(data);
        ui.nextImage(data)
        console.log(data);
    })
    // e.preventDefault()
});