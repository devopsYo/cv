import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <div className="footerCV">
           <div className="footerCVDetails">
                <div className="icon">
                    <FontAwesomeIcon icon={['fas','home']} />
                </div>
                <div>Arieh Shenkar St 13, Herzliya</div>
           </div>
            <div className="footerCVContact">
                <div className="footerCVDetails">
                    <div className="icon">
                        <FontAwesomeIcon icon={['fas','phone-square-alt']} />
                    </div>
                    <div>0512345678</div>
                </div>
                <div className="footerCVDetails">
                    <div className="icon">
                        <FontAwesomeIcon icon={['fab','linkedin']} />
                    </div>
                    <div>linkedin.microsoft.com</div>
                </div>
                <div className="footerCVDetails">
                    <div className="icon">
                        <FontAwesomeIcon icon={['fas','envelope-square']} />
                    </div>
                    <div>microsoft@gmail.com</div>
                </div>
            </div>
       </div>       
    )
}

export default Footer
