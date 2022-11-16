import { Box, Typography } from "@mui/material";
import React from "react";
import ResponsiveAppBar from "./NavBar";

function PrivacyPolicy() {
  return (
    <Box>
      <ResponsiveAppBar />
      <Box style={{ margin: "15px" }}>
        <Box>
          <Typography variant="h2">Privacy Policy :</Typography>
          <Typography variant="p">
            This privacy policy is an electronic record in the form of an
            electronic contract formed under the information technology act,
            2000 and the rules made there under and the amended provisions
            pertaining to electronic documents / records in various statutes as
            amended by the information technology act, 2000. This privacy policy
            does not require any physical, electronic or digital signature.
            <br />
            <br />
            Fitshop The supplement store and its affiliates and Associate
            Companies is/are concerned about the privacy of the data and
            information of users (including sellers and buyers/customers whether
            registered or non-registered), offering, selling or purchasing
            products or services on websites, mobile sites or mobile
            applications (“Website”) on the Website and otherwise doing business
            with us. “Associate Companies” here shall have the same meaning as
            ascribed in Companies Act, 2013. This Privacy Policy is a contract
            between you and the respective entity whose website you use or
            access or you otherwise deal with. This Privacy Policy shall be read
            together with the respective Terms Of Use or other terms and
            condition of the respective entity and its respective website or
            nature of business of the Website.
          </Typography>
        </Box>
        <Box style={{ margin: "4px" }}>
          <Typography variant="h2">
            Collection of Personally Identifiable Information
          </Typography>
          <Typography variant="p">
            We collect information from you when you place an order or subscribe
            to our website. When ordering or registering on our site, as
            appropriate, you may be asked to enter your: name, e-mail address,
            mailing address, phone number or credit card information. Our
            primary goal in doing so is to provide you a safe, efficient, smooth
            and customised experience. The information we learn from customers
            helps us personalise and continually improve your experience of
            shopping from our web store.
          </Typography>
        </Box>
        <Box style={{ margin: "4px" }}>
          <Typography variant="h2">
            Use of Demographic / Profile Data
          </Typography>
          <Typography variant="p">
            We use personal information to provide the services you request. To
            the extent we use your personal information to market to you, we
            will provide you the ability to opt-out of such uses. We use your
            personal information to resolve disputes; troubleshoot problems;
            help promote a safe service; collect money; measure consumer
            interest in our products and services, inform you about online and
            offline offers, products, services, and updates In our efforts to
            continually improve our product and service offerings, we collect
            and analyse demographic and profile data about our user's activity
            on our Website.
          </Typography>
        </Box>
        <Box style={{ margin: "4px" }}>
          <Typography variant="h2">Permissions</Typography>
          <Typography variant="p">
            Permissions Identity : The identity permission allows the app to
            access all saved account on your device, as well as access and
            change your personal information stored on the device. By account we
            mean everything you will see if you go to Settings > Accounts. There
            you will probably find a list that will probably contain your Google
            account, Facebook, WhatsApp, Skype and many others. SMS : Under
            certain circumstances, we may send you emails and SMS messages when
            we feel we have an important announcement to share regarding your
            Service. Please note that your carrier may charge you to receive
            messages via SMS.
            <br />
            Photos/Media/Files : Apps usually request Media and Photos
            permission when it needs External File Storage (either Internal or
            External) for storing some data, or for some features like sharing
            images etc. Phones : The phone permission is useful for the app that
            allows you to place and receive calls within an app.
            <br />
            Camera and microphone : It needs access to camera in order for you
            to post pictures of products without the picture have being stored
            prior to posting (so for example, if you want to post picture you
            can select an option to take a picture at that moment, to do this
            you must allow to access your camera to avoid asking you permission
            each time. The microphone would be needed for voice search. Call
            phone numbers (even without your intervention) Read and write call
            logs Reroute calls
          </Typography>
        </Box>
        <Box>
          <Typography variant="h2">Terms and Conditions for SBE</Typography>
          <Typography variant="p">These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Webiste Name accessible at myshribalajienterprise.com.

These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.

Minors or people below 18 years old are not allowed to use this Website.</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default PrivacyPolicy;
