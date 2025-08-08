import React from 'react';

const ClientLogos = () => {
  const logos = [
    { name: 'IKEA', path: 'https://www.ikea.com/gb/en/static/ikea-logo.f7d9229f806b59ec64cb.svg' },
    { name: 'Google', path: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png' },
    { name: 'BCG', path: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Boston_Consulting_Group_logo.svg' },
    { name: 'KFC', path: 'https://upload.wikimedia.org/wikipedia/sco/b/bf/KFC_logo.svg' },
    { name: 'TGI Fridays', path: 'https://upload.wikimedia.org/wikipedia/commons/4/47/T.G.I._Friday%27s_logo.svg' },
    { name: 'Moo', path: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/MOO_Logo_2015.svg' },
    { name: 'Krispy Kreme', path: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Krispy_Kreme_logo.svg' },
    { name: 'Hardees', path: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Hardee%27s_logo.svg' },
    { name: 'Bajaj Allianz', path: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Bajaj_Allianz_Life_Insurance_logo.svg' },
    { name: 'Dominos', path: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Domino%27s_pizza_logo.svg' },
    { name: 'Supershe', path: 'https://images.crunchbase.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1495536124/j5hshg8p8lq2z4j9l2pl.png' },
    { name: 'Wimpy', path: 'https://upload.wikimedia.org/wikipedia/en/2/23/Wimpy_logo.svg' },
    { name: 'Empire Hotels', path: 'https://www.empirehotel-hongkong.com/images/logo.png' },
    { name: 'Jobget', path: 'https://media.licdn.com/dms/image/C4D0BAQG_5-Z-3wX4Yw/company-logo_200_200/0/1630645395115/jobget_logo?e=2147483647&v=beta&t=7yY4Z-3X_QjZ-5X_Jz-3X_QjZ-5X_Jz-3X_QjZ-5X' },
    { name: 'Asian Bank', path: 'https://www.adb.org/sites/default/files/adb-logo-social.png' },
  ];

  return (
    <section className="w-full py-20 bg-black sm:py-24">
      <div className="w-full max-w-5xl px-4 mx-auto text-center">
        <h2 className="mb-16 text-4xl font-bold text-white md:text-5xl">
          Our Efforts Have Transformed How You
          <br />
          Experience These Global Leaders
        </h2>

        <div className="grid grid-cols-3 gap-8 md:grid-cols-5 md:gap-12">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center h-12 grayscale hover:grayscale-0 transition-all duration-300">
              <img 
                src={logo.path} 
                alt={`${logo.name} logo`} 
                className="object-contain h-full max-w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
