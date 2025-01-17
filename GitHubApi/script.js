function SearchUser() {
    let username = document.querySelector("#input").value;
    const nameElement = document.querySelector("#name");
    const usernameElement = document.querySelector("#username");
    const imgElement = document.querySelector("#img");
    const followersElement = document.querySelector("#following");
    const repoElement = document.querySelector("#Repo");
    const githubLinkElement = document.querySelector("#githubLink a");
    const bio = document.querySelector("#bio");

    fetch(`https://api.github.com/users/${username}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("HTTP ERROR: User not found");
            }
            return response.json();
        })
        .then((data) => {
            
            nameElement.textContent = data.name || "No Name Provided";
            usernameElement.textContent = data.login;
            imgElement.src = data.avatar_url;
            followersElement.textContent = data.followers;
            repoElement.textContent = data.public_repos;
            githubLinkElement.textContent = "View GitHub Profile";
            githubLinkElement.href = data.html_url;
            bio.textContent = data.bio
            githubLinkElement.target = "_blank";
            document.querySelector("#input").value = " "
            console.log(data);

        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            alert("User not found or API error");
        });

}