/*
 *  Inserts "doc" into the collection "movies".
 */

//================INSERTING A FILM TO 'MOVIES' DATABASE========================
exports.insert = function(db, doc, callback) {
	//we adress teh databse - therefore starting with: 'db'
	//and specific collection of 'movies': db.collection('movies')
	//we want to insert sth into this collection:  db.collection('movies').insert(<here param + callback>)
  db.collection('movies').insert(doc, function(error, docs){
  	//======Error handling part=============
  	if(error){
  		callback(error);
  	};
  	//====End of Error handling part
//we can print what was inserted - it will be 'doc' designated in the function on line6!
  	console.log('interface.js - inserted:', doc);
//the same function on line4 awaits for a callback and we need to deliver (we don't need to pass any arguments - 'null' is good )
  	callback(null);
  });
};

/*
 *  Finds all documents in the "movies" collection
 *  whose "director" field equals the given director,
 *  ordered by the movie's "title" field. See
 *  http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#sort
 */

//===============SEARCHING FOR MOVIES WITH DESIGNATED DIRECTOR===================
exports.byDirector = function(db, director, callback) {
  db.collection('movies').find({'director': director}).sort({'title':1}).toArray(function(error,docs){
	//======Error handling part=============
  	if(error){
  		//function on line 31 awaits a callback - this is why if there is an error we deliver it with 'error'
  		callback(error);
  	};
	//====End of Error handling part

 	console.log('interface.js-byDirector: ',docs); 
//again - function will wait until it receives a callback (line31) therefore we deliver
//in this function we are querying to see a list of movies - 
//first argument tell a function that there was no error (null) 
//and second one is to show the result of our query
 	callback(null, docs);
  });
};