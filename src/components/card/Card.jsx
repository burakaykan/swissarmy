import React, { Component } from "react";
import { Card as AntCard, Row, Col, Icon } from "antd";
import Avatar, { ConfigProvider } from "react-avatar";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";

const ratingChanged = (newRating) => {
  console.log(newRating)
}

export default class Card extends Component {
  render() {
    return (
      <ConfigProvider
        colors={["#484349", "#510000"]} // , "#510000", "#960D0D", "#EAEAEA"
      >
        <Col
          span={12}
          style={{ textAlign: "center" }}
          xs={22}
          sm={20}
          md={6}
          lg={6}
          xl={6}
        >
          <AntCard
            hoverable={true}
            style={{ width: 250, borderRadius: 25 }}
            actions={[
              <Rater total={1} rating={1} interactive={1} onChange={ratingChanged}/>,
              <Icon type="github" />
            ]}
            cover={
              // <img
              //   alt={this.props.cardInfo.alt ? this.props.cardInfo.alt : "altMessage"}
              //   src={
              //     this.props.cardInfo.img
              //       ? this.props.cardInfo.img
              //       : "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              //   }
              // />
              <Avatar
                size="250"
                name={
                  this.props.cardInfo.title
                    ? this.props.cardInfo.title
                    : "Europe Street beat"
                }
                round="25px"
                onClick={() => window.open(this.props.cardInfo.url, '_blank')}
              />
            }
            key={this.props.cardInfo.id}
          >
            <AntCard.Meta
              title={
                this.props.cardInfo.title
                  ? this.props.cardInfo.title
                  : "Europe Street beat"
              }
              description={
                this.props.cardInfo.desc
                  ? this.props.cardInfo.desc
                  : "www.instagram.com"
              }
            />
          </AntCard>
        </Col>
      </ConfigProvider>
    );
  }
}
