function waitFor(time){
    const future = Date.now() + time
    while(Date.now() < future) {}
}

setTimeout(() => console.log('Operation 01'), 4000)

waitFor(5000)
console.log('End of process')