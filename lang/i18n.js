import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";


i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // Navbar
          "Projects": "Projects",
          "About": "About",
          "Contact": "Contact",
          "Resume": "Resume",
          "Scroll": "Scroll Down",

          // Hero
          "heroIntroduction": "Hi, I'm Nour-Eddine Benkerroum.",
            "sequenceDeveloper": "Full-Stack Developer, previously an IT Project Manager for 5 years.",
            "sequenceEducation": "Holding degrees in Web & Mobile App Development and Project Management.",
            "sequenceAdapt": "Continuously learning and evolving with every new challenge.",
            "sequenceThinker": "A problem-solver who enjoys unraveling complexity.",
            "sequenceGeek": "Just a genuine tech enthusiast at heart. Yep!",
            "sequenceHangOn": "Hang on...",
            "sequenceMoreThanCode": "I'm more than just code and debug logs.",
            "sequenceCheckProjects": "Maybe it's time to check out my projects below?",
            "sequenceWorthScroll": "Trust me, they're worth a scroll !",
            "sequenceStillHere": "Still here, huh?",
            "sequenceCaughtInterest": "I must've caught your interest.",
            "sequenceLoopTime": "Well, it's loop time again...",
            "sequenceReachOut": "Why not reach out? Let's create something great together!",
            "sequenceCatchYou": "Catch you on the flip side! :)",

          // About
          "aboutTitle": "About Me",
          "aboutMePart1": "Hello! My name is <0>Nour-Eddine Benkerroum</0>. With a deep-seated curiosity and a fervent passion for the digital world, I've fully embarked on a journey as a full-stack developer. My previous experience in IT project management, within an international landscape, honed my leadership and communication skills—assets I'm now eager to apply in the dynamic realm of software development.",
          "aboutMePart2": "My pivot to full-stack development was driven by a desire to tackle new challenges and a commitment to innovation. My training equipped me with a robust command of technologies such as Ruby on Rails, JavaScript, React, HTML, and CSS. This journey didn't just arm me with technical skills but also integrated me into a vibrant and supportive community.",
          "aboutMePart3": "Building on my experience as an IT project manager, where I successfully led complex IT system migration programs, I am well-prepared to handle significant software development projects. I have a keen interest in deepening my expertise within the JavaScript ecosystem, focusing on React, TypeScript, Node.js, and beyond. Full-stack development is not just a career path for me; it's a passion I am eager to explore and expand further.",
          "technosentence" : "I am now confident in my use of the following technologies:",

          // Projects
          "projectTitle2ndRound": "2ndRound",
            "projectDescription2ndRound": "SecondRound revolutionizes the pre-owned video game market with a mobile web app born from a 10-day development challenge, streamlining the trade for sellers and gamers alike.",
          "projectTitleKoalapp": "Koalapp",
            "projectDescriptionKoalapp": "Visit stackkoala.online to explore Koalapp: Dynamic, personalized news articles. Articles are fetched from the News API and modified with AI to be more personalized.",
          "projectTitleArc": "Arc",
            "projectDescriptionArc": "Explore unique stays with Arc, your go-to for easy hotel bookings in France, crafted in a 24-hour coding sprint.",
          "projectTitleRental": "Rental",
            "projectDescriptionRental": "Explore Rental on stackrental.online: Easy, intuitive car rentals from sedans to SUVs, designed for a seamless online journey.",

          //Footer

          "contact": "Get In Touch",
          "sendEmail": "Send Email",
        }
      },
      fr: {
        translation: {
          // Navbar
          "Projects": "Projets",
          "About": "À Propos",
          "Contact": "Contact",
          "Resume": "CV",
          "Scroll": "Faites défiler vers le bas",

          // Hero
          "heroIntroduction": "Salut, je suis Nour-Eddine Benkerroum.",
            "sequenceDeveloper": "Développeur Full-Stack, auparavant chef de projet IT pendant 5 ans.",
            "sequenceEducation": "Titulaire de diplômes en Développement d'Applications Web & Mobile et en Gestion de Projets.",
            "sequenceAdapt": "Toujours en apprentissage et évolution face à chaque nouveau défi.",
            "sequenceThinker": "Un résolveur de problèmes qui aime démêler la complexité.",
            "sequenceGeek": "Simplement un passionné de technologie dans l'âme. Et oui !",
            "sequenceHangOn": "Attendez...",
            "sequenceMoreThanCode": "Je suis bien plus que du code et des logs de débogage.",
            "sequenceCheckProjects": "Peut-être est-il temps de jeter un œil à mes projets ci-dessous ?",
            "sequenceWorthScroll": "Croyez-moi, ça vaut le détour !",
            "sequenceStillHere": "Toujours là, hein ?",
            "sequenceCaughtInterest": "Je dois avoir capté votre intérêt.",
            "sequenceLoopTime": "Eh bien, c'est reparti pour un tour...",
            "sequenceReachOut": "Et si vous preniez contact ? Créons quelque chose de grand ensemble !",
            "sequenceCatchYou": "À la prochaine ! :)",

          // Projects
          "projectTitle2ndRound": "2ndRound",
             "projectDescription2ndRound": "SecondRound révolutionne le marché du jeu vidéo d'occasion avec une application web mobile, fruit d'un challenge de développement de 10 jours, simplifiant les échanges pour vendeurs et joueurs.",
          "projectTitleKoalapp": "Koalapp",
            "projectDescriptionKoalapp": "Visitez stackkoala.online pour explorer Koalapp : des articles provenant d'un appel API vers News API et personnalisés par l'IA. Créée en un sprint de codage de 24 heures.",
          "projectTitleArc": "Arc",
            "projectDescriptionArc": "Explorez des séjours uniques avec Arc, votre solution facile pour réserver des hôtels en France, créée en un sprint de codage de 24 heures.",
          "projectTitleRental": "Rental",
            "projectDescriptionRental": "Explorez Rental sur stackrental.online : des locations de voitures intuitives et faciles, des berlines aux SUV, conçues pour un parcours en ligne sans accroc. Créée en un sprint de codage de 24 heures.",


          // About
          "aboutTitle": "À Propos",
          "aboutMePart1": "Bonjour ! Je m'appelle <0>Nour-Eddine Benkerroum</0>. Avec une curiosité profonde et une passion fervente pour le monde numérique, je me suis pleinement lancé dans un voyage en tant que développeur full-stack. Mon expérience antérieure en gestion de projets IT, dans un contexte international, a aiguisé mes compétences en leadership et en communication - des atouts que je suis maintenant impatient d'appliquer dans le domaine dynamique du développement logiciel.",
          "aboutMePart2": "Mon pivot vers le développement full-stack a été motivé par le désir de relever de nouveaux défis et un engagement envers l'innovation. Ma formation m'a équipé d'une maîtrise solide de technologies telles que Ruby on Rails, JavaScript, React, HTML et CSS. Ce voyage ne m'a pas seulement armé de compétences techniques, mais m'a également intégré dans une communauté dynamique et solidaire.",
          "aboutMePart3": "Fort de mon expérience en tant que chef de projet IT, où j'ai réussi à diriger des programmes de migration de systèmes informatiques complexes, je suis bien préparé à gérer d'importants projets de développement logiciel. Je suis très intéressé à approfondir mon expertise dans l'écosystème JavaScript, en me concentrant sur React, TypeScript, Node.js et au-delà. Le développement full-stack n'est pas juste une voie professionnelle pour moi ; c'est une passion que je suis impatient d'explorer et d'élargir davantage.",
          "technosentence" : "Je suis maintenant confiant dans l'utilisation des technologies suivantes :",




          //Footer
          "contact": "Contactez-moi",
          "sendEmail": "Envoyer un Email",
        }
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
