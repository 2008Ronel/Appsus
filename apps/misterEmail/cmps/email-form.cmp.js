import { utilService } from "../../../services/util.service.js"

export default {
  template: `   
     <section class="compose-form">
      <span @click="emitCloseForm" class="formCloseBtn">x</span>
        <form>
          <div>
          <input placeholder="Contact Email Adress" type="text" v-model="formEmail.to">
          </div>
          <div>
          <input type="text" placeholder="Subject" v-model="formEmail.subject">
          </div>
          <div>
          <textarea rows="20" cols="25" v-model="formEmail.body"></textarea>
          </div>
          <button @click.prevent="sendForm($event)" class="sendFormBtn">Send</button>
        </form>
      </section>
  `
  , created() {

  },
  data(){
    return{
      formEmail:{ 
        id: utilService.makeId(),
          status:"sent",
          sender:"You",
          subject: "",
          body: "", 
          isRead: false,
          isStarred:false,
          sentAt : 1551133930594,
          from: "user@appsus.com", 
          to: ""
      },
    }
  }
  , computed: {

  },
  methods:{
    emitCloseForm(){
      this.$emit('closeForm')
    },
    sendForm(){
      this.formEmail.sentAt = Date.now()
      this.$emit('emitForm',this.formEmail)
    }
  }
}