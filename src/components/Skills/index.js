import React from 'react'
import styled from 'styled-components'
import { skills } from '../../data/constants'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  perspective: 1000px; /* Adds perspective for 3D */
  position: relative;
  z-index: 1;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1100px;
  gap: 12px;
  transform: rotateX(5deg); /* Slight rotation for 3D feel */
  @media (max-width: 960px) {
    transform: none; /* Removes transform for smaller screens */
  }
`

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3); /* Text shadow for 3D effect */
  @media (max-width: 768px) {
    font-size: 32px;
  }
`

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Subtle text shadow */
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`

// Card with shadow and gradient background for 3D
const Skill = styled.div`
  max-width: 500px;
  background: ${({ theme }) => `linear-gradient(145deg, ${theme.card}, #333)`};
  border-radius: 16px;
  padding: 18px 36px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 12px; /* Shadow for depth */
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: translateY(-6px); /* Lifts card on hover */
    box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 20px; /* Deepens shadow on hover */
  }
  @media (max-width: 768px) {
    max-width: 400px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
  }
`

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: Black;
  margin-bottom: 20px;
  text-align: center;
`

// Flex container with shadow and border for 3D
const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`

// Individual skill item with shadow and hover effect
const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: black;
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Shadow for depth */
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: translateZ(4px) scale(1.05); /* Slight scale and lift */
    box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 12px; /* Deeper shadow on hover */
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>Here are some of my skills that I have been developing over the past 1 years.</Desc>
        <SkillsContainer>
          {skills.map((skill) => (
            <Skill key={skill.title}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item) => (
                  <SkillItem key={item.name}>
                    <SkillImage src={item.image} alt={`${item.name} icon`} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills
