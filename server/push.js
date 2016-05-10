//var jquery = require('../../client/jquery-2.2.3.min');
var gcm = require('node-gcm');

module.exports = {
	sendPushNotification: function(gcmid, message){

	console.log('/sendPushNotification' );
	console.log('gcmid: ' + gcmid);
	console.log('message: ' +message);

	//function sendPushNotification(gcmid, message){

	//var url = 'https://gcm-http.googleapis.com/gcm/send';
	var api_key = 'AIzaSyBsb3qQ_zcPHaLk4LpzvVR1Lj2_JMZsEk4';
	var url = 'http://localhost:3000/api/gcmusers';


	var message = new gcm.Message();
		 
	message.addData('key1', message);
	 
	var regTokens = ['APA91bH9QblwLKcPpQrl0ISVfsHmcP1umIJUtLtghR-ZfrW4X7f1cD-lLOCaCrxgjmNEegK-8LdczP_otmFQWX0DArWVPGNkwu3y56lig8seLQGfBB7-1G1eTZcZVy32thf5hjStBZzdBLVHpJKdliseL_gPMum0Jg'];
	 
	// Set up the sender with you API key 
	var sender = new gcm.Sender(api_key);
	 
	// Now the sender can be used to send messages 
	sender.send(message, { registrationTokens: regTokens }, function (err, response) {
		if(err) console.error(err);
		else 	console.log(response);
	});



/*	var data = {
	  "name": "string",
	  "email": "string",
	  "gcmid": "string",
	  "created_at": "2016-05-06",
	  "id": 0
	};
*/
	/*$.ajax({
		type: 'POST',
		url: url,
		data: JSON.stringify({name: 'Pedro', email: 'pedro@gmail.com', gcmid: gcmid}),
		contentType: 'application/json',
		/*Authorization:key = api_key
		{
			"to": gcmid,
			"data": {
				"message": "This a GCM message: "+ message,
			}
		}
	}, function(res){
		console.log("response: "+res);
	});*/

	}
};