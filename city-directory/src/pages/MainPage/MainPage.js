import React from "react";
import './MainPage.css';
import { Link } from 'react-router-dom';

export default class MainPage extends React.Component {
   
   render () {
      return (
         <main>
            <h1>О сайте</h1>
            <div className='description'>
               <div className="desc-img">
                  <img src='https://cdn-icons-png.flaticon.com/512/1042/1042833.png'></img>
               </div>
               <p>Сайт предоставляет возможность посмотреть условия проживания в крупнейших городах России, а также сравнить их между собой.</p>
            </div>
            <div className='description'>
               <div className="desc-img">
                  <img src='https://cdn-icons.flaticon.com/png/512/2989/premium/2989542.png?token=exp=1646563875~hmac=a68fdcc9e07946e330bf3d70ec20209c'></img>
               </div>
               <p>Вы можете воспользоваться удобным поиском и фильтрацией, чтобы сразу найти подходящий город, а можете просмотреть все города.</p>
            </div>
            <Link to='/cities'><button className='move-to-cities-button'>Перейти к городам</button></Link>
         </main>
      )
   }
}