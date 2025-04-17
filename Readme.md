- Works on any website, as long as it's enabled and runs early (@run-at document-start).
  
- Intercepts all setTimeout and setInterval calls on the page.

- Stores timer information: ID, delay, and callback reference.

- Lets you inspect all active timeouts and intervals using:

_myTimers.getTimeouts() — list of all setTimeout calls

_myTimers.getIntervals() — list of all setInterval calls
