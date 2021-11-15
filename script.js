const linksSocialMedia = { // Array with social id's
    github:    'phdguigui',
    youtube:   '        ',
    facebook:  '        ',
    instagram: 'phdguigui',
    twitter:   'iamthronus'
}

function changeSocialMediaLinks() { // This function creates the url to the selected social media, changing the main content of link and adding the profile at the end
    for (let li of socialLinks.children) { // Search for each element in the lists in HTML doc
        const social = li.getAttribute('class') // Gives social the value of the class defined in the li's tags in HTML doc

        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}` // Social from the const social and links from the array
    }
}

changeSocialMediaLinks();

//****************************************************

function getGithubProfileInfos() { // API stuff
    const url = `https://api.github.com/users/${linksSocialMedia.github}` // URL as API link of data from public profiles on Github

    fetch(url) // Calls the URL
    .then(response => response.json()) // Transforms the URL archive in a .json archive
    .then(data => {
        userName.textContent = data.name // Changes username to Github name
        userBio.textContent = data.bio // Changes bio to Github bio
        githubLink.href = data.html_url // Changes anchor to the selected profile URL
        profilePicture.src = data.avatar_url // Changes profile picture to Github profile picture
        userLogin.textContent = data.login // Changes login data to login on Github
    })
}

getGithubProfileInfos() 
