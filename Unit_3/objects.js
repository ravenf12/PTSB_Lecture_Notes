// Object 

let marvelHero = {
    // property: key value pair 
    fullName: "Steve Rodgers",
    heroName: "Captain America",
    age: 113,
    active: true
}

/*
// ? Object Literals 

    When our values are written within our keys. "Hard Coded"
    * Structure:
        Keyword objectName = {
            key: value
        }

    Are dictionaries... not technically but they are in JS
*/

let theSimpsons = {
    id: 1,
    est: 1989,
    genre: "animated",
    seasons: {
      "season one": [
        {
          episode_title: "Simpson Roasting on an Open Fire",
          aired: "1989-12-17",
        },
        {
          episode_title: "Bart the Genius",
          aired: "1990-01-01",
        },
        ["1989-12-17", "1990-01-14"],
      ],
      "season two": [
        /* .... */
      ],
      "season three": [
        /* .... */
      ],
    },
    currently_running: true,
  };

//* Dot Notation & Square Brackets
console.log(theSimpsons.genre);
