import React from "react";
import { Button, Dropdown, Menu } from "semantic-ui-react";

export default function SignOut({ signIn }) {
  return (
    <div>
      <Menu.Item>
               <Button  onClick={signIn} primary>Giriş yap</Button>
               <Button primary style={{marginLeft:'0.5em'}}>Kayıt Ol</Button> 
            </Menu.Item>
    </div>
  );
}
