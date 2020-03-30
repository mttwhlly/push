const app = (() => {
  'use strict';

  let isSubscribed = false;
  let swRegistration = null;

  const notifyButton = document.querySelector('.js-notify-btn');

  // Check for notification support
  // TODO - if no support, provide alternative logic

  if (!('Notification' in window)) {
    console.log('This browser does not support notifications!');
    return;
  }

  // Request permission to show notifications
  Notification.requestPermission(status => {
    console.log('Notification permission status:', status);
  });

  function displayNotification() {
    // Display a Notification
    if (Notification.permission == 'granted') {
      navigator.serviceWorker.getRegistration().then(reg => {
        // Add 'options' object to configure the notification
        const options = {
          body: 'Replace with a brief update title',
          icon: '/Style Library/V7/WebParts/Notifications/img/sun.png',
          vibrate: [100, 50, 100],
          data: {
            dateOfArrival: Date.now(),
            primaryKey: 2
          },

          // Add actions to the notification
          actions: [{
              action: 'explore',
              title: 'Read More'
            },
            {
              action: 'close',
              title: 'Dismiss'
            }
          ]

          // TODO - Add a tag to the notification
        };

        reg.showNotification('Coronavirus Update', options);
      });
    }
  }

  notifyButton.addEventListener('click', () => {
    displayNotification();
  });

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      console.log('Service Worker and Push is supported');

      navigator.serviceWorker
        .register('/techproto/sw.js')
        .then(swReg => {
          console.log('Service Worker is registered', swReg);

          swRegistration = swReg;
        })
        .catch(err => {
          console.error('Service Worker Error', err);
        });
    });
  } else {
    console.warn('Push messaging is not supported');
    pushButton.textContent = 'Push Not Supported';
  }
})();