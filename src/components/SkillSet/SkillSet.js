import React, { useEffect, useRef, useState } from 'react'
import hobby from '../assets/hobby.jpg';
import framework from '../assets/framework.jpg';
import language from '../assets/language.jpg';
import { isInViewport } from '../../utils';
import "./SkillSet.scss";

function SkillSet(){

    const [titleInView, setTitleInView] = useState(false);
    const [cardInView, setCardInView] = useState(false);
    const titleRef = useRef(null);
    const cardRef = useRef(null);
  
    useEffect(() => {
      const cardItems = Array.from(cardRef.current.children);
      cardItems.forEach((item, index) => {
        item.style.animationDelay = `${(index + 1) * 0.1}s`
      });
  
      const handleScroll = () => {
        setTitleInView(isInViewport(titleRef.current));
        setCardInView(isInViewport(cardRef.current));
      };
  
      window.addEventListener('scroll', handleScroll);
      handleScroll();
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const cardData = [{
        title: "Hobbies",
        image: hobby,
        description: "One of my favorite pastimes is diving into scientific books, where I explore complex concepts and satisfy my intellectual curiosity. Gaming is another passion of mine, as it allows me to engage in interactive virtual worlds and challenge my problem-solving skills. I find great pleasure in watching a wide range of documentary videos, as they provide insightful and thought-provoking perspectives on diverse subjects. These hobbies fuel my desire to constantly learn and grow"
    }, {
        title: "Frameworks",
        image: framework,
        description: "ReactJS is one of my areas of expertise, enabling me to develop interactive and responsive user interfaces. Additionally, I have a strong command over Flask, a lightweight framework in Python, which allows me to build scalable and robust web applications. Currently, I am actively engaged in researching and exploring the vast possibilities of .NET, an open-source framework that offers powerful tools for building applications across different platforms."
    }, {
        title: "Languages",
        image: language,
        description: "I am fluent in Chinese, possess a strong command of English, and have moderate proficiency in Bahasa Malaysia. As for programming, I am skilled in Java, Python, PHP, and JavaScript, enabling me to develop a wide range of applications. Currently, I am engaged in researching the intricacies of C#, expanding my programming language repertoire to enhance my abilities further."
    }];

    return (
        <div className='Skill-container flex-center pad-side-2'>
            <h1 className={`title-text ${titleInView ? 'in-view' : ''}`} ref={titleRef}>Interest & Skills</h1>
            <div className={`cards flex-center ${cardInView ? 'in-view' : ''}`} ref={cardRef}>
                {cardData.map((data, index) => 
                    <div key={index} className="card flex-center">
                        <article className='flex-center'>
                        <div className="pic"><img src={data.image} alt={data.title}/></div>
                        <h2>{data.title}</h2>
                        <div className="desc">{data.description}</div>
                        </article>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SkillSet