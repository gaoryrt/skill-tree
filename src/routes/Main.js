import React from 'react'
import htmlIcon from '../assets/html.svg'
import cssIcon from '../assets/css.svg'
import bootIcon from '../assets/bootstrap.svg'
import lessIcon from '../assets/less.svg'
import {
  SkillTreeGroup,
  SkillTree,
  SkillProvider
} from 'beautiful-skill-tree'

/*

{
  id: 'Forms',
  title: 'Forms',
  optional: true,
  tooltip: { content: 'Forms and Validations' },
  children: []
},

*/

const data = [
  {
    id: 'HTML',
    title: 'HTML',
    tooltip: { content: 'HTML basics, Forms and Validations, Conventions and Best Practices' },
    children: [
      {
        id: 'HTML advanced',
        title: 'HTML advanced',
        tooltip: { content: 'Writing Semantic HTML, Accessibility, SEO Basics' },
        icon: htmlIcon,
        children: [
          {
            id: 'Web Components',
            title: 'Web Components',
            tooltip: { content: 'Shadow DOM, Custom Elements, HTML Templates' },
            icon: htmlIcon,
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
        id: 'CSS Preprocessor',
        title: 'CSS Preprocessor',
        tooltip: { content: 'Sass, PostCSS, Less' },
        icon: lessIcon,
        children: [
          {
            id: 'CSS Architecture',
            title: 'CSS Architecture',
            tooltip: { content: 'BEM, OOCS, SMACSS' },
            icon: cssIcon,
            children: []
          },
          {
            id: 'Modern CSS',
            title: 'Modern CSS',
            tooltip: { content: 'Styled Component, CSS Modules, Styled JSX, Emotion, Radium, Glamorous' },
            icon: cssIcon,
            children: []
          }
        ]
      },
      {
        id: 'CSS Frameworks',
        title: 'CSS Frameworks',
        tooltip: { content: 'Reactstrap, Material UI, Tailwind CSS, Chakra UI, Bootstrap, Materialize CSS, Bulma' },
        icon: bootIcon,
        children: []
      }
    ]
  }
]

export default function Main() {
  return (
    <SkillProvider>
      <SkillTreeGroup theme={{}}>
        {
          ({ skillCount }) => (<SkillTree
            treeId="first-tree"
            title="Skill Tree"
            data={data}
            description="My first skill tree"
          />)
        }
      </SkillTreeGroup>
    </SkillProvider>
  )
}
