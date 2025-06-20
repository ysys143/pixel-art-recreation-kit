import React, { useState } from 'react';

interface FormData {
  email: string;
  birthday: string;
}

export const NewsletterSignup: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    birthday: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <section className="flex w-full flex-col px-[51px] max-md:max-w-full max-md:px-5">
      <div className="self-stretch max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[44%] max-md:w-full max-md:ml-0">
            <div className="flex w-full flex-col text-[15px] max-md:max-w-full max-md:mt-[29px]">
              <h1 className="text-white text-[40px] font-bold">
                Don,t miss out
              </h1>
              <p className="text-white font-normal mt-9 max-md:max-w-full">
                sign up for the latest beauty news,product samples and cupons
              </p>
              <form onSubmit={handleSubmit} className="self-stretch flex items-stretch gap-[40px_43px] flex-wrap mt-[60px] max-md:max-w-full max-md:mt-10">
                <div className="flex flex-col items-stretch grow shrink-0 basis-0 w-fit">
                  <label htmlFor="email" className="text-white font-bold">
                    EMAIL ADDRESS*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your Email Address"
                    required
                    className="bg-white w-[277px] max-w-full text-[rgba(128,109,109,1)] font-normal mt-[18px] px-4 py-[15px] max-md:pr-5 border-none outline-none"
                  />
                </div>
                <div className="flex flex-col items-stretch whitespace-nowrap">
                  <label htmlFor="birthday" className="text-white font-bold">
                    BIRTHDAY*
                  </label>
                  <input
                    type="text"
                    id="birthday"
                    name="birthday"
                    value={formData.birthday}
                    onChange={handleInputChange}
                    placeholder="MM/DD/YYYY"
                    required
                    className="bg-white text-[rgba(128,109,109,1)] font-normal mt-[18px] p-[15px] max-md:pr-5 border-none outline-none"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="w-[16%] ml-5 max-md:w-full max-md:ml-0">
            <nav className="flex flex-col text-[15px] text-white font-bold mt-[13px] max-md:mt-10">
              <h2 className="text-2xl">COMPANY</h2>
              <a href="#about" className="mt-[42px] max-md:mt-10 hover:underline">
                About
              </a>
              <a href="#experts" className="self-stretch mt-[42px] max-md:mt-10 hover:underline">
                Experts and spokesmodel
              </a>
            </nav>
          </div>
          <div className="w-[21%] ml-5 max-md:w-full max-md:ml-0">
            <nav className="flex grow flex-col text-[15px] text-white font-bold mt-[13px] max-md:mt-10">
              <h2 className="text-2xl self-stretch">
                CUSTOMAR SERVICE
              </h2>
              <a href="#contact" className="mt-[42px] max-md:mt-10 hover:underline">
                contact us
              </a>
              <a href="#account" className="mt-[42px] max-md:mt-10 hover:underline">
                My account
              </a>
              <a href="#store-locator" className="mt-[42px] max-md:mt-10 hover:underline">
                Store locator
              </a>
              <a href="#rewards" className="mt-[42px] max-md:mt-10 hover:underline">
                Redeem rewards
              </a>
            </nav>
          </div>
          <div className="w-[19%] ml-5 max-md:w-full max-md:ml-0">
            <nav className="flex grow flex-col text-[15px] text-white font-bold mt-[13px] max-md:mt-10">
              <h2 className="text-2xl self-stretch">
                MORE TO EXPLORE
              </h2>
              <a href="#magazine" className="mt-[42px] max-md:mt-10 hover:underline">
                Beauty magazine
              </a>
              <a href="#tools" className="mt-[42px] max-md:mt-10 hover:underline">
                Tools and consulations
              </a>
              <a href="#offers" className="mt-[42px] max-md:mt-10 hover:underline">
                Offers
              </a>
              <a href="#loreal" className="mt-[42px] max-md:mt-10 hover:underline">
                :Loreal paris
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className="w-[510px] max-w-full text-xs text-white font-bold">
        <div className="w-full">
          <button
            type="submit"
            className="bg-black px-[51px] py-[17px] border-white border-solid border-2 max-md:max-w-full max-md:px-5 hover:bg-white hover:text-black transition-colors duration-200 w-full"
          >
            SIGN UP
          </button>
        </div>
      </div>
      <p className="text-white text-xs font-bold mt-[33px] max-md:max-w-full">
        Thia site is intended for us consumers.by signing up,you undarstand and agree that your data
        <br />
        will be collected and used subject to our us policy and terms of use.
      </p>
      <p className="text-white text-xs font-bold mt-[33px]">
        *Required information
      </p>
    </section>
  );
};
