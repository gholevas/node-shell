var fs = require('fs');
var request = require('request');

var commands = {
	pwd: function(file,done){
		done(process.env.PWD+'\n');
	},
	date: function(file,done){
		var d = new Date().toString();
		done(d+'\n');
	},
	ls: function(file,done){
		fs.readdir('.', function(err, files) {
 		 if (err) throw err;
 		 var answer = '';
  		files.forEach(function(file) {
  			answer+=file.toString()+'\n';
 		 })
  		done(answer);
		});
	},
	echo: function(file,done){
		if(file){
			done(file.toString().replace(/\,/g,' ')+'\n');
		}
	},
	cat: function(file,done){
		var answer = '';
		for (var i = 0; i < file.length; i++) {
			fs.readFile(file[i].toString(),function(){
			}, (err, data) => {
		 	if (err) throw err;
		 	answer+=data;
		 	answer+='\n\n';
   	   		 done(answer);
			});
		}
	},
	head: function(file,done){
			fs.readFile(file[0].toString(),function(){
			}, (err, data) => {
		 	if (err) throw err;
		 	var lines = data.toString('utf-8').split("\n");
		 	done(lines.slice(0,5).toString().replace(/\,/g,'\n')+'\n')
			});
	},
	tail: function(file,done){
			fs.readFile(file[0].toString(),function(){
			}, (err, data) => {
		 	if (err) throw err;
		 	var lines = data.toString('utf-8').split("\n");
		 	 done(lines.slice(lines.length-5).toString().replace(/\,/g,'\n')+'\n');
		 	
			});
	},
	sortIt: function(file,done){
			fs.readFile(file[0].toString(),function(){
			}, (err, data) => {
		 	if (err) throw err;
		 	var lines = data.toString('utf-8').split("\n");
		 	lines = lines.sort();
		 	done(lines.toString().replace(/\,/g,'\n')+'\n');
			});
	},
	wc: function(file,done){
			fs.readFile(file[0].toString(),function(){
			}, (err, data) => {
		 	if (err) throw err;
		 	var lines = data.toString('utf-8').split("\n");
		 	done(lines.length.toString()+'\n');
			});
	},
	curl: function(file,done){
			request(file[0].toString(), function (error, response, body) {
  			if (!error && response.statusCode == 200) {
   				 done(body+'\n'); 
  			}
})
	}

}


module.exports = commands;