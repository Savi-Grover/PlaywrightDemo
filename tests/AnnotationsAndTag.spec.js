import { test } from '@playwright/test';

//annotations 

test.skip('test skip', async({page})=>{
// this test will skip
}),

test.slow('test slow', async({page})=>{
    // this test will be slow
 }),
 
test.fail('test fail', async({page})=>{
    // this test will fail
}),

test.fixme('test fixme', async({page})=>{
    // this test will fix
}),


test('not ready yet', async({page})=>{
    // this test will fail
    test.fail
})


//tags - @smoke , @reg , @fast, @slow - declared within title of test only

test('test tag @smoke', async({page})=>{
    // this test has smoke tag
}),

test('test tag @reg', async({page})=>{
    // this test has reg tag
})