/**
 * Fleet — vehicle categories exactly as printed on the flyer.
 * TODO (confirm with client): exact models, seating capacity,
 * AC status, luggage capacity and real photos of each vehicle.
 */
export const fleet = [
  {
    id: "sedan",
    name: "Sedan",
    art: "sedan",
    text: "Comfortable choice for smaller groups and point-to-point journeys.",
    tags: [
      { icon: "user", label: "Small groups" },
      { icon: "check", label: "AC" },
    ],
    wa: "Hi, I'd like to book a Sedan. My trip: ",
  },
  {
    id: "suv",
    name: "SUV",
    art: "suv",
    text: "Extra space and road presence for family and outstation travel.",
    tags: [
      { icon: "users", label: "Families" },
      { icon: "check", label: "AC" },
    ],
    wa: "Hi, I'd like to book an SUV. My trip: ",
  },
  {
    id: "tempo",
    name: "Tempo Traveller",
    art: "tempo",
    text: "Seats the whole group together — popular for pilgrimages and hill trips.",
    tags: [
      { icon: "users", label: "Groups" },
      { icon: "bag", label: "Luggage space" },
    ],
    wa: "Hi, I'd like to book a Tempo Traveller. My trip: ",
  },
  {
    id: "urbania",
    name: "Urbania",
    art: "urbania",
    text: "Premium group travel option — extra comfort for long journeys.",
    tags: [
      { icon: "users", label: "Large groups" },
      { icon: "heart", label: "Premium" },
    ],
    wa: "Hi, I'd like to book an Urbania. My trip: ",
  },
];
