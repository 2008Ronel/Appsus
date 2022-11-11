import keepPreview from '../cmps/note-preview.cmp.js';
export default {
  props: ['keeps'],
  template: `
    <section>
        <div class="keeps-list">
          <div v-for="keep in keeps" :key="keep.id" class="keep">
            <keep-preview :keep="keep"/>
            <button @click="removeKeep">x</button>
              <!-- <input type="color" @change="changeColor()"  v-model="color"  class= "color"/> -->


</div>
</div>
    </section>
`,
  data() {
    return {
      color: '',
    };
  },
  methods: {
    removeKeep(keepId) {
      this.$emit('remove', keepId);
      // console.log('aaa');
      // console.log(keepId);
    },

    changeColor(event) {
      console.log('e', this.color);
    },
    // changeColor(keepId)
  },

  computed: {},

  components: {
    keepPreview,
  },
};
