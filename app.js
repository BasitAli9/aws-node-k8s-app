const express = require("express");
const os = require("os");

const app = express();

let visitors = 0;

app.get("/", (req, res) => {

    visitors++;

    res.send(`
<!DOCTYPE html>
<html>

<head>

    <title>AWS Kubernetes App</title>

    <style>

        *{
            margin:0;
            padding:0;
            box-sizing:border-box;
        }

        body{
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg,#0f172a,#1e293b,#334155);
            height:100vh;
            display:flex;
            justify-content:center;
            align-items:center;
            color:white;
        }

        .container{
            width:750px;
            padding:40px;
            border-radius:25px;
            background: rgba(255,255,255,0.08);
            box-shadow:0 0 40px rgba(0,0,0,0.5);
            backdrop-filter: blur(10px);
        }

        h1{
            text-align:center;
            font-size:42px;
            margin-bottom:30px;
            color:#38bdf8;
        }

        .card{
            background: rgba(255,255,255,0.07);
            padding:20px;
            border-radius:15px;
            margin-top:20px;
            transition:0.3s;
        }

        .card:hover{
            transform:scale(1.02);
            background: rgba(255,255,255,0.12);
        }

        .label{
            color:#94a3b8;
            font-size:14px;
            margin-bottom:8px;
        }

        .value{
            font-size:24px;
            word-wrap:break-word;
        }

        .footer{
            text-align:center;
            margin-top:30px;
            color:#cbd5e1;
            font-size:15px;
        }

    </style>

</head>

<body>

    <div class="container">

        <h1>Node.js App Running on Kubernetes</h1>

        <div class="card">
            <div class="label">Student ID</div>
            <div class="value">54596</div>
        </div>

        <div class="card">
            <div class="label">Developed By</div>
            <div class="value">Basit Ali</div>
        </div>

        <div class="card">
            <div class="label">Timestamp</div>
            <div class="value">${new Date()}</div>
        </div>

        <div class="card">
            <div class="label">Container ID</div>
            <div class="value">${os.hostname()}</div>
        </div>

        <div class="card">
            <div class="label">Visitor Count</div>
            <div class="value">${visitors}</div>
        </div>

        <div class="footer">
            Hosted on AWS EC2 + Docker + Kubernetes
        </div>

    </div>

</body>

</html>
    `);

});

app.get("/health", (req, res) => {

    res.send("Healthy");

});

app.listen(3000, () => {

    console.log("Server running on port 3000");

});