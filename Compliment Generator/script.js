
const compliments = [
    "{name}, glad you’re here! Your compliments are ready!” ❤️",
    "{name}, your {hobby} is so creative that paintbrushes are begging for tips! 🎨✨",
    "Keep shining, {name}! Your passion for {hobby} is inspiring! ✨",
    "{name}, your {hobby} is so brilliant that sunglasses need to be worn indoors! 😎🌟",
    "Warning: The next compliment may cause spontaneous smiling. 😁🎉✨",
    "Wow {name}, your {hobby} skills are so incredible that if there were a world championship, the judges would throw their scorecards away, demand a VIP seat just to see you, and probably start a fan club on the spot! 🏆🎉🤩",
    "Alert! {name}, your {hobby} is about to be praised even more! 🏆",
    "{name}, your {hobby} is so impressive, even Google wants your autograph! 🖊️🌟🤩",
    "{name}, your {hobby} is so extraordinary that if there were an Olympic event for awesomeness, they would rename it after you, award gold medals to the clouds, and still declare you the undisputed champion! 🏅☁️🥇🎉",
    "{name}, your {hobby} is legendary—people will talk about it for years! 🏆🔥✨",
    "Wow {name}, the way you do {hobby} is making all other hobbies jealous!",
    "{name}, your {hobby} is so ridiculously amazing that ice cream melts in excitement, emojis form cheering squads, and the internet creates a special trending hashtag just for your greatness! 🍦🎉😂✨",
    "{name}, your {hobby} is so epic that even time itself slows down just to watch, rainbows bow in respect, and somewhere a penguin is practicing it to try and match your legendary skills! 🌈🐧⏳😆",
    "Wow {name}, your hobby of {hobby} makes you amazing! 🌟",
    "{name}, your {hobby} is so absurdly epic 🏆 that dragons 🐉 are taking comedy classes just to keep up, mountains ⛰️ are laughing so hard they shook, and stars ✨ are rolling their eyes in admiration! 😂🌟🎉",
    "{name}, your {hobby} is so legendary that history books are updating themselves! 📚😂",
    "{name},your {hobby} is so cool,ice cream melts just to watch you! 🍦🤪",
    "{name}, your {hobby} is so brilliant that mountains lean in for a closer look, rivers pause to applaud, and even coffee asks you for energy advice because it knows it can’t compete with your power! ⛰️🌊☕⚡🎉",
    "{name}, the way you express yourself ✨ is so ridiculously amazing 🤩 that even unicorns 🦄 formed a flash mob, flowers 🌸 started cheering, and a squirrel 🐿️ is now giving TED Talks about trying to keep up with you! 🎉😂🌟",
    "{name}, your dedication to {hobby} is truly impressive! 👏",
    "People love your energy, {name}, especially when you enjoy {hobby}! 😄",
    "{name}, your {hobby} is so legendary that it deserves its own theme song! 🎶",
    "{name},the way you do {hobby} is so extraordinary that even the sun slows down just to watch you,the clouds form applause, and somewhere, a squirrel is taking notes on how to be as amazing as you!☺️",
    "It's amazing how {name} can turn {hobby} into pure magic! ✨",
    "{name}, your enthusiasm for {hobby} is contagious! 😍",
    "Anyone would admire {name}'s skills in {hobby}! 🏆",
    "You make {hobby} look effortless, {name}! 🌟",
    "{name}, the joy you get from {hobby} lights up the room! 💖",
    "Your talent in {hobby}, {name}, is something to be proud of! 🎯",
    "Nothing beats {name}'s passion for {hobby}! 💫",
    "{name}, your hobby of {hobby} is inspiring everyone around you! 🌈",
    "Keep doing {hobby}, {name}! The world needs your energy and creativity! 🌟",
    "{name}, you bring so much joy through {hobby}! 😃",
    "Your dedication to {hobby}, {name}, is truly admirable! 👏",
    "{name}, your hobby of {hobby} is a reflection of your amazing personality! 🌸",
    "The way {name} enjoys {hobby} is simply contagious! 🥰",
    "You’re a natural at {hobby}, {name}! ✨",
    "{name}, your love for {hobby} adds color to everything around you! 🎨",
    "Everyone is inspired by {name}'s commitment to {hobby}! 🌟",
    "Your passion for {hobby}, {name}, is truly motivating! 💖",
    "{name}, keep rocking at {hobby}! The world notices your talent! 🌈",
    "You turn {hobby} into an art form, {name}! 🎭",
    "Your dedication to {hobby} shines as bright as you do, {name}! ✨",
    "{name}, your energy while doing {hobby} is unmatched! ⚡",
    "Watching {name} enjoy {hobby} is pure happiness! 😄",
    "{name}, your creativity in {hobby} is inspiring everyone! 🌸",
    "Your hobby of {hobby}, {name}, is a gift to those around you! 🎁",
    "{name}, you make {hobby} look so effortless! 😎",
    "Your passion for {hobby} lights up the room, {name}! 💫",
    "{name}, anyone can see your joy in {hobby} — it’s beautiful! 🌈",
    "Keep being amazing at {hobby}, {name}! 🌟",
    "{name}, your talent in {hobby} is truly impressive! 🏆",
    "Your energy when doing {hobby}, {name}, is inspiring! ✨",
    "{name}, you bring so much creativity to {hobby}! 🎨",
    "The way {name} enjoys {hobby} spreads happiness everywhere! 😄",
    "{name}, your love for {hobby} makes the world brighter! 🌞",
    "Watching {name} do {hobby} is pure inspiration! 💖",
    "Your dedication to {hobby} is amazing, {name}! 👏",
    "{name}, you shine through your hobby of {hobby}! ✨",
    "Everyone admires {name}'s skills in {hobby}! 🏅",
    "{name}, your excitement for {hobby} is contagious! 😍",
    "Keep enjoying {hobby}, {name}! Your joy is magical! ✨",
    "Your creativity in {hobby} is unmatched, {name}! 🌸",
    "{name}, your enthusiasm for {hobby} makes everyone smile! 😄",
    "You’re truly talented at {hobby}, {name}! 🎯",
    "{name}, your love for {hobby} inspires those around you! 🌈",
    "Watching {name} engage in {hobby} is pure joy! 💖",
    "Keep shining with {hobby}, {name}! ✨",
    "{name}, your hobby of {hobby} is truly impressive! 🏆",
    "Your dedication and love for {hobby}, {name}, are amazing! 🌟"
];



