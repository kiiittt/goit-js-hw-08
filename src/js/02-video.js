import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoPlayer = document.querySelector('#vimeo-player');
const player = new Player(vimeoPlayer);

const play = function (event) {
    localStorage.setItem('videoplayer-current-time', event.seconds);
};

player.on('timeupdate', throttle(play, 1000));

const time = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(time || 0);
