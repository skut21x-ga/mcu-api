# MCU API

## Express Based API of a Dataset of Marvel Cinematic Universe Characters

#### Installed:

- Mongoose
- Node-Fetch
- Body-Parser
- Express

#

#### How to Run:

1. Run 'npm install' in root folder
2. Run "node seed.js" in lib/db folder
3. Run "node index.js" in lib folder
   (this will start the server listening on port 3000)

#

#### Routes Utilized:

- GET ("/") for all characters
- GET ("/name/:name") to search by Full Name
- GET ("/category/:category" to search by category
- GET ("/species/:species" to search by species
- GET ("/affiliation/:affiliation" to search by affiliation
- POST ("/") to create a new character
- PUT ("/name/:name") to search for a character by full name and edit that character
- DELETE ("/name/:name") to search for a character by full name and delete that character

#

#### Available Parameters:

- Real Name (ie. "Stephen Vincent Strange", "Matthew Michael Murdock")
- Category (ie "Hero", "Villain"),

- Species (ie. "Human", "Inhuman"),
- Affiliation (ie. "S.H.I.E.L.D.", "HYDRA")

#

#

#

#### Resources Used

##### Kaggle's MCU Characters CSV from: https://www.kaggle.com/apriandito/mcu-characters

##### Original dataset from Kamis Data Program - R Indonesia: https://github.com/indo-r/kamisdata. All characters are owned and copywrite by Marvel.

##### Utilized a CSV to JSON converter to convert to JSON from the Kaggle CSV dataset: https://csvjson.com/csv2json
