
///  Asyncronous model

const {readFile, writeFile} = require('fs');

console.log("just starting");

readFile('./content/sec.txt' ,'utf8', (err, data) => {
    try{
        if(err) throw err;
    }catch(e){console.log(e);};
    const first = data;
    console.log(data)

    readFile('./content/p.txt' ,'utf8', (err, data) => {
        try{
            if(err) throw err;
        }catch(e){console.log(e);};
        const second = data;
        console.log(data);

        writeFile('./content/third.txt', first + second, (err) => {
            if(err) throw err;
            console.log('The file was saved!');
        });
        console.log('We are done!');
    })
})