import React from 'react'
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"
import vg from "../assets/2.webp"

const Home = () => {
  return (
    <>
        <div className='home' id='home'>
    <main>
        <h1>Fanstastic beast</h1>
        <p>solution toall your problems</p>
    </main>
    </div>
    <div className='home2'>
        <img src={vg} alt="Grphics" />
        <div>
            <p>
            Lorem Ipsum is simply dummy text of the printing a
            nd typesetting industry. Lorem Ipsum has been the
             industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it 
             PageMaker including versions of Lorem Ipsum.
            </p>
        </div>

    </div>

    <div className='home3' id='about'>
    <div>
    <h1>Who we are ?</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rutrum orci non odio mollis congue
    . Proin a ligula luctus, auctor purus vitae, fermentum tellus. Phasellus consequat ex eu eros tempor tempo
    r. In egestas lacus augue. Nullam placerat sapien eu leo cursus, eget consectetur lectus congue. Integer 
    at neque quis sem rutrum fermentum. Ut euismod augue in mattis sagittis. Praesent odio odio, volutpat ac 
    nisl eget, ultricies ornare risus. Maecenas finibus finibus justo, ut pellentesque turpis elementum a. Et
    iam purus metus, rutrum in dui et, scelerisque placerat dui. Nunc blandit tellus vitae dolor imperdiet ac
    cumsan. Maecenas vel blandit arcu, ut luctus nibh. Orci varius natoque penatibus et magnis dis parturient 
    montes, nascetur ridiculus mus. Cras ullamcorper fermentum odio, at rutrum erat. Morbi vitae rutrum diam.
     Curabitur scelerisque metus sed nisi vehicula luctus.
    Ut gravida sollicitudin sem sed ultna aliquam ultrices. Nu
     llam lectus nisi, ullamcorper nec accumsan vel, ullamcorperavida. Aliquam a purus lorem.</p>
</div>

    </div>

    <div className="home4" id='brands'>
    <div>
        <h1>Brands</h1>

        <article>
            <div style={{
                animationDelay:"0.3s"
            }}> 
            <AiFillGoogleCircle/>
            <p>Google</p>

            </div>
            <div style={{
                animationDelay:"0.5s"
            }}> 
            <AiFillAmazonCircle/>
            <p>Amazon</p>
            </div>

            <div style={{
                animationDelay:"0.7s"
            }}> 
            <AiFillYoutube/>
            <p>Youtube</p>

            </div>
            <div style={{
                animationDelay:"0.9s"
            }}> 
            <AiFillInstagram/>
            <p>Instagram</p>
            </div>

        </article>


    </div>

    </div>
    </>
  )
}

export default Home