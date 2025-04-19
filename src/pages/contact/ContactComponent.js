import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import BlogsImg from "./BlogsImg";
import AddressImg from "./AddressImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";
import emailjs from "emailjs-com";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
      showSuccessMessage: false
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send("service_walks0c", "template_02oz6sl", {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone || "Not Provided",
      message: this.state.message || "No Message",
      title: "Contact Request from Portfolio"
    }, "Lntl0B3Y_CMXytE0M")
      .then((response) => {
        this.setState({
          name: "",
          email: "",
          phone: "",
          message: "",
          showSuccessMessage: true
        });
        setTimeout(() => this.setState({ showSuccessMessage: false }), 5000);
      }, (err) => {
        alert("Failed to send message. Please try again later.");
        console.error("EmailJS error:", err);
      });
  }

  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img
                  src={require(`../../assets/images/${ContactData["profile_image_path"]}`)}
                  alt=""
                />
              </div>
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  {ContactData["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactData["description"]}
                </p>
                <SocialMedia theme={theme} />
                <div className="resume-btn-div">
                  <Button
                    text="See My Resume"
                    newTab={true}
                    href={greeting.resumeLink}
                    theme={theme}
                  />
                </div>
              </div>
            </div>
          </Fade>

          <Fade bottom duration={1000} distance="40px">
            <div className="contact-form-div-text">
              <h1 style={{ color: theme.text }}>Get In Touch</h1>
            </div>

            <div className="address-heading-div">
              <div className="contact-heading-img-div">
                {/* <img
											src={require(`../../assets/images/${addressSection["avatar_image_path"]}`)}
											alt=""
										/> */}
                <AddressImg theme={theme} />
              </div>

              <div className="contact-form-div styled-form" style={{ maxWidth: "500px", margin: "0 auto" }}>
                <form onSubmit={this.handleSubmit} className="contact-form">
                  <input
                    className="styled-input"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    required
                    style={{ display: "block", width: "100%", marginBottom: "15px", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
                  />
                  <input
                    className="styled-input"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                    style={{ display: "block", width: "100%", marginBottom: "15px", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
                  />
                  <input
                    className="styled-input"
                    type="tel"
                    name="phone"
                    placeholder="Your Phone Number"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    style={{ display: "block", width: "100%", marginBottom: "15px", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
                  />
                  <textarea
                    className="styled-textarea"
                    name="message"
                    placeholder="Your Message"
                    value={this.state.message}
                    onChange={this.handleChange}
                    rows="5"
                    style={{ display: "block", width: "100%", marginBottom: "20px", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
                  ></textarea>

                  <div className="submit-btn-div" style={{ textAlign: "center" }}>
                    <button
                      className="project-button"
                      type="submit"
                      style={{ backgroundColor: "#0a1f63", color: theme.body, padding: "10px 25px", borderRadius: "5px", border: "none", fontSize: "16px", cursor: "pointer" }}
                    >
                      Send Message
                    </button>
                  </div>

                  {this.state.showSuccessMessage && (
                    <p style={{ color: "green", marginTop: "10px", textAlign: "center" }}>
                      ✅ Message sent successfully!
                    </p>
                  )}
                </form>
              </div>
            </div>
            {/* <div style={{ width: "100%", minHeight: "630px" }}>
                <iframe
                  src="https://calendly.com/sri-animesh28/30min"
                  width="100%"
                  height="630"
                  frameBorder="0"
                  title="Schedule Meeting"
                  style={{ border: "none" }}
                ></iframe>
              </div> */}

            {/* <div style={{ marginTop: "20px" }}>
                <a
                  href="https://calendly.com/sri-animesh28/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: theme.text, textDecoration: "underline" }}
                >
                  Or schedule a meeting directly via Calendly
                </a>
              </div> */}

          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
