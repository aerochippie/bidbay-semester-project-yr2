const baseUrl = "https://api.noroff.dev"
const quoteUrl = `${baseUrl}/api/v1/quotes/random`


const accessToken = localStorage.getItem('bearerToken')
const nameToken = localStorage.getItem('username')

const userUrl = `${baseUrl}/api/v1/auction/profiles/${nameToken}`
const listingUrl = `${baseUrl}/api/v1/auction/profiles/${nameToken}/listings`
const newListingUrl = `${baseUrl}/api/v1/auction/listings`

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
    const credits = document.getElementById("credits")
    const welcomeMessage = document.getElementById("welcome-message")

    credits.innerHTML += `<strong>${data.credits}</strong>`
    welcomeMessage.innerHTML += `${data.name}`


}

async function getQuote(url) {
    const options = {
        headers: {
            Authorization: "Bearer " + accessToken,
            "Content-Type": "application/json",
        }
    };
    const response = await fetch(url, options);
    const json = await response.json();
    consumeQuote(json)
}
function consumeQuote(data) {
    const quote = document.getElementById("random-quote")
    const author = document.getElementById("quote-author")

    quote.innerHTML += `<strong>${data.content}</strong>`
    author.innerHTML += `<strong>${data.author}</strong>`
}
getQuote(quoteUrl);

async function newListing(url, listing) {
    const data = {
        method: "POST",
        headers: {
            Authorization: "Bearer " + accessToken,
            "content-Type": "application/json"
        },
        body: JSON.stringify(listing)
    };
    const response = await fetch(url, data)
    const json = await response.json();
    console.log(json)

}

export function newListingFormValidation(e) {

    e.preventDefault();

    const itemName = document.getElementById("item-name").value.trim();
    const tags = document.getElementById("tags").value.split(',');
    const endsAt = document.getElementById("ends-at").value.trim();
    const image = document.getElementById("images").value.trim();
    const image2 = document.getElementById("images2").value.trim();
    const image3 = document.getElementById("images3").value.trim();
    const description = document.getElementById("description").value.trim();
    let imageArr = new Array(image, image2, image3)


    const itemNameError = document.getElementById("item-name-error")
    const endsAtError = document.getElementById("ends-at-error")

    if (itemName === '') {
        itemNameError.innerHTML = "Title / Item name is required."
    }

    if (endsAt === '') {
        endsAtError.innerHTML = "Listing end date is required."
    }

    if (image3 === '') {
        imageArr = new Array(image, image2)
    }
    if (image2 === '') {
        imageArr = new Array(image)
    }
    const listing = {
        title: itemName,
        endsAt: endsAt,
        tags: tags,
        media: imageArr,
        description: description
    };
    newListing(newListingUrl, listing)
}
const addListingButton = document.getElementById("add-listing-button")
addListingButton.addEventListener('click', newListingFormValidation)