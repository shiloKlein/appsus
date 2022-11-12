import newMail from '../apps/mail/cmps/new-mail.cmp.js'
import mailsList from '../apps/mail/cmps/mails-list.cmp.js'
import mailNav from '../apps/mail/cmps/mail-nav.cmp.js'

import { mailService } from '../apps/mail/services/mail-service.js'



export default {
    template: `
        <section class="email-app flex">
            <mail-nav @folderChosen="getMails" 
            @composeClicked="compose"/>

            <mails-list v-if="mails" :mails="filterByTxt" 
            @delete="deleteMail"
            @starred="updateMailStar"
            @trashed="passToTrash"/>

            <new-mail v-if="isWriting"
            @close="close"
            @send="sendMail"
            />
        </section>
    `,
    data() {
        return {
            mails: null,
            searchTxt: '',
            isWriting: false
        }
    },

    created() {
        this.getMails()
    },

    methods: {
        getMails() {
            const folder =  this.$route.params
            mailService.query(folder)
                .then(mails =>{
                    this.mails = mails
                })
        },
        deleteMail(mailId) {
            const idx = this.mails.findIndex(mail=>mail.id===mailId)
            this.mails.splice(idx,1)
            
            mailService.remove(mailId)
                .then(() => {
                    const idx = this.mails.findIndex(mail => mail.id === mailId)
                    this.mails.splice(idx, 1)
                })
        },
        compose() {
            this.isWriting = true
            console.log(this.router);
        },
        close() {
            this.isWriting = false
        },
        sendMail(newMail) {
            mailService.sendMail(newMail)
                .then(mail => {
                    console.log(mail);
                    this.mails.push(mail)
                })
            this.isWriting = false
        },
        updateMailStar(mail){
        mailService.save(mail)
        },
        passToTrash(mail, mailId){
            mailService.save(mail)
            const idx = this.mails.findIndex(mail=>mail.id===mailId)
            console.log(idx);
            this.mails.splice(idx,1)

        }

    },
    computed: {
        filterByTxt() {
            if (!this.searchTxt) return this.mails
            const regex = new RegExp(this.searchTxt, 'i')
            return this.mails.filter((mail) =>{ 
            return regex.test(mail.to)||
            regex.test(mail.from)||
            regex.test(mail.subject)})
       },

        mailsInFolder(folder) {
            const user = mailService.getLoggedInUser

        },
    },
        


        components: {
            newMail,
            mailsList,
            mailNav

        }
    }
