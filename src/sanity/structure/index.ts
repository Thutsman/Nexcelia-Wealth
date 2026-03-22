import type { StructureBuilder } from 'sanity/structure'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Nexcelia CMS')
    .items([
      S.listItem()
        .title('Site Settings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.divider(),
      S.listItem()
        .title('Editorial')
        .child(
          S.list()
            .title('Editorial')
            .items([
              S.documentTypeListItem('post').title('Articles / Insights'),
              S.documentTypeListItem('author').title('Authors'),
              S.documentTypeListItem('category').title('Categories'),
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Company')
        .child(
          S.list()
            .title('Company')
            .items([S.documentTypeListItem('principal').title('Principals')])
        ),
    ])
