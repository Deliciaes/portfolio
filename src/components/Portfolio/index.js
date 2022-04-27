import './portfolio.css';


const PortfolioCard = (props) => {

        return(
          <>
<div className="project">
                      <h2>{props.title}</h2>
                      <div className="projectLinks">
                      <a href={props.github}>GitHub</a>
                      <a href={props.demo}>Demo</a>
                      </div>
                      <div>{props.description}</div>
                      <div><p>Stack: {props.stack}</p></div>
                  </div>
            </>
    )
};

export default PortfolioCard;