# firefox-headless-memory
firefox headless mode memory leak issue case

## QuickStart

- `npm i`
- `node ./index`

## Sample output

```shell
gitpod /workspace/firefox-headless-memory $ node ./index.js 
downloadFirefox: startDownload...
downloadFirefox: {"revision":"96.0a1","executablePath":"/workspace/firefox-headless-memory/node_modules/puppeteer/.local-firefox/linux-96.0a1/firefox/firefox","folderPath":"/workspace/firefox-headless-memory/node_modules/puppeteer/.local-firefox/linux-96.0a1","local":true,"url":"https://ftp.mozilla.org/pub/firefox/nightly/latest-mozilla-central/firefox-96.0a1.en-US.linux-x86_64.tar.bz2","product":"firefox"}
launchBrowser::/workspace/firefox-headless-memory/node_modules/puppeteer/.local-firefox/linux-96.0a1/firefox/firefox
start load page: https://www.baidu.com
open page..
open page..
324711
[8:5:53] >> browser mem: 296390656
331464
[8:5:55] >> browser mem: 300380160
open page..
331463
[8:5:56] >> browser mem: 315453440
open page..
331464
[8:5:58] >> browser mem: 285708288
open page..
331537
[8:6:0] >> browser mem: 294227968
open page..
331464
[8:6:1] >> browser mem: 288292864
open page..
331463
[8:6:3] >> browser mem: 293154816
open page..
331463
[8:6:5] >> browser mem: 302391296
open page..
331464
[8:6:7] >> browser mem: 283295744
open page..
331463
[8:6:8] >> browser mem: 297693184
open page..
331465
[8:6:10] >> browser mem: 288526336
open page..
331463
[8:6:12] >> browser mem: 294649856
open page..
331464
[8:6:14] >> browser mem: 287686656
open page..
331465
[8:6:15] >> browser mem: 296730624
open page..
331463
[8:6:17] >> browser mem: 306262016
open page..
331408
[8:6:19] >> browser mem: 287604736
open page..
331464
[8:6:21] >> browser mem: 299061248
open page..
331463
[8:6:23] >> browser mem: 289435648
open page..
331464
[8:6:24] >> browser mem: 299511808
open page..
331464
[8:6:26] >> browser mem: 288215040
open page..
331465
[8:6:28] >> browser mem: 299122688
open page..
331409
[8:6:30] >> browser mem: 310071296
open page..
331464
[8:6:31] >> browser mem: 289656832
open page..
331464
[8:6:33] >> browser mem: 300122112
open page..
331463
[8:6:35] >> browser mem: 293380096
open page..
331463
[8:6:37] >> browser mem: 301076480
open page..
331463
[8:6:38] >> browser mem: 313102336
open page..
331464
[8:6:40] >> browser mem: 295120896
open page..
331465
[8:6:42] >> browser mem: 304132096
open page..
331464
[8:6:44] >> browser mem: 291799040
open page..
331466
[8:6:46] >> browser mem: 302129152
open page..
331408
[8:6:47] >> browser mem: 292220928
open page..
331408
[8:6:49] >> browser mem: 311816192
open page..
331464
[8:6:51] >> browser mem: 325541888
open page..
331465
[8:6:53] >> browser mem: 298373120
open page..
331463
[8:6:54] >> browser mem: 309846016
open page..
331408
[8:6:56] >> browser mem: 299892736
open page..
331463
[8:6:58] >> browser mem: 311414784
open page..
331465
[8:7:0] >> browser mem: 301027328
open page..
331464
[8:7:1] >> browser mem: 311599104
open page..
331464
[8:7:3] >> browser mem: 324186112
open page..
331464
[8:7:5] >> browser mem: 303562752
open page..
331463
[8:7:7] >> browser mem: 314060800
open page..
331409
[8:7:9] >> browser mem: 302673920
open page..
331464
[8:7:10] >> browser mem: 315297792
open page..
331464
[8:7:12] >> browser mem: 304517120
open page..
331465
[8:7:14] >> browser mem: 313892864
open page..
331408
[8:7:16] >> browser mem: 328351744
open page..
331463
[8:7:18] >> browser mem: 300969984
open page..
331464
[8:7:19] >> browser mem: 315285504
open page..
331463
[8:7:21] >> browser mem: 306360320
open page..
331463
[8:7:23] >> browser mem: 317415424
open page..
331464
[8:7:25] >> browser mem: 304308224
open page..
331464
[8:7:26] >> browser mem: 316145664
open page..
331464
[8:7:28] >> browser mem: 328077312
open page..
331463
[8:7:30] >> browser mem: 309661696
open page..
331464
[8:7:32] >> browser mem: 321327104
open page..
331463
[8:7:33] >> browser mem: 308736000
open page..
331465
[8:7:35] >> browser mem: 320270336
open page..
331464
[8:7:37] >> browser mem: 332136448
open page..
331490
[8:7:39] >> browser mem: 312942592
open page..
331464
[8:7:40] >> browser mem: 326144000
open page..
331463
[8:7:42] >> browser mem: 312848384
open page..
331408
[8:7:44] >> browser mem: 324730880
open page..
331463
[8:7:46] >> browser mem: 318189568
open page..
331466
[8:7:48] >> browser mem: 327376896
open page..
331463
[8:7:49] >> browser mem: 340344832
open page..
331463
[8:7:51] >> browser mem: 309526528
open page..
331457
[8:7:53] >> browser mem: 325812224
open page..
331463
[8:7:55] >> browser mem: 314548224
open page..
331465
[8:7:56] >> browser mem: 326467584
open page..
331410
[8:7:58] >> browser mem: 317358080
open page..
331464
[8:8:0] >> browser mem: 328400896
open page..
331409
[8:8:2] >> browser mem: 343736320
open page..
331464
[8:8:3] >> browser mem: 318947328
open page..
331517
[8:8:5] >> browser mem: 331501568
open page..
331463
[8:8:8] >> browser mem: 320729088
open page..
331463
[8:8:9] >> browser mem: 334770176
open page..
331463
[8:8:10] >> browser mem: 320933888
open page..
331463
[8:8:12] >> browser mem: 332808192
open page..
331464
[8:8:14] >> browser mem: 348295168
open page..
331464
[8:8:16] >> browser mem: 324820992
open page..
331464
[8:8:17] >> browser mem: 336965632
open page..
331463
[8:8:20] >> browser mem: 324997120
open page..
331464
[8:8:21] >> browser mem: 339288064
open page..
331463
[8:8:23] >> browser mem: 321961984
open page..
331408
[8:8:25] >> browser mem: 332795904
open page..
331463
[8:8:27] >> browser mem: 347639808
open page..
331456
[8:8:28] >> browser mem: 324620288
open page..
331456
[8:8:30] >> browser mem: 341381120
open page..
331463
[8:8:32] >> browser mem: 327929856
open page..
332921
[8:8:33] >> browser mem: 342249472
open page..
331463
[8:8:35] >> browser mem: 328712192
open page..
331464
[8:8:37] >> browser mem: 341823488
open page..
331463
[8:8:39] >> browser mem: 356372480
open page..
331463
[8:8:41] >> browser mem: 330862592
open page..
331463
[8:8:42] >> browser mem: 346906624
open page..
331464
[8:8:44] >> browser mem: 333942784
open page..
331466
[8:8:46] >> browser mem: 347271168
open page..
332881
[8:8:48] >> browser mem: 338411520
open page..
331464
[8:8:50] >> browser mem: 360435712
open page..
331465
[8:8:51] >> browser mem: 383193088
open page..
331464
[8:8:53] >> browser mem: 355221504
open page..
331465
[8:8:55] >> browser mem: 377303040
open page..
331464
[8:8:57] >> browser mem: 358789120
open page..
331465
[8:8:58] >> browser mem: 379895808
open page..
331464
[8:9:0] >> browser mem: 375513088
open page..
331580
[8:9:2] >> browser mem: 366206976
open page..
331465
[8:9:4] >> browser mem: 376176640
open page..
331463
[8:9:5] >> browser mem: 375943168
open page..
331464
[8:9:7] >> browser mem: 388399104
open page..
331463
[8:9:9] >> browser mem: 383107072
open page..
331463
[8:9:11] >> browser mem: 391618560
open page..
331463
[8:9:12] >> browser mem: 405499904
open page..
331465
[8:9:14] >> browser mem: 391438336
open page..
331464
[8:9:16] >> browser mem: 403959808
open page..
331463
[8:9:18] >> browser mem: 404529152
```

As you can see, the browser memory usage is increasing gradually from `296390656` to `404529152`.


## Question

### 1. libgtk-3.so.0 error

```shell
Error: Failed to launch the browser process!
XPCOMGlueLoad error for file /workspace/firefox-headless-memory/node_modules/puppeteer/.local-firefox/linux-96.0a1/firefox/libmozgtk.so:
libgtk-3.so.0: cannot open shared object file: No such file or directory
Couldn't load XPCOM.
```

Please refer to: <https://stackoverflow.com/a/50768180/1661664>

### 2. libdbus-glib-1.so.2 error

```shell
Error: Failed to launch the browser process!
XPCOMGlueLoad error for file /workspace/firefox-headless-memory/node_modules/puppeteer/.local-firefox/linux-96.0a1/firefox/libxul.so:
libdbus-glib-1.so.2: cannot open shared object file: No such file or directory
Couldn't load XPCOM.
```

- `sudo apt-get install libdbus-glib-1.2`