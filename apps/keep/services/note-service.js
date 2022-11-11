import { storageService } from '../../../services/async-storage.service.js';
import defaultKeeps from '../../../defaultKeeps.json' assert { type: 'json' };

const KEEPS_KEY = 'keepsDB';

_createKeep();

export const noteService = {
  query,
  removeKeep,
  updateKeep,
  _createKeep,

  // remove,
};

function query() {
  return storageService.query(KEEPS_KEY);
}

function updateKeep(newKeep) {
  keepsDB.push(newKeep);
  storageService.put(KEEPS_KEY, keeps);
}

function removeKeep(keepId) {
  const keep = query().then((keeps) => {
    const idx = keeps.findIndex((keep) => keep.id === keepId);
    keeps.splice(idx, 1);
    storageService.post(KEEPS_KEY, keeps);
    return keeps;
  });
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
