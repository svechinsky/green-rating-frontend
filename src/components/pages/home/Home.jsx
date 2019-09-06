import React from "react";
import {
  Box,
  Text,
  Layer,
  Button,
  TextInput,
  Heading,
  Tabs,
  Tab,
  RangeInput
} from "grommet";
import { Help, User, AddCircle, Checkmark, Send, Close } from "grommet-icons";
import Container from "../../common/Container";

import UserBar from "./UserBar";
import ActionBar from "./ActionBar";

const ShopLink = ({ shopId }) => {
  if (shopId.startsWith("TG")) {
    return (
      <Button
        reverse
        icon={<Send color="#497799" />}
        color="#497799"
        href={`https://web.telegram.org/#/im?p=@${shopId.substr(2)}`}
        label="Go to shop"
      />
    );
  }

  return <Text>{shopId}</Text>;
};

const ApprovedDealer = ({ dealer, idx, onClick }) => (
  <Box
    height="xsmall"
    direction="row"
    width="100%"
    pad="medium"
    justify="between"
    background={idx % 2 == 0 ? "white" : "whitesmoke"}
    onClick={onClick}
  >
    <Box>
      <Text>
        <b>Name:</b> {dealer.name}
      </Text>
      <Text>
        <b>Location:</b> {dealer.location}
      </Text>
    </Box>
    <Box align="center" direction="row" gap="small">
      <ShopLink shopId={dealer.shopId} />
      <Button label="Blacklist dealer" icon={<Close />} reverse />
    </Box>
  </Box>
);

const Dealer = ({ dealer, idx, maxRank, onClick }) => (
  <Box
    height="xsmall"
    direction="row"
    width="100%"
    pad="medium"
    justify="between"
    background={idx % 2 == 0 ? "white" : "whitesmoke"}
    onClick={onClick} 
  >
    <Box direction="row">
      <Box>
        <Text>
          <b>Name:</b> {dealer.name}
        </Text>
        <Text>
          <b>Location:</b> {dealer.location}
        </Text>
      </Box>
      <Box pad={{ horizontal: "small" }} justify="center">
        {dealer.rank <= maxRank ? (
          <Checkmark color="green" />
        ) : (
          <Close color="red" />
        )}
      </Box>
    </Box>
    <Box justify="center">
      <ShopLink shopId={dealer.shopId} />
    </Box>
  </Box>
);

const Friend = ({ friend, idx }) => (
  <Box
    height="xsmall"
    direction="row"
    width="100%"
    pad="medium"
    justify="between"
    background={idx % 2 == 0 ? "white" : "whitesmoke"}
  >
    <Box justify="center">
      <Heading level={2}>{friend.name}</Heading>
    </Box>
    <Box justify="center">
      <Button icon={<Close />} />
    </Box>
  </Box>
);

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    maxRank: 3,
    showDealer: null
  };

  render() {
    const { user, entities, changeBaseUrl, baseUrl, signEntity, addEntity } = this.props;
    const { maxRank, showDealer } = this.state;

    // return <h1>No entities</h1>;

    const approvedDealers = entities.filter(
      ent => ent.rank <= maxRank && ent.rank > 1
    );
    const allDealers = entities.filter(ent => ent.rank > 1);

    const friends = entities.filter(ent => ent.rank == 1);
    return (
      <>
        <Container>
          <Box
            elevation="small"
            direction="column"
            pad={{ vertical: "small" }}
            margin={{ top: "large" }}
            background="white"
          >
            <Box pad={{ horizontal: "small" }}>
              <UserBar
                user={user}
                baseUrl={baseUrl}
                changeBaseUrl={changeBaseUrl}
              />
            </Box>
            <Box pad={{ horizontal: "small" }}>
              <ActionBar signEntity={signEntity} addEntity={addEntity}/>
            </Box>
            <Box pad={{ horizontal: "small" }}>
              <Box
                gap="small"
                border="bottom"
                pad={{ vertical: "small" }}
                direction="row"
                align="center"
              >
                <Text>Secure</Text>
                <RangeInput
                  max="5"
                  value={maxRank}
                  onChange={event =>
                    this.setState({ maxRank: event.target.value })
                  }
                />
                <Text>Trusting</Text>
              </Box>
            </Box>
            <Box width="100%" pad={{ vertical: "small" }} align="start">
              <Tabs justify="start" alignSelf="start" width="100%">
                <Tab title="Approved dealers" ak>
                  <Box width="100%" pad={{ bottom: "medium" }}>
                    {approvedDealers.map((dealer, idx) => (
                      <ApprovedDealer
                        onClick={() => this.setState({ showDealer: dealer })}
                        key={dealer.pubkey}
                        dealer={dealer}
                        idx={idx}
                      />
                    ))}
                  </Box>
                </Tab>
                <Tab title="All dealers" ak>
                  <Box width="100%" pad={{ bottom: "medium" }}>
                    {allDealers.map((dealer, idx) => (
                      <Dealer
                        onClick={() => this.setState({ showDealer: dealer })}
                        key={dealer.pubkey}
                        dealer={dealer}
                        maxRank={maxRank}
                        idx={idx}
                      />
                    ))}
                  </Box>
                </Tab>
                <Tab title="Friends">
                  <Box width="100%" pad={{ bottom: "medium" }}>
                    {friends.map((friend, idx) => (
                      <Friend key={friend.pubkey} friend={friend} idx={idx} />
                    ))}
                  </Box>
                </Tab>
              </Tabs>
            </Box>
          </Box>
        </Container>
        {showDealer ? (
          <Layer onClickOutside={() => this.setState({ showDealer: null })}>
            <Box
              wrap
              width="medium"
              pad="medium"
              style={{
                wordWrap: "break-line",
                overflowWrap: "break-word",
                wordBreak: "break-all"
              }}
            >
              <Text>
                <b>Name</b> {showDealer.name}
              </Text>
              <Text>
                <b>Location</b> {showDealer.location}
              </Text>
              <Text
                style={{
                  wordWrap: "break-line",
                  overflowWrap: "break-word",
                  wordBreak: "break-all"
                }}
              >
                <b>Pubkey</b> {showDealer.pubkey}
              </Text>
              <Text>
                <b>Rank</b> {showDealer.rank}
              </Text>
            </Box>
          </Layer>
        ) : null}
      </>
    );
  }
}

export default Home;
