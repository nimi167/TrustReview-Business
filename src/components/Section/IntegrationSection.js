import React from 'react';
import PropTypes from 'prop-types';

const defaultLogos = [
  '/images/companies_logo/salesforce_logo.png',
  '/images/companies_logo/Wix_logo.png',
  '/images/companies_logo/Logo__Hootsuite.svg',
  '/images/companies_logo/Logo__Zendesk.svg',
  '/images/companies_logo/Klaviyo-logo.png',
  '/images/companies_logo/Logo_Square.svg',
  '/images/companies_logo/Logo__WooCommerce.svg',
  '/images/companies_logo/Shopify-logo.png'
];

const IntegrationSection = ({title="We easily integrate with your existing tools", logos = defaultLogos }) => {
  return (
    <section className="p-6 my-10">
      <div className="p-4 mx-auto text-center">
        <h2 className="text-4xl font-bold">{title}</h2>
      </div>
      <div className="flex flex-wrap justify-center mx-auto">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center h-[100px] w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="h-[100px] flex justify-center items-center">
        <button className='font-medium border hover:border-2 border-black py-3 px-7 rounded-full'>
          See all integrations
        </button>
      </div>
    </section>
  );
};

IntegrationSection.propTypes = {
  logos: PropTypes.arrayOf(PropTypes.string)
};

export default IntegrationSection;
