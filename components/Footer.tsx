const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 justify-items-center py-14 bg-gray-100 text-gray-600 ">
      <div className="space-y-5 text-xs text-gray-800">
        <h5 className="font-bold text-lg">Support</h5>
        <ul className="leading-7">
          <li className="cursor-pointer">Help Centre</li>
          <li className="cursor-pointer">AirCover</li>
          <li className="cursor-pointer">Safety information</li>
          <li className="cursor-pointer">
            Supporting people with disabilities
          </li>
          <li className="cursor-pointer">Cancellation options</li>
          <li className="cursor-pointer">Our COVID-19 Response</li>
          <li className="cursor-pointer">Report a neighbourhood concern</li>
        </ul>
      </div>
      <div className="space-y-5 text-xs text-gray-800">
        <h5 className="font-bold text-lg">Community</h5>
        <ul className="leading-7">
          <li className="cursor-pointer">disaster relief housing</li>
          <li className="cursor-pointer">Support Afghan refugees</li>
          <li className="cursor-pointer">Combating discrimination</li>
        </ul>
      </div>
      <div className="space-y-5 text-xs text-gray-800">
        <h5 className="font-bold text-lg">Hosting</h5>
        <ul className="leading-7">
          <li className="cursor-pointer">Try hosting</li>
          <li className="cursor-pointer">AirCover for Hosts</li>
          <li className="cursor-pointer">Explore hosting resources</li>
          <li className="cursor-pointer">Visit our community forum</li>
          <li className="cursor-pointer">How to host responsibly</li>
        </ul>
      </div>
      <div className="space-y-5 text-xs text-gray-800">
        <h5 className="font-bold text-lg">Airbnb</h5>
        <ul className="leading-7">
          <li className="cursor-pointer">Newsroom</li>
          <li className="cursor-pointer">Learn about new features</li>
          <li className="cursor-pointer">Letter from our founders</li>
          <li className="cursor-pointer">Careers</li>
          <li className="cursor-pointer">Investors</li>
          <li className="cursor-pointer">Gift cards</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
