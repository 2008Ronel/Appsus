import { noteService } from '../apps/keep/services/note-service.js';

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
    remove(keepId) {
      noteService.removeKeep(keepId).then(() => {
        const idx = this.cars.findIndex((keep) => keep.id === keepId);
        this.keep.splice(idx, 1);
      });
    },
  },

  components: {
    noteList,
    noteFilter,
    notePreview,
  },
};
