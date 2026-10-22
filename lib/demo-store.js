const demoRequests = globalThis.demoRequests || [];

if (!globalThis.demoRequests) {
  globalThis.demoRequests = demoRequests;
}

module.exports = {
  demoRequests
};
