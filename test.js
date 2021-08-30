const ottercord = require('./dist/index.js');
ottercord.token = "test";

for (i = 0; i < 200; i++) {
    ottercord.modifyChannel('846906551607754752').then(x => {
        console.log(x);
    });
}