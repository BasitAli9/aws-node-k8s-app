# AWS Node.js Kubernetes Project

## Project Overview
This project demonstrates the deployment of a simple Node.js web application on AWS Free Tier using Docker, Amazon ECR, EC2, and Kubernetes (Minikube).

The application displays:
- Current Timestamp
- Container ID
- Visitor Counter

The project was completed as part of the Cloud Computing course.

---

# Technologies Used

- Node.js
- Express.js
- Docker
- Amazon ECR
- Amazon EC2 (t2.micro)
- Kubernetes
- Minikube
- GitHub
- AWS CLI

---

# Features

- Dockerized Node.js Application
- Kubernetes Deployment
- Publicly Accessible Application
- Health Check Endpoint
- Visitor Counter
- AWS Free Tier Compatible

---

# Project Structure

```bash
aws-node-k8s-app/
│
├── app.js
├── package.json
├── package-lock.json
├── Dockerfile
├── deployment.yaml
├── service.yaml
└── README.md
