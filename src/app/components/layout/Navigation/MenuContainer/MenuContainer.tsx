import dynamic from 'next/dynamic'
import { FC } from 'react'

import Menu from './Menu'
import { menus } from './menu.data'
import GenreMenu from './genres/GenreMenu'


const MenuContainer: FC = () => {
	return (
		<div>
			<Menu menu={menus[0]} />
			<GenreMenu/>
			<Menu menu={{ title: 'General', items: [] }} />
		</div>
	)
}

export default MenuContainer
