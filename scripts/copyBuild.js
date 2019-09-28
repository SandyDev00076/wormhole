const ncp = require('ncp').ncp;

ncp('./build', './www', (err) => {
    if (err) {
        console.log('Error occured via preparing WWW!', err);
    }
    console.log('done!');
});