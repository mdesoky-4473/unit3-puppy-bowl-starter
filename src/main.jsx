// Import the React and ReactDOM libraries
// React is for defining components and ReactDOM is for rendering them in the DOM


// Import the main App component


// Import the CSS file


// Import the Redux store
// The store is where you keep the app's state


// Import the Provider component from react-redux
// Provider makes the Redux store available to any nested components that need to access it


// Call ReactDOM.render to render our App component in the DOM
// Wrap the App in a Provider to give it access to the Redux store
// Also, wrap it in React.StrictMode, which is a wrapper component that checks for potential problems in the app during development
ReactDOM.render(
  <React.StrictMode>
    
  </React.StrictMode>,
  // Target the 'root' div in your HTML as the place to inject your React app
  document.getElementById('root')
);
