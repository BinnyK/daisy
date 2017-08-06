# Seasonal Picks
![Heroku Demo](https://seasonalpicks.herokuapp.com/)

- A tool for searching and filtering through flowers by seasonal availability.

------
### Project Brief

- Design, build deploy an application for a client.

------
### Client

My client is a florist who specialises in weddings.
------
### Client communication

- Walking through the journey of a wedding from start to finish.
  - Initial contact through email/instagram
  - Phone call to discuss client needs
  - In-person meeting to discuss inspirations, designs, colours, themes, flowers etc
  - Planning and organisation
  - Purchasing flowers from the markets leading up to the wedding.
  - Wedding day bouquet and flowers.
- Discuss problems and pain points
- Possible solutions
- Requirements gathering

------
### Pain points

- Knowing when different flowers are in season
  - many websites listing available seasons are hard to navigate
  - inconsistent information from different websites (due to different regions)
  - heavily relied on memory and remembering when certain flowers were in season

------
### Solution

- A collection of flowers that could be searched and filtered by months available.
------
### Application Design

- Keep things extremely simple and ready for the client to use
- As this project was for a single client, it didn't need a database, login system or authentication.

#### User Stories

- As a florist, I can see a list of flowers and their availabilities.
- As a florist, I can search for the flower that I want.
- As a florist, I can select different months to see which flowers are available in those months.

#### Entity Relationship Diagram

All data was kept in a single js file to keep things simple. This meant the client didn't need to pay for backend hosting or a database. All flowers were kept in a single js file.

![ERD](/public/readme/ERD.png?raw=true)

------
### Screenshots
App

![Main](/public/readme/main.png?raw=true)

------
### Next Steps

- Backend system to store flowers
- Login system for client to be able to add, edit and delete flowers
- Availability based on region (currently information only from Australian sites)
