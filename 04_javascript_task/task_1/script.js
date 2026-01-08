function checkSum(num2){
    const total = num2.reduce((acc, curr) => acc + curr, 0);
    const promise = new Promise (function (res, rej) {
        if(total > 35){
            res(`Promise resolve successfully because sum is ${total}`);
        }
        else{
            rej(`Promise Rejected because sum is ${total}`);
        }
    });
    return promise;
}

function func1(){
    const num = [0,1,2,3,4];
    const firstElement = num.shift();
    return func2(firstElement, num);
}

function func2(firstElement, num){
    const num2 = [5,6,7, 8, 9];
    num2.unshift(firstElement);
    num2.push(...num);
    
    checkSum(num2).then((res)=>console.log(res)).catch((rej) => console.log(rej));
}

func1()
