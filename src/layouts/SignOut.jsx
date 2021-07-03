import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Dropdown, Menu } from "semantic-ui-react";

export default function SignOut({ signIn }) {
  return (
    <div>
      <Menu.Item>
                <Button style={{ backgroundColor: "purple", color: "white", marginBottom: "0.001em" }}>
                    <Dropdown pointing="top right" text="Kayıt Ol">
                        <Dropdown.Menu >
                            <Dropdown.Item as={NavLink} to="/employerSignUp" text="İş Veren" icon="angle double right" />
                            <Dropdown.Item as={NavLink} to="/candidateSignUp" text="İş Arayan" icon="angle double right" />
                        </Dropdown.Menu>
                    </Dropdown>
                </Button>
                <Button onClick={signIn} style={{ backgroundColor: "purple", color: "white", marginLeft: "0.5em", marginBottom: "0.001em" }} >Giriş Yap</Button>
            </Menu.Item>
    </div>
  );
}
