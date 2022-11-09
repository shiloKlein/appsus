'use strict'

import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const MAIL_KEY = 'mailDB'

const loggedinUser = { email: 'user@appsus.com', fullname: 'Async Await' }
// _createMails()

export const mailService = {
    query,
    get,
    remove,
    save,
    getEmptyMail,
    getNextMailId
}

function query() {
    return storageService.query(MAIL_KEY)
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
    return { id: '', subject, body, isRead: false, sentAt, from, to, }
}


function getNextMailId(mailId) {
    return storageService.query(MAIL_KEY)
        .then(mails => {
            var idx = mails.findIndex(mail => mail.id === mailId)
            if (idx === mails.length - 1) idx = -1
            return mails[idx + 1].id
        })
}

// function _createMails() {
//     let mails = utilService.loadFromStorage(MAIL_KEY)
//     if (!mails || !mails.length) {
//         mails = []
//         mails.push(_createMail('important meeting', `it was an honor to meet you last sunday. 
//         please remember the next meeting will take place next week in the same hour at the same place.
//         this meeting is very important to our company!!`, Date.now(),
//             'bannana@async.com', 'potato@oop.com'))
//         // mails.push(_createMail('new offer for you', 120))
//         // mails.push(_createMail('about the course', 100))
//         // mails.push(_createMail('apl progremming language', 150))
//         utilService.saveToStorage(MAIL_KEY, mails)
//     }
//     return mails
// }

function _createMail(subject = '', body = '', sentAt = null, from = '', to = '') {
    const mail = getEmptyMail(subject, body, sentAt, from, to)
    mail.id = utilService.makeId()
    return mail
}


const emails = [
    {
        id: 'e101',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: 'e102',
        subject: 'important meeting',
        body: `it was an honor to meet you last sunday. 
            please remember the next meeting will take place next week in the same hour at the same place.
            this meeting is very important to our company!!`,
        isRead: false,
        sentAt: 1551123330594,
        from: 'bannana@async.com',
        to: 'user@appsus.com'
    },
    {id: 'e10',
    subject: 'important flubby',
    body: `lorem ipsum`,
    isRead: false,
    sentAt: 1551423330594,
    from: 'user@appsus.com',
    to: 'bannana@async.com'
    },
]