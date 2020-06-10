import React from 'react'
import '../assets/styles/main.css'
import axios from 'axios'
import { ReactComponent as Instagram } from '../assets/img/instagram.svg'
import { ReactComponent as Linkedin } from '../assets/img/linkedin.svg'
class Team extends React.Component {
    state = {
        team: []
    };

    componentDidMount() {
        const domain = "http://127.0.0.1:8000/";
        axios.get(`${domain}api/staffs/`)
            .then(res => {
                const team = res.data;
                this.setState({team});
            })
    }

    render() {
        let team_members = this.state.team.map( function (person, index) {
            // if (member.instagram_account)
            let member = (
                        <div key={index} className="team__members_member">
                            <figure className="team__members_member_image_overlay">
                                <img src={person.picture} alt="" className="team__members_member_image"/>
                                <figcaption className="icons">
                                    <a className="socialIcon" href={"http://" + person.instagram_account}><Instagram width="20px" /></a>
                                    <a className="socialIcon" href={"http://" + person.linkedin_account}><Linkedin width="20px" /></a>
                                </figcaption>
                            </figure>
                            <ul className="team__members_member_name">{person.first_name}<div>&nbsp;</div>{person.last_name}</ul>
                            <p className="team__members_member_position">{person.role}</p>
                        </div>
            );
            return member;
        });

        return (
            <section className="team" id="team">
                <div className="container">
                    <h2 className="team__title">Our Team</h2>
                    <span className="underline_red"></span>
                    <span className="underline_black"></span>
                    <div className="team__members">
                        {team_members}
                    </div>
                </div>
            </section>
        )
    }
}

export default Team;