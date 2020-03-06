import computerIcon from '../assets/computer.svg'
import htmlIcon from '../assets/html.svg'
import html5Icon from '../assets/html5.svg'
import webCompIcon from '../assets/webComp.svg'
import cssIcon from '../assets/css.svg'
import css3Icon from '../assets/css3.svg'
import BEMIcon from '../assets/bem.svg'
import styledIcon from '../assets/styledcomponent.svg'
import bootIcon from '../assets/bootstrap.svg'
import lessIcon from '../assets/less.svg'

import jsicon from '../assets/js.svg'
import tsicon from '../assets/ts.svg'
import reactIcon from '../assets/react.svg'
import nexticon from '../assets/next.svg'
import electronIcon from '../assets/electron.svg'

import nodeicon from '../assets/node.svg'
import npmicon from '../assets/npm.svg'
import GraphQLicon from '../assets/GraphQL.svg'
import webpackicon from '../assets/webpack.svg'
import jesticon from '../assets/jest.svg'
import gatsbyicon from '../assets/gatsby.svg'

import gitIcon from '../assets/git.svg'
import githubIcon from '../assets/github.svg'
import netIcon from '../assets/internet.svg'
import SecurityIcon from '../assets/security.svg'

export default [
  {
    id: 'Computer Science',
    title: 'Computer Science',
    tooltip: { content: 'Basic of computer science' },
    icon: computerIcon,
    children: [
      {
        id: 'HTML',
        title: 'HTML',
        tooltip: { content: 'HTML basics, Forms and Validations, Conventions and Best Practices' },
        children: [
          {
            id: 'HTML advanced',
            title: 'HTML advanced',
            tooltip: { content: 'Writing Semantic HTML, Accessibility, SEO Basics' },
            icon: html5Icon,
            children: [
              {
                id: 'Web Components',
                title: 'Web Components',
                tooltip: { content: 'Shadow DOM, Custom Elements, HTML Templates' },
                icon: webCompIcon,
                children: []
              }
            ]
          }
        ],
        icon: htmlIcon
      },
      {
        id: 'CSS',
        title: 'CSS',
        tooltip: { content: 'Learn the basics, Making Layouts, Responsive design and Media Queries' },
        icon: cssIcon,
        children: [
          {
            id: 'CSS3',
            title: 'CSS3',
            tooltip: { content: 'Transform, Transition, Animation, @font-face, Flex, Grid, Pseudo-selector' },
            icon: css3Icon,
            children: [
              {
                id: 'CSS Architecture',
                title: 'CSS Architecture',
                tooltip: { content: 'BEM, OOCSS, SMACSS' },
                icon: BEMIcon,
                children: []
              }, {
                id: 'CSS Preprocessor',
                title: 'CSS Preprocessor',
                tooltip: { content: 'Sass, PostCSS, Less' },
                icon: lessIcon,
                children: [
                  {
                    id: 'CSS Frameworks',
                    title: 'CSS Frameworks',
                    tooltip: { content: 'Reactstrap, Material UI, Tailwind CSS, Chakra UI, Bootstrap, Materialize CSS, Bulma' },
                    icon: bootIcon,
                    children: []
                  },
                  {
                    id: 'Modern CSS',
                    title: 'Modern CSS',
                    tooltip: { content: 'Styled Component, CSS Modules, Styled JSX, Emotion, Radium, Glamorous' },
                    icon: styledIcon,
                    children: []
                  }
                ]
              }]
          }

        ]
      },
      {
        id: 'JavaScript',
        title: 'JavaScript',
        icon: jsicon,
        tooltip: { content: 'Syntax and Basic Construct, Learn DOM Manipulation, Learn Fetch API / Ajax (XHR), ES6+ and modular JavaScript' },
        children: [
          {
            id: 'Framework',
            title: 'Framework',
            icon: reactIcon,
            tooltip: { content: 'React.js, Angular, Vue.js' },
            children: [{
              id: 'SSR',
              title: 'SSR',
              icon: nexticon,
              tooltip: { content: 'Next.js, Universal, Nuxt.js' },
              children: []
            }]
          },
          {
            id: 'Type Checkers',
            title: 'Type Checkers',
            icon: tsicon,
            tooltip: { content: 'TypeScript, Flow' },
            children: []
          }
        ]
      },
      {
        id: 'Node Basic',
        title: 'Node Basic',
        tooltip: { content: 'Know the basics' },
        icon: nodeicon,
        children: [
          {
            id: 'Package Managers',
            title: 'Package Managers',
            tooltip: { content: 'NPM, Yarn' },
            icon: npmicon,
            children: [
              {
                id: 'GraphQL',
                title: 'GraphQL',
                icon: GraphQLicon,
                tooltip: { content: 'Apollo, Relay Modern' },
                children: []
              },
              {
                id: 'Module Bundlers',
                title: 'Module Bundlers',
                icon: webpackicon,
                tooltip: { content: 'Webpack, Rollup, Parcel' },
                children: [
                  {
                    id: 'Test Your Apps',
                    title: 'Test Your Apps',
                    tooltip: { content: 'Mocha, Chai, Ava, Jest' },
                    icon: jesticon,
                    children: []
                  },
                  {
                    id: 'Applications',
                    title: 'Applications',
                    tooltip: { content: 'React Native, Flutter, Ionic, Electron' },
                    icon: electronIcon,
                    children: []
                  }
                ]
              }
            ]
          },
          {
            id: 'Static Site Generators',
            title: 'Static Site Generators',
            tooltip: { content: 'GatsbyJS, Vuepress, Jekyll, Hugo' },
            icon: gatsbyicon,
            children: []
          }
        ]
      },
      {
        id: 'Version Control System',
        title: 'Version Control System',
        tooltip: { content: 'Git, SVN' },
        icon: gitIcon,
        children: [
          {
            id: 'Repo Hosting Services',
            title: 'Repo Hosting Services',
            tooltip: { content: 'GitHub, Gitlab, Bitbucket' },
            icon: githubIcon,
            children: []
          }
        ]
      },
      {
        id: 'Internet',
        title: 'Internet',
        tooltip: { content: 'DNS, HTTP, Browsers, Domain' },
        icon: netIcon,
        children: [
          {
            id: 'Web Security',
            title: 'Web Security',
            tooltip: { content: 'HTTPS, CORS, Attacks' },
            icon: SecurityIcon,
            children: []
          }
        ]
      }
    ]
  }

]

/*

{
  id: 'Forms',
  title: 'Forms',
  optional: true,
  tooltip: { content: 'Forms and Validations' },
  children: []
},

*/
