# fe-sei7-capstone-membership-portal
Front End SEI7 Capstone Project Membership-Portal

<img src="https://i.imgur.com/NQXEQci.png">
<img = src="https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png"> 

# Project #4: Capstone

## Overview

**Before you start working** on the planning for your project, be sure to review your idea with an instructor to ensure that it both:

- **Meets the minimum requirements**, and
- **Is reasonably scoped**

## Attendance
We expect you to be working on your project from at least 9 AM - 5 PM during class days and be available during that time for TA hours or any meetings with instructors as needed.  

_Failure to make an attendance check will result in an unexcused absence for both morning and afternoon for that day_.

## Project Requirements

### Planning Requirements

This project is your capstone! It should be an exhibition of every skill and ability you have gained in the course that you wish to highlight!


### Teams

Your team size may range from 1 individual to up to 5 members. The more people on the projet the greater the expectations.

#### Project Board

This project requires **planning** organized within a **Trello, Github Project, or Jira board** with the following **lists**:

☐ **Icebox (or backlog)**: Holds user stories or tasks that have yet to be moved to the _Current/MVP_ list. All user stories are originally put into the _Icebox_, including both MVP and wish list stories. 

☐ **Current/MVP**: Holds user stories or tasks that must be completed to meet the minimum project requirements (MVP). Once the MVP has been met, additional user stories may be moved to this list from the _Icebox_.

☐ **In Progress**: Holds user stories or tasks actively being worked on.

☐ **Completed**: Holds completed user stories. 

> Important: User stories need to be formed properly using this template:<br>`As a <role>, I want <feature> so that <reason>`.<br>The _reason_ is optional if it's patently obvious.

#### Additional Planning Documents

☐ **Wireframes**: Sketches of each screens's user interface for the major functionality of the application.

☐ **Entity-Relationship-Diagram (ERD)**: A diagram of the app's models (one per data entity) and the relationships between them.

> Please reach out to your instructional team if you have questions regarding user stories, the data model, etc.

### Presentation Requirements

You will have 10 minutes to present and demonstrate the following:

1. Introduce your project by paraphrasing its README.

2. Demonstrate the application's authentication features by signing up a new user, logging out that user, then logging in with your preferred user.

3. Demonstrate your app's main features.

4. Share/discuss your project's architecture.

5. Share the experience by answering the following:

	- What was your biggest challenge?
	- What are your key learnings/takeaways?

Following your presentation, there may be a brief Q & A period and optional instructor feedback.

### Version Control Requirements

☐ The repo is to contain **frequent commits** (**at least** 1 per class day) dated from the beginning of the project through its completion. **Do not** "start over" by replacing the repository with a different one.

☐ You MUST be using git feature branches with pull requests to combine team code (note - Pull requests are NOT required for 1-person teams)

☐ There must also be appropriate updates in the project board every day for **EACH** team member.

### README Requirements

Don't underestimate the value of a well crafted `README.md`.

The `README.md` introduces your project to prospective employers and forms their first impression of your work!

> Note: Do not include project planning (user stories, wireframes or ERDs) in the `README.md`.

Include the following sections within the **`README.md`**:

☐ **App Title:** Contains a description of what the app does and optional background info.
  
☐ **Screenshot(s):** A screenshot of your app's landing page and any other screenshots of interest.
  
☐ **Technologies Used**: List of the technologies used.
  
☐ **Next Steps**: Planned future enhancements (icebox items).
  
### Technical Requirements

☐ Incorporate the technologies of the **MERN-stack** or **Python**:

- MongoDB/Mongoose OR PostgreSQL
- Node / Express OR Python back-end
- React

☐ **Have a well-styled interactive front-end**.

☐ Communicates with the backend via AJAX.

☐ Implement **authentication**.  Including the ability of a user to sign-up, log in & log out.

☐ Implement **authorization** by restricting CUD data functionality to authenticated users at a MINIMUM. Also, navigation should respond to the login status of the user.


## Suggestions to Get Started

- Don’t get too caught up in too many awesome features – simple is better. Favor fewer features that look/feel impressive over numerous clunky/sloppy features.

- Implement the "As a visitor, when I browse to the app, I want..." user story first.

- Follow the steps we've done in class to implement features, beginning with the user's interaction and code the flow from client -> server -> client. 

- Read the docs for whatever technologies / frameworks / API’s you use.

## Best Practices

- **Make AJAX calls** from "API" modules, not components. Export application/business logic from "service" modules.

- **Be consistent** with your code style.

- **Clearly name variables and functions** - remember, variables are usually named as **nouns** and functions as **verbs**.

- **Write well-formatted JS & CSS.** Properly formatting your code makes it more readable. Improperly formatted code infers sloppiness.

- **Comment your code where it makes sense to do so**. Most code is self-documenting (don't comment the obvious), however, use comments to explain complicated code.



### Rubric

Maximum Points: 26
Passing: 18

#### Project Planning (Pass/Fail)
* Each team member must have at least one commit per class-day during project week
* Feature branches and pull requests must be used for all teams greater than a single individual
#### Database Planning
* 1pt: Database shows evidence of planning for each model
* 2pt: ERD model is included in the projet documentation
* 3pt: There is minimal duplication of data. Efficient choices have been made in how collections relate vs. sub-documents. Data integrity is assured.

#### CRUD Functionality
* 1pt: Read functionality is present, others missing/broken
* 2pt: Read and Create fully functional, Update may not work properly
* 3pt: All methods are working perfectly

#### Code Structure (Back-End)
* 1pt: Code mostly works but is not well organized. MVC not present.
* 2pt: Pseudo-code and/or comments present throughout.
* 3pt: Code is well organized and commented. If MVC is used, it has been fully implemented.
* 4pt: All errors thrown are caught, handled, and a relevant user message is displayed.

#### Code Structure (Front-End)
* 1pt: Code mostly works but is not well organized. There are NO console errors present.
* 2pt: Pseudo-code and/or comments present throughout. There is clear separation between components and utilities.
* 3pt: Code follows DRY and shows deliberate planning and attention to detail.
* 4pt: All errors thrown are caught, handled, and a relevant user message is displayed.

#### Routes and Responses (BOTH Front-end and back end)
* 1pt: Routes exist and work. 
* 2pt: The routes are well-organized in terms of path AND code.
* 3pt: If a user action fails, the route (or controller) displays a relevant user-facing error.

#### Layout & Styling
* 0pt: Minimal to no layout done.
* 1pt: Layout is basic but does not show much deliberate intent. A framework was used but has had zero additional CSS used. Site is partially responsive.
* 2pt: Layout show deliberate action and site is fully responsive.
* 3px: Layout and visual styling is polished and **consistent** across the project

#### Login & Authorization
* 1pt: User login has been implemented
* 2pt: Basic authorization is implemented
* 3pt: Authorization is more sophisticated than a simple admin/non-admin user OR additional functionality of login is implemented (such as password recovery or brute-force protection)

#### Readme
* 1pt: Readme.md exists
* 2pt: Readme exists and has basic instructions on how to run the project.
* 3pt: Readme has introduction of the project, technologies used, how to run the project, and a set of user stories.

