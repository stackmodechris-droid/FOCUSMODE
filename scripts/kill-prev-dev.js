const fs = require('fs');
const path = require('path');

const lockPath = path.join(__dirname, '..', '.next', 'dev', 'lock');

try {
  const content = fs.readFileSync(lockPath, 'utf8');
  const info = JSON.parse(content);
  if (info && info.pid) {
    try {
      process.kill(info.pid);
      console.log(`Stopped previous dev server (PID ${info.pid}) to allow new one.`);
    } catch (e) {
      // Process may have already exited
    }
  }
} catch (e) {
  // No lock file or not readable / no previous server
}
