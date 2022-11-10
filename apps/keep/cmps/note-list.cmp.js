import keepPreview from '../cmps/note-preview.cmp.js';

export default {
  props: ['keeps'],
  template: `
    <section>
        <ul class="keeps-list">
            <li v-for="keep in keeps" :key="keep.id">
                <keep-preview :keep="keep"/>
            </li>
        </ul>
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
