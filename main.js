let getUsers = async () => {
  let url = "https://jsonplaceholder.typicode.com/users";
  try {
    let result = await fetch(url);
    return await result.json();
  } catch (error) {
    console.log(error);
  }
}

let getUsersPosts = async () => {
  let url = "https://jsonplaceholder.typicode.com/posts";
  try {
    let result = await fetch(url);
    return await result.json();
  } catch (error) {
    console.log(error);
  }
}

let getUserPostsById = async (id) => {
  let posts = await getUsersPosts();
  let html = `<div style="margin-left:auto; margin-right:auto; width: 50%;" id="postByUser${id}" class="posts">`;
  posts.forEach((post) => {
    if (post.userId == id) {
      html =
        html +
        `<pre>Post ID: ${post.id}     User ID: ${post.userId}</pre><p>Post Title: ${post.title}</p><p>Post Body: ${post.body}</p><hr>`;
    }
  });
  html = html + `</div>`;
  let container = document.getElementById("user" + id);
  container.innerHTML = html;
}

let displayUsers = async () => {
  let users = await getUsers();
  let html = "";
  users.forEach((user) => {
    html =
      html +
      `<button style="margin-left:auto; margin-right:auto; display: block; width: 50%;" class="users" onclick="togglePosts(${user.id})">${user.name}</button><div style="display: none;" id="user${user.id}"></div>`;
  });

  let container = document.querySelector(".container");
  container.innerHTML = html;
}

let togglePosts = async (id) => {
  getUserPostsById(id);
  $("#user" + id).toggle();
}
