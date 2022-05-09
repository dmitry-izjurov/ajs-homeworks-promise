import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    function GameSaving() {
      return new Promise((resolve, reject) => {
        resolve();
        setTimeout(() => reject(new Error('Загрузка не удалась')), 5000);
      });
    }

    return new GameSaving().then(read).then(json).catch((e) => e);
  }
}
