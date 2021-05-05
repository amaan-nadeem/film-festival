const footerData = {
  leftLinks: [
    {
      title: "Navigate",
      links: [
        { link: "Home", href: "" },
        { link: "About us", href: "" },
        { link: "FAQ", href: "" },
        { link: "Contact", href: "" },
      ],
    },
    {
      title: "Get in Touch",
      links: [
        { link: "email@email.com", href: "" },
        { link: "+1 123 123 1234", href: "" },
        {
          isSocialLinks: true,
          socialLinks: [{ icon: "" }, { icon: "" }, { icon: "" }],
        },
      ],
    },
  ],
  rightNewsletterSection: {
    title: "Newsletter",
    description:
      "Be the first to get the latest news about trends, promotions and much more.",
    textBox: { label: "Enter Email", btnText: "Subscription", arrow: "" },
    bottomDescription: "By subscribing, you agree with the",
    bottomLink: "Privacy Policy",
  },
  footerBottomContent: {
    reservedText: "All rights reserved @website.com",
    links: [
      { link: "Terms of Use", href: "" },
      { link: "Privacy Policy", href: "/privacy-policy" },
      { link: "Site Map", href: "" },
    ],
    languages: [{ lang: "English" }, { lang: "French" }],
  },
}

export default footerData
