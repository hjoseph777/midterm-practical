@echo off
echo Cleaning up previous installation...
if exist node_modules rmdir /s /q node_modules
if exist .next rmdir /s /q .next
if exist out rmdir /s /q out
echo Installing dependencies...
call npm install
echo Creating .nojekyll file...
echo. > public\.nojekyll
echo Installation complete!
