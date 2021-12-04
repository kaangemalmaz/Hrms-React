import React from "react";
import { Button, Menu, Container } from 'semantic-ui-react';

export default function Navi() {
    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item name="home" />
                    <Menu.Item name="messages" />
                    <Menu.Item  to="/jobs" content="Jobs" />
                    <Menu.Item  to="/home" icon="circle notched" content="Home" />

                    <Menu.Menu position="right">
                        <Menu.Item>
                            <Button primary>Sign Up</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>

        </div>
    );
}