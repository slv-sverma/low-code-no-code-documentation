"use client";
import React from "react";
import Image from "next/image";
import { Heading, List } from "@/components/core";
import { JsonEditor } from "json-edit-react";
const SiteMenu = () => {
  return (
    <div className="">
      <Heading as="h2">Flow of Application</Heading>
      <div>
        In this application all functionality is perform by configuration json
        that retrieve from backend. When Application is Load first-time we call
        configuration JSON data using api which contain all configuration of
        site. This configuration is decide which site ls loading it&#x27;s
        includes basically meta, headers, footers, site menu, auth menu and
        admin menu.
      </div>
      <div className="flex justify-center">
        <Image src="/site-config.png" width={500} height={1000} alt="config" />
      </div>
      <div className="py-10">
        When site is load first get configuration data and check url and load
        template that is match with url. There are three scenario Site menu,
        Auth menu and Admin Menu. If User is logged-in Then we can access
        adminMenu That is sued in Dashboard and if user is not logged-in the he
        can access Auth menu pages like login verify and register. And site menu
        is Public path that can be access by everyone.
      </div>
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
            entity: "/api/society/",
            caches: false,
          },
          footer: {
            template: "footer-style-one",
            entity: "/api/society/",
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
      <section className="mt-5">
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
      <section className="mt-5">
        <Heading as="h3" className="py-0">
          2. Header and Footer
        </Heading>
        <div className="mb-2">
          Header is contain Header template name and and entity name where
          entity name is used to call api and get header template json-data
          data. and template nam is used to pick template that is already exist
          in app and app that data to template which is get from api.
        </div>
      </section>
      <section className="mt-5">
        <Heading as="h3" className="py-0">
          3. Admin Menu
        </Heading>
        <div className="mb-2">
          Admin menu contain list of pages of dashboard that have access to
          user. Admin menu is array of object which contain template name,
          label, url, entity, icon, id, cache, local, and key.
        </div>
      </section>

      <section className="mt-5">
        <Heading as="h3" className="py-0">
          4. Site Menu
        </Heading>
        <div className="mb-2">
          Site menu contain list of public pages info json that can be access by
          everyone logged-in user and non logged-in user. Site menu is array of
          object which contain template name, label, url, entity, icon, id,
          cache, local, and key.
        </div>
      </section>
      <section className="mt-5">
        <Heading as="h3" className="py-0">
          5. Auth Menu
        </Heading>
        <div className="mb-2">
          Auth menu contain list of pages that can be used before login user
          like login, register verify user ec. Auth menu is array of object
          which contain template name, label, url, entity, icon, id, cache,
          local, and key.
        </div>
      </section>
    </div>
  );
};

export default SiteMenu;
