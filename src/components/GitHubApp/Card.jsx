import React from "react";

import testData from "../../mocks/GitHubMock";

const CardList = (props) => {

    return (
        <>
        {testData.map(profileProp => <Card {...profileProp}/>)};
        </>
    )
}

class Card extends React.Component {

        render() {
            const profile = this.props;

          return (
            <div className="github-profile" style={{color: Math.random() < 0.5 ? 'green' : 'red' }}>
                <img  src={profile.avatar_url}
                    alt="Default missing" 
                />
                <div className="info">
                    <div className="name">{profile.name}</div>
                    <div className="company">{profile.company}</div>
                </div>
            </div>
        );
      }
    }

export default CardList;