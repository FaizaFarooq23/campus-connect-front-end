const stories_div = document.getElementById("story-div");
const feed = document.getElementById("feed");
const users = [
    {
        name: "Faiza Farooq",
        image: "https://picsum.photos/200",
        post: "https://picsum.photos/290",
        caption: "Sunset in the mountains #mountains #sunset #photography",
    },
    {
        name: "Hira Batool",
        image: "https://picsum.photos/300",
        post: "https://picsum.photos/390",
        caption: "flowers #flowers #photography",
    },
    {
        name: "Moazma Ehsan",
        image: "https://picsum.photos/400",
        post: "https://picsum.photos/308",
        caption: "Cute cat ",
    },
    {
        name: "Hafsa Shamraiz",
        image: "https://picsum.photos/500",
        post: "https://picsum.photos/409",
        caption: "Nature "
    },
    {
        name: "Jo b",
        image: "https://picsum.photos/600",
        post: "https://picsum.photos/900",
        caption: "No caption "
    },
    {
        name: "Mai ni btaunga",
        image: "https://picsum.photos/700",
        post: "https://picsum.photos/800",
        caption: "What to write? "
    }
]

for (let i = 0; i < users.length; i++) {
    const story = document.createElement("div");
    story.classList.add("story-name");
    story.innerHTML = `
    <div class="circle">
            <div class="story">
            <img src=${users[i].image}  alt="user-profile-photo">
            </div>
        </div> `;
    const name = document.createElement("span");
    name.classList.add("name");
    name.innerText = users[i].name.split(" ")[0];
    story.appendChild(name);
    stories_div.appendChild(story);
}

