import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { BiLike } from 'react-icons/bi';

import './JobCard.scss';

const Jobcard = ({ job, handleSuperLike, handlelike }) => {
  return (
    <section className="jobcard">
      <div className="jobcard__main">
        <img className="jobcard__avatar" src={job.companyLogo} alt="company logo" />
        <h2 className="jobcard__company">{job.companyName}</h2>
        <div className="jobcard__head">
          <p className="jobcard__text jobcard__text--position">{job.title}</p>
          <p className="jobcard__text jobcard__text--location">{job.location}</p>
        </div>
        <p className="jobcard__text jobcard__text--seniority">
          {job.level}, &nbsp;
          {job.type}
        </p>
        <div className="jobcard__skills">
          {job.techs.map((item, index) => (
            <p className="jobcard__text jobcard__text--skill" key={index}>
              {item}, &nbsp;
            </p>
          ))}
        </div>
        <p className="jobcard__text jobcard__text--description">{job.description}</p>
        <h4 className="jobcard__deadline">
          <b>Deadline: &nbsp;</b>
          {job.deadline}
        </h4>
      </div>
      <div className="jobcard__icons">
        <FaHeart onClick={handleSuperLike} className="jobcard__icon " />
        <BiLike onClick={handlelike} className="jobcard__icon " />
      </div>
    </section>
  );
};

export default Jobcard;
