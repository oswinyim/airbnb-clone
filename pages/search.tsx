import { format, Interval } from "date-fns";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

interface SearchResult {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: number;
  lat: number;
  long: number;
}

interface SearchProps {
  searchResults: SearchResult[];
}

const Search = ({ searchResults }: SearchProps) => {
  const router = useRouter();
  const { location, startDate, endDate, numberOfGuests } = router.query;
  const formateDate = (date: Date | number) => {
    return format(date, "dd MMMM yy");
  };

  const startDateObj =
    startDate === undefined || startDate instanceof Array
      ? new Date()
      : new Date(startDate);
  const endDateObj =
    endDate === undefined || endDate instanceof Array
      ? new Date()
      : new Date(endDate);

  const totalDays =
    (endDateObj.getTime() - startDateObj.getTime()) / (1000 * 60 * 60 * 24);
  const formattedStartDate = formateDate(startDateObj);
  const formattedEndDate = formateDate(endDateObj);

  const range = `${formattedStartDate} - ${formattedEndDate} `;
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${numberOfGuests}`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            {`300+ Stays - ${range} - for ${numberOfGuests} number of guests`}
          </p>
          <h1 className="font-smibold text-3xl mt-2 mb-6">{`Stay in ${location}`}</h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Prices</p>
            <p className="button">Rooms</p>
            <p className="button">More Filters</p>
          </div>
          <div className="flex flex-col">
            {searchResults?.map(
              (
                { img, location, title, description, star, price, lat, long },
                index
              ) => {
                return (
                  <InfoCard
                    key={index}
                    img={img}
                    location={location}
                    title={title}
                    description={description}
                    star={star}
                    price={price}
                    lat={lat}
                    long={long}
                    total={totalDays}
                  />
                );
              }
            )}
          </div>
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[1200px] relative">
          <Map searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch(
    "https://react-training-e5993-default-rtdb.firebaseio.com/airbnb/list.json"
  ).then((res) => res.json());

  return {
    props: {
      searchResults,
    },
  };
}
