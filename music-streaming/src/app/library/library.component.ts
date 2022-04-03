import { Component } from '@angular/core';
import {Howl, Howler} from 'howler';


@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})

export class LibraryComponent { }

var sound = new Howl({
  src: ['assets/mp3_files/Aquarium.mp3', 
        'assets/mp3_files/Gothamlicious.mp3', 
        'assets/mp3_files/Laserpack.mp3', 
        'assets/mp3_files/The_Ice_Giants.mp3'],
  autoplay: false,
  loop: true,
  volume: 0.5,
  onend: function() {
    console.log('Finished!');
  }
});


