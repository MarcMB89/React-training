import React from "react";

const CardList = (props) => {

    return (
        <>
        {props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
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