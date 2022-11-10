export default {
  props: ['keep'],
  template: `
      <section class="images">
      <img :src="keep.info.img"/>

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
