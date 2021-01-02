const [exA, exB, exC] = [1, 2, 3]
function originalFunc(a, b, c, callback) { 
  callback(a, b, c)
}

const testFunction = (i, j, k) => { console.log(i, j, k) }

originalFunc(exA, exB, exC, testFunctionction)
 
//—

const promisify = (func) => {
  return (a, b, c) => {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          resolve([a, b, c])
        }, 5000)
      } catch(e) {
        reject(e)
      }
    })
  }
}

const promisifiedFunc = promisify(originalFunc)
