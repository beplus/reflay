console.error = function consoleErrorThatThrows (message) {
  throw new Error(message)
}
