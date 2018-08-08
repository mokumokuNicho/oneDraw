const functions = require('firebase-functions');
const Twitter = require('twitter')

const consumer_key = 'MUxI500CBeRDCYBjIk0ZZnA0M'
const consumer_secret = 'LAFhrrVhBvmQwiDBiIcbZVx23nppMFu1crh1tT0P3Yffkl7TAb'
const access_token_key = '408473366-auVyzfDutX3S90B3XjyrYyUdupfOm6akXs1R4r9S'
const access_token_secret = 'j1qnXMuFvOJ310kdWYye43kpUh2aV6P9yeULKb648Gmgp'

// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
exports.addMessage = functions.https.onRequest((req, res) => {
    // Grab the text parameter.
    const original = req.query.text;

    const client = new Twitter({
        consumer_key,
        consumer_secret,
        access_token_key,
        access_token_secret
    })

    const params = {count: 50}//200件まで取得可能。デフォルトは20
    client.get('statuses/home_timeline', params, function(error, tweets, response) {
        if (!error) {
            console.log(tweets)
        }
    })

    // // Push the new message into the Realtime Database using the Firebase Admin SDK.
    // return admin.database().ref('/messages').push({original: original}).then((snapshot) => {
    //     // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
    //
    // });
});
