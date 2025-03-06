const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// ANSI color codes for prettier console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  cyan: '\x1b[36m',
  yellow: '\x1b[33m',
  red: '\x1b[31m'
};

console.log(`${colors.bright}${colors.cyan}Starting deployment to GitHub Pages from main branch...${colors.reset}`);

try {
  // Step 1: Build the Next.js application
  console.log(`\n${colors.yellow}Step 1: Building the application${colors.reset}`);
  execSync('npm run build', { stdio: 'inherit' });
  
  // Step 2: Create .nojekyll file to prevent Jekyll processing
  console.log(`\n${colors.yellow}Step 2: Adding .nojekyll file${colors.reset}`);
  const outDir = path.join(__dirname, 'out');
  const nojekyllPath = path.join(outDir, '.nojekyll');
  fs.writeFileSync(nojekyllPath, '');
  console.log(`${colors.green}Created .nojekyll file${colors.reset}`);
  
  // Step 3: Deploy to GitHub Pages using gh-pages
  console.log(`\n${colors.yellow}Step 3: Deploying from main branch to gh-pages branch${colors.reset}`);
  execSync('npx gh-pages -d out --dotfiles -b gh-pages -o origin', { stdio: 'inherit' });
  
  console.log(`\n${colors.bright}${colors.green}✓ Deployment completed successfully!${colors.reset}`);
  console.log(`${colors.cyan}Your site should be available at: ${colors.bright}https://hjoseph777.github.io/midterm-practical/${colors.reset}`);
  console.log(`Note: It might take a few minutes for changes to be visible.`);
  
} catch (error) {
  console.error(`\n${colors.red}Error during deployment:${colors.reset}\n`, error);
  process.exit(1);
}
