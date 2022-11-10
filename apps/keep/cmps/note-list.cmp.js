import keepPreview from '../cmps/note-preview.cmp.js';

export default {
  props: ['keeps'],
  template: `
    <section>
        <div class="keeps-list">
            <div v-for="keep in keeps" :key="keep.id">
              <keep-preview :keep="keep"/>
              <button @click="remove(keep.id)">x</button>

</div>
</div>
    </section>
`,
  data() {
    return {};
  },
  methods: {
    remove(keepId) {
      this.$emit('remove', keepId);
      // console.log('aaa');
      // console.log(keepId);
    },
  },

  computed: {},

  components: {
    keepPreview,
  },
};
