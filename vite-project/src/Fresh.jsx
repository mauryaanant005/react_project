import React from 'react';
import Product from './Product';
import "./Product.css";
import { useNavigate } from 'react-router-dom';

const Fresh = () => {
  const navigate = useNavigate();

  function handleClick1() {
    navigate('/Home');
  }

  return (
    <div>
      <div className="home__row">
        <Product
          id="105"
          title="Tomatoes"
          price={120}
          rating={4}
          description="Juicy and ripe tomatoes, ideal for salads and cooking."
          image="https://imgs.search.brave.com/O7eO5P5RZnNLk6U9vtw1gaXom_w4s_ze6NESJNW3ZM4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzM0LzYxLzc2/LzM2MF9GXzM0NjE3/NjY5X3A5cjRHclI4/M1RCRVhDWnJSbnk2/QWFpZ3FQVUVQRnA1/LmpwZw"
        />
        <Product
          id="106"
          title="Potatoes"
          price={60}
          rating={4}
          description="Versatile and essential potatoes for your kitchen."
          image="https://imgs.search.brave.com/YkQQ7KuGRU_LfAgZydnlRKxaH-rxKhfxq0Wa95G_DLg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE0/MjQxNjEwL3Bob3Rv/L2JhYnktcG90YXRv/ZXMuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWFta0ZuaDdI/RmlabDV3Qno5N2Nr/WVFlUHlaNHB6YXhH/enM5d2hfN1d1b1U9"
        />
      </div>

      <div className="home__row">
        <Product
          id="107"
          title="Spinach"
          price={45}
          rating={5}
          description="Fresh spinach leaves, packed with nutrients."
          image="https://imgs.search.brave.com/H7sKmqKn9fLt1ByknwTYdLuNcGW_-Un0prBzSpIel0M/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc3/NDIzMDc4L3Bob3Rv/L3NwaW5hY2gtb24t/d2hpdGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTEtWWtQ/OElZNWF3cmU1aVZF/YUM4Q0tTdHMyMWZN/Mjd4Y0ZWMmZreC1t/eXc9"
        />
        <Product
          id="108"
          title="Bell Peppers"
          price={180}
          rating={4}
          description="Colorful and crunchy bell peppers, great for cooking."
          image="https://imgs.search.brave.com/-SiHQIvnrV4Rxkt2Ix679CdCwBceMImwovOhyCBIw9k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcx/MjgxMzY0L3Bob3Rv/L2JlbGwtcGVwcGVy/cy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9UHBycDBjQzh3/ODZ2VHRUXzhDS1pv/bHliU25HLWcxOGFY/S2U4OHUyVi01dz0"
        />
      </div>

      <div className="home__row">
        <Product
          id="109"
          title="Cucumbers"
          price={90}
          rating={5}
          description="Cool and refreshing cucumbers, perfect for salads."
          image="https://imgs.search.brave.com/hNVaZOBbARYUA0V-5vm7GLP43pKKtdkQUM-q7kLvdHU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzQ1Lzg1LzQw/LzM2MF9GXzg0NTg1/NDAxOV9VTXdBR3ly/VXRqNFdxdUkxZkVV/YVRJVVdpY0Q5Z1pG/dC5qcGc"
        />
        <Product
          id="110"
          title="Avocados"
          price={300}
          rating={5}
          description="Creamy and delicious avocados, ideal for guacamole."
          image="https://imgs.search.brave.com/t77UYCZU4Ntl-6blgI1Of2NeJKonloXKOykykhluppQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA3/OTc3OTI2OC9waG90/by9hdm9jYWRvLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz16/SGlQalBKZEJ5NXhG/b3Nnc2psVUxIZFds/eTJtTkpQOTdpcGZN/czU0MzRjPQ"
        />
      </div>

      <div className="home__row">

      <Product
          id="112"
          title="Broccoli"
          price={100}
          rating={4}
          description="Fresh and nutritious broccoli, great for steaming and stir-frying."
          image="https://imgs.search.brave.com/wJjC7oqjjMLDi4gaZ_-c6bCGmueU5_WdpTskWSuMUXc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzM4LzU5LzY1/LzM2MF9GXzEzODU5/NjUyOF9kRzdKOHhy/RVhST3pHa0UwUENn/S2pEV3ljbFlVV2Z6/ei5qcGc"
        />
        <Product
          id="111"
          title="Carrots"
          price={50}
          rating={4}
          description="Crunchy and sweet carrots, perfect for snacking and cooking."
          image="https://imgs.search.brave.com/yX1ORxEjvp1Ya4ihOw5vrqPSuckigJj0YSTo47p_YZY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzgwLzk2LzE3/LzM2MF9GXzgwOTYx/NzM5X2hlcDFVWmFR/UnN5NVdRT1lVM2pr/T3I1Q0I3QTZ4YzNV/LmpwZw"
        />
      </div>

      <div className="home__row">
        <Product
          id="113"
          title="Bananas"
          price={60}
          rating={5}
          description="Sweet and ripe bananas, perfect for a quick snack."
          image="https://imgs.search.brave.com/-j071DrkyqNt9pU9leCOfw36KZAsh_34nTbSOup9Ptk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQw/MDA1NzUzMC9waG90/by9iYW5hbmFzLWlz/b2xhdGVkLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1LTHRW/NHF1Q254d1dPT3hf/dVVKVFFVVGw5VlZK/ekE3MnlrclFsYzhQ/NmEwPQ"
        />
        <Product
          id="114"
          title="Apples"
          price={150}
          rating={5}
          description="Crisp and juicy apples, great for snacking and baking."
          image="https://imgs.search.brave.com/N2NlSECtC4vOpp7Mv8TUZFdKfdggpHxmmgFVpEUbi0E/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM2/NTA5OTg2OS9waG90/by9zaXgtYXBwbGVz/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1LeDlqTnZFRVQ1/RVJyN29ITkZNeHJv/VGM1NEsxTmdrN1Ix/Qlc5SUNYMlBVPQ"
        />
      </div>

      <div className="home__row">
        <Product
          id="115"
          title="Oranges"
          price={120}
          rating={4}
          description="Fresh and tangy oranges, perfect for juicing and snacking."
          image="https://imgs.search.brave.com/knURm_BwprHAAz6qJ4ufGhUZ9Sv9W3VcUg5ii5x22u8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgy/MzU1Nzc4L3Bob3Rv/L29yYW5nZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9VDVt/LWpER2hOc0dfNjR2/Y2FtOG8tNENzNVpF/TDkwUWxYQXVZMlZD/WDc0MD0"
        />
        <Product
          id="116"
          title="Grapes"
          price={180}
          rating={4}
          description="Juicy and sweet grapes, great for snacking and salads."
          image="https://imgs.search.brave.com/8Zn63sjAmdDshE_eGpR463OEV3Ey6qsZk_PqIhC29Ow/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzkwLzQwLzQy/LzM2MF9GXzkwNDA0/MjA4X3lNdVV6MXVK/c0dUdklKaHo5V3pU/ZWhPQm5qSlpuVEZj/LmpwZw"
        />
      </div>

      <div className="home__row">
        <Product
          id="117"
          title="Strawberries"
          price={250}
          rating={5}
          description="Fresh and sweet strawberries, perfect for desserts and snacks."
          image="https://imgs.search.brave.com/SmuJXOILGrELuIo_Es8Lsm9ic7NWOU5PWXiv8zK27yE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjky/NTQyMzk0L3Bob3Rv/L3N0cmF3YmVycnku/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVlMUUgyb2hjdkVJ/M0hCWDNlenJ6Vkoy/RFlSMndla2RKNnNz/YjZ5RjZiOTA9"
        />
        <Product
          id="118"
          title="Blueberries"
          price={300}
          rating={5}
          description="Juicy and antioxidant-rich blueberries, great for smoothies and snacks."
          image="https://imgs.search.brave.com/A279mUIVdlgocwc2kB6Dam0bJmLOPbW2MMI4UD-vj0s/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc2/ODg4Nzg3L3Bob3Rv/L2JsdWViZXJyeS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/bHRwMHp1RmwxQ0Ji/dnBLV3B0UmZFYUhh/N0c4Uk1zS2pOZkh0/NzBRQkk0RT0"
        />
      </div>

      <div className="home__row">
        <Product
          id="119"
          title="Pineapples"
          price={350}
          rating={4}
          description="Tropical and sweet pineapples, ideal for juices and desserts."
          image="https://imgs.search.brave.com/0cB-OHfxz_b8qyr8H9STW2nNx1_Ej-DmklcqNkquEEQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODYw/NTY1NTcvcGhvdG8v/bWluaWF0dXJlLXBp/bmVhcHBsZXMtb24t/d2hpdGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPXZwa25x/Vmp2SG9LTENibExf/Q21LZEl1NjBFYUpx/UmFRR3N3djlQVUQz/Wmc9"
        />
        <Product
          id="120"
          title="Mangoes"
          price={400}
          rating={5}
          description="Ripe and flavorful mangoes, perfect for smoothies and desserts."
          image="https://imgs.search.brave.com/UJ6o2LH0XPbmMiS7MnsJc3PbtMptV5g-UI-X2x3c6MI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzAxLzA0LzMz/LzM2MF9GXzcwMTA0/MzM0M18wc3BZejNl/VTB0cjJWbjhvdEtx/Q0xweHRKc3B6Tmxy/Vy5qcGc"
        />
      </div>


      <button className="product__button" onClick={handleClick1}>Go to Home Page →</button>
    </div>
  );
};

export default Fresh;
