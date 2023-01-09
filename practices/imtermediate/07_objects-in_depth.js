const object = {
    chill: '😉 ',
    smile: ' 😊 ',
    book: ' 📕📘 '
}
// console.log(object);

// many way to create a objects and explore 

// 1st

const obj1 = {
    smile: '😊' ,
    redbook: '📕' ,
    bluebook: '📘'

}
obj1.pen = '🖊';
obj1['pencil'] = '✏';
// console.log(obj1);

// 2nd >>


const obj2 = new Object() //constructor
obj2.redbook = '📕'
obj2.bluebook = '📘'

// console.log(obj2);

// 3rd >>

const randomObj = {
    fly: true,
    cordinate: Math.round(Math.random()*10)
}

const obj3 = Object.create(randomObj)
// console.log(obj3);
// console.log(obj3.cordinate);
// console.log(Object.getPrototypeOf(obj3));

//  4th >>

const obj4 = Object.create({})
Object.defineProperty(obj4, 'book', {
    // icon: '📘'
    get: () => '📘',
    enumerable: true
})

// console.log(obj4);
// console.log(obj4.book);
// console.log(Object.getPrototypeOf(obj4));

for(key in obj4){
    // console.log("value is: ", key);
}

// 5th

const obj5 = {
    comics : 'marvel',
    pen: '',
    printComic: function(){
        this.pen = '🖊',
        console.log(this);
        // return this;
    },
    printComic2: () => {
        this.pen = '🖊',
        console.log(this);
    }
}
// console.log(obj5.printComic());
// console.log(obj5.printComic2());
