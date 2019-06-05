const video = document.querySelector('.work__film');
const juice = document.querySelector('.control__list-playstatus');
const point = document.querySelector('.control__point')
const btn = document.querySelector('.control__list-play');
const volumStop = document.querySelector('.control__list-volum');


function togglePlayPause() {
    if (video.paused) {
      
        btn.classList.add('control__list-play--active');
      
        video.play();
    } else {
        btn.classList.remove('control__list-play--active');
   
        video.pause();
    }
}

btn.onclick = function () {
    togglePlayPause();
};

video.addEventListener('timeupdate', function () {
    var juicePoc = video.currentTime / video.duration;
    point.style.left = juicePoc * 100 + "%";

    if (video.endend) {
        btn.className = 'play';
    }

    if (point.style.left == 100 + '%') {
        point.style.left = 0 + "%";
    }

});




/*
function togglePlayPause() {
    if (video.paused) {
        btn.className = 'pause';
        video.play();
    } else {
        btn.className = 'play';
        video.pause();
    }
}
*/