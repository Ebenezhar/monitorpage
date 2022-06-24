import React from 'react'
import ProductCard from './productCard';

function Products() {
  let products = [
    {
      id:1,
      name: "Woodykraft Ecofriendly Wooden Xylophone Kids First Musical Sound Instrument Toys 8 Note ",
      price: 329,
      age: "3 months - 10 years",
      img:"https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id:2,
      name: "Toyshine Concept Musical and 3D Lights Kids  , Toy for 2 to 5 Year Kids Baby Toy, Multicolor",
      price: 479,
      age: "3 years and up",
      img:"https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id:3,
      name: "BabyGo Nara Kids Toy Slide Foldable at Home and School (140 cm x 80 cm x 60 cm)",
      price: 2199,
      age: "12 months - 6 years",
      img:"https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id:4,
      name: "TUM TUM Building Blocks Set Educational Game for Kids Toys, Toys for Boys, Girls, Children Toys",
      price: 434,
      age: "12 months - 10 years",
      img:"https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id:5,
      name: "Toyshine Wooden The Flippy Busy Board with 10 Busy Activities | Big Size Montessori Gifts Toys",
      price: 799,
      age: "24 months - 5 years",
      img:"https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id:6,
      name: "PLAYTOOL Twist-Free Wheel Magic Swing Car Ride-On Toy with Back Support for Kids)",
      price: 509,
      age: "3 months - 5 years",
      img:"https://images.unsplash.com/photo-1599623560574-39d485900c95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id:7,
      name: "KRIDEZ Mini Travel Puzzles for Kids, Wood Intelligence Brain Games Building Blocks Teasers",
      price: 650,
      age: "3 months - 8 years",
      img:"https://images.unsplash.com/photo-1556012018-50c5c0da73bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id:8,
      name: "GRAVITY Building Blocks for Kids, Blocks for Kids, Puzzles Games 200 Pcs Bricks Toys Sets with Wheel",
      price: "Mugundhan",
      age: "3 months - 7 years",
      img:"https://images.unsplash.com/photo-1611604548018-d56bbd85d681?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
   
  ]

  return (
    <div className='container'>
      <div className='row'>
        {
          products.map((product) => {
            return (<ProductCard data={product}/>)
          })
        }

      </div>
    </div>
  )
}

export default Products;