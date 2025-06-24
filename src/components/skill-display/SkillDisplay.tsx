import { useEffect, useState } from 'react'
import styles from './SkillDisplay.module.css'
import { Skill } from '../../utils/types'
import { getSkills } from '../../utils/api'
import SkillCard from '../skill-card/SkillCard'

export default function SkillDisplay() {

    const [skills, setSkills] = useState([] as Skill[])

    async function loadSkills() {
        var skillApiData = await getSkills()
        skillApiData = filterValidSkills(skillApiData);
        setSkills(skillApiData)
    }

    function isValidSkill(item: any): item is Skill {
        return (
          item &&
          typeof item.id === 'number' &&
          typeof item.name === 'string' &&
          typeof item.category === 'string' &&
          typeof item.iconDark === 'string' &&
          typeof item.iconLight === 'string'
        );
      }
      
      function filterValidSkills(data: any[]): Skill[] {
        return data.filter((item, index) => {
          if (!isValidSkill(item)) {
            console.log(`Invalid Skill at index ${index}:`, item);
            return false;
          }
          return true;
        });
      }

    useEffect(() => {
        loadSkills()
    }, [])

    function createProductCards() {
        return skills.map(skill => {
            return (
                <SkillCard 
                    key={skill.id}
                    id={skill.id}
                    name={skill.name}
                    iconDark={skill.iconDark}
                    iconLight={skill.iconLight}
                />
            )
        })
    }


    return (
        <div>
            {/* <p className={styles['skills-title']}>Skills</p> */}
            <div className={styles['skills-display']}>
                <p className={styles['simple-title']}>Skills</p>
                <div className={styles['skills-list']}>
                    { createProductCards() }
                </div>
            </div>
        </div>
    )
}