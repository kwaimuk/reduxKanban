/* jshint esversion: 6 */
const cardsFromFakeDB = [
    {
      _id: 1,
      title: "Dance",
      priority: "low",
      status: "Queue",
      createdBy: "Tim",
      assignedTo: "Lim"
    },
    {
      _id: 2,
      title: "Sing",
      priority: "medium",
      status: "In Progress",
      createdBy: "Kim",
      assignedTo: "Sim"
    },
    {
      _id: 3,
      title: "Shout",
      priority: "high",
      status: "Done",
      createdBy: "Pim",
      assignedTo: "Zim"
    }
  ];

export const getCardsFromFakeXHR = () => new Promise((resolve, reject) => {
   resolve(cardsFromFakeDB);
});

export const addCardToFakeXHR = (card) => new Promise((resolve, reject) => {
  setTimeout(() => {
    card._id = Math.floor((Math.random() * 10 + 1));
    cardsFromFakeDB.push(card);
    resolve(cardsFromFakeDB);
  }, 500);
});