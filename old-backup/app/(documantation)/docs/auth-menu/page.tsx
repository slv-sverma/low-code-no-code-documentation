"use client";
import React from "react";
import Image from "next/image";
import { DocTable, Heading, List, Paragraph } from "@/components/core";
import { JsonEditor } from "json-edit-react";
const AuthMenu = () => {
  return (
    <div className="">
      <Heading as="h2">Auth menu</Heading>
      <Paragraph>
        Auth menu is responsible to handle all Auth pages like Login, register
        and Verify user Pages. here we have two pages configuration json Login
        and Verify Otp. Here we have template name, label, url, entity, id,
        keepToken, caches, and prevPram.
      </Paragraph>
      <div className="py-5">
        <JsonEditor
          rootName="authMenu"
          enableClipboard={false}
          restrictEdit={true}
          restrictDelete={true}
          restrictAdd={true}
          collapse={false}
          theme={"githubDark"}
          data={[
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
          ]}
        />
      </div>

      <List as="ul" className="py-4">
        <List.Item as="ul">
          <b>label:</b> This label is Display Where we show list of page
        </List.Item>
        <List.Item as="ul">
          <b>template:</b> This is template name, and template name is used to
          Mapping template and Render match template.
        </List.Item>

        <List.Item as="ul">
          <b>url:</b> This is page url
        </List.Item>
        <List.Item as="ul">
          <b>id:</b> id is used to uniquely identify menu in all menu array
        </List.Item>
        <List.Item as="ul">
          <b>caches:</b> caches is used to store caches of api json data
        </List.Item>
        <List.Item as="ul">
          <b>nextPage:</b> This is next page url. After auth form submit success
          fully then we can redirect user to next page using <b>nextPage</b>
        </List.Item>
        <List.Item as="ul">
          <b>param:</b> if we want to send some data from one to another auth
          pages after form submit successful then param parameter will help
          them. We got name of form filed from param where we can collect info
          using name and pass into another pages.
        </List.Item>
        <List.Item as="ul">
          <b>prevParam:</b> It have data of that is pass by previous pages.
        </List.Item>
      </List>

      <section className="mt-5">
        <Heading as="h3" className="py-0">
          Process of Auth Login Page
        </Heading>

        <Heading as="h5" className="py-0">
          <span className="text-indigo-600">Step 1:</span> Get current page url
        </Heading>
        <Paragraph>
          We age getting current page using using in filed feature of
          application
        </Paragraph>

        <Heading as="h5" className="py-0">
          <span className="text-indigo-600">Step 2:</span> Check Is Page Exist
        </Heading>
        <Paragraph>
          Now we are checking is Is is exist in our AuthMenu Configuration Json
          if page is not exist in data then show error. If Page is exist then go
          to next step
        </Paragraph>

        <Heading as="h5" className="py-0">
          <span className="text-indigo-600">Step 2:</span> Call Option APi
        </Heading>
        <Paragraph>
          Now we are calling Option api and wait for response if we get error in
          api then show error. If our api is successful then go to next step
        </Paragraph>

        <Paragraph className="font-[600]">Option Api Data formate</Paragraph>

        <div className="mb-8">
          <JsonEditor
            rootName="login_option_json"
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
              },
              form: {
                title: "Email Login",
                description: null,
                form_template: "form-template-one",
                entity: "/noauth/api/login-via-email/",
                size: {
                  width: 50,
                  height: "auto",
                  maxWidth: 50,
                  maxHeight: 80,
                },
                column: {
                  desktop: 1,
                  laptop: 1,
                  tablet: 1,
                },
                gap: 4,
              },
              actions: {},
              table: {
                view: ["heading", "sub_heading", "email", "id"],
                filter: {},
              },
              layout: [
                {
                  template: "auth-style-one",
                  url: "/login",
                  entity: "/noauth/api/login-via-email/",
                  api: [],
                },
              ],
              permissions: [],
              POST: {
                heading: {
                  type: "heading",
                  label: "Welcome Back",
                  className: "mb-[-16px]",
                  style: {
                    align: "center",
                  },
                },
                sub_heading: {
                  type: "description",
                  label: "Please sign in to continue",
                  className: "mb-8",
                  style: {
                    align: "center",
                  },
                },
                email: {
                  type: "email",
                  read_only: false,
                  label: "Enter your email",
                  required: true,
                  max_length: 100,
                  icon: "email",
                  label_hidden: true,
                  placeholder: "Email",
                },
                create: {
                  type: "button",
                  required: true,
                  read_only: false,
                  label: "Login",
                  style: {
                    align: "right",
                    isFullWidth: true,
                    colMerge: {
                      deskTop: 1,
                      tablet: 1,
                      mobile: 1,
                    },
                  },
                  button_style: "login",
                },
              },
            }}
          />
        </div>

        <Heading as="h5" className="py-0">
          <span className="text-indigo-600">Step 3:</span> RenderTemplate
        </Heading>
        <Paragraph>
          Now get template name from option api, and checking is template is
          exist or not in our application if not exist then show error. If
          template is exist then got to next step
        </Paragraph>

        <Heading as="h5" className="py-0">
          <span className="text-indigo-600">Step 3:</span> Render Data on page
        </Heading>
        <Paragraph>
          Now we are Show skelton and Render template and call apis for data
          there are may be single or multiple api depend on requirement, and
          wait response. In API response get an error then show error in ui, if
          api is successed then Pass all data into template and display on Page
        </Paragraph>
        <div>
          <Image
            width={1600}
            height={1600}
            src="/login-page.png"
            className="shadow-lg rounded-md border"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default AuthMenu;
