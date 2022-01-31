import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SectionItem from "./SectionItem"
import Skill from "./Skill"

const Section = ({ section }) => {
    return (
        <div className="part">
            <div className="partTitle icon">
                <div>
                    <FontAwesomeIcon icon={section.sectionIcon}/>
                </div>
                <h3>{section.sectionTitle}</h3>
            </div>
            {section.isSectionItem ?
                section.sectionItems.map((sectionItem, index) =>
                    <SectionItem key={index} sectionItem={sectionItem} />)
                : <div className="subPart">
                    {!section.isSkill ?
                        <div>{section.sectionText}</div>
                        : section.skills.map((skill, index) =>
                            <Skill key={index} skill={skill} />)
                    }
                </div>

            }
        </div>
    )
}

export default Section
