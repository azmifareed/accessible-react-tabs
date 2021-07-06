import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme'
import { Tabs, Tab } from './components/Tabs';
import { GlobalStyle, AppContainer } from './App.styled';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <AppContainer>
        <Tabs ariaLabel="Awesome Tabs" paramName="awesome-tab">
          <Tab
            id="tincidunt"
            label="Tincidunt"
            isSelected={false}
          >
            <h3>Donec vitae</h3>
            <p>Ut tincidunt tincidunt erat. Fusce convallis metus id felis luctus adipiscing. 
            Vivamus quis mi. Nullam vel sem. Morbi ac felis.</p>
            <p>Maecenas vestibulum mollis diam.. Proin viverra, ligula sit amet ultrices semper, 
              ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Suspendisse potenti. 
              In dui magna, posuere eget, vestibulum et, tempor auctor, justo.</p>
          </Tab>
          <Tab
            id="sodales"
            label="Sodales"
            isSelected={false}
          >
            <h3>Donec sodales sagittis</h3>
            <p>Maecenas vestibulum mollis diam.. Proin viverra, ligula sit amet ultrices semper, 
              ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Suspendisse potenti. 
              In dui magna, posuere eget, vestibulum et, tempor auctor, justo.</p>
            <p>Ut tincidunt tincidunt erat. Fusce convallis metus id felis luctus adipiscing. 
            Vivamus quis mi. Nullam vel sem. Morbi ac felis.</p>
          </Tab>
        </Tabs>

        <hr/>
        
        <Tabs ariaLabel="Another Tabs" paramName="another-tab">
          <Tab
            id="sodales"
            label="Sodales"
            isSelected={false}
          >
            <h3>Donec sodales sagittis</h3>
            <p>Maecenas vestibulum mollis diam.. Proin viverra, ligula sit amet ultrices semper, 
              ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Suspendisse potenti. 
              In dui magna, posuere eget, vestibulum et, tempor auctor, justo.</p>
            <p>Ut tincidunt tincidunt erat. Fusce convallis metus id felis luctus adipiscing. 
            Vivamus quis mi. Nullam vel sem. Morbi ac felis.</p>
          </Tab>
          <Tab
            id="tincidunt"
            label="Tincidunt"
            isSelected={false}
          >
            <h3>Donec vitae</h3>
            <p>Ut tincidunt tincidunt erat. Fusce convallis metus id felis luctus adipiscing. 
            Vivamus quis mi. Nullam vel sem. Morbi ac felis.</p>
            <p>Maecenas vestibulum mollis diam.. Proin viverra, ligula sit amet ultrices semper, 
              ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Suspendisse potenti. 
              In dui magna, posuere eget, vestibulum et, tempor auctor, justo.</p>
          </Tab>
        </Tabs>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
