// var a = 5;            swap variable
// var b = 3;
// var tamp = a;
// var a = b;
// var b = tamp;
// console.log(a, b);

// var x = 5;
// var y = 3;
// xx = x + y;
// x = xx - x;
// y = xx - y;
// console.log(x, y);

// var o = 6;
// var p = 7;
// [o, p] = [p, o];
// console.log(p, o);

// function feetToMile(feet) {
//     mile = feet * 0.000189394;
//     console.log(mile);
// }
// feetToMile(2000);
// feetToMile(5000);
// feetToMile(5280);



// function woodCalculator(chair, table, bed) {
//     var total = chair * 1 + table * 3 + bed * 5;
//     console.log(total);
// }
// woodCalculator(1, 1, 1);
// woodCalculator(12, 3, 13);



// function brickCalculator(floor) {
//     if (floor < 10) {
//         var firstBrick = floor * 15 * 1000;
//         console.log(firstBrick);
//     }
//     if (floor < 20) {
//         var dosErjonno = 10 * 15 * 1000;
//         var asol = floor - 10;
//         var asolErjonno = asol * 12 * 1000;
//         var secondBrick = dosErjonno + asolErjonno;
//         console.log(secondBrick);
//     } else {
//         var dosErjonno = 10 * 15 * 1000;
//         var bisErjonno = 10 * 12 * 1000;
//         var asol = floor - 20;           var asoErJonno = (floor - 20) * 10 * 1000;
//         var asolErjonno = asol * 10 * 1000;
//         var thirdBrick = dosErjonno + bisErjonno + asolErjonno;
//         console.log(thirdBrick);
//     }
// }
// brickCalculator(55);



// function tinyFriends(name) {
//     var smallStart = name[0];
//     for (var i = 0; i < name.length; i++) {
//         var next = name[i];
//         if (next.length < smallStart.length) {
//             smallStart = next;
//         }
//     }
//     return smallStart;
// }
// var small = tinyFriends(['abir', 'adi', 'sakib', 'ma', 'mushfik', 'am']);
// console.log(small);