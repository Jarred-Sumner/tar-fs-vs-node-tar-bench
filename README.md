# tar-fs vs node-tar decompression

TLDR: `tar-fs` is 2.5x slower than `node-tar` on this benchmark.

`tar-fs` results:

```zsh
❯ time node tar-fs-run.js
________________________________________________________
Executed in    1.16 secs   fish           external
   usr time  831.99 millis  137.00 micros  831.85 millis
   sys time  641.63 millis  711.00 micros  640.92 millis
```

`node-tar` results:

```zsh
❯ time node  node-tar-run.js
Executed in  476.10 millis    fish           external
   usr time  492.58 millis  112.00 micros  492.46 millis
   sys time  371.90 millis  623.00 micros  371.28 millis
```

`node_modules.tgz` is the node_modules folder generated after running `pnpm install`. Its in this repository to make reproducing this easy.

Node.js version:

```
❯ node -v
v15.8.0
```

System:

```
MacBook Pro (16-inch, 2019)
macOS 11.2.1
Processor Name:	8-Core Intel Core i9
Processor Speed:	2.4 GHz
```
