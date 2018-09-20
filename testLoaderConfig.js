const globalObj = typeof window !== 'undefined' ? window : global;
globalObj.dojoConfig = {
    baseUrl: "output/test/externals",
    packages: [
        { name: 'dojo', location: 'dojo' },
        { name: 'dijit', location: 'dijit' },
        { name: 'dgrid', location: 'dgrid' },
        { name: 'dstore', location: 'dstore' }
    ],
    has: {
        highcontrast: 0
    },
    async: true
};
