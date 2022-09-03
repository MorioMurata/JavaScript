var nickname = "taro"
console.log(nickname)
var nickname = "ichiro"
console.log(nickname)

var nickname = "taro"
console.log(nickname)
nickname = "jiro"
console.log(nickname)

var str = "webcamp"

function foo() {
  console.log(str)
  var y = "hello"
}

foo()
console.log(y)

function foo() {
  let x = "webcamp"
  {
    let y = "hello webcamp"
  }
  console.log(x)
  console.log(y)
}

foo()

for (let i = 0; i < 10; i++){
  console.log(i)
}

console.log(i)