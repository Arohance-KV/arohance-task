import React from "react";

const HomePage = () => {
  return (
    <>
      <section className="bg-yellow-100 p-8 flex flex-col">
        <div>
          <h2 className="text-sm text-gray-600 font-medium">
            CREATIVE WORK, CREATIVE MIND
          </h2>
          <h1 className="text-5xl font-bold text-gray-800 mt-2 italic">
            A platform empowering creators, elevating brands
          </h1>
          <p className="text-lg text-gray-700 mt-4">
            We serve as the bridge between innovative brands and talented
            creators, crafting partnerships that inspire and elevate.
          </p>
        </div>
        <div className="mt-8 space-x-4 flex display-inline justify-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded">
            I'M A CREATOR
          </button>
          <button className="bg-blue-600 text-white px-6 py-3 rounded">
            WE'RE A BRAND
          </button>
        </div>
      </section>

      <section className="logo-marquee-section bg-yellow-100">
        <div className="logo-marquee-wrapper">
          <div className="logo-marquee mb-12">
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651ee87769a06981948ee82d_Suger.png"
              alt="Suger"
              className="logo-image"
              sizes="(max-width: 767px) 64px, 120px"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651ee877cff322896334a697_Miraggio.png"
              alt="Miraggio"
              className="logo-image"
              sizes="(max-width: 767px) 64px, 120px"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651ee87768a833018610d1cc_House%20of%20Candy.png"
              alt="House of Candy"
              className="logo-image"
              sizes="(max-width: 767px) 64px, 120px"
            />
            {/* <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651ee87748428a3c2ccbcd2a_urbanic.png"
              alt="Urbanic"
              className="logo-image"
              sizes="(max-width: 767px) 64px, 120px"
            /> */}
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651ee877dd0417e42983d8b3_DEAR%20DONNA.png"
              alt="Dear Donna"
              className="logo-image"
              sizes="(max-width: 767px) 64px, 120px"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651ee877912d191888c4d992_The%20Game%20Palacio.png"
              alt="The Game Palacio"
              className="logo-image"
              
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651ee877e34c3f6323a09615_LOUIS%20BURGER.png"
              alt="Louis Burger"
              className="logo-image"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651ee877bb42222ea8f63360_PERNIA%20POP-UP.png"
              alt="Pernia Pop-up"
              className="logo-image"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651ee877e501a1138babd542_PH%20INDIA.png"
              alt="PH India"
              className="logo-image"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651ee877deb9fb4cedeb82b1_Kiehl%27s.png"
              alt="Kiehl's"
              className="logo-image"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651ee87789febb8d5264e680_GIN%20EXPLORERS%20CLUB.png"
              alt="Gin Explorers Club"
              className="logo-image"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651ee8775e1d6043d458ae16_EASE%20MY%20TRIP.png"
              alt="Ease My Trip"
              className="logo-image"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651ee87789febb8d5264e666_JADE%20FOREST.png"
              alt="Jade Forest"
              className="logo-image"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651ee87777fc8afd70925b21_Freakins.png"
              alt="Freakins"
              className="logo-image"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651ee877c73864e085289537_lamborghini.png"
              alt="Lamborghini"
              className="logo-image"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651ee876e8f0f5dbfc5f6d41_BIOTIQUE.png"
              alt="Biotique"
              className="logo-image"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651ee8765cfda45e134c7288_BOAT.png"
              alt="Boat"
              className="logo-image"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651ee876494f36508e9a8f8d_LAKME%20FASHION%20WEEK.png"
              alt="Lakme Fashion Week"
              className="logo-image"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651ee876b771fd2bb0d0e7c4_Burgrill%20.png"
              alt="Burgrill"
              className="logo-image"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651ee876af0c3b34a4ff07ab_COMIC%20CON.png"
              alt="Comic Con"
              className="logo-image"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651ee87689febb8d5264e628_All%20you%20can%20street.png"
              alt="All You Can Street"
              className="logo-image"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651ee8764ec0391f2150d4c0_DLF.png"
              alt="DLF"
              className="logo-image"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651ee8767995d740495be5a4_INDIA%20COCKTAIL%20WEEK.png"
              alt="India Cocktail Week"
              className="logo-image"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651afeb06a8005ab9c6264ed_NYKAA%20FASHION%201.png"
              alt="Nykaa Fashion"
              className="logo-image"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651afeb0bc4ec8935548ea48_CREP%20DOG%20CREW%201.png"
              alt="Crep Dog Crew"
              className="logo-image"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651afeb020b966440a3974cf_ZOMATO%201.png"
              alt="Zomato"
              className="logo-image"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651afeafca92a5fded597fba_PARADYSE%201.png"
              alt="Paradyse"
              className="logo-image"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651afeafe62e3d54e1762e61_KAMA%20AYURVEDA%201.png"
              alt="Kama Ayurveda"
              className="logo-image"
            />
            {/* Duplicate logos for continuous scrolling effect */}
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651ee87769a06981948ee82d_Suger.png"
              alt="Suger"
              className="logo-image"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651ee877cff322896334a697_Miraggio.png"
              alt="Miraggio"
              className="logo-image"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651ee87768a833018610d1cc_House%20of%20Candy.png"
              alt="House of Candy"
              className="logo-image"
            />
            {/* <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651ee87748428a3c2ccbcd2a_urbanic.png"
              alt="Urbanic"
              className="logo-image"
            /> */}
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651ee877dd0417e42983d8b3_DEAR%20DONNA.png"
              alt="Dear Donna"
              className="logo-image"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651ee877912d191888c4d992_The%20Game%20Palacio.png"
              alt="The Game Palacio"
              className="logo-image"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651ee877e34c3f6323a09615_LOUIS%20BURGER.png"
              alt="Louis Burger"
              className="logo-image"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651ee877bb42222ea8f63360_PERNIA%20POP-UP.png"
              alt="Pernia Pop-up"
              className="logo-image"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651ee877e501a1138babd542_PH%20INDIA.png"
              alt="PH India"
              className="logo-image"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651ee877deb9fb4cedeb82b1_Kiehl%27s.png"
              alt="Kiehl's"
              className="logo-image"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651ee87789febb8d5264e680_GIN%20EXPLORERS%20CLUB.png"
              alt="Gin Explorers Club"
              className="logo-image"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651ee8775e1d6043d458ae16_EASE%20MY%20TRIP.png"
              alt="Ease My Trip"
              className="logo-image"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651ee87789febb8d5264e666_JADE%20FOREST.png"
              alt="Jade Forest"
              className="logo-image"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651ee87777fc8afd70925b21_Freakins.png"
              alt="Freakins"
              className="logo-image"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651ee877c73864e085289537_lamborghini.png"
              alt="Lamborghini"
              className="logo-image"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651ee876e8f0f5dbfc5f6d41_BIOTIQUE.png"
              alt="Biotique"
              className="logo-image"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651ee8765cfda45e134c7288_BOAT.png"
              alt="Boat"
              className="logo-image"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651ee876494f36508e9a8f8d_LAKME%20FASHION%20WEEK.png"
              alt="Lakme Fashion Week"
              className="logo-image"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651ee876b771fd2bb0d0e7c4_Burgrill%20.png"
              alt="Burgrill"
              className="logo-image"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651ee876af0c3b34a4ff07ab_COMIC%20CON.png"
              alt="Comic Con"
              className="logo-image"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651ee87689febb8d5264e628_All%20you%20can%20street.png"
              alt="All You Can Street"
              className="logo-image"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651ee8764ec0391f2150d4c0_DLF.png"
              alt="DLF"
              className="logo-image"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651ee8767995d740495be5a4_INDIA%20COCKTAIL%20WEEK.png"
              alt="India Cocktail Week"
              className="logo-image"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651afeb06a8005ab9c6264ed_NYKAA%20FASHION%201.png"
              alt="Nykaa Fashion"
              className="logo-image"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651afeb0bc4ec8935548ea48_CREP%20DOG%20CREW%201.png"
              alt="Crep Dog Crew"
              className="logo-image"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651afeb020b966440a3974cf_ZOMATO%201.png"
              alt="Zomato"
              className="logo-image"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651afeafca92a5fded597fba_PARADYSE%201.png"
              alt="Paradyse"
              className="logo-image"
            />
            <img
              src="https://cdn.prod.website-files.com/64a835836dfc2c3cb2aad301/651afeafe62e3d54e1762e61_KAMA%20AYURVEDA%201.png"
              alt="Kama Ayurveda"
              className="logo-image"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
