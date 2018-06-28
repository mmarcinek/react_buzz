## Getting Started 

Clone the repo via HTTPS (by entering in the terminal):
`git clone https://github.com/mmarcinek/react_buzz.git && cd react_buzz`

or

Clone the repo via SHH:
`git clone git@github.com:mmarcinek/react_buzz.git && cd react_buzz`

## Installing Dependencies

While this repo is pretty lightweight, we will need some dependencies to get started:

`npm i` or `npm install`

will get everything you need to run this application.

Entering `npm start` will compile the application and open your default browser to `localhost:3000` you can use that application, thanks [Create React App](https://github.com/facebookincubator/create-react-app).

### More about dependencies, AKA "What are you installing and why?

1. [Create React App](https://github.com/facebookincubator/create-react-app)
    * Create React App is the basic React installation that is supported by the React.js team, for the sake of a quick project, it gets you everything needed to get started without fussing over installing all required dependencies. Just delete some boilerplate and get started.  
    * Create React App installs Webpack and Babel!
    * Easy, although a bit bloated for this application.

2. [material-ui/core](https://github.com/mui-org/material-ui)
    * Material-UI/core offers a great variety of wonderful themes, components and utilities and is easily customizable. Note: their CSS Flex-grid is pretty powerful and amazing, although not utilized in this application.
    * Clean and well documented Toolkit that would be a front runner for any application I was building.

3. [material-ui/fonts](https://github.com/mui-org/material-ui)
    * Adds the Font and Icon libraries that mysteriously are not included in the core?
    * Even though the documentation for `@material-ui/fonts` is quite lame you can access any of the [svg icons](https://material.io/tools/icons/?style=baseline) in Google's svg library by naming the icon in camelCase:
    
    i.e. the svg icon for `alarm_off` can be imported as `'@material-ui/icons/AlarmOff'`. 
    
    This then gives you an injectable component that you can add to any other imported component, i.e.:
    ```
      <Button>
        <AlarmOff />
      <Button>
    ```
4. [typeface-roboto](https://github.com/KyleAMathews/typefaces/tree/master/packages/roboto)
    * The name says it all, basically, it is a very Webpack friendly means of adding the Roboto font to a project.
5. [react-particles-js](https://github.com/Wufe/react-particles-js)
    * **Well, because bubbles!**

Happy Times!
