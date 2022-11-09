import { storageService } from '../../../services/async-storage.service.js';
import defaultKeeps from '../../../defaultKeeps.json' assert { type: 'json' };

const KEEPS_KEY = 'keepsDB';

_createKeep();

export const noteService = {
  query,
  removeKeep,
  updateKeep,
  _createKeep,
  //   remove,
};

function query() {
  return storageService.query(KEEPS_KEY);
}

function updateKeep(newKeep) {
  keepsDB.push(newKeep);
  storageService.put(KEEPS_KEY, keeps);
}

function removeKeep(keepId) {
  const keeps = query();
  const idx = keeps.findIndex((keep) => keep.id === keepId);
  keeps.splice(idx, 1);
  storageService.post(KEEPS_KEY, keeps);
}

function _createKeep() {
  storageService.query(KEEPS_KEY).then((keeps) => {
    if (!keeps || !keeps.length) {
      keeps = defaultKeeps;
      storageService.post(KEEPS_KEY, keeps, false);
    }
    return keeps;
  });
}

// function deleteKeep(idx) {
//     keepsDB.splice(idx, 1);
//     storageService.store(NOTES_KEY, notesDB);
//   }
