
export const mySections = () => {
  return Promise.resolve([
    { id: 1, title: "My First Section" },
    { id: 2, title: "My Second Section" },
  ]);
};


// tools.js
export const myTools = () => {
  return Promise.resolve([
    { id: 1, title: "My Super first tools", section_id: 1 },
    { id: 2, title: "My Super second tools", section_id: 2 },
    { id: 3, title: "My Super third tools", section_id: 1 },
    { id: 4, title: "My Super fourth tools", section_id: 2 },
    { id: 5, title: "My Super fifth tools", section_id: 1 },
    { id: 6, title: "My Super sixth tools", section_id: 2 },
    { id: 7, title: "My Super seventh tools", section_id: 1 },
    { id: 8, title: "My Super eighth tools", section_id: 2 },
  ]);
};

export const test = [
  [
    { id: 1, ocupado: false },
    { id: 2, ocupado: false },

  ],
  [
    { id: 3, ocupado: false },
    { id: 4, ocupado: false },
    { id: 5, ocupado: false },
    { id: 6, ocupado: false },
    { id: 7, ocupado: false },
    { id: 8, ocupado: false },
    { id: 9, ocupado: false },

  ],
  [
    { id: 10, ocupado: false },
    { id: 11, ocupado: false },

  ],

  [
    { id: 12, ocupado: false },
    { id: 13, ocupado: false },

  ],
  [
    { id: 14, ocupado: false },
    { id: 15, ocupado: false },
    { id: 16, ocupado: false },
    { id: 17, ocupado: false },
    { id: 18, ocupado: false },
    { id: 19, ocupado: false },
    { id: 20, ocupado: false },

  ],
  [
    { id: 21, ocupado: false },
    { id: 22, ocupado: false },

  ],


]


const rows = [
  [
    { id: 1, number: 1, isSelected: true, tooltip: "Reserved by you" },
    { id: 2, number: 2, tooltip: "Cost: 15$" },
    {
      id: 3,
      number: "3",
      isReserved: true,
      orientation: "east",
      tooltip: "Reserved by Rogger"
    },
    null
  ],
  [
    {
      id: 7,
      number: 1,
      isReserved: true,
      tooltip: "Reserved by Matthias Nadler"
    },
    { id: 8, number: 2, isReserved: true },
    { id: 9, number: "3", isReserved: true, orientation: "east" },
    null,
    { id: 10, number: "4", orientation: "west" },
    { id: 11, number: 5 },
    { id: 12, number: 6 }
  ],
  [
    { id: 13, number: 1 },
    { id: 14, number: 2 },
    { id: 15, number: 3, isReserved: true, orientation: "east" },
    null,
    { id: 16, number: "4", orientation: "west" },
    { id: 17, number: 5 },
    { id: 18, number: 6 }
  ],
  [
    { id: 19, number: 1, tooltip: "Cost: 25$" },
    { id: 20, number: 2 },
    { id: 21, number: 3, orientation: "east" },
    null,
    { id: 22, number: "4", orientation: "west" },
    { id: 23, number: 5 },
    { id: 24, number: 6 }
  ],
  [
    { id: 25, number: 1, isReserved: true },
    { id: 26, number: 2, orientation: "east" },
    { id: 27, number: "3", isReserved: true },
    null,
    { id: 28, number: "4", orientation: "west" },
    { id: 29, number: 5, tooltip: "Cost: 11$" },
    { id: 30, number: 6, isReserved: true }
  ]
];

export const RegisterSteps = [
  {

    elements: [
      'email',
      'password',
      'password_confirmation'
    ]
  },
  {
    elements: [

      'name',

      'address'
    ]
  },



];