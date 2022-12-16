const baseUrl = "https://api.noroff.dev"

const accessToken = localStorage.getItem('bearerToken')
const nameToken = localStorage.getItem('username')

const listingUrl = `${baseUrl}/api/v1/auction/profiles/${nameToken}/listings`

const allListingsUrl = `${baseUrl}/api/v1/auction/listings`


async function getUserListing(url) {
    const options = {
        headers: {
            Authorization: "Bearer " + accessToken,
            "Content-Type": "application/json",
        }
    };
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json)
    consumeUserListing(json);
}

function consumeUserListing(data) {
    const cards = document.getElementById("listings-posted-cards")
    data.forEach(item => {
        cards.innerHTML += `  <div class="card flex flex-col px-2 py-4 rounded-xl justify-around items-center" data-id=${item.id}>
        <div class="image w-4/5">
          <img src="${item.media[0]}" alt="" class="w-50 h-50 object-fill rounded-xl">
        </div>
        <div class="description flex flex-col text-gray-900 items-center gap-1">
          <div class="title text-xl">
            <span> <strong> ${item.title} </strong>   </span>
          </div>
          <div class="author text-xs italic">
            <span> ${nameToken}</span>
          </div>
          <div class="coins flex flex-row">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
              </svg>
            </div>
            <div class="number">
              <span><strong>${item._count.bids}</strong></span>
            </div>
         
          </div>
          <div class="buttons flex flex-row text-sm gap-2">
            <button onclick="window.location.href='singlepost.html?id=${item.id}'" class="btn bg-lime-500 text-white">Open</button>
            <button class="btn bg-yellow-400"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
            </button>
            <button  class="btn bg-red-600"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
            </button>
          </div>
        </div>
      
      </div>`
    });
   
    // const welcomeMessage = document.getElementById("welcome-message")

    // welcomeMessage.innerHTML += `${data.name}`


}

getUserListing(listingUrl)

async function getAllListings(url) {
    const options = {
        headers: {
            Authorization: "Bearer " + accessToken,
            "Content-Type": "application/json",
        }
    };
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json)
    consumeAllListings(json);
}

function consumeAllListings(data) {
    const allCards = document.getElementById("all-listings")
    data.forEach(item => {
        allCards.innerHTML += `    <div class="card flex flex-row px-2 py-4 w-5/6 rounded-xl justify-around items-center">
        <div class="image w-1/2">
          <img src="${item.media[0]}" alt="" class="w-50 h-50 object-fill rounded-xl">
        </div>
        <div class="description flex flex-col text-gray-900">
          <div class="title text-xl">
            <span> <strong> ${item.title} </strong>   </span>
          </div>
          <div class="author text-xs italic">
            <span> ${item.author}</span>
          </div>
          <div class="coins flex flex-row">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
              </svg>
            </div>
            <div class="number">
              <span><strong>${item._count.bids}</strong></span>
            </div>
         
          </div>
        </div>
      </div>`
    });}

    getAllListings(allListingsUrl)