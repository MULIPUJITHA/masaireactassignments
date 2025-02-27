import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

// ✅ Reusable Button Component
const Button = ({ text }) => {
  return <button className="btn">{text}</button>;
};

// ✅ Reusable Feature List Component
const FeatureList = ({ features }) => {
  return (
    <ul className="features">
      {features.map((feature, index) => (
        <li key={index} className="feature">
          ✅ {feature}
        </li>
      ))}
    </ul>
  );
};

// ✅ Reusable Plan Component
const Plan = ({ title, price, features }) => {
  return (
    <div className="plan">
      <div className="plan-details">
        <h3 className="plan-title">{title}</h3>
        <FeatureList features={features} />
      </div>
      <div className="plan-price">{price}</div>
      <Button text="Get Started" />
    </div>
  );
};

// ✅ Main Pricing Table Component
const PricingTable = () => {
  const plans = [
    { title: "Starter", price: "Free", features: ["1 lorem ipsum", "Lorem, ipsum dolor.", "Monthly Updates"] },
    { title: "Lorem Plus", price: "$32.00", features: ["1 lorem ipsum", "Lorem, ipsum dolor.", "Monthly Updates"] },
    { title: "Lorem Pro", price: "$50.00", features: ["1 lorem ipsum", "Lorem, ipsum dolor.", "Monthly Updates"] },
  ];

  return (
    <div className="pricing-container">
      <h2 className="heading">
        The Right Plan for <span>Your Business</span>
      </h2>
      <p className="subtext">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quod in iure vero. Facilis magnam, sed officiis
        commodi labore odit.
      </p>
      {plans.map((plan, index) => (
        <Plan key={index} {...plan} />
      ))}
    </div>
  );
};

// ✅ Rendering to root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<PricingTable />);

// ✅ CSS Styling (styles.css)
/*
.pricing-container {
  width: 80%;
  margin: auto;
  text-align: center;
}

.heading {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.heading span {
  color: purple;
}

.subtext {
  color: gray;
  margin-bottom: 20px;
}

.plan {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-top: 1px solid lightgray;
}

.plan-details {
  text-align: left;
}

.plan-title {
  font-size: 18px;
  font-weight: bold;
}

.features {
  list-style: none;
  padding: 0;
}

.feature {
  margin: 5px 0;
}

.plan-price {
  font-size: 20px;
  font-weight: bold;
}

.btn {
  background-color: #b388eb;
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
*/
