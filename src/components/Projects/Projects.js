import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Houseparty from "../../Assets/Projects/Houseparty.webp";
import Market from "../../Assets/Projects/Market.webp";
import Netflix from "../../Assets/Projects/Netflix.jpeg";
import Ecommerce from "../../Assets/Projects/ECommerce.jpeg";
import Stock from "../../Assets/Projects/Stocl.webp";
import Churn from "../../Assets/Projects/Churn.webp";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Houseparty}
              isBlog={false}
              title="House Party Application"
              description="
              The Full Stack Application for House Party is a dynamic web application designed to streamline the process of organizing and managing house parties. Built with a robust tech stack, including React for the front-end and Node.js for the back-end, this application offers a seamless user experience. Users can create and customize party invitations, manage guest lists, and track RSVPs effortlessly. The app also integrates features like real-time updates and notifications, ensuring hosts stay informed and guests stay engaged. This project demonstrates my proficiency in full stack development, combining intuitive design with powerful functionality to create a user-friendly event management solution."
              ghLink="https://github.com/sathvikaa29/Full-Stack-Applicationf-for-House-Party"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Market}
              isBlog={false}
              title="Market Basket Analysis"
              description="The Market Basket Analysis project utilizes data mining techniques to uncover associations and correlations between products in a retail setting. By analyzing transaction data, this project identifies frequently co-purchased items, enabling retailers to optimize product placements, design effective cross-selling strategies, and enhance promotional efforts. Implemented using powerful analytics tools, this project highlights my expertise in data analysis and my ability to derive actionable business insights from complex datasets. The resulting insights help businesses understand customer purchasing patterns, ultimately driving increased sales and customer satisfaction."
              ghLink="https://github.com/sathvikaa29/Market-Basket-Analysis"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Churn}
              isBlog={false}
              title="Telecom Churn Prediction"
              description="The Telecom Churn Prediction project employs advanced machine learning techniques to identify customers at risk of leaving a telecom service provider. By analyzing customer data, including usage patterns, service quality, and demographics, the model predicts churn with high accuracy. This project leverages algorithms such as logistic regression, decision trees, and gradient boosting to provide actionable insights into customer retention strategies. The results help telecom companies proactively address customer dissatisfaction and enhance loyalty programs. This project highlights my expertise in data science and predictive analytics, demonstrating my ability to create solutions that drive business growth and improve customer satisfaction."
              ghLink="https://github.com/sathvikaa29/Telecom-Churn-Prediction"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Netflix}
              isBlog={false}
              title="Netflix Dashboard"
              description="The Netflix Dashboard project is a data visualization initiative designed to provide insights into Netflix's vast content library and user engagement metrics. Utilizing Power BI, this dashboard offers interactive visualizations that analyze key metrics such as viewership trends, content popularity, and user demographics. The project enables stakeholders to explore data-driven insights, helping them understand audience preferences and make informed decisions about content strategy. This project showcases my ability to transform complex datasets into intuitive visual stories, demonstrating my proficiency in data analytics and visualization tools to deliver valuable business intelligence."
              ghLink="https://github.com/sathvikaa29/Netflix-Dashboard"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecommerce}
              isBlog={false}
              title="E-Commerce PowerBI"
              description="The E-commerce Power BI project is a comprehensive business intelligence solution designed to provide actionable insights for online retail businesses. Leveraging the powerful data visualization capabilities of Power BI, this project analyzes key performance metrics such as sales trends, customer behavior, and product performance. The interactive dashboards enable users to drill down into specific data points, facilitating informed decision-making and strategic planning. This project showcases my ability to transform raw data into meaningful visual stories, helping businesses optimize their operations and drive growth through data-driven insights."
              ghLink="https://github.com/sathvikaa29/E-commerce-PowerBI-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Stock}
              isBlog={false}
              title="LSTM Stock Prediction"
              description="The LSTM Stock Prediction project leverages Long Short-Term Memory (LSTM) neural networks to forecast stock prices with high accuracy. By processing historical stock data, this project aims to predict future stock trends, helping investors and traders make informed decisions. Utilizing advanced machine learning techniques, the model captures temporal dependencies and patterns within the data. This project showcases my proficiency in deep learning and time series analysis, demonstrating my ability to apply complex algorithms to real-world financial problems. The insights gained from this model can significantly enhance investment strategies and risk management."
              ghLink="https://github.com/sathvikaa29/LSTM-Stock-Prediction"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
