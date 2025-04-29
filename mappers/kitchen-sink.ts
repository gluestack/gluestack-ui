export default {
    component: function(component:string) {
        console.log(`Component: ${component}`);
    },
    nonComponent: function(path:string) {
        console.log(`Non-component: ${path}`);
    }
};