import emailList from '../apps/misterEmail/cmps/email-list.cmp.js'
import { emailService } from '../apps/misterEmail/services/email-service.js'
import emailFilter from '../apps/misterEmail/cmps/email-filter.cmp.js'
export default {
    template: `
        <section  v-if="emails" class="email-app">
        <h1 class='pageTitle'>Jmail</h1>
        <email-filter/>
        <email-list
        :emails = "emails"
        @remove="removeEmail" 
        />
        </section>
    `,
    data() {
        return {
            emails: null,
        }
    },
    created() {
        emailService.query()
            .then(emails => { return emails }).then((emails) => this.emails = emails)
    },
    components: {
        emailList,
        emailFilter
    },
    methods: {
        removeEmail(emailId) {
            emailService.remove(emailId)
                .then(() => {
                    const idx = this.emails.findIndex(email => email.id === emailId)
                    this.emails.splice(idx, 1)
                })
        }
    }
}
