
const music = document.querySelector("audio");
const img = document.querySelector("img");
const previoua = document.getElementById("previous");
const next = document.getElementById("next");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const play = document.getElementById("play");

const songs = [
    {
        name : "1",
        Image :"icon1",
        title : "Barbadiyan",
        artist : "Sachet Tandon, Nikhita Gandhi,"
    },{
        name : "2",
        Image :"icon2",
        title : "Deva Deva",
        artist : "Arijit Singh"
    },{
        name : "3",
        Image :"icon3",
        title : "rasiya",
        artist : "Tushar Joshi and Shreya Ghoshal"
    },{
        name : "4",
        Image :"icon4",
        title : "Raataan Lambiyan",
        artist : "Jubin Nautiyal & Asees Kaur"
    },{
        name : "5",
        Image :"icon5",
        title : "moonrise",
        artist : "Guru Randhava"
    },{
        name : "7",
        Image :"icon7",
        title : "mehbooba",
        artist : "Ananya Bhat"
    }
]

let isPlaying = false;
const playMusic = () =>{
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play-circle-o", "fa-pause-circle-o");
    img.classList.add("anime");
};
const pauseMusic = () =>{
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause-circle-o", "fa-play-circle-o");
    img.classList.remove("anime");
    
};

play.addEventListener('click', () =>{
    if(isPlaying){
        pauseMusic();
    }else{
        playMusic();
    }
})

const loadSong = ((songs) => {
    title.textContent = songs.title;
    artist.textContent  = songs.artist;
    music.src = songs.name + ".mp3";
    img.src = songs.Image+ ".jpg";


});

songIndex = 0;

const nextSong = () =>{
    songIndex = (songIndex + 1)% songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

const previousSong = () =>{

    songIndex = (songIndex - 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}


next.addEventListener('click' , nextSong);
previous.addEventListener('click' , previousSong);


