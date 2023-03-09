# Inspiration
We understand that keeping up with the fast pace of lectures can be challenging for many students, and identifying the most important information can be even more difficult. To tackle this issue, we sought to leverage advanced technologies to summarize lecture recordings or notes provided by professors. In addition, our close friend with learning disabilities inspired us to create a study tool that could be more accessible and effective than traditional methods. That's how EyeSpeak was born - a web application that uses speech-to-text and image-to-text conversion APIs to convert audio and PDF/Slides to well-formatted text, allowing students to create notes and cheat sheets to prepare for exams or for students with hearing impairments.

# What it does
Our web application integrates with Google Cloud Services, allowing us to leverage their powerful speech-to-text and image-to-text conversion APIs to deliver accurate and reliable results to our users. The integration with Firebase also provides secure and easy-to-use authentication, ensuring that user data is always protected. By utilizing these advanced technologies, we are able to provide students with a more accessible and effective way to study. We further integrate a "Finding Buddy" feature that allows students to swipe through with all the students registered in EyeSpeak to find potential study buddies.

# How we built it
We developed a sleek and user-friendly front-end interface using React.js, enabling users to easily input audio files and PDFs. We also incorporated Google Cloud's powerful Speech-to-Text API, along with Firebase, to create a seamless and efficient user experience. We deployed the our React application (Frontend) using Google Cloud App Engine and deployed the Flask application (Backend) to Heroku.

# Challenges we ran into
1) Integrating the Google Cloud Services was a challenging task because the documentation was difficult to understand, especially without prior experience working with these technologies. There were certain limitations imposed by the services such as file size limitations being on the free plan.

2) Flask may appear straightforward at first glance but it can be a complex and nuanced framework that doesn't always behave as expected.

3) A steep learning curve while working with the React framework and integrating it with other technologies.

# Accomplishments that we're proud of
Our web application's ability to convert speech to text and images to text has real-world applications in helping students study more effectively. Additionally, knowing other students with learning disabilities, we are confident that this web application would allow for new educational growth and success opportunities throughout their time at Rutgers.

# What we learned
We learned firsthand the challenges of working with complex API's and SDK's such as the ones offered by Google Cloud Services. Despite these difficulties, we persevered and gained valuable experience and knowledge in integrating these technologies into our project.

# What's next for EyeSpeak
We hope to come up with a chrome extension that can be utilized within Learning Management Systems such as Canvas. Additionally, the incorporation of an on-the-go creation of flashcards of important points that are summarised are in the works to come up with efficient learning amongst students. Further, we would like to integrate the matching with other students similar to dating apps.

# Overview of Project Files

This repository contains the source code for EyeSpeak, a web application that leverages advanced technologies to convert audio to text and PDF/Slides to well-formatted text for students with diverse needs. The following files are included in this repository:

### Account.js

This file contains the source code for the account management functionality of the EyeSpeak web application.

### Buddies.js

This file contains the source code for the buddies management functionality of the EyeSpeak web application.

### DragFiles.js

This file contains the source code for the drag and drop functionality of the EyeSpeak web application.

### DragandDrop.js

This file contains the source code for the drag and drop functionality of the EyeSpeak web application.

### FileUploadAudio.js

This file contains the source code for the audio file upload functionality of the EyeSpeak web application.

### FileUploadPDF.js

This file contains the source code for the PDF file upload functionality of the EyeSpeak web application.

### Login.js

This file contains the source code for the login functionality of the EyeSpeak web application.

### Register.js

This file contains the source code for the user registration functionality of the EyeSpeak web application.
