const myPromise = new Promise( (resolve, reject) => {
    setTimeout(() => resolve('john'), 1000);
})

myPromise.then((x)=> 'the result is '+x)
.then((x2 => console.log('the result was wrapped '+x2)));