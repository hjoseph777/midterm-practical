@echo off
echo Building and deploying to GitHub Pages...

rem Build the project
call npm run build

rem Create .nojekyll file to prevent Jekyll processing
echo. > out\.nojekyll

rem Deploy to GitHub Pages
call npx gh-pages -d out -b gh-pages

echo Deployment complete!
