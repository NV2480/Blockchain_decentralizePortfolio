import {useState,useEffect} from "react";
import './Experience.css'
import { SlCalender } from "react-icons/sl"


const Experience = ({state}) => {
    const [education,setEducation]=useState("");
    const [experience,setexperience]=useState("");

    useEffect(()=>{
        const {contract}=state;
        const educationDetails=async()=>{
            const education = await contract.methods.allEductationDetails().call();
            console.log(education);
            setEducation(education);
        }
        contract && educationDetails();
    },[state])

    useEffect(()=>{
        const {contract}=state;
        const experienceDetails=async()=>{
            const experience = await contract.methods.allExperienceDetails().call();
            console.log(experience);
            // Check if experience is an array and has at least one entry
            if (Array.isArray(experience) && experience.length > 0) {
                setexperience([experience[0]]); 
             }
            // setexperience(experience);
        }
        contract && experienceDetails();

    },[state])

    return (
        <section className="exp-section">
            <h1 className="title">Experience & Education </h1>

            <div className="container">

                <div className="education">
                    <h1 className="edu-title">Education</h1>
                    {education!=="" && education.map((edu)=>{
                        return (   
                        <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> {edu.date}
                        </p>
                        <h3 className="card-text2">{edu.degree}</h3>
                        <p className="card-text3">{edu.knowledgeAcquired}</p>
                        <p className="card-text4">
                        {edu.instutionName}
                        </p>
                    </div>)
                    })}
                 
                   
                </div>
                {/* experience */}
            <div className="container">
                <div className="experience">
                    <h1 className="edu-title">Experience</h1>
                    {experience!=="" && experience.map((exp)=>{
                        return (   
                        <div className="exp-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> {exp.date}
                        </p>
                        <h3 className="card-text2">{exp.post}</h3>
                        <p className="card-text3">{exp.knowledgeAcquired}</p>
                        <p className="card-text4">
                        {exp.compamyName}
                        </p>
                        </div>)
                    })}

                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Experience
