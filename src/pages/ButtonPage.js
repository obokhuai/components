import { GoBell ,GoDiffAdded,GoThumbsup, GoDatabase, GoArrowBoth} from "react-icons/go";
import Button from '../components/Button';

function ButtonPage() {

  const handleClick = ()=>{
    console.log("click!!!!")
  }
  return (
    <div>
      <div>
        <Button className="mb-5" secondary outline rounded onClick={handleClick}>
          <GoBell/>
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoDiffAdded/>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoThumbsup/>
          See Deal!</Button>
      </div>
      <div>
        <Button secondary outline>
        <GoDatabase/>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          <GoArrowBoth/>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;