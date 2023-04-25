import React, {useState} from 'react';

const Menu = (props) => {    
    
    const [currentSection, setCurrentSection] = useState('appetizer');
    const [underline, setUnderLine] = useState(null);
    const sectionMap = {
        "appetizer": "appetizer-section",
        "seafood": "seafood-section",
        "hot dishes": "hotDishes-section",
        "stir fry": "stirFry-section",
        "noodle soup": "noodleSoup-section",
        "bbq" : "bbq-section",
        "dim sum": "dimsum-section",
        "beverage" : "beverage-section"
    };

    const menuData ={
        "appetizer":[
            { name: "TOP BBQ MIX BUNS", price: 15.99, ingredients: "BBQ Pork, Chicken, Scallions, Hoisin Sauce, Steamed Buns"},
            { name: "DUCK BUN", price: 5.99, ingredients: "Duck, Hoisin Sauce, Scallions, Cucumber, Steamed Bun"},
            { name: "BBQ PORK (CHAR SIU) BUN", price: 5.50, ingredients:"Pork, Char Siu Sauce, Scallions, Steamed Bun, Soy Sauce"},
            { name: "CHICKEN BUN", price: 5.50, ingredients: "Chicken, Hoisin sauce, Scallions, Cucumber, Steamed Bun"},
            { name: "PORK BELLY BUN", price: 5.99, ingredients:  "Pork Belly, Hoisin sauce, Scallions, Cucumber, Steamed Bun"},
            { name: "SALT & PEPPER CHICKEN WINGS", price: 9.99, ingredients: "Chicken Wings, Salt, Black Pepper, Garlic, Scallions" }
        ],
        "seafood":[
            { name: "HOUSE SPECIAL LOBSTER", price: "MP", ingredients: "Lobster, Ginger, Scallions, Garlic, Soy Sauce"},
            { name: "PAN FRIED CHILE COD FISH", price: 31.99, ingredients:  "Cod Fish, Chili Peppers, Soy Sauce, Ginger, Garlic"},
            { name: "BRAISED SHRIMP WITH MAGGI SAUCE", price: 25.99, ingredients: "Shrimp, Maggi Sauce, Garlic, Soy Sauce, Sugar"},
            { name: "SALT AND PEPPER SHRIMP", price: 25.99, ingredients: "Shrimp, Salt, Black Pepper, Garlic, Scallions"},
            { name: "WALNUT SHRIMP", price: 25.99,ingredients: "Shrimp, Walnuts, Mayo, Honey, Sweetened Condensed Milk"},
            { name: "SHRIMP WITH ASPARAGUS", price: 25.99, ingredients: "Shrimp, Asparagus, Garlic, Soy Sauce, Sugar"}
        ],
        "hot dishes":[
            { name: "HOUSE SPECIAL DICED BEEF TENDERLOIN", price: 23.99, ingredients: "Beef Tenderloin, Green Bell Pepper, Red Bell Pepper, Onion, Black Pepper Sauce" },
            { name: "BEEF WITH GREEN ONION", price: 18.99, ingredients: "Beef, Green Onions, Soy Sauce, Sugar, Ginger"},
            { name: "BEEF W/ SCRAMBLED EGG", price: 18.99, ingredients: "Beef, Eggs, Soy Sauce, Sugar, Garlic"},
            { name: "SHRIMP W/ SCRAMBLED EGG", price: 18.99, ingredients: "Shrimp, Eggs, Soy Sauce, Sugar, Garlic"},
            { name: "SWEET & SOUR CHICKEN/PORK", price: 18.99 , ingredients: "Chicken or Pork, Pineapple, Bell Pepper, Onion, Sweet and Sour Sauce"},
            { name: "KUNG PAO CHICKEN", price: 18.99 , ingredients: "Chicken, Peanuts, Bell Pepper, Onion, Kung Pao Sauce"}
        ],
        "stir fry":[
            { name: "BEEF CHOW FUN", price: 15.99 , ingredients: "Beef, Rice Noodles, Bean Sprouts, Green Onions, Soy Sauce"},
            { name: "SHRIMP CHOWFUN W/ THAI SAUCE", price: 15.99 , ingredients: "Shrimp, Rice Noodles, Thai Basil, Mint, Fish Sauce"},
            { name: "SEAFOOD CHOW MEIN", price: 17.99, ingredients: "Mixed Seafood, Chow Mein Noodles, Broccoli, Carrots, Oyster Sauce"},
            { name: "SHRIMP FRIED RICE", price: 15.99, ingredients: "Shrimp, Rice, Eggs, Peas, Carrots"},
            { name: "YANG CHOW FRIED RICE", price: 15.99 , ingredients: "Chicken, Shrimp, Rice, Eggs, Scallions"},
            { name: "BEEF FRIED RICE", price: 15.99 , ingredients: "Beef, Rice, Eggs, Peas, Carrots"}
        ],
        "noodle soup":[
            { name: "PHO-DINO BONE BEEF", price: 15.99 , ingredients: "Beef Bones, Rice Noodles, Bean Sprouts, Cilantro, Basil"},
            { name: "PHO SHRIMP", price: 13.99 , ingredients: "Shrimp, Rice Noodles, Bean Sprouts, Cilantro, Lime"},
            { name: "PHO-OX TAIL", price: 16.99, ingredients: "Ox Tail, Rice Noodles, Bean Sprouts, Cilantro, Star Anise"},
            { name: "WONTON NOODLE SOUP", price: 11.99, ingredients:  "Wontons, Noodles, Bok Choy, Scallions, Chicken Broth"},
            { name: "ROAST DUCK NOODLE SOUP", price: 11.99 , ingredients: "Roast Duck, Noodles, Bok Choy, Scallions, Chicken Broth"},
            { name: "CHAR SIU NOODLE SOUP", price: 10.99, ingredients: "BBQ Pork, Noodles, Bok Choy, Scallions, Chicken Broth"}
        ],
        "bbq":[
            { name: "WHOLE BEIJING DUCK", price: 46.99 , ingredients: "Duck, Honey, Soy Sauce, Hoisin Sauce, Five Spice Powder"},
            { name: "HALF BEIJING DUCK", price: 23.99 , ingredients: "Duck, Honey, Soy Sauce, Hoisin Sauce, Five Spice Powder"},
            { name: "WHOLE BONELESS HOUSE SPECIAL CHICKEN", price: 35.99, ingredients: "Chicken, Garlic, Ginger, Soy Sauce, Oyster Sauce"},
            { name: "HALF BONELESS HOUSE SPECIAL CHICKEN", price: 18.99 , ingredients: "Chicken, Garlic, Ginger, Soy Sauce, Oyster Sauce"},
            { name: "ROAST DUCK", price: 32.99 , ingredients: "Duck, Honey, Soy Sauce, Ginger, Scallions"},
            { name: "CRISPY PORK BELLY", price: 20.99, ingredients: "Pork Belly, Soy Sauce, Rice Vinegar, Garlic, Sugar"}
        ],
        "dim sum":[
            { name: "HAR GOW", price: 6.25 , ingredients: "Shrimp, Bamboo Shoots, Water Chestnuts, Garlic, Ginger"},
            { name: "SHU MAI", price: 6.25  , ingredients: "Ground Pork, Shrimp, Shiitake Mushrooms, Soy Sauce, Sesame Oil"},
            { name: "STEAMED SPARERIBS", price: 5.75, ingredients: "Pork Spareribs, Black Bean Sauce, Garlic, Ginger, Rice Wine"},
            { name: "CHICKEN FEET", price: 5.75 , ingredients: "Chicken Feet, Black Bean Sauce, Soy Sauce, Rice Wine, Sugar"},
            { name: "CHAR-SIU BAO", price: 5.75 , ingredients: "Pork, Hoisin Sauce, Oyster Sauce, Soy Sauce, Sugar"},
            { name: "XIAO LONG BAO", price: 5.50, ingredients: "Ground Pork, Soy Sauce, Rice Vinegar, Ginger, Garlic"}
        ],
        "beverage":[
            { name: "BROWN SUGAR TEA W/ BOBA", price: 5.50, ingredients: "Brown Sugar, Black Tea, Tapioca Pearls, Milk, Ice"},
            { name: "JASMINE MILK TEA", price: 5.50 , ingredients: "Jasmine Tea, Milk, Sugar, Ice, Tapioca Pearls"},
            { name: "PASSION FRUIT GREEN TEA", price: 5.50, ingredients: "Passion Fruit Syrup, Green Tea, Sugar, Ice, Lemon"},
            { name: "STRAWBERRY SMOOTHIE", price: 5.50, ingredients: "Strawberries, Milk, Sugar, Ice, Whipped Cream"},
            { name: "VIETNAMESE COFFEE", price: 5.50 , ingredients: "Coffee, Condensed Milk, Ice, Water"},
            { name: "DRY PLUM (XI MUOI)", price: 4.00, ingredients: "Pork Belly, Soy Sauce, Rice Vinegar, Garlic, Sugar"}
        ],
       
        
    }
    const handleClick = (section) => {
        setCurrentSection(section);
        setUnderLine(section);
    }

    const sectionButtons = Object.keys(sectionMap).map((section) => (
        <button
          className='border-0 text-gray-500 hover:font-bold' 
          key={section}
          onClick={() => handleClick(section)}
          style={{ textDecoration: underline === section ? "underline" : "none" }}
        >
          {section.toUpperCase()}
        </button>
    ));
    
    const firstSectionDivs = Object.keys(sectionMap).map((section) => {
        const sectionItems = menuData[section] || [];
        const sectionItemsCount = sectionItems.length;
        const firstHalfItems = sectionItems.slice(0, Math.ceil(sectionItemsCount / 2));
      
        return (
          <div key={section}>
            <div
              id={sectionMap[section]}
              style={{ display: currentSection === section ? "block" : "none" }}
            >
              {firstHalfItems.map((item) => (
                <div className="text-gray-500" key={item.name}>
                  <p>
                    <span className="font-bold text-md sm:text-xl">{item.name}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>${item.price}</span>
                  </p>
                  <p className="text-sm pb-6 h-20">{item.ingredients}</p>
                </div>
              ))}
            </div>
          </div>
        );
      });
      
    const secondSectionDivs = Object.keys(sectionMap).map((section) => {
        const sectionItems = menuData[section] || [];
        const sectionItemsCount = sectionItems.length;
        const mid = Math.ceil(sectionItemsCount / 2)
        const secondHalfItems = sectionItems.slice(mid, sectionItemsCount);
        
        return (
            <div key={section}>
            <div
                id={sectionMap[section]}
                style={{ display: currentSection === section ? "block" : "none" }}
            >
                {secondHalfItems.map((item) => (
                <div className="text-gray-500" key={item.name}>
                    <p>
                    <span className="font-bold text-md sm:text-xl">{item.name}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>${item.price}</span>
                    </p>
                    <p className="text-sm pb-6 h-20">{item.ingredients}</p>
                </div>
                ))}
            </div>
            </div>
        );
    });

    
    

    return (
        <div id='menu' className='md:pt-30 md:pb-30 pt-20 pb-20 flex justify-centertext-black/50  flex-col '>
            <div className=' justify-center pb-20 grid sm:flex'>
                {sectionButtons}
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 sm:justify-items-center justify-start pl-6 gap-8 sm:gap-4 lg:gap-0' >
                <div className='lg:ml-62 ml-0 pl-0 lg:pl-80'>{firstSectionDivs}</div>
                <div className='lg:mr-62 mr-0 pr-0 lg:pr-80'>{secondSectionDivs}</div>
            </div>
            

        </div>
    );
}

export default Menu;