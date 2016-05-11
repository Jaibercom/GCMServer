module.exports = function(app) {
  app.models.GCMUser.attachTo(app.dataSources.mysqldb);

  app.dataSources.mysqldb.automigrate('GCMUser', function(err) {
    if (err) throw err;

    app.models.GCMUser.create([
      {name: 'Juan', email: 'juan@gmail.com', gcmid: 'APA91bH9QblwLKcPpQrl0ISVfsHmcP1umIJUtLtghR-ZfrW4X7f1cD-lLOCaCrxgjmNEegK-8LdczP_otmFQWX0DArWVPGNkwu3y56lig8seLQGfBB7-1G1eTZcZVy32thf5hjStBZzdBLVHpJKdliseL_gPMum0Jg'},
		  {name: 'Laura', email: 'laura@gmail.com', gcmid: 'eDPafji81uA:APA91bH753BSKyefke0RG3kmfjTkEHohrprCSPRq2kFPZt9slyMaXwdlPFMLVRgpNA9Kki0D6c46eqocGj2WD0uHCb_LOslGapEyNq1rqAPYhM1RUKRtx_YZhqPhrcPNh41Dv4vQ2lAP'},
      {name: 'JJ', email: 'laura@gmail.com', gcmid: 'e2YxPH_mLYY:APA91bHUQPCEQUf6ptr5FB3TygPUv4uSZM-JJyC2ObFWOYA1EbwX9eSZVQq--oz_dcP6j1n63W-bk0Hr7dp14sYCm4GN5hXZAIwnqRsSaNUv-y4GsBMqNFhNVFqT6-kQ_4j_oWSh9aAz'},
    
    ], function(err, GCMUser) {
      if (err) throw err;

      console.log('Models created: \n', GCMUser);
    });
  });
  
};

