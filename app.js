var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var webPush = require('web-push')

webPush.setGCMAPIKey(process.env.gcm)
webPush.setVapidDetails(
  'mailto:example@yourdomain.org',
  'BJrN6VElSCFdooyWUZqNfqbDp1EMXiaA2-wDWKKsXE_746BolGQxY1zy397ZQpA0FuPj6rxpP3j9S5Z4EPpfDho',
  process.env.vapid_private
);

app.use(bodyParser());
app.use(express.static('public'))

app.post('/api/subscription/add', (request, response) => {
  console.log(request.body);
  console.log(request.body.subscription);
  console.log(request.body.subscription.endpoint);
  console.log(request.body.subscription.keys.p256dh);
  console.log(request.body.subscription.keys.auth);
  console.log(request.params);
  console.log(request.url);
  pushSubscription = request.body.subscription;
  response.end();
})

app.get('/api/message/send', (request, response) => {
  console.log('sending message')
  console.log(pushSubscription)
  webPush.sendNotification(pushSubscription, 'hello')
  response.end("OK")
})

app.listen(process.env.PORT, function () {
  console.log(`Example app listening on port ${process.env.PORT}!`)
})