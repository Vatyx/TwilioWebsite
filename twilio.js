// //require the Twilio module and create a REST client
// var client = require('twilio')('AC04ae25977f10fe51e9d811bf0bf2a07f', 
// 	'd820c97f96b72dfb49464b79b4158779');
exports.sendMessage = function(number, message)
{
    var client = require('twilio')('AC04ae25977f10fe51e9d811bf0bf2a07f', 
    'd820c97f96b72dfb49464b79b4158779');

    client.messages.create({
    body: message,
    to: number,
    from: "+19725972032"
    }, function(err, message) {
        if (!err) {
            // The second argument to the callback will contain the information
            // sent back by Twilio for the request. In this case, it is the
            // information about the text messsage you just sent:
            console.log('Success! The SID for this SMS message is:');
            console.log(message.sid);
     
            console.log('Message sent on:');
            console.log(message.dateCreated);
        } else {
            console.log(err);
            console.log('Oops! There was an error.');
        }
    });
};