export default {
    component: function(component:string, event = 'added') {
        // console.log(`Component: ${component} (${event})`);
    },
    nonComponent: function(path:string) {
        // console.log(`Non-component: ${path}`);
    }
};