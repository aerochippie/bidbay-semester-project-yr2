
const queryString = document.location.search;
const searchParams = new URLSearchParams(queryString);
const id = searchParams.get("id");



const baseUrl = "https://api.noroff.dev"

const accessToken = localStorage.getItem('bearerToken')
const nameToken = localStorage.getItem('username')






const listingUrl = `${baseUrl}/api/v1/auction/listings/${id}`
const card = document.getElementById("single-post-container")

async function getListing(url) {
    const options = {
        headers: {
            Authorization: "Bearer " + accessToken,
            "Content-Type": "application/json",
        }
    };
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(response)
    console.log(json)
    console.log(id)
console.log(listingUrl)
consumeUserListing(json)

}

getListing(listingUrl)

function consumeUserListing(data) {

        card.innerHTML += ` ${data.title}`
    };