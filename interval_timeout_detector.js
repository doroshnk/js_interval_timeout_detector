// ==UserScript==
// @name         Timer Tracker
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Tracks all setTimeout and setInterval calls on the page
// @author       https://github.com/doroshnk
// @match        *://*/*
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Store original functions to preserve native behavior
    const originalSetTimeout = window.setTimeout;
    const originalSetInterval = window.setInterval;

    // Arrays to keep track of all timers
    const timeouts = [];
    const intervals = [];

    // Override setTimeout to log and store each timer
    window.setTimeout = function(callback, delay, ...args) {
        const id = originalSetTimeout(callback, delay, ...args);
        timeouts.push({ id, delay, callback });
        console.log('[setTimeout]', 'ID:', id, '| Delay:', delay, '| Callback:', callback);
        return id;
    };

    // Override setInterval to log and store each interval
    window.setInterval = function(callback, delay, ...args) {
        const id = originalSetInterval(callback, delay, ...args);
        intervals.push({ id, delay, callback });
        console.log('[setInterval]', 'ID:', id, '| Delay:', delay, '| Callback:', callback);
        return id;
    };

    // Expose utility functions globally for easy access
    window._myTimers = {
        getTimeouts: () => timeouts,
        getIntervals: () => intervals,
    };

    console.log('Use _myTimers.getTimeouts() or _myTimers.getIntervals() in the console to inspect active timers.');
})();
