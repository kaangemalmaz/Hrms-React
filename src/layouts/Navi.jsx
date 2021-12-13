import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Menu, Container } from 'semantic-ui-react';

export default function Navi() {
    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item as={NavLink} to="/" name="Home" />
                    <Menu.Item as={NavLink} to="/candidates" name="Candidates" />
                    <Menu.Item as={NavLink} to="/cities" name="Cities" />
                    <Menu.Item as={NavLink} to="/employers" name="Employers" />
                    <Menu.Item as={NavLink} to="/jobpostings" name="JobPostings" />
                    <Menu.Item as={NavLink} to="/jobs" name="Jobs" />
                    <Menu.Item as={NavLink} to="/typeofwork" name="TypeOfWork" />
                    <Menu.Item as={NavLink} to="/typeofworktime" name="TypeOfWorkTime" />
                    
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