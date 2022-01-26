import Section from './Section'

const Main = ({sections}) => {
    return (
        <div className="mainCV">  
             {sections.map(section => 
                 <Section key={section.id} section={section}/>
             )}
             {/* <div className="part">
                    <div className="partTitle icon">
                        <div>
                            <i className="fab fa-microsoft"></i>
                        </div>
                        <h3>EXPERIENCE</h3>
                    </div>                  
                    <div className="subPart">
                        <div className="subPartTitle">
                            <h4 className="subPartTitleFirst">ASP.NET 5</h4>
                            <h4>|</h4>
                            <h4>TEAM LEADER</h4>
                            <h4>|</h4>
                            <h4>2020 - 2021</h4>
                        </div>
                        <div>Explain the job that you have done and 
                             the results that you have got!
                        </div>  
                    </div>  
                    <div className="subPart">
                        <div className="subPartTitle">
                            <h4 className="subPartTitleFirst">ASP.NET 3.0</h4>
                            <h4>|</h4>
                            <h4>TEAM LEADER</h4>
                            <h4>|</h4>
                            <h4>2019 - 2020</h4>
                        </div>
                        <div>Explain the job that you have done and 
                             the results that you have got!
                        </div>  
                    </div>
                    <div className="subPart">
                        <div className="subPartTitle">
                            <h4 className="subPartTitleFirst">ASP.NET 2.0</h4>
                            <h4>|</h4>
                            <h4>TEAM LEADER</h4>
                            <h4>|</h4>
                            <h4>2018 - 2019</h4>
                        </div>
                        <div>Explain the job that you have done and 
                             the results that you have got!
                        </div>  
                    </div>                                      
                </div>
                <div className="part">
                    <div className="partTitle icon">
                        <div>
                            <i className="fas fa-book-open"></i>
                        </div>
                        <h3>FORMATION</h3>
                    </div>  
                    <div className="subPart">
                        <div className="subPartTitle">
                            <h4 className="subPartTitleFirst">DEGREE</h4>
                            <h4>|</h4>
                            <h4>UNIVERSITY</h4>
                            <h4>|</h4>
                            <h4>2017 - 2018</h4>
                        </div>
                        <div>Explain the formation 's specificities: your 
                            degree, options, ...
                        </div>  
                    </div>  
                    <div className="subPart">
                        <div className="subPartTitle">
                            <h4 className="subPartTitleFirst">DEGREE</h4>
                            <h4>|</h4>
                            <h4>UNIVERSITY</h4>
                            <h4>|</h4>
                            <h4>2016 - 2017</h4>
                        </div>
                        <div>Explain the formation 's specificities: your 
                            degree, options, ...
                        </div>  
                    </div>
                    <div className="subPart">
                        <div className="subPartTitle">
                            <h4 className="subPartTitleFirst">DEGREE</h4>
                            <h4>|</h4>
                            <h4>UNIVERSITY</h4>
                            <h4>|</h4>
                            <h4>2016 - 2017</h4>
                        </div>
                        <div>Explain the formation 's specificities: your 
                            degree, options, ...
                        </div>  
                    </div>                                      
                </div>
                <div className="part">
                    <div className="partTitle icon">
                        <div>
                            <i className="fas fa-crown"></i>
                        </div>
                        <h3>HOBBIES</h3>
                    </div>  
                    <div className="subPart">
                        <div>Explain the formation 's specificities: your 
                            degree, options, ...
                        </div>  
                    </div>                                      
                </div>
                <div className="part">
                    <div className="partTitle icon">
                        <div>
                            <i className="fas fa-user-tie"></i>
                        </div>
                        <h3>PROFILE</h3>
                    </div>  
                    <div className="subPart">  
                        <div>Explain in few lines your professional training,
                             your capabilities and your carrer 's' objectives.
                        </div>  
                    </div>                                      
                </div>
                <div className="part">
                    <div className="partTitle icon">
                        <div>
                            <i className="fas fa-cog"></i>
                        </div>
                        <h3>SKILL</h3>
                    </div>  
                    <div className="subPart">  
                        <div className="rating">  
                            <div>Web</div>
                            <div className="stars">
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="far fa-circle"></i></div>
                                <div><i className="far fa-circle"></i></div>
                            </div>
                        </div>                  
                        <div className="rating">  
                            <div>UI/UX Design</div>
                            <div className="stars">
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="far fa-circle"></i></div>
                                <div><i className="far fa-circle"></i></div>
                            </div>
                        </div>      
                        <div className="rating">  
                            <div>ASP.NET CORE</div>
                            <div className="stars">
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="far fa-circle"></i></div>
                                <div><i className="far fa-circle"></i></div>
                            </div>
                        </div>
                        <div className="rating">  
                            <div>MS SQL</div>
                            <div className="stars">
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="far fa-circle"></i></div>
                                <div><i className="far fa-circle"></i></div>
                            </div>
                        </div>
                        <div className="rating">  
                            <div>Github</div>
                            <div className="stars">
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="far fa-circle"></i></div>
                                <div><i className="far fa-circle"></i></div>
                            </div>
                        </div>                        
                    </div>                                      
                </div>
                <div className="part">
                    <div className="partTitle icon">
                        <div>
                            <i className="fas fa-user-plus"></i>
                        </div>
                        <h3>PERSONALITY</h3>
                    </div>  
                    <div className="subPart">  
                        <div className="rating">  
                            <div>Reactive</div>
                            <div className="stars">
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="far fa-circle"></i></div>
                                <div><i className="far fa-circle"></i></div>
                            </div>
                        </div>                  
                        <div className="rating">  
                            <div>Ambitious</div>
                            <div className="stars">
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="far fa-circle"></i></div>
                                <div><i className="far fa-circle"></i></div>
                            </div>
                        </div>      
                        <div className="rating">  
                            <div>ASP.NET CORE</div>
                            <div className="stars">
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="far fa-circle"></i></div>
                                <div><i className="far fa-circle"></i></div>
                            </div>
                        </div>
                        <div className="rating">  
                            <div>Crative</div>
                            <div className="stars">
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="far fa-circle"></i></div>
                                <div><i className="far fa-circle"></i></div>
                            </div>
                        </div>
                        <div className="rating">  
                            <div>Reliable</div>
                            <div className="stars">
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="far fa-circle"></i></div>
                                <div><i className="far fa-circle"></i></div>
                            </div>
                        </div>                        
                    </div>                                      
                </div>
                <div className="part">
                    <div className="partTitle icon">
                        <div>
                            <i className="fas fa-globe"></i>
                        </div>
                        <h3>LANGUAGES</h3>
                    </div>  
                    <div className="subPart">  
                        <div className="rating">  
                            <div>Hebrew</div>
                            <div className="stars">
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="far fa-circle"></i></div>
                                <div><i className="far fa-circle"></i></div>
                            </div>
                        </div>                  
                        <div className="rating">  
                            <div>English</div>
                            <div className="stars">
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="far fa-circle"></i></div>
                                <div><i className="far fa-circle"></i></div>
                            </div>
                        </div>      
                        <div className="rating">  
                            <div>French</div>
                            <div className="stars">
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="fas fa-circle"></i></div>
                                <div><i className="far fa-circle"></i></div>
                                <div><i className="far fa-circle"></i></div>
                            </div>
                        </div>           
                    </div>                                      
                </div> */}
           </div>
        
    )
}

export default Main
