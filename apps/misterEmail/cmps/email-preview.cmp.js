export default {
  props:['email'],
  template: `
      <section class="email-preview flex-box" :style="[email.isRead ?{'background-color':'rgb(209, 209, 209)'}:{'background-color':'rgb(230, 230, 230)'}]">
          <h3 class="emailSender">{{email.sender}}</h3>
          <h4 class="emailSubject">{{ email.subject }}</h4>
          <p class="emailBody">{{ email.body }}</p>
      </section>
  `
  ,created(){
    
  }
  ,computed: {
    },
}