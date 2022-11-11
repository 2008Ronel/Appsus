import emailList from '../apps/misterEmail/cmps/email-list.cmp.js'
import { emailService } from '../apps/misterEmail/services/email-service.js'
import emailFilter from '../apps/misterEmail/cmps/email-filter.cmp.js'
import emailForm from '../apps/misterEmail/cmps/email-form.cmp.js'
import { utilService } from '../services/util.service.js'
export default {
    template: `
        <section  v-if="emails" class="email-app">
        <h1 class='pageTitle'>Jmail</h1>
        <email-filter         
        @emitStatus = "renderStatus"
        @emitSendRequest = "composeEmail"/>
        <email-list
        @starEmail='starEmail'
        :emails = "emailsToShow"
        @remove="removeEmail" 
        />
        <email-form
        v-if="isFormOpen"
        @closeForm="isFormOpen=!isFormOpen"/>
        </section>
    `,
    data() {
        return {
            emails: null,
            emailStatus:'inbox',
            isFormOpen: false
        }
    },
    created() {
        emailService.query()
            .then(emails => { return emails }).then((emails) => this.emails = emails)
    },
    components: {
        emailList,
        emailFilter,
        emailForm
    },
    methods: {
        renderStatus(status){
            this.emailStatus = status
        },
        starEmail(emailId){
            let emails = utilService.loadFromStorage('Emails')
            const idx = emails.findIndex(email => email.id === emailId)
            emails[idx].isStarred ? emails[idx].isStarred = false : emails[idx].isStarred = true
            utilService.saveToStorage('Emails',emails)
            this.emails = emails
        },
        removeEmail(emailId) {
            emailService.query().then(emails => {
                const idx = emails.findIndex(email => email.id === emailId)
                emails[idx].status !== 'trash' ? emails[idx].status = 'trash' : emails.splice(idx,1)
                this.emails = emails
                utilService.saveToStorage('Emails',this.emails)
            })
        },
        composeEmail(){
            this.isFormOpen = true
        }

    },
    computed:{
        emailsToShow() {
            let emailArr = this.emails
            if(this.emailStatus==='inbox'||this.emailStatus==='trash'|| this.emailStatus==='sent') 
            emailArr = this.emails.filter ( email => this.emailStatus === email.status )
            else if(this.emailStatus==='starred') emailArr = this.emails.filter ( email => email.isStarred === true )
            else if(this.emailStatus==='read') emailArr = this.emails.filter ( email => email.isRead === true )
            else if(this.emailStatus==='unread') emailArr = this.emails.filter ( email => email.isRead === false)
            // const regex = new RegExp(this.filterBy.title, 'i')
            return emailArr
            // .filter(book => regex.test(book.title))
          }
    }
}
