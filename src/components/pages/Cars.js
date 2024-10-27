import React, { useState } from 'react';
import Slider from 'react-slick';
import '../../App.css';
import '../Cards.css';
import '../HeroSection.css';
import './Cars.css';

const Cars = () => {
  const [posts] = useState([
      {
      title: 'My First Rallycross',
      date: 'Start Date: Jan 25-26, 2020    \t\t\t\t\t\t\t\t\t\t\t\t\tDate Posted: Oct 26, 2024',
      description: `The beginning of an incredible journey into Rallycrossing`,
      content: `I got the car fixed just in time. The next rallycross event at Lonestar Rallycross was coming up, and I was excited to learn how to manuver a RWD vehicle on the dirt. I drove the sketchy braked Grand Marquis from\
      College Station to San Marcos, TX, and had an absolute blast of a time. I could type a whole bunch of words about how awesome this was, but I think the pictures do it justice.`,
      images: [
        'Pics/Cars/First Drift.JPG',
        'Pics/Cars/First rallycross.jpg',
        'Pics/Cars/FirstRallyCone.jpg',
        'Pics/Cars/FirstRallySlide.jpg'
      ],
    },
    {
      title: 'The First Repairs',
      date: 'Date: Jan 19-24, 2020    \t\t\t\t\t\t\t\t\t\t\t\t\tDate Posted: Oct 26, 2024',
      content: `As I'm rewriting this story four years later it's pretty nuts to me what I accomlished in such a short time frame. I had a clapped out, broken down Grand Marquis at my apartment complex. A few days later? Functioning vehicle.\n\n
      
      However, the journey did not start without some hiccups. The landlord forced it out of the property :/.
      I emergency found a nearby storage unit, and got it towed off property. Not a great start to the project. Thankfully, I did not need that unit for long. I had correctly diagnosed the issue as a fuel pump and the car was running!\n\n
      
      The first test drive had it's issues, but great first impressions. I put it into reverse and it effortlessly backed out, with somewhat extremely sketchy, but 'technically stopping the vehicle' brakes. It went into drive just fine,\ 
       and I slowly creeped it out of the grass parking lot. The rough terrain ripped some sagging trim underneath the engine. As we pulled out on to the road, I eagerly awaited each gear shift to see if I had made a good purchase, or if I\
      just gave myself thousands of dollars of 'buy a new tranmission' debt. Everything checked out. The air condition even worked! The tires were hard as rocks and the first major purchase were a new set of the cheapest tires\
      I could get from Walmart. Next a trip to the local junkyard to get the missing corner lights and bulbs, to make the car legal and registerable. I got the car registered and promptly parked it right back at my apartment complex. The\
       landlord karen surely rued that day.`,

    },
    {
      title: 'The Grand Marquis',
      date: 'Start Date: Jan 10, 2020    \t\t\t\t\t\t\t\t\t\t\t\t\tDate Posted: Oct 24, 2024',
      description: `I found a 2004 Mercury Grand Marquis on Craigslist for $600. Here's how I tackled the project...`,
      content: `The story of the Grand Marquis is a tale that starts with a dream to have a project car. A project which will allow me to tinker and learn the inner workings of a vehicle.\
      I had been searching for an old Crown Victoria at police auctions for a long time, but had found nothing that was worth biting the bullet on. Years had gone by, and I remember the day I found\
      the craigslist post like it was yesterday. I was sitting in the hallway at Texas A&M, waiting to see my academic advisor — every college students favorite pastime. As any self respecting 'car guy'\
      would, I decided to check craigslist on an impulse for the 'Mercury' branded version of the Crown Victoria. I was shocked in amazement to see a listing for $900. \
      \
      \n\n There it was. My first project car. I immediately proceeded to contact\
      the owner. After a few days of stewing and binge watching videos about the Panther Platform, I went to the owners house to see the car. I was revolted. One of the fenders was rusted out, the car had sat\
      under a tree for 5 years, and it was covered in green sap and snail trails. My first impressions were dissapointment: "I don't think I'm getting this car..." I said to myself. \n\n
      
      Initially, I had thought the 50k miles on the car was suspicious. Too good to be true. Probably a rollback odometer scam right? But then I saw the interior. The glorious interior. When I first sat in that seat I was overwhelmed\
      with joy as the perfect condition interior transformed me into the 2004 timecapsule I didn't even know I wanted. Within seconds I went from extreme dissapointment to - "I think I'm getting this car!". \
      Plush leather seats, plenty of space, and a classic 'grandma special' vanilla scented air freshener that will be forever engrained into the nostalgia of my brain. \n\n We tried starting the car, and it ran! .... For 2 seconds... and died.\
      Wouldn't start back up. I found this as great news. The engine sounded healthy when it did run, so there was clearly a small issue preventing it from running. However, it's failure to run means I have negotiation leverage!\
      I got the owner down to $600, and the car was mine.`,
      images: [
        'Pics/Cars/Craiglist Post.PNG',
        'Pics/Cars/The first look.jpg',
        'Pics/Cars/The back first.jpg',
        'Pics/Cars/Interior first look.jpg'
      ],
    },
    

  ]);

  // Custom Arrow components to remove text
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="slick-prev" onClick={onClick}>

      </button>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="slick-next" onClick={onClick}>

      </button>
    );
  };

  const formatContent = (content) => {
    return content.split('\n\n').map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ));
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 12000,
    arrows: true,
    prevArrow: <CustomPrevArrow />, // Custom arrow for previous
    nextArrow: <CustomNextArrow />, // Custom arrow for next
  };

  return (
    <div>
      <h1>Car Projects</h1>
      {posts.map((post, index) => (
        <div key={index} className="post">
          <h2>{post.title}</h2>
          <p className="date"><em>{post.date}</em></p>
          {post.images && post.images.length > 0 && (
            <Slider {...settings}>
              {post.images.map((image, imgIndex) => (
                <div key={imgIndex}>
                  <img src={image} alt={`Slide ${imgIndex + 1}`} className="carousel-image" />
                </div>
              ))}
            </Slider>
          )}
          <p>{post.description}</p>
          {/* Render the content with proper paragraph breaks */}
          <div>{formatContent(post.content)}</div>
        </div>
      ))}
    </div>
  );
};

export default Cars;
