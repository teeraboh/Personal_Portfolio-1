"use client";

import React from "react";
import Image from "next/image";

interface ProjectProps {
  imageSrc: string;
  altText: string;
  title: string;
  heading: string;
  description: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  imageSrc,
  altText,
  title,
  heading,
  description,
}) => {
  return (
    <div className="flex flex-col space-y-2 items-start text-textnorm space-x-0 mx-5 lg:mx-0 lg:mt-3">
      <ul className="list-outside list-disc space-y-4">
        <li className="text-base text-start font-normal lg:grid grid-cols-5 lg:gap-12">
          <div className="lg:mx-2">
            <h1 className="hidden text-base text-start font-medium mb-4 text-textcolor lg:flex">
              {title}
            </h1>
            <p className="text-sm font-medium text-textcolor text-start my-3 hidden lg:flex">
              {heading}
            </p>
            <Image
              src={imageSrc}
              alt={altText}
              width={130}
              height={150}
              className="brightness-100 my-3 flex"
              quality={90}
              priority
            />
          </div>

          <div className="flex flex-col items-start lg:col-span-4">
            <h1 className="text-base text-start font-medium mb-4 text-textcolor lg:hidden">
              {title}
            </h1>
            <p className="text-sm font-medium text-textcolor text-center my-3 lg:hidden">
              {heading}
            </p>
            <p className="text-sm font-normal text-textnorm italic text-start pb-3 mx-2 whitespace-pre-line text-pretty lg:py-10 lg:text-base lg:pb-0 lg:mt-7">
              {description}
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default function AboutPage() {
  const journey = [
    {
      title: "From Curiosity to Creation",
      description:
        "It all began with a spark of curiosity. I stumbled upon a redesign of the GTB App by TassyOmah (Omah) on Twitter, and I was captivated. The way she transformed the user experience was mesmerizing, and I knew right then that I wanted to learn more.",
    },
    {
      title: "The Early Days",
      description: `As I delved deeper into the world of design, I realized that it wasn't just about making things look pretty – it was about creating experiences that improved people's lives. I was hooked.\n\n I enrolled in the Side-Hustle Internship program in 2021, where I met like-minded individuals who shared my passion for design. Together, we worked on a startup project called Japa-Buddy, and I learned the value of collaboration and creative problem-solving.`,
    },
    {
      title: "The Journey Continues",
      description: `In 2022, I joined the Dev and Design Bootcamp, where I developed my skills in design languages and low-code projects. I also created Desigbloc, a design language that showcased my creativity and attention to detail.\n\n The following year, I enrolled in Perxel Design School's three-month design program, where I mastered tools like Figma, Figjam, and Miro. I learned the importance of UX research, design processes, and effective communication.`,
    },
    {
      title: "Transitioning to Code",
      description: `As I continued on my design journey, I realized that coding was an essential skill to acquire. I discovered Dr. Angela Yu's Udemy course and was impressed by her teaching style. I decided to take the plunge and learn how to code.\n\n I enrolled in ALX Africa's frontend engineering program, where I'm currently learning the basics of coding. I've also started pursuing a second degree in software engineering at Miva Open University.`,
    },
    {
      title: "The Future Ahead",
      description: `As I continue to learn and grow, I'm excited to see where my design and coding skills take me. My short-term goal is to become a UX engineer, merging my design expertise with coding skills. In the long term, I aspire to become a software engineer, leveraging my design background to create innovative solutions.

To break out of my comfort zone and gain practical experience, I've taken a bold step by enrolling in Internpulse, founded by the innovative John Diginee, a software engineer I greatly admire. This platform has given me the opportunity to collaborate with like-minded individuals in the tech industry, working on live projects and gaining invaluable experience.

My 8-week journey with the Internpulse team has been transformative, boosting my confidence in my abilities. I'm proud to say that I'm not just a designer or coder – I'm a collaborative problem-solver, ready to tackle real-world challenges. I'll be showcasing the projects I worked on during my time at Internpulse soon, so stay tuned!

This experience has not only honed my skills but also reinforced my passion for the tech industry. I'm excited to take the next step in my career, applying my skills and experience to drive innovation and make a meaningful impact.`,
    },
  ];

  const interestsInspirations = [
    {
      imageSrc:
        "https://res.cloudinary.com/dxvf9uqwe/image/upload/v1738602214/image/svmf0e4uejjniiypu9so.svg",
      altText: "Movie picture of Zana Teeraboh",
      title: "MOVIES",
      heading: "ENTERGALACTIC",
      description:
        "As a designer, I'm drawn to the vibrant, dreamlike quality of EnterGalactic. The way the animation seamlessly blends with the music is pure magic. But what truly resonates with me is the film's exploration of love, connection, and the human experience. The way it weaves together themes of identity, community, and the power of art to transcend boundaries... it's truly captivating. For me, EnterGalactic is more than just a movie – it's a reminder of the transformative power of love, art, and music to bring people together and inspire us to be our best selves",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/dxvf9uqwe/image/upload/v1738602214/image/rmxhbj8agwaakfdkmmmn.svg",
      altText: "Movie picture of Zana Teeraboh",
      title: "MOVIES",
      heading: "3 IDIOTS",
      description:
        "This Bollywood masterpiece never fails to make me laugh, cry, and reflect on the true meaning of success. As a designer, I appreciate the film's offbeat approach to storytelling and its celebration of creativity, innovation, and out-of-the-box thinking. But what resonates with me most is the movie's emphasis on the importance of following your heart, pursuing your passions, and staying true to yourself. The iconic character of Rancho, with his 'chase excellence, success will follow' mantra, is a constant reminder to me to stay focused on my goals and never compromise on my values.",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/dxvf9uqwe/image/upload/v1738607666/image/thunpcphjr0hxkbntjvo.svg",
      altText: "Music picture of Zana Teeraboh",
      title: "MUSIC",
      heading: "BURNA BOY",
      description:
        "Burna Boy's Grammy-winning album is more than just a masterpiece of Afrobeat music – it's a testament to the power of cultural fusion and creative experimentation. As a designer, I find inspiration in the way Burna Boy blends different styles and genres to create something entirely new and innovative. The album's eclectic mix of rhythms, melodies, and lyrics reminds me to stay open to new influences, take risks, and push the boundaries of what's possible in my design work. Whenever I need a boost of creativity, I put on 'Twice As Tall' and let the infectious energy and innovative spirit of Burna Boy's music spark new ideas and inspiration",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/dxvf9uqwe/image/upload/v1738602214/image/akwwhuzrudkouruefwhx.svg",
      altText: "Book picture of Zana Teeraboh",
      title: "BOOKS",
      heading: "REFACTORING UI",
      description:
        "This book is my design bible. I return to it again and again for inspiration, guidance, and a refreshing dose of design wisdom. Adam and Steve's practical, no-nonsense approach to UI design has been a game-changer for me, helping me simplify my design process, focus on what matters, and create interfaces that are both beautiful and functional. Whether I'm tackling a new design project or refining an existing one, Refactoring UI is always within arm's reach, reminding me to stay focused on the user, keep it simple, and continuously iterate towards perfection.",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/dxvf9uqwe/image/upload/v1738602214/image/kur1xq8pflzo8fld8jli.svg",
      altText: "Book picture of Zana Teeraboh",
      title: "BOOKS",
      heading: "THE DESIGN OF EVERYDAY THINGS",
      description:
        "This classic design book has been a revelation for me, offering a profound understanding of how design shapes our interactions with the world around us. Don Norman's insightful exploration of the psychology of everyday objects has taught me to see design as a holistic process that encompasses not just aesthetics, but also functionality, usability, and emotional connection. As I navigate the complexities of design, this book remains a trusted companion, reminding me to prioritize clarity, simplicity, and user-centeredness in every project I undertake",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/dxvf9uqwe/image/upload/v1738602217/image/eibreykwxstr6yzg8nku.svg",
      altText: "Game picture of Zana Teeraboh",
      title: "GAMES",
      heading: "CALL ON DUTY",
      description: `As an avid gamer, I've often found myself defending my love for Call of Duty to those who view gaming as a mere distraction. But the truth is, this fast-paced, action-packed game has been a valuable training ground for my brain. Research has shown that games like Call of Duty can improve cognitive skills such as multitasking, decision-making, and problem-solving.

For me, the game's intense, dynamic environment has honed my ability to stay focused under pressure, think on my feet, and adapt quickly to new situations. It's also heightened my spatial awareness, allowing me to better navigate complex environments and track multiple objects simultaneously.

But beyond the cognitive benefits, I believe gaming has also made me more aware of my surroundings. The game's emphasis on situational awareness, strategy, and teamwork has translated to real-life benefits, such as improved observation skills, enhanced risk assessment, and more effective communication with others.

So, the next time someone asks me why I spend time playing Call of Duty, I'll tell them it's not just about having fun – it's about sharpening my mind, staying focused, and developing skills that benefit me far beyond the gaming world`,
    },
  ];

  return (
    <section className="flex flex-col w-full justify-between space-y-4">
      <div className="flex flex-col w-fit h-fit px-4 my-6 items-center container bg-custom-gradient lg:w-full lg:h-fit lg:px-28">
        <div className="flex flex-col lg:gap-0">
          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col items-center justify-center lg:justify-start lg:ml-4 lg:items-start lg:mt-10 lg:w-full">
              <h1 className="text-2xl font-medium text-textcolor text-center lg:items-start lg:text-4xl">
                ABOUT
              </h1>
              <Image
                src="https://res.cloudinary.com/dxvf9uqwe/image/upload/v1738602215/image/tsfcu2izu5ikfymxu0ul.svg"
                alt="Profile picture of Zana Teeraboh"
                width={205}
                height={287}
                className="brightness-100 mt-5 flex lg:hidden"
                quality={90}
                priority
              />
              <Image
                src="https://res.cloudinary.com/dxvf9uqwe/image/upload/v1738602217/image/n2c7zhd2fayxxpnj1odm.svg"
                alt="Profile picture of Zana Teeraboh"
                width={275}
                height={347}
                className="brightness-100 hidden lg:flex lg:mt-8 lg:justify-center lg:items-center lg:ml-3"
                quality={90}
                priority
              />
            </div>
            <div className="flex flex-col items-center justify-center mt-5 lg:ml-8 lg:pl-6">
              <div className="flex flex-col w-fit h-fit items-start justify-start mx-12 lg:mx-0 lg:mt-16 lg:w-fit">
                <div className="flex flex-row lg:mx-8">
                  <Image
                    src="https://res.cloudinary.com/dxvf9uqwe/image/upload/v1738602534/image/ggro01mlpmawssffr3lu.svg"
                    alt="comma"
                    width={17}
                    height={15}
                    className="mb-96 lg:mb-60 lg:mt-5"
                    quality={90}
                    priority
                  />
                  <div className="flex flex-col py-1 lg:pt-6">
                    <p className="text-sm font-normal text-textnorm italic text-center text-pretty lg:text-start lg:text-lg">
                      Hello, I&apos;m Zana Teeraboh, a passionate and
                      detail-driven product designer with 3 years of experience
                      in crafting intuitive and user-friendly experiences.
                      Currently, I&apos;m expanding my skill set as a student of
                      Software Engineering at Miva Open University.
                    </p>
                    <p className="text-center text-sm font-normal text-textnorm italic pt-2 text-pretty lg:text-start lg:text-lg">
                      I&apos;m excited to bring my skills and experience to the
                      table, and I&apos;m looking forward to connecting with
                      you!
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center lg:justify-start lg:items-start lg:mx-12">
                <h1 className="text-xl font-medium text-textcolor text-center mb-4 lg:text-3xl">
                  My Skills
                </h1>
                <div className="flex flex-col items-start space-x-0 gap-2 mx-6 lg:flex-row lg:space-x-4 lg:mx-0">
                  <p className="text-sm font-normal text-textnorm italic text-start pb-2 text-wrap">
                    User research and analysis User journey mapping Wireframing
                    and prototyping Interaction design Visual design principles
                    Usability testing and feedback analysis Design systems and
                    design thinking Collaboration with cross-functional teams
                    Familiarity with design tools like Figma, Sketch, Adobe XD
                    Basic front-end development skills (HTML, CSS, JavaScript)
                  </p>
                  <p className="text-sm font-normal text-textnorm italic text-start pb-2 text-wrap">
                    Natural Language Processing (NLP) concepts Language model
                    architecture and training Prompt design and optimization
                    Text generation and editing Conversational AI and dialogue
                    systems Understanding of machine learning concepts and
                    algorithms Knowledge of human-computer interaction and
                    human-centered design Ability to analyze and improve
                    language model performance
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center lg:justify-start lg:items-start pt-6 lg:mt-8 lg:mx-0">
            <h1 className="text-xl font-medium text-textcolor text-center my-4 lg:text-left lg:mt-0 lg:text-2xl">
              My Design Journey:
            </h1>
            <div className="flex flex-col space-y-2 items-start text-textnorm space-x-0 mx-5">
              <ul className="list-outside list-disc space-y-4 lg:space-y-8 lg:mx-1 lg:relative lg:pl-5">
                <div className="hidden lg:block lg:absolute lg:left-0 lg:top-10 lg:bottom-0 lg:mb-6 lg:border lg:border-[#E7E7E7]"></div>
                {journey.map((step, index) => (
                  <li
                    key={index}
                    className="text-base text-start font-normal relative"
                  >
                    <div className="flex flex-col items-start lg:grid grid-cols-3 lg:space-x-0 lg:gap-12 lg:w-fit lg:px-0">
                      <h2 className="text-base font-medium text-textnorm mb-4 pb-1 px-4 lg:text-xl lg:px-0 lg:font-normal">
                        {step.title}
                      </h2>
                      <p className="text-sm font-normal text-textnorm italic text-start pb-3 mx-2 whitespace-pre-line text-pretty lg:col-span-2 lg:text-base lg:mx-5">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center lg:justify-start lg:items-start pt-6 lg:pt-0 lg:mt-4">
            <div>
              <h1 className="text-xl font-medium text-textcolor text-center my-4 lg:text-left lg:mt-0 lg:text-3xl">
                Interests & Inspirations
              </h1>
              <p className="text-xs font-normal text-textnorm italic text-center py-1 text-pretty mx-3 lg:text-start lg:mx-0">
                Beyond Code and Design, here are some of the things brings about
                my Inspirations and help me escape into a world of wonder, where
                movies, music, books, and games ignite my imagination. in here i
                let you discover the things that bring me joy, balance, and
                inspirations
              </p>
            </div>
            <ul className="list-outside list-disc space-y-4 lg:mx-1">
              {interestsInspirations.map((item, index) => (
                <ProjectCard
                  key={index}
                  imageSrc={item.imageSrc}
                  altText={item.altText}
                  title={item.title}
                  heading={item.heading}
                  description={item.description}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
