import { useState } from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function ContactUs() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowSuccess(true);
    const form = e.target as HTMLFormElement;
    form.reset();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <div className="font-sans text-[#333333] leading-[1.6] bg-white">
      
      {/* Hero Section */}
      <header className="bg-[#1e5292] text-white py-[40px] px-[20px] text-center border-b-[4px] border-[#164175] max-[600px]:py-[30px] max-[600px]:px-[15px]">
        <div className="hero-content">
          <h1 className="text-[20px] uppercase tracking-[1px] mb-[8px] font-bold">Contact Us</h1>
          <p className="text-[12px] opacity-90">Questions? Comments? We are here to help.</p>
        </div>
      </header>

      <main className="max-w-[1100px] mx-auto my-[40px] px-[20px]">
        {/* Success Box */}
        {showSuccess && (
          <div className="bg-[#d4edda] text-[#155724] p-[15px] border border-[#c3e6cb] mb-[20px] text-[12px]">
            <strong>Success!</strong> Your message has been sent. We will contact you shortly.
          </div>
        )}

        <div className="grid grid-cols-[1.8fr_1fr] gap-[30px] items-start max-[900px]:grid-cols-1">
          
          {/* Form Section */}
          <section>
            <h2 className="text-[#1e5292] text-[17px] mb-[20px] border-b-[2px] border-[#1e5292] inline-block pb-[5px] font-bold">Send a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-[15px]">
                <label htmlFor="fullName" className="block font-bold mb-[5px] text-[12px]">Full Name</label>
                <input type="text" id="fullName" placeholder="Enter Full Name" className="w-full p-[10px] border border-[#dddddd] text-[12px] font-inherit focus:outline-[2px] focus:outline-[#1e5292] focus:border-transparent" required />
              </div>

              <div className="mb-[15px]">
                <label htmlFor="email" className="block font-bold mb-[5px] text-[12px]">Email Address</label>
                <input type="email" id="email" placeholder="Enter Email Address" className="w-full p-[10px] border border-[#dddddd] text-[12px] font-inherit focus:outline-[2px] focus:outline-[#1e5292] focus:border-transparent" required />
              </div>

              <div className="mb-[15px]">
                <label htmlFor="phone" className="block font-bold mb-[5px] text-[12px]">Phone Number</label>
                <input type="tel" id="phone" placeholder="Enter Phone Number" className="w-full p-[10px] border border-[#dddddd] text-[12px] font-inherit focus:outline-[2px] focus:outline-[#1e5292] focus:border-transparent" required />
              </div>

              <div className="mb-[15px]">
                <label htmlFor="message" className="block font-bold mb-[5px] text-[12px]">Your Message</label>
                <textarea id="message" className="w-full p-[10px] border border-[#dddddd] text-[12px] font-inherit focus:outline-[2px] focus:outline-[#1e5292] focus:border-transparent min-h-[120px] resize-y" placeholder="Enter Your Message" required></textarea>
              </div>

              <button type="submit" className="bg-[#1e5292] text-white py-[12px] px-[25px] border-none text-[13px] font-bold cursor-pointer uppercase transition-colors duration-200 hover:bg-[#164175]">Send Message</button>
            </form>
          </section>

          {/* Info Sidebar */}
          <aside className="bg-[#f9f9f9] p-[25px] border border-[#dddddd] flex flex-col gap-[50px] max-[900px]:-order-1 max-[900px]:flex-row max-[900px]:flex-wrap max-[900px]:justify-between max-[600px]:flex-col">
            
            {/* Phone Block */}
            <div className="flex items-start gap-[15px] max-[900px]:flex-[1_1_50px]">
              <div className="text-[#1e5292] text-[14px] w-[20px] text-center pt-[4px]">
                <PhoneIcon style={{ fontSize: '14px' }} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[14px] mb-[4px] text-[#1e5292] uppercase leading-[1.2] font-bold">Phone</h3>
                <p className="text-[12px] text-[#333333] break-words block">Mon – Sat, 9:30 AM – 5:30 PM</p>
                <a href="tel:+919842768170" className="text-[12px] text-[#333333] no-underline break-words block hover:underline">+91 98427 68170</a>
                <a href="tel:+919790091708" className="text-[12px] text-[#333333] no-underline break-words block hover:underline">+91 97900 91708</a>
              </div>
            </div>

            {/* Email Block */}
            <div className="flex items-start gap-[15px] max-[900px]:flex-[1_1_50px]">
              <div className="text-[#1e5292] text-[14px] w-[20px] text-center pt-[4px]">
                <EmailIcon style={{ fontSize: '14px' }} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[14px] mb-[4px] text-[#1e5292] uppercase leading-[1.2] font-bold">Email</h3>
                <a href="mailto:info@brpublications.com" className="text-[12px] text-[#333333] no-underline break-words block hover:underline">info@brpublications.com</a>
              </div>
            </div>

            {/* Office Block */}
            <div className="flex items-start gap-[15px] max-[900px]:flex-[1_1_50px]">
              <div className="text-[#1e5292] text-[14px] w-[20px] text-center pt-[4px]">
                <LocationOnIcon style={{ fontSize: '14px' }} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[14px] mb-[4px] text-[#1e5292] uppercase leading-[1.2] font-bold">Office</h3>
                <p className="text-[12px] text-[#333333] break-words block">
                  6/328-2, Maruthi Nagar, Trichy Road,<br /> 
                  Namakkal - 637001, Tamilnadu, India
                </p>
              </div>
            </div>

          </aside>
        </div>
      </main>
    </div>
  );
}