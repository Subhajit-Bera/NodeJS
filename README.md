# NodeJS

## What is Node.js and why do we need it ?
**We have traditionally executed JavaScript within web browsers.Browser has a separate engine which compiles Js( chrome-> Chrome V8 engine).**</br>
Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment,runs on the V8 JavaScript engine.Means node.js provides us the engine to run JavaScript ,for that we are able to run JavaScript directly in the terminal and command prompt. So , with the help of node.js we can run JavaScript in the backend outside a web browser.
That's why Node Js is called a server-side language but basically it's a runtime environment.


#### Now if we want to run JavaScript in any IDE ,we don’t have to create a **.html** file and link **.js** to it.
#### We can simply create a **.js** file and write JavaScript in it and see the output on the terminal.
### Command to run a JavaScript file in VS code : **node ./filename**

The **.js** file created for node can also link with html and run. Because both are the same file. There are some mild differences. </br>
One of them:</br>

#### index.js
```
console.log(window)
```
#### browser output:
![image](https://github.com/Subhajit-Bera/NodeJS-Beginners/assets/103336107/5a1f10ff-8cfe-4927-9ce3-638d1b09cfa1)

#### terminal output:
![image](https://github.com/Subhajit-Bera/NodeJS-Beginners/assets/103336107/65753a39-5115-4c6d-85c8-4373d0d91516)

#### Reason : Everything we write in JavaScript comes under the window object. We use it to perform DOM manipulation.Window object is a frontend browser object , so we can not access it in the backend. That’s why it gives errors.
