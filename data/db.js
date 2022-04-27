export const db = {
  students: [
    {
      id: 1,
      name: "Fatma Laribi",
      age: 22,
      gender: "FEMALE",
      classroom: 1,
    },
    {
      id: 2,
      name: "Ahmed Mahfoudhi",
      age: 22,
      gender: "MALE",
      classroom: 2,
    },
    {
      id: 3,
      name: "Nadine Boukadida",
      age: 22,
      gender: "FEMALE",
      classroom: 3,
    },
    {
      id: 4,
      name: "Mohamed Aziz Khayati",
      age: 22,
      gender: "MALE",
      classroom: 1,
    },
  ],
  classroom: [
    {
      id: 1,
      designation: "GL3",
    },
    {
      id: 2,
      designation: "GL2",
    },
    {
      id: 3,
      designation: "GL4",
    },
  ],
  todos: [
    {
      id: 1,
      name: "TP GraphQl",
      content: "do tasks before wednesday",
      status: "wait",
      user: 2,
    },
    {
      id: 2,
      name: "web",
      content: "seance graphQl",
      status: "in_progress",
      user: 1,
    },
    {
      id: 3,
      name: "cours graphQl",
      content: "cours mercredi",
      status: "done",
      user: 3,
    },
    {
      id: 4,
      name: "examen",
      content: "the next week",
      status: "canceled",
      user: 2,
    },
    {
      id: 5,
      name: "working on PPP",
      content: "sprint will be finished in 2 days",
      status: "in_progress",
      user: 4,
    },
  ],
  users: [
    {
      id: 1,
      name: "med",
      email: "med@gmail.com",
    },
    {
      id: 2,
      name: "bouarada",
      email: "bouaradamed@gmail.com",
    },
    {
      id: 3,
      name: "graghQl",
      email: "graghQl.gl3@gmail.com",
    },
    {
      id: 4,
      name: "web",
      email: "web@gmail.com",
    },
  ],
};
