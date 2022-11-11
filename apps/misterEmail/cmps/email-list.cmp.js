import emailPreview from './email-preview.cmp.js'
// import { emailService } from '../services/email-service.js'
export default {
    props: ['emails'],
    template: `
        <section v-if="emails" class="email-list">
        <h3 class="read-messages">You have <span @click = "$emit('emitStatus','read')" class="isReadStat" title="View read">{{isRead}}</span> read messages</h3>
        <div class="checkBoxBtns">
        <span v-if="showRemoveBtn" class="checkboxRemove" @click="emitRemoveSelected">Remove emails</span>
        <span v-if="showRemoveBtn" class="checkboxRead" @click="emitReadSelected">Change Read</span>
        </div>
            <ul>
                <li v-for="email in emails" :key="email.id" class="emailDiv flex-box">
                    <input type="checkbox" v-model="isChecked" :value="email.id" @click="console()" />
                    <email-preview @starEmail='starEmail' :email="email" v-model="isChecked"/>
                    <section class="actions">
                        <router-link :to="'/misterEmail/'+email.id"><img src="../Appsus/assets/img/openMail.png"></router-link>
                        <button><img src="../Appsus/assets/img/deleteIcon.png"  @click="remove(email.id)" class="deleteIcon"></button> 
                    </section> 
                </li>
            </ul>
        </section> 
        <h1 v-else class="loadingState"  >Loading ...</h1> 
    `,
    created() {
    },
    mounted() {
        this.emails.forEach(email => {
            if (email.isRead) this.isRead += 1
        })
    },
    data() {
        return {
            isRead: 0,
            isChecked: [],
            showRemoveBtn: false
        }
    },
    methods: {
        emitReadSelected(){
            this.$emit('emitReadSelected',this.isChecked)
            this.isChecked = []
            this.showRemoveBtn = false
        },
        emitRemoveSelected(){
            this.$emit('emitRemoveSelected',this.isChecked)
            this.isChecked = []
            this.showRemoveBtn = false
        },
        console() {
            setTimeout(() => {this.isChecked.length ? this.showRemoveBtn = true : this.showRemoveBtn = false}, 1);
        },
        starEmail(emailId) {
            this.$emit('starEmail', emailId)
        },
        remove(emailId) {
            this.$emit('remove', emailId)
        }
    },
    components: {
        emailPreview
    },
    watch:{

    }
}