import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.style.scss";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectDirectorySection } from "../../redux/directory/directory.selector";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ title, imageUrl, id, size }) => (
      <MenuItem key={id} imageUrl={imageUrl} title={title} size={size} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection,
});

export default connect(mapStateToProps)(Directory);
