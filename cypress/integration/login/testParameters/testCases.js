import { user1Email, user1Password, app1Name, user2Email, user2Password, app2Name } from '../../../support/constants/user'
const positiveTestParameters = [
    {
        // Login First User
        testName: 'Positive Test - User One Should Fill Login Form And Redirect To A Homepage',
        email: user1Email,
        password: user1Password,
        appName: app1Name
    },
    {
        // Login Second User
        testName: 'Positive Test - User Two Should Fill Login Form And Redirect To A Homepage',
        email: user2Email,
        password: user2Password,
        appName: app2Name
    }
]

const negativeTestParameters = [
    {
        testName: 'Log In User Without Username',
        password: user1Password,
        appName: app1Name,
        id: '#username',
        errorMessage: 'E-mail is required!'
    },
    {
        testName: 'Log In User Without Password',
        email: user1Email,
        appName: app1Name,
        id: '#password',
        errorMessage: 'Please input your password!'
    },
    {
        testName: 'Log In User Without Application Name',
        email: user1Email,
        password: user1Password,
        id: '#appName',
        errorMessage: 'Please input your application name!'
    },
    {
        testName: 'Log In User Invalid Email Address',
        email: 'customerbrokercloud.com',
        password: user1Password,
        appName: app1Name,
        id: '#appName',
        errorMessage: 'Wrong E-Mail or Password'
    },
    {
        testName: 'Log In User With Second User Email Address',
        email: 'support@flexinvest.com',
        password: user1Password,
        appName: app1Name,
        id: '#appName',
        errorMessage: 'Wrong E-Mail or Password'
    },
    {
        testName: 'Log In User With a Special Caracters As An E-Mail Address',
        email: `{${user1Email}}#$%@`,
        password: user1Password,
        appName: app1Name,
        id: '#appName',
        errorMessage: 'Wrong E-Mail or Password'
    },
    {
        testName: 'Log In User Without @ In An E-Mail Address',
        email: `customerbrokercloud.com`,
        password: user1Password,
        appName: app1Name,
        id: '#appName',
        errorMessage: 'Wrong E-Mail or Password'
    },
    {
        testName: 'Log In User Without Domain In An E-Mail Address',
        email: `customer@brokercloudcom`,
        password: user1Password,
        appName: app1Name,
        id: '#appName',
        errorMessage: 'Wrong E-Mail or Password'
    },
    {
        testName: 'Log In User With Wrong Password',
        email: user1Email,
        password: 'Dzoni',
        appName: app1Name,
        id: '#appName',
        errorMessage: 'Wrong E-Mail or Password'
    },
]

export default {
    positiveTestParameters,
    negativeTestParameters
}