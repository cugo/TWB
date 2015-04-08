TWB

To set up the app:
- To create the web application there are a few external libraries which are necessary.
- Download Git Bash. Download repository via clone URL by typing git clone "url".
- In Git Bash, go to project folder and type "npm install" to install the dependencies. It will look the dependendies in the package.json file.
- Type "bower install". The bower_components folder will be created with the dependent packages written in bower.json.

Node.js: Java Script for server-side.
- npm install packages (grunt, bower etc)
- Node.js command line should be installed. In order to install packages go: https://nodejs.org/
- Packages should be installed to project folder.
- Type "npm install -g package name"
- 
Bower: Bower is needed to distruute the application. In bower.json folder, all the dependencies can be found. Therefore, contribitors do not need to re-install each packages all the time.

- Package manager for the web.
- Pulls down the necessary libraries
- Type npm install in git bash. This will create the node_modules folder.
- To pull down a package with bower, type "bower install package name". For example, "bower install angularjs".
- The package(s) will be installed to the bower_components folder.
- To check the installed packages, type "bower-list".
- Type "bower init" to initialize.
- To uninstall a package, type "bower uninstall package name".

Grunt
- Type "npm grunt" in git bash.
