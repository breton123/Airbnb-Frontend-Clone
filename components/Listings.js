import Listing from "../components/Listing";
import { faker } from '@faker-js/faker';
import { useEffect, useState } from "react";

function getRandomFloat(min, max, decimals) {
    const str = (Math.random() * (max - min) + min).toFixed(decimals);
  
    return parseFloat(str);
  }

function Listings() {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        const listings = []

        for (let i = 0; i < 48; i++) {
            var temp = []
            temp.push(i);
            temp.push(faker.address.county());
            temp.push(faker.address.countryCode());
            temp.push(Math.floor(Math.random() * 900));
            temp.push(getRandomFloat(0, 5, 2));
            temp.push(faker.image.city(270,300,true));
            listings.push(temp);
          }

          setListings(listings);
          console.log(listings);
    }, []);



    return (
        <div className="grid grid-cols-5 grid-flow-row px-40">
            {listings.map((listing) => (
                <Listing 
                    key={listing[0]}
                    county={listing[1]}
                    country={listing[2]}
                    price={listing[3]}
                    rating={listing[4]}
                    image={listing[5]}
                />
            ))}
        </div>
    );
}

export default Listings;