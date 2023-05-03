
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import { AiOutlineInstagram,AiFillTwitterCircle } from "react-icons/ai"
import { FaFacebook } from "react-icons/fa"
import {useEffect} from "react";

function Home() {

    return (
        <div className="Maincontainer">
            <div className="Maincontainernavcontainer">
                <div className="Maincontainernabbarlef">
                    <BsChevronLeft color={"white"} className="arrowleft" />
                    <BsChevronRight color={"white"} className="arrowright" />

                </div>
            </div>
            <div className="MAincontainerfoc">
                <div className="card-heading-div">
                    <span>Focus</span>
                    <span className="span2">Show All</span>

                </div>
                <div className="card-div">
                    <div className="card">
                        <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8&w=1000&q=80" alt="" />
                        <h6>Peaceful Piano</h6>
                        <span>Relax and indulge with beautiful piano pieces</span>
                    </div>



                    <div className="card">
                        <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8&w=1000&q=80" alt="" />
                        <h6>Peaceful Piano</h6>
                        <span>Relax and indulge with beautiful piano pieces</span>
                    </div>


                    <div className="card">
                        <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8&w=1000&q=80" alt="" />
                        <h6>Peaceful Piano</h6>
                        <span>Relax and indulge with beautiful piano pieces</span>
                    </div>


                    <div className="card">
                        <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8&w=1000&q=80" alt="" />
                        <h6>Peaceful Piano</h6>
                        <span>Relax and indulge with beautiful piano pieces</span>
                    </div>


                    <div className="card">
                        <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8&w=1000&q=80" alt="" />
                        <h6>Peaceful Piano</h6>
                        <span>Relax and indulge with beautiful piano pieces</span>
                    </div>

                </div>










            </div>
            <div className="home-container-spotify-playlist-div">

            <div className="card-heading-div">
                    <span>Spotify PlayList</span>
                    <span className="span2">Show All</span>

                </div>
                <div className="card-div">
                    <div className="card">
                        <img src="https://images.unsplash.com/photo-1499415479124-43c32433a620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxNTMxNTY2fHxlbnwwfHx8fA%3D%3D&w=1000&q=80" alt="" />
                        <h6>Peaceful Piano</h6>
                        <span>Relax and indulge with beautiful piano pieces</span>
                    </div>



                    <div className="card">
                        <img src="https://images.unsplash.com/photo-1499415479124-43c32433a620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxNTMxNTY2fHxlbnwwfHx8fA%3D%3D&w=1000&q=80" alt="" />
                        <h6>Peaceful Piano</h6>
                        <span>Relax and indulge with beautiful piano pieces</span>
                    </div>


                    <div className="card">
                        <img src="https://images.unsplash.com/photo-1499415479124-43c32433a620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxNTMxNTY2fHxlbnwwfHx8fA%3D%3D&w=1000&q=80" alt="" />
                        <h6>Peaceful Piano</h6>
                        <span>Relax and indulge with beautiful piano pieces</span>
                    </div>


                    <div className="card">
                        <img src="https://images.unsplash.com/photo-1499415479124-43c32433a620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxNTMxNTY2fHxlbnwwfHx8fA%3D%3D&w=1000&q=80" alt="" />
                        <h6>Peaceful Piano</h6>
                        <span>Relax and indulge with beautiful piano pieces</span>
                    </div>


                    <div className="card">
                        <img src="https://images.unsplash.com/photo-1499415479124-43c32433a620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxNTMxNTY2fHxlbnwwfHx8fA%3D%3D&w=1000&q=80" alt="" />
                        <h6>Peaceful Piano</h6>
                        <span>Relax and indulge with beautiful piano pieces</span>
                    </div>

                </div>


            </div>
            <div className="home-container-sound-of-india-div">
            <div className="card-heading-div">
                    <span>Sound of India</span>
                    <span className="span2">Show All</span>

                </div>
                <div className="card-div">
                    <div className="card">
                        <img src="https://external-preview.redd.it/s2uwo0RXSQYIlUTUvAAPrPOtye_8moR24-HG5gzAvFY.jpg?auto=webp&s=6ea8b6b3a98c2ae217c0e899e0867b18edb4aa8a" alt="" />
                        <h6>Peaceful Piano</h6>
                        <span>Relax and indulge with beautiful piano pieces</span>
                    </div>



                    <div className="card">
                        <img src="https://external-preview.redd.it/s2uwo0RXSQYIlUTUvAAPrPOtye_8moR24-HG5gzAvFY.jpg?auto=webp&s=6ea8b6b3a98c2ae217c0e899e0867b18edb4aa8a" alt="" />
                        <h6>Peaceful Piano</h6>
                        <span>Relax and indulge with beautiful piano pieces</span>
                    </div>


                    <div className="card">
                        <img src="https://external-preview.redd.it/s2uwo0RXSQYIlUTUvAAPrPOtye_8moR24-HG5gzAvFY.jpg?auto=webp&s=6ea8b6b3a98c2ae217c0e899e0867b18edb4aa8a" alt="" />
                        <h6>Peaceful Piano</h6>
                        <span>Relax and indulge with beautiful piano pieces</span>
                    </div>


                    <div className="card">
                        <img src="https://external-preview.redd.it/s2uwo0RXSQYIlUTUvAAPrPOtye_8moR24-HG5gzAvFY.jpg?auto=webp&s=6ea8b6b3a98c2ae217c0e899e0867b18edb4aa8a" alt="" />
                        <h6>Peaceful Piano</h6>
                        <span>Relax and indulge with beautiful piano pieces</span>
                    </div>


                    <div className="card">
                        <img src="https://external-preview.redd.it/s2uwo0RXSQYIlUTUvAAPrPOtye_8moR24-HG5gzAvFY.jpg?auto=webp&s=6ea8b6b3a98c2ae217c0e899e0867b18edb4aa8a" alt="" />
                        <h6>Peaceful Piano</h6>
                        <span>Relax and indulge with beautiful piano pieces</span>
                    </div>

                </div>

            </div>

            <div className="home-container-footer-div">
                <div className="footer-top">
                  <div className="footer-top-left">
                    <h5>Company</h5>
                    <span>About</span>
                    <span>Jobs</span>
                    <span>For the Record</span>

                  </div>
                  <div className="footer-top-mid1">
                  <h5>Communities</h5>
                    <span>For Artist</span>
                    <span>Developers</span>
                    <span>Advertising</span>
                    <span>Investort</span>
                    <span>Vendors</span>
                    <span>Spotify For Work</span>
                    
                  </div>
                  <div className="footer-top-mid2">
                  <h5>Useful Links</h5>
                    <span>Support</span>
                    <span>Free Mobile App</span>
                  </div>
                  <div className="footer-top-right">

                   <AiOutlineInstagram size={30}/>
                    <AiFillTwitterCircle size={30}/>
                    <FaFacebook size={30}/>
                  </div>

                </div>
                <div className="footer-bottom">
                 <hr style={{backgroundColor:"white",height:"2px"}}/>

                 <div ><span>© 2023 Spotify AB</span></div>

                </div>




            </div>






        </div>


    )

}

export default Home;