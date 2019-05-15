const fs = require('fs');
const path = require('path');

//callback to get a file content
// function getFileContent(fileName, callback){
//   const fullFileName = path.resolve(__dirname, 'files', fileName);
//   fs.readFile(fullFileName, (err, data) => {
//     if(err){
//       console.log(err);
//       return;
//     }

//     callback(
//       JSON.parse(data.toString())
//     )
//   })
// }

//test

//callback-hell
// getFileContent('a.json', aData => {
//   console.log('a.json: ', aData);

//   getFileContent(aData.next, bData => {
//     console.log('b.json: ', bData);

//     getFileContent(bData.next, cData => {
//       console.log('c.json: ', cData);
//     })
//   })
// })

//use promise
function getFileContent(fileName){
  return new Promise((resolve, reject) =>{
    const fullFileName = path.resolve(__dirname, 'files', fileName);
    fs.readFile(fullFileName, (err, data) => {
      if(err){
        reject(err);
        return;
      }
      resolve( JSON.parse(data.toString()) )
    })
  })
}

getFileContent('a.json').then(aData => {
  console.log('a data: ', aData);
  return getFileContent(aData.next);
}).then(bData => {
  console.log('b data: ', bData);
  return getFileContent(bData.next);
}).then(cData => {
  console.log('c data: ', cData)
})