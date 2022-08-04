// module.exports = function(procArg) {
//     procArg.forEach(function(item, index, arr) {
//         if (item === '--name') {
//             console.log(arr[index+1]);
//         } else if (item === '--greeting') {
//             console.log(arr[index+1]);
//         }
//     });
// }

function getFlagValue(flag) {
    const index = process.argv.indexOf(flag) + 1;
    return process.argv[index];
}

module.exports = getFlagValue;
