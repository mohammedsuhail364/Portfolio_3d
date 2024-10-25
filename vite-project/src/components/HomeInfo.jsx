import {arrow} from '../assets/icons'
import {Link} from 'react-router-dom'
const HomeInfo = ({currentStage}) => {
  if(currentStage===1){
    return(
        <div className=' info-box'>
            <p className=' font-medium sm:text-xl text-center'>
                Hi I{"'"}m Suhail<br /> Software Engineer from India
            </p>
            <Link to='/about' className=' neo-brutalism-white neo-btn'>
            About
            <img src={arrow} alt="arror" className=' w-4 h-4 object-contain'/>
            </Link>
        </div>
    )
  }
  if(currentStage===2){
    return(
        <div className=' info-box'>
            <p className=' font-medium sm:text-xl text-center'>
                Worked with many Projects <br /> and picked up many skills along the way
            </p>
            <Link to='/about' className=' neo-brutalism-white neo-btn'>
            Learn More
            <img src={arrow} alt="arror" className=' w-4 h-4 object-contain'/>
            </Link>
        </div>
    )
  }
  if (currentStage===3){
    return(
        <div className=' info-box'>
            <p className=' font-medium sm:text-xl text-center'>
                Led Multiple projects to success over the years. <br /> Curious about the impact?
            </p>
            <Link to='/projects' className=' neo-brutalism-white neo-btn'>
            My Projects
            <img src={arrow} alt="arror" className=' w-4 h-4 object-contain'/>
            </Link>
        </div>
    )
  }
  if (currentStage===4){
    return(
        <div className=' info-box'>
            <p className=' font-medium sm:text-xl text-center'>
                Need a project done or looking for a dev? <br />I m just a few keysrokes away
            </p>
            <Link to='/contact' className=' neo-brutalism-white neo-btn'>
            Lets talk
            <img src={arrow} alt="arror" className=' w-4 h-4 object-contain'/>
            </Link>
        </div>
    )
  }
  return null;
}

export default HomeInfo