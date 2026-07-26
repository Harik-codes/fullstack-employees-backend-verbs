import db from "#db/client";
import { createEmployee } from "./queries/employees.js";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  await createEmployee({ name: "john", birthday: "2008-07-09", salary: 40000 });
  await createEmployee({ name: "leo", birthday: "2008-07-09", salary: 40000 });
  await createEmployee({
    name: "balingrad",
    birthday: "2008-07-09",
    salary: 40000,
  });
  await createEmployee({
    name: "cheto",
    birthday: "2008-07-09",
    salary: 40000,
  });
  await createEmployee({
    name: "meila",
    birthday: "2008-07-09",
    salary: 40000,
  });
  await createEmployee({
    name: "mikasa",
    birthday: "2008-07-09",
    salary: 40000,
  });
  await createEmployee({ name: "los", birthday: "2008-07-09", salary: 40000 });
  await createEmployee({
    name: "canvas",
    birthday: "2008-07-09",
    salary: 40000,
  });
  await createEmployee({
    name: "youla",
    birthday: "2008-07-09",
    salary: 40000,
  });
  await createEmployee({
    name: "dansel",
    birthday: "2008-07-09",
    salary: 40000,
  });
}
