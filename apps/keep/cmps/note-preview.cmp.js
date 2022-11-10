import noteTodo from './note-todo.cmp.js';
import noteTxt from './note-txt.cmp.js';
import noteImg from './note-img.cmp.js';

export default {
  props: ['keep'],
  template: `
  <section v-if="keep.type === 'note-todos'" >
    <noteTodo :keep="keep"/>
  </section>

  <section v-else-if="keep.type === 'note-txt'">
  <noteTxt :keep="keep"/>
  
  
</section>

  <section v-else-if="keep.type === 'note-img'">
    <noteImg :keep="keep"/>
  </section>
`,

  data() {
    return {};
    // return {
    //   index: {
    //     'note-txt': this.renderText,
    //     'note-img': this.renderImg,
    //     'note-todos': this.renderTodo,
    //   },
    // };
  },

  methods: {},
  components: {
    noteTodo,
    noteTxt,
    noteImg,
  },
};
