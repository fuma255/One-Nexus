import defaults from './assets/config.js';
import layout from './assets/layout.jss';

/**
 * 
 */
const Container = props => (
    <Module {...props} />
);

export default Object.assign(Container, { 
    layout, defaults, defaultProps: {
        name: 'Container',
        object: true
    }
});