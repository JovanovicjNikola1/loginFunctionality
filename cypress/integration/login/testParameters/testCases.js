import { user1Email, user1Password, app1Name, user2Email, user2Password, app2Name } from '../../../support/constants/user'
const positiveTestParameters = [
    {
        // Login First User
        testName: 'User One Should Fill Login Form And Redirect To A Homepage',
        email: user1Email,
        password: user1Password,
        appName: app1Name
    },
    {
        // Login Second User
        testName: 'User Two Should Fill Login Form And Redirect To A Homepage',
        email: user2Email,
        password: 'Qwer1234',
        appName: app2Name
    }
]

const negativeTestParameters = [
    {
        testName: 'Log In User Without Username',
        password: user1Password,
        appName: app1Name,
        id: '#username'
    },
    {
        testName: 'Log In User Without Password',
        email: user1Email,
        appName: app1Name,
        id: '#password'
    },
    {
        testName: 'Log In User Without Application Name',
        email: user1Email,
        password: user1Password,
        id: '#appName'
    }
]

export default {
    positiveTestParameters,
    negativeTestParameters
}