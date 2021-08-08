import React from 'react'
import { MenuWrapper } from './styles/MenuWrapper'

function Menu() {
    const links = [
        {
            url: '/',
            description: 'Home',
        },
        {
            url: '/projects',
            description: 'Projects',
        },
        {
            url: '/contact',
            description: 'Contact',
        },
    ]
    return (
        <MenuWrapper>
            <MenuWrapper.Top>Logo</MenuWrapper.Top>
            <MenuWrapper.Center>
                {links.map(link => (
                    <li key={link.url}>
                        <a href={link.url}>{link.description}</a>
                    </li>
                ))}
            </MenuWrapper.Center>
            <MenuWrapper.Bottom>Teste</MenuWrapper.Bottom>
        </MenuWrapper>
    )
}

export default Menu
