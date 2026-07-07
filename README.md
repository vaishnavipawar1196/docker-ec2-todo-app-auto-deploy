# 🚀 Dockerized Todo App with CI/CD on AWS EC2

A complete CI/CD project that automatically builds, pushes, and deploys a Dockerized Node.js Todo application to an AWS EC2 instance using GitHub Actions.

Every push to the **main** branch automatically:

* Builds a Docker image
* Pushes the image to Docker Hub
* Connects to AWS EC2 using SSH
* Pulls the latest image
* Restarts the application container

---

# 📌 Architecture

```
Developer
     │
     ▼
 GitHub Repository
     │
     ▼
 GitHub Actions
     │
     ├── Checkout Code
     ├── Build Docker Image
     ├── Push Image to Docker Hub
     └── SSH into EC2
               │
               ▼
      Pull Latest Docker Image
               │
               ▼
      Remove Old Container
               │
               ▼
      Run Updated Container
               │
               ▼
     Application Available on EC2
```

---

# 🚀 Features

* Dockerized Node.js Todo application
* Automatic Docker image build
* Docker Hub integration
* GitHub Actions CI/CD pipeline
* Automatic deployment to AWS EC2
* Zero manual deployment after Git push

---

# 🛠️ Tech Stack

* Node.js
* Express.js
* Docker
* Docker Hub
* GitHub Actions
* AWS EC2
* Linux
* SSH

---

# 📂 Project Structure

```
.
├── .github
│   └── workflows
│       └── deploy.yml
├── public
├── views
├── app.js
├── package.json
├── package-lock.json
├── Dockerfile
└── README.md
```

---

# 🐳 Dockerfile

```dockerfile
FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm","start"]
```

---

# ▶️ Run Locally

Clone repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

Install dependencies

```bash
npm install
```

Start application

```bash
npm start
```

Open

```
http://localhost:4000
```

---

# 🐳 Run Using Docker

Build image

```bash
docker build -t todo-app .
```

Run container

```bash
docker run -d -p 4000:4000 --name todo-app todo-app
```

Open

```
http://localhost:4000
```

---

# ☁️ AWS EC2 Setup

* Launch Amazon Linux EC2 instance
* Install Docker
* Enable Docker service
* Add `ec2-user` to Docker group
* Open Security Group ports:

  * 22 (SSH)
  * 4000 (Application)

---

# 🔐 GitHub Secrets

Configure the following repository secrets:

| Secret      | Description             |
| ----------- | ----------------------- |
| DOCKER_USER | Docker Hub Username     |
| DOCKER_PASS | Docker Hub Access Token |
| EC2_HOST    | EC2 Public IP           |
| EC2_KEY     | EC2 Private Key (.pem)  |

---

# ⚙️ GitHub Actions Workflow

The CI/CD pipeline performs the following steps:

1. Checkout repository
2. Login to Docker Hub
3. Build Docker image
4. Push image to Docker Hub
5. Connect to EC2 using SSH
6. Pull latest Docker image
7. Remove existing container
8. Start updated container

---

# 🚀 Deployment

Every push to the `main` branch automatically deploys the latest version of the application to the EC2 instance.

No manual deployment is required.

---

# 📸 Screenshots

Add screenshots for:

* Application Home Page
* Docker Hub Repository
* GitHub Actions Success
* AWS EC2 Instance
* Docker Containers (`docker ps`)
* Running Application on EC2

---

# 📚 Learning Outcomes

This project demonstrates practical experience with:

* Docker containerization
* Continuous Integration (CI)
* Continuous Deployment (CD)
* GitHub Actions automation
* Docker Hub image management
* AWS EC2 deployment
* SSH-based remote deployment
* Linux server administration

---

# 🔮 Future Improvements

* Use Docker Compose
* Configure Nginx as a reverse proxy
* Enable HTTPS with Let's Encrypt
* Store secrets using AWS Systems Manager Parameter Store or AWS Secrets Manager
* Deploy using Amazon ECS with AWS Fargate
* Add automated testing before deployment
* Integrate CloudWatch logging and monitoring

---

# 👩‍💻 Author

**Vaishnavi Pawar**

* AWS Certified Developer – Associate
* GitHub: https://github.com/vaishnavipawar1196
* LinkedIn: https://www.linkedin.com/in/vaishnavi-pawar-315804169/

---

# ⭐ If you found this project helpful, consider giving it a star!
