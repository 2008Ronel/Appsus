export default {
  props:['email'],
  template: `
      <section class="email-preview flex-box" :style="[email.isRead ?{'background-color':'rgb(234, 247, 247)'}:{'background-color':'#f2f6fc'}]">
          <span @click="starEmail(email.id)"  class="fa fa-star" :style="[email.isStarred ?{'color':'yellow'}:{'background-color':'transparent'}]"></span>
          <h3 class="emailSender" :title="email.sender" :style="[email.isRead ?{'font-weight':'100'}:{'font-weight':'bold'}]">{{email.sender}}</h3>
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