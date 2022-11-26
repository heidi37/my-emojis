const myEmojis = ["🎏", "🏺", "🪆", "🗿"]
const emojiInput = document.getElementById("emoji-input")
const emojiContainer = document.getElementById("emoji-container")
const pushBtn = document.getElementById("push-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")
const unshiftBtn = document.getElementById("unshift-btn")

function renderEmojis() {
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}

renderEmojis()

function addEmoji(method){
    if (emojiInput.value && method === 'push') {
        myEmojis.push(emojiInput.value)
    } else {
        myEmojis.unshift(emojiInput.value)
    }
        emojiInput.value = ""
        renderEmojis()
}

function removeEmoji(method){
    if (method === 'pop'){
        myEmojis.pop()
    } else {
        myEmojis.shift()
    }
    renderEmojis()
}

pushBtn.addEventListener("click", function(){
    addEmoji("push")
})

unshiftBtn.addEventListener("click", function(){
    addEmoji("unshift")
})

popBtn.addEventListener("click", function(){
    removeEmoji("pop")
})

shiftBtn.addEventListener("click", function(){
    removeEmoji("shift")
})