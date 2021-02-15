// Your code here
function mapToNegativize(arr) {
    let r = []
    for (let i = 0; i < arr.length; i++) {
        r.push(-1 * arr[i])
    }
    return r
}

function mapToNoChange(arr){
    let r = []
    for (let i = 0; i < arr.length; i++){
    r.push(arr[i])
    }
    return r
}

function mapToDouble(arr){
    let f = []
    for (let i = 0; i < arr.length; i++){
        f.push(2 * arr[i])
    }
    return f
}

function mapToSquare(arr){
    let f = []
    for (let i = 0; i < arr.length; i++){
        f.push( arr[i] * arr[i])
    }
    return f
}

function reduceToTotal( arr, startPoint=0){
    let total = startPoint
    for (let i = 0; i < arr.length; i++){
        total = total + arr[1]
    }
    return total
}

function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (!src[i]) return false
    }
    return true
  }

function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (src[i]) return true
    }
    return false
  }



