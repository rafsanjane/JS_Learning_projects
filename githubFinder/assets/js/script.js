let searchUser = document.querySelector('#searchUser');
let searchBtn = document.querySelector('#searchBtn');
let ui = new UI();

searchBtn.addEventListener('click', (e) => {
    let userText = searchUser.value;
    if (userText != '') {
        // Fetch Api
        let url = `https://api.github.com/users/${userText}`;


        fetch(url)
            .then(result => result.json())
            .then(data => {
                console.log(data)
                if (data.message == "Not Found") {
                    ui.showAlert("User Not Found", "alert alert-danger")
                } else {
                    //show Profile
                    ui.showProfile(data);
                }
            })


    } else {
        ui.clearProfile();

    }

}); 