// import './config'
// import { signIn, signOut } from './auth'
// import savePhoto from './save_photo'
// import showPhotos from './show_photos'
// import deletePhoto from './delete_photo'

import tplHome from '../html/home.tpl.html'
import tplAbout from '../html/about.tpl.html'
import tplContact from '../html/contact.tpl.html'
import tplAdmin from '../html/admin.tpl.html'
import tplAdminAuth from '../html/admin_auth.tpl.html'
import aboutImg1 from '../img/fifi.jpg'
import aboutImg2 from '../img/amor-de-ninos.jpg'

const routes = () => {
    const d = document,
        main = d.querySelector('.Main')

    d.addEventListener('DOMContentLoaded', e => {
        main.innerHTML = tplHome
    })

    d.addEventListener('click', e => {
        if (e.target.matches('a[href="#"]')) {
            e.preventDefault()
        }

        if (e.target.matches('#home')) {
            main.innerHTML = tplHome
        } else if (e.target.matches('#about')) {
            main.innerHTML = tplAbout
            d.querySelector('.About-header').innerHTML = `
          <img src="${aboutImg1}">
          <img src="${aboutImg2}">
        `
        } else if (e.target.matches('#contact')) {
            main.innerHTML = tplContact
        } else if (e.target.matches('#admin')) {

            console.log('no c');

            if (1 === 1) {
                main.innerHTML = tplAdmin
            } else {
                main.innerHTML = tplAdminAuth
            }

        } else if (e.target.matches('#login')) {
            signIn()
        } else if (e.target.matches('#logout')) {
            signOut()
        } else if (e.target.matches('.fa-trash')) {
            deletePhoto(e.target.dataset.photo, e.target.dataset.id)
        }
    })

    d.addEventListener('change', e => {
        if (e.target.matches('input[type="file"]')) {
            d.querySelector('.Form-uploader input[type="text"]').value = e.target.value
        }
    })
}

export default routes
