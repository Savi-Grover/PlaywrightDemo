**INSTALLATION**

npm init playwright@latest

**RUN TESTS**

npx playwright test
npx playright test <testfilename>
npx playwright test --project=chromium
npx playwright test --worker 3
npx playwright test
npx playwright test --headed
npx playwright test --debug
npx playwright test --:21 --debug

**Record/Generate Scripts**

npx playwright codegen --target javascript -o .\tests\record2_demo.spec.js
npx playwright codegen --viewport-size=800,600
npx playwright codegen --device="iPhone 11 Pro"
npx playwright codegen --color-scheme=dark
npx playwright codegen --color-scheme=dark google.com
npx playwright codegen -h


