import React from "react";
import Layout from "../components/Layout/Layout";
import "./PagenotFound.css";
const PagenotFound = () => {
  return (
    <Layout title="go back - page not found">
      <section class="page_404 ">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 ">
              <div
                class="col-sm-10 col-sm-offset-1  text-center flex-row justify-center sm:flex-col 
              sm:ml-20"
              >
                <div class="four_zero_four_bg">
                  <h1 class="text-center ">404</h1>
                </div>

                <div class="contant_box_404">
                  <h3 class="h2">Look like you're lost</h3>

                  <p>the page you are looking for not avaible!</p>

                  <a href="/" class="link_404">
                    Go to Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PagenotFound;
