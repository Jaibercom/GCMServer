var push = require('../../server/push');
var example = require('../../server/example');

var request = require('request');
var gcm = require('node-gcm');

module.exports = function(GcmUser) {

	GcmUser.sendPush = function(args, cb){
		console.log("sendPush username:"+args.username);
		GcmUser.find({where: {name: args.username.trim()}, limit: 1}, function(err, user){

			if (err) throw err;
			
			//console.log('User:' + user[0]);
			console.log('Username:' + user[0].name);
			console.log('gcmid:' +user[0].gcmid);
			push.sendPushNotification(user[0].gcmid, args.message);

			//console.log('sayHelloInEnglish:' +example.sayHelloInEnglish());
			//console.log('sayHelloInSpanish:' +example.sayHelloInSpanish());
			
			return cb(err, user);
		});
	};

	GcmUser.remoteMethod('sendPush',{
		http: {path: '/push', verb: 'POST'},
		accepts: [{arg: 'args', type: 'Object', required: 'true', http:{source: 'body'}}],
		returns:{arg: 'result', type: 'Object', root: true}
	});


	/*GcmUser.afterRemote('sendPush', function(ctx, unused, next) {




 
		var message = new gcm.Message();
		 
		message.addData('key1', 'msg1');
		 
		var regTokens = ['APA91bH9QblwLKcPpQrl0ISVfsHmcP1umIJUtLtghR-ZfrW4X7f1cD-lLOCaCrxgjmNEegK-8LdczP_otmFQWX0DArWVPGNkwu3y56lig8seLQGfBB7-1G1eTZcZVy32thf5hjStBZzdBLVHpJKdliseL_gPMum0Jg'];
		 
		// Set up the sender with you API key 
		var sender = new gcm.Sender('AIzaSyBsb3qQ_zcPHaLk4LpzvVR1Lj2_JMZsEk4');
		 
		// Now the sender can be used to send messages 
		sender.send(message, { registrationTokens: regTokens }, function (err, response) {
			if(err) console.error(err);
			else 	console.log(response);
		});



	});*/


};
