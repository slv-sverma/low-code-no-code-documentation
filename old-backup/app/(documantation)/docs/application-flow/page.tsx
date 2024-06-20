"use client";
import { Code, Heading, List, Paragraph } from "@/components/core";
import React from "react";
import Image from "next/image";
import { JsonEditor } from "json-edit-react";

const ApplicationFlow = () => {
  return (
    <div className="">
      <Heading as="h2">Flow of Application</Heading>
      <Paragraph>
        In this application all functionality is perform by configuration json
        that retrieve from backend. When Application is Load first-time we call
        configuration JSON data using api which contain all configuration of
        site. This configuration is decide which site ls loading it&#x27;s
        includes basically meta, headers, footers, site menu, auth menu and
        admin menu.
      </Paragraph>
      <div className="flex justify-center">
        <Image src="/site-config.png" width={500} height={1000} alt="config" />
      </div>
      <Paragraph className="py-10">
        When site is load first get configuration data and check url and load
        template that is match with url. There are three scenario Site menu,
        Auth menu and Admin Menu. If User is logged-in Then we can access
        adminMenu That is sued in Dashboard and if user is not logged-in the he
        can access Auth menu pages like login verify and register. And site menu
        is Public path that can be access by everyone.
      </Paragraph>
      <JsonEditor
        rootName="configuration"
        enableClipboard={false}
        restrictEdit={true}
        restrictDelete={true}
        restrictAdd={true}
        collapse={1}
        theme={"githubDark"}
        data={{
          meta: {
            title: "XU Lifestyle",
            description: "",
            configCaches: true,
            copyright_text: "XU Lifestyle",
            login_logo: "https://xulifestyle.com/xu-logo.svg",
            sidebar_icon: "https://xulifestyle.com/favicon.ico",
          },
          header: {
            template: "header-style-one",
            entity: "/api/header-style-one/",
            caches: false,
          },
          footer: {
            template: "footer-style-one",
            entity: "/api/footer-style-one/",
            caches: false,
          },
          adminMenu: [],
          siteMenu: [
            {
              template: "coming-soon",
              label: "Home",
              url: "/",
              entity: "/api/home/",
              icon: "page",
              id: "society",
              caches: true,
              local: true,
              key: "society",
            },
          ],
          authMenu: [
            {
              template: "login-template-one",
              label: "Sign in",
              url: "/login",
              entity: "/noauth/api/login-via-email/",
              id: "login-email",
              caches: true,
              nextPage: "/login/verify-otp",
              param: "email",
            },
            {
              template: "login-template-one",
              label: "Sign in",
              url: "/login/verify-otp",
              entity: "/noauth/api/verify-otp/",
              id: "login-email-verify-otp",
              keepToken: true,
              caches: true,
              prevParam: "email",
            },
          ],
        }}
        onUpdate={({ newData }) => {
          // Do something with the new data, e.g. update jsonData
        }}
      />
      <section className="mt-5" id="meta">
        <Heading as="h3" className="py-0">
          1. Meta
        </Heading>
        <div className="mb-2">
          Meta have contain site meta data that can very site by site which
          contains title, description, footer copyright-text and logo etc.
        </div>
        <List as="ul" className="py-4">
          <List.Item as="ul">
            <b>title:</b> Title of site that is showing of Tab in browser and
            also use for title of SEO
          </List.Item>
          <List.Item as="ul">
            <b>description:</b> Description is used for SEO description.
          </List.Item>

          <List.Item as="ul">
            <b>copyright_text:</b> Copyright_text for dashboard and SIte footer
            copyright
          </List.Item>
          <List.Item as="ul">
            <b>login_logo:</b> Get Login page Logo
          </List.Item>
          <List.Item as="ul">
            <b>sidebar_icon:</b> Get Sidebar Logo Icon
          </List.Item>
        </List>
      </section>

      <section className="mt-5" id="site-menu">
        <Heading as="h3" className="py-0">
          2. Site Menu
        </Heading>
        <Paragraph className="mb-2">
          Site menu contain list of public pages info json that can be access by
          everyone logged-in user and non logged-in user. Site menu is array of
          object which contain template name, label, url, entity, icon, id,
          cache, local, and key.
        </Paragraph>
      </section>

      <section className="mt-5" id="header">
        <Heading as="h3" className="py-0">
          3. Header
        </Heading>
        <Paragraph>
          We get this json from configuration, here we get entity name(api
          endpoint) and template name, and also one more flag caches.
        </Paragraph>
        <div className="my-10">
          <JsonEditor
            rootName="Header"
            data={{
              template: "header-style-one",
              entity: "/api/header-style-one/",
              caches: false,
            }}
            enableClipboard={false}
            restrictEdit={true}
            restrictDelete={true}
            restrictAdd={true}
            collapse={1}
            theme={"githubDark"}
          />
        </div>
        <Paragraph className="mt-3">
          Using entity call api(like{" "}
          <b>http://api-domain/api/header-style-one/</b>) and get Header json
          data and Load template That is match name according template that is
          got in Json configuration. and When we get Header json we pass all
          data into Template, Site Menu Json, Header Json and Logo Site name
          that we got on Configuration &#x3E; meta data. and we Got Header as we
          shown below
        </Paragraph>

        <Paragraph>We got This Data in template </Paragraph>
        <div className="my-10">
          <JsonEditor
            rootName="header-response data"
            data={{
              logo: {
                image_link: "/assets/delivery-pigeon/logo.webp",
                title: "",
                tagline: "",
                link: {
                  url: "/",
                  target: "_self",
                },
              },
              menu: [
                {
                  title: "Home",
                  href: "/",
                },
                {
                  title: "About Us",
                  href: "/about",
                },
                {
                  title: "Become a Business Partner",
                  href: "/business-partner",
                },
                {
                  title: "Media",
                  href: "/media",
                },
                {
                  title: "Contacts",
                  href: "/contacts",
                },
              ],
              right_panel: [
                {
                  type: "location-dropdown",
                  options: ["Kolkata", "Hydrabad", "Chennai", "Delhi"],
                },
                {
                  type: "login-button",
                  label: "Login",
                },
                {
                  type: "header-button",
                  label: "Book An Order",
                  url: "/book-an-order",
                },
              ],
            }}
            enableClipboard={false}
            restrictEdit={true}
            restrictDelete={true}
            restrictAdd={true}
            collapse={2}
            theme={"githubDark"}
          />
        </div>

        <Paragraph> And Using Above Json we got Header like this</Paragraph>
        <div className="flex justify-center">
          <Image
            src="/header-01.png"
            className="shadow-lg rounded-md"
            width={1600}
            height={1600}
            alt="config"
          />
        </div>
      </section>

      <section className="mt-5" id="footer">
        <Heading as="h3" className="py-0">
          4. Footer
        </Heading>
        <Paragraph>
          We get this json from configuration, here we get entity name(api
          endpoint) and template name, and also one more flag caches.
        </Paragraph>
        <div className="my-10">
          <JsonEditor
            rootName="Footer"
            data={{
              template: "footer-style-one",
              entity: "/api/footer-style-one/",
              caches: false,
            }}
            enableClipboard={false}
            restrictEdit={true}
            restrictDelete={true}
            restrictAdd={true}
            collapse={1}
            theme={"githubDark"}
          />
        </div>

        <Paragraph>
          Using entity call api(like{" "}
          <b>http://api-domain/api/footer-style-one/</b>) and get footer json
          data and Load template That is match name according template that is
          got in Json configuration. and When we get Header json we pass all
          data into Template like Copyright text, Footer Json and Logo Site name
          that we got on Configuration &#x3E; meta data. and we Got Footer Like
          as we shown below. Some data is not need to change every time like
          header and footer many be some other in some special condition, then
          we do not have need to call that data every time and make load on
          server then we pass flag <b>cache</b> it&#x27;s mean we store that
          data on local and we use every time until we need to load new data
        </Paragraph>

        <Paragraph>We got This Data in template </Paragraph>
        <div className="my-10">
          <JsonEditor
            rootName="Footer"
            data={{
              topFooter: {
                column_1: [
                  {
                    type: "logo",
                    url: "/assets/delivery-pigeon/footer-logo.png",
                    link: {
                      url: "/",
                      target: "_self",
                    },
                  },
                ],
                column_2: [
                  {
                    type: "menu",
                    label: "Menu",
                    menu: [
                      {
                        title: "Home",
                        href: "/",
                      },
                      {
                        title: "About Us",
                        href: "/about",
                      },
                      {
                        title: "Become a Business Partner",
                        href: "/business-partner",
                      },
                      {
                        title: "Media",
                        href: "/media",
                      },
                      {
                        title: "Contacts",
                        href: "/contacts",
                      },
                    ],
                  },
                ],
                column_3: [
                  {
                    type: "menu",
                    label: "Links",
                    menu: [
                      {
                        title: "Cookie Statement",
                        href: "/cookie-statement",
                      },
                      {
                        title: "Privacy Policy",
                        href: "/privacy-policy",
                      },
                      {
                        title: "Terms Of Service",
                        href: "/terms-of-service",
                      },
                      {
                        title: "Refund Policy",
                        href: "/refund-policy",
                      },
                      {
                        title: "FAQs",
                        href: "/faqs",
                      },
                    ],
                  },
                ],
                column_4: [
                  {
                    type: "info",
                    label: "Download Provider App",
                    content:
                      "Delivery Pigeon Provider App is for delivery partner who are willing to sign up to our organization to be a part of the team that helps make the high-quality deliveries possible. Free job opportunity, no agent and no payment, just download the app and fill in your details.",
                  },
                  {
                    type: "logo",
                    url: "/assets/delivery-pigeon/app-store-icon2.png",
                    link: {
                      url: "https://apps.apple.com/us/app/delivery-pigeon/id1552237117",
                      target: "_target",
                    },
                  },
                ],
                column_5: [
                  {
                    type: "info",
                    label: "Download Customer App",
                    content:
                      "Delivery Pigeon Customer App is for customers who are looking to place orders for seamless deliveries. The procedure for delivery is made easy and secure, without going through any hassles.",
                  },
                  {
                    type: "logo",
                    url: "/assets/delivery-pigeon/app-store-icon1.png",
                    link: {
                      url: "https://play.google.com/store/apps/details?id=com.pigeon.customer.app",
                      target: "_target",
                    },
                  },
                ],
              },
              bottomFooter: {
                column_1: [
                  {
                    type: "text",
                    content: "Delivery Pigeon. All rights reserved.",
                  },
                ],
                column_2: [
                  {
                    type: "footer_social_icon",
                    social_icon: [
                      {
                        url: "https://www.facebook.com/deliverypigeon",
                        icon: "FaFacebookF",
                        target: "_blank",
                      },
                      {
                        url: "https://www.instagram.com/deliverypigeon/",
                        icon: "FaInstagram",
                        target: "_blank",
                      },
                      {
                        url: "https://twitter.com/DeliveryPigeon1",
                        icon: "FaXTwitter",
                        target: "_blank",
                      },
                      {
                        url: "https://www.linkedin.com/company/delivery-pigeon/",
                        icon: "FaLinkedinIn",
                        target: "_blank",
                      },
                    ],
                  },
                ],
              },
            }}
            enableClipboard={false}
            restrictEdit={true}
            restrictDelete={true}
            restrictAdd={true}
            collapse={2}
            theme={"githubDark"}
          />
        </div>
        <Paragraph>And Using Above Json we got Footer like this</Paragraph>

        <div className="flex justify-center">
          <Image src="/footer.png" width={1600} height={1600} alt="config" />
        </div>
      </section>
      <section className="mt-5">
        <Heading as="h3" className="py-0">
          5. Admin Menu
        </Heading>
        <Paragraph>
          Admin menu contain list of pages of dashboard that have access to
          user. Admin menu is array of object which contain template name,
          label, url, entity, icon, id, cache, local, and key.
        </Paragraph>
      </section>

      <section className="mt-5">
        <Heading as="h3" className="py-0">
          6. Auth Menu
        </Heading>
        <Paragraph>
          Auth menu contain list of pages that can be used before login user
          like login, register verify user ec. Auth menu is array of object
          which contain template name, label, url, entity, icon, id, cache,
          local, and key.
        </Paragraph>
      </section>
    </div>
  );
};

export default ApplicationFlow;
