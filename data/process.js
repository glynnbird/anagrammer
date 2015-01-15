var LineByLineReader = require('line-by-line'),
  lr = new LineByLineReader('idioms.txt');
    
lr.on('error', function (err) {
    // 'err' contains error object
});

lr.on('line', function (line) {
    // 'line' contains the current line without the trailing newline character.
  console.log(line);
  if (line.match(/ one's/)) {
    console.log(line.replace(/ one's/,' his'));
    console.log(line.replace(/ one's/,' her'));
    console.log(line.replace(/ their's/,' their'));
  }
  if (line.match(/ someone's/)) {
    console.log(line.replace(/ someone's/,' his'));
    console.log(line.replace(/ someone's/,' her'));
    console.log(line.replace(/ someone's/,' their'));
  }
});

lr.on('end', function () {
    // All lines are read, file is closed now.
});