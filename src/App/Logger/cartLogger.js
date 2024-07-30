const logger = (store) => (next) => (action) => {
    const result = next(action)
    console.log('Updated cart state:', store.getState().cart.value)
    return result
  }
  
export default logger