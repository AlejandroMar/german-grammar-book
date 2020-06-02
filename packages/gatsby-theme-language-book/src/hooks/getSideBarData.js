import { graphql, useStaticQuery } from 'gatsby';

export default () => {
  const sideBarData = useStaticQuery(graphql`
    query MyQuery {
      allMenuLink {
        edges {
          node {
            name
            path
            items {
              name
              path
              items {
                name
                path
                items {
                  name
                  path
                }
              }
            }
          }
        }
      }
    }
  `);
  return sideBarData;
};
