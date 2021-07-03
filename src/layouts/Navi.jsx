import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
import SignIn from "./SignIn";
import SignOut from "./SignOut";

function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const history = useHistory();

  function handleSignOut() {
    setIsAuthenticated(false);
    history.push("/");
  }

  function handleSignIn() {
    setIsAuthenticated(true);
  }

  return (
    <div>
      <Menu size="big" inverted color="black">
        <Menu.Item name="İNSAN KAYNAKLARI YÖNETİM SİSTEMİ" />
        <Container>
          <Menu.Menu position="right">
            {isAuthenticated ? (
              <SignIn signOut={handleSignOut} />
            ) : (
              <SignOut signIn={handleSignIn} />
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}

export default Navi;
