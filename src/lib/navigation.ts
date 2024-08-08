export const navigation = [
  {
    name: 'PLASTIC SURGERY',
    links: [
      {
        name: 'Head & Neck',
        links: [
          { name: 'eyelids', href: '/plastic-surgery/head-neck/eyelids' },
          { name: 'ears', href: '/plastic-surgery/head-neck/ears' },
          { name: 'face', href: '/plastic-surgery/head-neck/face' },
          { name: 'neck', href: '/plastic-surgery/head-neck/neck' },
          { name: 'nose', href: '/plastic-surgery/head-neck/nose' },
        ],
      },
      {
        name: 'Breast',
        links: [
          {
            name: 'augmentation',
            links: [
              {
                name: 'implants',
                links: [
                  { name: 'cohesive gel', href: '/plastic-surgery/breast/augmentation/implants/cohesive-gel' },
                  { name: 'saline filled', href: '/plastic-surgery/breast/augmentation/implants/saline-filled' },
                ],
              },
              { name: 'fat grafting', href: '/plastic-surgery/breast/augmentation/fat-grafting' },
            ],
          },
          { name: 'lift', href: '/plastic-surgery/breast/lift' },
          { name: 'reduction', href: '/plastic-surgery/breast/reduction' },
          {
            name: 'revision',
            links: [
              { name: 'exchange of implants', href: '/plastic-surgery/breast/revision/exchange-of-implants' },
              { name: 'removal of implants', href: '/plastic-surgery/breast/revision/removal-of-implants' },
            ],
          },
          {
            name: 'nipple areolar complex',
            links: [
              { name: 'areolar reduction', href: '/plastic-surgery/breast/nipple-areolar-complex/areolar-reduction' },
              { name: 'inverted papule', href: '/plastic-surgery/breast/nipple-areolar-complex/inverted-papule' },
            ],
          },
        ],
      },
      {
        name: 'Body',
        links: [
          { name: 'Abdominoplasty', href: '/plastic-surgery/body/abdominoplasty' },
          { name: 'Mini-Abdominoplasty', href: '/plastic-surgery/body/mini-abdominoplasty' },
          { name: 'Liposuction', href: '/plastic-surgery/body/liposuction' },
          { name: 'Arm Lift', href: '/plastic-surgery/body/arm-lift' },
          { name: 'Thigh Lift', href: '/plastic-surgery/body/thigh-lift' },
        ],
      },
    ],
  },
  {
    name: 'DERMATOLOGY',
    links: [
      { name: 'Skin Screening', href: '/dermatology/skin-screening' },
      { name: 'Acne', href: '/dermatology/acne' },
      { name: 'Eczema', href: '/dermatology/eczema' },
      { name: 'Rosacea', href: '/dermatology/rosacea' },
      { name: 'Dermatitis', href: '/dermatology/dermatitis' },
      { name: 'Psoriasis', href: '/dermatology/psoriasis' },
    ],
  },
  {
    name: 'FUNCTIONAL MEDICINE',
    links: [
      { name: 'Cardiometabolic Optimization', href: '/functional-medicine/cardiometabolic-optimization' },
      { name: 'Epigenetic Optimization', href: '/functional-medicine/epigenetic-optimization' },
      { name: 'Hair Restoration', href: '/functional-medicine/hair-restoration' },
      { name: 'Hormone Optimization', href: '/functional-medicine/hormone-optimization' },
      { name: 'Neurocognitive Performance', href: '/functional-medicine/neurocognitive-performance' },
      { name: 'Sleep & Travel Optimization', href: '/functional-medicine/sleep-travel-optimization' },
    ],
  },
  {
    name: 'MEDICAL SPA', // Changing back to Medical Spa
    links: [
      { name: 'Emsculpt', href: '/medical-spa/emsculpt' },
      { name: 'ShapeScale', href: '/medical-spa/shapescale' },
      { name: 'RF Microneedling', href: '/medical-spa/rf-microneedling' },
      { name: 'Cosmetic Injections', href: '/medical-spa/cosmetic-injections' },
      { name: 'Skin Lasers', href: '/medical-spa/skin-lasers' },
      { name: 'Esthetician Services', href: '/medical-spa/esthetician-services' },
    ],
  },
  {
    name: 'GALLERY',
    links: [
      { name: 'Before & After Pictures', href: '/gallery/before-after-pictures' },
      { name: 'Videos', href: '/gallery/videos' },
    ],
  },
  { name: 'ABOUT', links: [] },
  { name: 'CONTACT', links: [] },
  {
    name: 'RESOURCES',
    links: [
      { name: 'Membership', href: '/resources/membership' },
      { name: 'Financing', href: '/resources/financing' },
      { name: 'Articles', href: '/resources/articles' },
      { name: 'Videos', href: '/resources/videos' },
      { name: 'Gift Certificates', href: '/resources/gift-certificates' },
      { name: 'Out-Of-Town Clients', href: '/resources/out-of-town-clients' },
    ],
  },
];
