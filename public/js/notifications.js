document.addEventListener('DOMContentLoaded', init, false)

function init() {
  const notificationsBtn = document.querySelector('.btn-notifications')

  navigator.serviceWorker.controller.postMessage('Hello service worker!')

  navigator.serviceWorker.onmessage = (event) => {
    console.log('Message received from SW ->', event.data)
  }

  notificationsBtn.addEventListener('click', () => {
    requestPermission()
  })

  function requestPermission() {
    if ('Notification' in window) {
      Notification.requestPermission(result =>  {
        if (result === 'granted') {
          console.log('Acess granted! :)')
          showServerTimeNotification()
        } else if (result === 'denied') {
          console.log('Access denied :(')
        } else {
          console.log('Request ignored :/')
        }
      })
    } else {
      alert('Your browser does not support notifications')
    }
  }

  function showServerTimeNotification() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(registration => {
        fetch('/notifications')
          .then(res => res.json())
          .then((response) => {
            const title = 'Server time'
            const options = {
              body: `Last request: ${response.date}`,
            }
            registration.showNotification(title, options)
          })
      })
    }
  }
}
