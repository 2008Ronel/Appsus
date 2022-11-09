import { noteService } from '../apps/keep/services/note-service.js';

import noteList from '../apps/keep/cmps/note-list.cmp.js';
import noteFilter from '../apps/keep/cmps/note-filter.cmp.js';
import notePreview from '../apps/keep/cmps/note-preview.cmp.js';
// import defaultKeeps from '../defaultKeeps.js';

export default {
  template: `
        <section  v-if="keeps" class="keep-app">
        <h1 class='pageTitle'>Notes</h1>
            <noteList
            :keeps = "keeps"/>
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
  components: {
    noteList,
    noteFilter,
    notePreview,
  },
};
