export default {
  props: ['keep'],
  template: `

<div className="todos">
<input v-model="keep.info.label" :type="search" placeholder="text..."/>
<div className="txtodo">

<input v-model="keep.info.todos[0].txt" :type="search" placeholder="title.."/>
<input v-model="keep.info.todos[1].txt" :type="search" placeholder="title.."/>
</div>

    <section class="todo">
      
    <pre>{{keep.info.label}}</pre>
    <h1>TODO: {{keep.info.todos[0].txt}}</h1> 
    <h1>TODO: {{keep.info.todos[1].txt}}</h1> 

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
