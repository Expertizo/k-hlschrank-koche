import React, { Component } from 'react';
import { Drawer, AppBar, RaisedButton, List, ListItem, IconButton, FontIcon, TextField, Divider } from 'material-ui';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import FruitList from '../lists/FruitList.jsx'


export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            showSearch: false
        };
    }

    handleToggle (){
        this.setState({open: !this.state.open});
    }

    toggleSearch () {
        this.setState({showSearch: !this.state.showSearch})
    }

    render () {
        return (
                <div>
                    <AppBar
                        title="Kuhlschrank-Kochen"
                        onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
                        onRightIconButtonTouchTap={this.toggleSearch.bind(this)}
                        iconElementRight={<IconButton><FontIcon className="material-icons" >search</FontIcon></IconButton>}
                        />
                    <Drawer docked={false} width={200} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
                        <List>
                            <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
                            <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
                            <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
                            <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
                            <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
                        </List>
                    </Drawer>
                    {this.state.showSearch && <TextField hintText="Search"/>}
                    <Divider/>
                    <FruitList/>
                </div>

        );
    }
}