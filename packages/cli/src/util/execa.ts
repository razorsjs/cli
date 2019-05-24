import { execa } from '../commonUtil';

/**
 * execute bash command
 * @param command
 * @param args
 * @param targetDir
 */
export function executeCommand(command: string,
                               args?: any[],
                               targetDir?: string) {
  return new Promise((resolve, reject) => {
    const child = execa(command, args, {
      cwd: targetDir,
      // TODO:why
      stdio: ['inherit', 'inherit', command === 'yarn' ? 'pipe' : 'inherit'],
    });
    child.on('close', code => {
      if (code !== 0) {
        reject(`command failed: ${command} ${args && args.join(' ')}`);
        return;
      }
      resolve();
    });
    // filter out unwanted yarn output
    if (command === 'yarn') {
      child.stderr && child.stderr.on('data', buf => {
        const str = buf.toString()
        if (/warning/.test(str)) {
          return
        }
        // // progress bar
        // const progressBarMatch = str.match(/\[.*\] (\d+)\/(\d+)/)
        // if (progressBarMatch) {
        //   // since yarn is in a child process, it's unable to get the width of
        //   // the terminal. reimplement the progress bar ourselves!
        //   renderProgressBar(progressBarMatch[1], progressBarMatch[2])
        //   return
        // }

        process.stderr.write(buf)
      })
    }
  });
}
