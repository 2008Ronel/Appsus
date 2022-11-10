import keepPreview from '../cmps/note-preview.cmp.js';

export default {
  props: ['keeps'],
  template: `
    <section>
        <div class="keeps-list">
            <div v-for="keep in keeps" :key="keep.id">
                <keep-preview :keep="keep"/>
</div>
</div>
    </section>
`,
  data() {
    return {};
  },
  methods: {},

  computed: {},

  components: {
    keepPreview,
  },
};
