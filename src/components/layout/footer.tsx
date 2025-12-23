import { useEffect, useState } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  const [hideFloatingButtons, setHideFloatingButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Logic to hide buttons when overlapping specific sections (like contact page)
      // For now, we'll keep it simple or you can add specific IDs to check against
      const contactSection = document.getElementById('contactPage');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setHideFloatingButtons(true);
        } else {
          setHideFloatingButtons(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating Action Buttons */}
      <section className={`fixed bottom-[25px] right-[25px] flex flex-col gap-[15px] z-[2000] transition-all duration-300 ${hideFloatingButtons ? 'opacity-0 invisible pointer-events-none' : 'opacity-100 visible'}`}>
        <a href="https://wa.me/919842768170" className="w-[55px] h-[55px] rounded-[25%] flex items-center justify-center text-[25px] text-white shadow-[0_4px_10px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)] bg-[#25d366]" target="_blank" title="Chat on WhatsApp" rel="noreferrer">
          <WhatsAppIcon style={{ fontSize: '28px' }} />
        </a>
        <a href="tel:+919842768170" className="w-[55px] h-[55px] rounded-[25%] flex items-center justify-center text-[25px] text-white shadow-[0_4px_10px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)] bg-white text-[#1e5292]!" title="Call Us">
          <PhoneIcon style={{ fontSize: '25px' }} className="text-[#1e5292]" />
        </a>
      </section>

      <footer className="w-full bg-[#ddd] text-black pt-[30px] pb-[15px] font-['Poppins',sans-serif] mt-auto" id="footerPage">
        <div className="mx-auto max-w-[1316px] px-[18px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[40px]">
          
          {/* About Us */}
          <div className="flex flex-col">
            <h3 className="text-black text-[14px] mb-[10px] font-bold">About Us</h3>
            <div className="w-[25px] h-[3px] bg-[#1e5292] mb-[15px]"></div>
            <p className="text-[12px] leading-[1.7] mb-4">
              BR Publications is committed to publishing high-quality academic
              and scholarly works across all major disciplines. We aim to support
              researchers, authors, and educators by offering trusted publication
              services and global research visibility.
            </p>
            <div className="flex">
              <a href="#" className="inline-flex justify-center items-center mr-[10px] text-[12px] text-black border border-[#1e5292] p-[8px] rounded-full transition-all duration-300 w-[30px] h-[30px] hover:bg-[#1e5292] hover:text-white group">
                <FacebookIcon style={{ fontSize: '14px' }} className="group-hover:text-white" />
              </a>
              <a href="#" className="inline-flex justify-center items-center mr-[10px] text-[12px] text-black border border-[#1e5292] p-[8px] rounded-full transition-all duration-300 w-[30px] h-[30px] hover:bg-[#1e5292] hover:text-white group">
                <TwitterIcon style={{ fontSize: '14px' }} className="group-hover:text-white" />
              </a>
              <a href="#" className="inline-flex justify-center items-center mr-[10px] text-[12px] text-black border border-[#1e5292] p-[8px] rounded-full transition-all duration-300 w-[30px] h-[30px] hover:bg-[#1e5292] hover:text-white group">
                <LinkedInIcon style={{ fontSize: '14px' }} className="group-hover:text-white" />
              </a>
              <a href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=z14kcpd" target="_blank" className="inline-flex justify-center items-center mr-[10px] text-[12px] text-black border border-[#1e5292] p-[8px] rounded-full transition-all duration-300 w-[30px] h-[30px] hover:bg-[#1e5292] hover:text-white group" rel="noreferrer">
                <InstagramIcon style={{ fontSize: '14px' }} className="group-hover:text-white" />
              </a>
              <a href="https://wa.me/919842768170" target="_blank" title="Chat on WhatsApp" className="inline-flex justify-center items-center mr-[10px] text-[12px] text-black border border-[#1e5292] p-[8px] rounded-full transition-all duration-300 w-[30px] h-[30px] hover:bg-[#1e5292] hover:text-white group" rel="noreferrer">
                <WhatsAppIcon style={{ fontSize: '14px' }} className="group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-black text-[14px] mb-[10px] font-bold">Quick Links</h3>
            <div className="w-[25px] h-[3px] bg-[#1e5292] mb-[15px]"></div>
            <ul className="list-none p-0">
              <li className="flex items-center mb-[8px]">
                <KeyboardArrowRightIcon style={{ fontSize: '14px' }} className="text-[#1e5292] mr-[8px]" />
                <a href="#" className="text-black no-underline text-[12px] transition-all duration-300 hover:text-[#1e5292] hover:pl-[5px]">Journals & Publications</a>
              </li>
              <li className="flex items-center mb-[8px]">
                <KeyboardArrowRightIcon style={{ fontSize: '14px' }} className="text-[#1e5292] mr-[8px]" />
                <a href="#" className="text-black no-underline text-[12px] transition-all duration-300 hover:text-[#1e5292] hover:pl-[5px]">ResNova Academic Press</a>
              </li>
              <li className="flex items-center mb-[8px]">
                <KeyboardArrowRightIcon style={{ fontSize: '14px' }} className="text-[#1e5292] mr-[8px]" />
                <a href="#" className="text-black no-underline text-[12px] transition-all duration-300 hover:text-[#1e5292] hover:pl-[5px]">Book Publications</a>
              </li>
            </ul>
          </div>

          {/* Work With Us */}
          <div className="flex flex-col">
            <h3 className="text-black text-[14px] mb-[10px] font-bold">Work With Us</h3>
            <div className="w-[25px] h-[3px] bg-[#1e5292] mb-[15px]"></div>
            <ul className="list-none p-0">
              <li className="flex items-center mb-[8px]">
                <KeyboardArrowRightIcon style={{ fontSize: '14px' }} className="text-[#1e5292] mr-[8px]" />
                <a href="#" className="text-black no-underline text-[12px] transition-all duration-300 hover:text-[#1e5292] hover:pl-[5px]">Contribute a Book Chapter</a>
              </li>
              <li className="flex items-center mb-[8px]">
                <KeyboardArrowRightIcon style={{ fontSize: '14px' }} className="text-[#1e5292] mr-[8px]" />
                <a href="#" className="text-black no-underline text-[12px] transition-all duration-300 hover:text-[#1e5292] hover:pl-[5px]">Publish Your Book</a>
              </li>
              <li className="flex items-center mb-[8px]">
                <KeyboardArrowRightIcon style={{ fontSize: '14px' }} className="text-[#1e5292] mr-[8px]" />
                <a href="#" className="text-black no-underline text-[12px] transition-all duration-300 hover:text-[#1e5292] hover:pl-[5px]">Join as a Book Editor</a>
              </li>
              <li className="flex items-center mb-[8px]">
                <KeyboardArrowRightIcon style={{ fontSize: '14px' }} className="text-[#1e5292] mr-[8px]" />
                <a href="#" className="text-black no-underline text-[12px] transition-all duration-300 hover:text-[#1e5292] hover:pl-[5px]">Join as a Reviewer</a>
              </li>
              <li className="flex items-center mb-[8px]">
                <KeyboardArrowRightIcon style={{ fontSize: '14px' }} className="text-[#1e5292] mr-[8px]" />
                <a href="#" className="text-black no-underline text-[12px] transition-all duration-300 hover:text-[#1e5292] hover:pl-[5px]">Request Printed Copies</a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col">
            <h3 className="text-black text-[14px] mb-[10px] font-bold">Contact Us</h3>
            <div className="w-[25px] h-[3px] bg-[#1e5292] mb-[15px]"></div>
            <p className="text-[12px] leading-[1.7] mb-[10px] flex items-start gap-2">
              <LocationOnIcon style={{ fontSize: '14px' }} className="text-[#1e5292] mt-1" />
              <span>BR Publications<br />6/328-2, Maruthi Nagar<br />Trichy Road, Namkkal-637001,<br />India</span>
            </p>
            <p className="text-[12px] leading-[1.7] mb-[10px] flex items-center gap-2">
              <PhoneIcon style={{ fontSize: '14px' }} className="text-[#1e5292]" />
              <span>+91 98427 68170</span>
            </p>
            <p className="text-[12px] leading-[1.7] mb-[10px] flex items-center gap-2">
              <EmailIcon style={{ fontSize: '14px' }} className="text-[#1e5292]" />
              <span>info@brpublications.com</span>
            </p>
          </div>

        </div>

        <div className="max-w-[1316px] mx-auto px-[18px] text-center mt-[40px] border-t border-[rgba(0,0,0,0.1)] pt-[15px]">
          <p className="text-[12px] text-black">Copyright © {new Date().getFullYear()} BR Publications. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  )
}