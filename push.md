The following summarizes the process of sending and receiving a push message and then displaying a push notification using a service worker script that is installed on the client (browser).

On the client:

1. Subscribe to the push service
2. Send the subscription object to the server

On the server:

1. Generate the data that we want to send to the user
2. Encrypt the data with the user public key
3. Send the data to the endpoint URL with a payload of encrypted data.

The message is routed to the user's device. This wakes up the browser, which finds the correct service worker and invokes a "push" event. Now, on the client:

1. Receive the message data (if there is any) in the "push" event
2. Perform some custom logic in the push event
3. Show a notification

User can then decide to respond to the call-to-action or dismiss the push notification.
