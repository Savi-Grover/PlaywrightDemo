exports.login= class LoginPage{
  

    constructor(page){
        this.page= page
        this.username_textbox = page.getByLabel('Username') // since we are using page from test class - so we have to use constructor
        this.password_textbox = page.getByLabel('Password')
        this.login_button = page.getByRole('button', { name: ' Login' })
    }
   
async Loginfunction(username, password){
await this.username_textbox.fill(username)
await this.password_textbox.fill(password)
await this.login_button.click()
}

async gotoBrowser(){
    await this.page.goto('https://the-internet.herokuapp.com/login')
}

}