// @expocraft/cs50-fingerprints STUB (native excluded on SDK 56 — old RCT-Folly podspec). Keeps the
// cs50 fingerprint app screens from crashing; all device ops are inert no-ops.
const noop = async () => ({});
module.exports = {
  multiply: async (a, b) => a * b,
  getCaptureDevice: noop,
  compareFingerPrints: async () => ({ match: false, score: 0 }),
  getReaders: async () => [],
  checkFingerPrintDevice: async () => ({ available: false }),
  applyStoragePermissions: noop,
  getUsbDevices: async () => [],
  requestUsbPermission: noop,
  captureFingerPrint: async () => ({ captured: false }),
  close: noop,
  powerOff: noop,
  useCs50FingerPrints: () => ({ device: null, readers: [], capturing: false, error: null, captureFingerPrint: async () => ({ captured: false }), compareFingerPrints: async () => ({ match: false }), checkFingerPrintDevice: async () => ({ available: false }), close: noop }),
};
module.exports.default = module.exports;
