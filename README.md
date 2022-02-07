# Software Jobs

## MEAN Stack Project

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Mini Linkedin for software finding jobs.

- Candidate
- Company
- ✨Jobs

## Features

- Company can create new job post with technology and salary.
- Users can apply for that job.
- Company can see which candidates has applied for that job post.
- Admin can manage all the users and company data.
- Strong Authentication using JWT token.

## Tech

Dillinger uses a number of open source projects to work properly:

- [Nodejs] - for backned framework
- [Monogdb] - nosql database
- [Mongoose] - libary for connecting mongodb with backend.
- [JOI] - libary for data validations.
- [JWT] - for token based authentication.
- [Express] - fast node.js network app framework
- [Angular] - SPA framework
- [Angular Material] - CSS framework

## Installation

Node requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

For Backend :-

```sh
git clone https://github.com/monstermahi982/software-job.git
cd software-job
npm install
npm run dev
```

For Frontend :-

```sh
git clone https://github.com/monstermahi982/software-job.git
cd software-job/frontend
npm install
npm run dev
```

## User API's

| Type          | Link                                   | Request |
| ------------- | -------------------------------------- | ------- |
| Add User      | http://localhost:5000/api/user         | POST    |
| Get All Users | http://localhost:5000/api/user         | GET     |
| Get One User  | http://localhost:5000/api/user/user_id | GET     |
| Update User   | http://localhost:5000/api/user/user_id | PUT     |
| Delete User   | http://localhost:5000/api/user/user_id | DELETE  |
| User Login    | http://localhost:5000/api/user/login   | POST    |

## Company API's

| Type               | Link                                         | Request |
| ------------------ | -------------------------------------------- | ------- |
| Add Company        | http://localhost:5000/api/company            | POST    |
| Get All Companyies | http://localhost:5000/api/company            | GET     |
| Get One Company    | http://localhost:5000/api/company/company_id | GET     |
| Update Company     | http://localhost:5000/api/company/company_id | PUT     |
| Delete Company     | http://localhost:5000/api/company/company_id | DELETE  |
| Company Login      | http://localhost:5000/api/company/login      | POST    |

## Job's API's

| Type         | Link                                                | Request |
| ------------ | --------------------------------------------------- | ------- |
| Add Job      | http://localhost:5000/api/user                      | POST    |
| Get All Jobs | http://localhost:5000/api/user                      | GET     |
| Get One Job  | http://localhost:5000/api/user/user_id              | GET     |
| Search Jobs  | http://localhost:5000/api/jobs/search?name=job_name | POST    |
| Delete Job   | http://localhost:5000/api/user/user_id              | DELETE  |

## Application API's

| Type            | Link                                   | Request |
| --------------- | -------------------------------------- | ------- |
| Add Application | http://localhost:5000/api/application/ | POST    |
| Appl by user_id | http://localhost:5000/api/application/ | GET     |
| Appl by job_id  | http://localhost:5000/api/application/ | GET     |
| post by comp_id | http://localhost:5000/api/user/user_id | GET     |

## House Monk

**Free Software, High Paid Jobs!**

[monogdb]: https://github.com/joemccann/dillinger
[git-repo-url]: https://github.com/joemccann/dillinger.git
[joi]: https://joi.dev/api/
[mongoose]: https://mongoosejs.com/docs/
[markdown-it]: https://github.com/markdown-it/markdown-it
[ace editor]: http://ace.ajax.org
[nodejs]: http://nodejs.org
[twitter bootstrap]: http://twitter.github.com/bootstrap/
[jquery]: http://jquery.com
[jwt]: https://jwt.io/
[express]: http://expressjs.com
[angularjs]: http://angularjs.org
[angular]: https://angular.io/
[angular material]: http://angularjs.org
