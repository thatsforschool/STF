<template>
  <div class="privacy">
    <section class="breadCrumbs">
      <router-link class="breadCrumbItem" to="/">Home</router-link>
      <p class="breadCrumbItem">/</p>
      <router-link class="breadCrumbItem" to="/privacy_policy"
        >Privacy Policy</router-link
      >
    </section>
    <article class="flex">
      <main class="text">
        <h1>Privacy policy</h1>
        <h3 class="sectionTitle">
          Current and former members of Spildevandsteknisk Forening
        </h3>
        <p class="sectionText">
          As a data controller, we will ensure data protection in our dealings
          with the information we handle, and we will ensure that we comply with
          data protection legislation. In this privacy policy, we describe our
          processing of information about our members.
        </p>
        <h3 class="sectionTitle">Personal</h3>
        <p class="sectionText">
          data processing General Personal data is the information that can be
          attributed to you to one extent or another. When you use our website,
          we collect and process various information about you. This happens if
          you sign up for one of our newsletters or if you sign up for one of
          our events. When you make your personal data available, it will be
          clearly stated where your data will be used.
        </p>
        <h3 class="sectionTitle">We use this type of data about you</h3>
        <p class="sectionText">
          <b>We use data about you to: </b><br />
          Be able to offer you the services that are part of our association,
          for example course participation, receiving one of our newsletters and
          other inquiries <br />
        </p>
        <p>
          <b>The data we use includes:</b> <br />· Simple personal data such as
          name, address, telephone number, email and demographic information
          <br />· Financial information such as invoice-related information
        </p>
        <h3 class="sectionTitle">How information is collected:</h3>
        <p class="sectionText">
          When you join Spildevandsteknisk forening and when you register for
          one of our events or for the newsletter, we collect the information
          from you.
        </p>
        <h3 class="sectionTitle">Purpose and legal basis</h3>
        <p class="sectionText">The purpose of processing your personal data:</p>
        <ul>
          <li>
            Ongoing administration of your relationship with Spildevandsteknisk
            Forening, for example, when you are registered in the association or
            take part in some of the courses and networking days that we
            arrange.
          </li>
          <li>
            Ensure that you receive the newsletters from the association that
            you want
          </li>
          <li>
            We only process your information to the extent necessary to fulfill
            the purposes for which the information was collected. We must inform
            you about our legal basis for processing your information, which is
            the following: Processing of information for the purpose of
            fulfilling an agreement: Article 6, paragraph 1 of the Personal Data
            Regulation. 1, letter b
          </li>
        </ul>
        <h3 class="sectionTitle">Checking and updating of personal data</h3>
        <p class="sectionText">
          Your personal data is continuously updated and checked. It is
          important that they are correct. Therefore, we ask you to inform us of
          any changes.
        </p>
        <h3 class="sectionTitle">Obtaining consent</h3>
        <p class="sectionText">
          In some cases it is necessary for Spildvandsteknisk Forening to obtain
          consent to process your data. We will inform you about such a basis
          and about our basis for processing your personal data. Your consent is
          voluntary. You will therefore ask to have the consent withdrawn at any
          time
        </p>
        <h3 class="sectionTitle">Storage of data</h3>
        <p class="sectionText">
          Your data will be stored for the period that is necessary to be able
          to fulfill the obligations Spildevandsteknisk Forening has towards you
          as a member, and/or to fulfill the legislation, including the
          bookkeeping act's rules on the storage of bookkeeping material for 5
          years We delete the data we have about you when it is no longer
          necessary in relation to the purpose of collecting your data.
        </p>
        <h3 class="sectionTitle">Disclosure of data</h3>
        <p class="sectionText">
          Your personal data will only be disclosed to the extent necessary to
          our data processors in connection with events in the association. Data
          processing agreements have been concluded with these data processors.
          In order for us to fulfill the purpose of the association, we have
          entered into an agreement with the following data processors:
        </p>
        <ul>
          <li>BetterBoard – online board portal</li>
          <li>
            CampaignMonitor – online program for sending and managing
            newsletters
          </li>
          <li>
            ConferenceManager – online planning tool for conferences and events
          </li>
          <li>Dynamic Web – administration of the website</li>
          <li>E-conomic – online financial system</li>
          <li>Issuu – online publishing platform</li>
        </ul>
      </main>
      <aside class="contact">
        <h3 class="sectionTitle">
          The identity and contact details of the company responsible for the
          data:
        </h3>
        <address>
          <p>Spildevandsteknisk Forening</p>
          <p><b>Adress:</b> Elborg Syd 2, 7000 Fredericia</p>
          <p><b>mail:</b> <a mailto="sek@stf.dk">sek@stf.dk</a></p>
        </address>
        <h3>Contact regarding data protection</h3>
        <p>
          If you have any questions about our processing of your information,
          please feel free to contact us. You can write to us at
          <a mailto="sek@stf.dk">sek@stf.dk</a>. Remember that regular e-mails
          are not secure communications. Therefore, refrain from mentioning
          anything in your e-mail that is private or sensitive and that you
          believe should be protected.
        </p>
        <h3 class="sectionTitle">Your rights</h3>
        <ul>
          <li>You have the right to access your personal data</li>
          <li>
            You have the right to have inaccurate personal data corrected or
            deleted
          </li>
          <li>
            You have the right to object to our processing of your personal data
          </li>
          <li>
            You have the right to have our processing of your personal data
            restricted
          </li>
          <li>You have the right to withdraw your consent</li>
        </ul>
        <h3 class="sectionTitle">
          Complaint to the Danish Data Protection Authority
        </h3>
        <p class="sectionText">
          You have the right to lodge a complaint with the Danish Data
          Protection Authority if you are dissatisfied with the way we process
          your personal data. You will find the Data Protection Authority's
          contact information at www.datatilsynet.dk.
        </p>
      </aside>
    </article>
  </div>
</template>
<style scoped>
.privacy {
  margin: 50px 250px;
}

ul {
  margin: 20px 50px;
}

.flex {
  display: grid;
  grid-template-columns: 1fr 400px;
  grid-template-rows: 1fr;
}
main {
  grid-column: 1/2;
  grid-row: 1/2;
  padding: 0 50px 50px 0;
}
aside {
  grid-column: 2/3;
  grid-row: 1/2;
  padding: 20px;
  box-sizing: border-box;
  background-color: var(--green50);
}

h3{
  margin: 40px 0 0 0;
}
</style>
