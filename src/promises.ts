/*
We need run process in background. We used callbacks in javascript, but its more and more error-prone our code becomes
promises come in
promise tells us that something will happen asynchronously
after of then, we have option to continue processing and work with the result of the promise,
catch or thrown exception
*/
function ExpensiveWebCall(time : number) : Promise<void>
{
    return new Promise((resolve, reject) => 
        setTimeout(resolve, time));
}
class MyWebService 
{
    CallExpensiveWebOperation() : void 
    {
        ExpensiveWebCall(4000).then(
            ()=>console.log('Finished web service')).catch(
                ()=>console.log('Expensive web call failure'));
    }
}
console.log('calling service');
new MyWebService().CallExpensiveWebOperation();
console.log('Processing continues until the web service returns');

