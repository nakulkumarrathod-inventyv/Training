function checkSum(arr){
  const total = arr.reduce((acc, sum) => acc + sum, 0);
  const promise = new Promise((res, rej) => {
    if (total > 35) {
      res(`Promise resolved because sum is ${total}`);
    } else {
      rej(`Promise rejected because sum is ${total}`);
    }
  });
  return promise;
};

function func1() {
    let arr = Symbol();
    const obj = {};
    obj[arr] = [0,1,2,3,4];
    let firstElement = obj[arr].shift();
    func2(firstElement,obj[arr])
}

function func2(firstElement, arr) {
    let arr2 = Symbol();
    const obj2 = {};
    obj2[arr2] = [5,6,7,8,9];
    obj2[arr2] = [firstElement, ...obj2[arr2], ...arr]
    checkSum(obj2[arr2]).then((res)=>console.log(res)).catch((rej) => console.log(rej));
}

func1();