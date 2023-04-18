const tagsEl = document.getElementById("tags")
const textArea = document.getElementById("floatingTextarea")
const advert = document.getElementById("advert")

textArea.focus()

const comingSoonBlinker = setInterval(() => {
    advert.classList.toggle("advert-hide")
}, 1500)

textArea.addEventListener("keyup", (e) => {
    createTags(e.target.value )

    if(e.key === "Enter") {
        setTimeout(() => {
            e.target.value = ""
        }, 10)

        randomSelect()
    }
})

const createTags = (input) => {
    const tags = input.split(",").filter(tag => tag.trim() !== " ").map(tag => tag.trim())

    tagsEl.innerHTML = ""
    
    tags.forEach(tag => {
        const tagEl = document.createElement("span")
        tagEl.classList.add("tag")
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)

    });
}

function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlight(randomTag)

        setTimeout(() => {
            unhighlight(randomTag)
        }, 100);
    }, 100);


    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlight(randomTag)
        }, 100)
    }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll(".tag")
    return tags[Math.floor(Math.random() * tags.length)] 
         
}

function highlight(tag) {
    tag.classList.add("highlight")
}

function unhighlight(tag) {
    tag.classList.remove("highlight")
}

