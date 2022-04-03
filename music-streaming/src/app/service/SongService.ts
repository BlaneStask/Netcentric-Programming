import {Injectable} from "@angular/core";
import { Subject } from "rxjs";
import Song from "../model/Song";

@Injectable()
export class SongService {
  private song$ = new Subject<Song>();

  getSong() {
    return this.song$;
  }

  updateSong(song: Song) {
    this.song$.next(song);
  }
}
