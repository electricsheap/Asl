


let words = [
    [
        "Hello", "Nice to meet you", "What", "When", "Where", "Who", "How", "Name", "Man", "Women", 
        "Boy", "Girl", "Teacher", "Teach", "Student", "Learn", "Colors", "Black", "Gray", "Brown", 
        "Green", "Blue", "Purple", "Yellow", "Red", "Orange", "Pink", "White", "Stand", 
        "Sit", "Chair", "Lights / on and off", "Door / open and close", "Window / open and close", 
        "Book / open and close", "Paper", "Read", "Draw", "School", "Write", "Same", "Different", 
        "Forget", "Remember again", "Slow down", "Finger spell", "Correct", "Wrong", "Write down", 
        "Homework", "Finish", "Today", "Tomorrow", "Deaf", "Hearing", "Sign", "Have", "Need", 
        "Look at", "Understand", "Not understand", "Letter", "Number", "Shirt", "Pants", "Mustache",
        "Beard", "Glasses", "Hat", "Skirt", "Dress", "Jacket"
    ]
]



currentList = [];

let isPlaying = false;

$(".btn-next").on('click', () => {
    if (!isPlaying) {
        let checks = $('#list_check input');
        for (let i = 0; i < checks.length; i++) {
            currentList = (checks[i].checked) ? currentList.concat(words[i]) : currentList;
        }

        $('.btn-next').html("Next");
        isPlaying = true;
    }
    if (currentList.length == 0) {
        $('#word-display').html("Done!");

        $('.btn-next').html("Start");
        isPlaying = false;
        return;
    }

    $('#word-display').html(pickRand(currentList))
})



function pickRand(list) {
    rand = Math.floor(Math.random() * list.length);

    return list.splice(rand, 1)[0];
}



