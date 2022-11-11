export default {
  props: ['keep'],
  template: `

<form>
<input v-model="keep.info.txt" :type="search" placeholder="text..."/>

</form>

      <section class= "txt" :style="style">
  
<pre>{{keep.info.txt}}</pre>

      </section>

      <section>

</section>

    `,

  computed: {
    style() {
      return 'background-color: ' + this.keep?.color;
    },
  },

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
