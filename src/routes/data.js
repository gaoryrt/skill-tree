import htmlIcon from '../assets/html.svg'
import html5Icon from '../assets/html5.svg'
import webCompIcon from '../assets/webComp.svg'
import cssIcon from '../assets/css.svg'
import css3Icon from '../assets/css3.svg'
import oocssIcon from '../assets/oocss.svg'
import styledIcon from '../assets/styled.svg'
import bootIcon from '../assets/bootstrap.svg'
import lessIcon from '../assets/less.svg'

import jsicon from '../assets/js.svg'
import tsicon from '../assets/ts.svg'
import reactIcon from '../assets/react.svg'
import nexticon from '../assets/next.svg'

export default [
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
        children: [{
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
        },
        {
          id: 'CSS Architecture',
          title: 'CSS Architecture',
          tooltip: { content: 'BEM, OOCS, SMACSS' },
          icon: oocssIcon,
          children: []
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
