'use strict'

import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const MAIL_KEY = 'mailDB'

const loggedinUser = { email: 'vueser@apl.com', fullname: 'Async Await' }
_createMails()

export const mailService = {
    query,
    get,
    remove,
    save,
    getEmptyMail,
    getNextMailId,
    sendMail,
    getLoggedInUser,

}

function getLoggedInUser() {
    return loggedinUser
}

function sendMail({ to, subject, body }) {
    // console.log(body);
    const user = loggedinUser
    const mail = _createMail(user.email, to, subject, body)
    console.log(mail);
    return storageService.post(MAIL_KEY, mail)
}

function query({folder}) {
    return storageService.query(MAIL_KEY)
        .then(mails => {
            console.log(folder);
            if (folder === 'inbox') {
                mails = mails.filter(mail => !mail.isSent)
            }
            else if (folder === 'starred') {
                mails = mails.filter(mail => mail.isStarred)
            }
            else if (folder === 'sent') {
                mails = mails.filter(mail => mail.isSent)
            }
            else if (folder === 'trash') {
                mails = mails.filter(mail => mail.isTrash)
            }
           return mails
        })
}

function get(mailId) {
    return storageService.get(MAIL_KEY, mailId)
}

function remove(mailId) {
    return storageService.remove(MAIL_KEY, mailId)
}

function save(mail) {
    if (mail.id) {
        return storageService.put(MAIL_KEY, mail)
    } else {
        return storageService.post(MAIL_KEY, mail)
    }
}

function getEmptyMail(subject = '', body = '', sentAt = null, from = '', to = '') {
    return {
        id: '', subject, body, sentAt, from, to,
        isRead: false,
        isSent: true,
        isTrash: false,
        isDraft: false,
    }
}


function getNextMailId(mailId) {
    return storageService.query(MAIL_KEY)
        .then(mails => {
            var idx = mails.findIndex(mail => mail.id === mailId)
            if (idx === mails.length - 1) idx = -1
            return mails[idx + 1].id
        })
}

//

function _createMail(from = '', to = '', subject = '', body = '', sentAt = null) {
    const mail = getEmptyMail(subject, body, sentAt, from, to)
    mail.to = to
    mail.subject = subject
    mail.body = body
    mail.sentAt = Date.now()
    mail.id = utilService.makeId()
    return mail
}


function _createMails() {
    let mails = utilService.loadFromStorage(MAIL_KEY)

    if (!mails || !mails.length) {
        mails = [
            {
                id: 'e101',
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes',
                isRead: false,
                isStarred: false,
                isSent: false,
                isTrash: false,
                isDraft: false,
                sentAt: 1551133930594,
                from: 'momo@momo.com',
                to: 'user@appsus.com',
            },
            {
                id: 'e102',
                subject: 'important meeting',
                body: `it was an honor to meet you last sunday. 
                    please remember the next meeting will take place next week in the same hour at the same place.
                    this meeting is very important to our company!!`,
                isRead: false,
                isStarred: false,
                isSent: false,
                isTrash: false,
                isDraft: false,
                sentAt: 1551123330594,
                from: 'bannana@async.com',
                to: 'user@appsus.com'
            },
            {
                id: 'e10',
                subject: 'important flubby',
                body: `lorem ipsum you are very welcom. `,
                isRead: false,
                isStarred: false,
                isSent: true,
                isTrash: false,
                isDraft: false,
                sentAt: 1551423330594,
                from: 'user@appsus.com',
                to: 'bannana@async.com'
            },
        ]
        // mails.push(_createMail('important meeting',
        //     `it was an honor to meet you last sunday. 
        //     please remember the next meeting will take place next week in the same hour at the same place.
        //     this meeting is very important to our company!!`,
        //     Date.now(),
        //     'bannana@async.com',
        //     'potato@oop.com'))
        // mails.push(_createMail('new offer for you', 120))
        // mails.push(_createMail('about the course', 100))
        // mails.push(_createMail('apl progremming language', 150))
        storageService.save(MAIL_KEY, mails)
        console.log(mails);
    }
    return mails
}