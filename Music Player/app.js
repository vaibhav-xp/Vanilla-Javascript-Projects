const play = document.getElementById('play');
const music = document.querySelector('audio');
const title = document.getElementById('title');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let img = document.querySelector('img');
let progress = document.getElementById('progress');
let current_time = document.getElementById('current_time');
let music_duration = document.getElementById('duration');

const progress_div = document.getElementById('progress_div');

const songs = [{
    name: 'song-1',
    title: 'Fair',
    artist: 'Kara Randhawa'
},
{
    name: 'song-2',
    title: 'Mashup',
    artist: 'Sunix Thakor'
},
{
    name: 'song-3',
    title: 'Punjabi Tadka',
    artist: 'Lofi'
}
]

isPlaying = false;
const playMusic = () => {
    music.play();
    play.classList.replace('fa-play', 'fa-pause')
    img.classList.add('anime')
    isPlaying = true;
}


const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace('fa-pause', 'fa-play');
    img.classList.remove('anime')
}

play.addEventListener('click', () => {
    if (isPlaying) {
        pauseMusic();
    }
    else {
        playMusic();
    }
})

const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = 'Music/' + songs.name + '.mp3'
    img.src = 'img/' + songs.name + '.jpg'
}

songIndex = 0;
const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}
const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}


// progress js work 
music.addEventListener('timeupdate', (event) => {
    const { currentTime, duration } = event.srcElement;

    let progress_time = (currentTime / duration) * 100;
    progress.style.width = progress_time + "%";

    let min_currentTime = Math.floor(currentTime / 60);
    let sec_currentTime = Math.floor(currentTime % 60);

    if (sec_currentTime < 10) {
        sec_currentTime = `0${sec_currentTime}`
    }

    current_time.textContent = min_currentTime + ":" + sec_currentTime;

    if (duration) {
        music_duration.textContent = Math.floor(duration / 60) + ':' + Math.floor(duration % 60);
    }
})

progress_div.addEventListener('click', (event)=>{
    const {duration} = music;
    let move_progress = (event.offsetX / event.srcElement.clientWidth) * duration;
    music.currentTime = move_progress;
})




music.addEventListener('ended', nextSong);
next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);