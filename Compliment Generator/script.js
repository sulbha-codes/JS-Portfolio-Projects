
const compliments = [
    "{name}, anyone who loves {hobby} has a heart full of joy! ❤️",
    "Keep shining, {name}! Your passion for {hobby} is inspiring! ✨",
    "Wow {name}, your hobby of {hobby} makes you amazing! 🌟",
    "{name}, anyone who loves {hobby} has a heart full of joy! ❤️",
    "{name}, your dedication to {hobby} is truly impressive! 👏",
    "People love your energy, {name}, especially when you enjoy {hobby}! 😄",
    "{name}, your love for {hobby} shows your creativity and spirit! 🎨",
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

function generateCompliment(name, hobby) {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    const complimentText = compliments[randomIndex]
        .replace("{name}", name)
        .replace("{hobby}", hobby);

    complimentDiv.textContent = complimentText;
}
