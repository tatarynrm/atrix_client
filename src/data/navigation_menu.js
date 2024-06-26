import hotelImg from '../assets/png/hotel.png';
import excursionImg from '../assets/png/excursions.png';
import carImg from '../assets/png/car.png';
import transferImg from '../assets/png/transfer.png';
import boatImg from '../assets/png/boat.png';
import entertaimentImg from '../assets/png/entertaiment.png';
import restaurantsImg from '../assets/png/restorant.png';
import adventureImg from '../assets/png/diving.png';
import spaImg from '../assets/png/spa.png';
import mobileImg from '../assets/png/mobile.png';


export const navigation_menu = [ 
    {header_title:'Hotel',main_title:"Hotel Boking",link:'/hotel',img:hotelImg,settings:{bacgroundColor:'#B5E9FF',borderRadius:'20px'}},
    {header_title:'Escursions',main_title:"Excursions",link:'/excursions',img:excursionImg,settings:{bacgroundColor:'#FFF5E7',borderRadius:'80px'}},
    {header_title:'Rent a car',main_title:"Rent a car",link:'/rent-car',img:carImg,settings:{bacgroundColor:'#C0D8FF',borderRadius:'20px'}},
    {header_title:'Transfer',main_title:"Transfer",link:'/transfer',img:transferImg,settings:{bacgroundColor:'#FDD1BF',borderRadius:'20px'}},

    {header_title:'Boat rental',main_title:"Boat Rental",link:'/boat-rental',img:boatImg,settings:{bacgroundColor:'#D4D2F1',borderRadius:'20px'}},
    {header_title:'Entertaiment',main_title:"Entertainment",link:'/entertaiment',img:entertaimentImg,settings:{bacgroundColor:'#FFF5E7',borderRadius:'80px'}},
    {header_title:'Restaraunts',main_title:"Restaurants",link:'/restaraunts',img:restaurantsImg,settings:{bacgroundColor:'#CBF3B3',borderRadius:'80px'}},
    {header_title:'Adventure',main_title:"Adventure",link:'/adventure',img:adventureImg,settings:{bacgroundColor:'#6DB8FD',borderRadius:'20px'}},
    {header_title:'Spa',main_title:"Spa",link:'/spa',img:spaImg,settings:{bacgroundColor:'#FFF5E7',borderRadius:'80px'}},
    {header_title:'Mobil',main_title:"Mobil Recharge",link:'/hotel',img:mobileImg,settings:{bacgroundColor:'#E8EEFF',borderRadius:'20px'}},
    {header_title:null,main_title:"Real Estte Company",link:'/real-estate-company',img:hotelImg,settings:{bacgroundColor:'#A1DCEF',borderRadius:'20px'},sub_title:'Your Property on the Costa del Sol'},
]