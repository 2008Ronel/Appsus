export default {
  props:['email'],
  template: `
      <section class="email-preview flex-box" :style="[email.isRead ?{'background-color':'rgb(209, 209, 209)'}:{'background-color':'rgb(230, 230, 230)'}]">
          <h3 class="emailSender" :style="[email.isRead ?{'font-weight':'100'}:{'font-weight':'bold'}]">{{email.sender}}</h3>
          <h4 class="emailSubject" :style="[email.isRead ?{'font-weight':'100'}:{'font-weight':'bold'}]">{{ email.subject }} - </h4>
          <p class="emailBody">{{ email.body }}</p>
      </section>
  `
  ,created(){
    
  }
  ,computed: {
    },
}