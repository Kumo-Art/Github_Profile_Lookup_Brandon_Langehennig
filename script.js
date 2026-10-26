//-------------data--------------
const data = {
    login: "octocat",
    id: 583231,
    node_id: "MDQ6VXNlcjU4MzIzMQ==",
    avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/octocat",
    html_url: "https://github.com/octocat",
    followers_url: "https://api.github.com/users/octocat/followers",
    following_url: "https://api.github.com/users/octocat/following{/other_user}",
    gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
    starred_url: "https://api.github.com/users/octocat/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
    organizations_url: "https://api.github.com/users/octocat/orgs",
    repos_url: "https://api.github.com/users/octocat/repos",
    events_url: "https://api.github.com/users/octocat/events{/privacy}",
    received_events_url: "https://api.github.com/users/octocat/received_events",
    type: "User",
    user_view_type: "public",
    site_admin: false,
    name: "The Octocat",
    company: "@GitHub",
    blog: "https://github.blog",
    location: "San Francisco",
    email: null,
    hireable: null,
    bio: null,
    twitter_username: null,
    public_repos: 8,
    public_gists: 8,
    followers: 24770,
    following: 9,
    created_at: "2011-01-25T18:44:36Z",
    updated_at: "2026-10-22T11:50:51Z"
}




// const url = "https://api.github.com/users/octocat";
// const data = fetch(url)
// .then((response) => {
//     console.log(response.status, response.ok);
//     return response.json();
// })
// .then((data) => {
//    console.log(data);
// });








//--------------elements---------------


const findButton = document.getElementById("find-button");
const usr = document.getElementById("user");




//------------functions------------

function getUser(username) {
    return fetch("https://api.github.com/users/octocat")
        .then((response) => {
            return response.json();
        })
};

function foundUser(user) {
    let newUser = document.createElement("li");
    newUser = data.name;
    usr.append(newUser);
   
};





//-------------listeners-------------

findButton.addEventListener("click", function () {

    getUser("name")
    .then((usr) => console.log(usr.name));
    foundUser();
});




//-----------------run at load--------------