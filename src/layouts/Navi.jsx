import React from "react";
import { Button, Container, Menu, Input } from "semantic-ui-react";

function Navi() {
  return (
    <div>
      <Menu size="large" inverted color='black'>
        <Menu.Item name="İNSAN KAYNAKLARI YÖNETİM SİSTEMİ" />
        <Container>
          <Menu.Menu position="right">
            <Menu.Item>
              <Button inverted>Sign Up</Button>
              <Button inverted>Sign In</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
      
      <Menu >
        <Menu.Item>
          <Input className="icon" icon="search" placeholder="Pozisyon ara" />
        
        <Menu.Item position="left">
          <Input
            className="icon"
            icon="search"
            action={{ type: "submit" }}
            placeholder="Şehir ara"
          />
          <Button primary>İş ara</Button>
        </Menu.Item>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Navi;
