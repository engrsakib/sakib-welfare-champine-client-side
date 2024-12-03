import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Slider = () => {
    return (
      <div>
        <Carousel>
          <div className="w-full h-[500px]">
            <img
              className="w-full h-full object-fill"
              src="https://i.ibb.co.com/0hDcvnF/man-wearing-red-jacket-walking-snowy-field-while-holding-snow-shovel-181624-8845.jpg"
            />
            <p className="legend">Donation Callection</p>
          </div>
          <div className="w-full h-[500px]">
            <img
              className="w-full h-full object-fill"
              src="https://i.ibb.co.com/k8ZQmhn/1-Getty-Images-1190345481.webp"
            />
            <p className="legend">Winter Donation</p>
          </div>
          <div className="w-full h-[500px]">
            <img
              className="w-full h-full object-fill"
              src="https://i.ibb.co.com/302X694/people-taking-community-action-23-2149232535.jpg"
            />
            <p className="legend">Donation Packaging</p>
          </div>
          <div className="w-full h-[500px]">
            <img
              className="w-full h-full object-fill"
              src="https://img.freepik.com/free-photo/volunteers-helping-with-food-donations-giving-thumbs-up_23-2148638018.jpg?t=st=1733254595~exp=1733258195~hmac=8ab868abf84645cfb8af591302a480a1a74fd48a9aaab150b5fab77ea27fee5c&w=1380"
            />
            <p className="legend">Donation Packaging</p>
          </div>
          <div className="w-full h-[500px]">
            <img
              className="w-full h-full object-fill"
              src="https://img.freepik.com/free-photo/charity-foodbank-volunteer-group_23-2149012184.jpg?t=st=1733254618~exp=1733258218~hmac=89b4a6f339af5435cad8891cce5257d7866267b8a9138b4fec29f7d037126ffe&w=1380"
            />
            <p className="legend">Donation Packaging</p>
          </div>
          <div className="w-full h-[500px]">
            <img
              className="w-full h-full object-fill"
              src="https://img.freepik.com/free-photo/volunteer-holding-box-containing-donations-charity_23-2149230561.jpg?t=st=1733254687~exp=1733258287~hmac=0aae182df67826a9df0ee2298b1587b5a74ac22d1f9eb63acf4b4a9028532841&w=1380"
            />
            <p className="legend">Donation Packaging</p>
          </div>
          <div className="w-full h-[500px] aspect-w-16 aspect-h-9">
            <img
              className="w-full h-full object-fill"
              src="https://img.freepik.com/free-photo/front-view-box-with-donated-food_23-2148613254.jpg?t=st=1733254703~exp=1733258303~hmac=db6586e8bb50f24a69ae1c732d8b5075afd14906ec848403f2853ab7fd8df48d&w=1060"
            />
            <p className="legend">Donation delivery</p>
          </div>
        </Carousel>
      </div>
    );
};

export default Slider;