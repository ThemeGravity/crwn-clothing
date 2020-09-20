import React, {Component} from "react";
import { connect } from 'react-redux';
import MenuItem from '../../components/menu-item/MenuItem';
import { createStructuredSelector } from "reselect";
import {selectDirectorySections} from "../../redux/directory/directory.selector";
import './directory.styles.scss';

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({id, ...otherSectionsProps}) => <MenuItem key={id} {...otherSectionsProps} />)}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
