dojoConfig = {
    baseUrl: "externals/",
    packages: [
        { name: 'dojo', location: 'dojo' },
        { name: 'dijit', location: 'dijit' },
        { name: 'dgrid', location: 'dgrid' },
        { name: 'dstore', location: 'dstore' }
    ],
    has: {
        highcontrast: 0,
        'host-node': 1,
        'dom': 0
    },
    async: true
};