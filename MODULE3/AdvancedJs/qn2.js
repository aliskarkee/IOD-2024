2. The following delayMsg function is intended to be used to delay printing a message until
some time has passed.
a) What order will the four tests below print in? Why?
b) Rewrite delayMsg as an arrow function
c) Add a fifth test which uses a large delay time (greater than 10 seconds)
d) Use clearTimeout to prevent the fifth test from printing at all.
function delayMsg(msg)
{
console.log(`This message will be printed after a delay: ${msg}`)
}
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')


/*a) the order would be 
1- standard synchrobnous code (clg)
2- #3 no delay after 0ms as it is asyc
3- #2 comes ater delay of 20ms
4- #1 comes after delay of 100 ms 

as set timeout is an async function, where it gets pauses and lets other sync code run which in this case was console.log */

// b) arrow function and added a fifht test 

setTimeout(() => console.log("#"), 100);
setTimeout(() => console.log("#2"), 20);
setTimeout(() => console.log("#3"), 0);
setTimeout(() => console.log ('#4'), 10000);


//d use cleartimeoput to cancel fifth 

const timeoutId = setTimeout(() => console.log('#4'), 10000);

clearTimeout(timeoutId);


