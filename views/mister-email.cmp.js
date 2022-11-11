import emailList from '../apps/misterEmail/cmps/email-list.cmp.js'
import { emailService } from '../apps/misterEmail/services/email-service.js'
import emailFilter from '../apps/misterEmail/cmps/email-filter.cmp.js'
import emailForm from '../apps/misterEmail/cmps/email-form.cmp.js'
import { utilService } from '../services/util.service.js'
export default {
    template: `
        <section  v-if="emails" class="email-app">
        <div class="email-layout">
        <email-filter         
        @emitStatus = "renderStatus"
        @emitSendRequest = "composeEmail"
        @emitSearch="renderSearch"/>
        <email-list
        @emitReadSelected = "ChangeSelectedRead"
        @emitRemoveSelected ="removeSelected"
        @starEmail='starEmail'
        :emails = "emailsToShow"
        @remove="removeEmail" 
        @emitStatus = "renderStatus"
        />
        </div>
        <email-form
        v-if="isFormOpen"
        @closeForm="isFormOpen=!isFormOpen"
        @emitForm = "addSentEmail"/>
        </section>
    `,
    data() {
        return {
            emails: null,
            emailStatus: 'inbox',
            isFormOpen: false,
            searchTxt: '',
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
        ChangeSelectedRead(ids){
            ids.forEach(id => {
                let emails = utilService.loadFromStorage('Emails')
                let idx = emails.findIndex(email => email.id === id)
                emails[idx].isRead ? emails[idx].isRead = false: emails[idx].isRead = true
                utilService.saveToStorage('Emails',emails)
                this.emails=emails
            })
        },
        removeSelected(ids) {
            ids.forEach(id => {
                let emails = utilService.loadFromStorage('Emails')
                let idx = emails.findIndex(email => email.id === id)
                emails[idx].status === 'inbox'? emails[idx].status='trash': emails.splice(idx,1)
                utilService.saveToStorage('Emails',emails)
                this.emails=emails
            })

        },
        renderSearch(emitText) {
            this.searchTxt = emitText
        },
        renderStatus(status) {
            this.emailStatus = status
        },
        starEmail(emailId) {
            let emails = utilService.loadFromStorage('Emails')
            const idx = emails.findIndex(email => email.id === emailId)
            emails[idx].isStarred ? emails[idx].isStarred = false : emails[idx].isStarred = true
            utilService.saveToStorage('Emails', emails)
            this.emails = emails
        },
        addSentEmail(email) {
            emailService.save(email)
                .then(() => {
                    let emails = utilService.loadFromStorage('Emails')
                    this.emails = emails
                })
        },
        removeEmail(emailId) {
            emailService.query().then(emails => {
                const idx = emails.findIndex(email => email.id === emailId)
                emails[idx].status !== 'trash' ? emails[idx].status = 'trash' : emails.splice(idx, 1)
                this.emails = emails
                utilService.saveToStorage('Emails', this.emails)
            })
        },
        composeEmail() {
            this.isFormOpen = true
        },
    },
    computed: {
        emailsToShow() {
            let emailArr = this.emails
            if (this.emailStatus === 'inbox' || this.emailStatus === 'trash' || this.emailStatus === 'sent')
                emailArr = this.emails.filter(email => this.emailStatus === email.status)
            else if (this.emailStatus === 'starred') emailArr = this.emails.filter(email => email.isStarred === true)
            else if (this.emailStatus === 'read') emailArr = this.emails.filter(email => {
                return (email.isRead === true && email.status != 'sent' && email.status != 'trash')
            })
            else if (this.emailStatus === 'unread') emailArr = this.emails.filter(email => {
                return (email.isRead === false && email.status != 'sent' && email.status != 'trash')
            })
            const regex = new RegExp(this.searchTxt, 'i')
            return emailArr.filter(email => regex.test(email.sender && email.subject && email.body))
        }
    }
}
