import React from 'react';

export const FooterBottom: React.FC = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      <div className="border min-h-px w-full mt-[180px] border-white border-solid max-md:max-w-full max-md:mt-10" />
      <div className="self-center flex w-full max-w-[1281px] items-stretch gap-5 text-xs flex-wrap justify-between mt-[33px] max-md:max-w-full mx-auto">
        <nav className="flex items-stretch gap-6 text-white font-bold flex-wrap">
          <a href="#sitemap" className="hover:underline">SITE MAP</a>
          <a href="#privacy" className="hover:underline">PRIVACY</a>
          <a href="#terms" className="hover:underline">TERMS</a>
          <a href="#user-content" className="basis-auto hover:underline">
            USER CONTENT PERMISSION TERMS
          </a>
          <a href="#makeup" className="hover:underline">MAKEUP.COM</a>
          <a href="#skincare" className="hover:underline">SKINCARE.COM</a>
        </nav>
        <div className="flex items-stretch gap-[40px_74px] font-medium">
          <span className="text-[rgba(159,145,145,1)]">
            @ 2019 L OREAL PARIS
          </span>
          <button 
            onClick={handleBackToTop}
            className="text-white hover:underline cursor-pointer"
          >
            BACK TO TOP
          </button>
        </div>
      </div>
      <div className="border min-h-px w-full mt-[29px] border-[rgba(115,98,98,1)] border-solid max-md:max-w-full" />
      <div className="flex w-full max-w-[1058px] flex-col text-xs text-white font-medium mr-[84px] mt-6 max-md:max-w-full max-md:mr-2.5">
        <p className="max-md:max-w-full">
          This site is intended for us consumers.cookes and related technology are used for advertising.To learn more,visit adchosice and our privacy policy.
        </p>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/9451578aee144d1c94cd4e980d67cc42/a5a1bfe01679c31e2f99f3f67e2038315d912572?placeholderIfAbsent=true"
          alt="Privacy policy icon"
          className="aspect-[1.12] object-contain w-[9px] mt-3"
        />
      </div>
    </div>
  );
};
