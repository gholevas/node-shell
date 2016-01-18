var commands = require('./command.js');

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function(data) {
	var params = data.toString().trim().split(' ');
	// console.log(params[0]);
	var cmd = params[0];
	var file = params.slice(1);
	if(cmd === 'pwd'){
		commands.pwd(file,done);
	}else if(cmd === 'date'){
		commands.date(file,done);
	}else if(cmd === 'ls'){
		commands.ls(file,done);
	}else if(cmd === 'echo'){
		commands.echo(file,done);
	}else if(cmd === 'cat'){
		commands.cat(file,done);
	}else if(cmd === 'head'){
		commands.head(file,done);
	}else if(cmd === 'tail'){
		commands.tail(file,done);
	}else if(cmd === 'sort'){
		commands.sortIt(file,done);
	}else if(cmd === 'wc'){
		commands.wc(file,done);
	}else if(cmd === 'curl'){
		commands.curl(file,done);
	}else{
  	 process.stdout.write('prompt > ');
	}
});

var done = function(output) {
  // show the output
  process.stdout.write(output);
  // show the prompt
  process.stdout.write('prompt > ');
}