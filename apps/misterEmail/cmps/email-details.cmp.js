import { emailService } from '../services/email-service.js'
export default {
  template: `
      <section v-if="email" class="email-container">
      <h2 class="email-details-title">{{email.subject}}</h2>
       <section class="email-details">
        <div class="email-header flex-box">
        <p>{{email.sender}} <span class="emailAdress"><{{email.from}}></span></p>
        <h4>{{sentAt}}</h4>
        </div>
        <div class="emailContent">
          <p> {{email.body}}</p>
        </div>
        </section>
        <router-link to="/misterEmail" ><button class="email-details-backBtn">Back</button></router-link>
      </section>
      <h1 class="loadingState" v-else >Loading ...</h1> 
  `, data() {
    return {
      email:null,
    }
  },
  components:{
  },
  created(){
   this.loadEmail()
  },
  methods:{
    loadEmail(){
      emailService.get(this.emailId)
       .then(email=> {
        email.isRead = true
        emailService.replace(email)
        this.email = email
      })
       .catch(err => console.log(err))
    }
  },
  computed: {
    emailId(){
      return this.$route.params.id
    },
    sentAt(){
      return new Date(this.email.sentAt).toLocaleDateString() +' '
      +new Date(this.email.sentAt).getHours()<10?('0'+ new Date(this.email.sentAt).getHours()):new Date(this.email.sentAt).getHours()+':'+new Date(this.email.sentAt).getMinutes()
    }
  },
  watch:{
    emailId(){
      console.log('book id changed')
      this.loadEmail()
    }
  }
}