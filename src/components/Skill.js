import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const initSkillsList = (starSkill) => {
    let array = [];
    for (let i = 0; i < starSkill; i++) {
        array.push({ id: i, type: 'fas' });
    }
    for (let i = starSkill; i < 10; i++) {
        array.push({ id: i, type: 'far' });
    }
    return array;
}

const Skill = ({ skill }) => {
    const skillsList = initSkillsList(skill.skillStars);

    return (
        <div className="rating">
            <div>{skill.skillTitle}</div>
            <div className="stars">
                {skillsList.map(skillItem =>
                    <div key={skillItem.id}>
                        <FontAwesomeIcon icon={[skillItem.type, 'circle']} />
                    </div>)
                }
            </div>
        </div>
    )
}

export default Skill
