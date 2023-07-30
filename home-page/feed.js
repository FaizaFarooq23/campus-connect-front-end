for (let i = 0; i < users.length; i++) {
    const feed_div = document.createElement("div");
    feed_div.classList.add("feed-div");
    feed_div.innerHTML = `
    <div class="feed">
        <div class="feed-header">
            <div class="feed-header-left">
                <img src=${users[i].image} alt="user-profile-photo">
                <span class="">${users[i].name}</span>
            </div>
            <div class="feed-time">
            <div class="dot"></div>
            <span class="time">1 day ago</span>
        </div>
            <div class="feed-header-right">
                <img src="icons/dots.svg" class="dot-img" alt="dots-svg"></img>
            </div>
        </div>
        <div class="feed-image">
            <img src=${users[i].post} alt="user-uploaded-photo" class="user-feed-image">
        </div>
        <div class="feed-footer">
            <div class="feed-footer-left">
                <i class="far fa-heart"></i>
                <i class="far fa-comment"></i>
                <i class="far fa-paper-plane"></i>
            </div>
            <div class="feed-footer-right">
                <i class="far fa-bookmark"></i>
            </div>
        </div>
        <div class="feed-likes">
            <span class="likes">Liked by <span class="like-name">${users[i].name}</span> and <span class="others">others</span></span>
        </div>
        <div class="feed-caption">
            <span class="caption-name">${users[i].name}</span>
            <span class="caption">${users[i].caption}</span>
        </div>
    <div class="line"></div>
    </div>
    `;
    feed.appendChild(feed_div);

}
