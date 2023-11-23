import React from 'react';
import './style.css';
import { FaEnvelope, FaTwitter, FaLinkedin } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Angeth Herjok',
    image: '/images/angeth.jpg',
    social: {
      email: 'angeth.herjok@gmail.com',
      linkedin: 'angeth-herjok-linkedin',
      twitter: 'angeth_herjok_tw'
    }
  },
  {
    name: 'Eunice Mjera',
    image: '/images/eunice.jpg',
    social: {
      email: 'mjera.eunice@gmail.com',
      linkedin: 'eunice-mjera-linkedin',
      twitter: 'eunice_eunice_tw'
    }
  },
  {
    name: 'Maurine Jebet',
    image: '/images/maureen.jpg',
    social: {
      email: 'maurine.jebet@gmail.com',
      linkedin: 'maurine-jebet-linkedin',
      twitter: 'maurine_jebet_tw'
    }
  },
  {
    name: 'Ann Muyale',
    image: '/images/anne.jpg',
    social: {
      email: 'ann.muyale@gmail.com',
      linkedin: 'ann-muyale-linkedin',
      twitter: 'ann_muyale_tw'
    }
  },
  {
    name: 'Rabecca Chepkemboi',
    image: '/images/rabecca.jpg',
    social: {
      email: 'chepkemboi.rabecca@gmail.com',
      linkedin: 'rabecca-chepkemboi-linkedin',
      twitter: 'rabecca_chepkemboi_tw'
    }
  },
];

const OurTeam = () => {
  return (
    <div className="our-team-container" id='team'>
      <h2 className='team'>Meet Our Team</h2>
      <hr className="section-divider-line" />
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} />
            <h2 className='teamName'>{member.name}</h2>
            <div className="social-link">
              <a href={`mailto:${member.social.email}`}><FaEnvelope /></a>
              <a href={`https://twitter.com/${member.social.twitter}`}><FaTwitter /></a>
              <a href={`https://linkedin.com/in/${member.social.linkedin}`}><FaLinkedin /></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
}

export default OurTeam;