const startBtn = document.getElementById('startBtn');
const generateBtn = document.getElementById('generateBtn');
const nameInput = document.getElementById('nameInput');
const hobbyInput = document.getElementById('hobbyInput');
const complimentDiv = document.getElementById('compliment');

startBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const hobby = hobbyInput.value.trim();

    if(name === "" || hobby === "") {
        alert("Please enter both your name and hobby!");
        return;
    }

    // Hide input section and show generate button
    document.querySelector('.input-section').classList.add('hidden');
    complimentDiv.classList.remove('hidden');
    generateBtn.classList.remove('hidden');

    // Generate the first compliment
    generateCompliment(name, hobby);
});

generateBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const hobby = hobbyInput.value.trim();
    generateCompliment(name, hobby);
});

let lastIndex = -1;


    let currentIndex = 0;
    function generateCompliment(name, hobby) {
    // Get the next compliment in order
    const complimentText = compliments[currentIndex]
        .replaceAll("{name}", name)
        .replaceAll("{hobby}", hobby);

    complimentDiv.classList.remove('show');
    complimentDiv.textContent = complimentText;

    // Trigger fade-in effect
    setTimeout(() => complimentDiv.classList.add('show'), 100);

    // Move to the next compliment (loop back if at end)
    currentIndex = (currentIndex + 1) % compliments.length;
    }