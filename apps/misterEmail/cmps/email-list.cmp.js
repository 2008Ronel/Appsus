import emailPreview from './email-preview.cmp.js'
// import { emailService } from '../services/email-service.js'
export default {
    props: ['emails'],
    template: `
        <section class="email-actions">
            <button class="composeBtn">Compose</button>
        </section>
        <section v-if="emails" class="email-list">
        <h3 class="read-messages">Read messages: {{isRead}}</h3>
            <ul>
                <li v-for="email in emails" :key="email.id" class="emailDiv">
                    <email-preview :email="email"/>
                    <section class="actions">
                        <button @click="remove(email.id)">x</button> 
                        <router-link :to="'/misterEmail/'+email.id"><button>Show Email</button></router-link>
                    </section> 
                </li>
            </ul>
        </section> 
        <h1 v-else class="loadingState"  >Loading ...</h1> 
    `,
    created() {  
    },
    mounted(){
        this.emails.forEach(email =>{
            if (email.isRead) this.isRead+=1
        })
    },
    data() {
        return {
            isRead:0
        }
    },
    methods: {
    },
    components: {
      emailPreview 
    }
}