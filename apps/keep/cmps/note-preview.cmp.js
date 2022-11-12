import noteTodo from './note-todo.cmp.js';
import noteTxt from './note-txt.cmp.js';
import noteImg from './note-img.cmp.js';

import noteCrudl from './note-crudl.cmp.js';

export default {
  props: ['keep'],
  template: `




  <section  v-if="keep.type === 'note-todos'" >
    <noteTodo :style="style" :keep="keep"/>
  </section>

  <section   v-else-if="keep.type === 'note-txt'">
  <noteTxt :style="style"  :keep="keep"/>
  
  
</section>

  <section @click="changeColor()"  v-else-if="keep.type === 'note-img'">
    <noteImg  :style="style" :keep="keep"/>
  </section>
  <input type="color" @change="changeColor()"  v-model="color"  class= "color"/>

  <note-crudl 
              @remove="removeKeep"/>
    </section>

`,

  data() {
    return {};
  },

  computed: {
    style() {
      return 'background-color: ' + this.keep?.color;
    },
  },

  methods: {
    changeColor(event) {
      this.keep.color = this.color;
    },
  },

  components: {
    noteTodo,
    noteTxt,
    noteImg,
    noteCrudl,
    // addText,
  },
};
