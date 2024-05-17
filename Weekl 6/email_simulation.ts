
const QUEUE_LIST = 1000;
const Q: string[] = [];
const resp = get5000Users();


resp.forEach((email: string) => {
    Q.push(email);
})


// logic exzist.
// once there is a push to queue, 
// "sendMail", should start sending the mails
// if the queue is empty 
// if queue is full = we cannot add to queue.+6