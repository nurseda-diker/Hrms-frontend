import React from 'react'
import { Button,Input, Menu,Container } from 'semantic-ui-react'

export default function Navi() {
    return (
        <div>
            {/* fixed */}
            <Menu inverted fixed="top"> 
                <Container>
                    <Menu.Item>
                        <Button primary>Sign Up</Button>
                        </Menu.Item>
                        <Menu.Item>
                        <Button primary>Log-in</Button>
                        </Menu.Item>

                        <Menu.Item position="right">
                            <Input icon='search' placeholder="Search"></Input>
                        </Menu.Item>
             
                </Container>

            </Menu>
        </div>
    )
}
