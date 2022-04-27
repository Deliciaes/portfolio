import logo from '../../assets/images/404cat.jpeg';
import './notFound.css';

const FourOhFour = (props) => {
    return (
    <div><p>This page does not exist</p><img className="logoLarge" src={logo} alt={props.alt}/></div>)
      };

      export default FourOhFour;