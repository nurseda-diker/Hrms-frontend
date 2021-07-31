import React,{useState} from 'react'
import {Input, Menu,Container } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'

export default function Navi() {
    const [isAuthenticated,setIsAuthenticated]=useState(true)
    function handleSignedOut(params){
        setIsAuthenticated(false)
    }
    function handleSignedIn(params){
        setIsAuthenticated(true)
    }

    return (
        <div>
            {/* fixed */}
            <Menu inverted fixed="top"> 
                <Container>

                        <Menu.Item position="right">
                            <Input icon='search' placeholder="Search"></Input>
                        </Menu.Item>

                        <Menu.Menu position="right">
                            {isAuthenticated ? <SignedIn signOut={handleSignedOut} /> :<SignedOut signIn={handleSignedIn} />}
                        </Menu.Menu>
             /*
                </Container>

            </Menu>
        </div>
    )
}
