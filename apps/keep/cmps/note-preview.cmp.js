import noteTodo from './note-todo.cmp.js';

export default {
  props: ['keep'],
  template: `
  <!-- <section v-html=renderKeep(keep)></section> -->
  <section v-if="keep.type === 'note-todos'" >
    <noteTodo :keep="keep"/>
  </section>

  <section v-else-if="keep.type === 'note-txt'">
    <!-- // create component that renders note text -->
    <!-- <noteTodo :keep="keep"/> -->
  </section>

  <section v-else-if="keep.type === 'note-img'">
    <!-- // create component that renders note img -->
    <!-- <noteTodo :keep="keep"/> -->
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

  methods: {
    // renderKeep(keep) {
    //   const template = this.index[keep.type];
    //   return template(keep);
    // },
    // renderText(keep) {
    //   return `
    //   <h1>Y</h1>
    //   `;
    // },
    // renderImg(keep) {
    //   return `
    //   <h1>YA! renderImg</h1>
    //   `;
    // },
    // renderTodo(keep) {
    //   return `
    //   <h1>Label: ${keep.info.label}</h1>
    //   <ul>
    //   ${keep.info.todos.forEach((todo) => {
    //     console.log(todo);
    //     return `
    //     <li>${todo.txt}</li>
    //     `;
    //   })}
    //   </ul>
    //   `;
    // },
  },
  components: {
    noteTodo,
  },
};
