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
  console.log(`hello` )
  console.log(json) 
  consumeUserListing(json);
}

function consumeUserListing(data) {
  const cards = document.getElementById("listings-posted-cards")
  data.forEach(item => {
    cards.innerHTML += `<div class="card-post-id card flex flex-col rounded-xl justify-around items-center w-full bg-zinc-200 p-4" >
        <div class="image w-full">
          <img src="${item.media[0]}" alt="" class="w-full max-h-40 object-cover rounded-xl my-6">
        </div>
        <div class="description flex flex-col text-gray-900 items-center gap-0.5 w-full ">
        <div class="title text-xl  font-semibold">
            <span> <strong> ${item.title} </strong>   </span>
          </div>
          <div class="author text-xs italic">
            <span> ${item.author}</span>
            </div>
            <div class="coins flex flex-row  items-center align-middle pb-4">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                </svg>
              </div>
              <div class="number pl-1 ">
                <span><strong>${item._count.bids}</strong></span>
              </div>
           
            </div>
            <div class="buttons flex flex-row text-sm gap-2 w-4/5" data-id=${item.id}>
              <button type="button" onclick="window.location.href='singlepost.html?id=${item.id}'" class="btn bg-lime-500 text-white w-3/5">Open</button>
              <button type="button" id="edit-post-button" class="btn bg-yellow-400 w-1/5"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
              </button>
              <button type="button" id="delete-post-button" class="btn bg-red-600 w-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
              </button>
            </div>
          </div>
        
        </div>`
  });



}





const listingPostedContainer = document.getElementById("listings-posted-cards")

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
const allCards = document.getElementById("all-listings-show")
function consumeAllListings(data) {

  data.forEach(item => {
    allCards.innerHTML += `<div class="card flex flex-col rounded-xl justify-around items-center md:w-10 md:basis-80 bg-zinc-200 p-4">
        <div class="image w-full">
          <img src="${item.media[0]}" alt="" class="w-full max-h-40 object-cover rounded-xl my-6">
        </div>
        <div class="description flex flex-col text-gray-900 items-center gap-0.5 w-full">
        <div class="title text-xl  font-semibold">
            <span> <strong> ${item.title} </strong>   </span>
          </div>
          <div class="author text-xs italic">
            <span> ${item.author}</span>
            </div>
            <div class="coins flex flex-row  items-center align-middle pb-4">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                </svg>
              </div>
              <div class="number pl-1 ">
                <span><strong>${item._count.bids}</strong></span>
              </div>
           
            </div>
            <div class="buttons flex flex-row text-sm gap-2 w-full" data-id=${item.id}>
              <button type="button" onclick="window.location.href='singlepost.html?id=${item.id}'" class="btn bg-lime-500 text-white w-full">Open</button>
             
            </div>
          </div>
        
        </div>`
  });
}



getAllListings(allListingsUrl)

getUserListing(listingUrl)


function openEditForm() {
  document.getElementById("edit-post-form").style.display = "block";
}
function closeEditForm() {
  document.getElementById("edit-post-form").style.display = "none";
}

async function getEditPostDetails(url) {

  const options = {
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    }
  }
  const response = await fetch(url, options);
  const data = await response.json();

  const title = document.getElementById("edit-post-title")
  const tags = document.getElementById("edit-post-tags")
  const media = document.getElementById("edit-post-media")
  const description = document.getElementById("edit-post-description")
  const hiddenId = document.getElementById("hiddenId")
  title.value = `${data.title}`
  tags.value = `${data.tags}`
  media.value = `${data.media}`
  description.value = `${data.description}`
  hiddenId.value = `${data.id}`

}

async function editPost(url, newData) {
  const options = {
    method: 'PUT',
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),

  }

  const response = await fetch(url, options)
  const json = await response.json();
  if (response.status === 200) {
    window.location.reload();

  }}


// async function deletePost(url){
//   const options = {
//     method: 'DELETE',
//     headers: {
//       Authorization: "Bearer " + accessToken,
//       "Content-Type": "application/json",
//     }

//   }

//   const response = await fetch(url, options)
//   const json = await response.json();

    
// }

  listingPostedContainer.addEventListener('click', (e) => {
    let postId = e.target.parentElement.dataset.id;
    let editSinglePostUrl = `${baseUrl}/api/v1/auction/listings/${postId}`
  
    let editPostButton = e.target.id == 'edit-post-button'
    let deletePostButton = e.target.id == 'delete-post-button'
  
    if (editPostButton) {
  
      openEditForm()
      getEditPostDetails(editSinglePostUrl)
  
    }
  
  
    if (deletePostButton) {

      var options = {
            method: 'DELETE',
            headers: {
              Authorization: "Bearer " + accessToken,
            }};
      
        fetch(editSinglePostUrl, options)

            .then(() => window.location.reload())

    }
    }
  );
  

const editPopup = document.getElementById("edit-post-form");

editPopup.addEventListener('click', (e) => {
  e.preventDefault();

  const title = document.getElementById("edit-post-title")
  const tags = document.getElementById("edit-post-tags")
  const media = document.getElementById("edit-post-media")
  const description = document.getElementById("edit-post-description")
  const postId = document.getElementById("hiddenId").value;

  let editSinglePostUrl = `${baseUrl}/api/v1/auction/listings/${postId}`

  let savePressed = e.target.id == 'save-edit-form';
  let cancelPressed = e.target.id == 'close-edit-form';

  let newData = {
    title: title.value,
    tags: tags.value.split(','),
    description: description.value
  }

  if (savePressed) {
    editPost(editSinglePostUrl, newData);
  }
  if (cancelPressed) {
    closeEditForm();
  }

})










