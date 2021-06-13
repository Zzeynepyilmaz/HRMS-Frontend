import React from "react";
import { Button, Container, Menu, Dropdown } from "semantic-ui-react";

function Navi() {
  return (
    <div>
      <Menu size="large" inverted>
        <Menu.Item name="İnsan Kaynakları Yönetim Sistemi" />
        <Container>
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

export default Navi;
