import React from 'react'
import { MenuWrapper } from './styles/MenuWrapper'
import Text from '../../../foundation/Text'

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
                        <Text tag='a' variant="smallestException" href={link.url}>{link.description}</Text>
                    </li>
                ))}
            </MenuWrapper.Center>
            <MenuWrapper.Bottom>Teste</MenuWrapper.Bottom>
        </MenuWrapper>
    )
}

export default Menu
