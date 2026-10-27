import '../CSS/services.css'
import Card from './Card';
import { servicesData } from '../constants';

function Services (){
    return (
        <section id="services">
            <div className='services-section'>
                {/* <Title title="Services" des="What I Do" /> */}
                <div className="services-grid">
                {servicesData.map((item) => (
                <Card item={item} key={item.id} />
                ))}
            </div>
            </div>
            
        </section>

    );
}
export default Services;