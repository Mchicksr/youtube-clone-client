// let url = 'https://www.youtube.com/watch?v=LZKsD_5ttZ4'
 export function parseQuery(queryString) {
    var query = {};
    var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
    for (var i = 0; i < pairs.length; i++) {
        // var pair = pairs[i].split('d/');
        var pair = pairs[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query;
}
export function getId(ogStr){
let id =Object.values(ogStr)
return id.join()
}








// let url = 'https://www.youtube.com/watch?v=LZKsD_5ttZ4'
// let url = 'https://www.youtube.com/embed/LZKsD_5ttZ4'

//   function parseQuery(queryString) {
//     var query = {};
//     var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
//     for (var i = 0; i < pairs.length; i++) {
//         var pair = pairs[i].split('=');
//         query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
//     }
//     return query;
// }
//   function parseQuery2(queryString) {
//     var query = {};
//     var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
//     for (var i = 0; i < pairs.length; i++) {
        // where the second string stops 
//         var pair = pairs[i].split('d/');
//         query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
//     }
//     return query;
// }
//  function getId(ogStr){
// let id =Object.values(ogStr)
// return id.join()
// }
// console.log(parseQuery2(url))
// console.log('id',getId(parseQuery2(url)))
