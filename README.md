# URL Shortener  
A simple webapp to convert URL into short one.
![Demo](/Demo.png)  

## Features  
### Basic  
:sparkles: Convert URL into unique short one with random letters & numbers.  
:sparkles: Click button to copy the generated link.  
:sparkles: Store used links in MongoDB.  

### Optional Settings  
:pencil2: `port` (root/app.js)  
:pencil2: `urlBasic` for hostname (root/app.js)  
:pencil2: `randomLength` for short URL length  (root/app.js)  
:pencil2: `charRef` for random characters collection (root/utils/shortGenerator.js)  

## Getting Started  
### Prerequisites  
- Be sure that Node.js and npm are installed already.  
- This app use MongoDB as database. You need to sign in for an account and get the database URI.

### Installing
- Clone or download the project to your local machine.  
  ```bash
  # folder_name(optional) will create a new folder in your pwd.
  git clone <folder_name> https://github.com/ritachien/URL_Shortener.git
  ```  
- Get into your project folder by `Terminal` and run:  
  ```bash
  npm install
  ```
- (Optional) Install nodemon for restart server conveniently.
  ```bash
  npm i nodemon
  ```

### How to use
- Create a `.env` file in `root/config/.env` , and add content below in it.
  ```bash
  MONGODB_URI="<your MongoDB URI>"
  ```
- Start app.  
  ```bash
  npm run start
  ```
- The following message will show in console when app running successfully.  
  ```bash
  App is running on http://localhost:3000/
  MongoDB connected!
  ```
- Press `Ctrl` +`C` to stop the server.

## Built With  
* Node.js @16.14.2
* Express.js @4.17.3 - The web framework used
* express-handlebars @6.0.5 - View engine for Express
* dotenv @16.0.0 - Manage environment variables
* mongoose @6.3.0 - Connect and operate MongoDB
* Bootstrap @5.1.3 - For CSS stylesheet

## Authors
* [**Rita Chien**](https://github.com/ritachien)
