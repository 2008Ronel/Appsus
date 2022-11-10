import { noteService } from '../note-service.js';

export default {
  template: `
<section>
    
    
    <!-- <component></component> -->
    
    
    <form @submit.prevent="addNote" class="add-note flex center">
        <input v-model="noteToEdit.info.txt" type="type"/>
        <button>submit</button>

    </form>


</section>
`,
  data() {
    return {
      noteToEdit: noteService.getEmptyNote(),
    };
  },
  created() {
    console.log(this.noteToEdit);
  },
  methods: {
    addNote() {
      const note = JSON.parse(JSON.stringify(this.noteToEdit));
      this.$emit('addNote', note);
      this.noteToEdit = noteService.getEmptyNote();
    },
  },
  computed: {},
  components: {},
};
