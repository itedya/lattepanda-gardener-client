// using ES6 modules
import mitt from 'mitt'

const bus = mitt();

const useEventBus = () => bus;

export default useEventBus;
