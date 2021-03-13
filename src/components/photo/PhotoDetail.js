import React from "react";
import { connect } from "react-redux";
import { getPhotoDetail } from "../../store/actions/photoActions";
import { Row, Col } from "antd";

export class UnconnectedPhotoDetail extends React.Component {
  handleViewPhotoAlbumClick = () => {
    this.props.history.push(`/user-albums/${this.props.photo.albumId}`);
  };

  componentDidMount() {
    this.props.getPhotoDetail(this.props.match.params.id);
    console.log(this.props);
  }

  render() {
    return this.props.photo ? (
      <div
        data-test="component-photo-detail"
        style={
          this.props.photo
            ? {
                background: "#ECECEC",
                padding: "30px",
                height: "100%",
                width: "100%",
                position: "absolute",
              }
            : { padding: "30px" }
        }
      >
        <h1 style={{ marginBottom: 25 }}>Photo Detail</h1>
        <button onClick={this.handleViewPhotoAlbumClick}>Link to Album</button>
        <Row type="flex" justify="center">
          <Col
            span={12}
            style={{
              textAlign: "center",
            }}
          >
            <img
              alt={this.props.photo.title}
              data-test="photo"
              src={this.props.photo.url}
              style={{ maxWidth: "60%", marginBottom: 20 }}
            />
            <h3 data-test="photo-title">{this.props.photo.title}</h3>
          </Col>
        </Row>
      </div>
    ) : (
      <div></div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    photo: state.photo.photoDetail,
  };
};

export default connect(mapStateToProps, { getPhotoDetail })(
  UnconnectedPhotoDetail
);
