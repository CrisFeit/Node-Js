let greet : Function = ()=> {
    console.log('is a function');    
}

greet = () => {
    console.log('ehello');
}

// question mark , return void
const add = (a: number ,b: number , c?:number | string ,...rest: any)=> {
    console.log(a+b);
    console.log(c);
    console.log(rest);
}

add(5,10,44 , { rest: 'operator'});

// return Type
const minus = (a: number, b: number): number => {
    return a - b
}

let result = minus(10,7)
console.log('minus',result);

