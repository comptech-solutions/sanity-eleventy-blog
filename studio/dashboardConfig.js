export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61dcbdba3f67632f45aaebef',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-5ogjsq17',
                  apiId: '7a3fc543-18dc-45f4-a5f4-1c765d4a7291'
                },
                {
                  buildHookId: '61dcbdba5f603e32d8a4c66b',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-1uz2id6c',
                  apiId: '95856e41-c0d0-40b3-bc4f-e6bf48b88c09'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/comptech-solutions/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-1uz2id6c.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
