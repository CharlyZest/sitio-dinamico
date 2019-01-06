// // import firebase from 'firebase/app'
// // import 'firebase/auth'
// // import 'firebase/database'
// // import 'firebase/storage'
// import './config'

// function figureTemplate(key, { uid, title, photo }) {
//   return `
//     <img src="${photo}" alt="${title}">
//     <figcaption>
//       <span>${title}</span>
//       <i class="fas fa-trash" data-id="${key}" data-photo="${photo}"></i>
//     </figcaption>
//   `
// }

// export default function showPhotos() {
//   const d = document,
//     db = firebase.database(),
//     photos = d.getElementById('photos')

//   db.ref().child('photos').on('child_added', data => {
//     let figure = d.createElement('figure')

//     figure.id = data.key
//     figure.innerHTML = figureTemplate(data.key, data.val())
//     //photos.appendChild(figure)
//     photos.insertAdjacentElement('afterbegin', figure)
//   })
// }
