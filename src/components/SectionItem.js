const SectionItem = ({ sectionItem }) => {
    return (
        <div className="subPart">
            <div className="subPartTitle">
                <h4 className="subPartTitleFirst">{sectionItem.sectionItemTitle}</h4>
                <h4>|</h4>
                <h4>{sectionItem.sectionItemRole}</h4>
                <h4>|</h4>
                <h4>{sectionItem.sectionItemYears}</h4>
            </div>
            <div>{sectionItem.sectionText}</div>
        </div>
    )
}

export default SectionItem
