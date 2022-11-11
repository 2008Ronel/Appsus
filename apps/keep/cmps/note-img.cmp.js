export default {
  props: ['keep'],
  template: `

<input v-model="note.info.url" @change="onFileChange" type="file" placeholder=""/>


  
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
