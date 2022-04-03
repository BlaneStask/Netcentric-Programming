import { Component, Input } from '@angular/core';
import {Howl, Howler} from 'howler';

var index = 0;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'music-streaming-app';

  playSong() {
    sound.play();
  }
  stopSong() {
    sound.pause();
  }
  skipSong() {
    sound.pause();
    sound.unload();

    if(index == 0) {
      sound = new Howl({
        src: ['assets/mp3_files/Aquarium.mp3'],
        autoplay: false,
        loop: true,
        volume: 0.2,
        onend: function() {
          sound.skipSong();
        }
      });
      index++;
    }
    else if(index == 1) {
      sound = new Howl({
        src: ['assets/mp3_files/Laserpack.mp3'],
        autoplay: false,
        loop: true,
        volume: 0.2,
        onend: function() {
          sound.skipSong();
        }
      });
      index++;
    }
    else if(index == 2) {
      sound = new Howl({
        src: ['assets/mp3_files/The_Ice_Giants.mp3'],
        autoplay: false,
        loop: true,
        volume: 0.2,
        onend: function() {
          sound.skipSong();
        }
      });
      index++;
    }
    else if(index == 3) {
      sound = new Howl({
        src: ['assets/mp3_files/Gothamlicious.mp3'],
        autoplay: false,
        loop: true,
        volume: 0.2,
        onend: function() {
          sound.skipSong();
        }
      });
      index=0;
    }

    sound._sprite = {};
    sound._duration = 0;
    sound.load();
    sound.play();
  }
  goBackSong() {
    sound.pause();
    sound.unload();
    
    if(index == 0) {
      sound = new Howl({
        src: ['assets/mp3_files/The_Ice_Giants.mp3'],
        autoplay: false,
        loop: true,
        volume: 0.2,
        onend: function() {
          sound.skipSong();
        }
      });
      index=3;
    }
    else if(index == 3) {
      sound = new Howl({
        src: ['assets/mp3_files/Laserpack.mp3'],
        autoplay: false,
        loop: true,
        volume: 0.2,
        onend: function() {
          sound.skipSong();
        }
      });
      index=2;
    }
    else if(index == 2) {
      sound = new Howl({
        src: ['assets/mp3_files/Aquarium.mp3'],
        autoplay: false,
        loop: true,
        volume: 0.2,
        onend: function() {
          sound.skipSong();
        }
      });
      index=1;
    }
    else if(index == 1) {
      sound = new Howl({
        src: ['assets/mp3_files/Gothamlicious.mp3'],
        autoplay: false,
        loop: true,
        volume: 0.2,
        onend: function() {
          sound.skipSong();
        }
      });
      index=0;
    }

    sound._sprite = {};
    sound._duration = 0;
    sound.load();
    sound.play();
  }
}

var sound = new Howl({
  src: ['assets/mp3_files/Gothamlicious.mp3'],
  autoplay: false,
  loop: true,
  volume: 0.2,
  onend: function() {
    sound.skipSong();
  }
});
