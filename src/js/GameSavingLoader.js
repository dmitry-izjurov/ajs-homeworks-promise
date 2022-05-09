import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    function GameSaving() {
      return read();
    }

    return new GameSaving().then(json);
  }
}
