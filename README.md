![](https://www.coindesk.com/wp-content/themes/coindesk2/images/events/consensus-2015/sponsors-and-partners/general-assembly.png)
# WDI Final Project: MERN Stack SPA

#Heroku Link
[https://infinite-scrubland-67453.herokuapp.com/](Dr.Webber)

## Introduction

In the final week of the Web Development Immersive course at General Assembly London, I built a Single Page Application (SPA) using the MERN stack (Mongo, Express, React and Node). 'Dr. Webber' is an AI powered GP that I have built using the Infermedica API. Users initially complete a set of prescreener questions, followed by a consultation with Dr. Webber. During the consultation, Dr. Webber asks targetted, non-evasive questions about the patient's symptoms. At the end of the consultation, he will provide further information about his  patient diagnosis, along with his certainty (expressed as a percentage) and further information about the probable condition including the severity and next steps.

## Libraries / external packages / APIs used

* The **Infermedica API** for medical data including the consultation and diagnosis. The site is powered by Infermedica's API (including Infermedica's AI engine)
* The **WikiMedia API** which also powers Wikipedia for showing further information about a patient's condition
* **Facebook Connect** to display Like / Sharing buttons on the homepage
* **react-scroll-to-component** to achieve the scrolling transition whereby the click of a button results in the app scrolling to the appropriate component in the DOM
* **Axios** for making API calls (as an alternative to fetch)
* **react-icons-kit** for using icons such as the gender icons (from the icomoon icon set)
* **react-rangeslider** for the sliding age selector widget
* **react-google-charts** specifically google's geoChart product for the purpose of displaying a clickable world map so that the user can select their country of residence and countries travelled to over the past 12 months
* **react-select** for the symptom finder input field in the prescreener. This react-select input field pulls in selectable symptom options (symptoms recognised by the Infermedica API) from my mongo database and filters symptoms with each key stroke (using show as you type / autocomplete)
* **html2canvas** and **jsPDF** for the pdf download functionality available on the DisplayCondition component (the final output which shows Dr. Webber's diagnosis). These two packages are used together. **html2canvas** takes the rendered page and creates a canvas (a screenshot) and then feeds this into **jsPDF** to create the PDF document

# Architecture

![TechArch](/screenshots/TechArch.jpg)

# Screenshots

![Screenshot1](/screenshots/Screenshot1.png)
![Screenshot2](/screenshots/Screenshot2.png)
![Screenshot3](/screenshots/Screenshot3.png)
![Screenshot4](/screenshots/Screenshot4.png)
![Screenshot5](/screenshots/Screenshot5.png)
![Screenshot6](/screenshots/Screenshot6.png)
![Screenshot7](/screenshots/Screenshot7.png)
![Screenshot8](/screenshots/Screenshot8.png)

# Techniques used

Being a medical site, I wanted to ensure the UI was intuitive, simple and inviting. I achieved this with a non-sterile colour palete, smooth transitions and a clean / un-cluttered UI which has an overall calming effect for the user. Important given the user is probably unwell. 

I built the experience as a true Single Page Application (SPA). I designed it this way as the nature of the user flow is sequential: a patient needs to confirm the prescreener information which is a pre-requisite for the Infermedica API before a consultation can begin. I accomplished this by showing/hiding and scrolling to individual components rendered in the DOM. Each DOM node (component) is rendered into view at the appropriate time. There is a try again button on the final screen which enables the user to go back up to the top in order to restart. `scrollToComponent` scrolls the screen back up to the `Home` component and `ReactDOM.unmountComponentAtNode()` umounts the `app` component from the ReactDOM, followed by a re-render of the `App` component in the ReactDOM:

```js
scollToComponent(element, {
   offset: 0,
   align: 'middle',
   duration: 1500
 });

if (element.id === 'Home' && this.state.should_stop){
      ReactDOM.unmountComponentAtNode(document.getElementById('app'));
      ReactDOM.render(
        <App />,
        document.getElementById('app')
      );
    }
``` 

All calls to the Infermedica API were proxied via my Node/Express backend in order to protect the API keys (I used request-promise on the backend in order to make proxy requests).

# What went well

* The Infermedica API was very well documented. Initially, I drew out sequence diagrams on paper to understand the sequence of calls visually
* Initially I had three-levels of components as I decided to have a single component which would broker each of the sub-components for the prescreener. I rewrote this in the end as I decided that it wasn't the best implementation: it was far cleaner to manage the state in the app rather than to pass the prescreneer state to the App component on completion
* Building the backend first and testing each of the routes individually to ensure that they weren't buggy!
* Reading React docs when attempting to implement functionality that I haven't written before e.g. `unmountComponentAtNode` mentioned above
* Generally: using React! Absolutely love it!
* The React plugin for Chrome: I found myself using this a lot to check what the DOM looked like at any one point in time and also the state and props

# Challenges

* Using Google GeoCharts was a challenge. I chose GeoCharts as I felt that it would be quite straight forward to implement given the volume of documentation and the fact that it comes from Google. What I found in the end was that the documentation was confusing in parts and some things didn't make sense e.g. only being able to specify two colums for the data at most
* My initial implementation of the SPA was flawed as not all components were initially loaded in the DOM so the scrollToComponent function didn't know where to scroll to - as the DOM node didn't exist! Fixed this shortly after realising that was the case!
* Deciding which styling technique to follow. I looked into styled components, inline styling and also using scss and decided to go down the scss route albeit with one scss file per component imported into each component individually. I did this to keep the components uncluttered as some of them were already very complex with lots of code in them

# Final thoughts

I had a lot of fun building this project! The Infermedica API is powerful: i'm glad I came across it when planning the project. A personal win for me was being able to build this site in just over a week having learnt React for a relatively short space of time. I now have an appreciation of what industry leaders are saying about React: it makes you a better javascript developer. I found myself using `Object.assign()` and the `map()` method a lot more due to immutability which I probably wouldn't initially think to use otherwise


