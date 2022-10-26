import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";
import FOOTER_BANNER from "../assets/footer.jpeg";

interface Props {
  nearbyData: [{ img: string; location: string; distance: string }];
  anyWhereData: [{ img: string; title: string }];
}

const Home: NextPage<Props> = ({ nearbyData, anyWhereData }: Props) => {
  return (
    <div className="">
      <Head>
        <title>Oswin Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16 justify-around">
        <section className="pt-6" id="near-by">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {nearbyData?.map(({ img, location, distance }, index) => {
              return (
                <SmallCard
                  key={index}
                  img={img}
                  location={location}
                  distance={distance}
                />
              );
            })}
          </div>
        </section>
        <section>
          <div>
            <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
            <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3">
              {anyWhereData?.map(({ img, title }, index) => {
                return <MediumCard key={index} img={img} title={title} />;
              })}
            </div>
          </div>
        </section>
        <section>
          <LargeCard
            img={FOOTER_BANNER}
            title="To Be Come A Host!!"
            description="Open your door
            to hosting"
            buttonText="Try hosting"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const nearbyData = await fetch(
    "https://react-training-e5993-default-rtdb.firebaseio.com/airbnb/nearBy.json"
  ).then((res) => res.json());

  const anyWhereData = await fetch(
    "https://react-training-e5993-default-rtdb.firebaseio.com/airbnb/lifeAnyWhere.json"
  ).then((res) => res.json());
  return {
    props: {
      nearbyData,
      anyWhereData,
    },
  };
}
