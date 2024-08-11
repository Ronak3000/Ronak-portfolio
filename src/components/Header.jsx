import React from 'react'
import { useNavigate } from 'react-router-dom'
import Container from "./Container.jsx"

function Header() {
    const navigate = useNavigate()

    const navItems = [
        {
            name:'Home',
            slug:'/',
        },
        {
            name: "Contact",
            slug: "/contact",
        },
        {
            name:"About",
            slug: "/about",
        },
        {
            name: "Projects",
            slug: "/projects",
        },
        {
            name:"Feedback",
            slug: "/feedback"
        }
    ]
    return (
        
        <header className='py-3 shadow bg-[#0d2438] '>
            <Container>
            
                <nav className='flex'> 
                    
                    <ul className='flex ml-auto'>
                        {navItems.map((item)=>(
                            <li key = {item.name}>
                                <button
                                onClick={() => navigate(item.slug)}
                                className='text-white inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                                >{item.name}
                                </button>
                            </li>
                        )

                        )}
                    </ul>
                </nav>
                
            </Container>
        </header>
        
    )
}

export default Header
