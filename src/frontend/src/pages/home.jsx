import React from "react";

// Import Components
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { BoltIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard} from "@/widgets/cards";
import { featuresData, teamData} from "@/data";

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
              Looking for a  <span className="text-amber-500">WEBSITE?</span>
              </Typography>
              <Typography variant="lead" color="white" className="opacity-100">
              </Typography>
               <Typography variant="lead" className="text-white">
                <span className="text-gray-400">Starting at $199</span>
              </Typography>
            </div>
          </div>
        </div>
      </div>


      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">

          {/* Section 1 => Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-amber-500",
                })}
                description={description}
              />
            ))}
          </div>

          {/* Section 2 => Service */}
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <BoltIcon className="h-8 w-8 text-amber-600 " />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="green"
              >
                My name is Abdallah Tamra and i like to create <span className="text-gray-800">websites.</span>
              </Typography>

              <Typography className="mb-8 font-normal text-gray-900">
                My mentality is all about speed and performance <br /><br />
                Speed is extremely important in business <br /><br />
                The key in business is to make sure you're always moving forward and always doing everything you can
                as quickly as possible and i'm here to help you achieve that!<br/><br/>
                I use one of the best frameworks for web creation which is React JS and Golang <br/><br/>
                ⚡️ Check out my projects ⚡️
              </Typography>


              {/* React and Golang Documentation */}
              <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
                <Button variant="text" className="bg-gray-900 text-amber-400 hover:bg-amber-700 hover:text-gray-800" >My Projects</Button>
              </a>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">

              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg bg-gray-900">

                <CardHeader floated={false} className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/myPic.png"
                    className="h-full w-full"
                  />
                </CardHeader>

                <CardBody>
                  <a href="https://instagram.com/abdallahtamra_" target="_blank" rel="noopener noreferrer">
                    <Typography
                      variant="h5"
                      className="mb-3 mt-2 font-bold text-white"
                    >
                    Chief Executive Officer
                    </Typography>
                    <Typography variant="small" className="font-normal text-amber-500">@abdallahtamra_</Typography>
                  </a>

                </CardBody>
              </Card>
            </div>
          </div>

        </div>
      </section>


      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle section="" heading="My Designs">

          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-xl fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>

      <div className="bg-black">
        <Footer />
      </div>
    </>
  );
}

export default Home;
