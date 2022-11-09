export default {
  props:['email'],
  template: `
      <section class="email-preview">
          <h3>{{email.sender}}</h3>
          <h4 class='emailTitle'>{{ email.subject }}</h4>
          <p class='emailTitle'>{{ email.body }}</p>
      </section>
  `,computed: {
    },
}