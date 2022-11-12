const express = require('express');

const app = express();
const courses = ['Curso 1', 'Curso 2', 'Curso 3'];

app.use(express.json());

app.get('/', (request, response) => {
  return response.json({
    message: 'Hello World Ignite!',
  });
});

app.get('/courses', (request, response) => {
  return response.json(courses);
});

app.post('/courses', (request, response) => {
  courses.push(request.body.name);
  return response.json(courses);
});

app.put('/courses/:id', (request, response) => {
  courses[request.params.id - 1] = request.body.name;
  return response.json(courses);
});

app.patch('/courses/:id', (request, response) => {
  courses[request.params.id - 1] = request.body.name;
  return response.json(courses);
});

app.delete('/courses/:id', (request, response) => {
  courses.splice(request.params.id - 1, 1);
  return response.json(courses);
});

app.listen(3333);
