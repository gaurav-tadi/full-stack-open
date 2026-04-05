export default function Total({ courses }) {
  const exercises = courses.map((course) => course.exercises);
  const total = exercises.reduce((s, p) => {
    return s + p;
  }, 0);

  return <h3>Total Exercises: {total}</h3>;
}
