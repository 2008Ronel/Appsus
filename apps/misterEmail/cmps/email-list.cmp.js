import emailPreview from './email-preview.cmp.js'
// import { emailService } from '../services/email-service.js'
export default {
    props: ['emails'],
    template: `
        <section v-if="emails" class="email-list">
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
    `,
    created() {
        console.log(this.emails)
    },
    data() {
        return {
           
        }
    },
    methods: {
       
    },
    components: {
      emailPreview 
    }
}