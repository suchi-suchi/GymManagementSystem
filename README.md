## Golds Gym 


## Tech stack
REACTJS, BOOTSTRAP, NODEJS, EXPRESSJS, MONGODB

## Design Choices:

### Why NoSQL in a database?

- We chose NoSQL over a relational architecture because of its own access languages for interpreting data being stored.
- It offers a developer-centric database, which simplifies database design and access to application programming interfaces.
- Before employing databases, developers do not need to be concerned about their internal workings.
- NoSQL databases allow you to work on what you need rather than pushing a schema on the database.

### Why is MongoDB used?

- MongoDB allows different data hierarchies. - Secondary indexes provide for flexibility in datamodel.
- Because Mongo DB is schemaless, we do not define the schema at the outset.

### Why MERN Stack - Performance and User Interface Rendering

- React JS is the best when it comes to UI layer abstraction. Because React is only a library, you may build the application and structure the code anyway you like. As a consequence, in terms of UI rendering and performance, it exceeds Angular.
- Cost-effective
  Because MERN Stack uses only one language throughout, Javascript, a firm will benefit from hiring only Javascript experts rather than specialists for each technology. This choice will save you both time and money.
- Open Source and Free
  MERN employs only open-source technology. This feature allows a developer to use open sources to find answers to challenges that may emerge during development.

## XP Core Values Maintained by Team
- Simplicity
We made sure to include just the most straightforward solutions that worked. In order for everyone on the team to understand the code and make changes in the future, if necessary, we made it modular and reusable. As much as possible, we have reduced code smells and included pertinent comments to our code. Our code base is straightforward, making maintenance simple.

- Feedback
We were able to learn, adjust to the adjustments, and prevent repeating mistakes by providing and receiving regular feedback. This encouraged us to work more effectively. We made pull requests and submitted our changes to a branch during the development stage. We pushed the changes to the master branch after another team member gave the code their seal of approval. We ensured that any modifications to the master branch of the code were always stable and did not affect the code of the other team members. We were able to unify our objectives and duties thanks to ongoing feedback.

- Communication
Our team had good communication throughout the project. We brainstormed the idea of the project initially and divided the tasks among ourselves. We had frequent sprint meetings where we used to dicuss the issues faced by team members and retrospected what did not go well.
## Architecture Diagram

![Screen Shot 2022-12-01 at 11.50.50 AM](https://i.imgur.com/kj1Upix.png)

## Component Diagram

![WhatsApp Image 2023-05-12 at 5 15 23 PM](https://github.com/gopinathsjsu/team-project-ysmp/assets/127645297/6bfe60b6-0506-4a16-8115-85a2a38f9752)


## Deployment Diagram

![Deployment](https://i.imgur.com/A4qXnH5.png)


# Feature set

### Homepage

- should display the homepage with the information about the gym, available memberships and class types.
- should display login page on clicking login button
- should display register page on clicking the register button

### Non Member View

- should display screen with information to enroll for membership 

### Member View

- should be able to view  list of his class schedule for the next week.
- should be able to view his activities in the given time frame with respective to class and machine in terms of time spent and calories burnt.
- should be able to book available class in specific location from the list.
- should be able to log hours for the activity done the specific machine by giving start and end time.

### Signin - Member

- Member upon filling details should be able to sign in
- Member are redirect to my classes page on successful login
- should display error in case of wrong credentiials.

### Admin

- should be able to login successfully.
- should be able to enroll new users.
- should be able to check In / check Out specific user.
- should be able to give free trials to the users.
- should be able to view analytics dashboard

### Analytics Dashboard
 -  dashboard to display pie chart for number of members enrolled in specific location.
 -  dashboard to display hours spent in gym in specific location for time frame of week and 30 days.
 -  dashboard to display number of visitors for the gym on the specific day and location.

## UI Wireframes
![First Page-wf](https://github.com/gopinathsjsu/team-project-ysmp/assets/127645297/78d341a5-9d2e-48fd-bb39-1b17d913393c)
![Register-wf](https://github.com/gopinathsjsu/team-project-ysmp/assets/127645297/401eca30-e63d-4cc6-8c82-ea7364798154)
![Homepage-wf](https://github.com/gopinathsjsu/team-project-ysmp/assets/127645297/309d0779-ab85-4adb-9210-94661272dd87)
![Non-Member page](https://github.com/gopinathsjsu/team-project-ysmp/assets/127645297/9fde0052-3adf-4782-a3f7-935cae59364c)
![Member page(Myclasses)](https://github.com/gopinathsjsu/team-project-ysmp/assets/127645297/9449ec52-ed81-4030-86a0-91c330582dfa)
![Member Page(view activities)](https://github.com/gopinathsjsu/team-project-ysmp/assets/127645297/02b218b8-a8fb-4246-818f-13f71bce1187)
![member_loghours](https://github.com/gopinathsjsu/team-project-ysmp/assets/127645297/70610b9c-d073-40fc-9666-c35b2071fa3f)
![Member page(Book class)](https://github.com/gopinathsjsu/team-project-ysmp/assets/127645297/b1a91c0b-e421-41cb-8ea3-5c67a4d64dd3) 
![admin_checkin](https://github.com/gopinathsjsu/team-project-ysmp/assets/127645297/58b0aa0b-2f9e-4469-a2ec-3f5572b01995)
![admin_enrollusers](https://github.com/gopinathsjsu/team-project-ysmp/assets/127645297/29e85051-5db0-42e0-9852-6700f5cb8770)
![admin_freetrials](https://github.com/gopinathsjsu/team-project-ysmp/assets/127645297/5edae2ec-4dd2-496b-987e-d2f5334666dd)
![dashboard-1](https://github.com/gopinathsjsu/team-project-ysmp/assets/127645297/3a7cdb91-5260-49b1-b41a-13640dced5f5)
![dashboard-2](https://github.com/gopinathsjsu/team-project-ysmp/assets/127645297/0e035314-dd21-46f7-b96a-802a211e9f78)
![dashboard-3](https://github.com/gopinathsjsu/team-project-ysmp/assets/127645297/3bacd3b1-d4f8-4e4d-878d-f934d0381df5)

## Sprint BurnDown Chart
[Sprint BurnDown Chart](https://docs.google.com/spreadsheets/d/1u7J8boGu-aP9X6Baam-sD7kROVv2e1EMXlD0hC_OBE8/edit#gid=303579835)

## Project Journal
[Project Journal](https://docs.google.com/document/d/1SsX60HI1k-GzTQF-vC-i6G2Ip5XlY6zxNvhu_C6i96U/edit#heading=h.vi6tyc9zp40a)

## Steps to run the application

1. git clone [repo](https://github.com/gopinathsjsu/team-project-ysmp.git)
2. Install dependencies for both frontend and backend npm install `npm install`
3. Run backend - `npm run Devstart`
   Run frontend - `npm run start`

