const toggleNav = () => {
    const d = document,
      headerBtn = d.querySelector('.Header-btn'),
      header = d.querySelector('.Header'),
      main = d.querySelector('.Main')

    headerBtn.addEventListener('click', e => {
      e.preventDefault()
      header.classList.toggle('is-active')
      headerBtn.classList.toggle('is-active')
      main.classList.toggle('is-active')
    })

    d.addEventListener('click', e => {
      if (e.target.matches('a[href="#"]')) {
        e.preventDefault()
        header.classList.remove('is-active')
        headerBtn.classList.remove('is-active')
        main.classList.remove('is-active')
      }
    })
  }


  export default toggleNav
