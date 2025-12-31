function handleException(errorMessage: string): never {
    throw Error(errorMessage)
}

function runInfinity(): void {
    // while (true) {
    //     // console.log("running...")
    // }
}

// handleException("just a test error");

let b = runInfinity();
console.log(">> check b= ", b) //value of b is 'undefined' because runInfinity returns void

