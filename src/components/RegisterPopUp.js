import React, { Component } from "react";
//import RadioButton from "./RadioButton";
import axios from "axios";
import "../assets/styles/main.css";
import "../assets/fonts/Font-Awesome/css/font-awesome.css";
import Message from "../components/Message"

class RegisterPopUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      s_fullname: "",
      s_email: "",
      s_idea: "",
      s_phone_number: "",
      verb: "",
      fullname: "",
      email: "",
      phone_number: "",
      reason: "",
      msg:""
    };
    this.handleChangeRadio = this.handleChangeRadio.bind(this);
    this.handleChangeS_fullname = this.handleChangeS_fullname.bind(this);
    this.handleChangeS_email = this.handleChangeS_email.bind(this);
    this.handleChangeS_phone_number = this.handleChangeS_phone_number.bind(
      this
    );
    this.handleChangeS_idea = this.handleChangeS_idea.bind(this);
    this.handleChange_fullname = this.handleChange_fullname.bind(this);
    this.handleChange_email = this.handleChange_email.bind(this);
    this.handleChange_phone_number = this.handleChange_phone_number.bind(this);
    this.handleChange_reason = this.handleChange_reason.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeRadio(e) {
    this.setState({
      verb: e.target.value,
    });
  }
  handleChangeS_email(e) {
    this.setState({
      s_email: e.target.value,
    });
  }
  handleChangeS_fullname(e) {
    this.setState({
      s_fullname: e.target.value,
    });
  }
  handleChangeS_idea(e) {
    this.setState({
      s_idea: e.target.value,
    });
  }
  handleChange_email(e) {
    this.setState({
      email: e.target.value,
    });
  }
  handleChange_fullname(e) {
    this.setState({
      fullname: e.target.value,
    });
  }
  handleChange_phone_number(e) {
    this.setState({
      phone_number: e.target.value,
    });
  }
  handleChange_reason(e) {
    this.setState({
      reason: e.target.value,
    });
  }
  handleChangeS_phone_number(e) {
    this.setState({
      s_phone_number: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
        const speaker = {
        S_fullname: this.state.s_fullname,
        S_email: this.state.s_email,
        number: this.state.s_phone_number,
        full_name: this.state.fullname,
        email: this.state.email,
        phone_number: this.state.phone_number,
        S_reason: this.state.reason,
        S_idea: this.state.s_idea,
        verb: this.state.verb
      };
      
      axios
        .post("http://127.0.0.1:8000/volunteer/speaker/", speaker)
        .then((response) => {
            console.log(response.statusText)
            this.setState({
              msg: "true"
            })
          
        }).catch((error) => {
          this.setState(
            {msg : "false"}
          )  
        });
  }

  render() {
    return (
      <div className="registerPopUp" id="registerPopUp">
        <div className="registerPopUp__content">
          <a className="registerPopUp__closebtn" href="#">
            <i className="fa fa-remove"></i>
          </a>

          <div className="container">
            <h1
              style={{ marginBottom: "1 rem" }}
              className="description__title"
            >
              فرم معرفی سخنران
            </h1>
            <span className="underline_red"></span>
            <span className="underline_black"></span>

            <form
              onSubmit={this.handleSubmit}
              action="#"
              className="form"
              method="post"
            >
              <div className="form__group">
                <div className="radioButtons">
                  <div className="form__radio-group">
                    <input
                      type="radio"
                      className="form__radio-input"
                      id="small"
                      name="size"
                      value="be"
                      onChange={this.handleChangeRadio}
                    />
                    <label htmlFor="small" className="form__radio-label">
                      <span className="form__radio-button"></span>
                      خودم سخنران هستم
                    </label>
                  </div>

                  <div className="form__radio-group">
                    <input
                      type="radio"
                      className="form__radio-input"
                      id="large"
                      name="size"
                      value="introduce"
                      onChange={this.handleChangeRadio}
                    />
                    <label htmlFor="large" className="form__radio-label">
                      <span className="form__radio-button"></span>
                      می‌خواهم سخنران معرفی کنم
                    </label>
                  </div>
                </div>
              </div>

              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="نام و نام خانوادگی"
                  id="name"
                  required
                  value={this.state.s_fullname}
                  onChange={this.handleChangeS_fullname}
                />
                <label htmlFor="name" className="form__label">
                  نام و نام خانوادگی
                </label>
              </div>

              <div className="form__group">
                <input
                  type="email"
                  className="form__input"
                  placeholder="آدرس پست الکترونیکی"
                  id="email"
                  required
                  value={this.state.s_email}
                  onChange={this.handleChangeS_email}
                />
                <label htmlFor="email" className="form__label">
                  پست الکترونیکی
                </label>
              </div>

              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="شماره تلفن همراه"
                  id="phone"
                  required
                  value={this.state.s_phone_number}
                  onChange={this.handleChangeS_phone_number}
                />
                <label htmlFor="phone" className="form__label">
                  شماره تلفن همراه
                </label>
              </div>

              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="نام و نام خانوادگی سخنران"
                  id="nameSpeaker"
                  required
                  value={this.state.fullname}
                  onChange={this.handleChange_fullname}
                />
                <label htmlFor="nameSpeaker" className="form__label">
                  نام و نام خانوادگی سخنران
                </label>
              </div>

              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="پست الکترونیکی سخنران"
                  id="emailSpeaker"
                  required
                  value={this.state.email}
                  onChange={this.handleChange_email}
                />
                <label htmlFor="emailSpeaker" className="form__label">
                  پست الکترونیکی سخنران
                </label>
              </div>

              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="شماره تلفن همراه سخنران"
                  id="phoneSpeaker"
                  required
                  value={this.state.phone_number}
                  onChange={this.handleChange_phone_number}
                />
                <label htmlFor="phoneSpeaker" className="form__label">
                  شماره تلفن همراه سخنران
                </label>
              </div>

              <div className="form__group">
                <label className="form__label--2" htmlFor="idea">
                  چه ایده‌ای را میخواهید مطرح کنید؟
                </label>
                <textarea
                  className="form__textarea"
                  id="idea"
                  required
                  value={this.state.s_idea}
                  onChange={this.handleChangeS_idea}
                />
              </div>

              <div className="form__group">
                <label className="form__label--2" htmlFor="reason">
                  دلیل معرفی شما چیست؟
                </label>
                <textarea
                  className="form__textarea"
                  id="reason"
                  value={this.state.reason}
                  onChange={this.handleChange_reason}
                />
              </div>

              <div className="form__group--button">
                <button className="navbar__register">ارسال</button>
              </div>

              <Message isTrue={this.state.msg} />
              
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterPopUp;
