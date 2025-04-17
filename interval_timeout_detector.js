(function() {
  const originalSetTimeout = window.setTimeout;
  const originalSetInterval = window.setInterval;

  const timeouts = [];
  const intervals = [];

  window.setTimeout = function(callback, delay, ...args) {
    const id = originalSetTimeout(callback, delay, ...args);
    timeouts.push({ id, delay, callback });
    console.log('[setTimeout]', id, 'Delay:', delay, 'Callback:', callback);
    return id;
  };

  window.setInterval = function(callback, delay, ...args) {
    const id = originalSetInterval(callback, delay, ...args);
    intervals.push({ id, delay, callback });
    console.log('[setInterval]', id, 'Delay:', delay, 'Callback:', callback);
    return id;
  };

  window._myTimers = {
    getTimeouts: () => timeouts,
    getIntervals: () => intervals,
  };

  console.log('Timer tracking enabled. Use _myTimers.getTimeouts() or _myTimers.getIntervals() to inspect.');
})();
