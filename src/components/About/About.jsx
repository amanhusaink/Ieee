import React from 'react'


function About() {
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
                    <div className="  rounded-lg flex flex-col md:flex-row items-center max-w-6xl w-full all">
                        <img src='./awh-1.png' alt="it" className="rounded-lg mb-6 md:mb-0 md:mr-6 w-full md:w-1/2 img-3" />
                        <div className="text-left w-full md:w-1/2 para">
                            <h1 className="text-2xl font-bold mb-4 sm-head">About SB AWHEC</h1>
                            <p className="mb-4 para-in">
                                Established In 2005, IEEE SB AWHEC Has Been A Pioneer In Promoting Technical Innovation And Professional Development Among Students At AWHEC. Our Student Branch Is Committed To Building A Dynamic Community Where Aspiring Engineers Can Hone Their Skills, Delve Into Advanced Technologies, And Contribute To The Global IEEE Network. Over The Years, We Have Become A Center Of Creativity And Collaboration, Offering Numerous Opportunities For Students To Participate In Technical Projects, Workshops, And Competitions.
                           
                                In 2024, We Reached A Significant Milestone By Earning A Spot On The Esteemed IEEE LINK Team, Reflecting The Dedication And Hard Work Of Our Members. As We Continue To Grow, We Remain Dedicated To Equipping Our Members With The Knowledge, Skills, And Connections Necessary To Excel In Their Careers And Positively Impact Society.
                            </p>
                        </div>
                    </div>
                </div>
  );
}

export default About;
