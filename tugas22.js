function sliceEach(kata) {
    let sliced = kata.split(" ");
    sliced.forEach((element, index) => {
        console.log(`Item : ${element} index ke ${index}`);

    });

}

let str = "Saya ingin belajar bersama";
sliceEach(str);