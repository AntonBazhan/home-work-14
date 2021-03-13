import React from "react";
import { Row, Col } from "antd";
import { connect } from "react-redux";
import AlbumCard from "./AlbumCard";
import { getUserAlbums, getUserData } from "../../store/actions/albumActions";

export class UnconnectedAlbumList extends React.Component {
  componentDidMount() {
    this.props.getUserAlbums(this.props.match.params.id);
    this.props.getUserData(this.props.match.params.id);
  }
  render() {
    console.log("album list", this.props);
    return (
      <div
        data-test="component-album-list"
        style={
          this.props.albumList
            ? { background: "#ECECEC", padding: "30px" }
            : { padding: "30px" }
        }
      >
        <h1 style={{ padding: 20 }}>Album List</h1>
        <div style={{ textAlign: "center" }}>
          <h3>{this.props.user && this.props.user.user.name}</h3>
          <p>{this.props.user && this.props.user.user.email}</p>
        </div>

        <Row type="flex" gutter={16}>
          {this.props.albumList &&
            this.props.albumList.map((album) => (
              <Col span={8} key={album.id} style={{ padding: 10 }}>
                <AlbumCard
                  data-test="album-card"
                  album={album}
                  user={this.props.user}
                />
              </Col>
            ))}
        </Row>
        <button
          onClick={() => this.props.getUserAlbums(this.props.match.params.id)}
          style={{ display: "block", margin: "auto" }}
        >
          Load more
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    albumList: state.album.albumList,
    user: state.user.userData,
  };
};

export default connect(mapStateToProps, { getUserAlbums, getUserData })(
  UnconnectedAlbumList
);
