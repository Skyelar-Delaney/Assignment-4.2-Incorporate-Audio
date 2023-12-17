function StartSound() //funtion to play the sound
{
    mySound = new sound("wolves-76744.mp3"); //new sound object with the audio source
    mySound.play(); //plays the sound

    document.getElementById("stopButton").disabled = false; //this enables the stop button
    document.getElementById("startButton").disabled = true; //this disables the start button
}

function sound(src) //function for sound object
{
    this.sound = document.createElement("audio"); //html audio element
    this.sound.src = src; //udio source for the audio element
    this.play =function() //play method for the audio
{
        this.sound.play() //plays the audio
}
        
}

function StopSound() //function to stop the audio
{
    document.getElementById("stopButton").disabled = true; //disables the stop button
    document.getElementById("startButton").disabled = false; //enables the start button
    window.location.reload(); //reloads window when pressing stop
}