import { noteService } from '../apps/keep/services/note-service.js';

import { utilService } from '../services/util.service.js';

import noteList from '../apps/keep/cmps/note-list.cmp.js';
import noteFilter from '../apps/keep/cmps/note-filter.cmp.js';
import notePreview from '../apps/keep/cmps/note-preview.cmp.js';
// import defaultKeeps from '../defaultKeeps.js';

export default {
  template: `
        <section  v-if="keeps" class="keep-app">
        <h1 class='pageTitle'>Notes</h1>
            <note-List
            :keeps = "keeps"
            @remove="removeKeep"/>
        </section>
    `,
  data() {
    return {
      keeps: null,
    };
  },
  created() {
    noteService
      .query()
      .then((keeps) => {
        return keeps;
      })
      .then((keeps) => {
        this.keeps = keeps;
      });
  },
  methods: {
    removeKeep(keepId) {
      noteService.query().then((keeps) => {
        console.log(keeps);
        const idx = keeps.findIndex((keep) => keep.id === keepId);
        keeps.splice(idx, 1);
        this.keeps = keeps;
        utilService.saveToStorage('keepsDB', this.keeps);
      });
    },
  },

  components: {
    noteList,
    noteFilter,
    notePreview,
  },
};
