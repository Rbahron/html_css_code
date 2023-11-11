const limitspeed = 70;
const point = 5;
const limitpoint = 12;

carspeed(85);

function carspeed(speed) {
    if (speed <= limitspeed + point) {
        console.log("ok");

    }
    else {
        const shraff = Math.floor((speed - limitspeed) / point);
        if (shraff >= 12) {
            console.log('guvohnoma olib qoyiladi');
        }
        else {
            console.log(shraff);
        }



    }

}
console.log(sum(10));
function sum(limit) {
    let sum = 0;
    for (let i = 0; i <= limit; i++) {
        if ((i % 3 === 0) || (i % 5 === 0))
            sum += i;
    }
    return sum;
}


const marks = [81, 74, 86, 59, 77];
console.log(calculategrade(marks));

function calculategrade(marks) {
    let avrg = calculateaverage(marks);
    if (avrg < 50) return 'f';
    if (avrg < 60) return 'd';
    if (avrg < 70) return 'c';
    if (avrg < 80) return 'b';
    return 'a';
}
function calculateaverage(array) {
    let sum = 0;
    for (let value of array)
        sum += value;

    let avrg = sum / array.length;
    return avrg;


}





