import * as readline from 'readline';
import { stdin as input, exit } from 'process';

input.setEncoding('utf8');

var rl = readline.createInterface({
  input: input,
  terminal: false,
});

rl.on('line', readLine);

function readLine(line: string): void {
  if (line !== '\n') {
    var a = parseInt(line.toString().split(' ')[0], 10);
    var b = parseInt(line.toString().split(' ')[1], 10);
    console.log(a + b);
    exit();
  }
}
