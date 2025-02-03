import './App.css';
import Hero from './components/Hero';
import Section2 from './components/Section2';
import Card from './components/Card';

function App7() {
  return (
    <div className="App">
      <Hero
        title="Welcome to Our Platform"
        text="Experience the best features with our amazing service today and get started with us now."
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjTcMot_KQgZhtpzB-2ISu3oa58VCpDYnf5A&s"
        buttonText="Get Started"
      />

      <Section2
        title="Our Services"
        text="Discover what we can do for you today and get started with us now to enjoy the best service in the industry today."
        buttonText="Learn More"
      />
      <Hero
        title="Why Choose Us"
        text="We provide the best service in the industry with the best features and the best customer support."
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQceuc3xCaxLi1FCDa9AMI5-id_pfyGyirTrQ&s"
        buttonText="Contact Us"
        reverse={true}
      />

      <div className="container py-5">
        <div className="row g-4">
          <div className="col-md-4">
            <Card
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWpe0hjIqITUn04Bxe319aeTP5IqdmiUtIQ&s"
              title="online video platform"
              text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Nulla ut nulla sed mauris tempor pulvinar."
              buttonText="Read More"
            />
          </div>
          <div className="col-md-4">
            <Card
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWqxdJrmHRWJDbER4D3Fo6kziMKjo2zju3RA&s"
              title="Best e-learning platform"
              text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Nulla ut nulla sed mauris tempor pulvinar."
              buttonText="Read More"
            />
          </div>
          <div className="col-md-4">
            <Card
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5fUEnCtScoYZferwEjKIm1ZingPzlELeX1A&s"
              title="Statistics about your progress"
              text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Nulla ut nulla sed mauris tempor pulvinar."
              buttonText="Read More"
            />
          </div>

        </div>
      </div>
    </div>);
}

export default App7;
