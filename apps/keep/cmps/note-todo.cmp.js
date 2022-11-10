export default {
  props: ['keep'],
  template: `
    <section class="todo">
    <pre>{{keep.info.label}}</pre>
    <h1>TODO: {{keep.info.todos}}</h1> 
    </section>
  
  `,

  data() {
    return {};
  },

  components: {},
};
