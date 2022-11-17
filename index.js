const express = require('express');
const app = express();

const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());

const courses = require('./data/course.json');
const coursesDetails = require('./data/courseDetails.json');
const testimonial = require('./data/testimonial.json');

app.get('/',(req,res)=>{
    res.send('hello world from assignment 10');
})


app.get('/courses',(req,res)=>{
    res.send(courses);
})
app.get('/testimonials',(req,res)=>{
    res.send(testimonial);
})

app.get('/courses-details/:id',(req,res)=>{
    const id = req.params.id;
    const selectedNews = coursesDetails.find((n) => n.id === id);
    res.send(selectedNews);
})

app.listen(port,()=>{
    console.log(`example is running on port ${port}`);
})