import React from "react";
import { Dropdown, Image, Menu } from "semantic-ui-react";

export default function SignIn({ signOut }) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://pbs.twimg.com/profile_images/1404479261566713856/_MklDkhx_400x400.jpg"
        ></Image>
        <Dropdown pointing="top left" text="Zeynep">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
