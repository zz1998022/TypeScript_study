/*
    typescript的數據類型分爲兩種:
    基本數據類型:number string boolean null undefined symbol any void
    對象類型: 對象{} 數組[]
*/

let num: number = 111; // number類型
let uname: string = "周可"; // string類型
let flag: boolean = true; // boolean類型
let result: undefined = undefined; // undefined類型
let xxx: any = { name: "zs", age: 18 } // any裏面可以存放任意數據類型,如果變量聲明沒有添加數據類型,那麽這個變量的數據類型默認為any

console.log(`${num}
${uname}
${flag}
${result}
`);

console.log(xxx);

console.log("============================");

// 對象類型
let student: {
    name: string,
    age: number,
    sayHi: () => void
} = {
    name: "張學友",
    age: 18,
    sayHi: function () {
        console.log(this);
        console.log(111);
    }
}

student.sayHi();
console.log(student);

class Preson{
    // 設置字段
    name: string;
    age: number;

    // 構造函數
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    // 方法
    sayHi():void {
        console.log("大家好,我叫" + this.name);
    }
}

// 創建實例
let ldh:Preson = new Preson("劉德華",18);

ldh.sayHi();
