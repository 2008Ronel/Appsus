export default {
  props: ['keep'],
  template: `
    <section>
    <h1>Label: {{keep.info.label}}</h1>
    <h1>TODO: {{keep.info.todos}}</h1>

    </section>
  
  `,

  data() {
    return {};
  },

  components: {},
};
