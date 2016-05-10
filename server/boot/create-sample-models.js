module.exports = function(app) {
  app.models.GCMUser.attachTo(app.dataSources.mysqldb);

  app.dataSources.mysqldb.automigrate('GCMUser', function(err) {
    if (err) throw err;

    app.models.GCMUser.create([
      {name: 'Juan', email: 'juan@gmail.com', gcmid: 'xaxaxaxa'},
		  {name: 'Laura', email: 'laura@gmail.com', gcmid: 'xaxaxaxa'},
    ], function(err, GCMUser) {
      if (err) throw err;

      console.log('Models created: \n', GCMUser);
    });
  });
  
};

