import emailStart from '../data/emails.json' assert {type: 'json'}
import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const loggedinUser = {
  email: 'user@appsus.com', fullname: 'Mahatma Appsus'
}

const EMAILS_KEY = 'Emails'
_createEmails()

export const emailService = {
  replace,
  get,
  query,
  remove,
  save,
}

function query() {
  return storageService.query(EMAILS_KEY)
}

function get(emailId) {
  return storageService.get(EMAILS_KEY, emailId)
}

function replace(emailId) {
  return storageService.put(EMAILS_KEY, emailId)
}
function remove(emailId) {
  return storageService.remove(EMAILS_KEY, emailId)
}

function save(email) {
  if (email.id) {
    return storageService.put(EMAILS_KEY, email)
  } else {
    return storageService.post(EMAILS_KEY, email)
  }
}

// function getNextBookId(bookId){
//   return storageService.query(EMAILS_KEY)
//   .then(books =>{
//     const idx= books.findIndex(book => bookId === book.id)
//     if(idx === books.length-1) idx = -1
//     return books[idx+1].id
//   })
// }

// function getPrevBookId(bookId){
//   return storageService.query(EMAILS_KEY)
//   .then(books =>{
//     const idx= books.findIndex(book => bookId === book.id)
//     if(idx === 0) idx = books.length-1
//     return books[idx-1].id
//   })
// }

// function renderBook(book) {
//   let bookInfo = getEmptyBook()
//   bookInfo.authors = book.volumeInfo.authors
//   bookInfo.categories = book.volumeInfo.categories
//   bookInfo.description = book.volumeInfo.description
//   bookInfo.id = book.id
//   bookInfo.language = book.volumeInfo.language
//   bookInfo.listPrice = { amount: Math.floor(Math.random() * 250), currencyCode: 'ILS', isOnSale: false }
//   bookInfo.pageCount = book.volumeInfo.pageCount
//   bookInfo.publishedDate = book.volumeInfo.publishedDate
//   bookInfo.subtitle = book.volumeInfo.subtitle
//   bookInfo.thumbnail = book.volumeInfo.imageLinks.thumbnail
//   bookInfo.title = book.volumeInfo.title
//   bookInfo.title.slice(0,15)
//   return bookInfo
// }
// function getEmpty() {
//   return {
//     id: "",
//     title: "",
//     subtitle: "",
//     authors: [],
//     publishedDate: '',
//     description: "",
//     pageCount: '',
//     categories: [],
//     thumbnail: "http://coding-academy.org/books-photos/14.jpg",
//     language: "sp",
//     listPrice: {
//       amount: '',
//       currencyCode: "ILS",
//       isOnSale: false
//     }
//   }
// }

function _createEmails() {
  let emails = utilService.loadFromStorage(EMAILS_KEY)
  if (!emails || !emails.length) {
    emails = emailStart
    utilService.saveToStorage(EMAILS_KEY, emails)
  }
  console.log('Books To Render', emails)
  return emails
}



