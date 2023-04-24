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
        "bbq" : "bbq-section"
    };

    const menuData ={
        "appetizer":[
            { name: "TOP BBQ MIX BUNS", price: 15.99 },
            { name: "DUCK BUN", price: 5.99 },
            { name: "BBQ PORK (CHAR SIU) BUN", price: 5.50},
            { name: "CHICKEN BUN", price: 5.50},
            { name: "PORK BELLY BUN", price: 5.99 },
            { name: "SALT & PEPPER CHICKEN WINGS", price: 9.99 }
        ],
        "seafood":[
            { name: "HOUSE SPECIAL LOBSTER", price: "mp"},
            { name: "PAN FRIED CHILE CODE FISH", price: 31.99 },
            { name: "BRAISED SHRIMP WITH MAGGI SAUCE", price: 25.99},
            { name: "SALT AND PEPPER SHRIMP", price: 25.99},
            { name: "WALNUT SHRIMP", price: 25.99 },
            { name: "SHRIMP WITH ASPARAGUS", price: 25.99 }
        ],
        "hot dishes":[
            { name: "HOUSE SPECIAL DICED BEEF TENDERLOIN", price: 23.99 },
            { name: "BEEF WITH CREEN ONION", price: 18.99 },
            { name: "BEEF W/ SCRAMBLED EGG", price: 18.99},
            { name: "SHRIMP W/ SCRAMBLED EGG", price: 18.99},
            { name: "SWEET & SOUR CHICKEN/PORK", price: 18.99 },
            { name: "KUNG PAO CHICKEN", price: 18.99 }
        ],
        "stir fry":[
            { name: "BEEF CHOW FUN", price: 15.99 },
            { name: "SHRIMP CHOWFUN W/ THAI SAUCE", price: 15.99 },
            { name: "SEAFOOD CHOW MEIN", price: 17.99},
            { name: "SHRIMP FRIED RICE", price: 15.99},
            { name: "YANG CHOW FRIED RICE", price: 15.99 },
            { name: "BEEF FRIED RICE", price: 15.99 }
        ],
        "noodle soup":[
            { name: "PHO-DINO BONE BEEF", price: 15.99 },
            { name: "PHO SHRIMP", price: 13.99 },
            { name: "PHO-OX TAIL", price: 16.99},
            { name: "WONTON NOODLE SOUP", price: 11.99 },
            { name: "ROAST DUCK NOODLE SOUP", price: 11.99 },
            { name: "CHAR SIU NOODLE SOUP", price: 10.99}
        ],
        "bbq":[
            { name: "WHOLE BEIJING DUCK", price: 46.99 },
            { name: "HALF BEIJING DUCK", price: 23.99 },
            { name: "WHOLE BONELESS HOUSE SPECIAL CHICKEN", price: 35.99},
            { name: "HALF BONELESS HOUSE SPECIAL CHICKEN", price: 18.99 },
            { name: "ROAST DUCK", price: 32.99 },
            { name: "CRISPY PORK BELLY", price: 20.99}
        ],
       
        
    }
    const handleClick = (section) => {
        setCurrentSection(section);
        setUnderLine(section);
    }

    const sectionButtons = Object.keys(sectionMap).map((section) => (
        <button
          className='border-0'
          key={section}
          onClick={() => handleClick(section)}
          style={{ textDecoration: underline === section ? "underline" : "none" }}
        >
          {section.toUpperCase()}
        </button>
    ));

    const sectionDivs = Object.keys(sectionMap).map((section) => (
        <div>
           
            <div key={section}
            id={sectionMap[section]}
            style={{ display: currentSection === section ? "block" : "none" }}>
                {menuData && menuData[section] && menuData[section].map((item)=> (
                    <div key={item.name}>
                        
                        <p><span className='font-bold text-xl'>{item.name}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className='text-gray'>${item.price}</span>
                        </p>

                    </div>
                ))}
            </div>   
        </div>
  
    ));
    
    

    return (
        <div id='menu' className='pt-40 pb-40 flex justify-centertext-black/50  flex-col '>
            <div className='flex justify-center pb-10'>
                {sectionButtons}
            </div>
            <div className='flex justify-center text-center flex-row' >
                {sectionDivs}
            </div>
            

        </div>
    );
}

export default Menu;