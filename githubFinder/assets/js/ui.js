class UI {
    constructor() {
        this.profile = document.querySelector('#profile');
    }
    showProfileEmail(users) {
        let datas = `user.[2].payload.commits[0].author`;
        let email = datas.email;
    }
    showProfile(user) {
        this.clearAlert();
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
        <div class="row">
        <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="__blank" class="btn btn-primary btn-block mb-4">
            View Profile</a>
        </div>
        <div class="col-md-9">
            <h5 class="text-black d-inline">Public Repository: <span class="badge bg-primary p-2"> ${user.public_repos}</span></h5>
            <h5 class="text-black d-inline">Public Gists: <span class="badge bg-secondary p-2"> ${user.public_gists}</span></h5>
            <h5 class="text-black d-inline">Followers: <span class="badge bg-success p-2"> ${user.followers}</span></h5>
            <h5 class="text-black d-inline">Following: <span class="badge bg-info p-2">${user.following}</span></h5>
        <br><br>
        <ul class="list-group">
            <li class="list-group-item">Name: ${user.name}</li>
            <li class="list-group-item">Bio: ${user.bio}</li>
            <li class="list-group-item">Company: ${user.company}</li>
            <li class="list-group-item">Email: ${user.email}</li>
            <li class="list-group-item">Blog: ${user.blog}</li>
            <li class="list-group-item">Twitter: ${user.twitter_username}</li>
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">Created: ${user.created_at}</li>
        </ul>
        </div>
        </div>
        </div>
        `;

    }

    clearProfile() {
        this.profile.innerHTML = "";
    }
    showAlert(message, className) {
        this.clearAlert();
        this.clearProfile();
        let div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        let container = document.querySelector('.searchContainer');
        let search = document.querySelector('.search');
        container.insertBefore(div, search);
    }

    clearAlert() {
        let currentAlert = document.querySelector('.alert');
        if (currentAlert) {
            currentAlert.remove();
        }
    }

}
