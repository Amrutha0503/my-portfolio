import React from 'react'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import {SchoolOutlined} from '@mui/icons-material'
import { WorkOutline } from '@mui/icons-material'

export function Experience() {
  return (
    <div className='experience'>
        <VerticalTimeline lineColor='#21325e'>
          <VerticalTimelineElement className='vertical-timeline-element--education' date='2015-2017'
          iconStyle={{background:'#21325e' , color:'white'}} icon={<SchoolOutlined/>}>

            <h2> Sahithi Junior College from Giddalur , Prakasam District</h2>
            <p>College Intemediate course</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolOutlined />}
        >
          <h3 className="vertical-timeline-element-title">
            Krishna Chaitanya Institute of Technology and scineces -Markapuram
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkOutline />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer at Capgemini
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Hyderabad-Telangana
          </h4>
          <p>Worked on Mulesoft Integaration platform , Mentored few people. Later Moved to project where I got work on front-end , ReactJs , Javascript , HTML , CSS.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkOutline />}
        >
          <h3 className="vertical-timeline-element-title">
            Senior Software Engineer at Capgemini
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Hyderabad-Telangana
          </h4>
          <p>Implemented responsive web design principles , ensuring a consistent and user friendly experience across different screen sizes.</p>
        </VerticalTimelineElement>
        </VerticalTimeline>
      
    </div>
  )
}

