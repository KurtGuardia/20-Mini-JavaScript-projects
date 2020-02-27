//Stuff from the DOM
const postContainer = document.getElementById("post-container");
const loading = document.querySelector(".loader");
const filster = document.getElementById("filster");

let limit = 5;
let page = 1;

//fetch response
async function getPost() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page${page}`
  );

  const data = await res.json();

  return data;
}

//Show post in DOM
async function showPost() {
  const post = await getPost();

  post.forEach((post) => { console.log(post.id)
    const postEl = document.createElement("div");
    postEl.classList.add("post");
    postEl.innerHTML = `<div class="number">${post.id}</div>
        <div class="post-info">
            <h3 class="post-title">${post.title}</h3>
            <p class="post-body">${post.body}</p>
        </div>
        `;

    postContainer.appendChild(postEl);
  });
}

//show loader and fetch more posts
function showLoading() {
  loading.classList.add("show");

  setTimeout(() => {
    loading.classList.remove("show");
    setTimeout(() => {
      page++;
      showPost();
    }, 300);
  }, 1000);
}

//Filter posts by input
function filterPosts(e) {
  const term = e.target.value.toUpperCase();
  const posts = document.querySelectorAll('.post');

  posts.forEach(post => {
      const title = post.querySelector('.post-title').innerText.toUpperCase();;
      const body = post.querySelector('.post-body').innerText.toUpperCase();;

      if(title.indexOf(term) > -1 || body.indexOf(term) > -1){
        post.style.display = 'flex';
      } else {
          post.style.display = 'none';
      }
  });
}

//Show initial posts
showPost();

//Scroll event
window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    showLoading();
  }
});

//filter
filter.addEventListener("input", filterPosts);
