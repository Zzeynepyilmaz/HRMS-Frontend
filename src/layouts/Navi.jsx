import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

function Navi() {
  return (
    <div>
      <Menu size="large" inverted>
        <Menu.Item name="İNSAN KAYNAKLARI YÖNETİM SİSTEMİ" />
        <Container>
          <Menu.Menu position="right">
            <Menu.Item>
              <Button primary>Sign Up</Button>
              <Button primary>Sign In</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}

export default Navi;



