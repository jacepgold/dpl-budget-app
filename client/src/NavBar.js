import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class NavBar extends React.Component {
  state = { activeItem: 'Home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  rightNavs = () => {
    return(
      <Menu.Menu position='right'>
        <Menu.Item
          as={Link}
          to='/'
          name="Home"
          active={this.state.activeItem === 'Home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to='/budget'
          name='Budget'
          active={this.state.activeItem === 'Budget'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to='/about'
          name="About"
          active={this.state.activeItem === 'About'}
          onClick={this.handleItemClick}
        />
      </Menu.Menu>
    );
  }

  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            as={Link}
            to='/'
            name="Home"
            active={this.state.activeItem === 'Home'}
            onClick={this.handleItemClick}
          >
            LOGO HERE
          </Menu.Item>
          { this.rightNavs() }
        </Menu>
      </div>
    );
  }
}

export default NavBar;
