export const menuItems = [
    {
        title: 'Home',
        url: '/',
    },
    {
        title: 'Services',
        url: '/services',
        submenu: [
            {
                title: 'web design',
                url: 'web-design',
            },
            {
                title: 'web development',
                url: 'web-dev',
                submenu: [{
                    title: 'Frontend'
                },
                {
                    title: "backend",
                    submenu: [
                        {
                            title: 'nodejs'
                        },
                        {
                            title: 'PHP'
                        }
                    ]

                }

                ]
            },
            {
                title: 'SEO',
                url: 'seo',
            },
        ],
    },
    {
        title:'about me',
        submenu:[
            {
                title:'abc'
            },
            {
                title:'efg'
            }
        ]
    }
];