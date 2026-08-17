import React from 'react'

import Card from './components/Card'

const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://logo.clearbit.com/google.com",
      company: "Google",
      datePosted: "5 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$150/hour",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      company: "Microsoft",
      datePosted: "10 weeks ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$120/hour",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      company: "Amazon",
      datePosted: "2 days ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$130/hour",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      company: "Apple",
      datePosted: "3 weeks ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$140/hour",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      company: "Netflix",
      datePosted: "1 week ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$160/hour",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      company: "Meta",
      datePosted: "6 days ago",
      post: "Full Stack Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$135/hour",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/airbnb.com",
      company: "Airbnb",
      datePosted: "2 weeks ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$125/hour",
      location: "Gurgaon, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/tesla.com",
      company: "Tesla",
      datePosted: "1 month ago",
      post: "Embedded Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$155/hour",
      location: "Pune, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/nvidia.com",
      company: "NVIDIA",
      datePosted: "4 days ago",
      post: "AI/ML Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$145/hour",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/salesforce.com",
      company: "Salesforce",
      datePosted: "3 weeks ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$115/hour",
      location: "Hyderabad, India"
    }
  ];
 return (
  <div className="parent">
    {jobOpenings.map((el, idx) => {
      return (
        <div key={idx}>
          <Card brandLogo={el.brandLogo} company={el.company} datePosted={el.datePosted} post={el.post} pay={el.pay} tag1={el.tag1} tag2={el.tag2} location={el.location}/>
        </div>
      );
    })}
  </div>
);}

export default App
