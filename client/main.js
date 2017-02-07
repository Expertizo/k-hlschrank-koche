import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import AuthLayout from '../imports/ui/Layout.jsx';

Meteor.startup(() => {
  render(<AuthLayout />, document.getElementById('render-target'));
});