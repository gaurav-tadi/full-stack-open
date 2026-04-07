const express = require("express");
const app = express();
const morgan = require("morgan");
const Person = require("./models/Persons");

app.use(morgan("tiny"));
app.use(express.json());

app.get("/api/persons", (req, res) => {
  Person.find({}).then((persons) => res.json(persons));
});

app.post("/api/persons", (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({ error: "content missing" });
  }

  const person = new Person({
    name: body.name,
    number: body.number,
  });

  person.save().then((savedPerson) => {
    res.json(savedPerson);
  });
});

app.get("/api/persons/:id", (req, res) => {
  Person.findById(req.params.id).then((person) => {
    res.json(person);
  });
});

app.delete("/api/persons/:id", (req, res) => {
  Person.findandDeleteById(req.params.id).then((person) => {
    res.json(person);
    res.status(204).end();
  });
});

app.get("/info", async (req, res) => {
  let currentTime = new Date();
  const total = await Person.find().length();
  res.send(`
        <p>Phonebook has info for ${total} people</p>
        <p>${currentTime}</p>
        `);
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
