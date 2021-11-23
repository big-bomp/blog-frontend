// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  // siteDescription: '这里是描述信息',
  // plugins: [],
  // templates:{
  //   Post:[
  //     {
  //       path: '/posts/:id',
  //       component:'./src/templates/Post.vue'
  //     }
  //   ]
  // }
  plugins:[
    {
      use: '@gridsome/source-filesystem',
      options:{
        typeName: 'BlogPost',
        path: './content/blog/**/*.md'
      }
    },
    {
      use: '@gridsome/source-strapi',
      options: {
        // apiURL: 'process.enc.GRIDSOME_API_URL',
        apiURL: 'http://120.24.39.185:1337',
        // apiURL: 'http://localhost:1337',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['post','tag'],
        singleTypes: ['general'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: '',
        //   password: ''
        // }
      }
    }
  ],
  templates:{
    StrapiPost:[
      {
        path:'/post/:id',
        component: './src/templates/Post.vue'
      }
    ],
    StrapiTag:[
      {
        path: '/tag/:id',
        component: './src/templates/Tag.vue'
      }
    ]
      
    
  }

}
