export default function Footer() {
    return (
        <footer className="bg-black">
            <div className="container">
                <div className="text-white py-12 md:py-24 flex flex-col md:flex-row gap-6 md:gap-4">
                    <div className="">
                        <h3 className="alan-sans-600 text-xl">Lorem ipsum dolor sit, amet consectetur</h3>
                        <p className="alan-sans-300 mt-2 text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis illum harum iste accusamus dolores quaerat! Deserunt nemo, laborum at sint mollitia repudiandae eveniet neque, quam, odit cum distinctio sunt? Ratione? </p>
                        <div className="social-meida-links flex gap-2 mt-5">
                            <a href="#" className="text-gray-300 w-12 h-12 flex items-center justify-center rounded-full bg-gray-500/30 ">
                                <i className="fa fa-facebook" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="text-gray-300 w-12 h-12 flex items-center justify-center rounded-full bg-gray-500/30 ">
                                <i className="fa fa-twitter" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="text-gray-300 w-12 h-12 flex items-center justify-center rounded-full bg-gray-500/30 ">
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="text-gray-300 w-12 h-12 flex items-center justify-center rounded-full bg-gray-500/30 ">  
                                <i className="fa fa-linkedin" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="text-gray-300 w-12 h-12 flex items-center justify-center rounded-full bg-gray-500/30 ">
                                <i className="fa fa-github" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>

                    <div className="footer-navigation-items  w-full flex flex-col items-start md:items-center">
                        <h3 className="alan-sans-600 text-xl">Quick links</h3>
                        <ul className="alan-sans-300 text-gray-300 mt-2">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Ui/Ux</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact-info w-full">
                        <h3 className="alan-sans-600 text-xl">Contact Info</h3>
                        <p className="alan-sans-300 mt-2 text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p className="alan-sans-300 mt-4 text-gray-300">686668, Ernakulam, Kerala, India</p>
                        <p className="alan-sans-300 text-gray-300"><a href="tel:+91686668">+91 686668</a></p>
                        <p className="alan-sans-300 text-gray-300"><a href="mailto:arun@gmail.com">arun@gmail.com</a></p>
                    </div>
                </div>

                <div className="footer-bottom text-gray-300 text-center py-4">
                    <p className="alan-sans-300">Copyright &copy; 2025 crafted with ❤️ by arun paul. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
  