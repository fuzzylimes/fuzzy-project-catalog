// Components
import Home from './routes/Home.svelte'
import NotFound from './routes/NotFound.svelte'

// Export the route definition object
export default {
    '/': Home,
    '*': NotFound
}