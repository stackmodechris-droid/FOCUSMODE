import('node:fs').then(({ default: fs }) => {
  import('node:path').then(({ default: path }) => {
    const lockPath = path.join(__dirname, '..', '.next', 'dev', 'lock');

    try {
      const content = fs.readFileSync(lockPath, 'utf8');
      const info = JSON.parse(content);
      if (info && info.pid) {
        try {
          process.kill(info.pid);
          console.log(`Stopped previous dev server (PID ${info.pid}) to allow new one.`);
        } catch {
          // Process may have already exited
        }
      }
    } catch {
      // No lock file or not readable / no previous server
    }
  });
});
