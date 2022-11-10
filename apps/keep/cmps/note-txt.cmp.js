export default {
  props: ['keep'],
  template: `
      <section class= "txt">
  
<pre>{{keep.info.txt}}</pre>

      </section>

    `,

  data() {
    return {};
  },

  methods: {
    removeKeep() {
      this.$emit('remove', this.keep.id);
    },
  },

  components: {},
};
