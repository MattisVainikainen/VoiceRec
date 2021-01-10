const btn = document.querySelector(".talk");
const content = document.querySelector(".content");


const greetings = [
                "Im good you little piece of love",
                "Why are you even asking me this?",
                "leave me alone you maggot"
            ];

const weather = ["The weather is aweful"];





const SpeechRecognition = 
window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function(){
    console.log("voice is activated, you can use your microhonee.");
}

recognition.onresult = function(event){
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};

btn.addEventListener('click', () => {
    recognition.start();
});


function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();

    speech.text = 'i dont know what you said';

    if(message.includes('how are you')){
        const finalText = 
            greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }

    
    speech.volume = 1;
    speech.rate = 0.8;
    speech.pitch = 0.6;

    window.speechSynthesis.speak(speech);
}