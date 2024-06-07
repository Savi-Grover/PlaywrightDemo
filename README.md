**INSTALLATION**

npm init playwright@latest

**RUN TESTS**

1. npx playwright test
2. npx playright test <testfilename>
3. npx playwright test --project=chromium
4. npx playwright test --worker 3
5. npx playwright test
6. npx playwright test --headed
7. npx playwright test --debug
8. npx playwright test --:21 --debug

**Record/Generate Scripts**

1. npx playwright codegen --target javascript -o .\tests\record2_demo.spec.js
2. npx playwright codegen --viewport-size=800,600
3. npx playwright codegen --device="iPhone 11 Pro"
4. npx playwright codegen --color-scheme=dark
5. npx playwright codegen --color-scheme=dark google.com
6. npx playwright codegen -h


