<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="css/Hostels/hostelRegistrationS2.css" />
    <title>Hostel Registration-Step 2</title>
  </head>
  <body>
    <section class="head-section">
      <a class="website-name" href="index.html"
        ><strong>WebsiteLoChudu</strong></a
      >
      <nav class="nav">
        <a href="Login.jsp" class="Workspace"><strong>Workspace</strong></a>
      </nav>
    </section>

    <section class="about-section">
      <div class="description">
        <p class="phrase"><strong>Welcome</strong></p>
        <p class="phrase1 notes">Make your first move to work with us.</p>
        <p class="phrase1 notes">
          Register your Thing and move it on to the Internet.
        </p>
        <p class="phrase"><strong>Step 2</strong></p>
      </div>
      <div class="illustration">
        <img
          class="illustration-img"
          src="images\Secure login-bro.svg"
          alt="illustrating how the WebsiteLoChudu work"
        />
      </div>
    </section>

    <section class="color">
      <div class="info-section">
        <ul>
          <li class="phrase1">Enter the Required details.</li>
          <li class="phrase1">
            Watch out for your <span class="phrase-color">Hostel Id</span> and
            Set a
            <span class="phrase-color">Password</span>
            below.
          </li>
          <li class="phrase1">
            Those Credentials helps you to log-in to your Hostel and allows you
            to make changes.
          </li>
        </ul>
        <!-- <li></li> -->
      </div>
    </section>

    <div class="">
      <section class="hostel-registration">
        <div class="phrase2"><strong>Hostel-Registration</strong></div>
      </section>

      <div class="form">
        <div class="form-element">
          <label for="hostel-name" class="label">Hostel Name</label>
          <input
            type="text"
            id="hostel-name"
            class="text-input"
            oninput="checkChange(0)"
          />
          <p id="hostel-name-message" class="notes message">
            35 charecters remaining
          </p>
        </div>

        <div class="form-element">
          <label for="hostel-owner-name" class="label">Owner's Name</label>
          <input
            type="text"
            id="hostel-owner-name"
            class="text-input"
            oninput="checkChange(1)"
          />
          <p id="owner-name-message" class="notes message">
            15 charecters remaining
          </p>
        </div>

        <div class="form-element">
          <label for="hostel-owner-contact" class="label"
            >Owner's Contact</label
          >
          <input
            type="text"
            id="hostel-owner-contact"
            class="text-input"
            oninput="checkChange(2)"
          />
          <p id="contact-message" class="notes message">
            10 charecters remaining
          </p>
        </div>

        <div class="form-element">
          <label for="" class="label">Hostel Type</label>
          <div>
            <input
              type="radio"
              id="hostel-type-public"
              value="Public"
              name="type"
              class="radio-button"
              checked
              onclick="checkChange(3)"
            />
            <label
              for="hostel-type-public"
              class="label1"
              onclick="checkChange(3)"
              >Public</label
            >
          </div>

          <div>
            <input
              type="radio"
              id="hostel-type-community"
              value="Community"
              name="type"
              class="radio-button"
              onclick="checkChange(3)"
            />
            <label
              for="hostel-type-community"
              class="label1"
              onclick="checkChange(3)"
              >Community</label
            >
          </div>
          <input
            type="text"
            name="community-name"
            id="community-name"
            class="text-input hide"
            oninput="checkChange(4)"
            placeholder="Enter Community name.."
          />
          <p id="community-message" class="notes message hide">
            10 charecters remaining
          </p>
        </div>

        <div class="form-element">
          <label for="" class="label">Select Gender</label>
          <div>
            <input
              type="radio"
              id="hostel-gender-male"
              value="male"
              name="gender"
              class="radio-button"
              onclick="checkChange(5)"
              checked
            />
            <label
              for="hostel-gender-male"
              class="label1"
              onclick="checkChange(5)"
              >Male</label
            >
          </div>
          <div>
            <input
              type="radio"
              id="hostel-gender-female"
              value="female"
              name="gender"
              class="radio-button"
              onclick="checkChange(5)"
            />
            <label
              for="hostel-gender-female"
              class="label1"
              onclick="checkChange(5)"
              >Female</label
            >
          </div>
        </div>

        <div class="form-element">
          <label for="" class="label">Location</label>
          <button id="location-button" class="label1" onclick="addLocation()">
            Add Location
          </button>
          <p class="label1" id="location-status">Not Recorded</p>
        </div>

        <div class="form-element">
          <label for="" class="label">Landmark</label>
          <input type="text" id="landmark" class="text-input" readonly value="<%
          String s=request.getParameter("l"); out.println(s); %>"/>
          <!-- <dump id="dump"
            ><% out.println(request.getParameter("l").toString()); %></dump
          > -->
        </div>
      </div>
    </div>

    <div class="color">
      <section class="credential-setup">
        <div class="phrase2"><strong>Credential-Setup</strong></div>
      </section>

      <section class="credentials-section">
        <div class="illustration">
          <img
            class="illustration-img"
            src="images/collaboration.svg"
            alt="colaboration"
          />
        </div>

        <div class="credentials">
          <div class="form-element pad">
            <label for="hostel-id" class="label">Hostel-ID</label>
            <input type="text" id="hostel-id" readonly class="text-input" />
          </div>
          <div class="form-element pad">
            <label for="" class="label">Password</label>
            <input
              id="password"
              type="password"
              class="text-input pad"
              placeholder="enter password"
            />
            <input
              id="re-password"
              type="password"
              class="text-input pad"
              oninput="checkPassword()"
              placeholder="re-enter password"
            />
            <p id="password-message" class="notes message hide">Not Matched</p>
          </div>
          <div style="display: flex; justify-content: end; align-items: center">
            <button class="submit-button pad" onclick="checkDataValidation()">
              Submit
            </button>
          </div>
        </div>
      </section>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="js/Hostels/hostelRegistrationS2.js"></script>
  </body>
</html>