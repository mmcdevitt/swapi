## SWAPI Code Challenge

### Heroku

https://mcdevitt-swapi.herokuapp.com/

### Notes

For this challenge, the front-end was built using `React` and `Redux`. The app has 3 containers that are the main connections to the Redux store and are used to pass the state down as props to the main components. Many of the `UI` components are built with pre-made components I've built in the past and most are using `styled-components`. For example, the `Flex` component is a component I've made for other projects.

Since many of the components are using `styled-components`, you'll notice in the inspector, that these components have cryptic class names as a result of the module. I have also added descriptive class names to these components that are not css classes. Mainly, just to be able to identify them in the inspector.

There were 2 challenges that I faced while attempting this project:

1. **Fetch all movies after selecting a character.** Since, making a get request for the character responded with a list of movies in the form of `urls` I had to make another request with `axios` by using `axios.all`. This successfully resolved into a list of movie objects.
2. **HTTP Error handling for Obi-wan Kenobi.** Error handling was created by using a Higher Order Component that listens for errors in the `componentDidCatch` lifecycle hook. If an error was detected, the HOC would render a modal by using `react-modal`.

### Installation

- Fork and clone repo
- cd into directory
- `npm install`
- `npm run dev`

### Libraries Used

- Create-react-app
- Redux
- Axios
- Styled-Components
- React-modal (for error handling)
