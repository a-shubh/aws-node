# AWS-Node-Express
### Tutorial app for setting up AWS with Node and express using RDS and Loadbalancer.


## Features

- Basic Node concepts
- AWS
- RDS

## Installation

### Node

AWS-Node requires [Node.js](https://nodejs.org/) v10+ to run.

- Install Node [https://nodejs.org/en/download/](https://nodejs.org/en/download/).
- Clone git repo.

Install the dependencies and devDependencies and start the server.

```
cd aws-node
npm i
```

- Spin a free RDS postgres server
- Spin up a free EC2 ubuntu instance, make sure to have same VPC and subnet as the RDS.
- Connect EC2 with RDS

- Now create .env and store the EC2 and RDS credentials in it.
-  Then fork push to a new git repo and copy it's url.
- then console login into EC2 using ssh url provided and install node and git.

```
git clone [paste your git repo url here]
cd aws-node
npm i
npm start
```

🎉 You have successfully setup an AWS hosted Node-Express app.

Api are defined as :-

| Plugin | README |
| ------ | ------ |
| main route | http://[ec2 host url]:3000/ |
| login | /login |
| login | /logout |
| get users | /users

## Authentication

Authentication was enabled using JWT tokens and cookies.
