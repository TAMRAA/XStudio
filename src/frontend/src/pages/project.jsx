
import { PageTitle, Footer } from "@/widgets/layout";
import { Typography, IconButton } from "@material-tailwind/react";
import { TeamCard} from "@/widgets/cards";
import { teamData} from "@/data";

export function Project() {
  return (
    <>

      <div className="relative flex h-screen content-center items-center justify-center pt-40 pb-20">
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
                Here you'll find my <span className="text-amber-500">creative works</span> and <span className="text-amber-500">designs</span>
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle section="" heading="My Projects">

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

export default Project;