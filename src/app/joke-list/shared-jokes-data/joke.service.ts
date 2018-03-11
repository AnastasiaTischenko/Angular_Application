import { Injectable } from '@angular/core';
import { Joke } from './joke';
import { Observable } from 'rxjs/Observable';
import { FireBaseService} from '../../fire-base.service';

@Injectable()
export class JokeService {
  ref = '/jokes';

  constructor(private firebaseService: FireBaseService) {}

  getJoke(): Observable<Joke[]> {
    return this.firebaseService.getDataList(this.ref);
  }

  createJoke(joke: Joke) {
    this.firebaseService.createData(this.ref + '/' + joke.punchline, new Joke(joke.setup, joke.punchline));
  }
}
