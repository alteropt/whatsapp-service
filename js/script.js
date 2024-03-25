document.addEventListener('DOMContentLoaded', function() {
  // Aside Menu
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

  // Accordeon
  const accordeons = document.querySelectorAll('.accordeon')
  accordeons.forEach(accordeon => {
    const accordeonToggle = accordeon.querySelector('.accordeon__title')
    
    accordeonToggle.addEventListener('click', () => {
      accordeon.classList.toggle('active')
    })
  })
 
})

