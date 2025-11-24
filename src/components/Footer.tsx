import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex flex-col mb-4">
              <span className="text-3xl font-bold tracking-tight">COSMO</span>
              <span className="text-sm font-semibold text-primary tracking-widest">CALIBRE</span>
            </div>
            <p className="text-sm opacity-90 mb-4">
              MUTUAL BENEFITS AT ITS BEST
            </p>
            <p className="text-sm opacity-75">
              Leading FIBC manufacturer in India since 2018
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })} className="opacity-75 hover:opacity-100 transition-opacity">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="opacity-75 hover:opacity-100 transition-opacity">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })} className="opacity-75 hover:opacity-100 transition-opacity">
                  Products
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById("why-us")?.scrollIntoView({ behavior: "smooth" })} className="opacity-75 hover:opacity-100 transition-opacity">
                  Why Us
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="opacity-75 hover:opacity-100 transition-opacity">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Our Products</h4>
            <ul className="space-y-2 text-sm">
              <li className="opacity-75">U Panel FIBC</li>
              <li className="opacity-75">Sling FIBC</li>
              <li className="opacity-75">Baffle FIBC</li>
              <li className="opacity-75">Ventilated FIBC</li>
              <li className="opacity-75">Circular FIBC</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li className="opacity-75">+91 9025028532</li>
              <li className="opacity-75">contact@cosmocalibre.in</li>
              <li className="opacity-75">Chennai, Tamil Nadu, India</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="opacity-75 hover:opacity-100 hover:text-primary transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="opacity-75 hover:opacity-100 hover:text-primary transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="opacity-75 hover:opacity-100 hover:text-primary transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="opacity-75 hover:opacity-100 hover:text-primary transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm opacity-75">
          <p>© {new Date().getFullYear()} Cosmo Calibre. All rights reserved. | Powered by Cosmo Holder</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
