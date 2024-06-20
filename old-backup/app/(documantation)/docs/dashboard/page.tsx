"use client";
import React from "react";
import Image from "next/image";
import { Heading, List, Paragraph } from "@/components/core";
import { JsonEditor } from "json-edit-react";
const Dashboard = () => {
  return (
    <div className="">
      <Heading as="h2">Admin menu</Heading>
      <Paragraph>
        Admin menu is responsible to handle all Admin pages like Login, register
        and Verify user Pages. here we have two pages configuration json Login
        and Verify Otp. Here we have template name, label, url, entity, id,
        keepToken, caches, and prevPram.
      </Paragraph>
      <div className="py-5">
        <JsonEditor
          rootName="AdminMenu"
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
              entity: "/noAdmin/api/login-via-email/",
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
          <b>nextPage:</b> This is next page url. After Admin form submit
          success fully then we can redirect user to next page using{" "}
          <b>nextPage</b>
        </List.Item>
        <List.Item as="ul">
          <b>param:</b> if we want to send some data from one to another Admin
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
          Process of Admin Login Page
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
          Now we are checking is Is is exist in our AdminMenu Configuration Json
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
            collapse={false}
            theme={"githubDark"}
            data={{}}
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
        <Paragraph className="font-[600]">Get API Json</Paragraph>
        <div className="mb-8">
          <JsonEditor
            rootName="login_option_json"
            enableClipboard={false}
            restrictEdit={true}
            restrictDelete={true}
            restrictAdd={true}
            collapse={2}
            theme={"githubDark"}
            data={{
              count: 3,
              per_page: 5,
              previous: null,
              next: null,
              response: [
                {
                  id: 3,
                  display_name: "Price - Low to High",
                  key: "rooms.total_rent",
                  orderby: "asc",
                  display_order: 1,
                },
                {
                  id: 2,
                  display_name: "Availability",
                  key: "rooms.status.keyword",
                  orderby: "desc",
                  display_order: 3,
                },
                {
                  id: 1,
                  display_name: "Price - High to Low",
                  key: "rooms.total_rent",
                  orderby: "desc",
                  display_order: 2,
                },
              ],
            }}
          />
        </div>
        <div className="mb-10">
          <Image
            src="/dashboard.tsx.png"
            className="shadow rounded-lg"
            width={1600}
            height={1600}
            alt=""
          />
        </div>
        <Paragraph className="font-[600]">Option APi Json</Paragraph>
        <div className="mb-8">
          <JsonEditor
            rootName="login_option_json"
            enableClipboard={false}
            restrictEdit={true}
            restrictDelete={true}
            restrictAdd={true}
            collapse={2}
            theme={"githubDark"}
            data={{
              data: {
                get: {
                  count: 3,
                  per_page: 5,
                  previous: null,
                  next: null,
                  response: [
                    {
                      id: 3,
                      display_name: "Price - Low to High",
                      key: "rooms.total_rent",
                      orderby: "asc",
                      display_order: 1,
                    },
                    {
                      id: 2,
                      display_name: "Availability",
                      key: "rooms.status.keyword",
                      orderby: "desc",
                      display_order: 3,
                    },
                    {
                      id: 1,
                      display_name: "Price - High to Low",
                      key: "rooms.total_rent",
                      orderby: "desc",
                      display_order: 2,
                    },
                  ],
                },
              },
              config: {
                meta: {
                  title: "XU Lifestyle",
                  description: "",
                },
                form: {
                  title: "Property Sort",
                  description: null,
                  form_template: "form-template-one",
                  entity: "/api/property-sort/",
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
                  nested_actions: true,
                  key: "property-sort",
                },
                actions: {
                  view: {
                    label: "View",
                    icon: "eye",
                  },
                  edit: {
                    label: "Edit",
                    icon: "pencil",
                    inlineUpdate: false,
                  },
                  delete: {
                    label: "delete",
                    icon: "delete",
                  },
                },
                table: {
                  view: [
                    "display_order",
                    "display_name",
                    "key",
                    "orderby",
                    "id",
                  ],
                  filter: {},
                },
                layout: [
                  {
                    template: "dashboard-generic-grid",
                    detailsTemplate: "dashboard-generic-list-details",
                    url: "/dashboard/property-sort",
                    entity: "/api/property-sort/",
                    api: [
                      {
                        entity: "/api/property-sort/",
                        method: "GET",
                        apiKey: "get",
                        isSearch: true,
                        isDetails: true,
                      },
                    ],
                  },
                ],
                permissions: [
                  "get",
                  "put",
                  "patch",
                  "post",
                  "delete",
                  "options",
                ],
                POST: {
                  id: {
                    column_name: "id",
                    label: "Id",
                    type: "integer",
                    choices: [],
                    search_url: "",
                    required: true,
                    max_length: 32,
                    auto_created: true,
                    hidden: true,
                  },
                  display_order: {
                    column_name: "display_order",
                    label: "Display Order",
                    type: "integer",
                    choices: [],
                    search_url: "",
                    required: false,
                    max_length: 32,
                    auto_created: true,
                  },
                  display_name: {
                    column_name: "display_name",
                    label: "Display Name",
                    type: "string",
                    choices: [],
                    search_url: "",
                    required: false,
                    max_length: null,
                    auto_created: false,
                  },
                  key: {
                    column_name: "key",
                    label: "Key",
                    type: "string",
                    choices: [],
                    search_url: "",
                    required: false,
                    max_length: null,
                    auto_created: false,
                  },
                  orderby: {
                    column_name: "orderby",
                    label: "Orderby",
                    type: "string",
                    choices: [],
                    search_url: "",
                    required: false,
                    max_length: null,
                    auto_created: true,
                  },
                  create: {
                    type: "button",
                    required: true,
                    read_only: false,
                    label: "Submit",
                    style: {
                      align: "right",
                      isFullWidth: true,
                      colMerge: {
                        deskTop: 1,
                        tablet: 1,
                        mobile: 1,
                      },
                    },
                  },
                },
              },
            }}
          />
        </div>
        <div className="mb-10">
          <Image
            src="/edit.tsx.png"
            className="shadow rounded-lg"
            width={1600}
            height={1600}
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
