import React from 'react'

import {
  SkillTreeGroup,
  SkillTree,
  SkillProvider
} from 'beautiful-skill-tree'

import data from './data.js'

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
