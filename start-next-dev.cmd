@echo off
setlocal
cd /d "%~dp0"
set "PATH=C:\Users\sales\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin;C:\Users\sales\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin;%PATH%"
echo Starting ZD Pet Tag Next.js site...
echo.
echo Open http://127.0.0.1:3000 after you see "Ready".
echo Keep this window open while previewing the site.
echo.
"C:\Users\sales\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\pnpm.cmd" dev --hostname 127.0.0.1 --port 3000
pause
