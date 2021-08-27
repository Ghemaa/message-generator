const randomGenerator = num => {
   return Math.floor(Math.random() * num)
}
const randomNumber = num => {
    return Math.floor(Math.random() * num)
}

let wordCategory = {
    abrahamLincoln: [
        `"Character is like a tree and reputation like its shadow. The shadow is what we think of it; the tree is the real thing."`,
        `"I am a slow walker, but I never walk back."`, 
        `"Give me six hours to chop down a tree and I will spend the first four sharpening the axe."`, 
        `"You cannot escape the responsibility of tomorrow by evading it today."`, 
        `"Better to remain silent and be thought a fool than to speak out and remove all doubt."`
    ],
    nelsonMandela: [
        `"To be free is not merely to cast off one's chains, but to live in a way that respects and enhances the freedom of others.`,
        `"Resentment is like drinking poison and then hoping it will kill your enemies."`,
        `"Education is the most powerful weapon we can use to change the world."`,
        `"I like friends who have independent minds because they tend to make you see problems from all angles."`,
        `"Lead from the back and let others believe they are in front."`
    ],
    albertEinstein: [
        `"Try not to become a man of success, rather than becoming a man of value."`,
        `"The true sign of intelligence is not knowledge but imagination."`,
        `"Try not to become a man of success, but rather try to become a man of value."`,
        `"Logic will get you from A to B - Imagination will take you everywhere."`,
        `"It is the supreme art of the teacher to awaken joy in creative expression and knowledge."`
    ]
}

let generateMassage = document.getElementById('generate_message');
let output = document.getElementById('output_data');

generateMassage.addEventListener('click', () => {
    let final_message = [];
    let randomPicker = randomNumber(3)
    let randomIndex = randomGenerator(5)
    if (randomPicker === 0) {
        final_message.push(`${wordCategory.abrahamLincoln[randomIndex]} - Abraham Lincoln `)
    } else if (randomPicker === 1) {
        final_message.push(`${wordCategory.nelsonMandela[randomIndex]} - Nelson Mandela`)
    } else if (randomPicker === 2) {
        final_message.push(`${wordCategory.albertEinstein[randomIndex]} - Albert Einstein`)
    }   
    let formatFinalMessage = message => message = final_message;
    output.innerHTML = formatFinalMessage(final_message);
});
