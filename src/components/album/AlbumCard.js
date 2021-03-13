import React from "react";
import { Card, Tooltip } from "antd";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

export class NonHocAlbumCard extends React.Component {
  render() {
    console.log(this.props);
    return (
      <Card
        data-test="component-album-card"
        style={{ width: 300 }}
        actions={[<Tooltip placement="top" title="View photos"></Tooltip>]}
      >
        <h4 data-test="album-title">{this.props.album.title}</h4>

        <img
          alt="foto"
          src={this.props.album.url}
          style={{ maxWidth: "100%", marginBottom: 20 }}
        />
      </Card>
    );
  }
}

NonHocAlbumCard.propTypes = {
  album: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(NonHocAlbumCard);
