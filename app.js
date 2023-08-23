// console.log(module);
// const pin=name =>`Hey ${name}`;
// console.log(pin);
// console.log(pin('pinak'));
// const data=require('./op.js');
// console.log(data.data());


//    build in modules




// ////    os modules


// const os=require('os');
// /// info about current user
// const user=os.userInfo();
// console.log(user);

// ////  Returns uptime of current user

// const uptime=os.uptime();
// console.log(uptime);

// const currentOs={
//     name:os.type(),
//     release:os.release(),
//     platform:os.platform(),
//     arch:os.arch(),
//     totalmemory:os.totalmem(),
//     freememory:os.freemem()
//     // cpus:os.cpus()
// };
// console.log(currentOs);






// /// path module

// const path=require('path');
// console.log(path.sep);//// Default path separator is '/';
// const filepath=path.join('\content', 'module','package.json');
// console.log(filepath);
// const base =path.basename(filepath);  // Returns in this case package.json
// const base2 =path.basename(filepath,'.json');  // Returns in this case package
// console.log(base);
// console.log(base2);


// /////  __dirname points towards the current directory of the program

// console.log(__dirname);
// console.log(path.join(__dirname,'content','module','package.json'));//// absolute path



//File system module




// const ds={
//     name1: 'pinak',
//     age: 25,
//     address: 'Noida',
//     city: 'Delhi',
//     state: 'Delhi',
//     country: 'India',
// };
// const {age} = ds;
// console.log(age)//returns 25


/*

Syncronous methode
const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/p.txt', 'utf8');

console.log(first)//returns content of first file ie; p.txt

writeFileSync('./content/sec.txt', 'This wil be content of the second file sec.txt','utf8');//// If the file sec.text doesn't exist then this will create new file , and if it does exist then this will first formate it and then update then update the request
writeFileSync('./content/sec.txt', '\nThis is second line ',{flag: 'a' },'utf8');//// this will just the append content to file if it already exist 
/////  writeFileSync(file/dorectory , content  , Options , encoding)


 */

//Async method

const {readFile , writeFile} = require('fs');


readFile('./content/p.txt','utf-8', (err, content) => {
    if(err){console.log(err)};
    console.log(content);

});

