const recipe = {
    name: "Caprese Salad",
    ingredients: [
      "Tomatoes",
      "Fresh mozzarella cheese",
      "Fresh basil leaves",
      "Extra virgin olive oil",
      "Balsamic vinegar",
      "Salt and pepper to taste",
    ],
    steps: [
      "Slice the tomatoes and fresh mozzarella cheese into thin rounds.",
      "Arrange the tomato and mozzarella slices on a serving platter, alternating them and slightly overlapping.",
      "Tuck fresh basil leaves between the tomato and mozzarella slices.",
      "Drizzle extra virgin olive oil over the salad.",
      "Drizzle balsamic vinegar over the salad.",
      "Sprinkle salt and pepper to taste.",
      "Serve immediately and enjoy!",
    ],
    allergyWarnings: ["Contains dairy"],
  };
  
  console.log(recipe);

  // 1 Create an object that contains a first name and a last name.
const fullName = {
    first: "John",
    last: "Doe"
  };
  
  // 2 Create an object that contains an array
  const userCollection = {
    userList: [
      {
        firstName: "Jurimo",
        lastName: "Datatag",
        email: "jD@gmail.com",
        phone: "905-905-9055"
      },
      {
        firstName: "Bingle",
        lastName: "Dorf",
        email: "bingD@gmail.com",
        phone: "995-558-4101"
      },
      {
        firstName: "Sarsha",
        lastName: "Warsha",
        email: "sarshwarsh@gmail.com",
        phone: "787-747-5754"
      }
    ]
  };
  
  // 3 Use this object to console.log the first name, email, and phone number.
  const user = userCollection.userList[0];
  console.log("User Info:");
  console.log("First Name:", user.firstName);
  console.log("Email:", user.email);
  console.log("Phone:", user.phone);
  
  // 4 Do the same for each person in this array
  console.log("\nUser Info for All Users:");
  userCollection.userList.forEach(user => {
    console.log("First Name:", user.firstName);
    console.log("Email:", user.email);
    console.log("Phone:", user.phone);
    console.log("-----------------------");
  });
  