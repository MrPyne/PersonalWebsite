import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Me from "../assets/avatar-me-croped.jpg"


class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src={Me}
                alt="avatar"
                className="avatar-img"
              />
            </div>

            <h2 style={{ paddingTop: '2em' }}>Matt Pyne</h2>
            <h4 style={{ color: 'grey' }}>Engineer</h4>
            <hr style={{ borderTop: '3px solid #0000ff', width: '80%' }} />
            <p>
              Builder of awesome things.
            </p>
            <hr style={{ borderTop: '3px solid #0000ff', width: '80%' }} />
            <h5>Address</h5>
            <p>3101 Louisbourg HWY, Sydney, NS</p>
            <h5>Phone</h5>
            <p>(902) 578-0616</p>
            <h5>Email</h5>
            <p>matt.pyne2@gmail.com</p>
            <h5>Web</h5>
            <p>mattpyne.com</p>
            <hr style={{ borderTop: '3px solid #0000ff', width: '80%' }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2010}
              endYear={2012}
              schoolName="Cape Breton Univeristy"
              schoolDescription="Diploma of Engineering"
            />

            <Education
              startYear={2012}
              endYear={2015}
              schoolName="DalHousie Univeristy"
              schoolDescription="Bachelor's of Engineering, Electrical and Computer"
            />
            <hr style={{ borderTop: '3px solid #0000ff' }} />

            <h2>Experience</h2>

            <Experience
              startYear={2011}
              endYear={2011}
              jobName="Student Research Assistant"
              jobDescription="Used finite element analysis software and comparing with known solutions to gauge
               vibrations and possible damage to underwater life by sonar. As well as constructed maple programs and 
               incorporated working maple programs into GUI to have an alternate method to compare results with the 
               finite element analysis software visually"
            />

            <Experience
              startYear={2012}
              endYear={2012}
              jobName="Student Corrector"
              jobDescription="Corrected assignments for first year physics,
              while under other time constraint and ensuring the assignments were returned in a timely
              manner. Identified which students were having difficulties with assignments and gave help to
              increase their subject knowledge."
            />

            <Experience
              startYear={2015}
              endYear={2015}
              jobName="Image Processing Engineer (EIT)"
              jobDescription="Created image processing algrothims in MatLab for analysis of blood."
            />

            <Experience
              startYear={2015}
              endYear={2016}
              jobName="Controls Engineer (EIT)"
              jobDescription="Designed circuits and software for the HVAC control system. Used DirectSoft DL06 PLC and created Java client/server for a user interface."
            />

            <Experience
              startYear={2016}
              endYear={2018}
              jobName="Software Engineer (EIT)"
              jobDescription="Developing freely available 3D CAD software, Protocase Designer, at Protocases. Protocase Designer is written in Java 
              and uses the JNI and Swig to access its C++ CAD kernal. I worked on adding the C++ CAD kernal and revamping the GUI."
            />

            <Experience
              startYear={2018}
              jobName="Software Engineer (EIT)"
              jobDescription="Developing in house CAM software. The software uses Protocase Designer's core technology to generate instructions to be used in manufacturing."
            />

            <Experience
              startYear={2019}
              jobName="Cofounder and CTO of Tracker Inventory Systems"
              jobDescription="Create easy to use inventory tracking systems. Our first product is hardware and software solution for tracking 
              laundry using RFID tags."
            />

            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Skills</h2>

            <Skills
              skill="java"
              progress={90}
            />
            <Skills
              skill="Programable Logic Controller"
              progress={70}
            />
            <Skills 
              skill="Image Processing"
              progress={60}
            />
            <Skills 
              skill="Machine Learning(tensorflow, dl4j)"
              progress={60}
            />
            <Skills
              skill="graphql"
              progress={60}
            />
            <Skills
              skill="kotlin"
              progress={60}
            />
            <Skills
              skill="swig"
              progress={60}
            />
            <Skills
              skill="javascript"
              progress={60}
            />
            <Skills
              skill="HTML/CSS"
              progress={50}
            />
            <Skills
              skill="React"
              progress={50}
            />
            <Skills 
              skill="C/C++"
              progress={40}
            />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
