import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const sectionList = [
    { 
       id: 1,
       sectionTitle: "EXPERIENCE",
       sectionIcon: ['fab', 'microsoft'],
       isSectionItem: true,
       isSkill: false,
       sectionItems: [
           {
               sectionItemTitle: "ASP.NET 5",
               sectionItemRole: "TEAM LEADER",
               sectionItemYears: "2020-2021",
               sectionText: "Explain the job that you have done and the results that you have got!"
           },
           {
               sectionItemTitle: "ASP.NET 3.0",
               sectionItemRole: "TEAM LEADER",
               sectionItemYears: "2019-2020",
               sectionText: "Explain the job that you have done and the results that you have got!"
           },
           {
               sectionItemTitle: "ASP.NET 2.0",
               sectionItemRole: "TEAM LEADER",
               sectionItemYears: "2018-2019",
               sectionText: "Explain the job that you have done and the results that you have got!"
           }
       ]
    },
    {
        id: 2,
        sectionTitle: "FORMATION",
        sectionIcon: ['fas', 'book-open'],
        isSectionItem: true,
        isSkill: false,
        sectionItems: [
           {
               sectionItemTitle: "DEGREE",
               sectionItemRole: "UNIVERSITY",
               sectionItemYears: "2016-2017",
               sectionText: "Explain the formation 's specificities: your degree, options, ..."
           },
           {
               sectionItemTitle: "DEGREE",
               sectionItemRole: "UNIVERSITY",
               sectionItemYears: "2016-2017",
               sectionText: "Explain the formation 's specificities: your degree, options, ..."
           },
           {
               sectionItemTitle: "DEGREE",
               sectionItemRole: "UNIVERSITY",
               sectionItemYears: "2016-2017",
               sectionText: "Explain the formation 's specificities: your degree, options, ..."
           }
       ]
    },
    {
        id: 3,
        sectionTitle: "HOBBIES",
        sectionIcon: ['fas', 'crown'],
        isSectionItem: false,
        isSkill: false,
        sectionText: "Explain the formation 's specificities: your degree, options, ..."
    },
    {
        id: 4,
        sectionTitle: "PROFILE",
        sectionIcon: ['fas', 'user-tie'],
        isSectionItem: false,
        isSkill: false,
        sectionText: "Explain in few lines your professional training, your capabilities and your carrer 's' objectives."
    },
    {
        id: 5,
        sectionTitle: "SKILL",
        sectionIcon: ['fas', 'cog'],
        isSectionItem: false,
        isSkill: true,
        skills: [
           {
               skillTitle: "Web",
               skillStars: 8
           },
           {
               skillTitle: "UI/UX Design",
               skillStars: 8
           },
           {
               skillTitle: "ASP.NET CORE",
               skillStars: 8
           },
           {
               skillTitle: "MS SQL",
               skillStars: 8
           },
           {
               skillTitle: "Github",
               skillStars: 8
           }
       ]
    },
    {
        id: 6,
        sectionTitle: "PERSONALITY",
        sectionIcon: ['fas', 'user-plus'],
        isSectionItem: false,
        isSkill: true,
        skills: [
           {
               skillTitle: "Reactive",
               skillStars: 8
           },
           {
               skillTitle: "Ambitious",
               skillStars: 8
           },
           {
               skillTitle: "Creative",
               skillStars: 8
           },
           {
               skillTitle: "Reliable",
               skillStars: 8
           }
       ]
    },
    {
        id: 7,
        sectionTitle: "LANGUAGES",
        sectionIcon: ['fas', 'globe'],
        isSectionItem: false,
        isSkill: true,
        skills: [
           {
               skillTitle: "Hebrew",
               skillStars: 8
           },
           {
               skillTitle: "English",
               skillStars: 8
           },
           {
               skillTitle: "French",
               skillStars: 8
           }
       ]
    }
]

const App = () => {
    return (
        <>
            <Header title='Microsoft Corporation' subTitle='Herzliya, Israel'/> 
            <Main sections={sectionList}/>
            <Footer />
        </>
    )
}

export default App
