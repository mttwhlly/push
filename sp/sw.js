self.addEventListener('notificationclose', event => {
  const notification = event.notification;
  // const primaryKey = notification.data.primaryKey;

  console.log(notification);
  //console.log('Closed notification: ' + primaryKey);
});

self.addEventListener('notificationclick', event => {
  const notification = event.notification;
  // const primaryKey = notification.data.primaryKey;
  const action = event.action;

  if (action === 'close') {
    notification.close();
  } else {
    clients.openWindow('/CoronaVirus/Pages/Updates.aspx');
    notification.close();
  }

  // TODO - close all notifications when one is clicked
});