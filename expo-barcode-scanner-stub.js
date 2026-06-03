// expo-barcode-scanner STUB (SDK 56 removed it; folded into expo-camera). Keeps the camera/QR screens
// from crashing with "Cannot find native module". <BarCodeScanner> renders null; statics are no-ops.
const React = require('react');
const BarCodeScanner = React.forwardRef(() => null);
BarCodeScanner.displayName = 'BarCodeScannerStub';
BarCodeScanner.Constants = {
  BarCodeType: { qr: 'qr', pdf417: 'pdf417', pdf: 'pdf417', code39: 'code39', code93: 'code93', code128: 'code128', ean13: 'ean13', ean8: 'ean8', upc_a: 'upc_a', upc_e: 'upc_e', aztec: 'aztec', datamatrix: 'datamatrix', codabar: 'codabar', itf14: 'itf14', interleaved2of5: 'interleaved2of5', upc_ean: 'upc_ean' },
  Type: { front: 'front', back: 'back' },
};
BarCodeScanner.requestPermissionsAsync = async () => ({ status: 'denied', granted: false });
BarCodeScanner.getPermissionsAsync = async () => ({ status: 'denied', granted: false });
BarCodeScanner.scanFromURLAsync = async () => [];
BarCodeScanner.usePermissions = () => [{ status: 'denied', granted: false }, async () => ({ granted: false }), async () => ({ granted: false })];
const PermissionStatus = { GRANTED: 'granted', DENIED: 'denied', UNDETERMINED: 'undetermined' };
module.exports = { BarCodeScanner, PermissionStatus };
module.exports.default = module.exports;
