const baseUrl = "https://api.noroff.dev"


const accessToken = localStorage.getItem('bearerToken')
const nameToken = localStorage.getItem('username')

const userUrl = `${baseUrl}/api/v1/auction/profiles/${nameToken}`
const userAvatarUrl = `${baseUrl}/api/v1/auction/profiles/${nameToken}/media`

async function getUser(url) {
    const options = {
        headers: {
            Authorization: "Bearer " + accessToken,
            "Content-Type": "application/json",
        }
    };
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json)
    console.log(json.credits)
    consumeUser(json);
}

getUser(userUrl)

function consumeUser(data) {
    const credits = document.getElementById("credits");
    const welcomeMessage = document.getElementById("welcome-message");
    const avatar = document.getElementById("profile-avatar");
    const profileName = document.getElementById("profile-name");
    const profileEmail = document.getElementById("profile-email");
    const profileCredits = document.getElementById("profile-credits");
    const profileTotalListings = document.getElementById("profile-total-listings");
    const profileTotalWon = document.getElementById("profile-total-won");
    credits.innerHTML += `<strong>${data.credits}</strong>`;
    welcomeMessage.innerHTML += `${data.name}`;
    profileEmail.innerHTML += `${data.email}`;
     profileName.innerHTML += `${data.name}`;
     profileCredits.innerHTML += `${data.credits}`;
     profileTotalListings.innerHTML += `${data._count.listings}`;
    profileTotalWon.innerHTML += `${data.wins.length}`;
    
    
    if(data.avatar === null){
        document.getElementById("hero-avatar-img").src = `
    https://images.unsplash.com/photo-1562040506-a9b32cb51b94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`; 
    document.getElementById("profile-avatar").src = `https://images.unsplash.com/photo-1562040506-a9b32cb51b94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`;
} else {
        document.getElementById("hero-avatar-img").src = `${data.avatar}`;
        document.getElementById("profile-avatar").src = `${data.avatar}`;


    }

 

}

async function changeUser(url,avatar){
    const data = {
        method: "PUT",
        headers: {
            Authorization: "Bearer " + accessToken,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(avatar)
        }

        const response = await fetch(url, data)
        const json = await response.json();

        if(response.status === 200) {
            window.location.reload();
        }
}

changeUser(userAvatarUrl)

function changeUserForm(){
const avatar = document.getElementById("avatar-url").value;


    let avatardata = {
        avatar : avatar
    }

    changeUser(userAvatarUrl, avatardata)
}

const saveAvatar = document.getElementById("save-avatar")
saveAvatar.addEventListener('click', changeUserForm)



const cancelAvatar = document.getElementById("cancel-avatar")
cancelAvatar.addEventListener('click', closeForm)

const editButton = document.getElementById("edit-avatar-button")
editButton.addEventListener('click', openForm)

function openForm() {
    document.getElementById("change-avatar-form").style.display = "block";

}

function closeForm() {
    document.getElementById("change-avatar-form").style.display = "none";

}

