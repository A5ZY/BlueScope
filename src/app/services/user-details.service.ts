import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  products = [{
    name: 'Garnier Face Cream',
    price: '324',
    description: 'The Garnier Bright Complete Vitamin C Serum Cream UV Helps To Reverse Signs Of Sun Damage.',
    image: 'https://plus.unsplash.com/premium_photo-1675431443027-ad1f46c93c8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=716&q=80',
    longDesc: 'Garnier is an international haircare and skincare brand with sub-brands in four categories and 7 areas of expertise. With products formulated to meet the needs of women everywhere in the world, we offer innovative, affordable care solutions.'
  },
  {
    name: 'Addidas',
    price: '1000',
    description: 'The Garnier Bright Complete Vitamin C Serum Cream UV Helps To Reverse Signs Of Sun Damage.',
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
    longDesc: 'The Sony Walkman cassette player revolutionised the way that we listen to music. It enabled people to create soundtracks to their lives in ways that hadnt been possible before. The fact that you could use your Walkman anywhere changed that; music had never been so personal.'
  },
  {
    name: 'MacBook Pro',
    price: '324',
    description: 'The new Mac Pro is a game-changing combination of Apple silicon performance and PCIe expansion for specialised workflows. ',
    image: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
    longDesc: 'Mac Pro is a series of workstations and servers for professionals made by Apple Inc. since 2006. The Mac Pro, by some performance benchmarks, is the most powerful computer that Apple offers. It is one of four desktop computers in the current Mac lineup, sitting above the Mac Mini, iMac and Mac Studio.'
  },
  {
    name: 'iWatch',
    price: '3324',
    description: 'Apple Watch is a wearable smartwatch that allows users to accomplish a variety of task',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
    longDesc: 'Series 7 is the most durable Apple Watch ever built. Fundamental design changes were needed to achieve the vision of the larger Always-On Retina display. These same innovations also helped make the most crack-resistant front crystal yet. Crack ResistantOur strongest front crystal ever.'
  },
  {
    name: 'EarPods',
    price: '324',
    description: 'AirPods deliver the wireless headphone experience, reimagined. Just pull them out of the Lightning Charging Case',
    image: 'https://images.unsplash.com/photo-1585155770447-2f66e2a397b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
    longDesc: 'There are two microphones inside each AirPod, one facing outward at ear level and another at the bottom of the stem. Each AirPod weighs 0.14 oz (4.0 g), and its charging case weighs 1.34 oz (38 g). The AirPods are capable of holding a charge of around five hours.'
  },
  {
    name: 'Men Special',
    price: '1324',
    description: 'The Garnier Bright Complete Vitamin C Serum Cream UV Helps To Reverse Signs Of Sun Damage.',
    image: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80',
    longDesc: 'The list of accessory types includes, in alphabetical order, bags, beard care items, belts, bow ties, bracelets, clear lens glasses, cufflinks, earrings, gloves, hats, lapel pins, necklaces, neckties, pocket squares, rings, scarves, shaving products, sunglasses, suspenders, tie clips, wallets, and watches.'
  },
  {
    name: 'Perfume',
    price: '3204',
    description: 'The Garnier Bright Complete Vitamin C Serum Cream UV Helps To Reverse Signs Of Sun Damage.',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=704&q=80',
    longDesc: 'A perfume is a liquid mixture used to emit a pleasant odour. It is formed from fragrant essential oils derived from plants and spices or synthetic aromatic compounds. Cosmetic fragrances applied to a persons body to emit a pleasant smell include perfume, cologne, and aftershave'
  },
  {
    name: 'Watch',
    price: '3324',
    description: 'The Garnier Bright Complete Vitamin C Serum Cream UV Helps To Reverse Signs Of Sun Damage.',
    image: 'https://images.unsplash.com/photo-1593998066526-65fcab3021a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    longDesc: 'Series 7 is the most durable Apple Watch ever built. Fundamental design changes were needed to achieve the vision of the larger Always-On Retina display. These same innovations also helped make the most crack-resistant front crystal yet. Crack ResistantOur strongest front crystal ever.'
  },
  {
    name: 'lady Bird',
    price: '324',
    description: 'The Garnier Bright Complete Vitamin C Serum Cream UV Helps To Reverse Signs Of Sun Damage.',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
    longDesc: 'High-heeled shoes, also known as high heels, are a type of shoe with an upward-angled sole. The heel in such shoes is raised above the ball of the foot. High heels cause the legs to appear longer, make the wearer appear taller, accentuating the calf muscle.'
  },
  {
    name: 'Men Clogs',
    price: '3224',
    description: 'The Garnier Bright Complete Vitamin C Serum Cream UV Helps To Reverse Signs Of Sun Damage.',
    image: 'https://images.unsplash.com/photo-1612188842101-f976582906fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
    longDesc: 'Clogs were incredibly strong and hard wearing, and relatively cheap. These made them an attractive option for working people, who needed reliable footwear at a price they could afford.'
  },

  {
    name: 'Running Shoes',
    price: '3124',
    description: 'Running shoes tend to be lighter in weight but heavier in cushioning, especially for the heel and the toe',
    image: 'https://images.unsplash.com/photo-1609250291996-fdebe6020a8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    longDesc: 'Running shoes tend to be lighter in weight but heavier in cushioning, especially for the heel and the toe. Since running is a more intense sport, runners tend to exert more energy. Your feet get hot, and most running shoes are made of mesh to allow air to move freely. This mesh also keeps the shoe lighter.'
  },
  {
    name: 'Walkman',
    price: '3240',
    description: 'The Garnier Bright Complete Vitamin C Serum Cream UV Helps To Reverse Signs Of Sun Damage.',
    image: 'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
    longDesc: 'The Sony Walkman cassette player revolutionised the way that we listen to music. It enabled people to create soundtracks to their lives in ways that hadnt been possible before. The fact that you could use your Walkman anywhere changed that; music had never been so personal.'
  },
  ]
  constructor() { }
  getUser() {
    const data = localStorage.getItem('userDetail');
    return data;
  }
  setUser(data: any) {
    localStorage.setItem('userDetail', data);
  }

}
