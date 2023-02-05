import  './services.css';
import Card from '../../components/Card';
import data from './data';

function Services() {
  return (
    <section id="services"><h2>My Service</h2>
    <p>I give you the best of all my services below</p>
  
      <div className = "container services__container">
       {data.map (item =>  
        <Card className = "service light"key = {item.id}>
        <div className="service__icon">{item.icon}</div> 
        <div className="service__details">
          <h4>{item.title}</h4>
          <p>{item.desc}</p>
        </div>
        </Card>)};
      </div> 
   
    </section>
  )
}

export default Services