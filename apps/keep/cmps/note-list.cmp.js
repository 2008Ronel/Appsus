import keepPreview from '../cmps/note-preview.cmp.js';
export default {
  props: ['keeps'],
  template: `
    <section>
        <div class="keeps-list">
          <div v-for="keep in keeps" :key="keep.id" class="keep">
            <keep-preview :keep="keep"/>
            <button @click="removeKeep">x</button>


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
    },

    changeColor(event) {
      console.log('e', this.color);
    },
  },

  computed: {},

  components: {
    keepPreview,
  },
};
