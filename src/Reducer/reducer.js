const initialState = {
  movies: [
    {
      img:
        "https://m.media-amazon.com/images/M/MV5BODQ0NDhjYWItYTMxZi00NTk2LWIzNDEtOWZiYWYxZjc2MTgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
      name: "Jumanji: Welcome to the Jungle ",
      year: "2017",
      star: 4,
      id: 1,
      description:
        "Four teenagers are sucked into a magical video game, and the only way they can escape is to work together to finish the game.",
    },
    {
      img:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
      name: "Avengers: Endgame",
      year: "2019",
      star: 5,
      id: 2,
      description:
        "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    },
    {
      img:
        "https://m.media-amazon.com/images/M/MV5BMWU0MGYwZWQtMzcwYS00NWVhLTlkZTAtYWVjOTYwZTBhZTBiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
      name: "Bad Boys for Life ",
      year: "2020",
      star: 3,
      id: 3,
      description:
        "Miami detectives Mike Lowrey and Marcus Burnett must face off against a mother-and-son pair of drug lords who wreak vengeful havoc on their city.",
    },
  ],
  keyword: "",
  rate: 1,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "ADD_MOVIE":
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };

    case "DELETE_MOVIE":
      return {
        ...state,
        movies: state.movies.filter((element) => element.id !== action.payload),
      };

    case "NAME_FILTER":
      return {
        ...state,
        keyword: action.payload,
      };

    case "RATING_FILTER":
      return {
        ...state,
        rate: action.payload,
      };

    case "EDIT_MOVIE":
      return {
        ...state,
        movies: state.movies.map((element) =>
          element.id === action.payload
            ? { ...element, isEditable: !element.isEditable }
            : element
        ),
      };

    case "UPDATE_MOVIE":
      return {
        ...state,
        movies: state.movies.map((element) =>
          element.id === action.payload.id
            ? {
                ...element,
                name: action.payload.name,
                img: action.payload.img,
                year: action.payload.year,
                star: action.payload.star,
                rate: action.payload.rate,
                description: action.payload.description,
              }
            : element
        ),
      };

    default:
      return state;
  }
}
