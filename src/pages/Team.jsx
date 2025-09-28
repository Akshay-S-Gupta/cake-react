import React from 'react';
import { teamMembers } from '../services/database';
import Newsletter from '../components/Newsletter';

const Team = () => {
  return (
    <div>
      {/* Banner Section */}
      <section className="banner-section">
        <div className="container">
          <div className="banner-content text-center">
            <h1 className="banner-title">Our Team</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <a href="/" className="text-white text-decoration-none">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Team
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            {teamMembers.map((member) => (
              <div key={member.id} className="col-lg-4 col-md-6 mb-4">
                <div className="card team-card border-0 shadow-sm h-100">
                  <img 
                    src={member.image} 
                    className="card-img-top team-image" 
                    alt={member.name}
                  />
                  <div className="card-body text-center">
                    <h5 className="team-name">{member.name}</h5>
                    <p className="team-position">{member.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default Team;
