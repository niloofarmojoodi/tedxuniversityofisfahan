import React from 'react';
import '../assets/styles/main.css';
import axios from 'axios';
import { ReactComponent as Instagram } from '../assets/img/instagram.svg'
import { ReactComponent as Linkedin } from '../assets/img/linkedin.svg'

class Speakers extends React.Component {
    state = {
        speakers: []
    };

    componentDidMount() {
        const domain = "http://127.0.0.1:8000";
        axios.get(`${domain}/api/speakers/`)
            .then(res => {
                console.log(res); 
                const speakers = res.data;
                this.setState({ speakers });
            })
    }

    render() {
        let speakers = this.state.speakers.map( function (speaker, index) {
            let person = (
                        <div className="speakers__people_person">
                            <figure className="speakers__people_person_image_overlay">
                                <img src={speaker.picture} alt="" className="speakers__people_person_image"/>
                                <figcaption className="icons">
                                    <a className="socialIcon" href={"http://" + speaker.instagram_account}><Instagram width="20px" /></a>
                                    <a className="socialIcon" href={"http://" + speaker.linkedin_account}><Linkedin width="20px" /></a>
                                </figcaption>
                            </figure>
                            <h3 className="speakers__people_person_name">{speaker.first_name}<div>&nbsp;</div>{speaker.last_name}</h3>
                            <p className="speakers__people_person_topic">{speaker.topic}</p>
                        </div>
            );
            return person;
        });
        return (
            <section className="speakers" id="speakers">
                <div className="container">
                    <h2 className="speakers__title">Speakers</h2>
                    <span className="underline_red"></span>
                    <span className="underline_black"></span>
                    <div className="speakers__people">
                        {speakers}
                    </div>
                </div>
            </section>
        )
    }
}

export default Speakers;