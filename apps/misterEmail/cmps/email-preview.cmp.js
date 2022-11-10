export default {
  props:['email'],
  template: `
      <section class="email-preview flex-box" :style="[email.isRead ?{'background-color':'rgb(218, 218, 218)'}:{'background-color':'rgb(230, 230, 230)'}]">
           <span @click="starEmail(email.id)"  class="fa fa-star" :style="[email.isStarred ?{'color':'yellow'}:{'background-color':'transparent'}]"></span>
          <h3 class="emailSender" :style="[email.isRead ?{'font-weight':'100'}:{'font-weight':'bold'}]">{{email.sender}}</h3>
          <h4 class="emailSubject" :style="[email.isRead ?{'font-weight':'100'}:{'font-weight':'bold'}]">{{ email.subject }} - </h4>
          <p class="emailBody">{{ email.body }}</p>
      </section>
  `
  ,created(){
    
  },
  methods:{
    starEmail(emailId){
        this.$emit('starEmail',emailId)
    }
  }
  ,computed: {
    },
}