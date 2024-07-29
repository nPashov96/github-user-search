let profileImg = document.getElementById('profile-img')
let username = document.getElementById('username');
let tag = document.querySelector('.user-tag');
let joinDate = document.getElementById('joined');
let bio = document.querySelector('.bio');
let repos = document.querySelector('.repos-counter');
let followers = document.querySelector('.followers-counter');
let following = document.querySelector('.following-counter');
let location = document.getElementById('city');
let social = document.getElementById('social');
let twitterIcon = document.getElementById('social-img');
let link = document.getElementById('link');
let work = document.getElementById('work');
let searchInput = document.getElementById('search');

export function searchUser() {
    let usernameInput = searchInput.value.trim();

    fetch(`https://api.github.com/users/${usernameInput}`)
        .then(res => {
            return res.json();
        })
        .then(data => {

            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

            let createdDate = new Date(data.created_at)
            let dayNumber = createdDate.getDate();
            let month = months[createdDate.getMonth() + 1];
            let year = createdDate.getFullYear();

            username.textContent = data.name || 'No Name';
            tag.textContent = '@' + data.login;
            joinDate.textContent = `Joined ${dayNumber} ${month} ${year}`
            bio.textContent = data.bio || 'Not Available';
            repos.textContent = data.public_repos || '0';
            followers.textContent = data.followers || '0';
            following.textContent = data.following || '0';

            location.textContent = data.location || 'Not Available'
            if (data.twitter_username !== null) {
                social.textContent = data.twitter_username
            } else {
                social.textContent = 'Not Available'
                social.style.color = '#A4B4CC'
                twitterIcon.style.fill = '#A4B4CC'
            };


            link.textContent = data.blog || 'Not Available';
            work.textContent = data.company || 'Not Available';
            profileImg.src = data.avatar_url
            profileImg.style.borderRadius = '100%';

        })
        .catch(error => console.log(error));


}

document.querySelector('.search-btn').addEventListener('click', searchUser);

function initialLoad () {
    searchUser('octocat')
}
initialLoad ()