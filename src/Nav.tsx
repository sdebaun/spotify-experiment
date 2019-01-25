import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Icon } from 'semantic-ui-react'

export const Nav: React.SFC<{className?: string}> = ({className}) =>
  <div {...{className}}>
    <Menu inverted fluid widths={2} icon='labeled'>
      <Menu.Item as={NavLink} to='/' exact>
        <Icon name='star'/>
        Your Top
      </Menu.Item>
      <Menu.Item as={NavLink} to='/like/3QgSmABpItIdj908ek80n5'>
        <Icon name='search'/>
        Like Morphine
      </Menu.Item>
    </Menu>
  </div>
