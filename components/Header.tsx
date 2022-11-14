import Image from "next/image";
import AIRBNB from "../assets/airbnb-logo.png";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
//@ts-ignore
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

const Header = (props: { placeholder?: string }) => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const onDateChangeHandler = (ranges: {
    selection: { startDate: Date; endDate: Date };
  }) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const onCancelHandler = () => {
    setSearchInput("");
  };

  const onSearchHandler = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuests,
      },
    });
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-7">
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
        <Image
          src={AIRBNB}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      <div className="flex items-center rounded-full py-2 md:border-2 md:shadow-sm">
        <input
          type="text"
          className="pl-5 bg-transparent flex-grow outline-none text-sm text-gray-600 placeholder:text-gray-400"
          placeholder={props?.placeholder || "Start your search"}
          onChange={(event) => setSearchInput(event.target.value)}
          value={searchInput}
        />
        <SearchIcon className="h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer hidden md:inline-flex md:mr-2" />
      </div>

      <div className="flex items-center space-x-4 justify-end">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6" />
        <div className="flex rounded-full space-x-2 border-2 p-2 items-center">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={onDateChangeHandler}
          />
          <div className="flex items-center mb-4 border-b">
            <h2 className="font-semibold text-2xl flex-grow">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
              value={numberOfGuests}
              onChange={(e) => setNumberOfGuests(parseInt(e.target.value))}
              min={1}
            />
          </div>
          <div className="flex">
            <button className="flex-grow" onClick={onCancelHandler}>
              Cancel
            </button>
            <button
              className="flex-grow text-red-400"
              onClick={onSearchHandler}
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
