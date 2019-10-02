export function scanQrCode(afterGettingCode) {
    // here the code will be written for scanning the Qr Code
    window.QRScanner.prepare((err, status) => {
        if (err) {
            console.error('Error setting up the QR code scanner');
        } else if (status.authorized) {
            window.QRScanner.scan((err, result) => {
                if (err) {
                    console.error('Error while scanning for code');
                } else {
                    afterGettingCode(result);
                    window.QRScanner.destroy();
                }
            });
            window.QRScanner.show(status => console.log(status));
        } else if (status.denied) {
            console.log('Access denied');
        } else {
            console.error('Error encountered while granting permissions');
        }
    });
}