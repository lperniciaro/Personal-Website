import React, { useState } from 'react';
import Slider from 'react-slick';
import '../../App.css';
import '../Cards.css';
import '../HeroSection.css';
import './Cars.css';

const Cars = () => {
  const [posts] = useState([
    {
      title: 'Rallycross POV',
      date: 'Start Date: July 25, 2020',
      datePosted: 'Date Posted: Nov 29, 2024',
      description: `Now we're just having fun!`,
      content: `The car has been great, hasn't had an issue since the first disaster. Now I'm inviting my friends and we're all having a blast. Here's some POV\
       footage of a friend driving with me in the passenger seat.`,
      videos: [
        { type: 'local', src: 'Pics/Cars/RallyPOV.MOV' },
      ],
    },
    {
      title: 'When Disaster Struck',
      date: 'Start Date: May 31-Jun 22, 2020',
      datePosted: 'Date Posted: Nov 29, 2024',
      description: `The Crown Vic gets it's first mechanical troubles...`,
      content: `At the very end of the rallycross event, I decide to let Brianne Corn, the owner of the racetrack go on a joyride in the vehicle. But, something wasn't right.
      I knew the vehicle didn't have a limit slip differential, but she was really having a hard time getting the car sideways. I chalked it up to her not knowing the car, but
      as soon as I got back in I saw the dreaded check engine light. And even worse, it was flashing, indicating a misfire. The engine still ran okay, but under high load at low RPM
      it would misfire horribly. I drove it home with overdrive gear disabled, and it limped home ok.\
      \n
      \n
      First things first is going to AutoZone to read the trouble codes.\n
      P0303: Cylinder 3 Misfire\n
      P0302: Cylinder 2 Misfire\n
      P0171: Bank 1 System too lean\n
      \n
      I decided tackling it on my own with no prior mechanical diagnostic experience. Googling around I determine I may have a vacuum leak. So, I decide to do a smoke test.\
      I get a non nictotine vape pen, and blow smoke into the intake. I don't really see anything but see a tiny wisp come out of the EGR valve. I decide to replace the EGR valve from the junkyard.\
      Nothing. Waste of time. Seems like they do leak a tiny bit when you put smoke in the direction it's not supposed to go.\n\n
      
      I tried a tune up, changing the spark plugs. Nothing. I researched and researched, weeks had gone by and I still hadn't found a solution. I wound up at race track again.\
       At this time of year we would all randomly show up and do random car stuff when we were bored. I consulted with Brianne to ask what she thought about the issue.\
        Given the trouble codes, she believed I had a fuel related issue. This is because Bank 1 system too lean indicates that the engine is not getting enough fuel.\
         I don't know why I didn't explore this avenue. At the time, I'm pretty sure I just didn't want to touch the gross stink fuel. Since Brianne gave me that recommendation,\
          I decided to take out the fuel rail and look at the fuel injectors.\n\n I found my smoking gun. The fuel injectors were clogged with thick crust. I took the injectors out,\
           and let them soak in an ultrasonic cleaner. That still didn't get all the crud out. I was able to blast it away with a can of electronics cleaner. In the picture of\
            the tupperware above, that is all the crud that came out of the injectors. I put it all back together, and the car ran like a dream. I was so happy to have fixed it.\
      \n\n
      
      Did I forget to mention I decided to cheap out and get a knockoff fuel filter? Yeah. Not making that mistake again. Cheap out on parts and pay the price. \
      It's entirely possible the situation could have happened with a genuine filter, since the car sat for a while and the sediment is likely rust in the fuel tank that I did not clean, \
      but I digress. I learned a lot about diagnostics, and not to jump the gun and throw random parts at things.`,
      images: [
        'Pics/Cars/Trouble1.jpg',
        'Pics/Cars/Trouble2.jpg',
        'Pics/Cars/Trouble3.jpg',
        'Pics/Cars/Trouble4.jpg',
        'Pics/Cars/Sediment.jpg',
      ],
    },
    {
      title: 'The Fender Swap',
      date: 'Start Date: May 25, 2020',
      datePosted: 'Date Posted: Nov 29, 2024',
      description: `It's time to get rid of the nasty rusty fender.`,
      content: `I got a non rusty fender from the junkyard, and swapped it in. This is also when I got around to putting on the matching front bumper. I didn't take any pictures of\
      the final result, so here's a rallycross pic with an amazing illustration of why I need new shocks.`,
      images: [
        'Pics/Cars/Fender1.jpg',
        'Pics/Cars/Fender2.jpg',
      ],
    },
    {
      title: 'The Crown Vic Frontend Swap',
      date: 'Start Date: Apr 12, 2020',
      datePosted: 'Date Posted: Nov 29, 2024',
      description: `I swapped the frontend of my Grand Marquis with a Crown Victoria.`,
      content: `I had always wanted a Crown Victoria, not a Grand Marquis. Even though the underlying car was exactly the same, I thought the Grand Marquis front bumper\
      looked extremely ugly. I initially thought it would be a simple swap of the front grill, but boy did I sign myself up for a mini junkyard adventure.\
      I had to get the front bumper, header panel, headlights, and grill. While I was at it, I also grabbed a fender that wasn't rusted out. I was able to source the parts from\
      a real police car that was severly rear ended. I got to town and got the parts swapped over. The headlights required soldering new connections, as the design was completely different.\
      I kept the original Grand Marquis corner lights, as they turn on side lamps (cornering lights) when you turn your blinkers on, allowing you to see where you're turning when it's dark.\
      This feature doesn't even exist in some really nice cars! The final product was a car that looked like a Crown Victoria, but had the interior of a Grand Marquis.`,
      images: [
        'Pics/Cars/CrownVic1.jpg',
        'Pics/Cars/CrownVic2.jpg'
      ],
    },
      {
      title: 'My First Rallycross',
      date: 'Start Date: Jan 25-26, 2020',
      datePosted: 'Date Posted: Oct 26, 2024',
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
      date: 'Date: Jan 19-24, 2020',
      datePosted: 'Date Posted: Oct 26, 2024',
      content: `As I'm rewriting this story four years later it's pretty nuts to me what I accomlished in such a short time frame. I had a clapped out, broken down Grand Marquis at my apartment complex. A few days later? Functioning vehicle.\n\n
      
      However, the journey did not start without some hiccups. The landlord forced it out of the property :/.
      I emergency found a nearby storage unit, and got it towed off property. Not a great start to the project. Thankfully, I did not need that unit for long. I had correctly diagnosed the issue as a fuel pump and the car was running!\n\n
      
      The first test drive had it's issues, but great first impressions. I put it into reverse and it effortlessly backed out, with somewhat extremely sketchy, but 'technically stopping the vehicle' brakes. It went into drive just fine,\ 
       and I slowly creeped it out of the grass parking lot. The rough terrain ripped some sagging trim underneath the engine. As we pulled out on to the road, I eagerly awaited each gear shift to see if I had made a good purchase, or if I\
      just gave myself thousands of dollars of 'buy a new tranmission' debt. Everything checked out. The air condition even worked! The tires were hard as rocks and the first major purchase were a new set of the cheapest tires\
      I could get from Walmart. Next a trip to the local junkyard to get the missing corner lights and bulbs, to make the car legal and registerable. I got the car registered and promptly parked it right back at my apartment complex. The\
       landlord karen surely rued that day.`,
      videos: [
        { type: 'youtube', src: 'https://www.youtube.com/embed/dKiouwl-33I' },
      ],
    },
    {
      title: 'The Grand Marquis',
      date: 'Start Date: Jan 10, 2020',
      datePosted: 'Date Posted: Oct 24, 2024',
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
          <div className="date-container">
            <span className="start-date">{post.date}</span>
            <span className="date-posted">{post.datePosted}</span>
          </div>
          {post.videos && post.videos.length > 0 && (
            <div>
              {post.videos.map((video, vidIndex) => (
                <div key={vidIndex}>
                  {video.type === 'local' ? (
                    <video controls className="carousel-video">
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <iframe
                      width="100%"
                      height="500"
                      src={video.src}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={`video-${vidIndex}`}
                    ></iframe>
                  )}
                </div>
              ))}
            </div>
          )}
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
