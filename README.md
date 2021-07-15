# enWrite

[![N|Solid](https://res.cloudinary.com/srvraj311/image/upload/v1626325102/Main_2_hu5xxl.png)](https://srvraj311.github.io)

[![]()]()
enWrite is an simple and clean web app for taking notes on the go and setting reminders for important tasks.

- Note taking and Real-Time cloud backup
- Reminders and Alarms with stylish datepicker
- Cross Browser and Platform support
- Fully Responsive Design

[![N|Solid](https://res.cloudinary.com/srvraj311/image/upload/v1626325103/git_icon_1_ytmt5o.png)]()

# New Features!

- Implimented a brand new Authentication api that is build over python and flask-restful for secure and continuous backend
- New intuitive login screen and Signup screen.
- Reminders screen custiomised with new designed datepicker
- Storage for data now shifted to MongoDB cloud Clusters

## Languages and Libraries used:

- Javascript , Css , And Jsx(HTML in JS) using react for rendering components on screen and content management
- Python with Flask and Flask-Restful for backend API for login and Storage requests
- MongoDB for Database using Python's PyMongo library.

Use of third party libraries are kept minimal to explore the indepth features of the frameworks itself.


### Installation

Running enWrite on local server Requires the [API](https://github.com/srvraj311/enWrite-Authentication-api) to be running too on the local server as it hasn't been deployed yet.
You need to have [Node.js](https://nodejs.org/) installed and Docker Compose setup to run this.

Install the dependencies and devDependencies and start the server for react app.

When running the application and database both on local server , the application may not find the server, you need to install CORS Block extention in chrome in order it to function properly.

```sh
$ cd notes-app
$ npm install
$ npm start
```

For api to be functional.

```sh
$ cd enWrite-api
$ sudo docker-compose buil
$ sudo docker-compose up
```

### Screenshots
![image](https://res.cloudinary.com/srvraj311/image/upload/v1626325667/Screenshot_20210715_103559_rb8dse.png)
![image](https://res.cloudinary.com/srvraj311/image/upload/v1626325667/Screenshot_20210715_103617_rngg7b.png)
![image](https://res.cloudinary.com/srvraj311/image/upload/v1626325667/Screenshot_20210715_103637_pajhfp.png)
![image](https://res.cloudinary.com/srvraj311/image/upload/v1626325667/Screenshot_20210715_103649_ubdhbg.png)
![image](https://res.cloudinary.com/srvraj311/image/upload/v1626325667/Screenshot_20210715_103641_tniq8i.png)
![image](https://res.cloudinary.com/dvmsk482x/image/upload/v1623922656/Screenshot_20210617_150128_yrlgci.png)
![image](https://res.cloudinary.com/dvmsk482x/image/upload/v1623922656/Screenshot_20210617_150532_rufjtx.png)

### Development

Want to contribute ? That would be great!
