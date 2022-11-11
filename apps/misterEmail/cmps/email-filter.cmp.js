export default {
  template: `   
    <input type="search" placeholder="Search inbox" class="email-search"/>
      <button @click="emitSendRequest" class="composeBtn flex-box">Compose <img class="composePic" src='../Appsus/assets/img/email_compose_pen.png'/></button>  
      <section>
   <span class="hamburger"> <span class="emailFirstLetter">G</span>mail<img class="appPic" src='../Appsus/assets/img/emailIcon.png'/> <button  @click="isOpenMenu=!isOpenMenu" class="hamburger-btn">☰</button></span>
        <div  v-if="isOpenMenu" class="email-all-filters flex-box">
          <button @click = "emitStatus('inbox')">Inbox</button>
          <button @click = "emitStatus('sent')">Sent</button>
          <button @click = "emitStatus('trash')">Trash</button>
          <button @click = "emitStatus('starred')">Starred</button>
          <button @click = "emitStatus('read')">Read Messages</button>
          <button @click = "emitStatus('unread')">Unread Messages</button>
        </div>
      </section>
  `
  , created() {

  },
  data(){
    return{
      isOpenMenu:false
    }
  }
  , computed: {
  },
  methods:{
    emitStatus(status){
      this.$emit('emitStatus',status)
    },
    emitSendRequest(){
      this.$emit('emitSendRequest')
    }
  }
}