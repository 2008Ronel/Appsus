import emailList from '../apps/misterEmail/cmps/email-list.cmp.js'
import { emailService } from '../apps/misterEmail/services/email-service.js'
export default {
    template: `
        <section  v-if="emails" class="email-app">
        <h1 class='pageTitle'>Jmail</h1>
        <email-list
        :emails = "emails"/>
        </section>
    `,
    data() {
        return {
            emails: null,
        }
    },
    created() {
        emailService.query()
            .then(emails =>
                {return emails}).then((emails)=> this.emails = emails)
    },
    components: {
        emailList
    }
}
