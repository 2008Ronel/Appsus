export default {
  template: `   
     <section class="compose-form">
      <span @click="emitCloseForm" class="formCloseBtn">x</span>
        <form>
          <div>
          <input placeholder="Contact Email Adress" type="text">
          </div>
          <div>
          <input type="text" placeholder="Subject">
          </div>
          <div>
          <textarea rows="20" cols="25"></textarea>
          </div>

          <button @click.prevent="sendForm($event)" class="sendFormBtn">Send</button>
        </form>
      </section>
  `
  , created() {

  },
  data(){
    return{
      
    }
  }
  , computed: {
  },
  methods:{
    emitCloseForm(){
      this.$emit('closeForm')
    }
  }
}