export default {
  props: ['keep'],
  template: `
    <section class="todo">
      
    <pre>{{keep.info.label}}</pre>
    <h1>TODO: {{keep.info.todos[0].txt}}</h1> 
    <h1>TODO: {{keep.info.todos[1].txt}}</h1> 


    </section>
  
  `,

  data() {
    return {};
  },

  components: {},
};
