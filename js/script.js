document.addEventListener('DOMContentLoaded', function() {
  const aside = document.getElementById('aside')
  const burger = document.getElementById('burger')

  burger.addEventListener('click', (event) => {
    event.preventDefault()
    aside.classList.toggle('active')
  })

  window.addEventListener('click', e => {
    const target = e.target 
    if (!target.closest('#aside') && !target.closest('#burger')) { 
      aside.classList.remove('active') 
    }
  })
})

