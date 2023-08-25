import React from "react";
import { useNavigate } from "react-router-dom";

export default function altfooter() {
  return (
    <div>
      <footer
        class="text-center text-lg-start text-white"
        style={{ "background-color": "#1c2331" }}
      >
        <section
          class="d-flex justify-content-between p-4"
          style={{ "background-color": "#6351ce" }}
        >
          <div class="me-5">
            <span>Get connected with us on social networks :</span>
          </div>

          <div>
            <a
              class="text-white me-4"
              href="https://www.linkedin.com/company/futech-systems/mycompany/"
            >
              <i class="fab fa-linkedin">linkedIn</i>
            </a>
            <a
              class="text-white me-4"
              href="https://github.com/MostafaVT/FuTech-Intern-Project/tree/main"
            >
              <i class="fab fa-github">Github</i>
            </a>
          </div>
        </section>

        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold">FuTech Systems</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    "background-color": "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  Our system stores the message log data in an MS SQL Server
                  database, ensuring reliable and scalable storage for your
                  monitoring needs. The use of MS SQL Server guarantees high
                  performance and seamless integration with the backend
                  infrastructure.
                </p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold">Channel Partners</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    "background-color": "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <a class="text-white" href="https://www.ibm.com/us-en">
                    IBM
                  </a>
                </p>
                <p>
                  <a
                    class="text-white"
                    href="https://www.ibm.com/products/maximo"
                  >
                    MAXIMO
                  </a>
                </p>
                <p>
                  <a class="text-white" href="https://www.bentley.com/">
                    BENTLEY
                  </a>
                </p>
                <p>
                  <a class="text-white" href="https://www.oracle.com/">
                    ORACLE
                  </a>
                </p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold">Useful links</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    "background-color": "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <a href="/login" class="text-white">
                    Your Account
                  </a>
                </p>
                <p>
                  <a href="https://activemq.apache.org/" class="text-white">
                    Apache ActiveMQ
                  </a>
                </p>
                <p>
                  <a
                    href="https://spring.io/guides/gs/messaging-jms/"
                    class="text-white"
                  >
                    Spring Boot JMS
                  </a>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold">Contact</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    "background-color": "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <i class="fas fa-home mr-3"></i> 54 Al Saydah Khadejah St. Al
                  Sefarat Area, Nasr City
                </p>
                <p>
                  <i class="fas fa-envelope mr-3"></i> futech-eg.com
                </p>
                <p>
                  <i class="fas fa-phone mr-3"></i> Cairo
                </p>
                <p>
                  <i class="fas fa-print mr-3"></i> Egypt
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          class="text-center p-3"
          style={{ "background-color": "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <a class="text-white" href="http://www.futech-eg.com/index.php">
            FuTech-Systems
          </a>
        </div>
      </footer>
    </div>
  );
}
